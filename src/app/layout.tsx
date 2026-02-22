import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InstantEstimateCTA from "@/components/layout/InstantEstimateCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://charlotteroofinghub.com'),
  title: {
    default: "Charlotte Roofing Hub | Find Top-Rated Roofers in Charlotte NC",
    template: "%s | Charlotte Roofing Hub"
  },
  description: "Charlotte's only locally-verified roofing directory. Every company is personally vetted - we meet owners face-to-face and run background checks. A free roofing education resource created by local Charlotte roofers to help homeowners find trusted roofers with 4.8+ stars.",
  keywords: [
    // Primary Charlotte Keywords
    "roofing companies charlotte nc",
    "charlotte roofing contractors",
    "best roofers in charlotte",
    "roof repair charlotte",
    "new roof charlotte nc",
    "roof replacement charlotte",
    // Service Keywords
    "residential roofing charlotte",
    "commercial roofing charlotte",
    "metal roofing charlotte nc",
    "shingle roof replacement charlotte",
    "roof estimate charlotte",
    "charlotte roof installation",
    "roof contractors near me",
    "affordable roofing charlotte",
    "emergency roof repair charlotte",
    "storm damage roof repair charlotte nc",
    "roof inspection charlotte",
    // Surrounding Areas (GEO)
    "roofing contractors matthews nc",
    "huntersville roofing companies",
    "concord nc roofers",
    "mooresville roofing contractors",
    "mint hill roof repair",
    "indian trail roofing",
    "waxhaw roofing companies",
    "fort mill roofing contractors",
    "gastonia roofers",
    "cornelius roof replacement",
    // Long-tail Keywords (AEO)
    "best rated roofers charlotte nc",
    "how much does a roof cost in charlotte",
    "free roof estimate charlotte nc",
    "veteran owned roofing company charlotte",
    "BBB accredited roofers charlotte",
    "GAF master elite roofer charlotte",
    "owens corning preferred contractor charlotte"
  ],
  authors: [{ name: "Charlotte Roofing Hub" }],
  creator: "Charlotte Roofing Hub",
  publisher: "Charlotte Roofing Hub",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://charlotteroofinghub.com",
    siteName: "Charlotte Roofing Hub",
    title: "Charlotte Roofing Hub | Find Top-Rated Roofers in Charlotte NC",
    description: "Your trusted source for finding quality roofing companies in Charlotte, NC. Browse 25+ top-rated roofers, job listings, and get instant roof estimates!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Charlotte Roofing Hub - Find Quality Roofers in Charlotte NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Charlotte Roofing Hub | Find Top-Rated Roofers in Charlotte NC",
    description: "Your trusted source for finding quality roofing companies in Charlotte, NC.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://charlotteroofinghub.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// Structured Data for the website
