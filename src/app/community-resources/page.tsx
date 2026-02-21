import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Phone, ExternalLink, Shield, Users, Building2, AlertTriangle } from 'lucide-react'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { stockImages } from '@/data/stock-images'

export const metadata: Metadata = {
  title: 'Charlotte Roofing Assistance Programs & Community Resources',
  description: 'Free and low-cost roofing assistance programs in Charlotte, NC. Find help for seniors, veterans, and low-income homeowners. FEMA resources, NC licensing verification, and emergency contacts.',
  keywords: [
    'roofing assistance charlotte nc',
    'free roof repair charlotte',
    'low income roof repair nc',
    'senior roof assistance mecklenburg county',
    'fema roof repair north carolina',
    'habitat for humanity charlotte roof'
  ],
}

const assistancePrograms = [
  {
    name: 'Habitat for Humanity Charlotte',
    description: 'Offers critical home repair programs including roof replacement for qualifying low-income homeowners in Mecklenburg County. Homeowners must own and occupy the home and meet income guidelines.',
    phone: '(704) 376-2054',
    url: 'https://www.habitatcharlotte.org',
    eligibility: 'Income at or below 80% of Area Median Income',
    icon: Heart,
  },
  {
    name: 'Mecklenburg County Housing Rehabilitation',
    description: 'County-funded program providing home repair assistance including roofing for owner-occupied homes in Mecklenburg County. Covers emergency repairs and general rehabilitation.',
    phone: '(980) 314-4663',
    url: 'https://www.mecknc.gov',
    eligibility: 'Owner-occupied, income-qualified Mecklenburg County residents',
    icon: Building2,
  },
  {
    name: 'Rebuilding Together of Greater Charlotte',
    description: 'Nonprofit providing free home repairs for low-income homeowners, elderly, disabled, and veteran homeowners. Conducts repair events throughout the year with volunteer labor.',
    phone: '(704) 376-1218',
    url: 'https://www.rtcharlotte.org',
    eligibility: 'Low-income homeowners, seniors 60+, disabled, veterans',
    icon: Users,
  },
  {
    name: 'NC Housing Finance Agency',
    description: 'State agency offering home improvement loans and grants. The Urgent Repair Program provides up to $10,000 for emergency home repairs including roofing for qualifying homeowners.',
    phone: '(919) 877-5700',
    url: 'https://www.nchfa.com',
    eligibility: 'Income below 50% AMI for urgent repair; varies by program',
    icon: Shield,
  },
]

const emergencyResources = [
  {
    name: 'FEMA Disaster Assistance',
    description: 'Federal grants for home repairs after declared disasters. Covers temporary roof tarps and permanent repairs. Maximum individual assistance: $42,500 (2025).',
    phone: '(800) 621-3362',
    url: 'https://www.disasterassistance.gov',
  },
  {
    name: 'Charlotte-Mecklenburg Emergency Management',
    description: 'Local emergency coordination during severe weather events. Provides information on shelters, emergency repairs, and disaster recovery resources.',
    phone: '(980) 314-3700',
    url: 'https://www.mecknc.gov/LUESA/OEM',
  },
  {
    name: 'NC Emergency Management',
    description: 'State-level disaster response coordination. Connects residents with recovery programs, FEMA applications, and additional state resources after major storms.',
    phone: '(919) 825-2500',
    url: 'https://www.ncdps.gov/emergency-management',
  },
  {
    name: 'American Red Cross - Greater Carolinas',
    description: 'Emergency shelter and disaster relief after severe storms. Provides temporary housing assistance, clean-up supplies, and connects residents with recovery resources.',
    phone: '(704) 376-1661',
    url: 'https://www.redcross.org/local/north-carolina/greater-carolinas.html',
  },
]

const verificationResources = [
  {
    name: 'NC Licensing Board for General Contractors',
    description: 'Verify any NC contractor\'s license status, classification, insurance, and complaint history. Required for projects over $30,000.',
    url: 'https://www.nclbgc.org',
  },
  {
    name: 'NC Department of Insurance',
    description: 'File complaints about insurance claim handling, verify insurance company licensing, and access consumer protection resources.',
    phone: '(855) 408-1212',
    url: 'https://www.ncdoi.gov',
  },
  {
    name: 'Better Business Bureau - Charlotte',
    description: 'Check roofing company ratings, file complaints, and review consumer feedback. BBB accredited businesses meet additional trust standards.',
    url: 'https://www.bbb.org/us/nc/charlotte',
  },
  {
    name: 'Charlotte-Mecklenburg Building Permits',
    description: 'Verify that roofing permits have been pulled for your project. All roof replacements in Charlotte-Mecklenburg require a building permit.',
    phone: '(980) 314-2633',
    url: 'https://www.mecknc.gov/LUESA/CodeEnforcement',
  },
]

