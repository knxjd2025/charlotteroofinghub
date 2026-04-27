import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, CheckCircle, ArrowRight, Shield, Warehouse, Clock, DollarSign } from 'lucide-react'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'

export const metadata: Metadata = {
  title: 'Commercial Roofing in Charlotte NC | TPO, EPDM, Flat Roof Pros',
  description: 'Commercial roofing in Charlotte NC: TPO, EPDM, PVC, modified bitumen and flat-roof systems from $5–$12 per sq ft installed. Verified commercial roofing contractors with NC licensing, insurance, and a 4.8★ rating requirement.',
  keywords: [
    'commercial roofing charlotte nc',
    'commercial roofing charlotte',
    'commercial roofing contractors charlotte nc',
    'commercial roofing companies charlotte nc',
    'flat roof repair charlotte',
    'TPO roofing charlotte',
    'EPDM roofing charlotte',
    'commercial roofers near me',
    'business roofing charlotte nc'
  ],
  alternates: { canonical: 'https://charlotteroofinghub.com/commercial' },
}

const commercialFAQs = [
  {
    question: "What's the best commercial roofing material for Charlotte businesses?",
    answer: "TPO (Thermoplastic Polyolefin) is the most popular choice for commercial buildings in Charlotte due to its excellent heat reflection, energy efficiency, and durability in our climate. EPDM is a budget-friendly option, while PVC is ideal for restaurants and buildings with roof-mounted grease-producing equipment."
  },
  {
    question: "How much does commercial roof replacement cost in Charlotte?",
    answer: "Commercial roof replacement in Charlotte typically costs $5-$12 per square foot for materials and installation. For a 10,000 sq ft flat roof, expect to pay $50,000-$120,000 depending on the system (TPO, EPDM, PVC), insulation requirements, and complexity. Modified bitumen and built-up roofing can be $7-$10 per sq ft."
  },
  {
    question: "How long does a commercial flat roof last in Charlotte?",
    answer: "With proper maintenance in Charlotte's climate: TPO roofs last 20-30 years, EPDM 25-30 years, PVC 20-30 years, and modified bitumen 15-20 years. Built-up roofing (BUR) can last 25-30 years. Regular inspections and maintenance are crucial for maximizing lifespan."
  },
  {
    question: "Can commercial roofing be done without disrupting business operations?",
    answer: "Yes, experienced Charlotte commercial roofers can minimize disruption. Many projects are completed in sections, and work can often be scheduled during off-hours or weekends. Most commercial roofing jobs for average-sized buildings take 1-3 weeks depending on the system and weather."
  },
  {
    question: "Do Charlotte commercial roofers offer maintenance contracts?",
    answer: "Yes, many commercial roofing companies in Charlotte offer preventive maintenance contracts. These typically include bi-annual inspections, drain cleaning, minor repairs, and detailed condition reports. Maintenance contracts can extend roof life by 5-10 years and prevent costly emergency repairs."
  }
]

const commercialServicesList = [
  { name: 'Flat Roofing', desc: 'TPO, EPDM, and PVC membrane systems', href: '/services/flat-roofing' },
  { name: 'Commercial Roofing', desc: 'Full commercial roofing solutions', href: '/services/commercial-roofing' },
  { name: 'Metal Roofing', desc: 'Standing seam and commercial metal systems', href: '/services/metal-roofing' },
  { name: 'Roof Repair', desc: 'Commercial leak detection and repair', href: '/services/roof-repair' },
  { name: 'Emergency Repair', desc: '24/7 emergency commercial roofing', href: '/services/emergency-roof-repair' },
  { name: 'Storm Damage', desc: 'Commercial storm damage restoration', href: '/services/storm-damage-repair' },
  { name: 'Roof Inspection', desc: 'Commercial roof assessment and reporting', href: '/services/roof-inspection' },
  { name: 'Roof Maintenance', desc: 'Scheduled inspections and upkeep programs', href: '/services/roof-maintenance' }
]

export default function CommercialPage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Commercial Roofing', url: 'https://charlotteroofinghub.com/commercial' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Warehouse className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Charlotte Roofing Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Commercial Roofing in Charlotte, NC
            </h1>
            {/* AEO direct-answer paragraph (~55 words) for AI Overviews extraction */}
            <p className="text-lg md:text-xl text-white/90 mb-8" data-speakable="true">
              Commercial roofing in Charlotte NC typically costs $5–$12 per square foot installed —
              about $50,000–$120,000 for a 10,000 sq ft flat roof. TPO is the most popular system for
              its heat reflection and 20–30 year lifespan; EPDM, PVC, and modified bitumen are also
              widely used. Every contractor we list holds active NC licensing and a 4.8★ rating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/companies?service=commercial"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Find Commercial Roofers
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://instantroofestimate.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-red-600 transition"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Experienced Teams</h3>
              <p className="text-sm text-gray-600">Crews trained in commercial systems</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Manufacturer Certified</h3>
              <p className="text-sm text-gray-600">TPO, EPDM, and PVC certified installers</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Minimal Disruption</h3>
              <p className="text-sm text-gray-600">Work around your business schedule</p>
            </div>
            <div className="text-center p-6">
              <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Competitive Pricing</h3>
              <p className="text-sm text-gray-600">Get quotes from multiple contractors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Commercial Roofing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Full-service commercial roofing solutions for Charlotte businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialServicesList.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition group"
              >
                <CheckCircle className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
                <span className="text-sm text-primary font-medium mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  Learn More <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Roofing Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Commercial Roofing Systems */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Commercial Roofing Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">TPO Roofing</h3>
              <p className="text-primary font-semibold mb-2">$5.00 - $8.00/sq ft</p>
              <p className="text-gray-600 text-sm mb-4">
                The most popular commercial roofing choice. Highly reflective, energy-efficient, and excellent for Charlotte&apos;s hot summers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Energy Star rated</li>
                <li>Weldable seams for watertight seal</li>
                <li>20-30 year lifespan</li>
              </ul>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">EPDM Roofing</h3>
              <p className="text-primary font-semibold mb-2">$4.00 - $7.00/sq ft</p>
              <p className="text-gray-600 text-sm mb-4">
                Synthetic rubber membrane known for durability and flexibility. Budget-friendly option with proven performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Excellent weather resistance</li>
                <li>Easy to repair</li>
                <li>25-30 year lifespan</li>
              </ul>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">PVC Roofing</h3>
              <p className="text-primary font-semibold mb-2">$6.00 - $10.00/sq ft</p>
              <p className="text-gray-600 text-sm mb-4">
                Premium option with superior chemical resistance. Ideal for restaurants and facilities with rooftop grease exhaust.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Chemical/grease resistant</li>
                <li>Fire resistant</li>
                <li>20-30 year lifespan</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/materials"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All Materials & Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Industries We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Office Buildings', 'Retail Centers', 'Warehouses', 'Manufacturing',
              'Restaurants', 'Medical Facilities', 'Schools', 'Churches',
              'Multi-Family', 'Hotels', 'Industrial', 'Government'
            ].map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <InstantEstimateCTA variant="inline" />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Commercial Roofing FAQs"
        faqs={commercialFAQs}
      />

      {/* Final CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Commercial Roofing Quote?
          </h2>
          <p className="text-white/90 mb-8">
            Connect with Charlotte&apos;s experienced commercial roofing contractors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/companies"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Find Commercial Roofers
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
