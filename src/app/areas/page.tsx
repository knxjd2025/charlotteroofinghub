import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Building2, Home, Briefcase, ArrowRight, ShieldCheck } from 'lucide-react'
import {
  neighborhoods,
  getCharlotteNeighborhoods,
  getSurroundingCities,
  getBusinessParks,
  getFeaturedNeighborhoods
} from '@/data/neighborhoods'
import { stockImages } from '@/data/stock-images'

export const metadata: Metadata = {
  title: 'Charlotte NC Roofing Service Areas | 40+ Neighborhoods & Cities',
  description: 'Find verified roofing contractors in your Charlotte NC neighborhood. We serve Ballantyne, South End, Myers Park, Huntersville, Matthews, and 40+ Charlotte communities.',
  keywords: [
    'charlotte nc roofing service areas',
    'charlotte neighborhoods roofing',
    'roofing near me charlotte nc',
    'local roofers ballantyne charlotte',
    'myers park charlotte roofing',
    'south end charlotte roofers',
    'huntersville nc roofing',
    'matthews nc roofing contractors'
  ]
}

export default function AreasPage() {
  const charlotteNeighborhoods = getCharlotteNeighborhoods()
  const surroundingCities = getSurroundingCities()
  const businessParks = getBusinessParks()
  const featuredAreas = getFeaturedNeighborhoods()

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 overflow-hidden">
        <Image
          src={stockImages.areasHero.src}
          alt={stockImages.areasHero.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/90 to-[#1E3A5F]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">40+ Charlotte Communities Served</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Roofing Services in Your Charlotte Neighborhood
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Our verified roofing contractors serve every neighborhood in Charlotte and surrounding areas.
              Find trusted, background-checked roofers near you.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Areas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Featured Service Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center">
                    {area.type === 'neighborhood' ? (
                      <Home className="w-6 h-6 text-primary group-hover:text-white" />
                    ) : area.type === 'city' ? (
                      <Building2 className="w-6 h-6 text-primary group-hover:text-white" />
                    ) : (
                      <Briefcase className="w-6 h-6 text-primary group-hover:text-white" />
                    )}
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 group-hover:bg-white/20 group-hover:text-white px-2 py-1 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Roofers
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-2 group-hover:text-white">{area.name}</h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm mb-4 line-clamp-2">
                  {area.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span>ZIP: {area.zipCodes.join(', ')}</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-primary group-hover:text-white font-medium">
                  Find Roofers <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Charlotte Neighborhoods */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Home className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Charlotte Neighborhoods
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {charlotteNeighborhoods.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white rounded-lg p-4 hover:shadow-md transition group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary mb-1">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-500">ZIP: {area.zipCodes[0]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Surrounding Cities */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Surrounding Cities & Towns
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {surroundingCities.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary mb-1">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {area.population} residents
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business Parks */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Business Parks & Commercial Areas
            </h2>
          </div>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Our verified commercial roofing contractors serve Charlotte&apos;s major business parks
            with TPO, EPDM, and metal roofing solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {businessParks.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white rounded-lg p-4 hover:shadow-md transition group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary mb-2">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {area.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don&apos;t See Your Area?
          </h2>
          <p className="text-white/90 mb-8">
            We serve all {neighborhoods.length}+ communities in the Charlotte metro area.
            Contact us to find verified roofers in your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/companies"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Browse All Roofers
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
