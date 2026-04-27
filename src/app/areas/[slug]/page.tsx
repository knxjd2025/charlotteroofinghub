import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Phone, Star, ArrowRight, ShieldCheck, UserCheck, Home, Building2, CheckCircle, Wrench } from 'lucide-react'
import { neighborhoods, getNeighborhoodBySlug } from '@/data/neighborhoods'
import { companies } from '@/data/companies'
import { services } from '@/data/services'
import FAQSection from '@/components/shared/FAQSection'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return neighborhoods.map((area) => ({
    slug: area.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const area = getNeighborhoodBySlug(slug)

  if (!area) {
    return { title: 'Area Not Found' }
  }

  // Determine the right title format based on area type
  const isCharlotteNeighborhood = area.type === 'neighborhood'
  const isBusinessPark = area.type === 'business-park'
  const isSurroundingCity = area.type === 'city'

  let title: string
  if (isBusinessPark) {
    title = `Commercial Roofing Contractors in ${area.name} Charlotte NC`
  } else if (isCharlotteNeighborhood) {
    title = `Roofing Contractors in ${area.name} Charlotte NC`
  } else if (isSurroundingCity) {
    title = `Roofing Contractors in ${area.name} NC`
  } else {
    title = `Roofing Contractors in ${area.name} Charlotte NC`
  }

  return {
    title: `${title} | Charlotte Roofing Hub`,
    description: `Find verified roofing contractors in ${area.name}${isCharlotteNeighborhood ? ', Charlotte NC' : ''}. Background-checked local roofers serving ZIP codes ${area.zipCodes.join(', ')}. Free estimates, 4.8+ star ratings.`,
    keywords: [
      `roofing ${area.name.toLowerCase()}`,
      `roofers ${area.name.toLowerCase()}`,
      `roof repair ${area.name.toLowerCase()}`,
      `roofing contractors ${area.zipCodes[0]}`,
      `best roofers ${area.name.toLowerCase()} nc`,
      `roof replacement ${area.name.toLowerCase()}`,
      isCharlotteNeighborhood ? `${area.name.toLowerCase()} charlotte roofing` : `${area.name.toLowerCase()} roofing companies`
    ]
  }
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params
  const area = getNeighborhoodBySlug(slug)

  if (!area) {
    notFound()
  }

  // Get companies that might serve this area (for now, show top 6)
  const areaCompanies = companies.slice(0, 6)

  const typeLabel = area.type === 'neighborhood' ? 'Neighborhood' :
    area.type === 'city' ? 'City' : 'Business Park'

  const faqs = [
    {
      question: `What is the average cost for roof replacement in ${area.name}?`,
      answer: `In ${area.name}, roof replacement typically costs between $8,000 and $25,000 for residential homes, depending on size and materials. ${area.medianHomeValue ? `With median home values around ${area.medianHomeValue}, many homeowners choose quality materials for long-term value.` : ''} Get a free estimate from our verified contractors.`
    },
    {
      question: `How do I find a reliable roofer in ${area.name}?`,
      answer: `Charlotte Roofing Hub lists only verified contractors who serve ${area.name}. Every roofer has been personally vetted through face-to-face meetings and background checks, with verified 4.8+ star ratings. This protects you from storm chasers and unqualified contractors.`
    },
    {
      question: `What roofing materials are popular in ${area.name}?`,
      answer: `Common roofing materials in ${area.name} include: ${area.commonRoofTypes.join(', ')}. The best choice depends on your home's style, budget, and local requirements. Our verified contractors can recommend the best options for your specific needs.`
    },
    {
      question: `Do ${area.name} homes have specific roofing challenges?`,
      answer: `Yes, ${area.name} properties often face these roofing considerations: ${area.challenges.join(', ')}. Our verified contractors are experienced with these local challenges and can provide appropriate solutions.`
    }
  ]

  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Service Areas', url: 'https://charlotteroofinghub.com/areas' },
          { name: area.name, url: `https://charlotteroofinghub.com/areas/${area.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/areas" className="text-white/70 hover:text-white text-sm">
                Service Areas
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-sm">{area.name}</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              {area.type === 'neighborhood' ? (
                <Home className="w-4 h-4 text-green-400" />
              ) : area.type === 'city' ? (
                <Building2 className="w-4 h-4 text-green-400" />
              ) : (
                <Building2 className="w-4 h-4 text-green-400" />
              )}
              <span className="text-sm font-medium">{typeLabel} • ZIP: {area.zipCodes.join(', ')}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Verified Roofing Contractors in {area.name}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8">
              {area.description}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <UserCheck className="w-4 h-4 text-green-400" />
                <span className="text-sm">Personally Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span className="text-sm">Background Checked</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Star className="w-4 h-4 text-green-400" />
                <span className="text-sm">4.8+ Stars Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Area Stats */}
      {(area.population || area.medianHomeValue) && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {area.population && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{area.population}</div>
                  <div className="text-sm text-gray-600">Population</div>
                </div>
              )}
              {area.medianHomeValue && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{area.medianHomeValue}</div>
                  <div className="text-sm text-gray-600">Median Home Value</div>
                </div>
              )}
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{area.zipCodes.length}</div>
                <div className="text-sm text-gray-600">ZIP Code{area.zipCodes.length > 1 ? 's' : ''}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Verified Roofers</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Common Roof Types */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Popular Roofing in {area.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Common Roofing Materials</h3>
              <ul className="space-y-3">
                {area.commonRoofTypes.map((type) => (
                  <li key={type} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Local Roofing Considerations</h3>
              <ul className="space-y-3">
                {area.challenges.map((challenge) => (
                  <li key={challenge} className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Available in This Area */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Roofing Services in {area.name}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services.slice(0, 8).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition"
              >
                <Wrench className="w-6 h-6 text-primary group-hover:text-white mb-2" />
                <h3 className="font-semibold text-sm group-hover:text-white">{service.name}</h3>
                <p className="text-xs text-gray-500 group-hover:text-white/70 mt-1">{service.priceRange}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
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

      {/* Verified Companies */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Verified Roofers Serving {area.name}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every contractor below has been personally verified through owner meetings
              and background checks. All serve the {area.zipCodes.join(', ')} ZIP code area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areaCompanies.map((company) => (
              <div key={company.id} className="bg-gray-50 rounded-xl p-6">
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
              View All Verified Roofers
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <FAQSection
          title={`Roofing Questions for ${area.name}`}
          faqs={faqs}
        />
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Find a Roofer in {area.name}?
          </h2>
          <p className="text-white/90 mb-8">
            Get connected with our verified, background-checked roofing contractors
            who serve {area.name} and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/companies"
              className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
            >
              Browse Companies
            </Link>
            <a
              href="https://instantroofestimate.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition"
            >
              Get Instant Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
