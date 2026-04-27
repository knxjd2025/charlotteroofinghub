import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, Globe, MapPin, Mail, Star, CheckCircle, ArrowLeft, ExternalLink, Award, Clock, Shield } from 'lucide-react'
import StarRating from '@/components/shared/StarRating'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import CompanyCard from '@/components/companies/CompanyCard'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'
import { companies, getCompanyBySlug, getRegularCompanies } from '@/data/companies'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return companies.map((company) => ({
    slug: company.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const company = getCompanyBySlug(slug)

  if (!company) {
    return {
      title: 'Company Not Found',
    }
  }

  return {
    title: `${company.name} | Charlotte Roofing Company`,
    description: company.description || `${company.name} is a top-rated roofing company in ${company.city}, NC with a ${company.googleRating} star Google rating. Specializing in ${company.services.join(', ')}.`,
    openGraph: {
      title: `${company.name} | Charlotte Roofing Company`,
      description: company.description || `${company.name} - ${company.googleRating} star rated roofing company in ${company.city}, NC`,
      url: `https://charlotteroofinghub.com/companies/${company.slug}`,
    },
  }
}

export default async function CompanyDetailPage({ params }: PageProps) {
  const { slug } = await params
  const company = getCompanyBySlug(slug)

  if (!company) {
    notFound()
  }

  const relatedCompanies = getRegularCompanies()
    .filter(c => c.id !== company.id)
    .slice(0, 3)

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: company.name,
    description: company.description || `${company.name} - Quality roofing services in ${company.city}, NC`,
    url: `https://charlotteroofinghub.com/companies/${company.slug}`,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressRegion: company.state,
      postalCode: company.zipCode,
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.2271,
      longitude: -80.8431
    },
    aggregateRating: company.googleRating ? {
      "@type": "AggregateRating",
      ratingValue: company.googleRating,
      reviewCount: company.reviewCount || 1,
      bestRating: 5
    } : undefined,
    priceRange: "$$",
    areaServed: {
      "@type": "City",
      name: "Charlotte",
      containedInPlace: {
        "@type": "State",
        name: "North Carolina"
      }
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: company.services.map(service => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.charAt(0).toUpperCase() + service.slice(1) + " Roofing"
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Companies', url: 'https://charlotteroofinghub.com/companies' },
          { name: company.name, url: `https://charlotteroofinghub.com/companies/${company.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/companies" className="text-gray-500 hover:text-primary">Companies</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{company.name}</span>
          </nav>
        </div>
      </div>

      {/* Company Header */}
      <section className={`py-12 ${company.isFeatured ? 'bg-gradient-to-br from-amber-50 to-orange-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all companies
          </Link>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Logo/Initial */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-primary rounded-xl flex items-center justify-center text-white">
                {company.logoUrl ? (
                  <img src={company.logoUrl} alt={company.name} className="w-28 h-28 object-contain" />
                ) : (
                  <span className="text-5xl font-bold">{company.name.charAt(0)}</span>
                )}
              </div>
            </div>

            {/* Company Info */}
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                {company.isFeatured && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 featured-badge rounded-full text-sm">
                    <Award className="w-4 h-4" />
                    Featured Company
                  </span>
                )}
                {company.isVerified && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Verified
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {company.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <StarRating
                  rating={company.googleRating || 0}
                  reviewCount={company.reviewCount ?? undefined}
                  size="lg"
                />
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{company.city}, {company.state} {company.zipCode}</span>
                </div>
              </div>

              <p className="text-gray-600 text-lg mb-6 max-w-3xl">
                {company.description || `${company.name} is a trusted roofing contractor serving ${company.city} and the greater Charlotte area. With a ${company.googleRating} star Google rating from ${company.reviewCount} reviews, they specialize in quality roofing services for residential and commercial properties.`}
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-3">
                {company.phone && (
                  <a
                    href={`tel:${company.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
                  >
                    <Phone className="w-5 h-5" />
                    {company.phone}
                  </a>
                )}
                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition"
                  >
                    <Globe className="w-5 h-5" />
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {company.email && (
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Details */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Services */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Services Offered</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {company.services.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span className="font-medium capitalize">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materials */}
              {company.materials.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Roofing Materials</h2>
                  <div className="flex flex-wrap gap-2">
                    {company.materials.map((material) => (
                      <span
                        key={material}
                        className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 capitalize"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Why Choose {company.name}?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{company.googleRating}+ Star Rating</h3>
                      <p className="text-sm text-gray-600">Verified by {company.reviewCount} Google reviews</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Licensed & Insured</h3>
                      <p className="text-sm text-gray-600">Fully licensed roofing contractor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Locally Owned</h3>
                      <p className="text-sm text-gray-600">Based in {company.city}, NC</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Free Estimates</h3>
                      <p className="text-sm text-gray-600">No-obligation roof inspections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Instant Estimate */}
              <InstantEstimateCTA variant="sidebar" />

              {/* Contact Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {company.phone && (
                    <a
                      href={`tel:${company.phone}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-primary"
                    >
                      <Phone className="w-5 h-5 text-primary" />
                      <span>{company.phone}</span>
                    </a>
                  )}
                  {company.email && (
                    <a
                      href={`mailto:${company.email}`}
                      className="flex items-center gap-3 text-gray-700 hover:text-primary"
                    >
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="break-all">{company.email}</span>
                    </a>
                  )}
                  {company.address && (
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{company.address}<br />{company.city}, {company.state} {company.zipCode}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Companies */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other Top-Rated Roofers in Charlotte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCompanies.map((c) => (
              <CompanyCard key={c.id} company={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
