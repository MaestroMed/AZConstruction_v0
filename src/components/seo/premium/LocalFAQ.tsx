import { HelpCircle } from 'lucide-react'
import type { PremiumCase } from '@/data/seo/premium/types'

type LocalFAQ = NonNullable<PremiumCase['localFAQ']>

interface Props {
  data: LocalFAQ
  /** Used to inject FAQPage JSON-LD schema for rich snippets */
  injectSchema?: boolean
}

/**
 * LocalFAQ — 8-15 questions ultra-localisées avec rich snippet FAQPage.
 * Affichage details/summary natif (accessible, server-component-safe).
 */
export function LocalFAQ({ data, injectSchema = true }: Props) {
  const schema = injectSchema
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.items.map((it) => ({
          '@type': 'Question',
          name: it.question,
          acceptedAnswer: { '@type': 'Answer', text: it.answer },
        })),
      }
    : null

  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-4 text-blue-corporate">
          <HelpCircle className="w-5 h-5" />
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">
            Questions locales
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark leading-tight mb-3">
          Vos questions, nos réponses
        </h2>
        {data.intro ? (
          <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-3xl">
            {data.intro}
          </p>
        ) : null}

        <div className="space-y-3">
          {data.items.map((item, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-corporate/40 transition-colors"
            >
              <summary className="cursor-pointer px-6 py-5 flex items-start justify-between gap-4 select-none">
                <h3 className="font-semibold text-navy-dark text-lg leading-snug pr-2">
                  {item.question}
                </h3>
                <span className="shrink-0 mt-1 w-8 h-8 rounded-full bg-blue-corporate/10 flex items-center justify-center text-blue-corporate font-light text-2xl group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 -mt-1 text-gray-700 leading-relaxed">
                {item.answer.split(/\n\n+/).map((p, i) => (
                  <p key={i} className="mb-3 last:mb-0">
                    {p.trim()}
                  </p>
                ))}
              </div>
            </details>
          ))}
        </div>

        {schema ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ) : null}
      </div>
    </section>
  )
}
