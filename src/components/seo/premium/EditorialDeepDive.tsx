import { Feather, Clock } from 'lucide-react'
import type { PremiumCase } from '@/data/seo/premium/types'

type EditorialDeepDive = NonNullable<PremiumCase['editorialDeepDive']>

interface Props {
  data: EditorialDeepDive
}

/**
 * EditorialDeepDive — essai éditorial long signé par le persona.
 * Format Medium / The Atlantic : titre + subtitle + 4-6 sections + signature.
 *
 * Affiché en pleine largeur après le CityGuide pour les URLs Maxi-Premium.
 */
export function EditorialDeepDive({ data }: Props) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 text-blue-corporate">
          <Feather className="w-5 h-5" />
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">
            Tribune éditoriale
          </span>
          {data.readMinutes ? (
            <>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3.5 h-3.5" />
                {data.readMinutes} min de lecture
              </span>
            </>
          ) : null}
        </div>

        {/* Titre */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-[1.05] tracking-tight mb-4">
          {data.title}
        </h2>
        {data.subtitle ? (
          <p className="text-xl md:text-2xl text-gray-500 leading-snug font-light mb-12 italic">
            {data.subtitle}
          </p>
        ) : null}

        {/* Sections */}
        <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-navy-dark prose-headings:font-bold prose-p:leading-relaxed">
          {data.sections.map((section, idx) => (
            <div key={idx} className="mt-12">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-dark mt-10 mb-5 leading-tight">
                {section.heading}
              </h3>
              {section.body.split(/\n\n+/).map((para, i) => (
                <p key={`s${idx}-p${i}`} className="text-[1.05rem] md:text-lg leading-[1.75] mb-5">
                  {para.trim()}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Signature */}
        {data.signature ? (
          <div className="mt-16 pt-8 border-t border-gray-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-corporate to-cyan-glow flex items-center justify-center text-white font-bold text-lg shrink-0">
              {data.signature.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-navy-dark">{data.signature.name}</p>
              <p className="text-sm text-gray-500">{data.signature.role}</p>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}
