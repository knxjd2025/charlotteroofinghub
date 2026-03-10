import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Charlotte Roofing Hub terms of service. Read the terms and conditions for using our roofing education website.',
}

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

      <div className="prose-simple space-y-6">
        <section>
          <h3>Acceptance of Terms</h3>
          <p>
            By accessing and using Charlotte Roofing Hub (charlotteroofinghub.com), you agree to be
            bound by these Terms of Service. If you do not agree, please do not use the Site.
          </p>
        </section>

        <section>
          <h3>About Charlotte Roofing Hub</h3>
          <p>
            Charlotte Roofing Hub is a free roofing education resource created by local Charlotte
            roofing companies. We provide educational content, a verified contractor directory, and
            roofing tools to help homeowners make informed decisions.
          </p>
        </section>

        <section>
          <h3>Educational Content Disclaimer</h3>
          <p>
            The information provided on this Site is for general educational purposes only. It is not
            intended as professional roofing advice. Roofing costs, timelines, and recommendations
            may vary based on your specific situation. Always consult with a licensed roofing
            professional before making roofing decisions.
          </p>
        </section>

        <section>
          <h3>Estimate Tool Disclaimer</h3>
          <p>
            Our roof estimate tool provides approximate cost ranges based on publicly available data
            and general pricing models. Estimates are not quotes and should not be treated as binding
            offers. Actual costs may differ significantly. Get written quotes from licensed contractors
            for accurate pricing.
          </p>
        </section>

        <section>
          <h3>Contractor Directory</h3>
          <p>
            While we personally verify every listed contractor through owner meetings and background
            checks, we do not guarantee the quality of work performed by any listed company. Charlotte
            Roofing Hub is a directory service — any contract for work is between you and the
            contractor. We recommend getting multiple quotes and verifying current licensing and
            insurance before hiring.
          </p>
        </section>

        <section>
          <h3>No Endorsement</h3>
          <p>
            Listing on Charlotte Roofing Hub does not constitute an endorsement or guarantee. All
            listed companies, including the founder&apos;s company (Best Roofing Now) and contributor
            companies, are held to the same verification standards. No company receives preferential
            treatment or promotion.
          </p>
        </section>

        <section>
          <h3>Intellectual Property</h3>
          <p>
            All content on this Site, including text, graphics, logos, and educational materials, is
            the property of Charlotte Roofing Hub and is protected by copyright law. You may not
            reproduce, distribute, or create derivative works without our written permission.
          </p>
        </section>

        <section>
          <h3>User Conduct</h3>
          <p>You agree not to:</p>
          <ul>
            <li>Submit false or misleading information through our forms</li>
            <li>Attempt to access restricted areas of the Site</li>
            <li>Use the Site for any unlawful purpose</li>
            <li>Scrape or harvest data from the Site without permission</li>
          </ul>
        </section>

        <section>
          <h3>Limitation of Liability</h3>
          <p>
            Charlotte Roofing Hub and its contributors shall not be liable for any direct, indirect,
            incidental, or consequential damages arising from your use of the Site, reliance on any
            information provided, or interactions with listed contractors.
          </p>
        </section>

        <section>
          <h3>Changes to Terms</h3>
          <p>
            We may update these Terms at any time. Continued use of the Site after changes constitutes
            acceptance of the revised Terms.
          </p>
        </section>

        <section>
          <h3>Governing Law</h3>
          <p>
            These Terms are governed by the laws of the State of North Carolina. Any disputes shall
            be resolved in the courts of Mecklenburg County, North Carolina.
          </p>
        </section>

        <section>
          <h3>Contact</h3>
          <p>
            For questions about these Terms, please visit our{' '}
            <a href="/contact">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
