'use client'

import { Search, BookOpen, HelpCircle, DollarSign, ArrowRight, ShieldCheck, UserCheck, Building2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { stockImages } from '@/data/stock-images'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

export default function Hero() {
  return (
    <section className="relative text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <Image
        src={stockImages.heroBackground.src}
        alt={stockImages.heroBackground.alt}
        fill
        className="object-cover"
        priority
        fetchPriority="high"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/90 via-[#1E3A5F]/80 to-[#2d5a8b]/70" />

      {/* Subtle floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 h-64 bg-white/5 rounded-full -top-32 -left-32 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute w-96 h-96 bg-white/3 rounded-full -bottom-48 -right-48 animate-pulse" style={{ animationDuration: '6s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Badge */}
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Free Roofing Education | Built by Charlotte Roofers</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Your Complete Guide to <span className="text-accent">Roofing in Charlotte</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={fadeUp} custom={2} className="hero-description text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto" data-speakable="true">
            Free guides, cost comparisons, and expert advice — created by local Charlotte roofers
            to help homeowners make informed decisions.
          </motion.p>

          {/* Trust Badges */}
          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { icon: UserCheck, text: 'Expert-Reviewed Content' },
              { icon: ShieldCheck, text: 'Charlotte-Specific Data' },
              { icon: Building2, text: 'Founded by Local Roofers' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/15 transition-colors duration-200">
                <Icon className="w-4 h-4 text-green-400" />
                <span className="text-sm">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div variants={fadeUp} custom={4} className="max-w-xl mx-auto mb-10">
            <form action="/companies" method="GET" className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="search"
                placeholder="Search roofing topics, companies, services..."
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30 text-base shadow-lg shadow-black/10 transition-shadow duration-300 group-focus-within:shadow-xl"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all duration-200 hover:shadow-md"
              >
                Search
              </button>
            </form>
          </motion.div>

          {/* Quick Action Cards */}
          <motion.div variants={fadeUp} custom={5} className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { href: '/roofing-guide', icon: BookOpen, title: 'Roofing Guide', sub: 'Free 18-Chapter Book' },
              { href: '/repair-or-replace', icon: HelpCircle, title: 'Repair or Replace?', sub: 'Take the Free Quiz' },
              { href: '/materials', icon: DollarSign, title: 'Materials & Pricing', sub: 'Charlotte Cost Guide' },
            ].map(({ href, icon: Icon, title, sub }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/5 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="block font-semibold">{title}</span>
                  <span className="text-sm text-white/70">{sub}</span>
                </div>
                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
            ))}
          </motion.div>

          {/* Soft estimate link */}
          <motion.p variants={fadeUp} custom={6} className="mt-8 text-sm text-white/80">
            Need an estimate?{' '}
            <Link href="/estimate" className="text-white underline hover:text-accent transition">
              Get a free instant estimate
            </Link>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
