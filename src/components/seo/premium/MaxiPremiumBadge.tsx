import { Sparkles } from 'lucide-react'

/**
 * MaxiPremiumBadge — micro-pastille discrète signalant qu'une page est
 * une URL "vitrine" Maxi-Premium (contenu sur-mesure approfondi).
 *
 * Affichée en haut de page sous le hero pour les ~5 URLs concernées.
 */
export function MaxiPremiumBadge() {
  return (
    <div className="bg-gradient-to-r from-blue-corporate via-cyan-glow/40 to-blue-corporate text-white text-center py-2.5 text-xs font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
      <Sparkles className="w-3.5 h-3.5" />
      Page éditoriale référence
      <Sparkles className="w-3.5 h-3.5" />
    </div>
  )
}
