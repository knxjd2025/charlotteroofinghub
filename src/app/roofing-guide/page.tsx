import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Home, Layers, Cloud, AlertTriangle, Wrench, Search, DollarSign, Shield, Settings, Zap, Building2, ShieldAlert, FileText, HelpCircle, BookMarked, ArrowRight, CheckCircle, ChevronDown, Download, Gift, Lightbulb, XCircle, ThumbsUp, ThumbsDown, Eye, TriangleAlert, Info, Phone, Droplets, Wind, Sun, Snowflake, Thermometer } from 'lucide-react'
import { stockImages } from '@/data/stock-images'
import GuideDownloadModal, { GuideDownloadBanner } from '@/components/guide/GuideDownloadModal'
import GuideDownloadForm from '@/components/guide/GuideDownloadForm'
import BreadcrumbsSchema from '@/components/shared/BreadcrumbsSchema'

export const metadata: Metadata = {
  title: 'The Complete Charlotte Roofing Guide for Homeowners | Free Book',
  description: 'A free, in-depth roofing guide for Charlotte NC homeowners. Learn about materials, costs, contractors, insurance claims, maintenance, and more. Written at an easy reading level.',
  keywords: [
    'charlotte roofing guide',
    'roofing book for homeowners',
    'charlotte nc roof replacement guide',
    'how to choose a roofer charlotte',
    'roofing materials guide charlotte nc',
    'roof insurance claims charlotte',
    'roof maintenance tips charlotte',
    'roofing costs charlotte nc',
  ],
}

const chapters = [
  { id: 'welcome', number: 1, title: 'Welcome to Your Roofing Guide', icon: BookOpen },
  { id: 'what-is-a-roof', number: 2, title: 'What Is a Roof and Why Does It Matter?', icon: Home },
  { id: 'parts-of-roof', number: 3, title: 'The Parts of Your Roof', icon: Layers },
  { id: 'roof-types', number: 4, title: 'Types of Roofs in Charlotte', icon: Home },
  { id: 'materials', number: 5, title: 'Roofing Materials: What Goes on Top', icon: Layers },
  { id: 'weather', number: 6, title: 'How Charlotte Weather Affects Your Roof', icon: Cloud },
  { id: 'warning-signs', number: 7, title: 'Signs Your Roof Needs Help', icon: AlertTriangle },
  { id: 'repair-or-replace', number: 8, title: 'Should You Repair or Replace?', icon: Wrench },
  { id: 'choosing-contractor', number: 9, title: 'How to Pick a Good Roofing Company', icon: Search },
  { id: 'estimates', number: 10, title: 'Understanding Roofing Estimates and Prices', icon: DollarSign },
  { id: 'insurance', number: 11, title: 'Insurance and Storm Damage Claims', icon: Shield },
  { id: 'maintenance', number: 12, title: 'Taking Care of Your Roof', icon: Settings },
  { id: 'energy', number: 13, title: 'Energy-Efficient Roofing', icon: Zap },
  { id: 'commercial', number: 14, title: 'Commercial Roofing for Business Owners', icon: Building2 },
  { id: 'scams', number: 15, title: 'Roofing Scams: How to Stay Safe', icon: ShieldAlert },
  { id: 'permits', number: 16, title: 'Permits, Codes, and HOA Rules', icon: FileText },
  { id: 'faq', number: 17, title: 'Questions People Ask the Most', icon: HelpCircle },
  { id: 'glossary', number: 18, title: 'Roofing Words You Should Know', icon: BookMarked },
]

