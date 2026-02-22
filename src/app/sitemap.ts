import { MetadataRoute } from 'next'
import { companies } from '@/data/companies'
import { neighborhoods } from '@/data/neighborhoods'
import { services } from '@/data/services'
import { getAllBlogSlugs } from '@/data/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://charlotteroofinghub.com'

  // Fixed dates for static content (updated when content actually changes)
  const siteLastUpdated = new Date('2026-02-22')
  const contentCreated = new Date('2026-02-20')

  // Static pages with SEO priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: siteLastUpdated,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/companies`,
      lastModified: siteLastUpdated,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/areas`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/residential`,
      lastModified: contentCreated,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/commercial`,
      lastModified: contentCreated,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/materials`,
      lastModified: contentCreated,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/roofing-guide`,
      lastModified: contentCreated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/repair-or-replace`,
      lastModified: contentCreated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hoa-roof-approval`,
      lastModified: contentCreated,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastUpdated,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/community-resources`,
      lastModified: contentCreated,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/estimate`,
      lastModified: contentCreated,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: contentCreated,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: contentCreated,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/editorial-guidelines`,
      lastModified: contentCreated,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Dynamic company pages - high priority for local SEO
  const companyPages: MetadataRoute.Sitemap = companies.map((company) => ({
    url: `${baseUrl}/companies/${company.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic area/neighborhood pages - high priority for hyper-local SEO
  const areaPages: MetadataRoute.Sitemap = neighborhoods.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: area.featured ? 0.9 : 0.85,
  }))

  // Dynamic service pages - high priority for service-based SEO
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: siteLastUpdated,
    changeFrequency: 'weekly' as const,
    priority: service.category === 'emergency' ? 0.9 : 0.85,
  }))

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: contentCreated,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...companyPages, ...areaPages, ...servicePages, ...blogPages]
}
