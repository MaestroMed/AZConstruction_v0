// Magazine-cover style generated hero — used when no real product photo is
// uploaded. Each product gets a unique gradient + pattern + giant ghost name.
// Goal: visually distinctive per product, premium feel, zero asset required.

import type { CSSProperties } from 'react'

type Pattern = 'lines' | 'grid' | 'dots' | 'mesh' | 'flame'

interface VisualConfig {
  /** Tailwind gradient classes for the deep-color background */
  gradient: string
  /** Accent color (hex) used for highlights, glows, ghost text gradient */
  accent: string
  /** Pattern overlay style */
  pattern: Pattern
}

// Per-product visual identity. Sub-products inherit from their parent in
// resolveVisualConfig (so garde-corps-verre uses the garde-corps look).
const VISUALS: Record<string, VisualConfig> = {
  'garde-corps':         { gradient: 'from-slate-950 via-blue-950 to-cyan-950',     accent: '#22d3ee', pattern: 'lines' },
  escaliers:             { gradient: 'from-zinc-950 via-stone-900 to-orange-950',   accent: '#fb923c', pattern: 'grid' },
  portails:              { gradient: 'from-neutral-950 via-zinc-900 to-red-950',    accent: '#ef4444', pattern: 'grid' },
  clotures:              { gradient: 'from-slate-950 via-slate-900 to-amber-950',   accent: '#f59e0b', pattern: 'lines' },
  portes:                { gradient: 'from-stone-950 via-amber-950 to-yellow-950',  accent: '#eab308', pattern: 'mesh' },
  fenetres:              { gradient: 'from-slate-900 via-blue-950 to-slate-800',    accent: '#7dd3fc', pattern: 'grid' },
  verrieres:             { gradient: 'from-zinc-950 via-slate-900 to-blue-950',     accent: '#38bdf8', pattern: 'grid' },
  pergolas:              { gradient: 'from-emerald-950 via-stone-900 to-amber-950', accent: '#84cc16', pattern: 'lines' },
  marquises:             { gradient: 'from-stone-950 via-zinc-900 to-yellow-950',   accent: '#facc15', pattern: 'mesh' },
  'grilles-ventilation': { gradient: 'from-slate-950 via-blue-950 to-slate-800',    accent: '#60a5fa', pattern: 'dots' },
  thermolaquage:         { gradient: 'from-orange-950 via-red-900 to-amber-950',    accent: '#f97316', pattern: 'flame' },
}

// Sub-product → parent (same as in ProductLocalPage)
const PARENT: Record<string, string> = {
  'garde-corps-verre': 'garde-corps',
  'escalier-helicoidal': 'escaliers',
  'portail-coulissant': 'portails',
  'portail-autoportant': 'portails',
  'verriere-atelier': 'verrieres',
}

export function getVisualConfig(slug: string): VisualConfig {
  return VISUALS[slug] ?? VISUALS[PARENT[slug] ?? ''] ?? VISUALS['garde-corps']
}

function patternStyle(pattern: Pattern, accent: string): CSSProperties {
  switch (pattern) {
    case 'lines':
      return {
        backgroundImage: `repeating-linear-gradient(135deg, ${accent}15 0 1px, transparent 1px 14px)`,
      }
    case 'grid':
      return {
        backgroundImage: `linear-gradient(${accent}10 1px, transparent 1px), linear-gradient(90deg, ${accent}10 1px, transparent 1px)`,
        backgroundSize: '36px 36px',
      }
    case 'dots':
      return {
        backgroundImage: `radial-gradient(circle at 2px 2px, ${accent}25 1.5px, transparent 0)`,
        backgroundSize: '24px 24px',
      }
    case 'mesh':
      return {
        backgroundImage: `radial-gradient(circle at 30% 20%, ${accent}30 0%, transparent 40%), radial-gradient(circle at 70% 80%, ${accent}25 0%, transparent 40%)`,
      }
    case 'flame':
      return {
        backgroundImage: `radial-gradient(ellipse at 50% 100%, ${accent}50 0%, ${accent}20 30%, transparent 60%)`,
      }
  }
}

interface Props {
  productSlug: string
  productName: string
  /** Big "ghost" word displayed behind everything (typically the product name or family) */
  ghostText?: string
}

/**
 * Magazine-cover style generated hero. Renders as the absolute background of
 * the hero section — the existing dark overlay + content sits on top. No
 * external asset required; visually distinctive per product.
 */
export function ProductHeroVisual({ productSlug, productName, ghostText }: Props) {
  const cfg = getVisualConfig(productSlug)
  const ghost = ghostText ?? productName

  return (
    <div
      aria-hidden
      className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} overflow-hidden`}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0" style={patternStyle(cfg.pattern, cfg.accent)} />

      {/* Accent glow blob top-right */}
      <div
        className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-40 blur-3xl"
        style={{ background: `radial-gradient(circle, ${cfg.accent}40, transparent 70%)` }}
      />

      {/* Accent glow blob bottom-left */}
      <div
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: `radial-gradient(circle, ${cfg.accent}30, transparent 60%)` }}
      />

      {/* Big ghost product name */}
      <div className="absolute inset-0 flex items-center justify-end pr-8 lg:pr-24 select-none pointer-events-none">
        <span
          className="font-display font-black tracking-tighter leading-none uppercase whitespace-nowrap"
          style={{
            fontSize: 'clamp(8rem, 20vw, 24rem)',
            background: `linear-gradient(135deg, ${cfg.accent}30, transparent 60%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {ghost}
        </span>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_300px_rgba(0,0,0,0.5)]" />
    </div>
  )
}

/** Useful for callers that want to know the accent color (e.g. for buttons). */
export function getProductAccent(slug: string): string {
  return getVisualConfig(slug).accent
}
