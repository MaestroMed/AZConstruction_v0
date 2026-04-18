import { BookOpenText } from 'lucide-react'
import type { CityGuideSection } from '@/data/seo/premium/types'

interface Props {
  intro: string
  sections: CityGuideSection[]
  /** Optionnel : URL embed vidéo affichée à côté du guide */
  videoEmbedUrl?: string
}

/**
 * CityGuide — section éditoriale longue (1000-2000 mots) avec sous-titres H2.
 * Le texte est rendu paragraphe-par-paragraphe (split sur double-newline)
 * — pas de Markdown rendering pour rester simple et server-component-safe.
 */
export function CityGuide({ intro, sections, videoEmbedUrl }: Props) {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Article column */}
          <article className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <BookOpenText className="w-5 h-5 text-blue-corporate" />
              <span className="text-blue-corporate text-sm font-semibold uppercase tracking-wider">
                Guide local
              </span>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              {intro.split(/\n\n+/).map((para, i) => (
                <p key={`intro-${i}`} className="text-lg leading-relaxed">
                  {para.trim()}
                </p>
              ))}

              {sections.map((section, idx) => (
                <div key={idx} className="mt-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mt-8 mb-4 leading-tight">
                    {section.heading}
                  </h2>
                  {section.body.split(/\n\n+/).map((para, i) => (
                    <p key={`s${idx}-p${i}`} className="leading-relaxed">
                      {para.trim()}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </article>

          {/* Sidebar (vidéo + sticky info) */}
          <aside className="lg:col-span-4">
            {videoEmbedUrl ? (
              <div className="sticky top-24">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-navy-dark/10 bg-black">
                  <iframe
                    src={videoEmbedUrl}
                    title="Vidéo de présentation"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  Tour atelier / interview client local
                </p>
              </div>
            ) : (
              <div className="sticky top-24 p-6 bg-white rounded-2xl border border-gray-200">
                <h3 className="font-bold text-navy-dark mb-3">Notre engagement local</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Atelier 1 800 m² à Bruyères-sur-Oise. Équipe interne, jamais d&apos;intérimaires.
                  Décennale + SAV joignable directement.
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
