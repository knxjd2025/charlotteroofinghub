import type { Metadata } from 'next'
import { Mail, MapPin } from 'lucide-react'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'
import ContactForm from '@/components/contact/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Charlotte Roofing Hub | List Your Roofing Company',
  description: 'Contact Charlotte Roofing Hub: report incorrect information, request company verification and listing, or get in touch with general questions. Free service for Charlotte and surrounding-area homeowners and roofers.',
  keywords: [
    'contact charlotte roofing hub',
    'list my roofing company charlotte',
    'roofing directory charlotte contact',
    'charlotte nc roofing inquiries',
  ],
  alternates: { canonical: 'https://charlotteroofinghub.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Contact', url: 'https://charlotteroofinghub.com/contact' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <li>• Advertise on the platform</li>
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
                <a
                  href="https://instantroofestimate.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center py-3 bg-white text-secondary font-bold rounded-lg hover:bg-gray-100 transition"
                >
                  Get Instant Estimate
                </a>
              </div>
            </div>

            {/* Contact Form (client component) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
