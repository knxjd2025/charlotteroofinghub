import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, CheckCircle, ArrowRight, Shield, Warehouse, Clock, DollarSign } from 'lucide-react'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { stockImages } from '@/data/stock-images'

export const metadata: Metadata = {
  title: 'Commercial Roofing in Charlotte NC | Flat Roof & TPO Experts',
  description: 'Commercial roofing services in Charlotte, NC. TPO, EPDM, modified bitumen, and flat roof specialists. Find licensed commercial roofing contractors.',
  keywords: [
    'commercial roofing charlotte nc',
    'flat roof repair charlotte',
    'TPO roofing charlotte',
    'commercial roofers near me',
    'business roofing charlotte nc'
  ],
  openGraph: {
    title: 'Commercial Roofing in Charlotte NC | Flat Roof & TPO Experts',
    description: 'Commercial roofing services in Charlotte, NC. TPO, EPDM, modified bitumen, and flat roof specialists. Find licensed commercial roofing contractors.',
    url: 'https://charlotteroofinghub.com/commercial',
  },
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
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 overflow-hidden">
        <Image
          src={stockImages.commercialHero.src}
          alt={stockImages.commercialHero.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Warehouse className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Charlotte Roofing Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Commercial Roofing in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Expert commercial roofing services for Charlotte businesses. TPO, EPDM, flat roof repair,
              and preventive maintenance from licensed commercial contractors.
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

      {/* Charlotte Commercial Image */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="relative w-full h-48 md:h-72 rounded-xl overflow-hidden">
            <Image
              src={stockImages.commercialBuilding.src}
              alt={stockImages.commercialBuilding.alt}
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

      {/* AEO Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How Much Does Commercial Roof Replacement Cost in Charlotte?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Commercial roof replacement in Charlotte costs $5 to $12 per square foot for materials and installation, depending on the roofing system. For a typical 10,000 sq ft flat roof, expect to pay $50,000 to $120,000. TPO averages $5-$8/sq ft, EPDM runs $4-$7/sq ft, and PVC costs $6-$10/sq ft including labor and materials.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Additional factors affecting cost include insulation requirements (especially for energy code compliance), number of roof penetrations (HVAC units, vents, drains), and whether the existing system needs full removal or can be overlaid.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Is the Best Commercial Roofing System for Charlotte&apos;s Climate?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>TPO (Thermoplastic Polyolefin) is the most popular commercial roofing choice in Charlotte because it reflects solar heat, reducing cooling costs by 15-30% during Charlotte&apos;s hot summers. Its heat-welded seams create a watertight bond that handles Charlotte&apos;s heavy thunderstorm rains, and it lasts 20-30 years with proper maintenance.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed">
              PVC is recommended for restaurants and food processing facilities due to its chemical resistance. EPDM remains a cost-effective option for budget-conscious projects. Your choice should factor in building use, energy goals, and budget.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Do Charlotte Commercial Roofs Need Regular Maintenance?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Yes — commercial roofs in Charlotte require bi-annual inspections and preventive maintenance to maximize lifespan and prevent costly emergency repairs. A maintenance program typically costs $200-$500 per year and can extend your roof&apos;s life by 5-10 years, saving tens of thousands in premature replacement costs.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed">
              Key maintenance items include drain clearing (critical during Charlotte&apos;s heavy rain events), seam inspection, flashing checks around HVAC penetrations, and membrane condition assessment. Most Charlotte commercial roofers offer annual maintenance contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Roofing Systems */}
      <section className="py-12 md:py-16 bg-gray-50">
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

      {/* Side-by-Side Comparison Table */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Commercial Roofing Systems at a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left rounded-tl-xl">Feature</th>
                  <th className="px-4 py-3 text-center">TPO</th>
                  <th className="px-4 py-3 text-center">EPDM</th>
                  <th className="px-4 py-3 text-center">PVC</th>
                  <th className="px-4 py-3 text-center rounded-tr-xl">Mod. Bit.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Cost/sq ft</td>
                  <td className="px-4 py-3 text-center text-gray-700">$5-$8</td>
                  <td className="px-4 py-3 text-center text-gray-700">$4-$7</td>
                  <td className="px-4 py-3 text-center text-gray-700">$6-$10</td>
                  <td className="px-4 py-3 text-center text-gray-700">$5-$9</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Lifespan</td>
                  <td className="px-4 py-3 text-center text-gray-700">20-30 yrs</td>
                  <td className="px-4 py-3 text-center text-gray-700">25-30 yrs</td>
                  <td className="px-4 py-3 text-center text-gray-700">20-30 yrs</td>
                  <td className="px-4 py-3 text-center text-gray-700">15-20 yrs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Energy Efficiency</td>
                  <td className="px-4 py-3 text-center text-green-600 font-semibold">Excellent</td>
                  <td className="px-4 py-3 text-center text-amber-600 font-semibold">Fair</td>
                  <td className="px-4 py-3 text-center text-green-600 font-semibold">Excellent</td>
                  <td className="px-4 py-3 text-center text-amber-600 font-semibold">Good</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Chemical Resistance</td>
                  <td className="px-4 py-3 text-center text-amber-600 font-semibold">Good</td>
                  <td className="px-4 py-3 text-center text-amber-600 font-semibold">Fair</td>
                  <td className="px-4 py-3 text-center text-green-600 font-semibold">Excellent</td>
                  <td className="px-4 py-3 text-center text-amber-600 font-semibold">Fair</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-gray-900">Best For</td>
                  <td className="px-4 py-3 text-center text-gray-600 text-xs">Most buildings</td>
                  <td className="px-4 py-3 text-center text-gray-600 text-xs">Budget projects</td>
                  <td className="px-4 py-3 text-center text-gray-600 text-xs">Restaurants</td>
                  <td className="px-4 py-3 text-center text-gray-600 text-xs">Foot traffic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: 'Office Buildings', icon: '🏢' },
              { name: 'Retail Centers', icon: '🛍️' },
              { name: 'Warehouses', icon: '📦' },
              { name: 'Manufacturing', icon: '🏭' },
              { name: 'Restaurants', icon: '🍽️' },
              { name: 'Medical Facilities', icon: '🏥' },
              { name: 'Schools', icon: '🏫' },
              { name: 'Churches', icon: '⛪' },
              { name: 'Multi-Family', icon: '🏘️' },
              { name: 'Hotels', icon: '🏨' },
              { name: 'Industrial', icon: '⚙️' },
              { name: 'Government', icon: '🏛️' },
            ].map((industry) => (
              <div
                key={industry.name}
                className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg"
              >
                <span className="text-xl">{industry.icon}</span>
                <span className="text-sm font-medium text-gray-700">{industry.name}</span>
              </div>
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
