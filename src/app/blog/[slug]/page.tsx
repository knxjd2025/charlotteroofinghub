import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User, ChevronRight } from 'lucide-react'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { stockImages } from '@/data/stock-images'
import { blogPosts, getBlogPostBySlug, getRelatedPosts, getAllBlogSlugs } from '@/data/blog-posts'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Charlotte Roofing Hub`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://charlotteroofinghub.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.dateISO,
      authors: [post.author],
    },
  }
}

function ArticleSchema({ post }: { post: typeof blogPosts[0] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: stockImages[post.image].src,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Roofing Expert",
      worksFor: {
        "@type": "Organization",
        name: "Charlotte Roofing Hub"
      }
    },
    publisher: {
      "@type": "Organization",
      name: "Charlotte Roofing Hub",
      url: "https://charlotteroofinghub.com"
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://charlotteroofinghub.com/blog/${post.slug}`
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

function BreadcrumbSchema({ post }: { post: typeof blogPosts[0] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://charlotteroofinghub.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://charlotteroofinghub.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://charlotteroofinghub.com/blog/${post.slug}` }
    ]
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) notFound()

  const relatedPosts = getRelatedPosts(post.relatedSlugs)

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema post={post} />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-primary">Home</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative text-white py-12 md:py-20 overflow-hidden">
        <Image
          src={stockImages[post.image].src}
          alt={stockImages[post.image].alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#1E3A5F]/70" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-1 text-white/80 hover:text-white text-sm mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Article Body */}
            <article className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                {post.sections.map((section, idx) => (
                  <div key={idx} className="mb-10">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.heading}
                    </h2>
                    {section.content.map((paragraph, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-gray-700 leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* FAQs */}
              {post.faqs.length > 0 && (
                <div className="mt-12">
                  <FAQSection
                    title={`Frequently Asked Questions`}
                    faqs={post.faqs}
                  />
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <InstantEstimateCTA variant="sidebar" />

              {/* Table of Contents */}
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <h3 className="font-bold text-gray-900 mb-4">In This Article</h3>
                <ul className="space-y-2">
                  {post.sections.map((section, idx) => (
                    <li key={idx}>
                      <span className="text-sm text-gray-600 hover:text-primary cursor-pointer">
                        {section.heading}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block group"
                      >
                        <div className="flex gap-3">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={stockImages[related.image].src}
                              alt={stockImages[related.image].alt}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 group-hover:text-primary line-clamp-2">
                              {related.title}
                            </h4>
                            <span className="text-xs text-gray-500">{related.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