function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Charlotte Roofing Hub",
    url: "https://charlotteroofinghub.com",
    description: "Your trusted source for finding quality roofing companies in Charlotte, NC",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://charlotteroofinghub.com/companies?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Charlotte Roofing Hub",
    url: "https://charlotteroofinghub.com",
    logo: "https://charlotteroofinghub.com/logo.png",
    description: "A free roofing education resource founded by Best Roofing Now and supported by local Charlotte roofing companies. Every listed contractor is personally verified through owner meetings and background checks.",
    slogan: "Locally Verified. Background Checked. Trusted by Charlotte.",
    areaServed: {
      "@type": "City",
      name: "Charlotte",
      containedInPlace: {
        "@type": "State",
        name: "North Carolina"
      }
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "Charlotte, NC"
    },
    knowsAbout: [
      "Roofing contractor verification",
      "Background checks for contractors",
      "Charlotte roofing companies",
      "Roofing education"
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function LocalBusinessAggregateSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Top Roofing Companies in Charlotte, NC",
    description: "Curated list of 4.8+ star rated roofing companies serving Charlotte and surrounding areas",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "RoofingContractor",
          name: "Verified Charlotte Roofing Contractors",
          description: "25+ personally vetted roofing contractors serving Charlotte, NC"
        }
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// AEO/GEO Optimized - Professional Service Schema
function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Charlotte Roofing Hub",
    url: "https://charlotteroofinghub.com",
    description: "Charlotte's only locally-verified roofing directory. A free roofing education resource created by local Charlotte roofers where every company is personally vetted through face-to-face meetings and background checks.",
    serviceType: "Verified Roofing Contractor Directory",
    slogan: "Locally Verified. Background Checked. Trusted by Charlotte.",
    areaServed: [
      {
        "@type": "City",
        name: "Charlotte",
        containedInPlace: { "@type": "State", name: "North Carolina", "@id": "https://www.wikidata.org/wiki/Q1454" }
      },
      { "@type": "City", name: "Matthews", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Huntersville", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Concord", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Cornelius", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Davidson", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Mooresville", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Mint Hill", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Indian Trail", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Waxhaw", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Fort Mill", containedInPlace: { "@type": "State", name: "South Carolina" } },
      { "@type": "City", name: "Rock Hill", containedInPlace: { "@type": "State", name: "South Carolina" } },
      { "@type": "City", name: "Gastonia", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Kannapolis", containedInPlace: { "@type": "State", name: "North Carolina" } },
      { "@type": "City", name: "Pineville", containedInPlace: { "@type": "State", name: "North Carolina" } }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services Directory",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Replacement" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Storm Damage Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Inspection" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gutter Installation" } }
      ]
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// AEO Optimized - FAQ Schema for Voice Search & AI Assistants
function GlobalFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Charlotte Roofing Hub verify roofing companies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Charlotte Roofing Hub personally verifies every roofing company through a rigorous process: 1) We meet face-to-face with company owners, 2) We conduct thorough background checks, 3) We verify licensing, insurance, and certifications, 4) We confirm 4.8+ star Google ratings and customer reviews. Founded by Best Roofing Now and supported by local Charlotte roofers, our goal is educating and protecting homeowners."
        }
      },
      {
        "@type": "Question",
        name: "Is Charlotte Roofing Hub free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Charlotte Roofing Hub is completely free for homeowners. Founded by Best Roofing Now LLC and supported by five local contributor companies, we don't charge homeowners anything - our mission is to educate homeowners and help them find trustworthy roofing contractors."
        }
      },
      {
        "@type": "Question",
        name: "What is the best roofing company in Charlotte NC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on our personal verification and background checks, Charlotte has many excellent roofing companies. All 25+ companies listed on Charlotte Roofing Hub have been personally vetted - we meet owners face-to-face, run background checks, and only list companies with 4.8+ star Google ratings. Browse our directory to compare verified contractors."
        }
      },
      {
        "@type": "Question",
        name: "How much does a new roof cost in Charlotte NC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Charlotte NC, a new roof typically costs between $8,000 and $25,000 for residential homes, depending on size, materials, and complexity. Asphalt shingles average $4-7 per square foot installed, metal roofing $8-14, and premium materials like slate can exceed $20 per square foot. Get a free instant estimate at CharlotteRoofingHub.com."
        }
      },
      {
        "@type": "Question",
        name: "How do I find a reputable roofer in Charlotte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To find a reputable roofer in Charlotte: 1) Check Google reviews (look for 4.8+ stars), 2) Verify BBB accreditation, 3) Confirm proper licensing and insurance, 4) Look for manufacturer certifications (GAF Master Elite, Owens Corning Platinum), 5) Get multiple estimates. Charlotte Roofing Hub lists only verified contractors with 4.8+ star ratings."
        }
      },
      {
        "@type": "Question",
        name: "What roofing materials are best for Charlotte NC weather?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For Charlotte's humid subtropical climate with hot summers and occasional storms, the best roofing materials are: Architectural asphalt shingles (most popular, 25-30 year warranty), Metal roofing (excellent durability, energy efficient), and Impact-resistant shingles for hail protection. Avoid materials that don't handle humidity well."
        }
      },
      {
        "@type": "Question",
        name: "Does homeowners insurance cover roof replacement in NC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In North Carolina, homeowners insurance typically covers roof damage from sudden events like storms, hail, fallen trees, and fire. It generally does not cover normal wear and aging. Many Charlotte roofers like Horizon Roofing, Merritt Roofing, and Regal Roofing specialize in insurance claim assistance and can help navigate the process."
        }
      },
      {
        "@type": "Question",
        name: "How long does a roof replacement take in Charlotte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical residential roof replacement in Charlotte takes 1-3 days for asphalt shingles, depending on roof size and weather. Larger homes or complex roofs may take 3-5 days. Metal roofing installations typically require 2-4 days. Most Charlotte roofing companies offer same-week scheduling for urgent needs."
        }
      }
    ]
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// GEO Optimized - Speakable Schema for Voice Assistants
function SpeakableSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Charlotte Roofing Hub - Find Top Roofers",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-description", ".faq-answer"]
    },
    mainEntity: {
      "@type": "ItemList",
      name: "Top Charlotte Roofing Companies",
      numberOfItems: 25,
      itemListElement: {
        "@type": "ListItem",
        position: 1,
        name: "25+ Verified Charlotte Roofing Contractors - All 4.8+ Stars"
      }
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Markup for Google Maps/Local Pack
function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://charlotteroofinghub.com/#business",
    name: "Charlotte Roofing Hub",
    description: "Charlotte's most trusted roofing company directory. Find 25+ verified roofing contractors with 4.8+ star ratings in Charlotte, NC and surrounding areas.",
    url: "https://charlotteroofinghub.com",
    telephone: "+1-704-555-ROOF",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.2271,
      longitude: -80.8431
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    },
    priceRange: "Free",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "25",
      bestRating: "5",
      worstRating: "1"
    }
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Core Schema Markup */}
        <WebsiteSchema />
        <OrganizationSchema />
        <LocalBusinessAggregateSchema />

        {/* AEO/GEO Optimized Schema for AI & Voice Search */}
        <ProfessionalServiceSchema />
        <GlobalFAQSchema />
        <SpeakableSchema />
        <LocalBusinessSchema />

        {/* Favicons & Theme */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e3a5f" />

        {/* Geographic Targeting for Local SEO */}
        <meta name="geo.region" content="US-NC" />
        <meta name="geo.placename" content="Charlotte" />
        <meta name="geo.position" content="35.2271;-80.8431" />
        <meta name="ICBM" content="35.2271, -80.8431" />

        {/* AEO/GEO Meta Tags for AI Crawlers */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <InstantEstimateCTA variant="popup" />
      </body>
    </html>
  );
}
