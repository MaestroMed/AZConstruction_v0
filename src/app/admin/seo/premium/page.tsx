import Link from 'next/link'
import { CheckCircle2, Clock, FileEdit, ArrowUpRight, Info } from 'lucide-react'
import { listAllPremiumCases } from '@/data/seo/premium'
import { getSeoProductBySlug } from '@/data/seo/products'
import { getDepartmentBySlug } from '@/data/seo/departments'
import { getCommuneBySlug } from '@/data/seo/communes'

/**
 * Admin — liste des PremiumCases (candidats + publiés).
 *
 * MVP : liste statique basée sur le registry en code (src/data/seo/premium/).
 * Pour ajouter une URL Premium+, créer un fichier .ts dans ce dossier et
 * l'importer dans src/data/seo/premium/index.ts.
 *
 * Phase 2 (future) : fetch Search Console API pour afficher les KPIs réels
 * (impressions, clicks, CTR, position) et recommander des candidats.
 */

export default function PremiumSEOPage() {
  const cases = listAllPremiumCases()

  const stats = {
    total: cases.length,
    published: cases.filter((c) => c.status === 'published').length,
    draft: cases.filter((c) => c.status === 'draft').length,
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">SEO Premium+</h1>
          <p className="text-gray-500 mt-1">
            URLs avec contenu éditorial sur-mesure (guide ville, études de cas, avis locaux).
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <strong>{stats.published}</strong> publiées
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <strong>{stats.draft}</strong> en rédaction
          </span>
          <span className="text-gray-500">sur {stats.total} total</span>
        </div>
      </div>

      {/* Info banner */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-900">
        <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div>
          <strong>Comment ça marche :</strong> chaque URL Premium+ remplace le template standard par du contenu sur-mesure :
          <span className="font-mono text-xs bg-white px-1 rounded mx-1">PremiumHero</span>,
          <span className="font-mono text-xs bg-white px-1 rounded mx-1">CityGuide</span>,
          <span className="font-mono text-xs bg-white px-1 rounded mx-1">CaseStudies</span>,
          <span className="font-mono text-xs bg-white px-1 rounded mx-1">LocalReviews</span>,
          <span className="font-mono text-xs bg-white px-1 rounded mx-1">CrossCityTable</span>.
          <br />
          <strong>Ajouter une URL :</strong> créer un fichier
          <span className="font-mono text-xs bg-white px-1 rounded mx-1">src/data/seo/premium/&lt;slug&gt;.ts</span>
          qui exporte un <span className="font-mono text-xs bg-white px-1 rounded mx-1">PremiumCase</span>,
          puis l&apos;importer dans <span className="font-mono text-xs bg-white px-1 rounded mx-1">index.ts</span>.
          <br />
          <strong>Passer en prod :</strong> remplir toutes les sections + uploader les photos +
          changer <span className="font-mono text-xs bg-white px-1 rounded mx-1">status: &apos;draft&apos;</span>
          → <span className="font-mono text-xs bg-white px-1 rounded mx-1">&apos;published&apos;</span> +
          deploy.
        </div>
      </div>

      {/* Table */}
      {cases.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <FileEdit className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">Aucune URL Premium+ enregistrée</p>
          <p className="text-gray-400 text-sm mt-1">
            Crée un fichier dans <span className="font-mono">src/data/seo/premium/</span> pour démarrer.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                <th className="text-left px-5 py-3 font-semibold">URL / Localisation</th>
                <th className="text-left px-5 py-3 font-semibold">Statut</th>
                <th className="text-left px-5 py-3 font-semibold">Sections remplies</th>
                <th className="text-left px-5 py-3 font-semibold">Éditeur</th>
                <th className="px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {cases.map((c, i) => {
                const product = getSeoProductBySlug(c.productSlug)
                const dept = getDepartmentBySlug(c.deptSlug)
                const commune = c.communeSlug
                  ? getCommuneBySlug(dept?.code ?? '', c.communeSlug)
                  : null

                const urlPath =
                  c.productSlug === 'thermolaquage'
                    ? `/services/thermolaquage/${c.deptSlug}${commune ? `/${commune.slug}` : ''}`
                    : `/${c.productSlug}/${c.deptSlug}${commune ? `/${commune.slug}` : ''}`

                const filledSections = [
                  c.cityGuide && 'Guide',
                  c.caseStudies?.length && `${c.caseStudies.length} case${c.caseStudies.length > 1 ? 's' : ''}`,
                  c.localReviews?.length && `${c.localReviews.length} avis`,
                  c.crossCity && 'Comparaison',
                  c.videoEmbedUrl && 'Vidéo',
                ].filter(Boolean)

                return (
                  <tr
                    key={`${c.productSlug}-${c.deptSlug}-${c.communeSlug ?? 'dept'}`}
                    className={i < cases.length - 1 ? 'border-b border-gray-100' : ''}
                  >
                    <td className="px-5 py-4">
                      <div className="font-mono text-xs text-gray-400 mb-0.5">{urlPath}</div>
                      <div className="text-sm font-semibold text-navy-dark">
                        {product?.name ?? c.productSlug}
                        {dept && ` — ${commune?.name ?? dept.fullName}`}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      {c.status === 'published' ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                          <CheckCircle2 className="w-3 h-3" /> Publiée
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-semibold">
                          <Clock className="w-3 h-3" /> Draft
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4">
                      {filledSections.length === 0 ? (
                        <span className="text-xs text-gray-400">Aucune</span>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {filledSections.map((s) => (
                            <span
                              key={String(s)}
                              className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[10px] font-medium rounded-md"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="px-5 py-4 text-xs text-gray-500">
                      {c.meta?.editor ?? '—'}
                      {c.meta?.lastEditedAt && (
                        <div className="text-[10px] text-gray-400 mt-0.5">
                          {c.meta.lastEditedAt}
                        </div>
                      )}
                    </td>
                    <td className="px-5 py-4 text-right whitespace-nowrap">
                      <Link
                        href={urlPath}
                        target="_blank"
                        className="inline-flex items-center gap-1 text-blue-corporate hover:underline text-xs font-medium"
                      >
                        Preview <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Quick start */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-navy-dark mb-3">Démarrer une nouvelle URL Premium+</h2>
        <ol className="space-y-3 text-sm text-gray-700">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-corporate/10 text-blue-corporate text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              Duplique le fichier exemple{' '}
              <span className="font-mono text-xs bg-gray-100 px-1 rounded">
                src/data/seo/premium/garde-corps-verre-paris-75-paris-15e.ts
              </span>
              {' '}avec le nom <span className="font-mono text-xs bg-gray-100 px-1 rounded">&lt;product&gt;-&lt;dept&gt;-&lt;commune&gt;.ts</span>.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-corporate/10 text-blue-corporate text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              Ajuste les 3 triplet slugs en haut, remplace les <span className="font-mono text-xs bg-gray-100 px-1 rounded">[À COMPLÉTER]</span> par du contenu réel.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-corporate/10 text-blue-corporate text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              Uploade les photos dans <span className="font-mono text-xs bg-gray-100 px-1 rounded">public/images/premium/&lt;product&gt;/&lt;commune&gt;/</span>.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-corporate/10 text-blue-corporate text-xs font-bold flex items-center justify-center">
              4
            </span>
            <div>
              Importe le nouveau case dans <span className="font-mono text-xs bg-gray-100 px-1 rounded">src/data/seo/premium/index.ts</span> → ajoute au registry.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-corporate/10 text-blue-corporate text-xs font-bold flex items-center justify-center">
              5
            </span>
            <div>
              Change <span className="font-mono text-xs bg-gray-100 px-1 rounded">status: &apos;draft&apos;</span> → <span className="font-mono text-xs bg-gray-100 px-1 rounded">&apos;published&apos;</span>, commit et push → prod.
            </div>
          </li>
        </ol>
      </div>
    </div>
  )
}
