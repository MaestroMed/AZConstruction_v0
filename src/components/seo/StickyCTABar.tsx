'use client'

import * as React from 'react'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

interface Props {
  ctaLabel?: string
  ctaHref?: string
  phone?: string
}

/**
 * Mobile-only sticky CTA bar that fades in once the user scrolls past the hero.
 * Hidden on desktop (md+).
 */
export function StickyCTABar({
  ctaLabel = 'Devis gratuit',
  ctaHref = '/contact',
  phone = '0971357496',
}: Props) {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl px-3 py-2.5 flex items-center gap-2">
        <a
          href={`tel:${phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-3 bg-gray-100 text-navy-dark rounded-xl font-semibold text-sm"
          aria-label="Appeler AZ Construction"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
        <Link
          href={ctaHref}
          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-3 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark rounded-xl font-bold text-sm"
        >
          {ctaLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
