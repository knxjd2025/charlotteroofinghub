import { Search, Building2, Home as HomeIcon, DollarSign, ArrowRight, ShieldCheck, UserCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { stockImages } from '@/data/stock-images'

export default function Hero() {
  return (
    <section className="relative text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <Image
        src={stockImages.heroBackground.src}
        alt={stockImages.heroBackground.alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/90 to-[#1E3A5F]/70" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Community Roofing Education | Built by Charlotte Roofers</span>
          </div>

          {/* Main Headline - Voice Search Optimized */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Charlotte&apos;s Only <span className="text-accent">Locally-Verified</span> Roofing Directory
          </h1>

          {/* Subheadline - Trust Messaging */}
          <p className="hero-description text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto" data-speakable="true">
            A free roofing education resource created by local Charlotte roofers
            to help homeowners make informed decisions about their roofs.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <UserCheck className="w-4 h-4 text-green-400" />
              <span className="text-sm">Face-to-Face Verified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span className="text-sm">Background Checked</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Building2 className="w-4 h-4 text-green-400" />
              <span className="text-sm">Founded by a Local Roofer</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-10">
            <form action="/companies" method="GET" className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="search"
                placeholder="Search roofing companies, services..."
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-base"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-secondary text-white font-semibold rounded-full hover:bg-red-600 transition"
              >
                Search
              </button>
            </form>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              href="/companies"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition"
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Find Companies</span>
                <span className="text-sm text-white/70">25+ Top Roofers</span>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition" />
            </Link>

            <Link
              href="/residential"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition"
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <HomeIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Residential</span>
                <span className="text-sm text-white/70">Home Roofing</span>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition" />
            </Link>

            <Link
              href="/materials"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition"
            >
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block font-semibold">Materials & Pricing</span>
                <span className="text-sm text-white/70">Cost Guide</span>
              </div>
              <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition" />
            </Link>
          </div>

          {/* Instant Estimate CTA */}
          <div className="mt-10">
            <Link
              href="/estimate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-red-600 transition text-lg cta-pulse"
            >
              Get an Instant Roof Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-white/70 mt-3">Free estimate in under 60 seconds</p>
          </div>
        </div>
      </div>
    </section>
  )
}
