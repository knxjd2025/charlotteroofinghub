import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Charlotte Roofing Hub privacy policy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

      <div className="prose-simple space-y-6">
        <section>
          <h3>Introduction</h3>
          <p>
            Charlotte Roofing Hub (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This Privacy Policy
            explains how we collect, use, and protect your personal information when you visit
            charlotteroofinghub.com (the &quot;Site&quot;).
          </p>
        </section>

        <section>
          <h3>Information We Collect</h3>
          <p><strong>Information you provide:</strong></p>
          <ul>
            <li>Name and email address (when you submit a contact form or request an estimate)</li>
            <li>Property address (when using our estimate tool)</li>
            <li>Phone number (if voluntarily provided)</li>
          </ul>
          <p><strong>Information collected automatically:</strong></p>
          <ul>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website</li>
            <li>IP address (anonymized for analytics)</li>
          </ul>
        </section>

        <section>
          <h3>How We Use Your Information</h3>
          <ul>
            <li>To provide roof estimates and connect you with verified contractors</li>
            <li>To respond to your inquiries</li>
            <li>To improve our website and educational content</li>
            <li>To analyze site usage and performance</li>
          </ul>
        </section>

        <section>
          <h3>Information Sharing</h3>
          <p>
            We do not sell your personal information. We may share your contact information with
            verified roofing contractors only when you explicitly request an estimate or ask to be
            connected with a contractor.
          </p>
        </section>

        <section>
          <h3>Cookies</h3>
          <p>
            We use essential cookies to ensure the Site functions properly and analytics cookies to
            understand how visitors use our Site. You can control cookies through your browser settings.
          </p>
        </section>

        <section>
          <h3>Data Security</h3>
          <p>
            We use industry-standard security measures to protect your personal information, including
            HTTPS encryption and secure data storage. However, no method of transmission over the
            Internet is 100% secure.
          </p>
        </section>

        <section>
          <h3>Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to your personal information</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of your data</li>
          </ul>
        </section>

        <section>
          <h3>Third-Party Services</h3>
          <p>
            Our Site may use third-party services such as Google Analytics and mapping services.
            These services have their own privacy policies that govern their use of your data.
          </p>
        </section>

        <section>
          <h3>Children&apos;s Privacy</h3>
          <p>
            Our Site is not intended for children under 13. We do not knowingly collect personal
            information from children under 13.
          </p>
        </section>

        <section>
          <h3>Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will post any changes on this page
            with an updated revision date.
          </p>
        </section>

        <section>
          <h3>Contact Us</h3>
          <p>
            If you have questions about this Privacy Policy, please contact us through our{' '}
            <a href="/contact">contact page</a>.
          </p>
        </section>
      </div>
    </div>
  )
}
