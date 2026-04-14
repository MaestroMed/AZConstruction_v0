import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Factory,
  Phone,
  Shield,
  Clock,
  Wrench,
  CheckCircle2,
  Star,
  FileText,
  Truck,
  Building2,
  Zap,
  HardHat,
} from 'lucide-react'
import { seoProducts, departments } from '@/data/seo'

export const metadata: Metadata = {
  title: 'Métallerie industrielle sur mesure | Usines, Entrepôts, ERP ',
  description:
    'Fabricant de métallerie industrielle sur mesure en Île-de-France. Garde-corps, escaliers, portails, grilles pour usines, entrepôts, sites industriels et ERP. Normes et conformité.',
  alternates: { canonical: 'https://azconstruction.fr/industriels' },
}

const SECTORS = [
  { icon: Factory, title: 'Sites industriels', desc: 'Usines, ateliers de production, zones de stockage' },
  { icon: Building2, title: 'Entrepôts & logistique', desc: 'Plateformes logistiques, centres de distribution' },
  { icon: HardHat, title: 'Collectivités & ERP', desc: 'Bâtiments publics, écoles, hôpitaux, gymnases' },
  { icon: Zap, title: 'Énergie & infrastructure', desc: 'Centrales, postes électriques, ouvrages d\'art' },
]

const GUARANTEES = [
  { icon: Shield, title: 'Conformité normative', desc: 'NF P01-012, ERP, code du travail, normes incendie' },
  { icon: Clock, title: 'Délais chantier', desc: 'Engagement contractuel sur les délais. Planning coordonné avec vos équipes.' },
  { icon: FileText, title: 'Documentation technique', desc: 'Plans d\'exécution, DOE, fiches techniques, PV d\'essai fournis.' },
  { icon: Truck, title: 'Livraison & pose', desc: 'Équipes qualifiées, PPSPS, habilitations. Intervention sur site en activité.' },
]

const PROCESS = [
  { step: '01', title: 'Étude technique', desc: 'Analyse de vos plans, contraintes site, normes applicables.' },
  { step: '02', title: 'Chiffrage détaillé', desc: 'Devis technique avec nomenclature, plans et planning.' },
  { step: '03', title: 'Fabrication atelier', desc: '1 800m² d\'atelier. Découpe, soudure, thermolaquage intégré.' },
  { step: '04', title: 'Pose sur site', desc: 'Intervention coordonnée, respect des consignes de sécurité site.' },
]

export default function IndustrielsPage() {
  const industrialProducts = seoProducts.filter(p => p.slug !== 'thermolaquage')

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-blue-corporate pt-32 pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Site industriel — métallerie sur mesure AZ Construction"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-glow/20 text-cyan-glow rounded-full text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              Industriels & Collectivités
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Métallerie industrielle{' '}
              <span className="text-cyan-glow">sur mesure</span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-2xl">
              AZ Construction conçoit, fabrique et installe des ouvrages métalliques conformes
              aux normes pour vos sites industriels, entrepôts et ERP en Île-de-France.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-glow text-navy-dark font-bold rounded-xl hover:bg-cyan-pale transition-colors"
              >
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0971357496"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" /> 09 71 35 74 96
              </a>
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {['Garantie décennale', 'Normes ERP', 'PPSPS fourni', 'Atelier 1 800m²'].map(badge => (
                <div key={badge} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-cyan-glow" />
                  <span className="text-white/80 text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Secteurs ──────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">
              Vos secteurs, notre expertise
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Nous intervenons sur tous types de sites industriels et collectifs en Île-de-France.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map(s => (
              <div key={s.title} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-7 h-7 text-blue-corporate" />
                </div>
                <h3 className="font-bold text-navy-dark mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Produits ──────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">
              Nos ouvrages métalliques industriels
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Chaque produit est dimensionné pour l&apos;environnement industriel : robustesse, conformité, durabilité.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrialProducts.map(p => (
              <Link
                key={p.slug}
                href={`/industriels/${p.slug}/${departments[0].slug}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:border-blue-200 transition-all group"
              >
                <h3 className="text-lg font-bold text-navy-dark mb-2 group-hover:text-blue-corporate transition-colors">
                  {p.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{p.features.join(' • ')}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-blue-corporate text-sm font-medium">
                    Voir par département <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">Sur devis</span>
                </div>
              </Link>
            ))}
            {/* Thermolaquage card */}
            <Link
              href="/services/thermolaquage"
              className="bg-gradient-to-br from-navy-dark to-blue-corporate rounded-2xl p-6 hover:shadow-lg transition-all group"
            >
              <Wrench className="w-8 h-8 text-cyan-glow mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Thermolaquage industriel</h3>
              <p className="text-white/60 text-sm mb-4">
                Peinture poudre époxy pour vos pièces métalliques. Enlèvement et livraison sur site.
              </p>
              <span className="inline-flex items-center gap-1 text-cyan-glow text-sm font-medium">
                Découvrir <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-3">
              Un processus industriel rigoureux
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              De l&apos;étude technique à la pose sur site, nous nous adaptons aux contraintes de votre environnement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((s, i) => (
              <div key={s.step} className="text-center">
                <div className="text-4xl font-black text-cyan-glow/20 mb-2">{s.step}</div>
                <h3 className="font-bold text-navy-dark mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
                {i < PROCESS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 w-8 h-px bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagements ───────────────────────────────── */}
      <section className="py-20 bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Nos engagements industriels
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              La rigueur d&apos;un process industriel au service de vos projets.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {GUARANTEES.map(g => (
              <div key={g.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <g.icon className="w-10 h-10 text-cyan-glow mx-auto mb-4" />
                <h3 className="font-bold text-white mb-2">{g.title}</h3>
                <p className="text-white/50 text-sm">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avis ──────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-3xl font-bold text-navy-dark mb-1">4.9 / 5</p>
          <p className="text-gray-400 text-sm mb-8">Basé sur 47 avis clients</p>
          <blockquote className="text-gray-600 text-lg italic mb-4">
            &quot;Intervention rapide et professionnelle sur notre site de production.
            Les garde-corps et escaliers sont parfaitement conformes aux normes.
            Équipe sérieuse, documentation technique complète.&quot;
          </blockquote>
          <p className="text-blue-corporate font-medium">— Responsable maintenance, site industriel Val-d&apos;Oise</p>
        </div>
      </section>

      {/* ── Départements ──────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-navy-dark mb-2 text-center">
            Intervention en Île-de-France & Oise
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Nos équipes interviennent sur vos sites dans tous ces départements.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {departments.map(dept => (
              <Link
                key={dept.slug}
                href={`/industriels/garde-corps/${dept.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <Factory className="w-5 h-5 text-cyan-glow flex-shrink-0" />
                <span className="font-semibold text-navy-dark group-hover:text-blue-corporate transition-colors">
                  {dept.fullName}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-blue-corporate to-navy-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Un projet de métallerie industrielle ?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
            Étude technique gratuite. Devis détaillé sous 48h. Intervention en Île-de-France.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-glow text-navy-dark font-bold rounded-2xl hover:bg-cyan-pale transition-colors text-lg"
            >
              Demander une étude technique <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:0971357496"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-2xl hover:bg-white/20 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" /> 09 71 35 74 96
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
