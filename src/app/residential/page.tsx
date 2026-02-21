import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Home, CheckCircle, ArrowRight, Shield, Clock, DollarSign, Award } from 'lucide-react'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { stockImages } from '@/data/stock-images'

export const metadata: Metadata = {
  title: 'Residential Roofing in Charlotte NC | Home Roof Services',
  description: 'Complete guide to residential roofing in Charlotte, NC. Learn about roof replacement, repairs, materials, costs, and find top-rated home roofing contractors.',
  keywords: [
    'residential roofing charlotte nc',
    'home roof replacement charlotte',
    'roof repair charlotte nc',
    'house roofing charlotte',
    'residential roofers near me'
  ],
}

const residentialFAQs = [
  {
    question: "How much does a residential roof replacement cost in Charlotte?",
    answer: "The average residential roof replacement in Charlotte costs between $8,000 and $25,000, depending on the size of your home (typically 1,500-3,000 sq ft roof), materials chosen, and complexity. Asphalt shingles are the most affordable at $8,000-$15,000, while metal roofing ranges from $15,000-$30,000. Get an instant estimate at InstantRoofEstimate.ai for a more accurate price."
  },
  {
    question: "How long does a residential roof last in Charlotte's climate?",
    answer: "In Charlotte's hot, humid climate with occasional severe storms: asphalt shingles typically last 20-30 years, architectural shingles 25-35 years, metal roofing 40-70 years, and slate can last 75-100+ years. Proper ventilation and maintenance can extend these lifespans."
  },
  {
    question: "What are signs I need a new roof on my Charlotte home?",
    answer: "Key signs include: shingles that are curling, cracking, or missing; granules in your gutters; visible daylight through the roof boards; sagging roof deck; water stains on ceilings; and if your roof is over 20 years old. After severe storms in Charlotte, it's wise to get a professional inspection."
  },
  {
    question: "Does homeowner's insurance cover roof replacement in NC?",
    answer: "Homeowner's insurance in North Carolina typically covers roof damage from covered perils like hail, wind, and fallen trees. However, it generally doesn't cover damage from normal wear and tear or lack of maintenance. Many Charlotte roofing companies offer free insurance claim assistance."
  },
  {
    question: "What's the best roofing material for homes in Charlotte?",
    answer: "Architectural shingles are the most popular choice for Charlotte homes due to their excellent wind resistance (up to 130 mph), durability in humid conditions, and good value. Metal roofing is increasingly popular for its energy efficiency and 50+ year lifespan. Your choice depends on budget, aesthetics, and HOA requirements."
  }
]

const residentialServices = [
  { name: 'Complete Roof Replacement', desc: 'Full tear-off and installation of new roofing system', href: '/services/roof-replacement' },
  { name: 'Roof Repairs', desc: 'Fix leaks, replace damaged shingles, seal flashings', href: '/services/roof-repair' },
  { name: 'Storm Damage Repair', desc: 'Hail, wind, and fallen tree damage restoration', href: '/services/storm-damage-repair' },
  { name: 'Roof Inspections', desc: 'Comprehensive assessment of roof condition', href: '/services/roof-inspection' },
  { name: 'Gutter Installation', desc: 'Seamless gutters and downspout systems', href: '/services/gutter-installation' },
  { name: 'Shingle Roofing', desc: 'Architectural and 3-tab shingle installation', href: '/services/shingle-roofing' },
  { name: 'Skylight Installation', desc: 'Add natural light with properly sealed skylights', href: '/services/skylight-installation' },
  { name: 'Emergency Repairs', desc: '24/7 emergency tarping and leak repairs', href: '/services/emergency-roof-repair' }
]

export default function ResidentialPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 overflow-hidden">
        <Image
          src={stockImages.residentialHero.src}
          alt={stockImages.residentialHero.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Charlotte Roofing Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Residential Roofing in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Your complete guide to home roofing services in Charlotte. From repairs to full replacements,
              learn what to expect and find trusted contractors with 4.8+ star ratings.
            </p>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-red-600 transition"
            >
              Get Instant Roof Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trust Charlotte Roofers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Award className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">4.8+ Star Rated</h3>
              <p className="text-sm text-gray-600">All listed contractors meet our quality standards</p>
            </div>
            <div className="text-center p-6">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Licensed & Insured</h3>
              <p className="text-sm text-gray-600">Fully licensed NC roofing contractors</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Fast Response</h3>
              <p className="text-sm text-gray-600">Most companies respond within 24 hours</p>
            </div>
            <div className="text-center p-6">
              <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold mb-2">Free Estimates</h3>
              <p className="text-sm text-gray-600">No-obligation quotes from top roofers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Image */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="relative w-full h-48 md:h-72 rounded-xl overflow-hidden">
            <Image
              src={stockImages.residentialNeighborhood.src}
              alt={stockImages.residentialNeighborhood.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Residential Roofing Services in Charlotte
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Charlotte roofing companies offer a full range of services for homeowners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialServices.map((service) => (
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

      {/* Roofing Materials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Popular Roofing Materials for Charlotte Homes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="border rounded-xl p-6">
              <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-3">Most Popular</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Asphalt Shingles</h3>
              <p className="text-primary font-semibold mb-2">$3.50 - $7.00/sq ft</p>
              <p className="text-gray-600 text-sm mb-4">
                The most popular choice for Charlotte homes. Affordable, durable, and available in many styles and colors.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Lifespan:</span> 20-35 years
              </div>
            </div>

            <div className="border rounded-xl p-6">
              <div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-3">Best Long-Term Value</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Metal Roofing</h3>
              <p className="text-primary font-semibold mb-2">$7.00 - $14.00/sq ft</p>
              <p className="text-gray-600 text-sm mb-4">
                Excellent for Charlotte&apos;s heat. Reflects sunlight, reduces cooling costs, and handles storms well.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Lifespan:</span> 40-70 years
              </div>
            </div>

            <div className="border rounded-xl p-6">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">Best Value</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Architectural Shingles</h3>
              <p className="text-primary font-semibold mb-2">$4.50 - $7.00/sq ft</p>
              <p className="text-gray-600 text-sm mb-4">
                Premium asphalt shingles with dimensional look. Better wind resistance and longer warranty.
              </p>
              <div className="text-sm text-gray-500">
                <span className="font-medium">Lifespan:</span> 25-35 years
              </div>
            </div>
          </div>

          {/* Visual Cost for Typical Charlotte Home */}
          <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Average Cost for a 2,000 sq ft Charlotte Home</h3>
            <p className="text-sm text-gray-500 text-center mb-4">(~2,400 sq ft roof area)</p>
            <div className="space-y-3">
              {[
                { name: 'Asphalt Shingles', cost: '$8,400 - $16,800', pct: 56, color: 'bg-blue-500' },
                { name: 'Architectural', cost: '$10,800 - $16,800', pct: 56, color: 'bg-blue-600' },
                { name: 'Metal Roofing', cost: '$16,800 - $33,600', pct: 100, color: 'bg-amber-500' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-24 text-sm font-medium text-gray-700 text-right shrink-0">{item.name}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-7 relative overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full flex items-center justify-end pr-2`}
                      style={{ width: `${item.pct}%` }}
                    >
                      <span className="text-xs font-bold text-white">{item.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
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

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <InstantEstimateCTA variant="inline" />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Residential Roofing FAQs"
        faqs={residentialFAQs}
      />

      {/* Final CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started on Your Roof Project?
          </h2>
          <p className="text-white/90 mb-8">
            Connect with Charlotte&apos;s top-rated residential roofing contractors today.
          </p>
          <Link
            href="/estimate"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Get Instant Roof Estimate
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
