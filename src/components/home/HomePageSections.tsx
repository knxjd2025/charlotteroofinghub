'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Building2, ArrowRight, Home as HomeIcon, DollarSign, FileText, Star, ShieldCheck, UserCheck, MapPin, Wrench, AlertTriangle, CloudLightning, BookOpen, HelpCircle, ClipboardList, Heart } from 'lucide-react'
import CompanyCard from '@/components/companies/CompanyCard'
import AnimatedSection from '@/components/shared/AnimatedSection'
import type { ReactNode } from 'react'

// Types for data passed from server component
interface StatItem {
  label: string
  value: string
  iconName: string
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  readTime: string
  date: string
}

interface Area {
  slug: string
  name: string
  zipCodes: string[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, Building2, MapPin, Star
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
}

interface Props {
  stats: StatItem[]
  topCompanies: any[]
  totalCompanies: number
  featuredAreas: Area[]
  featuredBlogPosts: BlogPost[]
  faqSection: ReactNode
}

export default function HomePageSections({
  stats,
  topCompanies,
  totalCompanies,
  featuredAreas,
  featuredBlogPosts,
  faqSection,
}: Props) {
  return (
    <>
      {/* Stats Section — Animated counters */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = iconMap[stat.iconName]
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px -8px rgba(0,0,0,0.12)' }}
                  className="text-center p-6 bg-gray-50 rounded-xl cursor-default transition-colors hover:bg-primary/5"
                >
                  {Icon && <Icon className="w-8 h-8 text-primary mx-auto mb-3" />}
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Free Roofing Resources & Tools
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to make informed roofing decisions — guides, quizzes, cost data, and community resources, all free.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/roofing-guide', icon: BookOpen, title: 'Free Roofing Guide', desc: 'Our comprehensive 18-chapter guide covers everything from materials to contractor selection. Download it free.' },
              { href: '/repair-or-replace', icon: HelpCircle, title: 'Repair or Replace Quiz', desc: 'Answer 6 questions about your roof and get a personalized recommendation with estimated costs. Takes 60 seconds.' },
              { href: '/hoa-roof-approval', icon: ClipboardList, title: 'HOA Approval Guide', desc: 'Navigate the HOA approval process with our step-by-step guide and free request letter template.' },
              { href: '/materials', icon: DollarSign, title: 'Materials & Pricing', desc: 'Compare roofing materials side-by-side with Charlotte-specific pricing data and lifespan estimates.' },
              { href: '/community-resources', icon: Heart, title: 'Community Resources', desc: 'Financial assistance programs, emergency contacts, and contractor verification tools for Charlotte homeowners.' },
              { href: '/blog', icon: FileText, title: 'Roofing Blog', desc: 'Expert articles on Charlotte roofing costs, storm damage, contractor selection, and seasonal maintenance.' },
            ].map(({ href, icon: Icon, title, desc }, i) => (
              <motion.div
                key={href}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Link href={href} className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/20 hover:-translate-y-1">
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Latest Roofing Articles
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Expert-reviewed articles written by local Charlotte roofers
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">{post.category}</span>
                    <h3 className="font-bold text-gray-900 mt-1 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                      <span>{post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Trust Charlotte Roofing Hub?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Created by Charlotte roofing companies to help homeowners make informed decisions about their roofs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: UserCheck, color: 'green', title: 'Face-to-Face Verified', desc: "We personally meet every roofing company owner. No exceptions. We want to know who we're recommending to our neighbors." },
              { icon: ShieldCheck, color: 'blue', title: 'Background Checked', desc: 'Every company undergoes thorough background checks. We verify licensing, insurance, and business history before listing.' },
              { icon: Star, color: 'yellow', title: '4.8+ Stars Required', desc: 'Only companies with verified 4.8+ star Google ratings make our list. We check reviews for authenticity.' },
              { icon: Building2, color: 'primary', title: 'Founded by a Local Roofer', desc: 'Founded by Best Roofing Now and supported by five local contributor companies committed to homeowner education.' },
            ].map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${
                  color === 'green' ? 'bg-green-100' :
                  color === 'blue' ? 'bg-blue-100' :
                  color === 'yellow' ? 'bg-yellow-100' :
                  'bg-primary/10'
                } rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${
                    color === 'green' ? 'text-green-600' :
                    color === 'blue' ? 'text-blue-600' :
                    color === 'yellow' ? 'text-yellow-600' :
                    'text-primary'
                  }`} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Companies */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Find a Verified Roofer in Charlotte
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every company below has been personally verified through owner meetings and background checks. All have 4.8+ star ratings.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCompanies.map((company: any, i: number) => (
              <motion.div
                key={company.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <CompanyCard company={company} />
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              View All {totalCompanies} Companies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Roofing Services */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Learn About Roofing Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Understand the different types of roofing services available in Charlotte
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/services/roof-replacement', icon: HomeIcon, title: 'Roof Replacement', desc: 'Complete tear-off and installation with new materials' },
              { href: '/services/roof-repair', icon: Wrench, title: 'Roof Repair', desc: 'Fix leaks, missing shingles, and localized damage' },
              { href: '/services/emergency-roof-repair', icon: AlertTriangle, title: 'Emergency Repair', desc: '24/7 emergency response for active leaks and storm damage' },
              { href: '/services/storm-damage-repair', icon: CloudLightning, title: 'Storm Damage', desc: 'Hail, wind, and storm repair with insurance guidance' },
            ].map(({ href, icon: Icon, title, desc }, i) => (
              <motion.div
                key={href}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <Link href={href} className="group block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/20">
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
                  <p className="text-gray-600 text-sm">{desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              View All Roofing Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Charlotte Neighborhoods We Cover
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Roofing information and verified contractors for 40+ neighborhoods in the Charlotte metro area.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredAreas.map((area, i) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <Link
                  href={`/areas/${area.slug}`}
                  className="group block p-4 bg-gray-50 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-center hover:-translate-y-1 hover:shadow-lg"
                >
                  <MapPin className="w-6 h-6 text-primary group-hover:text-white mx-auto mb-2 transition-colors" />
                  <h3 className="font-semibold text-sm text-gray-900 group-hover:text-white transition-colors">{area.name}</h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/70 mt-1 transition-colors">ZIP: {area.zipCodes[0]}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-10">
            <Link
              href="/areas"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              View All 40+ Service Areas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <AnimatedSection>
          {faqSection}
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <section className="py-16 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-white/5 rounded-full -top-48 -right-48 animate-pulse" style={{ animationDuration: '5s' }} />
          <div className="absolute w-64 h-64 bg-white/5 rounded-full -bottom-32 -left-32 animate-pulse" style={{ animationDuration: '7s' }} />
        </div>
        <AnimatedSection>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need a trusted contractor or want to understand your options, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/companies"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-lg hover:-translate-y-0.5"
              >
                Browse Verified Companies
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg border border-white/30 hover:border-white/50 hover:-translate-y-0.5"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
