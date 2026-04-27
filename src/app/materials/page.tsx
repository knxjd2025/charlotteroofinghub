import type { Metadata } from 'next'
import Link from 'next/link'
import { DollarSign, ArrowRight, CheckCircle, AlertCircle, Clock, Shield, ThermometerSun } from 'lucide-react'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
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
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Roofing Materials & Prices', url: 'https://charlotteroofinghub.com/materials' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <DollarSign className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Charlotte Roofing Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Roofing Materials & Prices in Charlotte, NC
            </h1>
            {/* AEO direct-answer paragraph (~55 words) for AI Overviews extraction */}
            <p className="text-lg md:text-xl text-white/90 mb-8" data-speakable="true">
              Roofing materials in Charlotte NC range from asphalt shingles at $3.50–$7 per square
              foot installed (15–35 year lifespan) to metal roofing at $7–$14 per square foot
              (40–70 years), commercial TPO/EPDM/PVC at $5–$10, and slate at $15–$30+. The right
              choice depends on budget, home style, HOA rules, and Charlotte&apos;s humid-subtropical
              climate.
            </p>
            <a
              href="https://instantroofestimate.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-red-600 transition"
            >
              Get Your Instant Estimate
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Quick Cost Overview */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Quick Cost Overview (per square foot, installed)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <p className="text-center text-sm text-gray-500 mt-4">
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
            <a
              href="https://instantroofestimate.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition"
            >
              Get Instant Estimate
            </a>
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
