'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Search, Loader2 } from 'lucide-react';

interface Prediction {
  place_id: string;
  description: string;
  main_text: string;
  secondary_text: string;
}

interface PlaceDetails {
  formatted_address: string;
  lat: number;
  lng: number;
  city: string;
  state: string;
  postalCode: string;
}

interface AddressInputProps {
  onAddressSelect: (address: string, lat: number, lng: number, placeDetails: PlaceDetails) => void;
  isLoading?: boolean;
}

export function AddressInput({ onAddressSelect, isLoading = false }: AddressInputProps) {
  const [address, setAddress] = useState('');
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isGeocodingAddress, setIsGeocodingAddress] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [selectedPlaceDetails, setSelectedPlaceDetails] = useState<PlaceDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const fetchPredictions = async (input: string) => {
    if (input.length < 3) {
      setPredictions([]);
      return;
    }

    setIsSearching(true);
    setError(null);
    try {
      const res = await fetch(`/api/places-autocomplete?input=${encodeURIComponent(input)}`);
      const data = await res.json();
      if (data.error) {
        setError('Address suggestions unavailable. Type your full address and click Get Estimate.');
        setPredictions([]);
      } else {
        setPredictions(data.predictions || []);
        setShowDropdown(true);
      }
    } catch {
      console.error('Autocomplete error');
      setError('Address suggestions unavailable. Type your full address and click Get Estimate.');
      setPredictions([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAddress(value);
    setSelectedIndex(-1);
    setSelectedPlaceDetails(null);
    setError(null);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      fetchPredictions(value);
    }, 300);
  };

  const handleSelect = async (prediction: Prediction) => {
    setAddress(prediction.description);
    setShowDropdown(false);
    setPredictions([]);
    setError(null);

    try {
      const res = await fetch(`/api/places-details?place_id=${encodeURIComponent(prediction.place_id)}`);
      const details: PlaceDetails = await res.json();

      if (details.lat && details.lng) {
        setSelectedPlaceDetails(details);
        onAddressSelect(details.formatted_address, details.lat, details.lng, details);
      } else {
        setError('Could not get location details. Please try clicking Get Estimate.');
      }
    } catch {
      setError('Could not get location details. Please try clicking Get Estimate.');
    }
  };

  const handleButtonClick = async () => {
    if (!address.trim()) return;

    if (selectedPlaceDetails) {
      onAddressSelect(
        selectedPlaceDetails.formatted_address,
        selectedPlaceDetails.lat,
        selectedPlaceDetails.lng,
        selectedPlaceDetails
      );
      return;
    }

    setIsGeocodingAddress(true);
    setError(null);
    try {
      const res = await fetch(`/api/geocode?address=${encodeURIComponent(address)}`);
      const data = await res.json();

      if (data.lat && data.lng) {
        const details: PlaceDetails = {
          formatted_address: data.formatted_address || address,
          lat: data.lat,
          lng: data.lng,
          city: data.city || '',
          state: data.state || '',
          postalCode: data.postalCode || '',
        };
        setSelectedPlaceDetails(details);
        onAddressSelect(details.formatted_address, details.lat, details.lng, details);
      } else {
        setError('Could not find that address. Please enter a valid Charlotte area address.');
      }
    } catch {
      setError('Could not find that address. Please check the address and try again.');
    } finally {
      setIsGeocodingAddress(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (showDropdown && predictions.length > 0 && selectedIndex >= 0 && predictions[selectedIndex]) {
        handleSelect(predictions[selectedIndex]);
      } else if (address.trim()) {
        handleButtonClick();
      }
      return;
    }

    if (!showDropdown || predictions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex((prev) => (prev < predictions.length - 1 ? prev + 1 : prev));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Escape':
        setShowDropdown(false);
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="flex flex-col md:flex-row md:relative gap-3 md:gap-0">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={address}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => predictions.length > 0 && setShowDropdown(true)}
            placeholder="Enter your Charlotte home address..."
            disabled={isLoading}
            autoComplete="off"
            className="w-full pl-12 pr-4 md:pr-40 py-4 text-lg text-gray-900 border-2 border-gray-200 rounded-xl
                       focus:border-primary focus:ring-4 focus:ring-primary/10
                       disabled:bg-gray-50 disabled:cursor-not-allowed
                       transition-all duration-200 outline-none"
          />
          <div className="hidden md:flex absolute inset-y-0 right-0 pr-2 items-center">
            <button
              type="button"
              onClick={handleButtonClick}
              disabled={!address || isLoading || isGeocodingAddress}
              className="px-6 py-2.5 bg-secondary text-white font-semibold rounded-lg
                         hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed
                         transition-colors duration-200 flex items-center gap-2 cta-pulse"
            >
              {isLoading || isGeocodingAddress ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Loading...</span>
                </>
              ) : isSearching ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <Search className="h-4 w-4" />
                  <span>Get Estimate</span>
                </>
              )}
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          disabled={!address || isLoading || isGeocodingAddress}
          className="md:hidden w-full px-6 py-4 bg-secondary text-white font-semibold rounded-xl
                     hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed
                     transition-colors duration-200 flex items-center justify-center gap-2 text-lg cta-pulse"
        >
          {isLoading || isGeocodingAddress ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Loading...</span>
            </>
          ) : isSearching ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Searching...</span>
            </>
          ) : (
            <>
              <Search className="h-5 w-5" />
              <span>Get My Free Estimate</span>
            </>
          )}
        </button>
      </div>

      {showDropdown && predictions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
        >
          {predictions.map((prediction, index) => (
            <button
              key={prediction.place_id}
              type="button"
              onClick={() => handleSelect(prediction)}
              className={`w-full px-4 py-3 text-left flex items-start gap-3 transition-colors
                ${index === selectedIndex ? 'bg-primary/5' : 'hover:bg-gray-50'}
                ${index !== 0 ? 'border-t border-gray-100' : ''}`}
            >
              <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900">{prediction.main_text}</div>
                <div className="text-sm text-gray-500">{prediction.secondary_text}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {error ? (
        <p className="text-sm text-red-500 mt-2 text-center">{error}</p>
      ) : (
        <p className="text-sm text-gray-500 mt-2 text-center">
          Start typing your address and select from the dropdown
        </p>
      )}
    </div>
  );
}
