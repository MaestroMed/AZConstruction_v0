import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getSeoProductBySlug } from '@/data/seo/products'
import type { Department, Commune } from '@/data/seo/types'

const RELATED_MAP: Record<string, string[]> = {
  'garde-corps': ['escaliers', 'verrieres', 'marquises'],
  escaliers: ['garde-corps', 'verrieres', 'portes'],
  portails: ['clotures', 'portes', 'thermolaquage'],
  clotures: ['portails', 'grilles-ventilation', 'thermolaquage'],
  portes: ['fenetres', 'verrieres', 'thermolaquage'],
  fenetres: ['portes', 'verrieres', 'marquises'],
  verrieres: ['fenetres', 'portes', 'garde-corps'],
  pergolas: ['marquises', 'garde-corps', 'thermolaquage'],
  marquises: ['pergolas', 'fenetres', 'thermolaquage'],
  'grilles-ventilation': ['clotures', 'portails', 'thermolaquage'],
  thermolaquage: ['portails', 'garde-corps', 'pergolas'],
}

function buildHref(productSlug: string, dept: Department, commune?: Commune): string {
  if (productSlug === 'thermolaquage') {
    return commune
      ? `/services/thermolaquage/${dept.slug}/${commune.slug}`
      : `/services/thermolaquage/${dept.slug}`
  }
  return commune
    ? `/${productSlug}/${dept.slug}/${commune.slug}`
    : `/${productSlug}/${dept.slug}`
}

interface Props {
  currentProductSlug: string
  dept: Department
  commune?: Commune
}

export function RelatedProductsBlock({ currentProductSlug, dept, commune }: Props) {
  const slugs = RELATED_MAP[currentProductSlug] ?? []
  if (slugs.length === 0) return null

  const items = slugs
    .map((s) => {
      const p = getSeoProductBySlug(s)
      if (!p) return null
      return {
        slug: s,
        name: p.name,
        nameWithArticle: p.nameWithArticle,
        href: buildHref(s, dept, commune),
      }
    })
    .filter((x): x is { slug: string; name: string; nameWithArticle: string; href: string } => x !== null)

  if (items.length === 0) return null

  const locationName = commune ? commune.name : dept.fullName
  const prepLoc = commune ? 'à' : 'en'

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <span className="text-blue-corporate text-sm font-semibold uppercase tracking-wider">
            On fait aussi tout ça
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mt-2 mb-3">
            Nos autres services {prepLoc} {locationName}
          </h2>
          <p className="text-gray-500 text-sm">
            Le même atelier, les mêmes équipes, le même niveau de finition. Souvent, un projet en
            entraîne un autre.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {items.map((it) => (
            <Link
              key={it.slug}
              href={it.href}
              className="group flex items-center justify-between gap-3 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-lg hover:shadow-blue-corporate/5 hover:border-blue-200 transition-all"
            >
              <div className="min-w-0">
                <p className="text-xs text-gray-500 mb-1">Notre atelier fait aussi</p>
                <p className="font-bold text-navy-dark truncate group-hover:text-blue-corporate transition-colors">
                  {it.name}
                </p>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {it.nameWithArticle.replace(/^d['e] ?/, '')} {prepLoc} {locationName}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-corporate group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
