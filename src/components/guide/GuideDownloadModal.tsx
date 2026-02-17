'use client'

import { useState } from 'react'
import { Download, Gift } from 'lucide-react'
import GuideDownloadForm from './GuideDownloadForm'

export default function GuideDownloadModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition text-lg cta-pulse"
      >
        <Download className="w-5 h-5" />
        Download Free PDF
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false)
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6">
            <GuideDownloadForm
              variant="modal"
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  )
}

/* Inline CTA banner used between chapters */
export function GuideDownloadBanner() {
  const [showForm, setShowForm] = useState(false)

  if (showForm) {
    return (
      <section className="py-10 bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <GuideDownloadForm
              variant="inline"
              onClose={() => setShowForm(false)}
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 bg-gradient-to-r from-primary to-primary-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="text-white text-left">
            <h3 className="text-xl font-bold mb-1">Love What You Are Reading?</h3>
            <p className="text-white/80 text-sm">Download the full guide as a PDF + get a free gift mailed to you!</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition cta-pulse"
          >
            <Gift className="w-5 h-5" />
            Get Free PDF + Gift
          </button>
        </div>
      </div>
    </section>
  )
}
