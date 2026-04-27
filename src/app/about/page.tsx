import type { Metadata } from 'next'
import Link from 'next/link'
import { Building2, Star, Target, Heart, Shield, ArrowRight, FileText, UserCheck, ShieldCheck, CheckCircle, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Charlotte Roofing Hub | Free Verified Roofing Directory',
  description: 'Charlotte Roofing Hub is a free community service that vets roofing companies for Charlotte and surrounding-area homeowners. We don\'t make a profit and don\'t charge for services. Every listed company is personally verified through owner meetings and background checks.',
  keywords: [
    'verified roofing companies charlotte',
    'background checked roofers',
    'free roofing directory charlotte',
    'trusted roofers charlotte nc'
  ]
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium">Free Community Resource for Charlotte Homeowners</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Protecting Charlotte Homeowners
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              We personally verify every roofing company through face-to-face meetings
              and background checks. It&apos;s the only way we&apos;d recommend a roofer to our own neighbors.
            </p>
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
              Charlotte Roofing Hub was founded with a simple mission: protect our neighbors from
              bad roofing contractors. We&apos;re Charlotte locals who saw too many homeowners get scammed
              by fly-by-night roofers, and we decided to do something about it.
            </p>
            <p className="text-lg text-gray-600 text-center mb-8">
              <strong>This site was built to assist Charlotte and surrounding-area homeowners.</strong>{' '}
              The website does not make a profit and does not charge for services. It&apos;s a free service
              that vets roofing companies and provides information for both homeowners and roofers — and
              we don&apos;t accept paid listings.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <Heart className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Community First, No Profit Motive</h3>
                <p className="text-gray-600 text-sm">
                  We&apos;re not a corporation selling leads. The website doesn&apos;t make a profit and
                  doesn&apos;t charge for services. We&apos;re Charlotte neighbors helping our community
                  find honest, quality roofers.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">No Paid Listings. Ever.</h3>
                <p className="text-gray-600 text-sm">
                  Companies can&apos;t buy their way onto our list. Every company earns their spot through
                  our verification process and their reputation. Period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Verification Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Before any company appears on our site, they must pass our rigorous verification.
              We take this seriously because we&apos;re recommending these roofers to our own neighbors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">1</span>
              </div>
              <UserCheck className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Face-to-Face Meeting</h3>
              <p className="text-sm text-gray-600">
                We personally meet with every company owner. We want to look them in the eye
                and understand how they run their business.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Background Check</h3>
              <p className="text-sm text-gray-600">
                We run thorough background checks on the company and principals. We verify
                there&apos;s no history of fraud, lawsuits, or complaints.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-yellow-600">3</span>
              </div>
              <FileText className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">License & Insurance</h3>
              <p className="text-sm text-gray-600">
                We verify current licensing, proper insurance coverage, and any manufacturer
                certifications (GAF, Owens Corning, etc.).
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-amber-600">4</span>
              </div>
              <Star className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">4.8+ Star Rating</h3>
              <p className="text-sm text-gray-600">
                Companies must have a verified 4.8+ star Google rating. We also check
                that reviews are authentic, not fake or bought.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">25+ companies have passed our verification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do This */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
              Why We Do This
            </h2>
            <div className="bg-gray-50 rounded-xl p-8">
              <p className="text-gray-700 mb-4">
                We started Charlotte Roofing Hub after seeing too many of our friends and neighbors
                get burned by bad roofing contractors. Storm chasers who disappear after cashing the check.
                Unlicensed &ldquo;roofers&rdquo; who leave leaky roofs behind. Companies with fake reviews
                and hidden complaints.
              </p>
              <p className="text-gray-700 mb-4">
                We realized that while there are plenty of directories out there, none of them actually
                verify the companies they list. They just take money and post whoever pays.
              </p>
              <p className="text-gray-700 font-semibold">
                We wanted something different. A directory we&apos;d actually trust to recommend a roofer
                to our own family. So we built it ourselves - and we&apos;re keeping it free forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            What We Offer (All Free)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Verified Company Directory</h3>
              <p className="text-sm text-gray-600">
                25+ personally verified roofing companies with background checks, all with
                4.8+ star ratings serving Charlotte and surrounding areas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Roofing Guides</h3>
              <p className="text-sm text-gray-600">
                In-depth guides on residential, commercial, and specialty roofing
                to help you make informed decisions.
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

      {/* Get Started CTA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Roofer?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Get an instant estimate and let us connect you with a verified local roofing company that matches your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instantroofestimate.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition"
            >
              Get Instant Estimate
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/companies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Browse All Companies
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
                Get an instant roof estimate or browse our verified directory to find
                a roofer you can trust with your home.
              </p>
              <a
                href="https://instantroofestimate.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-secondary text-white font-medium rounded-lg hover:bg-red-600 transition text-sm"
              >
                Get Free Estimate
              </a>
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
            We&apos;re real Charlotte locals and we&apos;d love to hear from you.
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
