import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import {
  ADAPTA_PATINA_SUBS,
  ADAPTA_POLARIS_SUBS,
  ADAPTA_DICHROIC_FINISHES,
  ADAPTA_SFERA_FINISHES,
} from '@/lib/data/adapta-collections.generated'

// Pick 2 representative finishes per collection (deterministic, no randomness on render)
const COLLECTIONS = [
  {
    slug: 'patina',
    name: 'Patina',
    tagline: 'Patines minérales & oxyde',
    finishes: [
      ADAPTA_PATINA_SUBS[2]?.finishes[0], // Oxide Patina I
      ADAPTA_PATINA_SUBS[1]?.finishes[0], // Tile Patina
    ].filter(Boolean),
  },
  {
    slug: 'polaris',
    name: 'Polaris',
    tagline: 'Métalliques structurés',
    finishes: [
      ADAPTA_POLARIS_SUBS[0]?.finishes[0], // Chamaleon
      ADAPTA_POLARIS_SUBS[5]?.finishes[0], // Phoenix
    ].filter(Boolean),
  },
  {
    slug: 'dichroic',
    name: 'Dichroic',
    tagline: 'Effets dichroïques',
    finishes: [ADAPTA_DICHROIC_FINISHES[0], ADAPTA_DICHROIC_FINISHES[10]].filter(Boolean),
  },
  {
    slug: 'sfera',
    name: 'Sfera',
    tagline: 'Anodisés & cosmos',
    finishes: [ADAPTA_SFERA_FINISHES[0], ADAPTA_SFERA_FINISHES[5]].filter(Boolean),
  },
]

export function AdaptaCollectionsBlock() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-amber-700 text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Partenaire Adaptacolor
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">
            Au-delà du RAL — nos collections premium
          </h2>
          <p className="text-gray-500">
            Pour vos projets architecturaux on travaille aussi les finitions Adapta : patines minérales,
            métalliques Polaris, effets dichroïques et anodisés Sfera.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {COLLECTIONS.map((c) => (
            <Link
              key={c.slug}
              href={`/couleurs-ral/${c.slug}`}
              className="group block"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 ring-1 ring-black/5 group-hover:ring-cyan-glow/30 transition-all">
                {/* 2 image diagonal split */}
                <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
                  {c.finishes.map((f, i) =>
                    f?.imageUrl ? (
                      <div key={i} className="relative">
                        <Image
                          src={f.imageUrl}
                          alt={`Finition Adapta ${c.name} — ${f.name}`}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          quality={65}
                          loading="lazy"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div key={i} className="bg-gray-200" />
                    ),
                  )}
                </div>
                {/* Gradient + label overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-bold text-base leading-tight">{c.name}</p>
                  <p className="text-white/70 text-[11px] leading-tight">{c.tagline}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/couleurs-ral"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-dark/5 text-navy-dark font-semibold rounded-xl hover:bg-navy-dark/10 transition-colors group"
          >
            Voir les 155 finitions premium
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
