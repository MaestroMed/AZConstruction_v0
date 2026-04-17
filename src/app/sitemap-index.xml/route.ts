import { generateSitemaps } from '../sitemap'

const BASE = 'https://www.azconstruction.fr'

/**
 * Sitemap INDEX (the file Google Search Console reads from robots.txt).
 *
 * Next.js with `generateSitemaps` only emits the sub-sitemaps
 * (`/sitemap/0.xml` … `/sitemap/N.xml`) — it does NOT auto-generate the index
 * at `/sitemap.xml`. This route fills that gap.
 *
 * We use `/sitemap-index.xml` instead of `/sitemap.xml` to avoid a folder
 * collision with the metadata file `app/sitemap.ts`.
 *
 * Cached 1h at the CDN; long enough to absorb crawl bursts, short enough to
 * pick up new sub-sitemaps after a deploy.
 */
export async function GET() {
  const sitemaps = await generateSitemaps()
  const lastmod = new Date().toISOString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    ({ id }) => `  <sitemap>
    <loc>${BASE}/sitemap/${id}.xml</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`,
  )
  .join('\n')}
</sitemapindex>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
