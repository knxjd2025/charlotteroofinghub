import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { DollarSign, ArrowRight, CheckCircle, AlertCircle, Clock, Shield, ThermometerSun } from 'lucide-react'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { stockImages } from '@/data/stock-images'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'

export const metadata: Metadata = {
  title: 'Roofing Materials & Prices in Charlotte NC | 2026 Cost Guide',
  description: 'Roofing materials and prices in Charlotte NC: asphalt shingles $3.50–$7/sq ft, metal $7–$14/sq ft, TPO/EPDM $5–$10/sq ft, slate $15–$30/sq ft installed. Side-by-side material comparison, lifespan, warranty, and Charlotte-specific climate guidance.',
  keywords: [
    'roofing materials charlotte nc',
    'roof replacement cost charlotte',
    'how much does a new roof cost charlotte',
    'metal roof price charlotte',
    'shingle roof cost nc',
    'asphalt shingle prices charlotte',
    'tpo roofing cost charlotte',
    'roofing cost per square foot charlotte'
  ],
  alternates: { canonical: 'https://charlotteroofinghub.com/materials' },
  openGraph: {
    title: 'Roofing Materials & Prices in Charlotte NC | 2026 Cost Guide',
    description: 'Roofing materials and prices in Charlotte NC. Side-by-side comparison of cost, lifespan, warranty, and Charlotte climate fit.',
    url: 'https://charlotteroofinghub.com/materials',
  },
}

// Build-time date stamp. Next renders pages at build, so this updates on
// every redeploy and gives both AI engines and human visitors a fresh
// "Last updated" signal — pricing data decays fast and freshness is a
// strong AEO ranking factor for cost/comparison content.
const LAST_UPDATED = new Date().toISOString().slice(0, 10) // YYYY-MM-DD

// HowTo JSON-LD: turns the materials guide into structured "how to choose
// a roofing material in Charlotte" content that Google + AI engines can
// extract step-by-step.
const howToChooseMaterial = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Choose the Right Roofing Material in Charlotte, NC',
  description:
    'A 5-step process for selecting roofing material that fits your Charlotte home, budget, HOA, and the local humid-subtropical climate.',
  totalTime: 'PT30M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
  datePublished: '2024-01-01',
  dateModified: LAST_UPDATED,
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Set your budget range',
      text: 'Decide your installed cost-per-square-foot ceiling. In Charlotte: 3-tab asphalt $3.50–$5.50, architectural shingles $4.50–$7, metal $7–$14, slate $15–$30+. For a typical 2,000 sq ft home expect roughly $9,000–$35,000 depending on material.',
      url: 'https://charlotteroofinghub.com/materials',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Match material to expected lifespan',
      text: 'Architectural shingles last 25–35 years in Charlotte\'s climate, metal 40–70 years, slate 75–100+ years. Owners staying long-term often save money over the long run by paying more upfront.',
      url: 'https://charlotteroofinghub.com/materials',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Check Charlotte climate fit',
      text: 'Charlotte has a humid-subtropical climate with hot summers, occasional severe storms, and hail risk. Favor materials with 130 mph wind ratings (architectural shingles) or impact-resistant grades (Class 4). Light or reflective colors reduce summer cooling load.',
      url: 'https://charlotteroofinghub.com/materials',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Verify HOA and historic-district restrictions',
      text: 'Many Charlotte HOAs (Ballantyne, Cotswold, Eastover, Highland Creek, parts of Myers Park) require pre-approval of color and material. Historic districts may mandate specific shingle profiles or slate. Check before signing a contract.',
      url: 'https://charlotteroofinghub.com/hoa-roof-approval',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Get three estimates from local Charlotte roofers',
      text: 'Compare written estimates from at least three NC-licensed, insured contractors. Charlotte Roofing Hub maintains a curated list of suggested local roofing companies — many of whom contribute content to the site.',
      url: 'https://charlotteroofinghub.com/companies',
    },
  ],
  inLanguage: 'en-US',
}

