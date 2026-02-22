import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle, RefreshCw, Users, BookOpen, FileCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Editorial Guidelines | Charlotte Roofing Hub',
  description: 'How Charlotte Roofing Hub researches, verifies, and publishes roofing content. Our editorial standards, fact-checking process, and commitment to accuracy.',
  keywords: [
    'charlotte roofing hub editorial policy',
    'roofing content accuracy',
    'trusted roofing information charlotte'
  ],
  openGraph: {
    title: 'Editorial Guidelines | Charlotte Roofing Hub',
    description: 'How Charlotte Roofing Hub researches, verifies, and publishes roofing content. Our editorial standards and commitment to accuracy.',
    url: 'https://charlotteroofinghub.com/editorial-guidelines',
  },
}

const editorialPrinciples = [
  {
    icon: CheckCircle,
    title: 'Accuracy First',
    description: 'Every cost figure, material specification, and claim is verified against manufacturer data, industry reports, and local Charlotte market conditions before publication.'
  },
  {
    icon: Users,
    title: 'Expert-Reviewed',
    description: 'All content is reviewed by licensed roofing professionals with active experience in the Charlotte market. Our primary reviewer, James at Best Roofing Now, has hands-on roofing experience in the Charlotte metro area.'
  },
  {
    icon: RefreshCw,
    title: 'Regularly Updated',
    description: 'Pricing data is reviewed quarterly to reflect current Charlotte labor and material rates. Articles are updated whenever industry standards, NC building codes, or local regulations change.'
  },
  {
    icon: Shield,
    title: 'Independence',
    description: 'No roofing company pays for placement or favorable coverage on Charlotte Roofing Hub. Our company directory lists all qualifying contractors equally, with randomized ordering to prevent bias.'
  },
]

export default function EditorialGuidelinesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <FileCheck className="w-6 h-6" />
            <span className="text-sm font-medium text-white/80">Transparency</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Editorial Guidelines
          </h1>
          <p className="text-lg text-white/90">
            How we research, verify, and publish roofing content for Charlotte homeowners.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Editorial Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {editorialPrinciples.map((principle) => (
              <div key={principle.title} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <principle.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-gray-900">{principle.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            How Is Our Content Researched and Verified?
          </h2>
          <p className="text-gray-600 mb-8">
            <strong>Every article on Charlotte Roofing Hub goes through a four-step editorial process: initial research from primary sources, expert review by licensed Charlotte-area roofers, fact-checking of all data points and claims, and ongoing updates to keep information current with Charlotte market conditions.</strong>
          </p>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Primary Research</h3>
                  <p className="text-gray-600 text-sm">We source cost data from Charlotte-area material suppliers, manufacturer spec sheets, NC building code documentation, and industry publications like Remodeling Magazine and the National Roofing Contractors Association (NRCA). We do not rely on national averages — all pricing reflects the Charlotte metro market.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Expert Review</h3>
                  <p className="text-gray-600 text-sm">Content is reviewed by James at Best Roofing Now and contributing licensed roofing professionals who operate in the Charlotte area. Reviewers verify technical accuracy, validate cost estimates against their real-world project experience, and flag any outdated information.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Fact-Checking</h3>
                  <p className="text-gray-600 text-sm">All specific claims, statistics, regulations, and phone numbers are verified against authoritative sources. NC building code references are checked against the current NC Residential Code. Insurance information is verified with the NC Department of Insurance. Government program details are confirmed directly with each agency.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Ongoing Updates</h3>
                  <p className="text-gray-600 text-sm">Pricing guides are reviewed quarterly and updated whenever material or labor costs shift significantly. Regulatory content is updated when NC building codes or Charlotte-Mecklenburg ordinances change. Articles are marked with their last update date so readers know how current the information is.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            What Sources Does Charlotte Roofing Hub Use?
          </h2>
          <p className="text-gray-600 mb-6">
            <strong>We rely on primary sources including manufacturer product data, NC Licensing Board records, NRCA industry reports, Charlotte-area contractor pricing data, and government agency resources. We do not publish unverified claims from secondary aggregator websites.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { category: 'Pricing & Costs', sources: ['Charlotte-area material suppliers', 'Contractor project estimates', 'Remodeling Magazine Cost vs. Value', 'RS Means construction cost data'] },
              { category: 'Regulations & Codes', sources: ['NC Residential Building Code', 'Charlotte-Mecklenburg Building Standards', 'NC Licensing Board for General Contractors', 'NC Department of Insurance'] },
              { category: 'Materials & Specifications', sources: ['GAF, Owens Corning, CertainTeed spec sheets', 'NRCA Technical Publications', 'Metal Roofing Alliance', 'ENERGY STAR Product Finder'] },
              { category: 'Weather & Climate', sources: ['National Weather Service (Charlotte office)', 'NOAA Storm Events Database', 'NC Climate Office at NC State', 'Charlotte-Mecklenburg Emergency Management'] },
            ].map((group) => (
              <div key={group.category} className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{group.category}</h3>
                <ul className="space-y-1">
                  {group.sources.map((source) => (
                    <li key={source} className="text-sm text-gray-600 flex items-start gap-2">
                      <BookOpen className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Directory Policy */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            How Are Companies Listed on Charlotte Roofing Hub?
          </h2>
          <p className="text-gray-600 mb-6">
            <strong>Companies are listed on Charlotte Roofing Hub based on publicly available information, not paid placement. All listed companies must have a 4.8+ star Google rating, operate in the Charlotte metro area, and hold appropriate NC licensing. Company order is randomized on each page load to prevent positional bias.</strong>
          </p>

          <div className="bg-white rounded-xl p-6 border">
            <h3 className="font-bold text-gray-900 mb-3">Listing Criteria</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                4.8+ star average on Google Reviews with a meaningful review count
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Active operations in the Charlotte-Mecklenburg metro area
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Appropriate NC General Contractor licensing for their scope of work
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                No paid placement or sponsored listings — all companies are treated equally
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Display order is randomized, not ranked by payment or favoritism
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Content?</h2>
          <p className="text-gray-600 mb-6">
            If you spot an error, have a correction, or want to suggest a topic, we want to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition">
              Contact Us
            </Link>
            <Link href="/about" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
              About Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
