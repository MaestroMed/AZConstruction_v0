import Link from 'next/link'
import { ArrowUpRight, Flame } from 'lucide-react'

const AZEPOXY_URL = 'https://azepoxy.fr'

/**
 * Subtle cross-site CTA pointing to azepoxy.fr — our specialized sister site
 * for thermolaquage. Two variants:
 *  - "compact" : inline pill, fits in a hero button row or sidebar
 *  - "block"   : full-width footer-style block with explanation copy
 */

export function AzepoxyCalloutCompact({
  className = '',
  label = 'Notre site dédié thermolaquage',
}: {
  className?: string
  label?: string
}) {
  return (
    <a
      href={AZEPOXY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-5 py-3 bg-orange-500/10 text-orange-200 border border-orange-400/30 rounded-xl hover:bg-orange-500/20 hover:text-orange-100 transition-all text-sm font-medium ${className}`}
    >
      <Flame className="w-4 h-4" />
      {label}
      <ArrowUpRight className="w-4 h-4" />
    </a>
  )
}

export function AzepoxyCalloutBlock({
  context = 'thermolaquage',
}: {
  context?: 'thermolaquage' | 'jantes' | 'moto' | 'voiture' | 'pieces'
}) {
  const copy = {
    thermolaquage: {
      hint: 'Service spécialisé',
      title: 'Aussi chez nous : azepoxy.fr',
      desc: "azepoxy.fr est notre site dédié au thermolaquage. Process, finitions, prises de cotes — tout y est expliqué pour aller plus loin que cette page. Même atelier, même équipe, même four.",
    },
    jantes: {
      hint: 'Spécialiste jantes',
      title: 'Pour vos jantes : azepoxy.fr',
      desc: "Notre site spécialisé azepoxy.fr détaille notre process spécifique jantes (sablage, dépose des valves, masquage des portées de roulement) et permet de demander un devis express avec photos.",
    },
    moto: {
      hint: 'Spécialiste moto',
      title: 'Pour votre moto : azepoxy.fr',
      desc: "azepoxy.fr est notre site dédié, où vous trouverez le détail des opérations moto (cadres, jantes, carter, échappements) — et pourrez réserver un créneau d'enlèvement depuis chez vous.",
    },
    voiture: {
      hint: 'Spécialiste auto',
      title: 'Pour votre auto : azepoxy.fr',
      desc: "Sur azepoxy.fr nous détaillons les pièces auto que nous traitons (jantes, étriers de frein, carrosserie démontée, pièces moteur) avec galerie de réalisations.",
    },
    pieces: {
      hint: 'Spécialiste industrie',
      title: 'Pour vos séries : azepoxy.fr',
      desc: "azepoxy.fr est notre site dédié au thermolaquage industriel : grandes séries, programmation des passages, cahiers des charges client, suivi qualité par lot.",
    },
  }[context]

  return (
    <section className="py-14 bg-gradient-to-br from-orange-50 via-amber-50 to-stone-50 border-y border-orange-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-orange-200 rounded-full text-orange-700 text-xs font-semibold mb-4">
            <Flame className="w-3.5 h-3.5" />
            {copy.hint}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy-dark mb-3">{copy.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{copy.desc}</p>
          <a
            href={AZEPOXY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors"
          >
            Visiter azepoxy.fr
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
