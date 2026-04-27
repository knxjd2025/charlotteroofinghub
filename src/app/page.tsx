import Link from 'next/link'
import { Building2, ArrowRight, Home as HomeIcon, Warehouse, DollarSign, FileText, Star, ShieldCheck, UserCheck, Heart, MapPin, Wrench, AlertTriangle, CloudLightning } from 'lucide-react'
import Hero from '@/components/shared/Hero'
import CompanyCard from '@/components/companies/CompanyCard'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { companies, getRegularCompanies } from '@/data/companies'
import { getFeaturedServices } from '@/data/services'
import { getFeaturedNeighborhoods } from '@/data/neighborhoods'

// Homepage FAQs - Voice Search Optimized with Verification Messaging
const homepageFAQs = [
  {
    question: "How does Charlotte Roofing Hub verify roofing companies?",
    answer: "We personally verify every roofing company through a rigorous local process: 1) We meet face-to-face with company owners, 2) We conduct thorough background checks, 3) We verify licensing, insurance, and certifications, 4) We confirm 4.8+ star Google ratings. We're a free community service for Charlotte and surrounding-area homeowners — we don't make a profit and don't charge for services."
  },
  {
    question: "Is Charlotte Roofing Hub free to use?",
    answer: "Yes — Charlotte Roofing Hub is 100% free for homeowners. This site was built to assist Charlotte and surrounding-area homeowners. The website does not make a profit and does not charge for services. It's a free service that vets roofing companies and provides information for homeowners and roofers."
  },
  {
    question: "Who is the best roofing company in Charlotte NC?",
    answer: "Based on our personal verification and background checks, Charlotte has many excellent roofing companies with 4.8+ star ratings. All 25+ companies on our site have been personally vetted - we meet owners face-to-face and run background checks. Browse our directory to find the perfect match for your specific roofing needs."
  },
  {
    question: "How much does a new roof cost in Charlotte NC?",
    answer: "The average cost for a new roof in Charlotte ranges from $8,000 to $25,000 for residential homes, depending on size, materials, and complexity. Asphalt shingles cost $3.50-$7.00 per square foot, while metal roofing ranges from $7-$14 per square foot. Get an instant estimate at InstantRoofEstimate.ai for a more accurate price."
  },
  {
    question: "Why should I trust Charlotte Roofing Hub over other directories?",
    answer: "Unlike other directories that accept paid listings, we're a free community service that personally vets every company. We meet owners face-to-face, run background checks, and only list companies with 4.8+ star ratings. The website doesn't make a profit and doesn't charge for services — we're Charlotte locals helping our neighbors, not a corporation selling leads."
  },
  {
    question: "How long does a roof replacement take in Charlotte?",
    answer: "Most residential roof replacements in Charlotte take 1-3 days, depending on the size of your home, weather conditions, and material complexity. All our verified contractors provide clear timelines upfront. Simple asphalt shingle replacements typically complete in one day."
  }
]

// Stats for the hub
const stats = [
  { label: 'Top-Rated Companies', value: '25+', icon: Building2 },
  { label: 'Average Rating', value: '4.9', icon: Star },
  { label: 'Cities Served', value: '15+', icon: HomeIcon },
  { label: 'Years Combined Exp.', value: '200+', icon: FileText },
]

