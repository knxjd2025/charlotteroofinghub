import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FileText, CheckCircle, AlertTriangle, ClipboardList, Download } from 'lucide-react'
import FAQSection from '@/components/shared/FAQSection'
import InstantEstimateCTA from '@/components/layout/InstantEstimateCTA'
import { stockImages } from '@/data/stock-images'

export const metadata: Metadata = {
  title: 'HOA Roof Approval Guide for Charlotte Homeowners | Free Template',
  description: 'Navigate the HOA roof approval process in Charlotte. Common requirements for colors, materials, and contractors. Includes a free HOA roof replacement request template.',
  keywords: [
    'hoa roof approval charlotte',
    'hoa roofing requirements nc',
    'hoa roof replacement letter template',
    'charlotte hoa roof color requirements',
    'hoa architectural review roofing'
  ],
  openGraph: {
    title: 'HOA Roof Approval Guide | Free Template',
    description: 'Navigate the HOA roof approval process in Charlotte with our free guide and request template.',
    url: 'https://charlotteroofinghub.com/hoa-roof-approval',
  },
}

const approvalSteps = [
  {
    step: 1,
    title: 'Review Your HOA Guidelines',
    description: 'Before doing anything else, read your HOA\'s Architectural Review Committee (ARC) guidelines, CC&Rs (Covenants, Conditions & Restrictions), and any roofing-specific rules. Look for requirements on approved colors, materials, contractor insurance minimums, and the submission process.',
  },
  {
    step: 2,
    title: 'Choose Your Material and Color',
    description: 'Select a roofing material and color that complies with your HOA\'s approved options. Many Charlotte HOAs maintain a specific color palette. If your chosen material isn\'t explicitly listed, contact your ARC committee to ask before submitting — this saves time.',
  },
  {
    step: 3,
    title: 'Get Contractor Documentation',
    description: 'Gather your contractor\'s NC license number, certificate of insurance (general liability + workers\' comp), and a detailed written estimate. Most HOAs require proof of insurance with specific coverage minimums.',
  },
  {
    step: 4,
    title: 'Submit Your ARC Application',
    description: 'Complete the ARC application form with your material selection, color choice, contractor information, proposed start date, and estimated completion time. Attach material samples, color swatches, and contractor documentation.',
  },
  {
    step: 5,
    title: 'Wait for Approval (Then Begin)',
    description: 'Most Charlotte HOAs respond within 15-30 days. Do not begin work until you receive written approval. Starting without approval can result in fines, forced removal, or legal action. If denied, you can usually revise and resubmit.',
  },
]

const commonRequirements = [
  {
    category: 'Approved Colors',
    details: 'Most Charlotte HOAs require earth tones or neutral colors. Common approved shingle colors include Weathered Wood, Driftwood, Charcoal, Estate Gray, and Hickory. Bright or unusual colors are typically prohibited. Many HOAs reference specific manufacturer color names.',
  },
  {
    category: 'Approved Materials',
    details: 'Architectural (dimensional) shingles are approved in nearly all Charlotte HOAs. 3-tab shingles may be prohibited in upscale communities. Metal roofing approval varies — traditional standing seam may be restricted, but metal shingle-style products are increasingly accepted. Always confirm before purchasing.',
  },
  {
    category: 'Contractor Requirements',
    details: 'HOAs typically require contractors to carry $1M+ general liability insurance and workers\' compensation. Some require the contractor to be named on the ARC application. NC General Contractor licensing is expected for projects over $30,000.',
  },
  {
    category: 'Timeline & Noise',
    details: 'Many HOAs restrict construction hours (typically 7 AM - 6 PM weekdays, 8 AM - 5 PM Saturdays, no Sundays). Some require projects to be completed within 7-14 days. Dumpster placement may be restricted to driveways only.',
  },
]

const hoaFAQs = [
  {
    question: 'Do I need HOA approval to replace my roof in Charlotte?',
    answer: 'Yes — if you live in an HOA community (and most Charlotte neighborhoods have HOAs), you must get Architectural Review Committee (ARC) approval before replacing your roof. This applies even if you\'re replacing with identical materials. Starting work without approval can result in fines ranging from $50 to $500+ per day and potentially being forced to redo the work.'
  },
  {
    question: 'How long does HOA roof approval take in Charlotte?',
    answer: 'Most Charlotte HOAs process ARC applications within 15-30 days. Some fast-track emergency repairs (like storm damage) within 3-5 business days. If your HOA has monthly committee meetings, timing matters — submit before the meeting deadline. You can request emergency approval for active leaks by documenting the urgency with photos.'
  },
  {
    question: 'Can my HOA deny my roof replacement request?',
    answer: 'Yes, but only for valid reasons stated in your CC&Rs — such as a non-approved color, unapproved material, or incomplete documentation. They cannot unreasonably deny a replacement. If denied, request a written explanation, revise your application to address their concerns, and resubmit. NC law (Planned Community Act, NCGS 47F) provides some homeowner protections against arbitrary HOA decisions.'
  },
  {
    question: 'What if I need an emergency roof repair but can\'t wait for HOA approval?',
    answer: 'Most HOAs allow emergency repairs to prevent further damage without prior approval. This includes temporary tarps, patching active leaks, and covering holes from fallen trees. Document the emergency with photos, notify your HOA management company immediately, and follow up with a formal ARC application for the permanent repair. Keep all receipts for your insurance claim.'
  },
  {
    question: 'Can I use metal roofing in a Charlotte HOA community?',
    answer: 'It depends on your specific HOA. Traditional standing seam metal is restricted in many Charlotte HOAs due to aesthetic preferences. However, metal shingle-style products (like Decra or EDCO) that mimic the look of architectural shingles are increasingly being approved. Contact your ARC before ordering materials. Some HOAs have updated their guidelines to allow metal roofing due to its storm resistance and longevity.'
  },
  {
    question: 'What Charlotte neighborhoods have the strictest HOA roofing rules?',
    answer: 'Charlotte\'s most architecturally controlled communities include Ballantyne, Providence Plantation, Piper Glen, The Sanctuary, Baxter Village (Fort Mill), and many SouthPark-area neighborhoods. These communities often have very specific approved color palettes and material requirements. Always request the current approved materials list before selecting your roof.'
  },
]

