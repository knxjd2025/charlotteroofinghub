import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Instant Roof Estimate | Charlotte Roofing Hub',
  description: 'Get a free, instant roof estimate for your Charlotte, NC home. AI-powered satellite measurement with accurate pricing — no phone calls, no waiting.',
  openGraph: {
    title: 'Free Instant Roof Estimate | Charlotte Roofing Hub',
    description: 'Get a free, instant roof estimate for your Charlotte, NC home. AI-powered satellite measurement with accurate pricing.',
    url: 'https://charlotteroofinghub.com/estimate',
  },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return children
}
