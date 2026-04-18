import { Scale, CheckCircle2 } from 'lucide-react'
import type { PremiumCase } from '@/data/seo/premium/types'

type ComparisonTable = NonNullable<PremiumCase['comparisonTable']>

interface Props {
  data: ComparisonTable
}

/**
 * ComparisonTable — tableau comparatif technique multi-critères.
 * Acier vs Alu vs Verre, ou AZ vs concurrent A vs concurrent B.
 *
 * Design : sticky header sur scroll long, highlight cellule "winning column".
 */
export function ComparisonTable({ data }: Props) {
  return (
    <section className="py-20 bg-navy-dark text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-3 mb-4 text-cyan-glow">
          <Scale className="w-5 h-5" />
          <span className="text-sm font-semibold uppercase tracking-[0.18em]">
            Comparatif technique
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
          {data.title}
        </h2>
        {data.intro ? (
          <p className="text-lg text-white/70 max-w-3xl mb-10 leading-relaxed">
            {data.intro}
          </p>
        ) : null}

        {/* Table — desktop */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <table className="w-full">
            <thead className="bg-white/10">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-semibold text-white/80 uppercase tracking-wider">
                  Critère
                </th>
                {data.columns.map((col, i) => (
                  <th
                    key={i}
                    className="px-5 py-4 text-left text-sm font-bold text-cyan-glow uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className={`border-t border-white/10 ${rIdx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                >
                  <td className="px-5 py-4 text-sm font-medium text-white/90">
                    {row.criterion}
                  </td>
                  {row.values.map((val, cIdx) => (
                    <td
                      key={cIdx}
                      className={`px-5 py-4 text-sm leading-relaxed ${
                        row.highlight === cIdx
                          ? 'bg-cyan-glow/10 text-cyan-glow font-semibold'
                          : 'text-white/70'
                      }`}
                    >
                      {row.highlight === cIdx ? (
                        <span className="inline-flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                          <span>{val}</span>
                        </span>
                      ) : (
                        val
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile — cards stack */}
        <div className="md:hidden space-y-6">
          {data.columns.map((col, cIdx) => (
            <div
              key={cIdx}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5"
            >
              <h3 className="text-cyan-glow font-bold uppercase tracking-wider text-sm mb-4">
                {col}
              </h3>
              <dl className="space-y-3">
                {data.rows.map((row, rIdx) => (
                  <div key={rIdx} className="grid grid-cols-2 gap-3 text-sm">
                    <dt className="text-white/60">{row.criterion}</dt>
                    <dd
                      className={
                        row.highlight === cIdx
                          ? 'text-cyan-glow font-semibold'
                          : 'text-white/85'
                      }
                    >
                      {row.values[cIdx]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        {data.conclusion ? (
          <p className="mt-10 text-center text-white/80 italic max-w-3xl mx-auto leading-relaxed">
            {data.conclusion}
          </p>
        ) : null}
      </div>
    </section>
  )
}
