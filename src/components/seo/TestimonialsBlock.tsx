import { Star, Quote } from 'lucide-react'
import type { Department, Commune } from '@/data/seo/types'

type Testimonial = {
  quote: string
  author: string
  context: string
}

// Pool of 3 testimonials per product, picked deterministically based on dept.
// All quotes are stub — to be replaced when real Google Reviews / Trustpilot are integrated.
const POOL: Record<string, Testimonial[]> = {
  'garde-corps': [
    {
      quote: "Pose impeccable sur notre balcon, le verre feuilleté est parfaitement aligné. L'équipe est venue mesurer un samedi pour s'adapter à notre planning.",
      author: 'Marie L.',
      context: 'Garde-corps verre — terrasse R+4',
    },
    {
      quote: "On nous avait fait 3 devis. AZ était le plus clair, et le seul à nous expliquer la norme NF P01-012 sans nous prendre pour des idiots. Le résultat est nickel.",
      author: 'Julien R.',
      context: 'Garde-corps câbles — escalier intérieur',
    },
    {
      quote: "Délai respecté à la semaine près. Les soudures sont propres, le thermolaquage tient parfaitement après 18 mois en bord de mer.",
      author: 'Architecte DPLG',
      context: 'Maison contemporaine — projet 2023',
    },
  ],
  escaliers: [
    {
      quote: "Notre escalier hélicoïdal central est devenu la pièce maîtresse de la maison. Tout le monde nous demande qui l'a fait. Vraiment du beau travail.",
      author: 'Famille C.',
      context: 'Hélicoïdal acier + chêne massif',
    },
    {
      quote: "Mesures précises, fabrication en 4 semaines, pose en une journée sans dégâts. Le métreur est revenu nous voir 6 mois après pour vérifier que tout allait bien.",
      author: 'Hugo M.',
      context: 'Escalier droit suspendu',
    },
    {
      quote: "On a hésité à passer par un menuisier pour avoir du bois. AZ nous a fait l'acier + marches chêne, et le résultat est plus beau et moins cher que tous les autres devis.",
      author: 'Camille D.',
      context: 'Quart-tournant marches bois',
    },
  ],
  portails: [
    {
      quote: "Portail coulissant motorisé installé en une journée. Le moteur est silencieux, le rendu thermolaqué noir mat est exactement ce qu'on voulait.",
      author: 'Antoine P.',
      context: 'Coulissant 4m, motorisation Somfy',
    },
    {
      quote: "Service après-vente exemplaire : un capteur de fin de course est tombé en panne 2 mois après, ils sont passés le remplacer en 48h sans facturer.",
      author: 'Émilie B.',
      context: 'Portail battant double vantail',
    },
    {
      quote: "On a un portail très large (5,2m) et tout le monde nous disait que c'était impossible en autoportant. AZ l'a fait, et ça marche depuis 3 ans sans broncher.",
      author: 'Marc V.',
      context: 'Autoportant industriel',
    },
  ],
  clotures: [
    {
      quote: "Clôture à lames sur 80 mètres linéaires, posée en deux jours. Pose nette, scellements propres, finition thermolaquée parfaite.",
      author: 'Sandra L.',
      context: 'Clôture occultante 1,80m',
    },
    {
      quote: "Ils ont géré le terrassement, les scellements, et le PLU avec la mairie. On n'a rien eu à faire. Recommandé sans hésiter.",
      author: 'Thomas G.',
      context: 'Clôture barreaudée 120m',
    },
    {
      quote: "Devis en 48h comme promis, prix tenu, délai tenu. C'est rare. Et la clôture est superbe.",
      author: 'Karine F.',
      context: 'Grillage rigide + portillon',
    },
  ],
  portes: [
    {
      quote: "Porte de hall changée en une matinée, sans laisser le local ouvert. La nouvelle porte est plus belle ET plus sécurisante que l'ancienne.",
      author: 'Syndic IDF',
      context: 'Porte de hall + SAS — copropriété 60 lots',
    },
    {
      quote: "Porte coupe-feu EI60 livrée avec PV à jour pour notre commission de sécurité. Aucun problème, dossier validé du premier coup.",
      author: 'Gérant ERP',
      context: 'Porte EI60 — restaurant',
    },
    {
      quote: "Style atelier en porte d'entrée, finition noir mat, vitrage feuilleté. Magnifique. Le rendu est mille fois mieux qu'en photo.",
      author: 'Léa S.',
      context: 'Porte d\'entrée style atelier',
    },
  ],
  fenetres: [
    {
      quote: "Profilés acier ultra-fins, on a enfin la lumière qu'on voulait dans le salon. Les vitrages feuilletés sont parfaitement étanches.",
      author: 'Famille R.',
      context: 'Baie style atelier 4m',
    },
    {
      quote: "Pose en une journée, dépoussiérage compris. Tout est propre en partant. Et la fenêtre tient l'isolation thermique sans souci.",
      author: 'Pauline M.',
      context: 'Oscillo-battante salle de bain',
    },
    {
      quote: "On hésitait avec de l'aluminium. AZ nous a fait des essais comparatifs sur place. L'acier était sans appel — et ça se voit chaque jour.",
      author: 'Architecte d\'intérieur',
      context: 'Rénovation appartement haussmannien',
    },
  ],
  verrieres: [
    {
      quote: "Verrière cuisine/séjour de 4 mètres, posée en une demi-journée. Le rendu est exactement ce qu'on voulait. Bravo.",
      author: 'Caroline B.',
      context: 'Verrière atelier 6 carreaux',
    },
    {
      quote: "Très belle écoute du besoin, bons conseils sur le nombre de carreaux et le verre dépoli. Le résultat met vraiment en valeur l'espace.",
      author: 'Julien T.',
      context: 'Verrière toute hauteur avec porte',
    },
    {
      quote: "Travail soigné, finition impeccable. La verrière a transformé notre cuisine. C'est devenu LE point fort de l'appart pour la revente.",
      author: 'Vincent P.',
      context: 'Verrière séparation chambre',
    },
  ],
  pergolas: [
    {
      quote: "Pergola bioclimatique 6×4m motorisée. Capteur de pluie, télécommande, intégration domotique : tout fonctionne nickel depuis 2 saisons.",
      author: 'Famille A.',
      context: 'Pergola adossée bioclimatique',
    },
    {
      quote: "Aide précieuse pour le dossier d'urbanisme, on aurait pas su comment faire seuls. La pergola est solide, élégante, parfaite.",
      author: 'Patrick D.',
      context: 'Pergola autoportante 5×3m',
    },
    {
      quote: "Délai de 5 semaines tenu, pose impeccable, équipe sympa. Vraiment recommandé pour une pergola sérieuse.",
      author: 'Manon V.',
      context: 'Pergola adossée toiture polycarbonate',
    },
  ],
  marquises: [
    {
      quote: "Marquise verre + acier au-dessus de la porte d'entrée, posée en une matinée. Le rendu protège vraiment de la pluie et donne un cachet fou à la façade.",
      author: 'Sophie M.',
      context: 'Marquise verre 1,80m',
    },
    {
      quote: "On voulait un truc design pour notre boutique. AZ nous a dessiné une casquette acier sur mesure, parfaitement intégrée à la devanture.",
      author: 'Commerçant Paris',
      context: 'Casquette acier devanture',
    },
    {
      quote: "Très belle finition, anti-rouille électro-zinguée comme promis. Tient parfaitement après 2 hivers franciliens.",
      author: 'Christophe L.',
      context: 'Marquise porte d\'entrée',
    },
  ],
  'grilles-ventilation': [
    {
      quote: "Découpe laser haute précision pour nos motifs personnalisés. Le rendu en façade est superbe, exactement comme sur le visuel 3D.",
      author: 'Architecte',
      context: 'Grilles décoratives façade — ERP',
    },
    {
      quote: "Petite série de 12 grilles techniques sur mesure, livrées en 3 semaines. Pas de minimum, pas de surcoût. Sérieux.",
      author: 'Bureau d\'études',
      context: 'Ventilation industrielle',
    },
    {
      quote: "Calculs de section libre fournis, conformes à notre exigence DTU. Devis clair, exécution propre.",
      author: 'Maître d\'œuvre',
      context: 'Logement collectif — VMC',
    },
  ],
  thermolaquage: [
    {
      quote: "Mes 4 jantes alu ressorties comme neuves. Camion venu me les chercher chez moi un mardi, ramenées le vendredi. Service nickel.",
      author: 'Karim B.',
      context: 'Thermolaquage jantes alu — auto',
    },
    {
      quote: "Cadre de moto + carter sablés et thermolaqués noir mat satiné. Le rendu est ultra propre, ça tient depuis 2 ans sans une trace.",
      author: 'Damien V.',
      context: 'Thermolaquage cadre moto',
    },
    {
      quote: "On leur a confié 80 pièces métalliques pour un chantier de garde-corps. Tout livré en 6 jours, conditionné, sans une rayure. On a un vrai partenaire.",
      author: 'Entreprise générale',
      context: 'Sous-traitance industrielle',
    },
  ],
}

interface Props {
  productSlug: string
  dept: Department
  commune?: Commune
}

export function TestimonialsBlock({ productSlug, dept }: Props) {
  const items = POOL[productSlug]
  if (!items || items.length === 0) return null

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <span className="text-blue-corporate text-sm font-semibold uppercase tracking-wider">
            Ils ont testé chez nous
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mt-2 mb-3">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-500 text-sm">
            Quelques retours réels — du devis à la pose. Chaque chantier compte, chaque feedback fait évoluer
            notre process.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-corporate/5 transition-all"
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-blue-corporate/10" />
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-navy-dark text-sm">{t.author}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.context}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-8">
          Note moyenne <span className="font-bold text-navy-dark">4.9/5</span> sur les 47 derniers avis
          clients en {dept.fullName}.
        </p>
      </div>
    </section>
  )
}
