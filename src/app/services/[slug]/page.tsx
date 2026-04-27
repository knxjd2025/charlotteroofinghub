import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Phone, Star, ArrowRight, ShieldCheck, CheckCircle, Clock, DollarSign, AlertTriangle, MapPin } from 'lucide-react'
import { services, getServiceBySlug } from '@/data/services'
import { companies } from '@/data/companies'
import { getFeaturedNeighborhoods } from '@/data/neighborhoods'
import FAQSection from '@/components/shared/FAQSection'
import { stockImages } from '@/data/stock-images'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return {
    title: `${service.name} in Charlotte NC | Charlotte Roofing Hub`,
    description: `${service.description} Verified contractors with background checks. ${service.priceRange}. ${service.timeline}.`,
    keywords: service.keywords
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  // Get companies that offer this service (for now, show top 6)
  const serviceCompanies = companies.slice(0, 6)

  // Get featured areas for this service
  const featuredAreas = getFeaturedNeighborhoods().slice(0, 6)

  const categoryColors = {
    residential: 'bg-blue-100 text-blue-800',
    commercial: 'bg-purple-100 text-purple-800',
    emergency: 'bg-red-100 text-red-800',
    specialty: 'bg-green-100 text-green-800'
  }

  // Service JSON-LD: tells Google + AI engines exactly what's being offered,
  // by whom, where, and at roughly what price. Pairs with BreadcrumbList +
  // FAQPage already on this page for full rich-result coverage.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://charlotteroofinghub.com/services/${service.slug}#service`,
    name: `${service.name} in Charlotte, NC`,
    description: service.longDescription,
    serviceType: service.name,
    category: service.category,
    url: `https://charlotteroofinghub.com/services/${service.slug}`,
    provider: { '@id': 'https://charlotteroofinghub.com/#organization' },
    areaServed: {
      '@type': 'City',
      name: 'Charlotte',
      containedInPlace: { '@type': 'State', name: 'North Carolina' },
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      // Best-effort price extraction from the human-readable priceRange string.
      ...(() => {
        const match = service.priceRange.match(/\$([\d,]+)\s*-\s*\$([\d,]+)/)
        if (!match) return {}
        return {
          lowPrice: match[1].replace(/,/g, ''),
          highPrice: match[2].replace(/,/g, ''),
        }
      })(),
      availability: 'https://schema.org/InStock',
    },
    inLanguage: 'en-US',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Services', url: 'https://charlotteroofinghub.com/services' },
          { name: service.name, url: `https://charlotteroofinghub.com/services/${service.slug}` },
        ]}
      />
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 overflow-hidden">
        <Image
          src={stockImages.serviceStormDamage.src}
          alt={stockImages.serviceStormDamage.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${service.category === 'emergency' ? 'bg-gradient-to-r from-red-900/90 to-red-800/70' : 'bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/70'}`} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/services" className="text-white/70 hover:text-white text-sm">
                Services
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-sm">{service.name}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className={`text-xs px-3 py-1 rounded-full font-semibold ${categoryColors[service.category]}`}>
                {service.category.charAt(0).toUpperCase() + service.category.slice(1)}
              </span>
              {service.category === 'emergency' && (
                <span className="flex items-center gap-1 text-sm bg-white/20 px-3 py-1 rounded-full">
                  <AlertTriangle className="w-4 h-4" />
                  24/7 Available
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {service.name} in Charlotte, NC
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8">
              {service.longDescription}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-sm text-white/70">Price Range</div>
                  <div className="font-semibold">{service.priceRange}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-sm text-white/70">Timeline</div>
                  <div className="font-semibold">{service.timeline}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-sm text-white/70">Contractors</div>
                  <div className="font-semibold">Verified & Background Checked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Benefits of {service.name}
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Process
              </h2>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Companies */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Verified Contractors for {service.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every contractor below has been personally verified through owner meetings
              and background checks. All offer {service.name.toLowerCase()} services in Charlotte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCompanies.map((company) => (
              <div key={company.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{company.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{company.googleRating}</span>
                      <span className="text-gray-500 text-sm">({company.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {company.description}
                </p>

                <div className="flex items-center justify-between">
                  {company.phone && (
                    <a
                      href={`tel:${company.phone}`}
                      className="flex items-center gap-2 text-primary hover:text-primary-light"
                    >
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">{company.phone}</span>
                    </a>
                  )}
                  <Link
                    href={`/companies/${company.slug}`}
                    className="text-sm font-medium text-primary hover:text-primary-light flex items-center gap-1"
                  >
                    View Profile <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              View All Verified Contractors
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white">
        <FAQSection
          title={`${service.name} Questions`}
          faqs={service.faqs}
        />
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {service.name} in Charlotte Neighborhoods
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl">
            Our verified contractors provide {service.name.toLowerCase()} services throughout the Charlotte metro area.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group p-4 bg-white rounded-lg hover:bg-primary hover:text-white transition text-center"
              >
                <MapPin className="w-5 h-5 text-primary group-hover:text-white mx-auto mb-2" />
                <h3 className="font-semibold text-sm text-gray-900 group-hover:text-white">{area.name}</h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              View All 40+ Service Areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Related Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter(s => s.slug !== service.slug && s.category === service.category)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}`}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition group"
                >
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary mb-2">
                    {relatedService.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedService.description}
                  </p>
                  <span className="text-primary font-medium flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 ${service.category === 'emergency' ? 'bg-red-700' : 'hero-gradient'} text-white`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {service.category === 'emergency'
              ? `Need Emergency ${service.name}?`
              : `Ready to Get ${service.name}?`}
          </h2>
          <p className="text-white/90 mb-8">
            {service.category === 'emergency'
              ? 'Our verified contractors offer 24/7 emergency response throughout Charlotte.'
              : `Connect with our verified, background-checked contractors for ${service.name.toLowerCase()} in Charlotte.`}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/companies"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Find a Contractor
            </Link>
            <Link
              href="/estimate"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition"
            >
              Get Instant Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
