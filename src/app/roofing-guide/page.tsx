import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, Home, Layers, Cloud, AlertTriangle, Wrench, Search, DollarSign, Shield, Settings, Zap, Building2, ShieldAlert, FileText, HelpCircle, BookMarked, ArrowRight, CheckCircle, ChevronDown, Download, Gift } from 'lucide-react'
import { stockImages } from '@/data/stock-images'
import GuideDownloadModal, { GuideDownloadBanner } from '@/components/guide/GuideDownloadModal'
import GuideDownloadForm from '@/components/guide/GuideDownloadForm'

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

          <div className="prose-simple">
            <p>Welcome! This book was written just for you — the homeowner or property owner in Charlotte, North Carolina.</p>

            <p>Your roof is one of the most important parts of your home. It keeps your family dry. It keeps you cool in summer and warm in winter. It protects everything you own.</p>

            <p>But most people do not know much about their roof. That is okay! That is why we wrote this guide.</p>

            <h3>What You Will Learn</h3>
            <p>In this book, you will learn:</p>
            <ul>
              <li>What your roof is made of and how it works</li>
              <li>Which roofing materials are best for Charlotte weather</li>
              <li>How to tell if your roof needs fixing</li>
              <li>How to pick an honest, skilled roofing company</li>
              <li>What to do when a storm damages your roof</li>
              <li>How to save money on your roof</li>
              <li>How to avoid roofing scams</li>
            </ul>

            <h3>Why Charlotte?</h3>
            <p>Charlotte has its own special weather. We get hot, humid summers. We get heavy rain and thunderstorms. We sometimes get hail, high winds, and even the edges of hurricanes. All of this affects your roof in ways that are different from other places.</p>

            <p>The surrounding areas — like Huntersville, Matthews, Concord, Gastonia, Mooresville, and Indian Trail — deal with the same weather. So this guide is for you too!</p>

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

          <div className="prose-simple">
            <p>A roof is the top covering of your house. It sits on top of the walls and covers everything inside. Think of it like a big hat for your home.</p>

            <h3>What Your Roof Does</h3>
            <p>Your roof has several big jobs:</p>

            <ul>
              <li><strong>Keeps water out.</strong> Rain, snow, and ice all fall on your roof. Without a good roof, water would leak into your home. Water inside your home can cause mold, rot, and major damage.</li>
              <li><strong>Blocks the sun.</strong> Charlotte gets very hot in the summer. Your roof takes the heat from the sun so your home stays cooler inside.</li>
              <li><strong>Stops the wind.</strong> Strong storms and high winds hit Charlotte several times a year. Your roof is the first line of defense.</li>
              <li><strong>Keeps animals out.</strong> Squirrels, raccoons, birds, and insects all want to live in your attic. A solid roof keeps them outside where they belong.</li>
              <li><strong>Saves energy.</strong> A good roof with the right insulation helps your air conditioner and heater work less. That means lower power bills.</li>
              <li><strong>Protects your home value.</strong> When it is time to sell, a strong roof makes your home worth more. A bad roof can scare away buyers or lower your price by thousands of dollars.</li>
            </ul>

            <h3>How Long Does a Roof Last?</h3>
            <p>It depends on what your roof is made of. Here are some general numbers for Charlotte:</p>

            <div className="bg-gray-50 rounded-xl p-6 my-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Asphalt Shingles (3-tab)</span>
                  <span className="text-primary font-bold">15–20 years</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Architectural Shingles</span>
                  <span className="text-primary font-bold">25–35 years</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Metal Roofing</span>
                  <span className="text-primary font-bold">40–70 years</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <span className="font-medium">Slate</span>
                  <span className="text-primary font-bold">75–100+ years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Flat Roof (TPO/EPDM)</span>
                  <span className="text-primary font-bold">20–30 years</span>
                </div>
              </div>
            </div>

            <p>Keep in mind: Charlotte&apos;s heat, humidity, and storms can shorten these lifespans. Taking care of your roof helps it last longer. We will talk about roof care in Chapter 12.</p>

            <h3>Your Roof Is an Investment</h3>
            <p>A new roof in Charlotte can cost anywhere from $8,000 to $30,000 or more, depending on the size of your home and the materials you choose. That is a lot of money. But your roof protects everything inside your home — your furniture, your clothes, your electronics, your memories.</p>

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

          <div className="prose-simple">
            <p>Before we talk about materials and repairs, it helps to know the parts of a roof. When a roofer talks to you, you will understand what they mean.</p>

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

            <p>Common types of roof vents include:</p>
            <ul>
              <li><strong>Ridge vents</strong> — run along the top peak of the roof</li>
              <li><strong>Box vents</strong> — small square vents on the roof surface</li>
              <li><strong>Power vents</strong> — fans that actively push hot air out</li>
              <li><strong>Soffit vents</strong> — let cool air in from below</li>
            </ul>

            <p>Now that you know the parts, let us look at the different types of roofs you will see around Charlotte.</p>
          </div>
        </div>
      </section>

      {/* Chapter image — Roof types */}
      <ChapterImage
        src={stockImages.guideGableRoof.src}
        alt={stockImages.guideGableRoof.alt}
      />

      {/* Remaining chapters rendered below */}
      <Chapter4 />
      <Chapter5 />

      {/* Download CTA banner after materials chapter */}
      <GuideDownloadBanner />

      <Chapter6 />

      {/* Chapter image — Storm damage */}
      <ChapterImage
        src={stockImages.guideStormDamage.src}
        alt={stockImages.guideStormDamage.alt}
      />

      <Chapter7 />
      <Chapter8 />
      <Chapter9 />

      {/* Download CTA banner after contractor chapter */}
      <GuideDownloadBanner />

      <Chapter10 />
      <Chapter11 />

      {/* Chapter image — Maintenance */}
      <ChapterImage
        src={stockImages.guideMaintenance.src}
        alt={stockImages.guideMaintenance.alt}
      />

      <Chapter12 />
      <Chapter13 />
      <Chapter14 />

      {/* Download CTA banner after commercial chapter */}
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
/* Shared Components                                                 */
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

function ChapterImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-48 md:h-64 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
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

          <h3>Gable Roof</h3>
          <p>This is the most common roof in Charlotte. It looks like an upside-down letter V. It has two sides that slope down from a center ridge. Gable roofs are popular because they are simple to build, they shed rain well, and they give you attic space. Most homes in neighborhoods like Ballantyne, Huntersville, and Matthews have gable roofs.</p>
          <p><strong>Good for Charlotte?</strong> Yes! They shed rain fast. But in very strong winds, wide gable ends can catch wind like a sail. Make sure the gable end walls are braced properly.</p>

          <h3>Hip Roof</h3>
          <p>A hip roof has four sides that all slope downward from the ridge. There are no flat ends like a gable roof. This makes hip roofs very strong in high winds because wind flows over all sides evenly. You will see hip roofs on many newer homes in South Charlotte and Fort Mill.</p>
          <p><strong>Good for Charlotte?</strong> Very good! They handle wind and storms better than gable roofs. They cost a little more to build, but they are tougher.</p>

          <h3>Combination Roof</h3>
          <p>Many Charlotte homes have a mix of gable and hip sections. A home might have a hip roof on the main part and a gable over the garage. These are called combination roofs. They look nice and work well, but they have more valleys and angles where leaks can happen.</p>

          <h3>Flat Roof</h3>
          <p>Flat roofs are not truly flat — they have a very slight slope so water can drain. You mostly see flat roofs on commercial buildings in Charlotte — like the shops along South Boulevard or offices in Uptown. Some modern homes also use flat roof sections.</p>
          <p><strong>Good for Charlotte?</strong> They work well when installed right. But flat roofs need special materials (like TPO or EPDM) because water sits on them longer. They need regular checks to make sure drains are clear.</p>

          <h3>Mansard Roof</h3>
          <p>A mansard roof has four sides, and each side has two slopes. The lower slope is very steep, and the upper slope is almost flat. This gives you a lot of usable space in the attic. You might see mansard roofs on older buildings in areas like Dilworth or Plaza Midwood.</p>

          <h3>Gambrel Roof</h3>
          <p>This is the barn-style roof with two slopes on each side — a steep lower section and a gentler upper section. You will see these on some farmhouses and older properties in rural areas around Charlotte, like in Weddington and Waxhaw.</p>

          <h3>Shed Roof (Lean-To)</h3>
          <p>A shed roof has just one sloping surface. It is sometimes used on additions, porches, or modern-style homes. Some newer homes in NoDa and South End use shed roof designs for a modern look.</p>

          <h3>Which Type Is Best?</h3>
          <p>For most Charlotte homes, gable and hip roofs are the best choices. They handle our rain, heat, and occasional storms well. If you are building a new home, a hip roof gives you the best wind protection. If you already have a gable roof, it will serve you well as long as it is maintained.</p>
        </div>
      </div>
    </section>
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
        <div className="prose-simple">
          <p>The material on your roof is one of the biggest decisions you will make. Each material has its own price, lifespan, and look. Let us go through the most common ones used in the Charlotte area.</p>

          <h3>Asphalt Shingles (3-Tab)</h3>
          <p>These are the most basic and cheapest shingles. They are flat and thin with three tabs (sections) on each strip. They come in many colors.</p>
          <div className="bg-white rounded-xl p-5 my-4 border">
            <p><strong>Cost:</strong> $3.50–$5.50 per square foot (installed)</p>
            <p><strong>Lifespan:</strong> 15–20 years</p>
            <p><strong>Wind rating:</strong> Up to 60–70 mph</p>
            <p className="mb-0"><strong>Best for:</strong> Tight budgets, rental properties</p>
          </div>
          <p>In Charlotte, 3-tab shingles are losing popularity because they do not hold up as well in our storms. Most roofers now recommend architectural shingles instead.</p>

          <h3>Architectural Shingles (Dimensional)</h3>
          <p>These are thicker than 3-tab shingles and have a layered, textured look. They are the most popular choice in Charlotte right now. About 80% of new roofs in our area use architectural shingles.</p>
          <div className="bg-white rounded-xl p-5 my-4 border">
            <p><strong>Cost:</strong> $4.50–$7.00 per square foot (installed)</p>
            <p><strong>Lifespan:</strong> 25–35 years</p>
            <p><strong>Wind rating:</strong> Up to 130 mph</p>
            <p className="mb-0"><strong>Best for:</strong> Most Charlotte homes — great value</p>
          </div>
          <p>Brands like GAF Timberline, Owens Corning Duration, and CertainTeed Landmark are all popular in our area. They come with strong warranties and look great on all styles of homes.</p>

          <h3>Metal Roofing (Standing Seam)</h3>
          <p>Standing seam metal roofs have long vertical panels with raised seams. They are very tough and last a very long time. You are seeing more metal roofs in Charlotte neighborhoods like Myers Park and Lake Norman.</p>
          <div className="bg-white rounded-xl p-5 my-4 border">
            <p><strong>Cost:</strong> $9.00–$14.00 per square foot (installed)</p>
            <p><strong>Lifespan:</strong> 40–70 years</p>
            <p><strong>Wind rating:</strong> Up to 140+ mph</p>
            <p className="mb-0"><strong>Best for:</strong> Long-term homeowners, energy savings</p>
          </div>
          <p>Metal roofs reflect the sun, which can lower your cooling bill by 10–25% in Charlotte summers. They also handle hail much better than shingles.</p>

          <h3>Metal Shingles</h3>
          <p>These are metal pieces shaped to look like regular shingles, slate, or tile. You get the toughness of metal with a more traditional look.</p>
          <div className="bg-white rounded-xl p-5 my-4 border">
            <p><strong>Cost:</strong> $7.00–$12.00 per square foot</p>
            <p><strong>Lifespan:</strong> 40–60 years</p>
            <p className="mb-0"><strong>Best for:</strong> People who want metal durability but a shingle look</p>
          </div>

          <h3>Slate</h3>
          <p>Slate is natural stone cut into thin pieces. It is one of the most beautiful and longest-lasting roofing materials in the world. You will find slate roofs on some historic homes in Dilworth, Elizabeth, and Fourth Ward.</p>
          <div className="bg-white rounded-xl p-5 my-4 border">
            <p><strong>Cost:</strong> $15.00–$30.00 per square foot</p>
            <p><strong>Lifespan:</strong> 75–100+ years</p>
            <p className="mb-0"><strong>Best for:</strong> Luxury homes, historic homes</p>
          </div>
          <p>Slate is very heavy. Your house may need extra support. You also need a roofer who specializes in slate — not every roofer can install it properly.</p>

          <h3>Cedar Shake</h3>
          <p>Cedar shakes are made from natural cedar wood. They give a warm, rustic look. You might see them on homes in wooded areas around Lake Norman or in Weddington.</p>
          <div className="bg-white rounded-xl p-5 my-4 border">
            <p><strong>Cost:</strong> $8.00–$15.00 per square foot</p>
            <p><strong>Lifespan:</strong> 30–50 years</p>
            <p className="mb-0"><strong>Best for:</strong> Rustic or natural-looking homes</p>
          </div>
          <p>Cedar needs more maintenance than other materials. In Charlotte&apos;s humid climate, cedar can grow mold or moss if not treated regularly. Some HOAs do not allow cedar shake.</p>

          <h3>Synthetic (Composite) Shingles</h3>
          <p>These are made from a mix of materials like rubber, plastic, and polymers. They are designed to look like slate, wood, or tile but weigh much less and cost less.</p>
          <div className="bg-white rounded-xl p-5 my-4 border">
            <p><strong>Cost:</strong> $6.00–$12.00 per square foot</p>
            <p><strong>Lifespan:</strong> 30–50 years</p>
            <p className="mb-0"><strong>Best for:</strong> People who want the look of slate or wood at a lower price</p>
          </div>

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

          <h3>Heat and Sun</h3>
          <p>Charlotte summers are hot. Temperatures regularly hit 90°F to 100°F from June through September. Your roof surface can reach 150°F or more on a sunny day.</p>
          <p>This extreme heat causes shingles to expand and then shrink when it cools at night. Over years, this constant expanding and shrinking makes shingles crack and curl. Dark-colored roofs absorb even more heat, which makes the problem worse.</p>
          <p><strong>What you can do:</strong> Choose lighter-colored shingles or reflective materials. Make sure your attic has good ventilation so heat does not get trapped.</p>

          <h3>Rain</h3>
          <p>Charlotte gets about 43 inches of rain each year. That is more than the national average. Some of that rain comes in heavy downpours during summer thunderstorms.</p>
          <p>All that water needs to flow off your roof quickly and cleanly. If your gutters are clogged, water backs up under your shingles. If your flashing is worn, water sneaks in around chimneys and vents.</p>
          <p><strong>What you can do:</strong> Keep gutters clean. Check flashing twice a year. Make sure your roof has no low spots where water can pool.</p>

          <h3>Thunderstorms and Wind</h3>
          <p>Charlotte gets about 40–50 thunderstorms per year. These storms can bring wind gusts of 60 mph or more. Strong wind can lift shingles, tear off flashing, and blow debris onto your roof.</p>
          <p>After every big storm, it is smart to look at your roof from the ground for missing or damaged shingles. Do not climb on the roof yourself — let a professional do that.</p>
          <p><strong>What you can do:</strong> Use shingles rated for high winds (130 mph+). Trim tree branches that hang over your roof.</p>

          <h3>Hail</h3>
          <p>Charlotte does get hail, though usually small. However, even small hail can dent shingles and weaken their protective coating. Large hail events, like the ones that have hit areas around Rock Hill and Gastonia, can destroy a roof in minutes.</p>
          <p>Hail damage is not always easy to see from the ground. It can look like small dents or bruises on your shingles. A roofer can inspect for hail damage after a storm.</p>
          <p><strong>What you can do:</strong> After a hailstorm, get a free roof inspection. File an insurance claim if damage is found. We cover insurance claims in Chapter 11.</p>

          <h3>Humidity and Moisture</h3>
          <p>Charlotte&apos;s humidity is one of the biggest threats to your roof. High moisture can cause:</p>
          <ul>
            <li>Mold and algae growth on shingles (those dark streaks you see on some roofs)</li>
            <li>Wood rot in the deck, fascia, and soffit</li>
            <li>Moisture buildup in the attic, which damages insulation</li>
          </ul>
          <p><strong>What you can do:</strong> Choose algae-resistant shingles. Make sure your attic has proper ventilation. Keep trees trimmed so sunlight reaches your roof.</p>

          <h3>Winter Weather</h3>
          <p>Charlotte winters are mild compared to the north. We rarely get heavy snow. But we do get ice storms. Ice can form under shingles, push them up, and create gaps where water gets in. This is called an ice dam.</p>
          <p>Freezing and thawing cycles can also crack flashing and caulk around vents and pipes.</p>
          <p><strong>What you can do:</strong> Make sure your attic is well insulated so warm air does not melt snow on the roof (which refreezes at the edges). Check your flashing before winter.</p>

          <h3>Hurricanes and Tropical Storms</h3>
          <p>Charlotte is about 200 miles from the coast, but we still feel the effects of hurricanes. Hurricane Hugo in 1989 caused major damage across the Charlotte area. More recently, tropical storms have brought heavy rain and high winds to our region.</p>
          <p>During these events, roofs can lose shingles, flashing, and even sections of decking.</p>
          <p><strong>What you can do:</strong> Make sure your roof is in good shape before hurricane season (June–November). Have your insurance policy reviewed so you know what is covered.</p>

          <h3>Charlotte Weather by the Numbers</h3>
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Average yearly rainfall</span>
                <span className="font-bold text-primary">43 inches</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Average summer high temperature</span>
                <span className="font-bold text-primary">90°F+</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Thunderstorms per year</span>
                <span className="font-bold text-primary">40–50</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Average humidity (summer)</span>
                <span className="font-bold text-primary">70–80%</span>
              </div>
              <div className="flex justify-between">
                <span>Hurricane season</span>
                <span className="font-bold text-primary">June–November</span>
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

          <p><strong>Missing shingles.</strong> If you see bare spots on your roof where shingles used to be, that is a clear sign of trouble. Missing shingles let water into your home.</p>

          <p><strong>Curling or buckling shingles.</strong> Shingles should lie flat. If they curl up at the edges or buckle in the middle, they are wearing out. Charlotte&apos;s heat is a big reason shingles curl.</p>

          <p><strong>Dark streaks.</strong> Black or dark green streaks on your roof are usually algae. Algae loves Charlotte&apos;s humidity. While algae does not always damage your roof right away, it can eat away at shingles over time.</p>

          <p><strong>Moss growth.</strong> Moss is thicker than algae and holds moisture against your shingles. This can cause rot. Shady areas of your roof are most likely to grow moss.</p>

          <p><strong>Sagging areas.</strong> If your roof looks like it is sagging or dipping in any spot, that is serious. It could mean the wood underneath is rotting or that the structure is weakening. Call a roofer right away.</p>

          <p><strong>Damaged flashing.</strong> Look at the metal around your chimney, vents, and where roof sections meet. If the flashing is bent, rusty, or missing, water can get in.</p>

          <p><strong>Granules in the gutters.</strong> Shingles have tiny gravel-like pieces on them called granules. These protect the shingle from the sun. When you find lots of granules in your gutters, it means your shingles are wearing out. A few granules are normal on a new roof, but heavy amounts on an older roof are a bad sign.</p>

          <h3>Signs You See from Inside</h3>

          <p><strong>Water stains on your ceiling.</strong> Brown or yellow spots on your ceiling or walls usually mean water is getting through your roof. The leak might not be directly above the stain — water can travel along beams before dripping down.</p>

          <p><strong>Light coming through the attic.</strong> Go into your attic during the day and turn off the lights. If you can see sunlight coming through small holes, water can get through those same holes.</p>

          <p><strong>Mold or musty smells.</strong> If your attic smells musty or you see mold on the rafters or insulation, moisture is getting in. In Charlotte&apos;s humidity, mold can grow quickly once moisture finds its way in.</p>

          <p><strong>Higher energy bills.</strong> If your heating or cooling bills suddenly go up for no clear reason, your roof might have poor insulation or ventilation problems.</p>

          <p><strong>Peeling paint near the roofline.</strong> If paint is peeling or bubbling on walls near the top of your house, moisture from the roof might be the cause.</p>

          <h3>How Old Is Your Roof?</h3>
          <p>If you know when your roof was last replaced, that helps you know how much life it has left. Here is a quick guide:</p>
          <ul>
            <li><strong>Under 10 years old:</strong> Probably in good shape. Just do regular checks.</li>
            <li><strong>10–20 years old:</strong> Start watching for warning signs. Get it inspected every year or two.</li>
            <li><strong>20–30 years old:</strong> If it is asphalt shingles, it may be nearing the end of its life. Get a professional inspection.</li>
            <li><strong>Over 30 years old:</strong> If it has not been replaced, it likely needs to be soon.</li>
          </ul>

          <p>Do not know how old your roof is? A roofing professional can often tell by looking at it. You can also check your home&apos;s records or ask your real estate agent.</p>

          <h3>When to Act</h3>
          <p>If you notice any of these signs, do not wait. Small problems become big (and expensive) problems fast, especially in Charlotte where storms can make things worse overnight. A roof inspection from a trusted company is usually free and takes less than an hour.</p>
        </div>
      </div>
    </section>
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

          <h3>When a Repair Makes Sense</h3>
          <ul>
            <li><strong>Your roof is under 15 years old.</strong> If your roof is fairly new, a repair is usually the smart move.</li>
            <li><strong>The damage is in one small area.</strong> A few missing shingles or a small leak around a vent can be fixed without replacing the whole roof.</li>
            <li><strong>The cost is under 30% of a full replacement.</strong> If the repair costs less than one-third of what a new roof would cost, repairing is usually worth it.</li>
            <li><strong>You plan to sell soon.</strong> If you are selling your home in the next year or two, a repair might be all you need. But buyers may ask for a new roof anyway — talk to your real estate agent.</li>
          </ul>

          <h3>When a Replacement Makes Sense</h3>
          <ul>
            <li><strong>Your roof is over 20 years old (asphalt shingles).</strong> Even if it looks okay, an old roof may not survive the next big storm.</li>
            <li><strong>You keep making repairs.</strong> If you are calling a roofer every year or two, the costs add up. At some point, a new roof is cheaper.</li>
            <li><strong>The damage is widespread.</strong> If many areas of your roof have problems, patching one spot will not help for long.</li>
            <li><strong>The deck (wood underneath) is damaged.</strong> If water has rotted the wood under your shingles, you need more than just new shingles — you need new decking too.</li>
            <li><strong>You are getting a lot of leaks.</strong> Multiple leaks in different spots mean the roof system is failing.</li>
            <li><strong>You want to increase your home&apos;s value.</strong> A new roof can add $10,000 to $15,000 or more to your home&apos;s value in the Charlotte market.</li>
          </ul>

          <h3>The Cost Comparison</h3>
          <p>Here are typical costs in the Charlotte area:</p>
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Small repair (a few shingles)</span>
                <span className="font-bold text-primary">$200–$500</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Medium repair (flashing, small section)</span>
                <span className="font-bold text-primary">$500–$1,500</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Large repair (major leak, big section)</span>
                <span className="font-bold text-primary">$1,500–$4,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>Full replacement (average home)</span>
                <span className="font-bold text-primary">$8,000–$15,000</span>
              </div>
              <div className="flex justify-between">
                <span>Full replacement (large home, premium materials)</span>
                <span className="font-bold text-primary">$15,000–$35,000+</span>
              </div>
            </div>
          </div>

          <h3>Can You Put New Shingles Over Old Ones?</h3>
          <p>Some people ask about putting new shingles on top of old ones instead of tearing everything off. This is called a layover or re-roof.</p>
          <p>North Carolina code allows up to two layers of shingles on a roof. However, most roofing professionals in Charlotte do not recommend it. Here is why:</p>
          <ul>
            <li>You cannot see the wood deck underneath to check for rot</li>
            <li>The extra weight puts stress on your roof structure</li>
            <li>Shingles do not lie as flat, which can cause problems</li>
            <li>It can void the warranty on the new shingles</li>
            <li>Future replacement will cost more because both layers need to come off</li>
          </ul>
          <p>Our advice: If you are getting a new roof, tear off the old one first. It costs a little more now but saves headaches later.</p>

          <h3>The Bottom Line</h3>
          <p>If you are not sure, get two or three opinions from local roofing companies. Honest roofers will tell you whether a repair or replacement is the better option. Be cautious of any roofer who pushes a full replacement on a roof that is less than 15 years old with minor issues.</p>
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
        <div className="prose-simple">
          <p>Picking the right roofer is just as important as picking the right material. A great material installed badly will fail. A good roofer will do the job right and stand behind their work. Here is how to find one in Charlotte.</p>

          <h3>What to Look For</h3>

          <p><strong>1. Local to Charlotte.</strong> Choose a company based in the Charlotte area. Local roofers know our weather, our building codes, and our neighborhoods. They will be here next year if you need warranty work. Out-of-town storm chasers may disappear after the job.</p>

          <p><strong>2. Licensed and insured.</strong> North Carolina requires roofing contractors to be licensed for jobs over $30,000. All roofers should carry liability insurance and workers&apos; compensation insurance. Ask to see proof. If a worker gets hurt on your property and the company is not insured, you could be responsible.</p>

          <p><strong>3. Good reviews.</strong> Check Google, Yelp, and the Better Business Bureau. Look for companies with lots of reviews (not just a few perfect ones). Read what people say about the work quality, cleanup, and communication.</p>

          <p><strong>4. Experience.</strong> How long has the company been in business? Companies that have been roofing in Charlotte for 5, 10, or 20+ years have a track record you can check.</p>

          <p><strong>5. Written estimates.</strong> A good roofer will give you a detailed written estimate. It should list the materials, the scope of work, the timeline, and the total cost. Be wary of estimates written on the back of a napkin or given only by phone.</p>

          <p><strong>6. Manufacturer certifications.</strong> Some roofing companies are certified by shingle manufacturers like GAF, Owens Corning, or CertainTeed. This means the manufacturer has vetted the company and will honor extended warranties on their installs.</p>

          <p><strong>7. Warranty.</strong> Ask about the warranty. A good roofing company will offer both a manufacturer&apos;s material warranty and a workmanship warranty on their labor. The workmanship warranty should be at least 5 years, and many good companies offer 10 years or more.</p>

          <h3>Red Flags — Warning Signs of a Bad Roofer</h3>
          <ul>
            <li><strong>Door knockers after a storm.</strong> Roofers who go door-to-door after a storm are often storm chasers. They may do quick, low-quality work and leave town.</li>
            <li><strong>Demanding full payment upfront.</strong> A reputable roofer should never ask for more than 30–50% upfront. The rest should be due when the work is done.</li>
            <li><strong>No written contract.</strong> Always get everything in writing. Verbal promises mean nothing if there is a problem later.</li>
            <li><strong>Pressure to decide today.</strong> Good roofers let you take your time. High-pressure sales tactics are a red flag.</li>
            <li><strong>Way-too-low bids.</strong> If one bid is much lower than the others, ask why. They might be using cheap materials, cutting corners, or not carrying insurance.</li>
            <li><strong>No physical address.</strong> Can you find their office? A company with a real office and yard in Charlotte is more trustworthy than one with only a cell phone number.</li>
          </ul>

          <h3>How to Get Good Estimates</h3>
          <p>We recommend getting at least three estimates from different local companies. When comparing estimates, make sure they are for the same scope of work:</p>
          <ul>
            <li>Same type and brand of shingles</li>
            <li>Same underlayment</li>
            <li>Whether they include drip edge, flashing, and ventilation upgrades</li>
            <li>Whether old shingles will be removed (tear-off) or covered over</li>
            <li>Cleanup and disposal included</li>
          </ul>

          <h3>Questions to Ask Every Roofer</h3>
          <ol>
            <li>How long have you been in business in Charlotte?</li>
            <li>Are you licensed and insured? Can I see proof?</li>
            <li>Do you use subcontractors or your own crew?</li>
            <li>What brands of shingles do you recommend and why?</li>
            <li>What is your workmanship warranty?</li>
            <li>Can I see photos or visit a recent job you completed?</li>
            <li>How long will the project take?</li>
            <li>What happens if it rains during the job?</li>
            <li>Who do I call if there is a problem after the job?</li>
            <li>Will you put everything in a written contract?</li>
          </ol>

          <p>Taking the time to choose the right roofer protects your home and your wallet. You can browse verified local roofing companies right here on <Link href="/companies" className="text-primary font-medium hover:underline">Charlotte Roofing Hub</Link>.</p>
        </div>
      </div>
    </section>
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
          <p>Getting a roofing estimate can feel confusing. There are lots of numbers, terms, and line items. Let us break it down so you know exactly what you are looking at.</p>

          <h3>How Roofing Is Measured</h3>
          <p>Roofers measure roofs in &quot;squares.&quot; One roofing square equals 100 square feet. So if your roof is 2,000 square feet, it is 20 squares.</p>
          <p>Your roof area is usually bigger than your home&apos;s floor area. A 1,500 square foot home might have a 1,800 to 2,200 square foot roof because of the slope, overhangs, and extra angles.</p>

          <h3>What Should Be in an Estimate</h3>
          <p>A good estimate should include all of these items:</p>

          <p><strong>Materials.</strong> The type and brand of shingles, underlayment, flashing, drip edge, ridge caps, and ventilation. The estimate should name the specific products.</p>

          <p><strong>Tear-off.</strong> Removing the old roofing material. This is hard work and creates a lot of waste that needs to be hauled away in a dumpster.</p>

          <p><strong>Labor.</strong> The cost of the roofing crew to install everything. In Charlotte, labor is a big part of the cost because of demand.</p>

          <p><strong>Decking repair.</strong> If the wood under your shingles is rotten, it needs to be replaced. Some estimates include a price per sheet of plywood for any rotten wood found during the job.</p>

          <p><strong>Flashing.</strong> New flashing around chimneys, pipes, vents, and walls.</p>

          <p><strong>Cleanup and disposal.</strong> Removing all old materials, nails, and debris. A good roofer will run a magnetic nail roller across your yard to pick up stray nails.</p>

          <p><strong>Permits.</strong> Mecklenburg County and surrounding counties require permits for roof replacements. Some companies include the permit fee in the estimate; others list it separately.</p>

          <h3>What Affects the Price</h3>
          <p>Several things can make your roof cost more or less:</p>
          <ul>
            <li><strong>Size of your roof.</strong> Bigger roof = higher cost. Pretty simple.</li>
            <li><strong>Roof steepness (pitch).</strong> Steeper roofs are harder and more dangerous to work on. They require more safety equipment and take longer.</li>
            <li><strong>Number of layers to remove.</strong> If your roof has two layers of old shingles, tearing them off costs more than one layer.</li>
            <li><strong>Roof complexity.</strong> Lots of valleys, dormers, skylights, and angles mean more flashing and more labor.</li>
            <li><strong>Material choice.</strong> As we covered in Chapter 5, materials range from $3.50 to $30+ per square foot.</li>
            <li><strong>Access.</strong> If your home is hard to reach or has landscaping close to the house, it can add to the cost.</li>
            <li><strong>Time of year.</strong> Fall and spring are the busiest times for roofers in Charlotte. You might get a better price in winter or early summer.</li>
            <li><strong>Wood damage.</strong> Rotten decking found during the job can add $50–$100 per sheet of plywood.</li>
          </ul>

          <h3>Average Costs in Charlotte (2025–2026)</h3>
          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <h4 className="font-bold text-lg mb-4">Architectural Shingles (most common)</h4>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>1,200 sq ft home</span>
                <span className="font-bold text-primary">$7,000–$11,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>1,800 sq ft home</span>
                <span className="font-bold text-primary">$9,000–$14,000</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span>2,500 sq ft home</span>
                <span className="font-bold text-primary">$12,000–$18,000</span>
              </div>
              <div className="flex justify-between">
                <span>3,500+ sq ft home</span>
                <span className="font-bold text-primary">$16,000–$25,000+</span>
              </div>
            </div>
          </div>

          <p>These are estimates. Your actual price depends on all the factors listed above. The best way to get an accurate number is to <Link href="/estimate" className="text-primary font-medium hover:underline">get a free instant estimate</Link> or request quotes from local companies.</p>

          <h3>Do Not Just Pick the Cheapest</h3>
          <p>We know it is tempting. But the cheapest bid is often cheap for a reason. They might use lower-quality materials, skip steps, or not carry proper insurance. In the long run, a slightly higher price for quality work saves you money.</p>

          <p>Look at the overall value: good materials + skilled installation + strong warranty = the best deal.</p>
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
        <div className="prose-simple">
          <p>Storms are a fact of life in Charlotte. When a storm damages your roof, your homeowner&apos;s insurance can help pay for repairs or a replacement. But the process can be confusing. This chapter walks you through it step by step.</p>

          <h3>What Does Insurance Cover?</h3>
          <p>Most homeowner&apos;s insurance policies cover roof damage caused by:</p>
          <ul>
            <li>Wind (thunderstorms, tornadoes, hurricanes)</li>
            <li>Hail</li>
            <li>Falling trees or branches</li>
            <li>Fire</li>
          </ul>
          <p>Insurance usually does <strong>not</strong> cover:</p>
          <ul>
            <li>Normal wear and tear (your roof just getting old)</li>
            <li>Damage caused by lack of maintenance</li>
            <li>Cosmetic damage (dents that do not affect performance)</li>
          </ul>

          <h3>Step-by-Step: Filing a Claim</h3>

          <p><strong>Step 1: Document the damage.</strong> After a storm, take photos and videos from the ground. Do not climb on your roof. Take pictures of your whole house, any visible damage, and debris in your yard.</p>

          <p><strong>Step 2: Call a local roofer for a free inspection.</strong> A reputable roofing company will come out, inspect your roof, and give you a report of what they find. This inspection is usually free. The roofer can tell you if the damage is worth filing a claim for.</p>

          <p><strong>Step 3: Call your insurance company.</strong> Report the damage and start a claim. They will assign an adjuster to your case.</p>

          <p><strong>Step 4: The adjuster visits.</strong> Your insurance company will send an adjuster to inspect the damage. It is a good idea to have your roofer present during this visit. Your roofer can point out damage the adjuster might miss.</p>

          <p><strong>Step 5: Review the estimate.</strong> The adjuster will write up an estimate for the repair or replacement. Compare it to your roofer&apos;s estimate. If the numbers are very different, your roofer can help you negotiate.</p>

          <p><strong>Step 6: Get the work done.</strong> Once the claim is approved, choose your roofer and schedule the work. Your insurance company will pay the claim (minus your deductible).</p>

          <h3>Understanding Your Deductible</h3>
          <p>Your deductible is the amount you pay out of your own pocket before insurance covers the rest. In Charlotte, most homeowner&apos;s policies have one of these:</p>
          <ul>
            <li><strong>Flat deductible:</strong> A set dollar amount, like $1,000 or $2,500</li>
            <li><strong>Percentage deductible:</strong> A percentage of your home&apos;s insured value. For example, a 2% deductible on a $300,000 home means you pay $6,000</li>
          </ul>
          <p>Some policies in North Carolina have a separate wind/hail deductible that is higher than the standard deductible. Check your policy so you are not surprised.</p>

          <h3>Tips for a Smooth Claim</h3>
          <ul>
            <li>File your claim as soon as possible. Most policies have a time limit.</li>
            <li>Do not make permanent repairs before the adjuster visits. Temporary fixes (like tarping a leak) are fine and should be done right away.</li>
            <li>Keep all receipts for temporary repairs.</li>
            <li>Take before and after photos.</li>
            <li>Get your roofer&apos;s written report before the adjuster visits.</li>
          </ul>

          <h3>Warning: Insurance Scams</h3>
          <p>After every big storm in Charlotte, scammers appear. Watch out for anyone who:</p>
          <ul>
            <li>Offers to &quot;waive your deductible&quot; — this is illegal in North Carolina</li>
            <li>Asks you to sign over your insurance claim to them</li>
            <li>Pressures you to sign a contract right now</li>
            <li>Says they will handle everything with your insurance and you do not need to be involved</li>
          </ul>
          <p>You should always be in control of your own insurance claim. A good roofer will help you with the process, but they should never take it over.</p>
        </div>
      </div>
    </section>
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
          <p>Your roof works hard every day. A little maintenance goes a long way in making it last longer and avoiding costly repairs. Here is a simple maintenance plan for Charlotte homeowners.</p>

          <h3>Twice-a-Year Checklist</h3>
          <p>Do these checks in spring (after winter) and fall (before winter). You can do most of this from the ground with binoculars.</p>

          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <h4 className="font-bold mb-4">Spring Check (March–April)</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Look for missing or damaged shingles</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Check flashing around chimney and vents</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Clean out gutters (pollen is heavy in Charlotte!)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Check downspouts for clogs</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Look for moss or algae growth</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Trim branches within 6 feet of the roof</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Check attic for signs of leaks or moisture</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 my-6">
            <h4 className="font-bold mb-4">Fall Check (September–October)</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Clean gutters (falling leaves clog them fast)</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Look for storm damage from summer</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Check caulk around pipes and vents</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Make sure attic insulation is in good shape</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Check that all vents are clear and working</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" /> Fix any small issues before winter arrives</li>
            </ul>
          </div>

          <h3>After Every Big Storm</h3>
          <p>After any major thunderstorm, hailstorm, or high-wind event:</p>
          <ul>
            <li>Walk around your house and look up at the roof from the ground</li>
            <li>Check for missing shingles, dents, or debris on the roof</li>
            <li>Look for shingle pieces or granules in the yard or gutters</li>
            <li>Check inside for new water spots on ceilings or walls</li>
            <li>If you see damage, call a local roofer for a free inspection</li>
          </ul>

          <h3>Gutter Maintenance</h3>
          <p>Gutters are part of your roof system. In Charlotte, with our heavy rains, clogged gutters are one of the top causes of roof damage. When gutters overflow, water backs up under your shingles and damages the wood.</p>
          <p>Clean your gutters at least twice a year. If you have a lot of trees near your home, you may need to clean them more often. Gutter guards can help reduce how often you need to clean them.</p>

          <h3>Tree Management</h3>
          <p>Charlotte is a city of trees. We love our big oaks and pines. But trees too close to your roof can cause problems:</p>
          <ul>
            <li>Branches scrape against shingles and wear them down</li>
            <li>Falling limbs can punch holes in your roof</li>
            <li>Leaves pile up and hold moisture against the roof</li>
            <li>Shade keeps the roof damp, which encourages moss and algae</li>
          </ul>
          <p>Trim any branches that are within 6 to 10 feet of your roof. If a large tree looks dead or unhealthy, have an arborist evaluate it before it falls on your house.</p>

          <h3>When to Call a Professional</h3>
          <p>You should never walk on your roof unless you are trained and have proper safety equipment. Falls from roofs are one of the leading causes of home injury. A professional roofer can inspect your roof safely and spot problems you might miss.</p>
          <p>We recommend a professional inspection every 3–5 years for roofs under 15 years old, and every 1–2 years for older roofs.</p>
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
        <div className="prose-simple">
          <p>In Charlotte, your air conditioner works hard from May through September. Your roof plays a big part in how much energy your home uses. A smart roof choice can lower your power bills every month.</p>

          <h3>How Your Roof Affects Energy Use</h3>
          <p>A dark roof absorbs heat from the sun. That heat moves through the roof into your attic. From there, it radiates down into your living space. Your air conditioner has to work harder to keep up.</p>
          <p>A lighter or more reflective roof bounces more of the sun&apos;s heat away. Less heat gets into your attic. Your home stays cooler. Your AC works less.</p>

          <h3>Cool Roof Options</h3>

          <p><strong>Light-colored shingles.</strong> Choosing a lighter shade of shingle (light gray, tan, or white) instead of black or dark brown can make a real difference. Some shingles are specially designed to reflect more sunlight even in darker colors.</p>

          <p><strong>Metal roofing.</strong> Metal roofs naturally reflect more heat than asphalt. A light-colored metal roof can reduce cooling costs by 10–25%. This is a big deal when your summer electric bills are $200–$400 a month.</p>

          <p><strong>Energy Star rated shingles.</strong> Some asphalt shingles have a special coating that reflects more of the sun&apos;s infrared rays. Look for the Energy Star label when choosing shingles.</p>

          <p><strong>Radiant barriers.</strong> This is a reflective material installed in your attic, either on the underside of the roof or over the insulation. It reflects heat back up toward the roof instead of letting it pass into your home.</p>

          <h3>Ventilation Matters</h3>
          <p>Even the best roofing material will not help much if your attic is not properly ventilated. Hot air needs a way out. Cool air needs a way in. A balanced ventilation system keeps your attic temperature closer to the outside temperature.</p>
          <p>In Charlotte&apos;s summers, an unventilated attic can reach 150°F or more. A well-ventilated attic stays closer to 100–110°F. That difference makes your air conditioner&apos;s job much easier.</p>

          <h3>Insulation</h3>
          <p>Insulation in your attic keeps conditioned air inside your home. It works with your roof and ventilation to create a comfortable, efficient home.</p>
          <p>For Charlotte, the recommended insulation level is R-38 to R-60 in the attic (about 10–16 inches of fiberglass batts or equivalent). Many older Charlotte homes have less than this. Adding insulation is one of the most cost-effective home improvements you can make.</p>

          <h3>Solar Panels</h3>
          <p>Charlotte gets about 213 sunny days per year — more than the national average. That makes our area a good candidate for rooftop solar panels.</p>
          <p>If you are thinking about solar panels, keep these things in mind:</p>
          <ul>
            <li>Install solar on a roof that is in good shape. If your roof needs replacing in the next 5–10 years, replace it first.</li>
            <li>South-facing roofs get the most sun in Charlotte</li>
            <li>Make sure your roof can support the extra weight</li>
            <li>Check with your HOA — some have rules about solar panels</li>
            <li>North Carolina offers tax credits for solar installations</li>
            <li>Duke Energy has net metering, which means you can sell extra power back to the grid</li>
          </ul>

          <h3>The Payback</h3>
          <p>Energy-efficient roofing costs a little more upfront, but it pays for itself over time through lower energy bills. In Charlotte&apos;s hot climate, the payback is faster than in cooler areas of the country.</p>
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
        <div className="prose-simple">
          <p>If you own a business or commercial property in Charlotte, this chapter is for you. Commercial roofs are different from residential roofs in important ways.</p>

          <h3>How Commercial Roofs Are Different</h3>
          <ul>
            <li><strong>Flat or low-slope.</strong> Most commercial buildings have flat or nearly flat roofs. This requires different materials and installation methods.</li>
            <li><strong>Larger area.</strong> Commercial roofs cover more square footage, which means more material and labor.</li>
            <li><strong>HVAC equipment.</strong> Commercial roofs often have air conditioning units, vents, and other equipment sitting on top. These create potential leak points.</li>
            <li><strong>Drainage.</strong> Without a steep slope, commercial roofs need built-in drainage systems — either interior drains, scuppers, or gutters.</li>
          </ul>

          <h3>Common Commercial Roofing Materials</h3>

          <p><strong>TPO (Thermoplastic Polyolefin).</strong> The most popular choice for commercial roofs in Charlotte right now. TPO is a white membrane that reflects heat, which lowers cooling costs. Seams are heat-welded, making them very strong.</p>
          <div className="bg-gray-50 rounded-xl p-5 my-4">
            <p><strong>Cost:</strong> $5.00–$8.00 per square foot</p>
            <p><strong>Lifespan:</strong> 20–30 years</p>
            <p className="mb-0"><strong>Best for:</strong> Most commercial buildings in Charlotte</p>
          </div>

          <p><strong>EPDM (Rubber Roofing).</strong> A synthetic rubber membrane that has been used for decades. It is very durable and handles temperature changes well. EPDM comes in black or white.</p>
          <div className="bg-gray-50 rounded-xl p-5 my-4">
            <p><strong>Cost:</strong> $4.00–$7.00 per square foot</p>
            <p><strong>Lifespan:</strong> 20–30 years</p>
            <p className="mb-0"><strong>Best for:</strong> Budget-friendly commercial applications</p>
          </div>

          <p><strong>PVC (Polyvinyl Chloride).</strong> Similar to TPO but more resistant to chemicals and grease. PVC is the go-to choice for restaurants and buildings that vent grease or chemicals.</p>
          <div className="bg-gray-50 rounded-xl p-5 my-4">
            <p><strong>Cost:</strong> $6.00–$10.00 per square foot</p>
            <p><strong>Lifespan:</strong> 20–30 years</p>
            <p className="mb-0"><strong>Best for:</strong> Restaurants, kitchens, chemical plants</p>
          </div>

          <p><strong>Modified Bitumen.</strong> A layered asphalt-based system that is tough and waterproof. It is often used on low-slope commercial roofs and has been trusted for many years.</p>
          <div className="bg-gray-50 rounded-xl p-5 my-4">
            <p><strong>Cost:</strong> $4.50–$8.00 per square foot</p>
            <p><strong>Lifespan:</strong> 15–25 years</p>
            <p className="mb-0"><strong>Best for:</strong> Older buildings, multi-layer systems</p>
          </div>

          <p><strong>Metal (Standing Seam or Corrugated).</strong> Metal works on commercial buildings too. It is especially popular for warehouses, churches, and industrial buildings around Charlotte.</p>
          <div className="bg-gray-50 rounded-xl p-5 my-4">
            <p><strong>Cost:</strong> $7.00–$15.00 per square foot</p>
            <p><strong>Lifespan:</strong> 40–60 years</p>
            <p className="mb-0"><strong>Best for:</strong> Warehouses, churches, long-term value</p>
          </div>

          <h3>Maintenance for Commercial Roofs</h3>
          <p>Commercial roofs need regular inspections — at least twice a year, plus after major storms. Key maintenance items include:</p>
          <ul>
            <li>Clearing drains and scuppers to prevent ponding water</li>
            <li>Inspecting membrane seams for separations</li>
            <li>Checking flashing around all roof penetrations (HVAC, pipes, vents)</li>
            <li>Looking for blistering, cracking, or punctures in the membrane</li>
            <li>Making sure HVAC technicians are not damaging the roof during service calls</li>
          </ul>

          <p>Many commercial roofers in Charlotte offer maintenance contracts. These are a smart investment because they catch small problems before they become expensive emergencies.</p>

          <p>For more details on commercial roofing services in the Charlotte area, visit our <Link href="/commercial" className="text-primary font-medium hover:underline">commercial roofing page</Link>.</p>
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
          <p>Unfortunately, the roofing industry attracts some dishonest people. Charlotte is a big city, and after every storm season, scammers try to take advantage of homeowners. Here are the most common scams and how to protect yourself.</p>

          <h3>Storm Chasers</h3>
          <p>These are roofing crews that travel from city to city following storms. They show up at your door, point out damage on your roof (sometimes damage they caused), and offer to fix it fast. The work is often poor quality, and they are gone before you realize it.</p>
          <p><strong>How to protect yourself:</strong> Always use a local Charlotte company with a real office, local phone number, and a track record of reviews.</p>

          <h3>The Free Roof Scam</h3>
          <p>Someone knocks on your door and says they can get you a &quot;free roof&quot; through your insurance. They promise to cover your deductible. This is <strong>insurance fraud</strong> and it is illegal in North Carolina. You could face legal trouble too.</p>
          <p><strong>How to protect yourself:</strong> Never work with anyone who offers to pay or waive your deductible. Report them to the North Carolina Attorney General&apos;s office.</p>

          <h3>High-Pressure Sales</h3>
          <p>Some roofers use scare tactics. They say your roof is about to collapse, or that the price will double if you do not sign today. This is almost never true.</p>
          <p><strong>How to protect yourself:</strong> Get multiple opinions. A real emergency (like an active leak) can be temporarily tarped while you research your options.</p>

          <h3>Bait and Switch</h3>
          <p>A company gives you a low quote, then once they start work, they say they &quot;found more damage&quot; and the price goes way up. While some hidden damage is real, a big price jump after work starts is a red flag.</p>
          <p><strong>How to protect yourself:</strong> Get a detailed written contract that explains what happens if extra work is needed. A good contract will include a per-sheet price for any rotten wood found.</p>

          <h3>Leftover Material Deal</h3>
          <p>Someone says they just finished a job nearby and have leftover materials. They offer to do your roof cheap with the extra. This is almost always a scam. Professional roofers order materials for each specific job.</p>
          <p><strong>How to protect yourself:</strong> Just say no. A real deal does not find you — you find it by researching and comparing real companies.</p>

          <h3>No Permit Pulled</h3>
          <p>Some roofers skip the permit to save time and money. This means no inspection of the work. If the work is done wrong, you have no official record. It can also cause problems when you try to sell your home.</p>
          <p><strong>How to protect yourself:</strong> Ask your roofer to pull a permit. You can verify permits with Mecklenburg County or your local building department.</p>

          <h3>Your Scam Protection Checklist</h3>
          <ul>
            <li>Never pay more than 50% upfront</li>
            <li>Always get a written contract</li>
            <li>Verify the company&apos;s license and insurance</li>
            <li>Check reviews on Google and the BBB</li>
            <li>Never let anyone pressure you into signing today</li>
            <li>Be extra cautious after storms when scammers are most active</li>
            <li>If it sounds too good to be true, it is</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 16 — Permits and Codes                                    */
