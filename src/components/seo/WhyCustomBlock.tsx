import Link from 'next/link'
import { ArrowRight, Wrench, Ruler, Award } from 'lucide-react'
import type { Department, Commune, SEOProduct } from '@/data/seo/types'

interface Props {
  product: SEOProduct
  dept: Department
  commune?: Commune
}

export function WhyCustomBlock({ product, dept, commune }: Props) {
  const locationName = commune ? commune.name : dept.fullName
  const prepLoc = commune ? 'à' : 'en'
  const productLabel = product.namePlural

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Editorial column */}
          <div className="lg:col-span-7">
            <span className="text-blue-corporate text-sm font-semibold uppercase tracking-wider">
              Pourquoi du sur mesure ?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-2 mb-6 leading-tight">
              Parce qu'un {product.name.toLowerCase().replace(/s$/, '')} de catalogue, ça finit{' '}
              <span className="text-blue-corporate">toujours par coincer.</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Le standard, c'est une bonne idée — sur le papier. Dans la vraie vie, vos murs ne sont jamais
                droits, vos ouvertures jamais aux cotes officielles, et votre besoin précis n'entre dans aucune
                case. C'est précisément pour ça qu'on travaille sur mesure : on prend les vraies dimensions, on
                écoute la vraie demande, et on fabrique exactement ce qu'il faut.
              </p>
              <p>
                Notre atelier de 1&nbsp;800&nbsp;m² à Bruyères-sur-Oise (95) est outillé pour ça. Cisailles,
                presses plieuses, postes MIG/TIG, four de polymérisation 6&nbsp;mètres :{' '}
                <Link href="/services/thermolaquage" className="text-blue-corporate hover:underline font-medium">
                  on soude, on plie, on thermolaque
                </Link>{' '}
                tout sous le même toit. Pas de sous-traitance qui rallonge les délais et dilue la responsabilité.
              </p>
              <p>
                Concrètement, pour vos {productLabel} {prepLoc} {locationName}, ça veut dire :
                un métré sur place, un devis chiffré sous 48&nbsp;h, une fabrication maîtrisée bout en bout, et une
                pose par notre équipe interne — pas des intérimaires recrutés la veille. Et si quelque chose
                bouge avec le temps, le SAV décroche directement à l'atelier.
              </p>
            </div>
            <Link
              href="/realisations"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-navy-dark/5 text-navy-dark font-semibold rounded-xl hover:bg-navy-dark/10 transition-colors group"
            >
              Voir nos derniers chantiers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Three-pillar visual */}
          <div className="lg:col-span-5">
            <div className="space-y-3">
              {[
                {
                  icon: Ruler,
                  title: 'On mesure chez vous',
                  desc: "Métré gratuit sur site. Pas de mauvaise surprise une fois la fabrication lancée.",
                },
                {
                  icon: Wrench,
                  title: 'On fabrique nous-mêmes',
                  desc: 'Soudure MIG/TIG, pliage, thermolaquage. Tout dans nos murs.',
                },
                {
                  icon: Award,
                  title: 'On signe ce qu\'on pose',
                  desc: 'Décennale, SAV à l\'atelier, et la fierté de bien faire son boulot.',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-corporate/10 to-cyan-glow/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-blue-corporate" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-dark mb-1">{p.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