const materialsFAQs = [
  {
    question: "What's the cheapest roofing material in Charlotte?",
    answer: "3-tab asphalt shingles are the most affordable option at $3.50-$5.50 per square foot installed. However, architectural shingles at $4.50-$7.00/sq ft are recommended as they last 10+ years longer and have better wind resistance for Charlotte's storms."
  },
  {
    question: "Is metal roofing worth the cost in Charlotte?",
    answer: "Yes, for many Charlotte homeowners. While metal roofing costs 2-3x more upfront ($7-$14/sq ft vs $3.50-$7 for shingles), it lasts 40-70 years vs 20-30 for shingles, reflects heat reducing cooling costs by 10-25%, handles hurricane-force winds, and can increase home value."
  },
  {
    question: "How much should a new roof cost for a 2,000 sq ft home in Charlotte?",
    answer: "For a typical 2,000 sq ft home (approximately 2,200-2,500 sq ft of roof area): Asphalt shingles: $9,000-$15,000, Architectural shingles: $11,000-$17,500, Metal roofing: $17,500-$35,000. Get an instant estimate at InstantRoofEstimate.ai for a more accurate price based on your specific home."
  },
  {
    question: "What roofing material has the best warranty?",
    answer: "Metal roofing typically offers the best warranties - up to 50 years for materials and 20+ years for installation. Premium architectural shingles from brands like GAF and Owens Corning offer lifetime limited warranties (around 50 years). TPO and PVC commercial systems offer 15-30 year warranties."
  },
  {
    question: "What materials are best for Charlotte's hot, humid climate?",
    answer: "For Charlotte's climate, consider: Metal roofing (reflects heat, handles humidity), light-colored architectural shingles (Energy Star rated options), and TPO for flat roofs (highly reflective). Avoid dark shingles on south-facing roofs and ensure proper attic ventilation with any material."
  }
]

const residentialMaterials = [
  {
    name: '3-Tab Asphalt Shingles',
    costRange: '$3.50 - $5.50/sq ft',
    lifespan: '15-20 years',
    pros: ['Most affordable', 'Easy to install', 'Wide availability'],
    cons: ['Shorter lifespan', 'Less wind resistance', 'Basic appearance'],
    bestFor: 'Budget-conscious homeowners, rental properties'
  },
  {
    name: 'Architectural Shingles',
    costRange: '$4.50 - $7.00/sq ft',
    lifespan: '25-35 years',
    pros: ['Great value', 'Better wind resistance (130 mph)', 'Dimensional look', 'Longer warranties'],
    cons: ['More expensive than 3-tab', 'Heavier'],
    bestFor: 'Most Charlotte homes, best value for durability'
  },
  {
    name: 'Metal Roofing (Standing Seam)',
    costRange: '$9.00 - $14.00/sq ft',
    lifespan: '40-70 years',
    pros: ['Longest lifespan', 'Energy efficient', 'Storm resistant', 'Low maintenance'],
    cons: ['Higher upfront cost', 'Noisy in rain (with poor insulation)', 'Limited contractor options'],
    bestFor: 'Long-term homeowners, energy-conscious, modern aesthetics'
  },
  {
    name: 'Metal Roofing (Shingle Style)',
    costRange: '$7.00 - $12.00/sq ft',
    lifespan: '40-60 years',
    pros: ['Looks like shingles', 'Metal durability', 'Many style options'],
    cons: ['Expensive', 'Specialized installation'],
    bestFor: 'Traditional aesthetics with metal benefits'
  },
  {
    name: 'Slate Roofing',
    costRange: '$15.00 - $30.00/sq ft',
    lifespan: '75-100+ years',
    pros: ['Beautiful appearance', 'Extreme durability', 'Adds home value'],
    cons: ['Very expensive', 'Heavy (may need reinforcement)', 'Fewer installers'],
    bestFor: 'Luxury homes, historic preservation'
  },
  {
    name: 'Cedar Shake',
    costRange: '$8.00 - $15.00/sq ft',
    lifespan: '30-50 years',
    pros: ['Natural beauty', 'Good insulation', 'Eco-friendly'],
    cons: ['Fire risk without treatment', 'High maintenance', 'Expensive'],
    bestFor: 'Rustic aesthetics, wooded properties'
  }
]

