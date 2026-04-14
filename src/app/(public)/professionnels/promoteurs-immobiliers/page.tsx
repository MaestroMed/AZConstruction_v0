import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Building2, CheckCircle2, Shield, Clock, FileText, Truck } from 'lucide-react'
import { departments } from '@/data/seo'

export const metadata: Metadata = {
  title: 'Métallerie pour promoteurs immobiliers ',
  description: 'Fabricant de métallerie sur mesure pour promoteurs immobiliers en Île-de-France. Garde-corps, escaliers, portails pour programmes neufs. Délais chantier, documentation technique, garantie décennale.',
  alternates: { canonical: 'https://azconstruction.fr/professionnels/promoteurs-immobiliers' },
}

const ATOUTS = [
  { icon: Shield, title: 'Conformité garantie', desc: 'NF P01-012, DTU, ERP — documentation technique complète fournie.' },
  { icon: Clock, title: 'Respect du planning', desc: 'Engagement contractuel sur les délais, coordination avec vos autres lots.' },
  { icon: FileText, title: 'DOE complet', desc: 'Plans d\'exécution, fiches techniques, PV d\'essai, certificats de conformité.' },
  { icon: Truck, title: 'Livraison phasée', desc: 'Livraisons par lot et par bâtiment selon votre avancement chantier.' },
]

export default function PromoteursPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-white">Accueil</Link><span>›</span>
            <Link href="/professionnels" className="hover:text-white">Professionnels</Link><span>›</span>
            <span className="text-white">Promoteurs immobiliers</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card-glow mb-6">
              <Building2 className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">Promoteurs immobiliers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Métallerie sur mesure pour vos <span className="text-gradient-premium">programmes neufs</span>
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Garde-corps, escaliers, portails, clôtures — fabriqués dans notre atelier de 1 800m² et livrés selon votre planning chantier en Île-de-France.
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
          <div className="text-center mb-12">
            <span className="text-cyan-glow text-sm font-semibold uppercase tracking-wider">Nos engagements</span>
            <h2 className="text-3xl font-bold text-white mt-2">Ce que nous apportons à vos opérations</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ATOUTS.map(a => (
              <div key={a.title} className="glass-card rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-2xl glass-card-glow flex items-center justify-center mx-auto mb-4">
                  <a.icon className="w-6 h-6 text-cyan-glow" />
                </div>
                <h3 className="font-bold text-white mb-2">{a.title}</h3>
                <p className="text-white/50 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-dark mb-3 text-center">Produits pour programmes immobiliers</h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">Tous nos ouvrages sont fabriqués aux normes et livrés avec documentation technique complète.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['garde-corps', 'escaliers', 'portails', 'clotures', 'portes', 'grilles-ventilation'].map(slug => (
              <Link key={slug} href={`/professionnels/${slug}/${departments[0].slug}`}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all group border border-transparent hover:border-blue-200">
                <h3 className="font-bold text-navy-dark mb-2 group-hover:text-blue-corporate capitalize">{slug.replace('-', ' ')}</h3>
                <span className="text-blue-corporate text-sm font-medium inline-flex items-center gap-1">
                  Voir les solutions <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-navy-dark mb-8">Références promoteurs</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Bouygues Construction', 'Demathieu Bard', 'Spie Batignolles', 'Rabot Dutilleul', 'VINCI'].map(name => (
              <span key={name} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-600 border border-gray-200">{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Un programme immobilier en IDF ?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Chiffrage détaillé sous 48h. Plans techniques et planning adaptés à votre opération.</p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-2xl text-lg">
            Demander un chiffrage <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
