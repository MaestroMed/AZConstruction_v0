import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Compass, CheckCircle2, Ruler, Palette, FileText, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Métallerie pour architectes & bureaux d\'études | AZ Construction',
  description: 'Fabricant de métallerie sur mesure pour architectes en Île-de-France. Profilés Jansen, verrières, escaliers design. Plans d\'exécution, prototypage, coordination technique.',
  alternates: { canonical: 'https://azconstruction.fr/professionnels/architectes' },
}

const ATOUTS = [
  { icon: Ruler, title: 'Sur mesure absolu', desc: 'Aucune limite dimensionnelle. Chaque projet est unique, chaque pièce est fabriquée à vos cotes.' },
  { icon: Palette, title: 'Profilés Jansen', desc: 'Acier Jansen Steel Systems — finesse des profils impossible en aluminium.' },
  { icon: FileText, title: 'Plans d\'exécution', desc: 'Nous produisons les plans d\'exécution à partir de vos plans architecte.' },
  { icon: Eye, title: 'Prototypage', desc: 'Visite d\'atelier et prototypage pour valider les choix esthétiques et techniques.' },
]

export default function ArchitectesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-20 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
            <Link href="/" className="hover:text-white">Accueil</Link><span>›</span>
            <Link href="/professionnels" className="hover:text-white">Professionnels</Link><span>›</span>
            <span className="text-white">Architectes</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-card-glow mb-6">
              <Compass className="w-4 h-4 text-cyan-glow" />
              <span className="text-cyan-glow text-sm font-medium">Architectes & Bureaux d&apos;études</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Votre métallier partenaire pour des <span className="text-gradient-premium">projets d&apos;exception</span>
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Profilés Jansen, verrières XXL, escaliers sculpturaux — nous donnons forme à vos visions architecturales les plus ambitieuses.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-xl">
                Discuter de votre projet <ArrowRight className="w-4 h-4" />
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
            <span className="text-cyan-glow text-sm font-semibold uppercase tracking-wider">Notre valeur ajoutée</span>
            <h2 className="text-3xl font-bold text-white mt-2">Pourquoi les architectes nous choisissent</h2>
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
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl font-bold text-navy-dark mb-6 text-center">Produits pour l&apos;architecture</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'Verrières sur mesure', href: '/produits/verrieres', desc: 'Style atelier, XXL, avec ou sans ouvrant' },
              { name: 'Escaliers design', href: '/produits/escaliers', desc: 'Hélicoïdal, suspendu, limon central' },
              { name: 'Fenêtres acier Jansen', href: '/produits/fenetres', desc: 'Profilés fins, performances thermiques' },
              { name: 'Garde-corps architecturaux', href: '/produits/garde-corps', desc: 'Verre, câbles, tôle laser, barreaudage' },
              { name: 'Portes style atelier', href: '/produits/portes', desc: 'Acier vitré, pivot, coulissante' },
              { name: 'Pergolas acier', href: '/produits/pergolas', desc: 'Structures légères, bioclimatiques' },
            ].map(p => (
              <Link key={p.name} href={p.href} className="p-4 bg-gray-50 rounded-xl hover:shadow-md hover:border-blue-200 border border-transparent transition-all group">
                <h3 className="font-bold text-navy-dark group-hover:text-blue-corporate">{p.name}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-20" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4">Un projet architectural ?</h2>
          <p className="text-white/50 mb-8 max-w-xl mx-auto">Visite d&apos;atelier possible. Plans d&apos;exécution et prototypage sur demande.</p>
          <Link href="/contact" className="btn-glow inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-2xl text-lg">
            Prendre rendez-vous <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
