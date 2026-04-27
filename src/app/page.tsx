import type { Metadata } from 'next'
import Hero from '@/components/shared/Hero'
import FAQSection from '@/components/shared/FAQSection'
import HomePageSections from '@/components/home/HomePageSections'
import { companies, getRegularCompanies } from '@/data/companies'
import { getFeaturedNeighborhoods } from '@/data/neighborhoods'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Charlotte Roofing Hub | Free Charlotte Roofing Information & Local Companies',
  description: 'Free Charlotte roofing site with information, materials and pricing guides, instant roof estimates, and a curated list of suggested local roofing companies — many of whom contribute content to the site. We don\'t sell leads.',
  alternates: { canonical: 'https://charlotteroofinghub.com' },
  openGraph: {
    title: 'Charlotte Roofing Hub | Free Information & Local Roofing Companies',
    description: 'Free Charlotte roofing information, materials guides, and a curated list of suggested local roofing companies. We don\'t sell leads.',
    url: 'https://charlotteroofinghub.com',
  },
}

// Homepage FAQs — voice-search optimized, aligned with the site's actual
// positioning: free site, no lead selling, curated list of local companies
// (many of whom contribute content).
const homepageFAQs = [
  {
    question: "How does Charlotte Roofing Hub vet roofing companies?",
    answer: "Charlotte Roofing Hub vets every suggested roofing company through a rigorous process: 1) Face-to-face meetings with company owners, 2) Thorough background checks, 3) Verification of NC licensing, insurance, and manufacturer certifications, 4) Confirmation of a 4.8+ star Google rating from authentic reviews. The same process applies to every company suggested on the site, including the contributors."
  },
  {
    question: "Is Charlotte Roofing Hub free to use?",
    answer: "Yes — Charlotte Roofing Hub is 100% free for Charlotte homeowners. We don't sell leads. The site offers free roofing guides, materials and pricing comparisons, and a curated list of suggested local Charlotte roofing companies. Many of those companies contribute content to the site."
  },
  {
    question: "Who is the best roofing company in Charlotte NC?",
    answer: "Charlotte has many excellent roofing companies with 4.8+ star ratings. Every roofing company suggested on Charlotte Roofing Hub has been personally vetted — face-to-face owner meetings, background checks, NC license verification, and a 4.8+ star Google rating requirement. Browse the list to find a fit for your specific roofing needs."
  },
  {
    question: "How much does a new roof cost in Charlotte NC?",
    answer: "The average cost for a new roof in Charlotte ranges from $8,000 to $25,000 for residential homes, depending on size, materials, and complexity. Asphalt shingles cost $3.50–$7.00 per square foot installed; metal roofing $7–$14 per square foot; premium materials like slate $20+ per square foot. Visit the materials and pricing page for detailed cost comparisons."
  },
  {
    question: "Does Charlotte Roofing Hub sell my information to roofing companies?",
    answer: "No. Charlotte Roofing Hub does not sell leads, pay-per-lead, or pay-per-introduction. There is no paid placement and no promotional treatment for any company on the site. The site is funded by local Charlotte roofing companies that contribute content — they earn their listing through the same vetting as every other suggested company."
  },
  {
    question: "How long does a roof replacement take in Charlotte?",
    answer: "Most residential roof replacements in Charlotte take 1–3 days, depending on the size of the home, weather conditions, and material complexity. Larger or more complex roofs (multiple stories, steep pitch, many penetrations) take 3–5 days. Metal roofing installations typically take 2–4 days. Simple asphalt shingle replacements can complete in a single day."
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
