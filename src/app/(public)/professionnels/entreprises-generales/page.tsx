import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, HardHat, Shield, Clock, Wrench, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sous-traitance métallerie BTP | Entreprises générales ',
  description: 'Sous-traitant métallerie pour entreprises générales du BTP en Île-de-France. Garde-corps, escaliers, portails. Atelier 1800m², capacité lot complet, délais chantier.',
  alternates: { canonical: 'https://azconstruction.fr/professionnels/entreprises-generales' },
}

export default function EntreprisesGeneralesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-white">Accueil</Link><span>›</span>
            <Link href="/professionnels" className="hover:text-white">Professionnels</Link><span>›</span>
            <span className="text-white">Entreprises générales</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card-glow mb-6">
              <HardHat className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">Entreprises générales du BTP</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sous-traitant métallerie <span className="text-gradient-premium">fiable et réactif</span>
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Atelier de 1 800m² à Bruyères-sur-Oise. Capacité lot complet métallerie-serrurerie. Respect des délais chantier garanti.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-xl">
                Demander un chiffrage <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:0971357496" className="inline-flex items-center gap-2 px-6 py-3.5 glass-card text-white rounded-xl">
                <Phone className="w-4 h-4" /> 09 71 35 74 96
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wrench, title: 'Atelier 1 800m²', desc: 'Capacité industrielle pour lots complets.' },
              { icon: Clock, title: 'Réactivité', desc: 'Chiffrage sous 48h, mobilisation rapide.' },
              { icon: Shield, title: 'Décennale & PPSPS', desc: 'Assurance décennale, PPSPS fourni.' },
              { icon: Truck, title: 'Livraison phasée', desc: 'Coordination avec votre planning chantier.' },
            ].map(a => (
              <div key={a.title} className="glass-card rounded-2xl p-6 text-center">
                <a.icon className="w-10 h-10 text-cyan-glow mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">{a.title}</h3>
                <p className="text-white/50 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-navy-dark mb-6">Ils nous font confiance</h2>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Bouygues Construction', 'Spie Batignolles', 'Demathieu Bard', 'Rabot Dutilleul', 'Urbaine de Travaux'].map(n => (
              <span key={n} className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-600 border border-gray-200">{n}</span>
            ))}
          </div>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-2xl text-lg">
            Demander un chiffrage <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
