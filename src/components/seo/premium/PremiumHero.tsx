import Image from 'next/image'
import { Quote } from 'lucide-react'
import type { PremiumPhoto, PremiumQuote } from '@/data/seo/premium/types'

interface Props {
  photo: PremiumPhoto
  quote?: PremiumQuote
  /** alt fallback si photo.alt absent */
  altContext?: string
}

/**
 * Hero Premium+ — substitue le ProductHeroVisual gradient par une vraie photo
 * locale, avec citation client en overlay.
 *
 * À placer en background absolu de la <section> hero du template, comme
 * <Image> ou <ProductHeroVisual>.
 */
export function PremiumHero({ photo, quote, altContext }: Props) {
  return (
    <>
      <Image
        src={photo.url}
        alt={photo.alt || altContext || ''}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Overlay pour lisibilité du texte du template par-dessus */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/85 to-navy-dark/40" />

      {/* Citation client en overlay bas-droite (ne gêne pas le texte gauche) */}
      {quote && (
        <div className="absolute bottom-28 right-8 lg:right-16 max-w-sm hidden md:block z-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
            <Quote className="w-5 h-5 text-cyan-glow mb-2" />
            <p className="text-white text-sm leading-relaxed italic mb-3">
              &ldquo;{quote.text}&rdquo;
            </p>
            <p className="text-cyan-glow text-xs font-semibold">
              — {quote.author}
              {quote.context && <span className="text-white/60 font-normal"> · {quote.context}</span>}
            </p>
          </div>
        </div>
      )}

      {/* Caption bas */}
      {photo.caption && (
        <div className="absolute bottom-6 left-6 z-20">
          <p className="text-white/60 text-xs italic">{photo.caption}</p>
        </div>
      )}
    </>
  )
}
