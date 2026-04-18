import Link from 'next/link'
import type { Department, SEOProduct } from '@/data/seo/types'
import { getCommunesByDepartment } from '@/data/seo/communes'

/**
 * DepartmentContextBlock — adds a data-rich paragraph to the intro section
 * of dept-level SEO pages (e.g. /garde-corps/val-doise-95). Mirrors the
 * CommuneContextBlock approach: unique HTML per dept × product, with local
 * stats + top-commune cross-links to boost internal mesh.
 *
 * Renders nothing for city-level pages (commune is passed).
 */

interface Props {
  product: SEOProduct
  dept: Department
}

function formatPop(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)} M`
  if (n >= 10_000) return `${Math.round(n / 1000)} 000`
  return n.toLocaleString('fr-FR')
}

export function DepartmentContextBlock({ product, dept }: Props) {
  const communes = getCommunesByDepartment(dept.code)
  if (communes.length === 0) return null

  const totalPopulation = communes.reduce((acc, c) => acc + (c.population ?? 0), 0)
  const top = [...communes]
    .filter((c) => c.population)
    .sort((a, b) => (b.population ?? 0) - (a.population ?? 0))
    .slice(0, 5)
  const prefecture = communes.find((c) => c.name === dept.prefecture)

  const productPath = product.slug === 'thermolaquage' ? `/services/thermolaquage` : `/${product.slug}`

  // Density/scale adjective based on dept population
  let scaleAdj = 'développé'
  if (totalPopulation >= 1_500_000) scaleAdj = 'parmi les plus peuplés d\'Île-de-France'
  else if (totalPopulation >= 800_000) scaleAdj = 'au tissu urbain dense'
  else if (totalPopulation >= 400_000) scaleAdj = 'à forte activité résidentielle et tertiaire'
  else if (totalPopulation >= 150_000) scaleAdj = 'à dominante résidentielle et semi-rurale'
  else scaleAdj = 'à taille humaine, en développement continu'

  return (
    <p>
      Le département {dept.fullName} regroupe{' '}
      <strong>
        {communes.length}+ communes
      </strong>{' '}
      couvertes par nos équipes,{' '}
      {totalPopulation > 0 && (
        <>
          pour environ <strong>{formatPop(totalPopulation)}</strong> habitants desservis, un territoire{' '}
          {scaleAdj}.
        </>
      )}{' '}
      {top.length > 0 && (
        <>
          Nos interventions {product.nameWithArticle} se concentrent notamment à{' '}
          {top.map((c, i) => (
            <span key={c.slug}>
              <Link
                href={`${productPath}/${dept.slug}/${c.slug}`}
                className="text-blue-corporate hover:underline"
              >
                {c.name}
              </Link>
              {i < top.length - 2 ? ', ' : i === top.length - 2 ? ' et ' : ''}
            </span>
          ))}
          {prefecture && !top.find((c) => c.slug === prefecture.slug) ? (
            <>
              , ainsi qu&apos;à la préfecture{' '}
              <Link
                href={`${productPath}/${dept.slug}/${prefecture.slug}`}
                className="text-blue-corporate hover:underline"
              >
                {prefecture.name}
              </Link>
              .
            </>
          ) : (
            <> — dont la préfecture {dept.prefecture}.</>
          )}
        </>
      )}
    </p>
  )
}
