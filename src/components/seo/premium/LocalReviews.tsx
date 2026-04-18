import Image from 'next/image'
import { Star, Quote, MapPin } from 'lucide-react'
import type { LocalReview } from '@/data/seo/premium/types'

interface Props {
  reviews: LocalReview[]
  /** Suffixe pour le titre, ex. "à Paris 15e" */
  locationSuffix?: string
}

/**
 * LocalReviews — 3 à 5 témoignages locaux nommés (vs les stub génériques
 * de TestimonialsBlock). Chaque review = client réel + quartier + note +
 * date + photo optionnelle.
 *
 * Conçu pour remplacer (ou compléter) TestimonialsBlock sur les pages Premium+.
 */
export function LocalReviews({ reviews, locationSuffix }: Props) {
  if (reviews.length === 0) return null

  const avg = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-blue-corporate text-sm font-semibold uppercase tracking-wider">
            Avis clients vérifiés
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-2 mb-3">
            Ils nous ont fait confiance{locationSuffix ? ` ${locationSuffix}` : ''}
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${
                    s <= Math.round(avg) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-navy-dark">{avg.toFixed(1)}/5</span>
            <span>·</span>
            <span>{reviews.length} avis locaux</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="relative bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-corporate/5 transition-all"
            >
              {r.photo && (
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={r.photo.url}
                    alt={r.photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={70}
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-5">
                <Quote className="absolute top-3 right-3 w-5 h-5 text-blue-corporate/15" />
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        s <= r.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="pt-3 border-t border-gray-100">
                  <p className="font-semibold text-navy-dark text-sm">{r.author}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {r.context}
                    </span>
                    {r.date && <span>{r.date}</span>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
