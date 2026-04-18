import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { CrossCityRow } from '@/data/seo/premium/types'

interface Props {
  intro?: string
  rows: CrossCityRow[]
  /** Construit l'URL de chaque ligne — passé par le parent qui connaît le slug produit + dept */
  buildHref: (communeSlug: string) => string
}

/**
 * CrossCityTable — comparaison rapide cross-villes (3 villes voisines).
 * Renforce le maillage interne + signale à Google la profondeur du contenu local.
 */
export function CrossCityTable({ intro, rows, buildHref }: Props) {
  if (rows.length === 0) return null

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-8">
          <span className="text-blue-corporate text-sm font-semibold uppercase tracking-wider">
            Comparaison rapide
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mt-2 mb-3">
            Voir aussi dans les villes voisines
          </h2>
          {intro && <p className="text-gray-500 text-sm">{intro}</p>}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="text-left px-5 py-3 font-semibold">Commune</th>
                <th className="text-left px-5 py-3 font-semibold">Prix moyen</th>
                <th className="text-left px-5 py-3 font-semibold">Délai moyen</th>
                <th className="text-left px-5 py-3 font-semibold">Particularité</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.communeSlug}
                  className={i < rows.length - 1 ? 'border-b border-gray-100' : ''}
                >
                  <td className="px-5 py-4">
                    <Link
                      href={buildHref(row.communeSlug)}
                      className="font-semibold text-navy-dark hover:text-blue-corporate transition-colors"
                    >
                      {row.communeName}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-gray-700">{row.priceAvg ?? '—'}</td>
                  <td className="px-5 py-4 text-gray-700">{row.durationAvg ?? '—'}</td>
                  <td className="px-5 py-4 text-gray-500 text-xs">{row.note ?? '—'}</td>
                  <td className="px-5 py-4 text-right">
                    <Link
                      href={buildHref(row.communeSlug)}
                      className="inline-flex items-center gap-1 text-blue-corporate text-xs font-medium hover:underline"
                    >
                      Voir <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
