'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Calculator } from 'lucide-react'

interface InstantEstimateCTAProps {
  variant?: 'banner' | 'sidebar' | 'popup' | 'inline'
}

export default function InstantEstimateCTA({ variant = 'inline' }: InstantEstimateCTAProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Exit intent popup
  useEffect(() => {
    if (variant !== 'popup') return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !dismissed) {
        setShowPopup(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [variant, dismissed])

  // Sidebar sticky CTA
  if (variant === 'sidebar') {
    return (
      <div className="sticky top-24 bg-gradient-to-br from-secondary to-red-600 text-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="w-6 h-6" />
          <span className="font-bold">Free Roof Estimate</span>
        </div>
        <p className="text-sm text-white/90 mb-4">
          Get an instant, AI-powered estimate for your Charlotte roof. No phone calls, no waiting.
        </p>
        <Link
          href="/estimate"
          className="block w-full text-center py-3 bg-white text-secondary font-bold rounded-lg hover:bg-gray-100 transition"
        >
          Get Instant Estimate
        </Link>
        <p className="text-xs text-white/70 mt-3 text-center">
          Trusted by 1,000+ Charlotte homeowners
        </p>
      </div>
    )
  }

  // Inline CTA (for use within content)
  if (variant === 'inline') {
    return (
      <div className="my-8 p-6 bg-gradient-to-r from-primary to-primary-light rounded-xl text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Need a Roof Estimate?</h3>
              <p className="text-white/90 text-sm">Get an instant quote in under 60 seconds</p>
            </div>
          </div>
          <Link
            href="/estimate"
            className="px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition whitespace-nowrap cta-pulse"
          >
            Get Free Estimate
          </Link>
        </div>
      </div>
    )
  }

  // Banner CTA (fixed bottom on mobile)
  if (variant === 'banner') {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-secondary text-white py-3 px-4 shadow-lg z-40 lg:hidden">
        <Link
          href="/estimate"
          className="flex items-center justify-center gap-2 font-semibold"
        >
          <Calculator className="w-5 h-5" />
          Get Instant Roof Estimate - Free!
        </Link>
      </div>
    )
  }

  // Popup CTA (exit intent)
  if (variant === 'popup' && showPopup && !dismissed) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in">
          <button
            onClick={() => {
              setShowPopup(false)
              setDismissed(true)
            }}
            className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Wait! Get a Free Roof Estimate
            </h3>
            <p className="text-gray-600 mb-6">
              Before you go, find out how much a new roof costs for your Charlotte home. It only takes 60 seconds!
            </p>
            <Link
              href="/estimate"
              className="block w-full py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition text-lg text-center"
            >
              Get My Free Estimate
            </Link>
            <button
              onClick={() => {
                setShowPopup(false)
                setDismissed(true)
              }}
              className="mt-4 text-sm text-gray-500 hover:text-gray-700"
            >
              No thanks, I&apos;ll pass
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
