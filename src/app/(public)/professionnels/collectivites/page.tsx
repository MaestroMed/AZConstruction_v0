import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Landmark, Shield, FileText, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Métallerie pour collectivités & ERP ',
  description: 'Fabricant de métallerie pour collectivités, bâtiments publics et ERP en Île-de-France. Garde-corps, escaliers, grilles. Normes ERP, accessibilité PMR, marchés publics.',
  alternates: { canonical: 'https://azconstruction.fr/professionnels/collectivites' },
}

export default function CollectivitesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-white">Accueil</Link><span>›</span>
            <Link href="/professionnels" className="hover:text-white">Professionnels</Link><span>›</span>
            <span className="text-white">Collectivités & ERP</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card-glow mb-6">
              <Landmark className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">Collectivités & ERP</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Métallerie conforme pour <span className="text-gradient-premium">bâtiments publics</span>
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Écoles, gymnases, hôpitaux, mairies — ouvrages métalliques aux normes ERP et accessibilité PMR.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-xl">
                Répondre à un appel d&apos;offres <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:0971357496" className="inline-flex items-center gap-2 px-6 py-3.5 glass-card text-white rounded-xl">
                <Phone className="w-4 h-4" /> 09 71 35 74 96
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: 'Normes ERP', desc: 'Garde-corps et escaliers conformes aux réglementations ERP (types 1 à 5).' },
              { icon: CheckCircle2, title: 'Accessibilité PMR', desc: 'Rampes, mains courantes et garde-corps accessibles aux personnes à mobilité réduite.' },
              { icon: FileText, title: 'Marchés publics', desc: 'Expérience des procédures MAPA et AO. Documentation complète fournie.' },
            ].map(a => (
              <div key={a.title} className="text-center p-6 bg-gray-50 rounded-2xl">
                <a.icon className="w-10 h-10 text-blue-corporate mx-auto mb-4" />
                <h3 className="font-bold text-navy-dark mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Un projet de bâtiment public ?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Étude technique gratuite. Chiffrage conforme aux exigences des marchés publics.</p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-2xl text-lg">
            Nous contacter <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
