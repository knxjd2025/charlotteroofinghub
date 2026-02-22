import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Charlotte Roofing Hub | Questions & Company Listings',
  description: 'Contact Charlotte Roofing Hub with questions, feedback, or to request your company be listed. We personally verify every roofing company on our site.',
  openGraph: {
    title: 'Contact Charlotte Roofing Hub',
    description: 'Contact Charlotte Roofing Hub with questions, feedback, or to request your company be listed.',
    url: 'https://charlotteroofinghub.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