/* ================================================================ */
function Chapter16() {
  return (
    <section id="permits" data-chapter="16" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={16} title="Permits, Codes, and HOA Rules" />
        <div className="prose-simple">
          <p>Before any roofing work begins, there are rules to follow. These rules exist to keep you safe and make sure the work is done right.</p>

          <h3>Building Permits</h3>
          <p>In Charlotte and Mecklenburg County, you need a building permit for a roof replacement. Small repairs usually do not require a permit, but a full re-roof does.</p>
          <p>Your roofing company should handle pulling the permit. The permit fee is usually $100 to $300 depending on the size of the job. Some companies include this in their estimate; others list it separately.</p>
          <p>After the work is done, a county inspector will come to check that everything was installed to code. This inspection protects you — it is an independent check that the work was done right.</p>

          <p>Surrounding areas have their own permit offices:</p>
          <ul>
            <li><strong>Mecklenburg County</strong> — for Charlotte, Huntersville, Cornelius, Davidson, Matthews, Mint Hill, Pineville</li>
            <li><strong>Union County</strong> — for Weddington, Waxhaw, Indian Trail, Monroe</li>
            <li><strong>Cabarrus County</strong> — for Concord, Kannapolis, Harrisburg</li>
            <li><strong>Gaston County</strong> — for Gastonia, Belmont, Mount Holly</li>
            <li><strong>Iredell County</strong> — for Mooresville, Statesville</li>
            <li><strong>York County, SC</strong> — for Fort Mill, Rock Hill, Tega Cay</li>
            <li><strong>Lancaster County, SC</strong> — for Indian Land, Lancaster</li>
          </ul>

          <h3>North Carolina Building Code</h3>
          <p>North Carolina follows the International Building Code (IBC) with some local changes. Key roofing requirements include:</p>
          <ul>
            <li><strong>Drip edge:</strong> Required on all roof edges</li>
            <li><strong>Underlayment:</strong> Required under all shingle roofs</li>
            <li><strong>Ice and water shield:</strong> Required in valleys and around penetrations</li>
            <li><strong>Ventilation:</strong> Attics must have 1 square foot of ventilation for every 150 square feet of attic space</li>
            <li><strong>Wind rating:</strong> Materials must meet wind speed requirements for the area (Charlotte is in a 90–110 mph design wind speed zone)</li>
            <li><strong>Maximum two layers:</strong> No more than two layers of shingles allowed on a roof</li>
          </ul>

          <h3>HOA Rules</h3>
          <p>If you live in a neighborhood with a Homeowners Association (HOA), you may need approval before replacing your roof. Many Charlotte neighborhoods — especially in areas like Ballantyne, Providence, Stonecrest, and Lake Norman — have HOAs with specific rules about:</p>
          <ul>
            <li><strong>Color:</strong> Your HOA may require your roof to be a specific color or within a certain range</li>
            <li><strong>Material:</strong> Some HOAs do not allow certain materials like cedar shake or metal</li>
            <li><strong>Approval process:</strong> You may need to submit an Architectural Review Board (ARB) request before starting work</li>
          </ul>
          <p>Always check with your HOA before choosing your roofing material and color. Getting the wrong color or material can result in fines or being forced to redo the work.</p>

          <h3>What Happens If You Skip the Permit?</h3>
          <p>Skipping a permit might save a couple hundred dollars now, but it can cause big problems later:</p>
          <ul>
            <li>No inspection means no guarantee the work meets code</li>
            <li>Your insurance company could deny a future claim</li>
            <li>When you sell your home, the buyer&apos;s inspector may flag unpermitted work</li>
            <li>You could face fines from the county</li>
          </ul>
          <p>Bottom line: always get the permit. A good roofing company will handle this for you.</p>
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

          <h3>How long does a roof replacement take?</h3>
          <p>Most residential roof replacements in Charlotte take 1 to 3 days. A simple roof on a small home might be done in one day. A large home with steep slopes, multiple valleys, and complex features can take up to a week. Weather delays can add time — roofers cannot work in rain.</p>

          <h3>Can I stay in my house during a roof replacement?</h3>
          <p>Yes! You can stay home during a roof replacement. It will be loud. Very loud. The crew will be hammering, using nail guns, and dropping old materials into a dumpster. Your pets might be stressed. But you do not need to leave unless you want to.</p>

          <h3>What time of year is best for a new roof?</h3>
          <p>You can replace a roof any time of year in Charlotte. Spring and fall are the most popular because the weather is mild. Summer works too, but the heat is tough on the crew. Winter replacements are possible — shingles just need temperatures above 40°F to seal properly. You might get a better price in the off-season (December–February).</p>

          <h3>Will a new roof lower my insurance rates?</h3>
          <p>It might! Many insurance companies offer discounts for newer roofs, especially if you upgrade to impact-resistant shingles. Some Charlotte homeowners have saved 10–20% on their premiums after a roof replacement. Call your insurance agent and ask before you choose your materials.</p>

          <h3>How do I know if my roof has hail damage?</h3>
          <p>Hail damage on shingles looks like small dents, bruises, or spots where the granules have been knocked off. It can be hard to see from the ground. A professional roofer can get on the roof and check. Most Charlotte roofers offer free hail damage inspections after storms.</p>

          <h3>Should I repair my roof or wait for a storm to get insurance to pay for it?</h3>
          <p>Do not wait. If your roof needs repair, fix it. Letting damage get worse to try to make an insurance claim is risky. Your insurance company can deny a claim if they determine the damage was caused by neglect. Keep your roof maintained, and if a storm causes new damage, file a claim for that new damage.</p>

          <h3>What is the difference between a 25-year and 50-year shingle?</h3>
          <p>The warranty length refers to how long the manufacturer says the shingle should last under normal conditions. A 50-year shingle is thicker, more durable, and more wind-resistant than a 25-year shingle. In Charlotte&apos;s tough weather, many homeowners find the upgrade worth it.</p>

          <h3>Can I do roofing work myself?</h3>
          <p>We do not recommend it. Roofing is dangerous — falls from roofs cause thousands of injuries every year. Professional roofers have safety equipment, training, and experience. DIY roofing can also void your shingle warranty and create code violations. Save the DIY projects for things on the ground.</p>

          <h3>Do I need to replace my gutters when I replace my roof?</h3>
          <p>Not always. If your gutters are in good shape, a roofer can work around them. But if your gutters are old, damaged, or not draining properly, it is a good time to replace them. You may save money by doing both projects at once since the crew is already there.</p>

          <h3>What should I do to prepare for a roof replacement?</h3>
          <ul>
            <li>Move cars out of the driveway and away from the house</li>
            <li>Take down or protect fragile items near exterior walls (vibrations from hammering can knock things over inside)</li>
            <li>Cover items in the attic with a tarp or sheet (dust and debris can fall through)</li>
            <li>Mow your lawn — it is easier to find stray nails in short grass</li>
            <li>Let your neighbors know — it will be noisy</li>
            <li>Make sure the crew has access to an outdoor electrical outlet</li>
          </ul>

          <h3>How do I find out if a roofing company is legitimate?</h3>
          <p>Check their Google reviews, Better Business Bureau rating, and NC license (for jobs over $30,000). Ask for proof of insurance. Look for a real physical address. You can also check their record with the North Carolina Licensing Board for General Contractors.</p>

          <h3>Will a new roof increase my home&apos;s value?</h3>
          <p>Yes. Studies show that a new roof returns 60–70% of its cost in added home value. In the Charlotte real estate market, a new roof can make your home sell faster and for a higher price. Buyers love knowing they will not have to worry about the roof for many years.</p>
        </div>
      </div>
    </section>
  )
}

