'use client';

import { useRouter } from 'next/navigation';
import { AddressInput } from '@/components/estimate/AddressInput';
import { Calculator, Shield, Clock, Star } from 'lucide-react';
import Image from 'next/image';
import { stockImages } from '@/data/stock-images';

export default function EstimatePage() {
  const router = useRouter();

  const handleAddressSelect = (
    address: string,
    lat: number,
    lng: number,
    placeDetails: { city: string; state: string; postalCode: string }
  ) => {
    // Store address data in session storage for the calculating page
    sessionStorage.setItem('addressData', JSON.stringify({
      address,
      lat,
      lng,
      city: placeDetails.city,
      state: placeDetails.state,
      postalCode: placeDetails.postalCode,
    }));

    // Navigate to the calculating page
    router.push(`/estimate/calculating?address=${encodeURIComponent(address)}&lat=${lat}&lng=${lng}`);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <Image
          src={stockImages.heroBackground.src}
          alt={stockImages.heroBackground.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/90 to-[#1E3A5F]/70" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Calculator className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">AI-Powered Satellite Analysis</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get Your Instant<br />
            <span className="text-accent">Roof Estimate</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Enter your Charlotte address below and our AI will analyze satellite imagery
            to give you an accurate roof replacement estimate in under 60 seconds.
          </p>

          {/* Address Input */}
          <AddressInput onAddressSelect={handleAddressSelect} />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Enter Your Address',
                desc: 'Type your Charlotte home address and our system locates your property using Google Maps.',
                icon: '📍',
              },
              {
                step: '2',
                title: 'AI Analyzes Your Roof',
                desc: 'Our AI uses satellite imagery to measure your roof dimensions, pitch, and calculate materials needed.',
                icon: '🛰️',
              },
              {
                step: '3',
                title: 'Get Your Estimate',
                desc: 'Receive instant pricing for multiple roofing materials with low, mid, and high ranges.',
                icon: '💰',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <span className="text-5xl mb-4 block">{item.icon}</span>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: 'Secure & Private', desc: 'Your data is protected' },
              { icon: Clock, label: 'Under 60 Seconds', desc: 'Instant results' },
              { icon: Star, label: '100% Free', desc: 'No obligation' },
              { icon: Calculator, label: 'AI-Powered', desc: 'Satellite imagery analysis' },
            ].map((badge) => (
              <div key={badge.label} className="text-center p-6 bg-gray-50 rounded-xl">
                <badge.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-semibold text-gray-900">{badge.label}</p>
                <p className="text-sm text-gray-500">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Out What Your Roof Costs?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Join thousands of Charlotte homeowners who&apos;ve used our free estimate tool.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-red-600 transition text-lg cta-pulse"
          >
            Get My Free Estimate Now
          </button>
        </div>
      </section>
    </main>
  );
}