export default function RoofingGuidePage() {
  return (
    <>
      <BreadcrumbsSchema
        items={[
          { name: 'Home', url: 'https://charlotteroofinghub.com' },
          { name: 'Roofing Guide', url: 'https://charlotteroofinghub.com/roofing-guide' },
        ]}
      />
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24 overflow-hidden">
        <Image
          src={stockImages.guideHero.src}
          alt={stockImages.guideHero.alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/90 to-[#1E3A5F]/70" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Free Homeowner Guide — 18 Chapters</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            The Complete Charlotte<br />Roofing Guide
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Everything you need to know about your roof — written in plain, easy-to-read language. Made for homeowners and property owners in Charlotte and the surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#table-of-contents"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition text-lg"
            >
              Read Online <ChevronDown className="w-5 h-5" />
            </a>
            <GuideDownloadModal />
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/70 text-sm">
            <Gift className="w-4 h-4" />
            <span>Download includes a free surprise gift mailed to your door!</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section id="table-of-contents" className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <p className="text-gray-600">Click any chapter to jump straight to it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapters.map((ch) => (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary hover:bg-primary/5 transition"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0 group-hover:bg-primary group-hover:text-white transition">
                  {ch.number}
                </div>
                <span className="text-gray-700 group-hover:text-primary font-medium text-sm transition">{ch.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 1 — Welcome */}
      {/* ============================================================ */}
      <section id="welcome" data-chapter="1" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChapterHeading number={1} title="Welcome to Your Roofing Guide" />

          {/* Charlotte skyline image */}
          <BookImage
            src={stockImages.guideCharlotteSkyline.src}
            alt={stockImages.guideCharlotteSkyline.alt}
            caption="The Charlotte skyline — home to the communities this guide was written for."
          />

          <div className="prose-simple">
            <p>Welcome! This book was written just for you — the homeowner or property owner in Charlotte, North Carolina.</p>

            <p>Your roof is one of the most important parts of your home. It keeps your family dry. It keeps you cool in summer and warm in winter. It protects everything you own.</p>

            <p>But most people do not know much about their roof. That is okay! That is why we wrote this guide.</p>

            <h3>What You Will Learn</h3>
            <InfoBox title="In this book, you will learn:" icon="book">
              <ul className="space-y-2 mt-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-1" /> What your roof is made of and how it works</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-1" /> Which roofing materials are best for Charlotte weather</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-1" /> How to tell if your roof needs fixing</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-1" /> How to pick an honest, skilled roofing company</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-1" /> What to do when a storm damages your roof</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-1" /> How to save money on your roof</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-1" /> How to avoid roofing scams</li>
              </ul>
            </InfoBox>

            <h3>Why Charlotte?</h3>
            <p>Charlotte has its own special weather. We get hot, humid summers. We get heavy rain and thunderstorms. We sometimes get hail, high winds, and even the edges of hurricanes. All of this affects your roof in ways that are different from other places.</p>

            {/* Charlotte area map illustration */}
            <div className="my-8 bg-white border-2 border-primary/20 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 text-center mb-4">Areas Covered in This Guide</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Charlotte', 'Huntersville', 'Matthews', 'Concord', 'Gastonia', 'Mooresville', 'Indian Trail', 'Fort Mill', 'Rock Hill', 'Weddington', 'Mint Hill', 'Pineville'].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>

            <h3>Who Wrote This Guide?</h3>
            <p>This guide was put together by local roofing professionals who live and work in the Charlotte area. We see roofs every day. We know what works here and what does not. We want to share that knowledge with you so you can make smart choices.</p>

            <h3>How to Use This Book</h3>
            <p>You can read it from start to finish. Or you can jump to the chapter you need most. Use the table of contents above to find the topic you care about.</p>

            <p>Let us get started!</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 2 — What Is a Roof */}
      {/* ============================================================ */}
      <section id="what-is-a-roof" data-chapter="2" className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChapterHeading number={2} title="What Is a Roof and Why Does It Matter?" />

          <BookImage
            src={stockImages.guideSuburbanHomes.src}
            alt={stockImages.guideSuburbanHomes.alt}
            caption="Homes in a Charlotte neighborhood — each roof working hard to protect the family inside."
          />

          <div className="prose-simple">
            <p>A roof is the top covering of your house. It sits on top of the walls and covers everything inside. Think of it like a big hat for your home.</p>

            <h3>What Your Roof Does</h3>

            {/* Visual icon grid for roof jobs */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
              <IconCard icon={<Droplets className="w-6 h-6" />} title="Keeps Water Out" desc="Prevents rain, snow, and ice from leaking in" />
              <IconCard icon={<Sun className="w-6 h-6" />} title="Blocks the Sun" desc="Shields your home from Charlotte's intense heat" />
              <IconCard icon={<Wind className="w-6 h-6" />} title="Stops the Wind" desc="First line of defense against storms" />
              <IconCard icon={<Shield className="w-6 h-6" />} title="Keeps Animals Out" desc="Blocks squirrels, raccoons, and insects" />
              <IconCard icon={<Zap className="w-6 h-6" />} title="Saves Energy" desc="Lowers heating and cooling bills" />
              <IconCard icon={<DollarSign className="w-6 h-6" />} title="Protects Value" desc="A strong roof adds thousands to home value" />
            </div>

            <h3>How Long Does a Roof Last?</h3>
            <p>It depends on what your roof is made of. Here are some general numbers for Charlotte:</p>

            {/* Horizontal bar chart */}
            <div className="my-8 bg-gray-50 rounded-2xl p-6 border">
              <h4 className="font-bold text-gray-900 mb-5 text-center">Roof Lifespan by Material</h4>
              <div className="space-y-4">
                <BarChart label="3-Tab Shingles" value={17} max={100} range="15–20 yrs" color="bg-amber-400" />
                <BarChart label="Architectural Shingles" value={30} max={100} range="25–35 yrs" color="bg-blue-500" />
                <BarChart label="Metal Roofing" value={55} max={100} range="40–70 yrs" color="bg-green-500" />
                <BarChart label="Slate" value={87} max={100} range="75–100+ yrs" color="bg-purple-500" />
                <BarChart label="Flat (TPO/EPDM)" value={25} max={100} range="20–30 yrs" color="bg-orange-400" />
              </div>
            </div>

            <ProTip>Charlotte&apos;s heat, humidity, and storms can shorten these lifespans. Taking care of your roof helps it last longer. We cover roof care in Chapter 12.</ProTip>

            <h3>Your Roof Is an Investment</h3>

            {/* Big stat callout */}
            <div className="my-8 bg-primary/5 border-2 border-primary/20 rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$8,000–$30,000+</div>
              <p className="text-gray-600 text-sm">Average cost of a new roof in Charlotte, NC</p>
              <p className="text-gray-500 text-xs mt-2">Depends on home size and materials chosen</p>
            </div>

            <p>That is a lot of money. But your roof protects everything inside your home — your furniture, your clothes, your electronics, your memories.</p>

            <p>Think of your roof like car insurance. You hope you never need it, but when you do, you are glad you have a good one.</p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CHAPTER 3 — Parts of Your Roof */}
      {/* ============================================================ */}
      <section id="parts-of-roof" data-chapter="3" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ChapterHeading number={3} title="The Parts of Your Roof" />

          <BookImage
            src={stockImages.guideNewConstruction.src}
            alt={stockImages.guideNewConstruction.alt}
            caption="A home under construction showing the roof structure before shingles are installed."
          />

          <div className="prose-simple">
            <p>Before we talk about materials and repairs, it helps to know the parts of a roof. When a roofer talks to you, you will understand what they mean.</p>

            {/* Illustrated roof anatomy diagram */}
            <div className="my-8 bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-primary text-white px-6 py-3 text-center font-bold">Anatomy of a Roof</div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DiagramLabel number={1} term="Ridge" desc="The very top peak where two slopes meet" />
                  <DiagramLabel number={2} term="Shingles" desc="The outer layer you see from the ground" />
                  <DiagramLabel number={3} term="Underlayment" desc="Thin protective layer under the shingles" />
                  <DiagramLabel number={4} term="Deck / Sheathing" desc="Plywood base everything sits on" />
                  <DiagramLabel number={5} term="Flashing" desc="Metal strips sealing chimneys and vents" />
                  <DiagramLabel number={6} term="Fascia" desc="Vertical board along the edge for gutters" />
                  <DiagramLabel number={7} term="Soffit" desc="Flat panel under the eaves with vents" />
                  <DiagramLabel number={8} term="Eaves" desc="Roof edges that overhang the walls" />
                  <DiagramLabel number={9} term="Gutters" desc="Channels that catch and direct rainwater" />
                  <DiagramLabel number={10} term="Drip Edge" desc="Metal strip guiding water into gutters" />
                  <DiagramLabel number={11} term="Valley" desc="The V-shape where two slopes meet" />
                  <DiagramLabel number={12} term="Ventilation" desc="Vents letting hot air escape the attic" />
                </div>
              </div>
            </div>

            <h3>The Deck (or Sheathing)</h3>
            <p>This is the flat base of your roof. It is usually made of plywood or a material called OSB (oriented strand board). Think of it as the floor that everything else sits on. You cannot see it from the outside because shingles cover it.</p>

            <h3>Underlayment</h3>
            <p>This is a thin layer that goes on top of the deck, under the shingles. It is like a second skin of protection. If water ever gets past your shingles, the underlayment helps stop it from reaching the wood below. In Charlotte, most roofers use synthetic underlayment because it handles our humidity well.</p>

            <h3>Shingles (or Roofing Material)</h3>
            <p>This is the outer layer — the part you see from the ground. Shingles overlap each other like fish scales. This design lets rain slide off instead of soaking in. We will talk about different types of shingles and materials in Chapter 5.</p>

            <h3>Flashing</h3>
            <p>Flashing is thin metal strips placed around openings in your roof — like chimneys, vents, and skylights. These are the spots where leaks are most likely to happen. Flashing creates a waterproof seal around these openings. When flashing wears out, leaks often follow.</p>

            <h3>Ridge</h3>
            <p>The ridge is the very top of your roof — the highest point where two sloped sides meet. Special shingles called ridge caps go here. Some roofs have a ridge vent along this line to let hot air escape from the attic.</p>

            <h3>Eaves</h3>
            <p>The eaves are the edges of the roof that hang over the walls of your house. They help direct rainwater away from the walls. In Charlotte, eaves are important because they keep rain from splashing against your siding and foundation.</p>

            <h3>Soffit</h3>
            <p>The soffit is the flat panel under the eaves. If you look up under the overhang of your roof, that flat surface is the soffit. It usually has small holes or vents to let air flow into the attic. Good soffit ventilation helps keep your attic from getting too hot in Charlotte summers.</p>

            <h3>Fascia</h3>
            <p>The fascia is the vertical board that runs along the edge of the roof, right where the gutters attach. It covers the ends of the roof rafters. If your fascia rots, your gutters can pull away from the house.</p>

            <h3>Gutters and Downspouts</h3>
            <p>Gutters are the metal channels along the edge of your roof that catch rainwater. Downspouts are the vertical pipes that carry that water down to the ground and away from your foundation. In Charlotte, gutters are very important because we get about 43 inches of rain per year.</p>

            <h3>Valleys</h3>
            <p>A valley is the low spot where two roof slopes meet and form a V shape. Water runs down into these valleys, so they need extra protection. Roofers usually put extra underlayment or metal flashing in the valleys.</p>

            <h3>Drip Edge</h3>
            <p>A drip edge is a thin metal strip along the edges of your roof. It helps guide water into the gutters instead of letting it run behind them. North Carolina building code requires drip edge on most roofs.</p>

            <h3>Ventilation</h3>
            <p>Your roof needs to breathe. Vents let hot, moist air escape from your attic. Without good ventilation, heat and moisture build up. This can cause mold, rot your wood, and even make your shingles wear out faster. In Charlotte, where summers are hot and humid, ventilation is extra important.</p>

            {/* Vent types visual grid */}
            <div className="my-6 grid grid-cols-2 gap-3">
              <div className="bg-white border rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">▲</div>
                <div className="font-bold text-sm text-gray-900">Ridge Vents</div>
                <div className="text-xs text-gray-500">Along the top peak</div>
              </div>
              <div className="bg-white border rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">◻</div>
                <div className="font-bold text-sm text-gray-900">Box Vents</div>
                <div className="text-xs text-gray-500">On the roof surface</div>
              </div>
              <div className="bg-white border rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">⟳</div>
                <div className="font-bold text-sm text-gray-900">Power Vents</div>
                <div className="text-xs text-gray-500">Fans pushing hot air out</div>
              </div>
              <div className="bg-white border rounded-xl p-4 text-center">
                <div className="text-2xl mb-1">↑</div>
                <div className="font-bold text-sm text-gray-900">Soffit Vents</div>
                <div className="text-xs text-gray-500">Let cool air in below</div>
              </div>
            </div>

            <p>Now that you know the parts, let us look at the different types of roofs you will see around Charlotte.</p>
          </div>
        </div>
      </section>

      {/* Chapter image — Roof types */}
      <FullWidthImage
        src={stockImages.guideGableRoof.src}
        alt={stockImages.guideGableRoof.alt}
        caption="A classic gable-style roof — the most common type found throughout Charlotte neighborhoods."
      />

      {/* Remaining chapters */}
      <Chapter4 />
      <Chapter5 />

      <GuideDownloadBanner />

      <Chapter6 />

      <FullWidthImage
        src={stockImages.guideLightningStorm.src}
        alt={stockImages.guideLightningStorm.alt}
        caption="Severe storms are a fact of life in Charlotte — your roof is your first line of defense."
      />

      <Chapter7 />
      <Chapter8 />

      <FullWidthImage
        src={stockImages.guideRooferWorking.src}
        alt={stockImages.guideRooferWorking.alt}
        caption="A professional roofer installing new shingles — always hire licensed, insured contractors."
      />

      <Chapter9 />

      <GuideDownloadBanner />

      <Chapter10 />
      <Chapter11 />

      <FullWidthImage
        src={stockImages.guideMaintenance.src}
        alt={stockImages.guideMaintenance.alt}
        caption="Regular maintenance like gutter cleaning extends the life of your roof by years."
      />

      <Chapter12 />
      <Chapter13 />
      <Chapter14 />

      <GuideDownloadBanner />

      <Chapter15 />
      <Chapter16 />
      <Chapter17 />
      <Chapter18 />

      {/* Download CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={stockImages.guideDownloadCta.src}
                  alt={stockImages.guideDownloadCta.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-bold">Take This Guide With You</p>
                  <p className="text-sm text-white/80">Download the free PDF + get a surprise gift in the mail!</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <GuideDownloadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/90 mb-8 text-lg">Now that you know the basics, get a free instant estimate for your Charlotte area home.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition text-lg"
            >
              Get Your Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/companies"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition text-lg"
            >
              Find a Roofing Company
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ================================================================ */
/* Shared Visual Components                                          */
/* ================================================================ */

function ChapterHeading({ number, title }: { number: number; title: string }) {
  return (
    <div className="mb-8">
      <span className="inline-block text-sm font-bold text-primary bg-primary/10 rounded-full px-4 py-1 mb-3">
        Chapter {number}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
    </div>
  )
}

function BookImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="my-8 rounded-2xl overflow-hidden shadow-md border border-gray-200">
      <div className="relative h-48 md:h-64">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 700px" />
      </div>
      {caption && (
        <figcaption className="px-4 py-3 bg-gray-50 text-xs text-gray-500 italic text-center border-t">{caption}</figcaption>
      )}
    </figure>
  )
}

function FullWidthImage({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="relative w-full h-48 md:h-72 overflow-hidden">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      {caption && (
        <figcaption className="absolute bottom-3 left-0 right-0 text-center text-white/90 text-sm px-4 drop-shadow-lg">{caption}</figcaption>
      )}
    </figure>
  )
}

function IconCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-md transition">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
        {icon}
      </div>
      <div className="font-bold text-sm text-gray-900 mb-1">{title}</div>
      <div className="text-xs text-gray-500">{desc}</div>
    </div>
  )
}

function BarChart({ label, value, max, range, color }: { label: string; value: number; max: number; range: string; color: string }) {
  const pct = Math.round((value / max) * 100)
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="font-bold text-primary">{range}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div className={`h-4 rounded-full ${color} transition-all duration-500`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function ProTip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
      <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
      <div className="text-sm text-amber-900">{children}</div>
    </div>
  )
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
      <TriangleAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
      <div className="text-sm text-red-900">{children}</div>
    </div>
  )
}

function InfoBox({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) {
  return (
    <div className="my-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-2">
        <Info className="w-5 h-5 text-blue-600" />
        <span className="font-bold text-blue-900 text-sm">{title}</span>
      </div>
      <div className="text-sm text-blue-800">{children}</div>
    </div>
  )
}

function DiagramLabel({ number, term, desc }: { number: number; term: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-2">
      <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">{number}</div>
      <div>
        <div className="font-bold text-sm text-gray-900">{term}</div>
        <div className="text-xs text-gray-500">{desc}</div>
      </div>
    </div>
  )
}

function ComparisonGrid({ items }: { items: { name: string; cost: string; lifespan: string; wind: string; best: string }[] }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="px-3 py-3 text-left rounded-tl-xl">Material</th>
            <th className="px-3 py-3 text-center">Cost/sq ft</th>
            <th className="px-3 py-3 text-center">Lifespan</th>
            <th className="px-3 py-3 text-center">Wind Rating</th>
            <th className="px-3 py-3 text-left rounded-tr-xl">Best For</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.name} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="px-3 py-3 font-semibold text-gray-900">{item.name}</td>
              <td className="px-3 py-3 text-center text-gray-700">{item.cost}</td>
              <td className="px-3 py-3 text-center text-gray-700">{item.lifespan}</td>
              <td className="px-3 py-3 text-center text-gray-700">{item.wind}</td>
              <td className="px-3 py-3 text-gray-600">{item.best}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function StatCard({ value, label, sublabel }: { value: string; label: string; sublabel?: string }) {
  return (
    <div className="bg-white border-2 border-primary/10 rounded-xl p-5 text-center">
      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-sm font-medium text-gray-700">{label}</div>
      {sublabel && <div className="text-xs text-gray-400 mt-1">{sublabel}</div>}
    </div>
  )
}

/* ================================================================ */
/* CHAPTER 4 — Types of Roofs in Charlotte                           */
/* ================================================================ */
function Chapter4() {
  return (
    <section id="roof-types" data-chapter="4" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={4} title="Types of Roofs in Charlotte" />
        <div className="prose-simple">
          <p>When you drive around Charlotte, you will notice that not all roofs look the same. Some are steep. Some are flat. Some have many angles. The shape of a roof is called its style or type.</p>

          {/* Visual roof type cards */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <RoofTypeCard name="Gable Roof" shape="⌂" popularity="Most Common" desc="Two slopes forming a V-shape. Great for rain. Found in Ballantyne, Huntersville, Matthews." good={true} />
            <RoofTypeCard name="Hip Roof" shape="⬠" popularity="Very Popular" desc="Four sloping sides. Best wind protection. Common in South Charlotte and Fort Mill." good={true} />
            <RoofTypeCard name="Combination" shape="⌂⬠" popularity="Common" desc="Mix of gable and hip sections. More valleys where leaks can happen." good={true} />
            <RoofTypeCard name="Flat Roof" shape="▬" popularity="Commercial" desc="Slight slope for drainage. Needs TPO or EPDM. Common on South Blvd and Uptown shops." good={true} />
            <RoofTypeCard name="Mansard Roof" shape="⌸" popularity="Historic" desc="Four sides, each with two slopes. Extra attic space. Found in Dilworth and Plaza Midwood." good={true} />
            <RoofTypeCard name="Shed Roof" shape="⟋" popularity="Modern" desc="Single sloping surface. Used on additions and modern homes in NoDa and South End." good={true} />
          </div>

          <ProTip>For most Charlotte homes, <strong>gable and hip roofs</strong> are the best choices. They handle our rain, heat, and occasional storms well. If you are building new, a hip roof gives the best wind protection.</ProTip>
        </div>
      </div>
    </section>
  )
}

function RoofTypeCard({ name, shape, popularity, desc, good }: { name: string; shape: string; popularity: string; desc: string; good: boolean }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{shape}</span>
        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">{popularity}</span>
      </div>
      <h4 className="font-bold text-gray-900 mb-1">{name}</h4>
      <p className="text-xs text-gray-600">{desc}</p>
      <div className="mt-2 flex items-center gap-1 text-xs">
        {good ? <ThumbsUp className="w-3 h-3 text-green-600" /> : <ThumbsDown className="w-3 h-3 text-red-600" />}
        <span className={good ? 'text-green-700' : 'text-red-700'}>{good ? 'Good for Charlotte' : 'Not ideal for Charlotte'}</span>
      </div>
    </div>
  )
}

/* ================================================================ */
/* CHAPTER 5 — Roofing Materials                                     */
/* ================================================================ */
function Chapter5() {
  return (
    <section id="materials" data-chapter="5" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={5} title="Roofing Materials: What Goes on Top" />

        <BookImage
          src={stockImages.guideShingleCloseup.src}
          alt={stockImages.guideShingleCloseup.alt}
          caption="Close-up of architectural shingles — the most popular choice in Charlotte right now."
        />

        <div className="prose-simple">
          <p>The material on your roof is one of the biggest decisions you will make. Each material has its own price, lifespan, and look. Let us go through the most common ones used in the Charlotte area.</p>

          {/* Material comparison table */}
          <ComparisonGrid items={[
            { name: '3-Tab Shingles', cost: '$3.50–$5.50', lifespan: '15–20 yrs', wind: '60–70 mph', best: 'Tight budgets' },
            { name: 'Architectural', cost: '$4.50–$7.00', lifespan: '25–35 yrs', wind: '130 mph', best: 'Most Charlotte homes' },
            { name: 'Standing Seam Metal', cost: '$9–$14', lifespan: '40–70 yrs', wind: '140+ mph', best: 'Long-term owners' },
            { name: 'Metal Shingles', cost: '$7–$12', lifespan: '40–60 yrs', wind: '120+ mph', best: 'Metal look + traditional style' },
            { name: 'Slate', cost: '$15–$30', lifespan: '75–100+ yrs', wind: '100+ mph', best: 'Luxury & historic homes' },
            { name: 'Cedar Shake', cost: '$8–$15', lifespan: '30–50 yrs', wind: '80+ mph', best: 'Rustic style homes' },
            { name: 'Synthetic', cost: '$6–$12', lifespan: '30–50 yrs', wind: '110+ mph', best: 'Slate/wood look for less' },
          ]} />

          <h3>Architectural Shingles — Charlotte&apos;s #1 Choice</h3>
          <div className="my-6 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUp className="w-5 h-5 text-green-600" />
              <span className="font-bold text-green-900">Our Recommendation for Most Homes</span>
            </div>
            <p className="text-sm text-green-800 mb-3">About <strong>80% of new roofs</strong> in the Charlotte area use architectural shingles. They are thicker than 3-tab, look better, and handle storms much better.</p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-white rounded-lg p-3">
                <div className="text-lg font-bold text-green-700">$4.50–$7</div>
                <div className="text-xs text-gray-500">Per sq ft installed</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="text-lg font-bold text-green-700">25–35 yrs</div>
                <div className="text-xs text-gray-500">Lifespan</div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <div className="text-lg font-bold text-green-700">130 mph</div>
                <div className="text-xs text-gray-500">Wind rating</div>
              </div>
            </div>
          </div>

          <p>Popular brands: <strong>GAF Timberline</strong>, <strong>Owens Corning Duration</strong>, and <strong>CertainTeed Landmark</strong>.</p>

          <h3>Metal Roofing — Growing in Popularity</h3>

          <BookImage
            src={stockImages.guideMetalRoof.src}
            alt={stockImages.guideMetalRoof.alt}
            caption="A modern standing seam metal roof — increasingly popular in Myers Park and Lake Norman areas."
          />

          <p>Standing seam metal roofs have long vertical panels with raised seams. They are very tough and last a very long time. Metal roofs reflect the sun, which can lower your cooling bill by 10–25% in Charlotte summers.</p>

          <h3>Slate — The Century Roof</h3>
          <p>Slate is natural stone cut into thin pieces. It is one of the most beautiful and longest-lasting roofing materials in the world. You will find slate roofs on some historic homes in Dilworth, Elizabeth, and Fourth Ward.</p>

          <WarningBox>Slate is very heavy. Your house may need extra support. You also need a roofer who specializes in slate — not every roofer can install it properly.</WarningBox>

          <h3>What Do We Recommend for Charlotte?</h3>
          <p>For most homes in the Charlotte area, <strong>architectural shingles</strong> are the best value. They handle our weather, look great, and have good warranties. If you plan to stay in your home for a long time and can spend more upfront, <strong>metal roofing</strong> is an excellent choice.</p>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 6 — Charlotte Weather                                     */
/* ================================================================ */
function Chapter6() {
  return (
    <section id="weather" data-chapter="6" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={6} title="How Charlotte Weather Affects Your Roof" />
        <div className="prose-simple">
          <p>Charlotte has what weather experts call a humid subtropical climate. That is a fancy way of saying: hot, sticky summers and mild winters with lots of rain. Here is how each part of our weather affects your roof.</p>

          {/* Weather stats grid */}
          <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            <StatCard value="43 in" label="Yearly Rainfall" sublabel="Above national average" />
            <StatCard value="90°F+" label="Summer Highs" sublabel="June through September" />
            <StatCard value="40-50" label="Thunderstorms/Year" sublabel="Wind gusts 60+ mph" />
            <StatCard value="70-80%" label="Summer Humidity" sublabel="Causes mold & algae" />
            <StatCard value="150°F+" label="Roof Surface Temp" sublabel="On sunny summer days" />
            <StatCard value="Jun-Nov" label="Hurricane Season" sublabel="Tropical storms reach CLT" />
          </div>

          <h3>Heat and Sun</h3>
          <p>Charlotte summers are hot. Temperatures regularly hit 90°F to 100°F from June through September. Your roof surface can reach 150°F or more on a sunny day.</p>
          <p>This extreme heat causes shingles to expand and then shrink when it cools at night. Over years, this constant expanding and shrinking makes shingles crack and curl.</p>
          <ProTip>Choose lighter-colored shingles or reflective materials. Make sure your attic has good ventilation so heat does not get trapped.</ProTip>

          <h3>Rain</h3>
          <p>Charlotte gets about 43 inches of rain each year. That is more than the national average. Some of that rain comes in heavy downpours during summer thunderstorms.</p>
          <p>All that water needs to flow off your roof quickly and cleanly. If your gutters are clogged, water backs up under your shingles.</p>

          <h3>Thunderstorms and Wind</h3>
          <p>Charlotte gets about 40–50 thunderstorms per year. These storms can bring wind gusts of 60 mph or more. Strong wind can lift shingles, tear off flashing, and blow debris onto your roof.</p>

          <h3>Hail</h3>
          <p>Charlotte does get hail, though usually small. However, even small hail can dent shingles and weaken their protective coating. Large hail events can destroy a roof in minutes.</p>

          <h3>Humidity and Moisture</h3>
          <p>Charlotte&apos;s humidity is one of the biggest threats to your roof. High moisture can cause:</p>
          <ul>
            <li>Mold and algae growth on shingles (those dark streaks you see)</li>
            <li>Wood rot in the deck, fascia, and soffit</li>
            <li>Moisture buildup in the attic, damaging insulation</li>
          </ul>

          <h3>Winter Weather</h3>
          <p>Charlotte winters are mild compared to the north. We rarely get heavy snow. But we do get ice storms. Ice can form under shingles, push them up, and create gaps where water gets in. This is called an ice dam.</p>

          <h3>Hurricanes and Tropical Storms</h3>
          <p>Charlotte is about 200 miles from the coast, but we still feel the effects. Hurricane Hugo in 1989 caused major damage across the Charlotte area. More recently, tropical storms have brought heavy rain and high winds to our region.</p>

          {/* Seasonal threat timeline */}
          <div className="my-8 bg-gray-50 rounded-2xl p-6 border">
            <h4 className="font-bold text-gray-900 text-center mb-5">Charlotte Roof Threats by Season</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-xl border border-blue-100">
                <Snowflake className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <div className="font-bold text-sm text-gray-900">Winter</div>
                <div className="text-xs text-gray-600 mt-1">Ice dams, freeze/thaw cycles, cracked flashing</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-xl border border-green-100">
                <Droplets className="w-6 h-6 text-green-500 mx-auto mb-2" />
                <div className="font-bold text-sm text-gray-900">Spring</div>
                <div className="text-xs text-gray-600 mt-1">Heavy rain, pollen buildup, hail season starts</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-xl border border-orange-100">
                <Sun className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                <div className="font-bold text-sm text-gray-900">Summer</div>
                <div className="text-xs text-gray-600 mt-1">UV damage, 150°F surface, thunderstorms, humidity</div>
              </div>
              <div className="text-center p-3 bg-red-50 rounded-xl border border-red-100">
                <Wind className="w-6 h-6 text-red-500 mx-auto mb-2" />
                <div className="font-bold text-sm text-gray-900">Fall</div>
                <div className="text-xs text-gray-600 mt-1">Hurricane season, leaf buildup, gutter clogs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 7 — Warning Signs                                         */
/* ================================================================ */
function Chapter7() {
  return (
    <section id="warning-signs" data-chapter="7" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={7} title="Signs Your Roof Needs Help" />
        <div className="prose-simple">
          <p>Your roof cannot talk to you. But it does give you signs when something is wrong. Here are the warning signs every Charlotte homeowner should know.</p>

          <h3>Signs You Can See from the Ground</h3>

          {/* Visual warning sign cards */}
          <div className="my-6 space-y-3">
            <WarningSignCard icon={<Eye className="w-5 h-5" />} sign="Missing shingles" detail="Bare spots where shingles used to be let water into your home." severity="high" />
            <WarningSignCard icon={<Eye className="w-5 h-5" />} sign="Curling or buckling shingles" detail="Should lie flat. Charlotte's heat causes curling over time." severity="high" />
            <WarningSignCard icon={<Eye className="w-5 h-5" />} sign="Dark streaks" detail="Algae growth from Charlotte's humidity. Eats shingles over time." severity="medium" />
            <WarningSignCard icon={<Eye className="w-5 h-5" />} sign="Moss growth" detail="Holds moisture against shingles causing rot. Common in shady areas." severity="medium" />
            <WarningSignCard icon={<Eye className="w-5 h-5" />} sign="Sagging areas" detail="Wood underneath may be rotting. Call a roofer right away." severity="critical" />
            <WarningSignCard icon={<Eye className="w-5 h-5" />} sign="Damaged flashing" detail="Bent, rusty, or missing metal around chimney and vents." severity="high" />
            <WarningSignCard icon={<Eye className="w-5 h-5" />} sign="Granules in gutters" detail="Tiny gravel pieces from shingles — means they are wearing out." severity="medium" />
          </div>

          <h3>Signs You See from Inside</h3>
          <div className="my-6 space-y-3">
            <WarningSignCard icon={<Home className="w-5 h-5" />} sign="Water stains on ceiling" detail="Brown or yellow spots mean water is getting through." severity="high" />
            <WarningSignCard icon={<Home className="w-5 h-5" />} sign="Light through attic" detail="If sunlight comes through holes, water can too." severity="high" />
            <WarningSignCard icon={<Home className="w-5 h-5" />} sign="Mold or musty smells" detail="Moisture is getting in. Mold grows fast in Charlotte humidity." severity="high" />
            <WarningSignCard icon={<Home className="w-5 h-5" />} sign="Higher energy bills" detail="Poor insulation or ventilation from roof problems." severity="low" />
          </div>

          <h3>How Old Is Your Roof?</h3>
          {/* Age timeline visualization */}
          <div className="my-8 bg-white rounded-2xl border overflow-hidden">
            <div className="bg-primary text-white px-6 py-3 font-bold text-center text-sm">Roof Age Guide — When to Worry</div>
            <div className="p-4 space-y-0">
              <AgeRange years="Under 10 years" status="Probably fine" color="bg-green-500" desc="Just do regular checks." />
              <AgeRange years="10–20 years" status="Watch closely" color="bg-yellow-500" desc="Get it inspected every year or two." />
              <AgeRange years="20–30 years" status="Getting old" color="bg-orange-500" desc="May be nearing end of life. Get a professional inspection." />
              <AgeRange years="Over 30 years" status="Replace soon" color="bg-red-500" desc="If not replaced, it likely needs to be soon." />
            </div>
          </div>

          <h3>When to Act</h3>
          <WarningBox>If you notice any of these signs, do not wait. Small problems become big (and expensive) problems fast, especially in Charlotte where storms can make things worse overnight. A roof inspection from a trusted company is usually free and takes less than an hour.</WarningBox>
        </div>
      </div>
    </section>
  )
}

function WarningSignCard({ icon, sign, detail, severity }: { icon: React.ReactNode; sign: string; detail: string; severity: 'low' | 'medium' | 'high' | 'critical' }) {
  const colors = {
    low: 'border-yellow-200 bg-yellow-50',
    medium: 'border-orange-200 bg-orange-50',
    high: 'border-red-200 bg-red-50',
    critical: 'border-red-400 bg-red-100',
  }
  const badges = {
    low: 'bg-yellow-100 text-yellow-800',
    medium: 'bg-orange-100 text-orange-800',
    high: 'bg-red-100 text-red-800',
    critical: 'bg-red-200 text-red-900',
  }
  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border ${colors[severity]}`}>
      <div className="text-gray-600 shrink-0 mt-0.5">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-sm text-gray-900">{sign}</span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${badges[severity]}`}>{severity}</span>
        </div>
        <p className="text-xs text-gray-700">{detail}</p>
      </div>
    </div>
  )
}

function AgeRange({ years, status, color, desc }: { years: string; status: string; color: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 p-3 border-b last:border-b-0">
      <div className={`w-3 h-3 rounded-full ${color} shrink-0`} />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm text-gray-900">{years}</span>
          <span className="text-xs font-medium text-gray-500">{status}</span>
        </div>
        <p className="text-xs text-gray-600">{desc}</p>
      </div>
    </div>
  )
}

/* ================================================================ */
/* CHAPTER 8 — Repair vs Replace                                     */
/* ================================================================ */
function Chapter8() {
  return (
    <section id="repair-or-replace" data-chapter="8" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={8} title="Should You Repair or Replace Your Roof?" />
        <div className="prose-simple">
          <p>This is one of the biggest questions homeowners face. A repair is cheaper today, but a replacement might save money in the long run. Here is how to decide.</p>

          {/* Side-by-side comparison */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-5 h-5 text-green-700" />
                <h4 className="font-bold text-green-900">Repair Makes Sense When...</h4>
              </div>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Roof is under 15 years old</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Damage is in one small area</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Cost is under 30% of replacement</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> You plan to sell soon</li>
              </ul>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-5 h-5 text-blue-700" />
                <h4 className="font-bold text-blue-900">Replace Makes Sense When...</h4>
              </div>
              <ul className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Roof is over 20 years old</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> You keep making repairs yearly</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Damage is widespread</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Wood deck underneath is rotting</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Multiple leaks in different spots</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" /> Want to increase home value</li>
              </ul>
            </div>
          </div>

          <h3>The Cost Comparison</h3>
          {/* Cost comparison chart */}
          <div className="my-8 bg-gray-50 rounded-2xl p-6 border">
            <h4 className="font-bold text-gray-900 text-center mb-5">Charlotte Roofing Costs</h4>
            <div className="space-y-4">
              <BarChart label="Small repair (few shingles)" value={4} max={100} range="$200–$500" color="bg-green-400" />
              <BarChart label="Medium repair (flashing, section)" value={10} max={100} range="$500–$1,500" color="bg-green-500" />
              <BarChart label="Large repair (major leak)" value={20} max={100} range="$1,500–$4,000" color="bg-yellow-500" />
              <BarChart label="Full replacement (average home)" value={50} max={100} range="$8,000–$15,000" color="bg-orange-500" />
              <BarChart label="Full replacement (large/premium)" value={100} max={100} range="$15,000–$35,000+" color="bg-red-500" />
            </div>
          </div>

          <h3>Can You Put New Shingles Over Old Ones?</h3>
          <p>Some people ask about putting new shingles on top of old ones. North Carolina code allows up to two layers. However, most Charlotte roofing professionals do not recommend it.</p>

          <WarningBox>
            <strong>Why layovers are risky:</strong> You cannot see the wood deck to check for rot. Extra weight stresses the structure. Shingles do not lie flat. It can void your warranty. Future replacement costs more because both layers need removal.
          </WarningBox>

          <ProTip>If you are not sure, get two or three opinions from local roofing companies. Honest roofers will tell you whether a repair or replacement is the better option.</ProTip>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 9 — Choosing a Contractor                                 */
/* ================================================================ */
function Chapter9() {
  return (
    <section id="choosing-contractor" data-chapter="9" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={9} title="How to Pick a Good Roofing Company" />

        <BookImage
          src={stockImages.guideContractor.src}
          alt={stockImages.guideContractor.alt}
          caption="A professional contractor reviewing plans — always meet your roofer face-to-face before hiring."
        />

        <div className="prose-simple">
          <p>Picking the right roofer is just as important as picking the right material. A great material installed badly will fail. A good roofer will do the job right and stand behind their work.</p>

          <h3>What to Look For</h3>

          {/* Checklist cards */}
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            <ChecklistItem num={1} text="Local to Charlotte" detail="They know our weather, codes, and will be here for warranty work." />
            <ChecklistItem num={2} text="Licensed and insured" detail="NC requires licenses for jobs over $30K. Ask for proof." />
            <ChecklistItem num={3} text="Good reviews" detail="Check Google, Yelp, and BBB. Look for lots of genuine reviews." />
            <ChecklistItem num={4} text="Experience" detail="5, 10, or 20+ years in Charlotte means a proven track record." />
            <ChecklistItem num={5} text="Written estimates" detail="Detailed materials, scope, timeline, and total cost." />
            <ChecklistItem num={6} text="Manufacturer certs" detail="GAF, Owens Corning, CertainTeed certified = extended warranties." />
            <ChecklistItem num={7} text="Strong warranty" detail="At least 5-year workmanship warranty. Many offer 10+." />
          </div>

          <h3>Red Flags</h3>

          <div className="my-6 bg-red-50 border-2 border-red-200 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-red-600" />
              <span className="font-bold text-red-900">Warning Signs of a Bad Roofer</span>
            </div>
            <ul className="space-y-2 text-sm text-red-800">
              <li>Door knockers after a storm — often storm chasers</li>
              <li>Demanding full payment upfront — never more than 30–50%</li>
              <li>No written contract — verbal promises mean nothing</li>
              <li>Pressure to decide today — good roofers let you take time</li>
              <li>Way-too-low bids — ask why it is so much cheaper</li>
              <li>No physical address — just a cell phone number</li>
            </ul>
          </div>

          <h3>Questions to Ask Every Roofer</h3>
          <InfoBox title="Top 10 Questions">
            <ol className="space-y-1 mt-2 list-decimal list-inside">
              <li>How long have you been in business in Charlotte?</li>
              <li>Are you licensed and insured? Can I see proof?</li>
              <li>Do you use subcontractors or your own crew?</li>
              <li>What brands of shingles do you recommend and why?</li>
              <li>What is your workmanship warranty?</li>
              <li>Can I see photos or visit a recent job?</li>
              <li>How long will the project take?</li>
              <li>What happens if it rains during the job?</li>
              <li>Who do I call if there is a problem after?</li>
              <li>Will you put everything in a written contract?</li>
            </ol>
          </InfoBox>

          <p>Browse verified local roofing companies on <Link href="/companies" className="text-primary font-medium hover:underline">Charlotte Roofing Hub</Link>.</p>
        </div>
      </div>
    </section>
  )
}

function ChecklistItem({ num, text, detail }: { num: number; text: string; detail: string }) {
  return (
    <div className="flex items-start gap-3 bg-white border rounded-xl p-4">
      <div className="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold shrink-0">{num}</div>
      <div>
        <div className="font-bold text-sm text-gray-900">{text}</div>
        <div className="text-xs text-gray-500">{detail}</div>
      </div>
    </div>
  )
}

/* ================================================================ */
/* CHAPTER 10 — Estimates and Prices                                 */
/* ================================================================ */
function Chapter10() {
  return (
    <section id="estimates" data-chapter="10" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={10} title="Understanding Roofing Estimates and Prices" />
        <div className="prose-simple">
          <p>Getting a roofing estimate can feel confusing. There are lots of numbers, terms, and line items. Let us break it down.</p>

          <h3>How Roofing Is Measured</h3>
          <div className="my-6 bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">1 &quot;Square&quot; = 100 sq ft</div>
            <p className="text-sm text-gray-600">A 2,000 sq ft roof = 20 squares. Your roof area is usually 20–40% bigger than your floor area.</p>
          </div>

          <h3>What Should Be in an Estimate</h3>
          <div className="my-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Materials', 'Tear-off', 'Labor', 'Decking repair', 'Flashing', 'Cleanup & disposal', 'Permits'].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 border">
                <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          <h3>Average Costs in Charlotte (2025–2026)</h3>
          <div className="my-8 bg-gray-50 rounded-2xl p-6 border">
            <h4 className="font-bold text-gray-900 text-center mb-1">Architectural Shingles — Most Common</h4>
            <p className="text-xs text-gray-500 text-center mb-5">Prices vary by size, pitch, and complexity</p>
            <div className="space-y-4">
              <BarChart label="1,200 sq ft home" value={30} max={100} range="$7,000–$11,000" color="bg-blue-400" />
              <BarChart label="1,800 sq ft home" value={45} max={100} range="$9,000–$14,000" color="bg-blue-500" />
              <BarChart label="2,500 sq ft home" value={65} max={100} range="$12,000–$18,000" color="bg-blue-600" />
              <BarChart label="3,500+ sq ft home" value={85} max={100} range="$16,000–$25,000+" color="bg-blue-700" />
            </div>
          </div>

          <h3>What Affects the Price</h3>
          <div className="my-6 grid grid-cols-2 gap-3">
            {[
              { factor: 'Roof size', impact: 'Bigger = higher cost' },
              { factor: 'Steepness (pitch)', impact: 'Steeper = more labor' },
              { factor: 'Layers to remove', impact: 'Two layers = more cost' },
              { factor: 'Complexity', impact: 'More valleys/dormers = more' },
              { factor: 'Material choice', impact: '$3.50 to $30+ per sq ft' },
              { factor: 'Time of year', impact: 'Winter = possible discounts' },
            ].map((item) => (
              <div key={item.factor} className="bg-gray-50 border rounded-xl p-3">
                <div className="font-bold text-sm text-gray-900">{item.factor}</div>
                <div className="text-xs text-gray-500">{item.impact}</div>
              </div>
            ))}
          </div>

          <ProTip>Get a free instant estimate for your Charlotte area home at <Link href="/estimate" className="text-primary font-medium hover:underline">our estimate page</Link>.</ProTip>

          <h3>Do Not Just Pick the Cheapest</h3>
          <p>The cheapest bid is often cheap for a reason. They might use lower-quality materials, cut corners, or not carry proper insurance. Look at overall value: good materials + skilled installation + strong warranty = the best deal.</p>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 11 — Insurance                                            */
/* ================================================================ */
function Chapter11() {
  return (
    <section id="insurance" data-chapter="11" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={11} title="Insurance and Storm Damage Claims" />

        <BookImage
          src={stockImages.guideInsurance.src}
          alt={stockImages.guideInsurance.alt}
          caption="Understanding your insurance paperwork is key to getting your roof covered after a storm."
        />

        <div className="prose-simple">
          <p>Storms are a fact of life in Charlotte. When a storm damages your roof, your homeowner&apos;s insurance can help pay for repairs or a replacement.</p>

          {/* Covered vs Not Covered */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2"><CheckCircle className="w-4 h-4" /> Usually Covered</h4>
              <ul className="space-y-1 text-sm text-green-800">
                <li>Wind damage (storms, tornadoes)</li>
                <li>Hail damage</li>
                <li>Falling trees or branches</li>
                <li>Fire</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2"><XCircle className="w-4 h-4" /> Usually NOT Covered</h4>
              <ul className="space-y-1 text-sm text-red-800">
                <li>Normal wear and tear</li>
                <li>Lack of maintenance</li>
                <li>Cosmetic damage only</li>
              </ul>
            </div>
          </div>

          <h3>Step-by-Step: Filing a Claim</h3>

          {/* Step process visualization */}
          <div className="my-8 space-y-0">
            <StepCard step={1} title="Document the damage" desc="Take photos and videos from the ground. Do not climb on your roof." />
            <StepCard step={2} title="Call a local roofer" desc="Get a free inspection and a report of what they find." />
            <StepCard step={3} title="Call your insurance" desc="Report the damage and start a claim. They assign an adjuster." />
            <StepCard step={4} title="Adjuster visits" desc="Have your roofer present — they can point out missed damage." />
            <StepCard step={5} title="Review the estimate" desc="Compare adjuster's estimate to your roofer's. Negotiate if needed." />
            <StepCard step={6} title="Get the work done" desc="Choose your roofer, schedule work. Insurance pays minus deductible." />
          </div>

          <h3>Understanding Your Deductible</h3>
          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-gray-900">Flat Deductible</div>
              <div className="text-sm text-gray-500">A set amount like $1,000 or $2,500</div>
            </div>
            <div className="bg-white border rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-gray-900">Percentage Deductible</div>
              <div className="text-sm text-gray-500">2% of $300K home = $6,000</div>
            </div>
          </div>

          <WarningBox>
            <strong>Watch for insurance scams:</strong> Anyone who offers to &quot;waive your deductible&quot; (illegal in NC), asks you to sign over your claim, or pressures you to sign immediately is a scammer. You should always control your own insurance claim.
          </WarningBox>
        </div>
      </div>
    </section>
  )
}

function StepCard({ step, title, desc }: { step: number; title: string; desc: string }) {
  return (
    <div className="flex gap-4 pb-6 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">{step}</div>
        <div className="w-0.5 flex-1 bg-primary/20 mt-2 last:hidden" />
      </div>
      <div className="pt-1.5">
        <div className="font-bold text-gray-900 text-sm">{title}</div>
        <p className="text-xs text-gray-600 mt-1">{desc}</p>
      </div>
    </div>
  )
}

/* ================================================================ */
/* CHAPTER 12 — Maintenance                                          */
/* ================================================================ */
function Chapter12() {
  return (
    <section id="maintenance" data-chapter="12" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={12} title="Taking Care of Your Roof" />
        <div className="prose-simple">
          <p>Your roof works hard every day. A little maintenance goes a long way in making it last longer and avoiding costly repairs.</p>

          <h3>Twice-a-Year Checklist</h3>

          {/* Seasonal checklist cards */}
          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Droplets className="w-5 h-5 text-green-600" />
                <h4 className="font-bold text-green-900">Spring Check (Mar–Apr)</h4>
              </div>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Look for missing/damaged shingles</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Check chimney/vent flashing</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Clean out gutters (pollen!)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Check for moss or algae</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Trim branches near roof</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Check attic for leaks</li>
              </ul>
            </div>
            <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Wind className="w-5 h-5 text-orange-600" />
                <h4 className="font-bold text-orange-900">Fall Check (Sep–Oct)</h4>
              </div>
              <ul className="space-y-2 text-sm text-orange-800">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Clean gutters (falling leaves!)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Look for summer storm damage</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Check caulk around pipes/vents</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Inspect attic insulation</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Clear all vent openings</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" /> Fix small issues before winter</li>
              </ul>
            </div>
          </div>

          <ProTip>Most roofing companies in Charlotte offer free inspections. Schedule one every year or two, especially if your roof is over 10 years old. Better to catch problems early than pay for emergency repairs.</ProTip>

          <h3>DIY Maintenance Tips</h3>
          <ul>
            <li><strong>Keep gutters clean.</strong> Clogged gutters cause water to back up under shingles. Clean them at least twice a year — spring and fall.</li>
            <li><strong>Trim overhanging branches.</strong> Keep branches at least 6 feet from your roof to prevent damage and reduce shade (which grows moss).</li>
            <li><strong>Remove debris.</strong> Leaves, pine needles, and branches trap moisture on your roof.</li>
            <li><strong>Check after storms.</strong> After any big storm, look at your roof from the ground for damage.</li>
            <li><strong>Keep your attic ventilated.</strong> Make sure vents are not blocked by insulation or debris.</li>
          </ul>

          <WarningBox>Never pressure wash your roof. It strips the protective granules off your shingles and can void your warranty. If you need cleaning, hire a professional who uses soft-wash methods.</WarningBox>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 13 — Energy Efficiency                                    */
/* ================================================================ */
function Chapter13() {
  return (
    <section id="energy" data-chapter="13" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={13} title="Energy-Efficient Roofing" />

        <BookImage
          src={stockImages.guideEnergy.src}
          alt={stockImages.guideEnergy.alt}
          caption="Solar panels on a residential roof — one of many ways to make your roof work harder for you."
        />

        <div className="prose-simple">
          <p>Your roof does more than keep out rain. It plays a big role in how much you spend on heating and cooling. In Charlotte, where summers are hot and long, an energy-efficient roof can save you real money.</p>

          {/* Energy savings visualization */}
          <div className="my-8 bg-white border-2 border-green-200 rounded-2xl p-6 text-center">
            <h4 className="font-bold text-gray-900 mb-4">Potential Energy Savings</h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold text-green-600">10–25%</div>
                <div className="text-xs text-gray-500">Cooling bill savings with reflective roofing</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">$200–$600</div>
                <div className="text-xs text-gray-500">Annual savings for average Charlotte home</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">30°F</div>
                <div className="text-xs text-gray-500">Cooler attic temp with proper ventilation</div>
              </div>
            </div>
          </div>

          <h3>How Your Roof Affects Energy Use</h3>
          <p>In summer, a dark roof can reach 150°F or more. That heat transfers into your attic and then into your living space. Your air conditioner works overtime to keep up.</p>

          <h3>Ways to Make Your Roof More Efficient</h3>
          <ul>
            <li><strong>Light-colored shingles</strong> reflect more sunlight and absorb less heat</li>
            <li><strong>Cool roof coatings</strong> reflect UV rays and reduce surface temperature</li>
            <li><strong>Metal roofing</strong> reflects sunlight naturally — 10–25% cooling savings</li>
            <li><strong>Proper attic insulation</strong> keeps conditioned air inside your home</li>
            <li><strong>Ridge and soffit vents</strong> let hot air escape the attic</li>
            <li><strong>Radiant barriers</strong> reflect heat in the attic before it enters your home</li>
          </ul>

          <h3>Solar Panels</h3>
          <p>Charlotte gets about 213 sunny days per year, making it a good location for solar. If you are considering solar, make sure your roof is in good condition first. Most solar companies will not install on a roof that needs replacement within 5–10 years.</p>

          <ProTip>If you are replacing your roof anyway, that is the best time to add solar panels. You avoid paying to remove and reinstall them later.</ProTip>

          <h3>Duke Energy Rebates</h3>
          <p>Duke Energy (Charlotte&apos;s power company) sometimes offers rebates for energy-efficient home improvements. Check their website or call to ask about current programs for roofing and insulation.</p>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 14 — Commercial Roofing                                   */
/* ================================================================ */
function Chapter14() {
  return (
    <section id="commercial" data-chapter="14" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={14} title="Commercial Roofing for Business Owners" />

        <BookImage
          src={stockImages.guideCommercialFlat.src}
          alt={stockImages.guideCommercialFlat.alt}
          caption="Commercial flat roofs require specialized materials and expertise."
        />

        <div className="prose-simple">
          <p>If you own a commercial building in Charlotte, your roofing needs are different from a homeowner&apos;s. Commercial roofs are usually flat or low-slope, and they use different materials.</p>

          <h3>Common Commercial Roofing Materials</h3>
          <ComparisonGrid items={[
            { name: 'TPO', cost: '$4–$7/sq ft', lifespan: '20–30 yrs', wind: '60+ mph', best: 'Energy efficiency, cost' },
            { name: 'EPDM', cost: '$4–$8/sq ft', lifespan: '20–30 yrs', wind: '60+ mph', best: 'Simplicity, proven record' },
            { name: 'PVC', cost: '$6–$12/sq ft', lifespan: '20–30 yrs', wind: '80+ mph', best: 'Chemical resistance' },
            { name: 'Modified Bitumen', cost: '$4–$8/sq ft', lifespan: '15–20 yrs', wind: '70+ mph', best: 'Traditional flat roofs' },
            { name: 'Metal', cost: '$7–$15/sq ft', lifespan: '40–60 yrs', wind: '140+ mph', best: 'Longevity, low maintenance' },
          ]} />

          <ProTip>Commercial roof maintenance is even more important than residential. Schedule professional inspections at least twice a year. A small leak in a commercial building can damage inventory, equipment, and interrupt your business.</ProTip>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 15 — Scams                                                */
/* ================================================================ */
function Chapter15() {
  return (
    <section id="scams" data-chapter="15" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={15} title="Roofing Scams: How to Stay Safe" />
        <div className="prose-simple">
          <p>Unfortunately, roofing scams are common — especially in Charlotte after a big storm. Here are the most common scams and how to protect yourself.</p>

          {/* Scam cards */}
          <div className="my-8 space-y-4">
            <ScamCard title="The Storm Chaser" desc="Out-of-town crews go door-to-door after storms offering quick, cheap repairs. They do low-quality work and leave town. You have no one to call when problems appear." />
            <ScamCard title="The Deductible Waiver" desc="'We'll waive your insurance deductible!' This is illegal in North Carolina. If a roofer offers this, walk away." />
            <ScamCard title="The Upfront Cash Grab" desc="They demand full payment before starting work, then do a poor job or disappear entirely. Never pay more than 30–50% upfront." />
            <ScamCard title="The Scare Tactic" desc="'Your roof is about to collapse!' Dishonest roofers exaggerate damage to pressure you into immediate, overpriced work. Get a second opinion." />
            <ScamCard title="The Bait and Switch" desc="They quote one price with good materials, then install cheaper products and pocket the difference. Get everything in writing." />
          </div>

          <InfoBox title="How to Protect Yourself">
            <ul className="space-y-1 mt-2">
              <li>Always get at least 3 written estimates</li>
              <li>Check NC license, insurance, and references</li>
              <li>Never sign anything under pressure</li>
              <li>Never pay full price upfront</li>
              <li>Use local, established Charlotte companies</li>
              <li>Trust your gut — if it feels wrong, walk away</li>
            </ul>
          </InfoBox>
        </div>
      </div>
    </section>
  )
}

function ScamCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-3 bg-red-50 border border-red-200 rounded-xl p-4">
      <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
      <div>
        <div className="font-bold text-sm text-red-900">{title}</div>
        <p className="text-xs text-red-700 mt-1">{desc}</p>
      </div>
    </div>
  )
}

/* ================================================================ */
/* CHAPTER 16 — Permits, Codes, and HOA Rules                        */
/* ================================================================ */
function Chapter16() {
  return (
    <section id="permits" data-chapter="16" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={16} title="Permits, Codes, and HOA Rules" />
        <div className="prose-simple">
          <p>Before any roofing work begins, you need to know about permits, building codes, and HOA rules in the Charlotte area.</p>

          <h3>Do You Need a Permit?</h3>
          <p>In Mecklenburg County, you need a building permit for a full roof replacement. Most surrounding counties have the same requirement. Your roofing contractor should handle the permit for you — it is usually included in the estimate.</p>

          <h3>North Carolina Building Codes</h3>
          <InfoBox title="Key NC Roofing Code Requirements">
            <ul className="space-y-1 mt-2">
              <li>Drip edge is required on most roofs</li>
              <li>Maximum of 2 layers of shingles (we recommend only 1)</li>
              <li>Ice and water shield required in valleys</li>
              <li>Proper ventilation ratios must be maintained</li>
              <li>Wind uplift requirements for the Charlotte zone</li>
            </ul>
          </InfoBox>

          <h3>HOA Rules</h3>
          <p>If you live in a neighborhood with an HOA, check your rules before choosing materials or colors. Many Charlotte HOAs require:</p>
          <ul>
            <li>Approval before roofing work begins</li>
            <li>Specific shingle colors and styles</li>
            <li>Certain brands or material types</li>
            <li>No metal or cedar shake roofing</li>
          </ul>

          <ProTip>Get HOA approval in writing before ordering materials. If your roofer has to tear off and redo a roof because of an HOA violation, you will be paying twice.</ProTip>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 17 — FAQ                                                  */
/* ================================================================ */
function Chapter17() {
  return (
    <section id="faq" data-chapter="17" className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={17} title="Questions People Ask the Most" />
        <div className="prose-simple">
          <div className="space-y-6">
            <FAQItem q="How much does a new roof cost in Charlotte?" a="For architectural shingles on an average-sized home, expect $8,000 to $15,000. Larger homes or premium materials can cost $15,000 to $35,000+. Get a free estimate at CharlotteRoofingHub.com." />
            <FAQItem q="How long does a roof replacement take?" a="Most residential roofs in Charlotte are completed in 1 to 3 days. Larger homes or complex roofs may take up to a week. Weather delays are common during our storm season." />
            <FAQItem q="Will insurance pay for my new roof?" a="If the damage was caused by a storm (wind, hail, fallen tree), homeowner's insurance usually covers it minus your deductible. Normal wear and tear is not covered." />
            <FAQItem q="Should I be home during the roof replacement?" a="You do not need to be home the entire time, but you should be available by phone. It is good to be there at the start and end of the project." />
            <FAQItem q="How do I know if my roof has storm damage?" a="After a storm, look for missing or damaged shingles, dents in metal vents, and debris on the roof. Call a local roofer for a free inspection — they can spot damage you cannot see from the ground." />
            <FAQItem q="What is the best time of year to replace a roof in Charlotte?" a="Spring and fall are the busiest and most popular. Winter can offer better pricing since demand is lower. Avoid scheduling during the peak of hurricane season (August–October) if possible." />
            <FAQItem q="Do I need to replace my gutters when I replace my roof?" a="Not always, but it is a good time to inspect them. If your gutters are old, sagging, or leaking, replacing them at the same time saves money on labor." />
            <FAQItem q="What is the best roofing material for Charlotte?" a="Architectural shingles are the best value for most Charlotte homes. Metal roofing is excellent for long-term homeowners. The best choice depends on your budget, how long you plan to stay, and your home's style." />
          </div>
        </div>
      </div>
    </section>
  )
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <h3 className="font-bold text-gray-900 text-sm mb-2 flex items-start gap-2">
        <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        {q}
      </h3>
      <p className="text-sm text-gray-700 pl-7">{a}</p>
    </div>
  )
}

/* ================================================================ */
/* CHAPTER 18 — Glossary                                             */
/* ================================================================ */
function Chapter18() {
  const terms = [
    { term: 'Architectural Shingles', def: 'Thick, layered shingles with a textured look. The most popular type in Charlotte.' },
    { term: 'Decking', def: 'The flat wood base of your roof, usually plywood or OSB.' },
    { term: 'Drip Edge', def: 'Metal strip along the roof edge that guides water into gutters.' },
    { term: 'Eaves', def: 'The edges of the roof that overhang the walls.' },
    { term: 'EPDM', def: 'A rubber membrane used on flat commercial roofs.' },
    { term: 'Fascia', def: 'The vertical board along the roof edge where gutters attach.' },
    { term: 'Flashing', def: 'Metal strips that seal openings like chimneys and vents.' },
    { term: 'Gable', def: 'The triangular wall section formed by two roof slopes meeting.' },
    { term: 'Granules', def: 'Tiny gravel pieces on shingles that protect against UV rays.' },
    { term: 'Hip Roof', def: 'A roof with four sloping sides — very wind-resistant.' },
    { term: 'Ice Dam', def: 'Ice buildup at the roof edge that traps water under shingles.' },
    { term: 'Pitch', def: 'The steepness of a roof. Steeper pitch = higher labor cost.' },
    { term: 'Ridge', def: 'The highest point of the roof where two slopes meet.' },
    { term: 'Soffit', def: 'The flat panel under the roof overhang, often with ventilation holes.' },
    { term: 'Square', def: 'A roofing measurement equal to 100 square feet.' },
    { term: 'Storm Chaser', def: 'An out-of-town roofer who appears after storms to make quick money.' },
    { term: 'TPO', def: 'A white membrane used on flat commercial roofs. Energy-efficient.' },
    { term: 'Tear-off', def: 'Removing old roofing material before installing new.' },
    { term: 'Underlayment', def: 'Protective layer between the deck and shingles.' },
    { term: 'Valley', def: 'The V-shaped channel where two roof slopes meet.' },
  ]

  return (
    <section id="glossary" data-chapter="18" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={18} title="Roofing Words You Should Know" />
        <div className="prose-simple">
          <p>Here are the most important roofing terms explained in plain language.</p>

          <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {terms.map((item) => (
              <div key={item.term} className="bg-gray-50 border rounded-xl p-4">
                <div className="font-bold text-sm text-primary">{item.term}</div>
                <div className="text-xs text-gray-600 mt-1">{item.def}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 p-8 bg-gray-50 rounded-2xl border">
            <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">You Made It to the End!</h3>
            <p className="text-gray-600 text-sm mb-4">Congratulations — you now know more about roofing than most homeowners. Use this knowledge to protect your home and make smart decisions.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/estimate" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-red-600 transition">
                Get Your Free Estimate <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/companies" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-light transition">
                Find Verified Roofers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
