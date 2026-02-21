import Link from 'next/link'
import Image from 'next/image'
import { Building2, ArrowRight, Home as HomeIcon, Warehouse, DollarSign, FileText, Star, ShieldCheck, UserCheck, MapPin, Wrench, AlertTriangle, CloudLightning, BookOpen, HelpCircle, ClipboardList, Heart } from 'lucide-react'
import Hero from '@/components/shared/Hero'
import CompanyCard from '@/components/companies/CompanyCard'
import FAQSection from '@/components/shared/FAQSection'
import { companies, getRegularCompanies } from '@/data/companies'
import { getFeaturedNeighborhoods } from '@/data/neighborhoods'
import { blogPosts } from '@/data/blog-posts'
import { stockImages } from '@/data/stock-images'

// Homepage FAQs - Voice Search Optimized with Verification Messaging
const homepageFAQs = [
  {
    question: "How does Charlotte Roofing Hub verify roofing companies?",
    answer: "Charlotte Roofing Hub was created by local roofing companies to help homeowners find trustworthy contractors. We verify every listed company through a rigorous process: 1) Face-to-face meetings with company owners, 2) Thorough background checks, 3) Verification of licensing, insurance, and certifications, 4) Confirmation of 4.8+ star Google ratings."
  },
  {
    question: "Is Charlotte Roofing Hub free to use?",
    answer: "Yes, Charlotte Roofing Hub is 100% free for homeowners. It was founded by James at Best Roofing Now LLC and is supported by five local contributor companies — Rise Roofing & Restoration, A Roofing Treat, Roofing Solar and More, We Coat, and Weather Roofing. Our goal is to educate homeowners about roofing. No company receives special treatment or promotion."
  },
  {
    question: "Who is the best roofing company in Charlotte NC?",
    answer: "Based on our personal verification and background checks, Charlotte has many excellent roofing companies with 4.8+ star ratings. All 25+ companies on our site have been personally vetted - we meet owners face-to-face and run background checks. Browse our directory to find the perfect match for your specific roofing needs."
  },
  {
    question: "How much does a new roof cost in Charlotte NC?",
    answer: "The average cost for a new roof in Charlotte ranges from $8,000 to $25,000 for residential homes, depending on size, materials, and complexity. Asphalt shingles cost $3.50-$7.00 per square foot, while metal roofing ranges from $7-$14 per square foot. Visit our materials and pricing page for detailed cost comparisons."
  },
  {
    question: "Why should I trust Charlotte Roofing Hub over other directories?",
    answer: "Charlotte Roofing Hub was founded by James at Best Roofing Now and is supported by five local contributor companies who believe in transparency and education. We personally vet every company, run background checks, and only list companies with 4.8+ star ratings. The founder and all contributors are held to the same standards as every other listed company — no exceptions."
  },
  {
    question: "How long does a roof replacement take in Charlotte?",
    answer: "Most residential roof replacements in Charlotte take 1-3 days, depending on the size of your home, weather conditions, and material complexity. All our verified contractors provide clear timelines upfront. Simple asphalt shingle replacements typically complete in one day."
  }
]

// Stats — education-focused
const stats = [
  { label: 'Free Guides & Tools', value: '10+', icon: BookOpen },
  { label: 'Verified Companies', value: '25+', icon: Building2 },
  { label: 'Cities Covered', value: '15+', icon: MapPin },
  { label: 'Years Combined Exp.', value: '200+', icon: Star },
]

