import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FileText, ArrowRight, Calendar, Clock } from 'lucide-react'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { stockImages } from '@/data/stock-images'

export const metadata: Metadata = {
  title: 'Roofing Blog | Tips & Guides for Charlotte Homeowners',
  description: 'Expert roofing tips, guides, and news for Charlotte, NC homeowners. Learn about roof maintenance, repairs, materials, and finding the right contractor.',
  keywords: [
    'roofing blog charlotte',
    'roof maintenance tips',
    'charlotte roofing guide',
    'roof repair advice',
    'roofing news nc'
  ],
}

// Sample blog posts (would come from database/CMS in production)
const blogPosts = [
  {
    id: '1',
    title: 'How Much Does a New Roof Cost in Charlotte in 2025?',
    slug: 'roof-cost-charlotte-2025',
    excerpt: 'A comprehensive guide to roof replacement costs in Charlotte, NC. Learn about material costs, labor rates, and factors that affect your final price.',
    category: 'Pricing',
    readTime: '8 min read',
    date: 'January 5, 2025',
    featured: true
  },
  {
    id: '2',
    title: '5 Signs You Need a New Roof (Charlotte Edition)',
    slug: 'signs-you-need-new-roof-charlotte',
    excerpt: 'Learn the warning signs that indicate your Charlotte home needs a new roof. From curling shingles to water stains, know when it\'s time to call a roofer.',
    category: 'Maintenance',
    readTime: '5 min read',
    date: 'January 2, 2025',
    featured: false
  },
  {
    id: '3',
    title: 'Metal Roofing vs Shingles: Which is Better for Charlotte Homes?',
    slug: 'metal-vs-shingles-charlotte',
    excerpt: 'Compare metal roofing and asphalt shingles for Charlotte\'s climate. We break down costs, lifespan, energy efficiency, and storm resistance.',
    category: 'Materials',
    readTime: '7 min read',
    date: 'December 28, 2024',
    featured: false
  },
  {
    id: '4',
    title: 'How to Choose a Roofing Contractor in Charlotte',
    slug: 'choose-roofing-contractor-charlotte',
    excerpt: 'Tips for finding a trustworthy roofing contractor in Charlotte. What to look for, questions to ask, and red flags to avoid.',
    category: 'Hiring',
    readTime: '6 min read',
    date: 'December 20, 2024',
    featured: false
  },
  {
    id: '5',
    title: 'Storm Damage Roofing: Your Guide to Insurance Claims in NC',
    slug: 'storm-damage-insurance-claims-nc',
    excerpt: 'Navigate the insurance claims process after storm damage to your roof. Learn what\'s covered, how to document damage, and when to file.',
    category: 'Insurance',
    readTime: '9 min read',
    date: 'December 15, 2024',
    featured: false
  },
  {
    id: '6',
    title: 'Roof Maintenance Checklist for Charlotte Homeowners',
    slug: 'roof-maintenance-checklist',
    excerpt: 'Keep your roof in top condition with this seasonal maintenance checklist designed for Charlotte\'s climate and weather patterns.',
    category: 'Maintenance',
    readTime: '4 min read',
    date: 'December 10, 2024',
    featured: false
  }
]

const categories = [
  'All Posts',
  'Pricing',
  'Materials',
  'Maintenance',
  'Hiring',
  'Insurance',
  'Commercial',
  'DIY'
]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Charlotte Roofing Hub</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Roofing Blog
            </h1>
            <p className="text-lg text-white/90">
              Expert tips, guides, and news about roofing in Charlotte, NC.
              Everything you need to know about caring for your roof.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  category === 'All Posts'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Post */}
              {featuredPost && (
                <article className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="relative aspect-video">
                    <Image
                      src={stockImages.blogFeatured.src}
                      alt={stockImages.blogFeatured.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 800px"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-gray-500">Featured</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary">
                        {featuredPost.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm card-hover">
                    <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
                      <FileText className="w-10 h-10 text-gray-300" />
                    </div>
                    <div className="p-5">
                      <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium mb-2">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center pt-4">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition">
                  Load More Articles
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Instant Estimate CTA */}
              <InstantEstimateCTA variant="sidebar" />

              {/* Popular Topics */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Popular Topics</h3>
                <div className="space-y-2">
                  {[
                    'Roof Replacement Cost',
                    'Storm Damage',
                    'Metal vs Shingles',
                    'Finding a Contractor',
                    'Insurance Claims',
                    'DIY Maintenance'
                  ].map((topic) => (
                    <button
                      key={topic}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-primary rounded-xl p-6 text-white">
                <h3 className="font-bold mb-2">Stay Updated</h3>
                <p className="text-sm text-white/80 mb-4">
                  Get roofing tips and local news delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-secondary text-white font-semibold rounded-lg hover:bg-red-600 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Find Companies */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Need a Roofer?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Browse our directory of 25+ top-rated roofing companies in Charlotte.
                </p>
                <Link
                  href="/companies"
                  className="block w-full text-center py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition"
                >
                  Find Companies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
