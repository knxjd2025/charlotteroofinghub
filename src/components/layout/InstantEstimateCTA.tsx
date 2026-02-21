'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { X, Calculator } from 'lucide-react'
import { AddressInput } from '@/components/estimate/AddressInput'

interface InstantEstimateCTAProps {
  variant?: 'banner' | 'sidebar' | 'popup' | 'inline'
}

export default function InstantEstimateCTA({ variant = 'inline' }: InstantEstimateCTAProps) {
  const router = useRouter()
  const [showPopup, setShowPopup] = useState(false)
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('exitPopupDismissed') === 'true'
    }
    return false
  })

  const dismissPopup = () => {
    setShowPopup(false)
    setDismissed(true)
    sessionStorage.setItem('exitPopupDismissed', 'true')
  }

  const handlePopupAddressSelect = (
    address: string,
    lat: number,
    lng: number,
    placeDetails: { city: string; state: string; postalCode: string }
  ) => {
    sessionStorage.setItem('addressData', JSON.stringify({
      address,
      lat,
      lng,
      city: placeDetails.city,
      state: placeDetails.state,
      postalCode: placeDetails.postalCode,
    }))
    dismissPopup()
    router.push(`/estimate/calculating?address=${encodeURIComponent(address)}&lat=${lat}&lng=${lng}`)
  }

  // Exit intent popup — desktop (mouseout) + mobile (scroll-up) + tab switch
  useEffect(() => {
    if (variant !== 'popup' || dismissed) return

    let triggered = false
    const triggerPopup = () => {
      if (!triggered && canTriggerRef.current && !dismissed) {
        triggered = true
        setShowPopup(true)
      }
    }

    // Minimum time on page before popup can trigger (5 seconds)
    const canTriggerRef = { current: false }
    const delayTimer = setTimeout(() => { canTriggerRef.current = true }, 5000)

    // Desktop: mouse leaves viewport toward top (address bar / tabs)
    const handleMouseOut = (e: MouseEvent) => {
      // Only trigger when mouse leaves toward the top of the viewport
      if (
        e.clientY <= 0 ||
        (e.relatedTarget === null && e.clientY < 50)
      ) {
        triggerPopup()
      }
    }

    // Desktop fallback: mouse leaves the document entirely
    const handleMouseLeave = () => {
      triggerPopup()
    }

    // Tab switch / window blur — user is navigating away
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        triggerPopup()
      }
    }

    // Mobile: rapid scroll-up after spending time on page
    let lastScrollY = window.scrollY
    let scrollUpDistance = 0
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY < lastScrollY) {
        scrollUpDistance += lastScrollY - currentY
      } else {
        scrollUpDistance = 0
      }
      lastScrollY = currentY

      if (scrollUpDistance > 200 && currentY < 100) {
        triggerPopup()
        scrollUpDistance = 0
      }
    }

    document.addEventListener('mouseout', handleMouseOut)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(delayTimer)
      document.removeEventListener('mouseout', handleMouseOut)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('scroll', handleScroll)
    }
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

  // Close popup on Escape key
  useEffect(() => {
    if (!showPopup) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismissPopup()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [showPopup]) // eslint-disable-line react-hooks/exhaustive-deps

  // Popup CTA (exit intent) with inline address input
  if (variant === 'popup' && showPopup && !dismissed) {
    return (
      <div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        onClick={(e) => { if (e.target === e.currentTarget) dismissPopup() }}
      >
        <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative animate-in fade-in zoom-in">
          <button
            onClick={dismissPopup}
            className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 z-10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="text-center mb-5">
            <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calculator className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Wait! Get a Free Roof Estimate
            </h3>
            <p className="text-gray-600">
              Enter your address below to get an instant estimate in under 60 seconds.
            </p>
          </div>

          <AddressInput onAddressSelect={handlePopupAddressSelect} />

          <button
            onClick={dismissPopup}
            className="mt-4 text-sm text-gray-500 hover:text-gray-700 mx-auto block"
          >
            No thanks, I&apos;ll pass
          </button>
        </div>
      </div>
    )
  }

  return null
}
