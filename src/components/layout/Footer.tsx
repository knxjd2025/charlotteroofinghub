import Link from 'next/link'
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

const footerLinks = {
  companies: [
    { name: 'Browse Companies', href: '/companies' },
    { name: 'Featured Roofers', href: '/companies?featured=true' },
    { name: 'Add Your Company', href: '/contact' },
  ],
  services: [
    { name: 'All Services', href: '/services' },
    { name: 'Roof Replacement', href: '/services/roof-replacement' },
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Emergency Repair', href: '/services/emergency-roof-repair' },
    { name: 'Storm Damage', href: '/services/storm-damage-repair' },
  ],
  areas: [
    { name: 'All Service Areas', href: '/areas' },
    { name: 'Ballantyne', href: '/areas/ballantyne' },
    { name: 'South End', href: '/areas/southend' },
    { name: 'Myers Park', href: '/areas/myers-park' },
    { name: 'Huntersville', href: '/areas/huntersville' },
    { name: 'Matthews', href: '/areas/matthews' },
  ],
  resources: [
    { name: 'Residential Roofing', href: '/residential' },
    { name: 'Commercial Roofing', href: '/commercial' },
    { name: 'Materials & Pricing', href: '/materials' },
    { name: 'Blog', href: '/blog' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      {/* Main CTA Section */}
      <div className="bg-secondary py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Roof Estimate? Get One Instantly!
          </h2>
          <p className="text-white/90 mb-6">
            Use our AI-powered tool to get an instant, accurate roof estimate for your Charlotte home.
          </p>
          <a
            href="https://instantroofestimate.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-secondary font-bold rounded-lg hover:bg-gray-100 transition text-lg"
          >
            Get Your Free Instant Estimate
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-lg font-bold">Charlotte</span>
                <span className="text-lg font-bold text-accent"> Roofing Hub</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm mb-4">
              Charlotte&apos;s only locally-verified roofing directory. A free community service — we don&apos;t make a profit and don&apos;t charge for services.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/70">
              <MapPin className="w-4 h-4" />
              <span>Charlotte, North Carolina</span>
            </div>
          </div>

          {/* Companies */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Companies</h3>
            <ul className="space-y-2">
              {footerLinks.companies.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Service Areas</h3>
            <ul className="space-y-2">
              {footerLinks.areas.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="font-semibold mb-4 text-accent">About</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              &copy; {currentYear} Charlotte Roofing Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/70">A free community resource for Charlotte homeowners</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
