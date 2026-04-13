import type { SEOProduct, Department, Commune } from './types'

// Helper: location string
function loc(dept: Department, ville?: Commune): string {
  return ville ? ville.name : dept.fullName
}
function prep(ville?: Commune): string {
  return ville ? 'à' : 'en'
}

export const seoProducts: SEOProduct[] = [
  {
    slug: 'garde-corps',
    name: 'Garde-corps',
    namePlural: 'garde-corps',
    nameWithArticle: 'de garde-corps',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Garde-corps sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Garde-corps sur mesure ${d.fullName} | Fabricant Île-de-France | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant de garde-corps acier, verre et câbles sur mesure ${prep(v)} ${loc(d, v)}. Balcons, terrasses, escaliers. Norme NF P01-012. Devis gratuit sous 48h.`,
    heroTitle: (d, v) =>
      v
        ? `Garde-corps sur mesure à ${v.name}`
        : `Garde-corps sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Fabricant et installateur de garde-corps acier, verre et câbles ${prep(v)} ${loc(d, v)}. Fabrication dans nos ateliers de Bruyères-sur-Oise.`,
    introParagraph: (d, v) =>
      `Vous cherchez un fabricant de garde-corps sur mesure ${prep(v)} ${loc(d, v)} ? AZ Construction conçoit et installe des garde-corps en acier thermolaqué, verre feuilleté et câbles inox pour balcons, terrasses et escaliers. Tous nos garde-corps respectent la norme NF P01-012.`,
    ctaLabel: 'Demander un devis garde-corps',
    features: ['Norme NF P01-012', 'Garantie décennale', '8 modèles', '200+ couleurs RAL'],
    benefits: [
      'Fabrication dans nos ateliers de Bruyères-sur-Oise (95)',
      'Pose par nos équipes en Île-de-France',
      'Devis gratuit sous 48h',
      'Garantie décennale',
    ],
    variants: [
      { name: 'Garde-corps verre feuilleté', description: 'Transparence et élégance pour balcons et terrasses', href: '/produits/garde-corps' },
      { name: 'Garde-corps câbles', description: 'Design aérien, idéal pour les espaces contemporains', href: '/produits/garde-corps' },
      { name: 'Garde-corps barreaudé', description: 'Classique et robuste, barreaux verticaux acier', href: '/produits/garde-corps' },
      { name: 'Main courante', description: 'Rampe sur mesure pour escaliers et couloirs', href: '/produits/garde-corps' },
    ],
    faq: [
      { question: 'Quel est le prix d\'un garde-corps sur mesure ?', answer: 'Le prix dépend du matériau, de la longueur et du design. Contactez-nous pour un devis gratuit personnalisé.' },
      { question: 'Quelle norme pour les garde-corps ?', answer: 'Tous nos garde-corps respectent la norme NF P01-012 qui définit les hauteurs minimales et la résistance aux charges.' },
      { question: 'Quel délai pour un garde-corps sur mesure ?', answer: 'Comptez 3 à 5 semaines entre la validation du devis et la pose, selon la complexité du projet.' },
    ],
  },
  {
    slug: 'escaliers',
    name: 'Escaliers',
    namePlural: 'escaliers',
    nameWithArticle: "d'escaliers",
    preposition: "d'",
    metaTitle: (d, v) =>
      v
        ? `Escalier métal sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Escalier métal sur mesure ${d.fullName} | Fabricant | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant d'escaliers métal sur mesure ${prep(v)} ${loc(d, v)}. Hélicoïdal, droit, quart-tournant. Acier thermolaqué. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Escalier métal sur mesure à ${v.name}` : `Escalier métal sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Conception et fabrication d'escaliers acier sur mesure ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Besoin d'un escalier métal sur mesure ${prep(v)} ${loc(d, v)} ? AZ Construction fabrique des escaliers hélicoïdaux, droits et quart-tournant en acier thermolaqué. Chaque escalier est conçu sur mesure dans nos ateliers.`,
    ctaLabel: 'Demander un devis escalier',
    features: ['Sur mesure', 'Acier thermolaqué', '4 types', '200+ couleurs RAL'],
    benefits: ['Fabrication atelier Bruyères-sur-Oise', 'Pose en Île-de-France', 'Devis gratuit sous 48h', 'Garantie décennale'],
    variants: [
      { name: 'Escalier hélicoïdal', description: 'Gain de place, design sculptural', href: '/produits/escaliers' },
      { name: 'Escalier droit', description: 'Classique et fonctionnel', href: '/produits/escaliers' },
      { name: 'Escalier quart-tournant', description: 'Optimise les espaces en angle', href: '/produits/escaliers' },
      { name: 'Escalier suspendu', description: 'Effet flottant, design contemporain', href: '/produits/escaliers' },
    ],
    faq: [
      { question: 'Quel type d\'escalier métal choisir ?', answer: 'Le choix dépend de l\'espace disponible : hélicoïdal pour les petits espaces, droit ou quart-tournant pour les espaces classiques.' },
      { question: 'Quel est le délai de fabrication ?', answer: 'Comptez 4 à 6 semaines entre la validation des plans et la livraison/pose.' },
    ],
  },
  {
    slug: 'portails',
    name: 'Portails',
    namePlural: 'portails',
    nameWithArticle: 'de portails',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Portail sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Portail sur mesure ${d.fullName} | Fabricant | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant de portails acier et aluminium sur mesure ${prep(v)} ${loc(d, v)}. Battant, coulissant, autoportant. Motorisation possible. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Portail sur mesure à ${v.name}` : `Portail sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Portails acier et aluminium fabriqués sur mesure ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Vous recherchez un portail sur mesure ${prep(v)} ${loc(d, v)} ? AZ Construction fabrique des portails battants, coulissants et autoportants en acier thermolaqué. Motorisation et automatisation disponibles.`,
    ctaLabel: 'Demander un devis portail',
    features: ['Battant & coulissant', 'Motorisation', 'Acier thermolaqué', '200+ couleurs'],
    benefits: ['Fabrication atelier', 'Pose en Île-de-France', 'Devis gratuit sous 48h', 'Garantie décennale'],
    variants: [
      { name: 'Portail battant', description: 'Ouverture classique, 1 ou 2 vantaux', href: '/produits/portails' },
      { name: 'Portail coulissant', description: 'Idéal pour les entrées étroites', href: '/produits/portails' },
      { name: 'Portail autoportant', description: 'Sans rail au sol, finition épurée', href: '/produits/portails' },
      { name: 'Portillon', description: 'Accès piéton assorti au portail', href: '/produits/portails' },
    ],
    faq: [
      { question: 'Portail battant ou coulissant ?', answer: 'Le portail coulissant est idéal si vous manquez de recul devant l\'entrée. Le battant convient aux entrées larges.' },
      { question: 'La motorisation est-elle incluse ?', answer: 'La motorisation est en option. Nous installons des moteurs compatibles avec tous nos portails.' },
    ],
  },
  {
    slug: 'clotures',
    name: 'Clôtures',
    namePlural: 'clôtures',
    nameWithArticle: 'de clôtures',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Clôture sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Clôture sur mesure ${d.fullName} | Fabricant | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant de clôtures acier sur mesure ${prep(v)} ${loc(d, v)}. Barreaudée, grillagée, à lames. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Clôture sur mesure à ${v.name}` : `Clôture sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Clôtures acier thermolaqué fabriquées sur mesure ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Besoin d'une clôture sur mesure ${prep(v)} ${loc(d, v)} ? AZ Construction fabrique des clôtures barreaudées, grillagées et à lames en acier thermolaqué pour sécuriser et embellir votre propriété.`,
    ctaLabel: 'Demander un devis clôture',
    features: ['Barreaudée & grillagée', 'Acier thermolaqué', 'Sur mesure', '200+ couleurs'],
    benefits: ['Fabrication atelier', 'Pose en Île-de-France', 'Devis gratuit sous 48h', 'Garantie décennale'],
    variants: [
      { name: 'Clôture barreaudée', description: 'Classique et sécurisante', href: '/produits/clotures' },
      { name: 'Clôture grillagée', description: 'Économique et fonctionnelle', href: '/produits/clotures' },
      { name: 'Clôture à lames', description: 'Occultante, design moderne', href: '/produits/clotures' },
      { name: 'Clôture décorative', description: 'Motifs personnalisés', href: '/produits/clotures' },
    ],
    faq: [
      { question: 'Quelle hauteur pour une clôture ?', answer: 'La hauteur dépend de la réglementation locale (PLU). En général, 1,50m à 2m pour une clôture résidentielle.' },
    ],
  },
  {
    slug: 'portes',
    name: 'Portes',
    namePlural: 'portes',
    nameWithArticle: 'de portes',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Porte métal sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Porte métal sur mesure ${d.fullName} | Fabricant | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant de portes métal sur mesure ${prep(v)} ${loc(d, v)}. Porte de hall, SAS, tôlée, coupe-feu, atelier. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Porte métal sur mesure à ${v.name}` : `Porte métal sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Portes métal fabriquées sur mesure ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Besoin d'une porte métal sur mesure ${prep(v)} ${loc(d, v)} ? AZ Construction fabrique des portes de hall, SAS, tôlées, coupe-feu et style atelier en acier thermolaqué.`,
    ctaLabel: 'Demander un devis porte',
    features: ['Hall & SAS', 'Coupe-feu', 'Style atelier', '200+ couleurs RAL'],
    benefits: ['Fabrication atelier', 'Pose en Île-de-France', 'Devis gratuit sous 48h', 'Garantie décennale'],
    variants: [
      { name: 'Porte de hall / SAS', description: 'Entrée d\'immeuble sécurisée', href: '/produits/portes' },
      { name: 'Porte tôlée', description: 'Robuste, 1 ou 2 vantaux', href: '/produits/portes' },
      { name: 'Porte style atelier', description: 'Vitrage et acier noir', href: '/produits/portes' },
      { name: 'Porte coupe-feu', description: 'Certification EI30/EI60', href: '/produits/portes' },
    ],
    faq: [
      { question: 'Quelles certifications pour les portes coupe-feu ?', answer: 'Nos portes coupe-feu sont certifiées EI30 et EI60 selon les normes européennes en vigueur.' },
    ],
  },
]
