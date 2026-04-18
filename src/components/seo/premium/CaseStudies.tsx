import Image from 'next/image'
import { ArrowRight, MapPin, Calendar, Quote } from 'lucide-react'
import type { CaseStudy } from '@/data/seo/premium/types'

interface Props {
  cases: CaseStudy[]
  /** Suffixe titre ex. "à Paris 15e" */
  locationSuffix?: string
}

/**
 * CaseStudies — 1 à 3 chantiers réels documentés (before/after + métriques + quote).
 * Conçu pour une intégration entre la section "Réalisations" générique et l'unicité
 * d'une case study Premium+.
 */
export function CaseStudies({ cases, locationSuffix }: Props) {
  if (cases.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-blue-corporate text-sm font-semibold uppercase tracking-wider">
            Études de cas locales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-2 mb-3">
            Chantiers récents{locationSuffix ? ` ${locationSuffix}` : ''}
          </h2>
          <p className="text-gray-500">
            Du devis à la pose, voici exactement comment ça s&apos;est passé chez nos clients voisins.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((c, idx) => (
            <article
              key={idx}
              className={`grid lg:grid-cols-2 gap-8 items-start ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Photos before/after */}
              <div className="space-y-3">
                {c.photos?.before && c.photos?.after ? (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                      <Image
                        src={c.photos.before.url}
                        alt={c.photos.before.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 text-white text-[10px] font-bold uppercase tracking-wider rounded-md">
                        Avant
                      </div>
                    </div>
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
                      <Image
                        src={c.photos.after.url}
                        alt={c.photos.after.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3 px-2 py-1 bg-cyan-glow text-navy-dark text-[10px] font-bold uppercase tracking-wider rounded-md">
                        Après
                      </div>
                    </div>
                  </div>
                ) : c.photos?.after ? (
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={c.photos.after.url}
                      alt={c.photos.after.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[4/3] rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                    Pas de photo
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-navy-dark mb-3 leading-tight">
                  {c.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-5">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {c.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {c.date}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{c.description}</p>

                {/* Metrics */}
                {c.metrics && (
                  <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
                    {c.metrics.price && (
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Prix</p>
                        <p className="font-bold text-navy-dark">{c.metrics.price}</p>
                      </div>
                    )}
                    {c.metrics.duration && (
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Délai</p>
                        <p className="font-bold text-navy-dark">{c.metrics.duration}</p>
                      </div>
                    )}
                    {c.metrics.surface && (
                      <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Métrage</p>
                        <p className="font-bold text-navy-dark">{c.metrics.surface}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Quote */}
                {c.quote && (
                  <div className="border-l-4 border-cyan-glow pl-4 py-2">
                    <Quote className="w-4 h-4 text-cyan-glow mb-2" />
                    <p className="text-gray-700 italic leading-relaxed">&ldquo;{c.quote.text}&rdquo;</p>
                    <p className="text-sm font-semibold text-navy-dark mt-2">
                      — {c.quote.author}
                      {c.quote.context && (
                        <span className="text-gray-500 font-normal"> · {c.quote.context}</span>
                      )}
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