export default function HomePage() {
  const topCompanies = getRegularCompanies().slice(0, 6)
  const featuredAreas = getFeaturedNeighborhoods().slice(0, 6)
  const featuredBlogPosts = blogPosts.filter(p => p.featured).slice(0, 3)

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

      {/* Educational Resources — Position 2 (was position 7) */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Free Roofing Resources & Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to make informed roofing decisions — guides, quizzes, cost data, and community resources, all free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/roofing-guide" className="group p-6 bg-white rounded-xl hover:shadow-lg transition border">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">Free Roofing Guide</h3>
              <p className="text-gray-600 text-sm">
                Our comprehensive 18-chapter guide covers everything from materials to contractor selection. Download it free.
              </p>
            </Link>

            <Link href="/repair-or-replace" className="group p-6 bg-white rounded-xl hover:shadow-lg transition border">
              <HelpCircle className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">Repair or Replace Quiz</h3>
              <p className="text-gray-600 text-sm">
                Answer 6 questions about your roof and get a personalized recommendation with estimated costs. Takes 60 seconds.
              </p>
            </Link>

            <Link href="/hoa-roof-approval" className="group p-6 bg-white rounded-xl hover:shadow-lg transition border">
              <ClipboardList className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">HOA Approval Guide</h3>
              <p className="text-gray-600 text-sm">
                Navigate the HOA approval process with our step-by-step guide and free request letter template.
              </p>
            </Link>

            <Link href="/materials" className="group p-6 bg-white rounded-xl hover:shadow-lg transition border">
              <DollarSign className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">Materials & Pricing</h3>
              <p className="text-gray-600 text-sm">
                Compare roofing materials side-by-side with Charlotte-specific pricing data and lifespan estimates.
              </p>
            </Link>

            <Link href="/community-resources" className="group p-6 bg-white rounded-xl hover:shadow-lg transition border">
              <Heart className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">Community Resources</h3>
              <p className="text-gray-600 text-sm">
                Financial assistance programs, emergency contacts, and contractor verification tools for Charlotte homeowners.
              </p>
            </Link>

            <Link href="/blog" className="group p-6 bg-white rounded-xl hover:shadow-lg transition border">
              <FileText className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">Roofing Blog</h3>
              <p className="text-gray-600 text-sm">
                Expert articles on Charlotte roofing costs, storm damage, contractor selection, and seasonal maintenance.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts — Position 3 (new) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Latest Roofing Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert-reviewed articles written by local Charlotte roofers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wide">{post.category}</span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Trust Charlotte Roofing Hub — Position 4 (was position 8) */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Trust Charlotte Roofing Hub?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Created by Charlotte roofing companies to help homeowners make informed decisions about their roofs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Face-to-Face Verified</h3>
              <p className="text-gray-600 text-sm">
                We personally meet every roofing company owner. No exceptions. We want to know who we&apos;re recommending to our neighbors.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Background Checked</h3>
              <p className="text-gray-600 text-sm">
                Every company undergoes thorough background checks. We verify licensing, insurance, and business history before listing.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">4.8+ Stars Required</h3>
              <p className="text-gray-600 text-sm">
                Only companies with verified 4.8+ star Google ratings make our list. We check reviews for authenticity.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Founded by a Local Roofer</h3>
              <p className="text-gray-600 text-sm">
                Founded by Best Roofing Now and supported by five local contributor companies committed to homeowner education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Companies — Position 5 (was position 3) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Find a Verified Roofer in Charlotte
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every company below has been personally verified through owner meetings and background checks. All have 4.8+ star ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
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

      {/* Roofing Services — Position 6 (was position 4), no prices */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Learn About Roofing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understand the different types of roofing services available in Charlotte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services/roof-replacement" className="group p-6 bg-white rounded-xl hover:shadow-lg transition">
              <HomeIcon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">Complete tear-off and installation with new materials</p>
            </Link>

            <Link href="/services/roof-repair" className="group p-6 bg-white rounded-xl hover:shadow-lg transition">
              <Wrench className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">Roof Repair</h3>
              <p className="text-gray-600 text-sm">Fix leaks, missing shingles, and localized damage</p>
            </Link>

            <Link href="/services/emergency-roof-repair" className="group p-6 bg-white rounded-xl hover:shadow-lg transition">
              <AlertTriangle className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">Emergency Repair</h3>
              <p className="text-gray-600 text-sm">24/7 emergency response for active leaks and storm damage</p>
            </Link>

            <Link href="/services/storm-damage-repair" className="group p-6 bg-white rounded-xl hover:shadow-lg transition">
              <CloudLightning className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary">Storm Damage</h3>
              <p className="text-gray-600 text-sm">Hail, wind, and storm repair with insurance guidance</p>
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
              Charlotte Neighborhoods We Cover
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Roofing information and verified contractors for 40+ neighborhoods in the Charlotte metro area.
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
                <h3 className="font-semibold text-sm text-gray-900 group-hover:text-white">{area.name}</h3>
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

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <FAQSection
          title="Common Questions About Roofing in Charlotte"
          faqs={homepageFAQs}
        />
      </section>

      {/* Soft CTA — Two options, no pulsing */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need a trusted contractor or want to understand your options, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/companies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition text-lg"
            >
              Browse Verified Companies
            </Link>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition text-lg border border-white/30"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
