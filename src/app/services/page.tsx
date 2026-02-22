import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Home, Building2, AlertTriangle, Wrench, ArrowRight, ShieldCheck, Star, Clock, DollarSign } from 'lucide-react'
import {
  services,
  getResidentialServices,
  getCommercialServices,
  getFeaturedServices
} from '@/data/services'
import { stockImages } from '@/data/stock-images'

export const metadata: Metadata = {
  title: 'Roofing Services | Roof Repair, Replacement & More in Charlotte NC',
  description: 'Complete roofing services in Charlotte: roof replacement, repair, emergency services, metal roofing, shingles, commercial roofing. All contractors verified with background checks.',
  keywords: [
    'roofing services charlotte nc',
    'roof replacement charlotte',
    'roof repair charlotte',
    'commercial roofing charlotte',
    'emergency roof repair',
    'metal roofing charlotte',
    'shingle roofing'
  ],
  openGraph: {
    title: 'Roofing Services | Roof Repair, Replacement & More in Charlotte NC',
    description: 'Complete roofing services in Charlotte: roof replacement, repair, emergency services, metal roofing, shingles, commercial roofing.',
    url: 'https://charlotteroofinghub.com/services',
  },
}

// Map icon names to components
const iconMap: { [key: string]: React.ElementType } = {
  Home,
  Building2,
  AlertTriangle,
  Wrench,
  Shield: ShieldCheck,
  Layers: Home,
  Square: Building2,
  Search: Wrench,
  Droplets: Home,
  Sun: Home,
  Wind: Home,
  Settings: Wrench,
  CloudLightning: AlertTriangle
}

export default function ServicesPage() {
  const residentialServices = getResidentialServices()
  const commercialServices = getCommercialServices()
  const emergencyServices = services.filter(s => s.category === 'emergency')
  const specialtyServices = services.filter(s => s.category === 'specialty')
  const featuredServices = getFeaturedServices()

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 overflow-hidden">
        <Image
          src={stockImages.servicesHero.src}
          alt={stockImages.servicesHero.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/90 to-[#1E3A5F]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Wrench className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium">All Services • Verified Contractors Only</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Complete Roofing Services in Charlotte
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              From repairs to complete replacements, our verified contractors handle every roofing need.
              All personally vetted with background checks and 4.8+ star ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Most Requested Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => {
              const IconComponent = iconMap[service.icon] || Wrench
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      service.category === 'emergency'
                        ? 'bg-red-100 text-red-800 group-hover:bg-red-500 group-hover:text-white'
                        : 'bg-green-100 text-green-800 group-hover:bg-white/20 group-hover:text-white'
                    }`}>
                      {service.category === 'emergency' ? '24/7 Available' : 'Popular'}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl mb-2 group-hover:text-white">{service.name}</h3>
                  <p className="text-gray-600 group-hover:text-white/80 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 group-hover:text-white/70 mb-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{service.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.timeline}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-primary group-hover:text-white font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Home className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Residential Roofing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{service.priceRange}</span>
                  <span className="text-primary font-medium flex items-center gap-1">
                    Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Commercial Roofing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commercialServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-gray-500">{service.timeline}</span>
                  <span className="text-primary font-medium flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-12 md:py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Emergency Roofing Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl p-6 border-2 border-red-200 hover:border-red-400 transition group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-semibold">
                    24/7 AVAILABLE
                  </span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-600 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <span className="text-red-600 font-medium flex items-center gap-1">
                  Get Emergency Help <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-8 h-8 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Specialty Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition group"
              >
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{service.priceRange}</span>
                  <span className="text-primary font-medium flex items-center gap-1">
                    Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Verified Contractors */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Use Our Verified Contractors?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every service is performed by contractors we&apos;ve personally vetted
              through face-to-face meetings and background checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Background Checked</h3>
              <p className="text-gray-600 text-sm">
                Every contractor passes our thorough background screening process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">4.8+ Star Ratings</h3>
              <p className="text-gray-600 text-sm">
                Only contractors with verified excellent reviews make our list.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Fair Pricing</h3>
              <p className="text-gray-600 text-sm">
                Our contractors provide honest, competitive pricing with no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Roofing Service in Charlotte?
          </h2>
          <p className="text-white/90 mb-8">
            Browse our {services.length} roofing services or get an instant estimate
            for your Charlotte home.
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
