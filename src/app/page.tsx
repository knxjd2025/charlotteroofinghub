import type { Metadata } from 'next'
import Hero from '@/components/shared/Hero'
import FAQSection from '@/components/shared/FAQSection'
import HomePageSections from '@/components/home/HomePageSections'
import { companies, getRegularCompanies } from '@/data/companies'
import { getFeaturedNeighborhoods } from '@/data/neighborhoods'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Charlotte Roofing Hub | Free Roofing Education by Local Roofers',
  description: 'Your complete guide to roofing in Charlotte, NC. Free educational resources, verified contractor directory, materials guide, and instant roof estimates — created by local roofing companies.',
  openGraph: {
    title: 'Charlotte Roofing Hub | Free Roofing Education by Local Roofers',
    description: 'Your complete guide to roofing in Charlotte, NC. Free educational resources, verified contractor directory, materials guide, and instant roof estimates.',
    url: 'https://charlotteroofinghub.com',
  },
}

// Homepage FAQs - Voice Search Optimized with Verification Messaging
const homepageFAQs = [
  {
    question: "How does Charlotte Roofing Hub verify roofing companies?",
    answer: "Charlotte Roofing Hub was created by local roofing companies to help homeowners find trustworthy contractors. We verify every listed company through a rigorous process: 1) Face-to-face meetings with company owners, 2) Thorough background checks, 3) Verification of licensing, insurance, and certifications, 4) Confirmation of 4.8+ star Google ratings."
  },
  {
    question: "Is Charlotte Roofing Hub free to use?",
    answer: "Yes, Charlotte Roofing Hub is 100% free for homeowners. It was founded by James at Best Roofing Now LLC and is supported by five local contributor companies — Rise Roofing & Restoration, A Roofing Treat, Roofing Solar and More, We Coat, and Weather Roofing. Our goal is to educate homeowners about roofing. No company receives special treatment or promotion."
  },
  {
    question: "Who is the best roofing company in Charlotte NC?",
    answer: "Based on our personal verification and background checks, Charlotte has many excellent roofing companies with 4.8+ star ratings. All 25+ companies on our site have been personally vetted - we meet owners face-to-face and run background checks. Browse our directory to find the perfect match for your specific roofing needs."
  },
  {
    question: "How much does a new roof cost in Charlotte NC?",
    answer: "The average cost for a new roof in Charlotte ranges from $8,000 to $25,000 for residential homes, depending on size, materials, and complexity. Asphalt shingles cost $3.50-$7.00 per square foot, while metal roofing ranges from $7-$14 per square foot. Visit our materials and pricing page for detailed cost comparisons."
  },
  {
    question: "Why should I trust Charlotte Roofing Hub over other directories?",
    answer: "Charlotte Roofing Hub was founded by James at Best Roofing Now and is supported by five local contributor companies who believe in transparency and education. We personally vet every company, run background checks, and only list companies with 4.8+ star ratings. The founder and all contributors are held to the same standards as every other listed company — no exceptions."
  },
  {
    question: "How long does a roof replacement take in Charlotte?",
    answer: "Most residential roof replacements in Charlotte take 1-3 days, depending on the size of your home, weather conditions, and material complexity. All our verified contractors provide clear timelines upfront. Simple asphalt shingle replacements typically complete in one day."
  }
]

// Stats — education-focused (serializable for client component)
const stats = [
  { label: 'Free Guides & Tools', value: '10+', iconName: 'BookOpen' },
  { label: 'Verified Companies', value: '25+', iconName: 'Building2' },
  { label: 'Cities Covered', value: '15+', iconName: 'MapPin' },
  { label: 'Years Combined Exp.', value: '200+', iconName: 'Star' },
]

export default function HomePage() {
  const topCompanies = getRegularCompanies().slice(0, 6)
  const featuredAreas = getFeaturedNeighborhoods().slice(0, 6)
  const featuredBlogPosts = blogPosts.filter(p => p.featured).slice(0, 3)

  return (
    <>
      <Hero />
      <HomePageSections
        stats={stats}
        topCompanies={topCompanies}
        totalCompanies={companies.length}
        featuredAreas={featuredAreas}
        featuredBlogPosts={featuredBlogPosts}
        faqSection={
          <FAQSection
            title="Common Questions About Roofing in Charlotte"
            faqs={homepageFAQs}
          />
        }
      />
    </>
  )
}