const communityFAQs = [
  {
    question: 'How can I get free roof repair in Charlotte?',
    answer: 'Several Charlotte organizations provide free or low-cost roof repairs: Habitat for Humanity Charlotte, Rebuilding Together of Greater Charlotte, and Mecklenburg County Housing Rehabilitation. Eligibility is typically based on income, age, disability, or veteran status. Contact each organization directly to apply — wait times vary from weeks to several months.'
  },
  {
    question: 'What should I do if my roof is damaged and I can\'t afford repairs?',
    answer: 'First, prevent further damage with temporary tarps (hardware stores sell emergency roof tarps for $20-$50). Then contact Mecklenburg County Housing Rehabilitation at (980) 314-4663 for emergency repair assistance. If the damage was caused by a storm, file an insurance claim immediately and contact FEMA if a disaster has been declared. The NC Housing Finance Agency Urgent Repair Program provides up to $10,000 for qualifying homeowners.'
  },
  {
    question: 'How do I verify a roofing contractor\'s license in North Carolina?',
    answer: 'Visit the NC Licensing Board for General Contractors website (nclbgc.org) and search by company name or license number. You can see their license status, classification, and any disciplinary actions. Any contractor working on projects over $30,000 must hold a valid NC license. Also verify their insurance by requesting a current certificate of insurance.'
  },
  {
    question: 'Does FEMA help with roof repairs in Charlotte?',
    answer: 'FEMA provides assistance only after a federally declared disaster for your area. When available, FEMA grants (not loans) can cover emergency roof tarps, permanent repairs, and even temporary housing. Maximum individual assistance is $42,500 as of 2025. Apply at DisasterAssistance.gov or call (800) 621-3362. FEMA assistance is separate from and does not duplicate insurance coverage.'
  },
  {
    question: 'Are there roofing assistance programs for veterans in Charlotte?',
    answer: 'Yes. Rebuilding Together of Greater Charlotte specifically serves veterans with free home repairs including roofing. Additionally, the VA Home Loan program can be used for refinancing to cover major home repairs. Purple Heart Homes and Habitat for Humanity also prioritize veteran homeowners. Contact the Mecklenburg County Veterans Service Office at (980) 314-2880 for a full list of available resources.'
  },
  {
    question: 'How do I report a roofing scam in Charlotte?',
    answer: 'Report roofing scams to multiple agencies: file a complaint with the NC Attorney General Consumer Protection Division at (877) 566-7226, report to the Better Business Bureau, contact the NC Licensing Board if the contractor claimed to be licensed, and file a police report for fraud. Also report to the FTC at ReportFraud.ftc.gov. Charlotte-Mecklenburg Police has a fraud investigation unit that handles contractor scams.'
  }
]

export default function CommunityResourcesPage() {
  return (
    <>
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 to-[#1E3A5F]/75" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6" />
              <span className="text-sm font-medium text-white/80">Community Resources</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Charlotte Roofing Assistance Programs & Resources
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Free and low-cost roofing help for Charlotte homeowners. Find assistance programs,
              emergency resources, and contractor verification tools — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Assistance Programs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Who Offers Free or Low-Cost Roof Repairs in Charlotte?
          </h2>
          <p className="text-gray-600 mb-8">
            <strong>Several Charlotte-area nonprofits and government programs provide free or subsidized roof repairs for qualifying homeowners, including seniors, veterans, disabled residents, and low-income families. Eligibility is typically based on income, home ownership, and residency in Mecklenburg County.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assistancePrograms.map((program) => (
              <div key={program.name} className="bg-gray-50 rounded-xl p-6 border hover:shadow-md transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{program.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                    <p className="text-xs text-gray-500 mb-3">
                      <span className="font-medium">Eligibility:</span> {program.eligibility}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      {program.phone && (
                        <a href={`tel:${program.phone.replace(/[^\d]/g, '')}`} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                          <Phone className="w-3 h-3" />
                          {program.phone}
                        </a>
                      )}
                      <a href={program.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                        <ExternalLink className="w-3 h-3" />
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold text-gray-900">
              What Should I Do After Storm Damage to My Roof?
            </h2>
          </div>
          <p className="text-gray-600 mb-8">
            <strong>After storm damage, immediately document the damage with photos, prevent further water intrusion with tarps, file an insurance claim within 48 hours, and contact FEMA if a federal disaster has been declared for your area. These emergency resources can help Charlotte homeowners after severe weather events.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyResources.map((resource) => (
              <div key={resource.name} className="bg-white rounded-xl p-6 border border-red-100 hover:shadow-md transition">
                <h3 className="font-bold text-gray-900 mb-2">{resource.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  {resource.phone && (
                    <a href={`tel:${resource.phone.replace(/[^\d]/g, '')}`} className="inline-flex items-center gap-1 text-sm font-medium text-secondary hover:underline">
                      <Phone className="w-3 h-3" />
                      {resource.phone}
                    </a>
                  )}
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                    <ExternalLink className="w-3 h-3" />
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Resources */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            How Do I Verify a Roofing Contractor in North Carolina?
          </h2>
          <p className="text-gray-600 mb-8">
            <strong>Before hiring any roofer in Charlotte, verify their NC General Contractor license at nclbgc.org, check their Better Business Bureau rating, confirm they have pulled the required Charlotte-Mecklenburg building permit, and request proof of insurance. These free verification tools protect you from unlicensed and uninsured contractors.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verificationResources.map((resource) => (
              <div key={resource.name} className="bg-gray-50 rounded-xl p-6 border hover:shadow-md transition">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{resource.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      {resource.phone && (
                        <a href={`tel:${resource.phone.replace(/[^\d]/g, '')}`} className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                          <Phone className="w-3 h-3" />
                          {resource.phone}
                        </a>
                      )}
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-primary hover:underline">
                        <ExternalLink className="w-3 h-3" />
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <InstantEstimateCTA variant="inline" />
      </div>

      {/* FAQs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            title="Community Resources FAQ"
            faqs={communityFAQs}
          />
        </div>
      </section>

      {/* Related Pages CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">More Charlotte Roofing Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/roofing-guide" className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition">
              Free Roofing Guide Book
            </Link>
            <Link href="/companies" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
              Find Roofing Companies
            </Link>
            <Link href="/blog/storm-damage-insurance-claims-nc" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
              Storm Damage Insurance Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
