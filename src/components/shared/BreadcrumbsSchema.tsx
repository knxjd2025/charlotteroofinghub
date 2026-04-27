// Renders schema.org BreadcrumbList JSON-LD for SERP rich results.
// Visual breadcrumbs are rendered separately by each page; this component is
// the structured-data half. Pass items in order from root to current page.
//
// Each item.url should be absolute (https://...) — Google requires this for
// BreadcrumbList per https://developers.google.com/search/docs/appearance/structured-data/breadcrumb

interface BreadcrumbItem {
  name: string
  url: string
}

export default function BreadcrumbsSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