export default function HOARoofApprovalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <Image
          src={stockImages.residentialNeighborhood.src}
          alt={stockImages.residentialNeighborhood.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 to-[#1E3A5F]/75" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <ClipboardList className="w-6 h-6" />
            <span className="text-sm font-medium text-white/80">Free Resource</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            HOA Roof Approval Guide for Charlotte Homeowners
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Navigate the HOA approval process with confidence. Learn the requirements, avoid common
            mistakes, and use our free request letter template to speed up approval.
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            How Do I Get HOA Approval for a Roof Replacement in Charlotte?
          </h2>
          <p className="text-gray-600 mb-8">
            <strong>To get HOA approval for a roof replacement in Charlotte, follow these five steps: review your CC&Rs for roofing requirements, select an approved material and color, gather your contractor&apos;s documentation, submit a complete ARC application, and wait for written approval before beginning work. Most Charlotte HOAs respond within 15-30 days.</strong>
          </p>

          <div className="space-y-4">
            {approvalSteps.map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-xl p-6 border">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Requirements */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            What Do Charlotte HOAs Typically Require for Roof Replacements?
          </h2>
          <p className="text-gray-600 mb-8">
            <strong>Charlotte HOAs typically require architectural shingles in approved earth-tone colors, contractors with $1M+ liability insurance and NC licensing, construction limited to weekday business hours, and completion within 7-14 days. Specific requirements vary by community, so always check your CC&Rs.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonRequirements.map((req) => (
              <div key={req.category} className="bg-white rounded-xl p-6 border">
                <h3 className="font-bold text-gray-900 mb-2">{req.category}</h3>
                <p className="text-gray-600 text-sm">{req.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Free HOA Roof Replacement Request Template</h2>
                <p className="text-sm text-gray-600">A professional letter template you can customize for your HOA</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border mt-4 text-sm text-gray-700 font-mono leading-relaxed">
              <p className="mb-4">[Your Name]<br />[Your Address]<br />[City, NC ZIP]<br />[Date]</p>
              <p className="mb-4">[HOA Name] Architectural Review Committee<br />[HOA Management Company]<br />[Address]</p>
              <p className="mb-4">RE: Roof Replacement Request — [Your Address]</p>
              <p className="mb-4">Dear Architectural Review Committee,</p>
              <p className="mb-4">I am writing to request approval for a roof replacement at the above address. The details of the proposed project are as follows:</p>
              <p className="mb-2"><strong>Material:</strong> [e.g., GAF Timberline HDZ Architectural Shingles]</p>
              <p className="mb-2"><strong>Color:</strong> [e.g., Weathered Wood]</p>
              <p className="mb-2"><strong>Contractor:</strong> [Company Name]</p>
              <p className="mb-2"><strong>NC License #:</strong> [Number]</p>
              <p className="mb-2"><strong>Insurance:</strong> [Coverage details — GL + WC]</p>
              <p className="mb-2"><strong>Proposed Start Date:</strong> [Date]</p>
              <p className="mb-2"><strong>Estimated Duration:</strong> [e.g., 2-3 days]</p>
              <p className="mb-4"><strong>Reason:</strong> [e.g., Age of current roof (22 years), storm damage, etc.]</p>
              <p className="mb-4">Enclosed please find: contractor&apos;s certificate of insurance, NC license verification, material specification sheet, and color sample photo.</p>
              <p className="mb-4">I am happy to provide any additional information needed. Please contact me at [phone/email] with any questions.</p>
              <p className="mb-4">Thank you for your consideration.</p>
              <p>Sincerely,<br />[Your Name]</p>
            </div>

            <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
              <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <span>This is a general template. Always check your specific HOA&apos;s required application form — many have their own standardized forms that must be used instead of or in addition to a letter.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">HOA Roof Approval Checklist</h2>
          <div className="bg-white rounded-xl p-6 border">
            <ul className="space-y-3">
              {[
                'Read your CC&Rs and ARC guidelines for roofing requirements',
                'Identify approved colors and materials for your community',
                'Get 3 quotes from licensed, insured Charlotte roofers',
                'Collect contractor\'s NC license number and certificate of insurance',
                'Obtain material spec sheet and color sample/photo',
                'Complete ARC application form (or use the letter template above)',
                'Submit application with all documentation attached',
                'Wait for written approval before scheduling work',
                'Notify neighbors of upcoming work (good practice, sometimes required)',
                'Ensure work complies with HOA construction hour restrictions',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <InstantEstimateCTA variant="inline" />
      </div>

      {/* FAQs */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            title="HOA Roof Approval FAQ"
            faqs={hoaFAQs}
          />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog/choose-roofing-contractor-charlotte" className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition">
              How to Choose a Roofer
            </Link>
            <Link href="/materials" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
              Materials & Pricing Guide
            </Link>
            <Link href="/repair-or-replace" className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition">
              Repair or Replace Quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
