import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Box, FlaskConical } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lab — Configurateurs 3D',
  robots: { index: false, follow: false },
}

export default function LabPage() {
  return (
    <div className="min-h-screen bg-navy-dark pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card-glow mb-6">
            <FlaskConical className="w-4 h-4 text-cyan-glow" />
            <span className="text-cyan-glow text-sm font-medium">Lab — En test</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Configurateurs <span className="text-cyan-glow">3D</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Visualisez votre projet en 3D, choisissez les dimensions, couleurs et finitions. Obtenez une estimation instantanée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Link
            href="/lab/configurateur-garde-corps"
            className="glass-card rounded-2xl p-8 hover:bg-white/[0.06] transition-all group"
          >
            <Box className="w-10 h-10 text-cyan-glow mb-4" />
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-glow transition-colors">
              Garde-corps
            </h2>
            <p className="text-white/50 text-sm mb-4">
              Configurez votre garde-corps sur mesure en 3D : barreaudé, câbles, verre ou tôle.
            </p>
            <span className="inline-flex items-center gap-1 text-cyan-glow text-sm font-medium">
              Lancer le configurateur <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <div className="glass-card rounded-2xl p-8 opacity-40">
            <Box className="w-10 h-10 text-white/30 mb-4" />
            <h2 className="text-xl font-bold text-white/30 mb-2">Escalier</h2>
            <p className="text-white/20 text-sm mb-4">Bientôt disponible</p>
            <span className="text-white/20 text-sm">Phase 2</span>
          </div>

          <div className="glass-card rounded-2xl p-8 opacity-40">
            <Box className="w-10 h-10 text-white/30 mb-4" />
            <h2 className="text-xl font-bold text-white/30 mb-2">Portail</h2>
            <p className="text-white/20 text-sm mb-4">Bientôt disponible</p>
            <span className="text-white/20 text-sm">Phase 2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
