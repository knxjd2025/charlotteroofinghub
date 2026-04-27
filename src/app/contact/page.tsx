'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { stockImages } from '@/data/stock-images'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Contact', url: 'https://charlotteroofinghub.com/contact' },
        ]}
      />
      {/* Hero Section */}
      <section className="relative text-white py-12 overflow-hidden">
        <Image
          src={stockImages.contactCharlotte.src}
          alt={stockImages.contactCharlotte.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/90">
              Have questions about Charlotte Roofing Hub? Want to get your company listed?
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a href="mailto:info@charlotteroofinghub.com" className="text-primary hover:underline">
                        info@charlotteroofinghub.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">Charlotte, North Carolina</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Common Inquiries</h2>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Get my roofing company listed</li>
                  <li>• Learn about Charlotte Roofing Hub</li>
                  <li>• Report incorrect information</li>
                  <li>• Partnership opportunities</li>
                  <li>• General questions</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-secondary to-red-600 rounded-xl p-6 text-white">
                <h2 className="text-lg font-bold mb-2">Need a Roof Estimate?</h2>
                <p className="text-sm text-white/90 mb-4">
                  Get an instant, AI-powered estimate for your roof in under 60 seconds.
                </p>
                <Link
                  href="/estimate"
                  className="inline-block w-full text-center py-3 bg-white text-secondary font-bold rounded-lg hover:bg-gray-100 transition"
                >
                  Get Instant Estimate
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 1-2 business days.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="you@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                            placeholder="(704) 555-0100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Subject *
                          </label>
                          <select
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          >
                            <option value="">Select a subject</option>
                            <option value="listing">Get My Company Listed</option>
                            <option value="about">Learn About Charlotte Roofing Hub</option>
                            <option value="correction">Report Incorrect Info</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="general">General Question</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name (if applicable)
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Your Roofing Company"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
