import type { Metadata } from 'next'
import Image from 'next/image'
import { HelpCircle, CheckCircle } from 'lucide-react'
import RepairReplaceQuiz from '@/components/quiz/RepairReplaceQuiz'
import FAQSection from '@/components/shared/FAQSection'
import { stockImages } from '@/data/stock-images'

export const metadata: Metadata = {
  title: 'Should I Repair or Replace My Roof? | Free Charlotte Quiz',
  description: 'Take our free quiz to find out if you need a roof repair or full replacement. Get personalized recommendations based on your Charlotte home\'s roof condition, age, and damage.',
  keywords: [
    'repair or replace roof',
    'roof replacement quiz',
    'should i replace my roof charlotte',
    'roof repair vs replacement',
    'when to replace roof nc'
  ],
  openGraph: {
    title: 'Should I Repair or Replace My Roof? | Free Quiz',
    description: 'Take our free quiz to find out if you need a roof repair or full replacement for your Charlotte home.',
    url: 'https://charlotteroofinghub.com/repair-or-replace',
  },
}

const quizFAQs = [
  {
    question: 'How accurate is this roof repair vs replacement quiz?',
    answer: 'This quiz provides a general recommendation based on common industry guidelines. It\'s designed to give you a starting point, not replace a professional inspection. We recommend using the quiz results alongside a professional evaluation from a licensed Charlotte roofer who can physically inspect your roof.'
  },
  {
    question: 'What is the 30% rule for roof repair vs replacement?',
    answer: 'The 30% rule is a general guideline: if the cost of repairs exceeds 30% of the cost of a full replacement, it\'s usually more cost-effective to replace the entire roof. For example, if a new roof costs $12,000, and your repairs would cost more than $3,600, replacement is typically the better investment.'
  },
  {
    question: 'Can I repair just part of my roof?',
    answer: 'Yes — partial roof repairs are common for localized damage like a few missing shingles, a small leak around a vent, or limited storm damage. However, if damage is widespread across multiple areas, or if your roof is over 20 years old, a full replacement usually makes more financial sense because old and new materials won\'t age at the same rate.'
  },
  {
    question: 'Does insurance cover roof repair or replacement in Charlotte?',
    answer: 'Homeowners insurance in North Carolina typically covers sudden damage from storms, hail, fallen trees, and fire — whether the fix requires repair or replacement. Insurance does not cover gradual wear and tear. If a storm damages your roof, file a claim regardless of whether you think you need a repair or replacement — your insurance adjuster will determine the appropriate scope.'
  },
]

export default function RepairOrReplacePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image
          src={stockImages.roofRepair.src}
          alt={stockImages.roofRepair.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 to-[#1E3A5F]/75" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6" />
            <span className="text-sm font-medium text-white/80">Free Diagnostic Tool</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Should You Repair or Replace Your Roof?
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Answer 6 quick questions about your Charlotte home&apos;s roof and get a personalized
            recommendation with estimated costs — no email required.
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Takes 60 seconds
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No email required
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Charlotte-specific pricing
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Expert-reviewed recommendations
            </span>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RepairReplaceQuiz />
        </div>
      </section>

      {/* Educational Context */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            When Should You Repair vs Replace a Roof in Charlotte?
          </h2>
          <p className="text-gray-700 mb-6">
            <strong>Repair your Charlotte roof if the damage is localized, the roof is under 15 years old, and there are no structural issues. Replace it if the roof is over 20 years old, has widespread damage, multiple leaks, or if repair costs exceed 30% of replacement cost. Charlotte&apos;s severe storms often tip aging roofs from &quot;repairable&quot; to &quot;needs replacement.&quot;</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-3">Signs You Can Repair</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Roof is under 15 years old</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Damage limited to one area</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Only a few missing or cracked shingles</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Single small leak, easily traced</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> No sagging or structural concerns</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-3">Signs You Should Replace</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Roof is 20+ years old (shingles)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Widespread curling or buckling</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Multiple or recurring leaks</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Heavy granule loss in gutters</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" /> Repair costs exceed 30% of replacement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            title="Roof Repair vs Replacement FAQ"
            faqs={quizFAQs}
          />
        </div>
      </section>
    </>
  )
}
