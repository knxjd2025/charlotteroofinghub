'use client';

import { useState, FormEvent } from 'react';
import { User, Phone, Mail, MapPin, Loader2, ArrowRight, AlertCircle } from 'lucide-react';
import { isValidEmail, isValidPhone } from '@/lib/validation';

export interface LeadFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  tcpaConsent: boolean;
  consentTimestamp: string;
}

interface LeadCaptureFormProps {
  address: string;
  onSubmit: (data: LeadFormData) => void;
  isLoading?: boolean;
  buttonText?: string;
  disabled?: boolean;
}

export function LeadCaptureForm({
  address,
  onSubmit,
  isLoading = false,
  buttonText = "Get My Estimate",
  disabled = false,
}: LeadCaptureFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tcpaConsent, setTcpaConsent] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const isFormValid = firstName && lastName && phone && email && tcpaConsent;

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isFormValid || disabled) return;

    const errors: Record<string, string> = {};
    if (!isValidEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!isValidPhone(phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    setValidationErrors({});

    onSubmit({
      firstName,
      lastName,
      phone,
      email,
      tcpaConsent,
      consentTimestamp: new Date().toISOString(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg
                       focus:border-primary focus:ring-2 focus:ring-primary/10
                       transition-all duration-200 outline-none"
          />
        </div>
        <div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg
                       focus:border-primary focus:ring-2 focus:ring-primary/10
                       transition-all duration-200 outline-none"
          />
        </div>
      </div>

      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => {
              handlePhoneChange(e);
              if (validationErrors.phone) setValidationErrors(prev => { const { phone: _, ...rest } = prev; return rest; });
            }}
            placeholder="Phone Number"
            required
            className={`w-full pl-10 pr-4 py-3 border rounded-lg
                       focus:border-primary focus:ring-2 focus:ring-primary/10
                       transition-all duration-200 outline-none
                       ${validationErrors.phone ? 'border-red-300' : 'border-gray-200'}`}
          />
        </div>
        {validationErrors.phone && (
          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {validationErrors.phone}
          </p>
        )}
      </div>

      <div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (validationErrors.email) setValidationErrors(prev => { const { email: _, ...rest } = prev; return rest; });
            }}
            placeholder="Email Address"
            required
            className={`w-full pl-10 pr-4 py-3 border rounded-lg
                       focus:border-primary focus:ring-2 focus:ring-primary/10
                       transition-all duration-200 outline-none
                       ${validationErrors.email ? 'border-red-300' : 'border-gray-200'}`}
          />
        </div>
        {validationErrors.email && (
          <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            {validationErrors.email}
          </p>
        )}
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={address}
          disabled
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg
                     bg-gray-50 text-gray-600 cursor-not-allowed"
        />
      </div>

      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          checked={tcpaConsent}
          onChange={(e) => setTcpaConsent(e.target.checked)}
          required
          className="mt-1 w-5 h-5 rounded border-gray-300 text-primary
                     focus:ring-primary focus:ring-2 cursor-pointer"
        />
        <span className="text-sm text-gray-600 leading-relaxed">
          I consent to receive calls, SMS/text messages, and emails regarding my roofing estimate,
          including communications made using AI, automated dialing systems, and prerecorded messages.
          Message frequency varies. Message and data rates may apply. Reply STOP to opt out.
          Consent is not required to make a purchase. By submitting, I agree to the{' '}
          <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
          {' '}and{' '}
          <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
        </span>
      </label>

      <button
        type="submit"
        disabled={!isFormValid || isLoading || disabled}
        className="w-full py-4 bg-gradient-to-r from-secondary to-red-600 text-white font-semibold
                   rounded-lg hover:from-red-600 hover:to-red-700
                   disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed
                   transition-all duration-200 flex items-center justify-center gap-2
                   shadow-lg shadow-secondary/25 hover:shadow-secondary/40"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>{buttonText}</span>
          </>
        ) : (
          <>
            <span>{buttonText}</span>
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