const commercialMaterials = [
  {
    name: 'TPO (Thermoplastic Polyolefin)',
    costRange: '$5.00 - $8.00/sq ft',
    lifespan: '20-30 years',
    pros: ['Energy Star rated', 'Reflective', 'Weldable seams', 'Affordable'],
    cons: ['Newer material (less track record)', 'Quality varies by manufacturer'],
    bestFor: 'Most commercial buildings, warehouses, retail'
  },
  {
    name: 'EPDM (Rubber Roofing)',
    costRange: '$4.00 - $7.00/sq ft',
    lifespan: '25-30 years',
    pros: ['Proven track record', 'Easy repairs', 'Budget-friendly', 'Flexible'],
    cons: ['Black absorbs heat', 'Seams can fail', 'Less attractive'],
    bestFor: 'Budget commercial projects, cold storage'
  },
  {
    name: 'PVC Roofing',
    costRange: '$6.00 - $10.00/sq ft',
    lifespan: '20-30 years',
    pros: ['Chemical resistant', 'Fire resistant', 'Strong seams', 'Reflective'],
    cons: ['Most expensive single-ply', 'Can become brittle'],
    bestFor: 'Restaurants, chemical facilities, food processing'
  },
  {
    name: 'Modified Bitumen',
    costRange: '$5.00 - $9.00/sq ft',
    lifespan: '15-20 years',
    pros: ['Multi-layer protection', 'Good for foot traffic', 'Easy repairs'],
    cons: ['Shorter lifespan', 'Installation requires heat/torch'],
    bestFor: 'Roofs with heavy foot traffic, equipment'
  }
]

