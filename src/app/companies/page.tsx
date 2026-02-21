import type { Metadata } from 'next'
import Image from 'next/image'
import { Building2, Search, Filter, MapPin } from 'lucide-react'
import ShuffledCompanyGrid from '@/components/companies/ShuffledCompanyGrid'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { companies, getAllCompanies } from '@/data/companies'
import { stockImages } from '@/data/stock-images'

export const metadata: Metadata = {
  title: 'Top Roofing Companies in Charlotte NC | 4.8+ Star Rated',
  description: 'Browse 25+ top-rated roofing companies in Charlotte, NC. All companies have 4.8+ star Google ratings. Find the perfect roofer for your residential or commercial project.',
  keywords: [
    'roofing companies charlotte nc',
    'best roofers charlotte',
    'charlotte roofing contractors',
    'top rated roofers charlotte',
    'local roofing companies charlotte'
  ],
  openGraph: {
    title: 'Top Roofing Companies in Charlotte NC | 4.8+ Star Rated',
    description: 'Browse 25+ top-rated roofing companies in Charlotte, NC. All companies have 4.8+ star Google ratings.',
    url: 'https://charlotteroofinghub.com/companies',
  },
}

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
        aggregateRating: company.googleRating ? {
          "@type": "AggregateRating",
          ratingValue: company.googleRating,
          reviewCount: company.reviewCount || 1,
          bestRating: 5
        } : undefined,
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
    </>
  )
}
