import Link from 'next/link'
import type { Department, Commune, SEOProduct } from '@/data/seo/types'
import { getCommunesByDepartment } from '@/data/seo/communes'

/**
 * CommuneContextBlock — adds 2 sentences of commune-specific micro-copy to the
 * intro section of an SEO city page. Each commune × dept produces unique HTML
 * (different population mentions, different nearby commune names, different
 * size category) — direct counter to "thin content" risk on 280k pages.
 *
 * Renders nothing for dept-level pages (no commune).
 */

type SizeCategory = {
  label: string
  context: string
}

function classifySize(population?: number): SizeCategory {
  if (!population) return { label: 'commune', context: 'paisible et résidentielle' }
  if (population >= 100_000) return { label: 'grande ville', context: 'urbaine et dynamique' }
  if (population >= 30_000) return { label: 'ville moyenne', context: 'au tissu urbain dense' }
  if (population >= 10_000) return { label: 'commune', context: 'très active en construction et rénovation' }
  if (population >= 3_000) return { label: 'petite commune', context: 'résidentielle, à dominante pavillonnaire' }
  return { label: 'commune', context: 'à taille humaine, en plein développement' }
}

/**
 * Pick N "nearby" communes deterministically. We don't have geo-coordinates,
 * so we just sort by population (closer to current size feels more "neighborly")
 * and skip the current commune itself. Same input → same output (SSG-friendly).
 */
function pickNearby(allCommunes: Commune[], currentSlug: string, count: number): Commune[] {
  return allCommunes
    .filter((c) => c.slug !== currentSlug)
    .sort((a, b) => (b.population ?? 0) - (a.population ?? 0))
    .slice(0, count)
}

interface Props {
  product: SEOProduct
  dept: Department
  commune: Commune
}

export function CommuneContextBlock({ product, dept, commune }: Props) {
  const communes = getCommunesByDepartment(dept.code)
  const size = classifySize(commune.population)
  const nearby = pickNearby(communes, commune.slug, 4)
  const prefecture = communes.find((c) => c.name === dept.prefecture)

  const isPrefecture = commune.name === dept.prefecture
  const productPath = product.slug === 'thermolaquage' ? `/services/thermolaquage` : `/${product.slug}`

  return (
    <p>
      {commune.population ? (
        <>
          {commune.name} ({commune.codePostal}) est une <strong>{size.label}</strong> de{' '}
          {commune.population.toLocaleString('fr-FR')} habitants{' '}
          {isPrefecture
            ? `— préfecture de ${dept.fullName}`
            : `dans ${dept.fullName}`}
          , {size.context}. La demande {product.nameWithArticle} sur mesure y est constante,
          tant en construction neuve qu&apos;en rénovation lourde.
        </>
      ) : (
        <>
          {commune.name} ({commune.codePostal}) est une commune {size.context} de {dept.fullName}.
          Nous y intervenons régulièrement pour des projets {product.nameWithArticle} sur mesure,
          en construction comme en rénovation.
        </>
      )}{' '}
      {nearby.length > 0 && (
        <>
          Notre équipe intervient aussi dans les communes voisines :{' '}
          {nearby.map((c, i) => (
            <span key={c.slug}>
              <Link
                href={`${productPath}/${dept.slug}/${c.slug}`}
                className="text-blue-corporate hover:underline"
              >
                {c.name}
              </Link>
              {i < nearby.length - 2 ? ', ' : i === nearby.length - 2 ? ' et ' : '.'}
            </span>
          ))}{' '}
          {!isPrefecture && prefecture && prefecture.slug !== commune.slug && (
            <>
              Préfecture {dept.fullName} :{' '}
              <Link
                href={`${productPath}/${dept.slug}/${prefecture.slug}`}
                className="text-blue-corporate hover:underline"
              >
                {prefecture.name}
              </Link>
              .
            </>
          )}
        </>
      )}
    </p>
  )
}