/* ================================================================ */
/* CHAPTER 18 — Glossary                                             */
/* ================================================================ */
function Chapter18() {
  return (
    <section id="glossary" data-chapter="18" className="py-12 md:py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ChapterHeading number={18} title="Roofing Words You Should Know" />
        <div className="prose-simple">
          <p>Here is a list of common roofing terms. You can come back to this anytime you hear a word you do not know.</p>

          <div className="space-y-4 mt-6">
            <GlossaryTerm term="Asphalt Shingles" definition="The most common roofing material. Made from fiberglass coated with asphalt and covered with small granules." />
            <GlossaryTerm term="Architectural Shingles" definition="A thicker, textured type of asphalt shingle. Also called dimensional or laminate shingles. They look better and last longer than 3-tab shingles." />
            <GlossaryTerm term="Cricket" definition="A small peaked structure built behind a chimney to divert water around it. Prevents water from pooling behind the chimney." />
            <GlossaryTerm term="Deck / Sheathing" definition="The flat wood base of your roof, usually made of plywood or OSB. Everything else sits on top of this." />
            <GlossaryTerm term="Dormer" definition="A structure that sticks out from the slope of a roof, usually containing a window. Common on Cape Cod and colonial-style homes." />
            <GlossaryTerm term="Drip Edge" definition="A thin metal strip along the edges of the roof that guides water into the gutters. Required by code in North Carolina." />
            <GlossaryTerm term="Eaves" definition="The edges of the roof that hang over the walls of the house." />
            <GlossaryTerm term="EPDM" definition="Ethylene Propylene Diene Monomer. A synthetic rubber material used on flat (commercial) roofs." />
            <GlossaryTerm term="Fascia" definition="The vertical board along the edge of the roof where gutters attach." />
            <GlossaryTerm term="Flashing" definition="Thin metal pieces placed around chimneys, vents, skylights, and other openings to prevent leaks." />
            <GlossaryTerm term="Gable" definition="The triangular section of wall between the edges of two sloping roof surfaces." />
            <GlossaryTerm term="Granules" definition="The small, gravel-like particles on the surface of asphalt shingles. They protect the shingle from UV rays." />
            <GlossaryTerm term="Hip" definition="The line where two sloping roof planes meet on the outside. A hip roof has four sloping sides." />
            <GlossaryTerm term="Ice and Water Shield" definition="A sticky, waterproof membrane applied to vulnerable areas of the roof (valleys, edges, around penetrations) for extra leak protection." />
            <GlossaryTerm term="Ice Dam" definition="A ridge of ice that forms at the edge of a roof and prevents melting snow from draining. Can cause water to back up under shingles." />
            <GlossaryTerm term="Membrane" definition="A continuous waterproof sheet used on flat roofs. TPO, PVC, and EPDM are types of roof membranes." />
            <GlossaryTerm term="OSB" definition="Oriented Strand Board. An engineered wood panel used as roof decking. Made from wood strands glued together." />
            <GlossaryTerm term="Penetration" definition="Anything that goes through the roof surface, like a vent pipe, chimney, or skylight." />
            <GlossaryTerm term="Pitch (Slope)" definition="How steep a roof is. Measured as a ratio — for example, a 6/12 pitch rises 6 inches for every 12 inches of horizontal distance." />
            <GlossaryTerm term="Ponding" definition="Water that collects and sits on a flat roof for more than 48 hours. This is a problem that needs to be fixed." />
            <GlossaryTerm term="R-Value" definition="A measure of how well insulation resists heat flow. Higher R-value means better insulation." />
            <GlossaryTerm term="Rafter" definition="The structural beams that support the roof from underneath, running from the ridge to the eaves." />
            <GlossaryTerm term="Ridge" definition="The highest point of the roof where two slopes meet." />
            <GlossaryTerm term="Ridge Cap" definition="Special shingles designed to cover the ridge of the roof." />
            <GlossaryTerm term="Ridge Vent" definition="A ventilation system installed along the ridge of the roof to let hot air escape from the attic." />
            <GlossaryTerm term="Soffit" definition="The flat panel under the eaves. Often has small holes or vents for attic ventilation." />
            <GlossaryTerm term="Square" definition="A unit of measurement in roofing. One square equals 100 square feet of roof area." />
            <GlossaryTerm term="Standing Seam" definition="A type of metal roof with vertical panels connected by raised seams. Very durable and weather-resistant." />
            <GlossaryTerm term="Storm Chaser" definition="A roofing contractor who travels to storm-damaged areas to solicit work. Often provides low-quality repairs and leaves town." />
            <GlossaryTerm term="Tear-Off" definition="Removing the existing roofing materials down to the deck before installing new roofing." />
            <GlossaryTerm term="TPO" definition="Thermoplastic Polyolefin. A white membrane used on flat commercial roofs. Energy efficient and durable." />
            <GlossaryTerm term="Underlayment" definition="A protective layer installed on top of the deck, under the shingles. Acts as a backup water barrier." />
            <GlossaryTerm term="Valley" definition="The V-shaped area where two sloping roof sections meet. Water flows down through valleys, so they need extra protection." />
            <GlossaryTerm term="Ventilation" definition="The system that allows air to flow through the attic. Includes intake vents (usually in soffits) and exhaust vents (ridge vents, box vents)." />
            <GlossaryTerm term="Warranty (Material)" definition="A guarantee from the shingle manufacturer covering defects in the product. Usually 25–50 years." />
            <GlossaryTerm term="Warranty (Workmanship)" definition="A guarantee from the roofing contractor covering the quality of their installation. Usually 5–15 years." />
          </div>

          <div className="mt-10 p-6 bg-primary/5 rounded-xl border border-primary/10">
            <p className="text-lg font-medium text-gray-900 mb-2">Congratulations!</p>
            <p className="text-gray-600 mb-0">You made it through the entire Charlotte Roofing Guide! You now know more about roofing than most homeowners. Use this knowledge to protect your home, save money, and make smart decisions. Bookmark this page so you can come back anytime you need it.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function GlossaryTerm({ term, definition }: { term: string; definition: string }) {
  return (
    <div className="border-b border-gray-100 pb-3">
      <dt className="font-bold text-gray-900">{term}</dt>
      <dd className="text-gray-600 mt-1">{definition}</dd>
    </div>
  )
}
