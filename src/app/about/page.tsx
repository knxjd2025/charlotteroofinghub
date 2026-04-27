import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Star, Target, Shield, ArrowRight, FileText, UserCheck, ShieldCheck, CheckCircle, Users } from 'lucide-react'
import { stockImages } from '@/data/stock-images'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'

export const metadata: Metadata = {
  title: 'About Charlotte Roofing Hub | Free Charlotte Roofing Information',
  description: 'Charlotte Roofing Hub is a free site offering roofing information and a curated list of suggested local Charlotte roofing companies. We don\'t sell leads. Many of the listed companies contribute content to the site.',
  keywords: [
    'about charlotte roofing hub',
    'charlotte roofing information',
    'free charlotte roofing site',
    'local charlotte roofing companies'
  ],
  alternates: { canonical: 'https://charlotteroofinghub.com/about' },
  openGraph: {
    title: 'About Charlotte Roofing Hub | Free Charlotte Roofing Information',
    description: 'A free Charlotte roofing site with a curated list of suggested local roofing companies that contribute content. We don\'t sell leads.',
    url: 'https://charlotteroofinghub.com/about',
  },
}

// Local Charlotte roofing companies that contribute content to the site.
const contributorCompanies = [
  { name: 'Best Roofing Now LLC', desc: 'Veteran-owned residential and commercial roofing serving Charlotte and surrounding areas' },
  { name: 'Rise Roofing & Restoration', desc: 'GAF Master Elite storm damage and restoration specialists' },
  { name: 'A Roofing Treat LLC', desc: 'Certified Roof Maxx dealer for roof life extension' },
  { name: 'Roofing Solar and More LLC', desc: 'GAF Certified Plus roofing and solar installation' },
  { name: 'We Coat', desc: 'Commercial roof coating and waterproofing specialists' },
  { name: 'Weather Roofing', desc: 'Drone-powered inspections and transparent roofing services' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'About', url: 'https://charlotteroofinghub.com/about' },
        ]}
      />
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 overflow-hidden">
        <Image
          src={stockImages.aboutCharlotte.src}
          alt={stockImages.aboutCharlotte.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/90 to-[#1E3A5F]/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Free Charlotte Roofing Information</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About Charlotte Roofing Hub
            </h1>
            {/* AEO direct-answer paragraph (~55 words) for AI Overview extraction */}
            <p className="text-lg md:text-xl text-white/90" data-speakable="true">
              Charlotte Roofing Hub is a free site that offers Charlotte homeowners roofing
              information and a curated list of suggested local roofing companies. We don&apos;t
              sell leads. Many of the listed companies contribute content to the site to help
              homeowners make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-gray-600">Verified Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-gray-600">Avg. Star Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">40+</div>
              <div className="text-sm text-gray-600">Areas Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-gray-600">Free for Homeowners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg text-gray-600 text-center mb-8">
              Charlotte Roofing Hub exists because Charlotte homeowners deserve honest, useful
              information about roofing. Too many homeowners get taken advantage of by unverified
              contractors — this site exists to make that less likely.
            </p>
            <p className="text-lg text-gray-600 text-center mb-8">
              <strong>This site is 100% free for homeowners and we don&apos;t sell leads.</strong>{' '}
              No company receives paid promotion. The site offers free roofing guides and a
              curated list of suggested local roofing companies — many of whom contribute
              content to the site.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <Building2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">No Lead Selling, Ever</h3>
                <p className="text-gray-600 text-sm">
                  We don&apos;t sell your information to roofing companies. There&apos;s no
                  paid placement and no pay-per-lead arrangement. The site is funded by
                  the local roofing companies that contribute content.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Transparency First</h3>
                <p className="text-gray-600 text-sm">
                  Every suggested roofing company — including the contributors — passes the same
                  vetting: face-to-face owner meeting, background check, NC license verification,
                  and a 4.8+ star Google rating.
                </p>
                <Link href="/editorial-guidelines" className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-3">
                  Read our Editorial Guidelines <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Local Contributors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These local Charlotte roofing companies contribute content to the site. All contributors
              go through the same vetting as every other company suggested on Charlotte Roofing Hub
              and receive no paid promotion in return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {contributorCompanies.map((company) => (
              <div key={company.name} className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{company.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{company.name}</h3>
                    <span className="text-xs text-gray-500">Contributor</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600">{company.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Verification Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Before any company appears on our site, they must pass our rigorous verification.
              This applies equally to the founder, contributors, and all other listed companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">1</span>
              </div>
              <UserCheck className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Face-to-Face Meeting</h3>
              <p className="text-sm text-gray-600">
                We personally meet with every company owner to understand how they run their business.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Background Check</h3>
              <p className="text-sm text-gray-600">
                Thorough background checks on the company and principals to verify
                there&apos;s no history of fraud or complaints.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-yellow-600">3</span>
              </div>
              <FileText className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">License & Insurance</h3>
              <p className="text-sm text-gray-600">
                We verify current licensing, proper insurance coverage, and manufacturer
                certifications (GAF, Owens Corning, etc.).
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-amber-600">4</span>
              </div>
              <Star className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">4.8+ Star Rating</h3>
              <p className="text-sm text-gray-600">
                Companies must have a verified 4.8+ star Google rating with authentic reviews.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">30+ companies have passed our verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Verified Company Directory</h3>
              <p className="text-sm text-gray-600">
                30+ personally verified roofing companies with background checks, all with
                4.8+ star ratings serving Charlotte and surrounding areas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Roofing Education</h3>
              <p className="text-sm text-gray-600">
                In-depth guides on residential, commercial, and specialty roofing
                to help you make informed decisions about your roof.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Community Protection</h3>
              <p className="text-sm text-gray-600">
                If you have a bad experience with a listed company, tell us. We&apos;ll investigate
                and remove any company that doesn&apos;t meet our standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our educational resources or browse verified Charlotte roofing companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/companies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              Browse Companies
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Get Involved
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Roofing Companies</h3>
              <p className="text-sm text-gray-600 mb-4">
                Want to be listed? We&apos;ll need to meet in person, verify your background,
                and confirm your 4.8+ star rating. Contact us to start the process.
              </p>
              <Link
                href="/contact"
                className="inline-block px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition text-sm"
              >
                Request Verification
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">Homeowners</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get an instant roof estimate or browse our educational resources to learn
                about roofing materials, costs, and what to expect.
              </p>
              <Link
                href="/roofing-guide"
                className="inline-block px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-light transition text-sm"
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-white/90 mb-8">
            Questions, feedback, or want to report an issue with a listed company? Get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