export default function MaterialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToChooseMaterial) }}
      />
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Roofing Materials & Prices', url: 'https://charlotteroofinghub.com/materials' },
        ]}
      />
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 overflow-hidden">
        <Image
          src={stockImages.materialsShingles.src}
          alt={stockImages.materialsShingles.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Charlotte Roofing Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Roofing Materials & Prices in Charlotte, NC
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Compare roofing materials, costs, lifespans, and find the best option for your Charlotte property.
              Updated pricing for 2025.
            </p>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-red-600 transition"
            >
              Get Your Instant Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Cost Overview */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Cost Overview (per square foot, installed)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary">$3.50-$7</div>
              <div className="text-sm text-gray-600">Asphalt Shingles</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary">$7-$14</div>
              <div className="text-sm text-gray-600">Metal Roofing</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary">$5-$10</div>
              <div className="text-sm text-gray-600">TPO/EPDM/PVC</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-primary">$15-$30</div>
              <div className="text-sm text-gray-600">Slate</div>
            </div>
          </div>

          {/* Visual Cost Comparison Chart */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Cost per Sq Ft Comparison</h3>
            <div className="space-y-3">
              {[
                { name: '3-Tab Shingles', min: 3.5, max: 5.5, color: 'bg-blue-400' },
                { name: 'Architectural', min: 4.5, max: 7, color: 'bg-blue-500' },
                { name: 'TPO/EPDM', min: 4, max: 8, color: 'bg-green-500' },
                { name: 'Metal (Panels)', min: 7, max: 12, color: 'bg-amber-500' },
                { name: 'Metal (Seam)', min: 9, max: 14, color: 'bg-amber-600' },
                { name: 'Cedar Shake', min: 8, max: 15, color: 'bg-orange-500' },
                { name: 'Slate', min: 15, max: 30, color: 'bg-red-500' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-28 text-sm font-medium text-gray-700 text-right shrink-0">{item.name}</div>
                  <div className="flex-1 bg-gray-100 rounded-full h-7 relative overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full flex items-center justify-end pr-2`}
                      style={{ width: `${(item.max / 30) * 100}%` }}
                    >
                      <span className="text-xs font-bold text-white">${item.min}-${item.max}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">Scale: $0 — $30 per sq ft installed</p>
          </div>

          {/* Lifespan Timeline */}
          <div className="max-w-3xl mx-auto mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Expected Lifespan in Charlotte Climate</h3>
            <div className="space-y-3">
              {[
                { name: '3-Tab Shingles', years: 20, color: 'bg-blue-400' },
                { name: 'Architectural', years: 35, color: 'bg-blue-500' },
                { name: 'TPO/EPDM', years: 30, color: 'bg-green-500' },
                { name: 'Metal Roofing', years: 70, color: 'bg-amber-500' },
                { name: 'Cedar Shake', years: 50, color: 'bg-orange-500' },
                { name: 'Slate', years: 100, color: 'bg-red-500' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-28 text-sm font-medium text-gray-700 text-right shrink-0">{item.name}</div>
                  <div className="flex-1 bg-gray-100 rounded-full h-7 relative overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full flex items-center justify-end pr-2`}
                      style={{ width: `${(item.years / 100) * 100}%` }}
                    >
                      <span className="text-xs font-bold text-white">{item.years} yrs</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-3">Scale: 0 — 100 years</p>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            *Prices include materials and installation. Actual costs vary by project complexity.
          </p>
        </div>
      </section>

      {/* Residential Materials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Residential Roofing Materials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare materials for Charlotte homes - costs, lifespans, pros and cons
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {residentialMaterials.map((material) => (
              <div key={material.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{material.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{material.costRange}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1 justify-end">
                      <Clock className="w-4 h-4" />
                      {material.lifespan}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Pros
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {material.pros.map((pro) => (
                        <li key={pro}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-orange-600 mb-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> Cons
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {material.cons.map((con) => (
                        <li key={con}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <span className="text-sm font-medium text-gray-700">Best for: </span>
                  <span className="text-sm text-gray-600">{material.bestFor}</span>
                </div>
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

      {/* Roof Materials Image */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="relative w-full h-40 md:h-56 rounded-xl overflow-hidden">
            <Image
              src={stockImages.materialsTiles.src}
              alt={stockImages.materialsTiles.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
            />
          </div>
        </div>
      </section>

      {/* Commercial Materials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Commercial Roofing Materials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flat roof and low-slope options for Charlotte businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {commercialMaterials.map((material) => (
              <div key={material.name} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{material.name}</h3>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{material.costRange}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1 justify-end">
                      <Clock className="w-4 h-4" />
                      {material.lifespan}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" /> Pros
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {material.pros.map((pro) => (
                        <li key={pro}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-orange-600 mb-2 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" /> Cons
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {material.cons.map((con) => (
                        <li key={con}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <span className="text-sm font-medium text-gray-700">Best for: </span>
                  <span className="text-sm text-gray-600">{material.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charlotte Climate Considerations */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <ThermometerSun className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Charlotte Climate Considerations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Hot Summers</h3>
              <p className="text-sm text-gray-600 mb-3">
                Charlotte averages 90°F+ days frequently. Consider:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Light-colored shingles</li>
                <li>• Metal roofing (reflects heat)</li>
                <li>• Cool roof coatings</li>
                <li>• Proper attic ventilation</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Severe Storms</h3>
              <p className="text-sm text-gray-600 mb-3">
                Hurricanes and thunderstorms require:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Impact-resistant shingles</li>
                <li>• 130+ mph wind rating</li>
                <li>• Proper nail patterns</li>
                <li>• Metal or slate for maximum protection</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-3">Humidity</h3>
              <p className="text-sm text-gray-600 mb-3">
                High humidity can cause issues. Ensure:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Algae-resistant shingles</li>
                <li>• Proper ventilation</li>
                <li>• Quality underlayment</li>
                <li>• Regular maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Roofing Materials & Pricing FAQs"
        faqs={materialsFAQs}
      />

      {/* Final CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get an Accurate Estimate for Your Roof
          </h2>
          <p className="text-white/90 mb-8">
            Use our instant estimator or connect with Charlotte&apos;s top-rated roofers for detailed quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimate"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition"
            >
              Get Instant Estimate
            </Link>
            <Link
              href="/companies"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Find Roofing Companies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