export default function HomePage() {
  const topCompanies = getRegularCompanies().slice(0, 6)
  const featuredServices = getFeaturedServices().slice(0, 4)
  const featuredAreas = getFeaturedNeighborhoods().slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-xl">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Roofing Companies Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Personally Verified Roofing Companies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every company below has been personally verified through owner meetings and background checks. All have 4.8+ star ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCompanies.map((company, index) => (
              <CompanyCard key={company.id} company={company} rank={index + 1} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              View All {companies.length} Companies
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instant Estimate CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <InstantEstimateCTA variant="inline" />
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Roofing Services in Charlotte NC
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From emergency repairs to complete replacements, our verified contractors handle every roofing need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/roof-replacement" className="group p-6 bg-white rounded-xl hover:shadow-lg transition">
              <HomeIcon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Roof Replacement</h3>
              <p className="text-gray-600 text-sm mb-2">Complete roof replacement services</p>
              <span className="text-sm text-gray-500">$8,000 - $25,000</span>
            </Link>

            <Link href="/services/roof-repair" className="group p-6 bg-white rounded-xl hover:shadow-lg transition">
              <Wrench className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Roof Repair</h3>
              <p className="text-gray-600 text-sm mb-2">Fix leaks and storm damage</p>
              <span className="text-sm text-gray-500">$300 - $2,500</span>
            </Link>

            <Link href="/services/emergency-roof-repair" className="group p-6 bg-red-50 rounded-xl hover:shadow-lg transition border-2 border-red-200">
              <AlertTriangle className="w-10 h-10 text-red-600 mb-4" />
              <h3 className="font-bold text-lg mb-2 text-red-700 group-hover:text-red-800">Emergency Repair</h3>
              <p className="text-gray-600 text-sm mb-2">24/7 emergency response</p>
              <span className="text-sm text-red-600 font-semibold">Available Now</span>
            </Link>

            <Link href="/services/storm-damage-repair" className="group p-6 bg-white rounded-xl hover:shadow-lg transition">
              <CloudLightning className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary">Storm Damage</h3>
              <p className="text-gray-600 text-sm mb-2">Hail, wind & storm repair</p>
              <span className="text-sm text-gray-500">Insurance Claims Help</span>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              View All Roofing Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Charlotte Neighborhoods We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our verified contractors serve 40+ neighborhoods in the Charlotte metro area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="group p-4 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition text-center"
              >
                <MapPin className="w-6 h-6 text-primary group-hover:text-white mx-auto mb-2" />
                <h3 className="font-semibold text-sm group-hover:text-white">{area.name}</h3>
                <p className="text-xs text-gray-500 group-hover:text-white/70 mt-1">ZIP: {area.zipCodes[0]}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              View All 40+ Service Areas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Overview */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Roofing Resources & Guides
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your complete resource for residential and commercial roofing information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/residential" className="group p-6 bg-white rounded-xl hover:bg-primary hover:text-white transition">
              <HomeIcon className="w-10 h-10 text-primary group-hover:text-white mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-white">Residential Roofing</h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">
                Guide to home roofing services, materials, and what to expect
              </p>
            </Link>

            <Link href="/commercial" className="group p-6 bg-white rounded-xl hover:bg-primary hover:text-white transition">
              <Warehouse className="w-10 h-10 text-primary group-hover:text-white mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-white">Commercial Roofing</h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">
                TPO, EPDM, and flat roofing solutions for businesses
              </p>
            </Link>

            <Link href="/materials" className="group p-6 bg-white rounded-xl hover:bg-primary hover:text-white transition">
              <DollarSign className="w-10 h-10 text-primary group-hover:text-white mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-white">Materials & Pricing</h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">
                Compare roofing materials and average costs in Charlotte
              </p>
            </Link>

            <Link href="/blog" className="group p-6 bg-white rounded-xl hover:bg-primary hover:text-white transition">
              <FileText className="w-10 h-10 text-primary group-hover:text-white mb-4" />
              <h3 className="font-bold text-lg mb-2 group-hover:text-white">Roofing Blog</h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm">
                Tips, guides, and news about roofing in Charlotte
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Charlotte Roofing Hub - Verification Focus */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Trust Charlotte Roofing Hub?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re not like other directories. We&apos;re Charlotte locals who personally verify every company to protect our neighbors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Face-to-Face Verified</h3>
              <p className="text-gray-600 text-sm">
                We personally meet every roofing company owner. No exceptions. We want to know who we&apos;re recommending to our neighbors.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Background Checked</h3>
              <p className="text-gray-600 text-sm">
                Every company undergoes thorough background checks. We verify licensing, insurance, and business history before listing.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">4.8+ Stars Required</h3>
              <p className="text-gray-600 text-sm">
                Only companies with verified 4.8+ star Google ratings make our list. We check reviews for authenticity.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-bold text-lg mb-2">100% Free for Homeowners</h3>
              <p className="text-gray-600 text-sm">
                The website doesn&apos;t make a profit and doesn&apos;t charge for services. One mission: help Charlotte homeowners find trustworthy roofers. No paid listings. Ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <FAQSection
          title="Common Questions About Roofing in Charlotte"
          faqs={homepageFAQs}
        />
      </section>

      {/* Final CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Find Your Perfect Roofer?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our curated list of Charlotte&apos;s best roofing companies, or get an instant estimate for your roof today.
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
