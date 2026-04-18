import { CalendarClock } from 'lucide-react'
import type { PremiumCase } from '@/data/seo/premium/types'

type ProcessTimeline = NonNullable<PremiumCase['processTimeline']>

interface Props {
  data: ProcessTimeline
}

/**
 * ProcessTimeline — timeline verticale du chantier J-30 → J+90.
 * Stepper avec rail vertical, dot par étape, badges durée.
 */
export function ProcessTimeline({ data }: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-3 mb-4 text-blue-corporate">
          <CalendarClock className="w-5 h-5" />
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">
            Calendrier chantier
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-dark leading-tight mb-3">
          {data.title || 'Du devis à la pose, étape par étape'}
        </h2>
        {data.intro ? (
          <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl">
            {data.intro}
          </p>
        ) : null}

        <ol className="relative border-l-2 border-blue-corporate/20 ml-3 space-y-10 mt-10">
          {data.steps.map((step, idx) => (
            <li key={idx} className="pl-8 relative">
              {/* Dot */}
              <span className="absolute -left-[11px] top-1 flex items-center justify-center w-5 h-5 rounded-full bg-blue-corporate ring-4 ring-white" />

              {/* When badge */}
              <div className="inline-block px-2.5 py-1 rounded-md bg-blue-corporate/10 text-blue-corporate text-xs font-bold uppercase tracking-wider mb-2">
                {step.when}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-navy-dark leading-tight mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>

              {step.duration ? (
                <p className="mt-2 text-xs text-gray-400 italic">
                  Durée : {step.duration}
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
