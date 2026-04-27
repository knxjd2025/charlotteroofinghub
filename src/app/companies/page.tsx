import type { Metadata } from 'next'
import Image from 'next/image'
import { Building2, Search, Filter, MapPin } from 'lucide-react'
import ShuffledCompanyGrid from '@/components/companies/ShuffledCompanyGrid'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { companies, getAllCompanies } from '@/data/companies'
import { stockImages } from '@/data/stock-images'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'
import FAQSection from '@/components/shared/FAQSection'

export const metadata: Metadata = {
  // Title targets primary keyword "roofing companies charlotte nc" (600 vol, KD 5)
  title: 'Roofing Companies in Charlotte NC | Curated List of Local Roofers',
  description: 'A curated list of suggested local Charlotte roofing companies — many of whom contribute content to Charlotte Roofing Hub. Free site, we don\'t sell leads. Every company has a 4.8+ star Google rating.',
  keywords: [
    'roofing companies charlotte nc',
    'roofing companies in charlotte nc',
    'best roofing company charlotte nc',
    'charlotte roofing companies',
    'charlotte roofing contractors',
    'best roofers charlotte',
    'top rated roofers charlotte',
    'local roofing companies charlotte'
  ],
  alternates: { canonical: 'https://charlotteroofinghub.com/companies' },
  openGraph: {
    title: 'Roofing Companies in Charlotte NC | Curated Local Roofers',
    description: 'A curated list of suggested local Charlotte roofing companies. Free site, no lead selling.',
    url: 'https://charlotteroofinghub.com/companies',
  },
}

// Page-level FAQ. Targets "roofing companies charlotte nc" search variants
// and feeds Google's PAA box + AI Overview citation pool.
const companiesPageFAQs = [
  {
    question: 'How many roofing companies are listed on Charlotte Roofing Hub?',
    answer: `Charlotte Roofing Hub maintains a curated list of ${companies.length} suggested local Charlotte roofing companies serving the Charlotte metro and surrounding areas. Many of those companies also contribute content to the site. We don't sell leads.`,
  },
  {
    question: 'How do I choose the best roofing company in Charlotte NC?',
    answer: 'To choose the best roofing company in Charlotte NC: 1) Verify a 4.8+ star Google rating from real reviews, 2) Confirm current NC roofing license and liability insurance, 3) Look for manufacturer certifications such as GAF Master Elite or Owens Corning Platinum, 4) Get at least three written estimates, 5) Check for BBB accreditation. Every roofing company suggested on Charlotte Roofing Hub already meets these criteria.',
  },
  {
    question: 'What does it cost to hire a roofing company in Charlotte?',
    answer: 'In Charlotte NC, residential roof replacement typically costs $8,000–$25,000 depending on size and materials. Asphalt shingles run $3.50–$7.00 per square foot installed; metal roofing $7–$14 per square foot; premium materials like slate $20+ per square foot. Roof repairs typically range from $300 to $2,500. Estimates from any suggested Charlotte Roofing Hub contractor are free.',
  },
  {
    question: 'Are these Charlotte roofing companies licensed and insured?',
    answer: 'Yes — every roofing company suggested on Charlotte Roofing Hub holds an active North Carolina general contractor license (or roofing-specific license where required), general liability insurance, and workers\' compensation coverage. We confirm these credentials directly with the state and the company\'s insurer before listing.',
  },
  {
    question: 'Do these Charlotte roofers handle insurance claims for storm damage?',
    answer: 'Most listed Charlotte roofing companies handle insurance claims for hail, wind, and storm damage, including documentation, adjuster meetings, and supplement requests. Filter the list by service or contact a contractor directly to confirm their insurance-claim assistance process before scheduling an inspection.',
  },
  {
    question: 'Which Charlotte neighborhoods do these roofing companies serve?',
    answer: 'Charlotte Roofing Hub contractors collectively serve 40+ neighborhoods and surrounding cities including Ballantyne, Myers Park, South End, NoDa, Dilworth, Matthews, Mint Hill, Huntersville, Cornelius, Davidson, Mooresville, Concord, Indian Trail, Waxhaw, Pineville, Gastonia, Fort Mill, Rock Hill, and Kannapolis. Most companies serve the full Charlotte metro within a 30–50 mile radius.',
  },
]

// Schema for company list
function CompanyListSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Roofing Companies in Charlotte, NC",
    description: "Curated list of 4.8+ star rated roofing companies serving Charlotte and surrounding areas",
    numberOfItems: companies.length,
    itemListElement: companies.map((company, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "RoofingContractor",
        name: company.name,
        description: company.description || `${company.name} - Quality roofing services in Charlotte, NC`,
        address: {
          "@type": "PostalAddress",
          addressLocality: company.city,
          addressRegion: company.state,
          postalCode: company.zipCode
        },
        // Only emit aggregateRating when both rating AND reviewCount are real.
        // The previous `|| 1` fallback fabricated a "1 review" rich snippet
        // for any company missing a count and risked deceptive-markup flags.
        aggregateRating:
          company.googleRating && company.reviewCount
            ? {
                "@type": "AggregateRating",
                ratingValue: company.googleRating,
                reviewCount: company.reviewCount,
                bestRating: 5,
                worstRating: 1,
              }
            : undefined,
        url: `https://charlotteroofinghub.com/companies/${company.slug}`
      }
    }))
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function CompaniesPage() {
  const allCompanies = getAllCompanies()

  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Roofing Companies', url: 'https://charlotteroofinghub.com/companies' },
        ]}
      />
      <CompanyListSchema />

      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image
          src={stockImages.companiesHero.src}
          alt={stockImages.companiesHero.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 to-[#1E3A5F]/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Charlotte Roofing Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Top-Rated Roofing Companies in Charlotte, NC
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Verified roofing companies in Charlotte, all with 4.8+ star Google ratings.
              Listed for homeowner education — not promotion.
            </p>

            {/* Search Bar */}
            <form className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="search"
                placeholder="Search by company name, city, or service..."
                className="w-full pl-12 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Filter className="w-4 h-4" />
              Filter:
            </span>
            <button className="px-3 py-1.5 bg-primary text-white rounded-full text-sm font-medium">
              All Companies
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
              Residential
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
              Commercial
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
              Metal Roofing
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200">
              Storm Damage
            </button>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* All Companies */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              All Companies ({allCompanies.length})
            </h2>
          </div>

          <ShuffledCompanyGrid companies={allCompanies} shuffleCount={6} />

          {/* Instant Estimate CTA */}
          <div className="mt-12">
            <InstantEstimateCTA variant="inline" />
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Areas Served by Our Roofing Companies
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Charlotte', 'Matthews', 'Mint Hill', 'Huntersville', 'Mooresville',
              'Concord', 'Kannapolis', 'Gastonia', 'Rock Hill', 'Fort Mill',
              'Indian Trail', 'Weddington', 'Pineville', 'Ballantyne', 'Davidson',
              'Cornelius', 'Belmont', 'Harrisburg', 'Stallings', 'Dilworth'
            ].map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                <MapPin className="w-3 h-3" />
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — FAQSection auto-injects FAQPage JSON-LD for SERP rich results */}
      <section className="bg-gray-50">
        <FAQSection
          title="Roofing Companies in Charlotte NC — FAQ"
          faqs={companiesPageFAQs}
        />
      </section>
    </>
  )
}
