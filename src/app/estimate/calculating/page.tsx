'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FactCarousel } from '@/components/estimate/FactCarousel';
import { CalculationProgress } from '@/components/estimate/CalculationProgress';
import { LeadCaptureForm, LeadFormData } from '@/components/estimate/LeadCaptureForm';
import { SatellitePreview } from '@/components/estimate/SatellitePreview';
import { RoofEstimate } from '@/types';
import { MapPin, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function CalculatingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const address = searchParams.get('address') || '';
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  const [addressConfirmed, setAddressConfirmed] = useState(false);
  const [roofData, setRoofData] = useState<RoofEstimate | null>(null);
  const [apiComplete, setApiComplete] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [formData, setFormData] = useState<LeadFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch roof data after address is confirmed
  useEffect(() => {
    async function fetchData() {
      if (!lat || !lng || !addressConfirmed) {
        return;
      }

      try {
        const res = await fetch('/api/roof-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lat: parseFloat(lat),
            lng: parseFloat(lng),
          }),
        });

        if (!res.ok) {
          throw new Error('Failed to fetch roof data');
        }

        const data = await res.json();
        setRoofData(data);
        setApiComplete(true);
      } catch (error) {
        console.error('Failed to fetch roof data:', error);
        setApiError('Unable to analyze this property. Please try a different address.');
      }
    }

    fetchData();
  }, [lat, lng, addressConfirmed]);

  const handleAddressConfirm = () => {
    setAddressConfirmed(true);
  };

  const handleAddressReject = () => {
    router.push('/estimate');
  };

  async function handleFormSubmit(data: LeadFormData) {
    setFormData(data);

    if (apiComplete && roofData) {
      await submitAndRedirect(data, roofData);
    }
  }

  useEffect(() => {
    if (formData && apiComplete && roofData && !isSubmitting) {
      submitAndRedirect(formData, roofData);
    }
  }, [apiComplete, formData, roofData, isSubmitting]); // eslint-disable-line react-hooks/exhaustive-deps

  async function submitAndRedirect(data: LeadFormData, estimate: RoofEstimate) {
    setIsSubmitting(true);

    try {
      const addressDataStr = sessionStorage.getItem('addressData');
      const addressData = addressDataStr ? JSON.parse(addressDataStr) : {};

      await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          address,
          city: addressData.city || '',
          state: addressData.state || '',
          postalCode: addressData.postalCode || '',
          roofData: estimate,
        }),
      });

      sessionStorage.setItem('roofEstimate', JSON.stringify({
        ...estimate,
        address,
      }));

      router.push('/estimate/results');
    } catch (error) {
      console.error('Failed to submit lead:', error);
      sessionStorage.setItem('roofEstimate', JSON.stringify({
        ...roofData,
        address,
      }));
      router.push('/estimate/results');
    }
  }

  const getButtonText = () => {
    if (isSubmitting) return 'Preparing Your Estimate...';
    if (apiComplete) return 'View My Free Estimate';
    if (formData) return 'Calculating...';
    return 'Get My Estimate';
  };

  // Missing location data
  if (!lat || !lng) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Missing Location Data</h1>
          <p className="text-gray-600 mb-6">Please try entering your address again.</p>
          <Link
            href="/estimate"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Link>
        </div>
      </main>
    );
  }

  // Error state
  if (apiError) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Oops! Something Went Wrong</h1>
          <p className="text-gray-600 mb-6">{apiError}</p>
          <Link
            href="/estimate"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Try Another Address
          </Link>
        </div>
      </main>
    );
  }

  // Step 1: Address confirmation with satellite preview
  if (!addressConfirmed) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Confirm Your Property
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Before we calculate your estimate, please verify this is the correct property.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <SatellitePreview
              lat={parseFloat(lat)}
              lng={parseFloat(lng)}
              address={address}
              onConfirm={handleAddressConfirm}
              onReject={handleAddressReject}
            />
          </div>
        </div>
      </main>
    );
  }

  // Step 2: Calculation progress + lead form
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Calculating Your Estimate
          </h1>
          <div className="inline-flex items-center gap-2 text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm md:text-base">{address}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="font-semibold text-lg mb-6 text-gray-800 flex items-center gap-2">
                <span className="text-2xl">🛰️</span>
                Analyzing Your Roof
              </h3>
              <CalculationProgress isComplete={apiComplete} />

              {apiComplete && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-success">
                    <span className="text-xl">✅</span>
                    <span className="font-medium">Analysis Complete!</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Fill out the form to view your detailed estimate.
                  </p>
                </div>
              )}
            </div>

            <div className="relative">
              <FactCarousel />
            </div>

            {apiComplete && roofData && (
              <div className="lg:hidden bg-primary/5 rounded-xl p-4 border border-primary/10">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-sm text-primary">Roof Size</p>
                    <p className="text-lg font-bold text-gray-900">{roofData.roofSqFt.toLocaleString()} sq ft</p>
                  </div>
                  <div>
                    <p className="text-sm text-primary">Est. Range</p>
                    <p className="text-lg font-bold text-gray-900">
                      ${roofData.estimate.low.toLocaleString()} - ${roofData.estimate.high.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  Almost there! 🎉
                </h3>
                <p className="text-gray-600">
                  While we crunch the numbers, tell us where to send your detailed estimate:
                </p>
              </div>

              <LeadCaptureForm
                address={address}
                onSubmit={handleFormSubmit}
                isLoading={isSubmitting}
                buttonText={getButtonText()}
                disabled={isSubmitting}
              />

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <span>🔒</span>
                    <span>Secure & Private</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>✉️</span>
                    <span>No Spam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💯</span>
                    <span>100% Free</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CalculatingPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </main>
    }>
      <CalculatingContent />
    </Suspense>
  );
}
