import type { PremiumCase } from '@/data/seo/premium/types'

interface Props {
  premium: PremiumCase
  /** Nom commercial affiché dans le schema (ex. "AZ Construction — Garde-corps verre Neuilly") */
  businessName: string
  /** URL canonical pour @id */
  url: string
}

/**
 * RichSchemaInjector — injecte un JSON-LD enrichi pour les URLs Maxi-Premium.
 *
 * Combine :
 * - LocalBusiness (avec geo + priceRange + aggregateRating si présents)
 * - Awards (si présents)
 *
 * Note : la FAQPage est injectée séparément par <LocalFAQ>.
 *        Les Reviews individuelles sont déjà gérées par LocalReviews.
 */
export function RichSchemaInjector({ premium, businessName, url }: Props) {
  const rich = premium.richSchema
  if (!rich) return null

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': url,
    name: businessName,
    url,
  }

  if (rich.geo) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: rich.geo.latitude,
      longitude: rich.geo.longitude,
    }
  }

  if (rich.priceRange) {
    schema.priceRange = `${rich.priceRange.low}-${rich.priceRange.high}${
      rich.priceRange.currency === 'USD' ? ' USD' : ' €'
    }`
  }

  if (rich.aggregateRating) {
    schema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rich.aggregateRating.value,
      reviewCount: rich.aggregateRating.count,
      bestRating: 5,
      worstRating: 1,
    }
  }

  if (rich.awards?.length) {
    schema.award = rich.awards
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
