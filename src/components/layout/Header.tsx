'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, Building2, FileText, Phone, ChevronDown, MapPin, Wrench } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Companies', href: '/companies', icon: Building2 },
  { name: 'Areas', href: '/areas', icon: MapPin },
  { name: 'Services', href: '/services', icon: Wrench },
  {
    name: 'Resources',
    icon: FileText,
    children: [
      { name: 'Roofing Guide (Free Book)', href: '/roofing-guide' },
      { name: 'Residential Roofing', href: '/residential' },
      { name: 'Commercial Roofing', href: '/commercial' },
      { name: 'Materials & Pricing', href: '/materials' },
      { name: 'Blog', href: '/blog' },
    ]
  },
  { name: 'About', href: '/about', icon: Building2 },
  { name: 'Contact', href: '/contact', icon: Phone },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top CTA Bar - InstantRoofEstimate */}
      <div className="bg-secondary text-white py-2 px-4 text-center">
        <Link
          href="/estimate"
          className="text-sm md:text-base font-semibold hover:underline inline-flex items-center gap-2"
        >
          Get an Instant Roof Estimate Now - Free & Fast!
          <span className="hidden sm:inline">→</span>
        </Link>
      </div>

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-primary">Charlotte</span>
              <span className="text-xl font-bold text-secondary"> Roofing Hub</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border py-1 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Link
              href="/estimate"
              className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-red-600 transition cta-pulse"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-1">
              {navigation.map((item) => (
                item.children ? (
                  <div key={item.name} className="space-y-1">
                    <span className="block px-3 py-2 text-sm font-medium text-gray-500">
                      {item.name}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block pl-6 pr-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
            <div className="mt-4 pt-4 border-t space-y-2">
              <Link
                href="/estimate"
                className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-secondary rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
