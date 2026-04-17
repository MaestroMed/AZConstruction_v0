import type { SEOProduct, Department, Commune } from './types'

function loc(dept: Department, ville?: Commune): string {
  return ville ? ville.name : dept.fullName
}
function prep(ville?: Commune): string {
  return ville ? 'à' : 'en'
}

export const seoProductsPart2: SEOProduct[] = [
  {
    slug: 'fenetres',
    name: 'Fenêtres',
    namePlural: 'fenêtres',
    nameWithArticle: 'de fenêtres',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Fenêtre acier sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Fenêtre acier sur mesure ${d.fullName} | Fabricant | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant de fenêtres acier sur mesure ${prep(v)} ${loc(d, v)}. Fixe, oscillo-battante, style atelier, baie vitrée. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Fenêtre acier sur mesure à ${v.name}` : `Fenêtre acier sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Fenêtres acier fabriquées sur mesure ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Vous cherchez des fenêtres acier sur mesure ${prep(v)} ${loc(d, v)} ? AZ Construction fabrique des fenêtres fixes, oscillo-battantes et style atelier en acier thermolaqué.`,
    ctaLabel: 'Demander un devis fenêtre',
    features: ['Style atelier', 'Oscillo-battante', 'Acier thermolaqué', '200+ couleurs'],
    benefits: [
      'Profils acier 40 mm assemblés à l\'atelier, vitrage feuilleté monté sur place',
      'Style atelier authentique — pas de l\'aluminium qui imite, du vrai acier soudé',
      'Métré gratuit, devis chiffré sous 48 h avec rendu 3D si besoin',
      'Décennale + garantie 10 ans sur l\'étanchéité des joints',
    ],
    variants: [
      { name: 'Fenêtre fixe', description: 'Luminosité maximale sans ouverture', href: '/produits/fenetres' },
      { name: 'Fenêtre oscillo-battante', description: 'Ventilation et ouverture complète', href: '/produits/fenetres' },
      { name: 'Fenêtre atelier', description: 'Style industriel, petits carreaux acier', href: '/produits/fenetres' },
      { name: 'Baie vitrée', description: 'Grande ouverture sur l\'extérieur', href: '/produits/fenetres' },
    ],
    faq: [
      { question: 'Fenêtre acier ou aluminium ?', answer: 'L\'acier offre des profilés plus fins et un style industriel authentique. L\'aluminium est plus léger mais moins caractéristique.' },
    ],
  },
  {
    slug: 'verrieres',
    name: 'Verrières',
    namePlural: 'verrières',
    nameWithArticle: 'de verrières',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Verrière sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Verrière sur mesure ${d.fullName} | Fabricant | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant de verrières intérieures sur mesure ${prep(v)} ${loc(d, v)}. Style atelier, acier et verre. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Verrière sur mesure à ${v.name}` : `Verrière sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Verrières intérieures style atelier fabriquées sur mesure ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Envie d'une verrière intérieure ${prep(v)} ${loc(d, v)} ? AZ Construction crée des verrières style atelier en acier et verre pour séparer vos espaces tout en laissant passer la lumière.`,
    ctaLabel: 'Demander un devis verrière',
    features: ['Style atelier', 'Acier & verre', 'Sur mesure', '200+ couleurs'],
    benefits: [
      'Cadre acier soudé sur-mesure, verre feuilleté 44.2 (8 mm) sécurité posé à l\'atelier',
      'Pose en une demi-journée chez vous, dépoussiérage compris — on laisse propre',
      'Choix entre 6 trames (carreaux 30×60, 30×80…) avec rendu 3D avant validation',
      'Atelier à Bruyères-sur-Oise (95) — équipe interne, jamais d\'intérimaires',
    ],
    variants: [
      { name: 'Verrière fixe', description: 'Cloison vitrée sans ouverture', href: '/produits/verrieres' },
      { name: 'Verrière avec porte', description: 'Cloison vitrée avec accès', href: '/produits/verrieres' },
      { name: 'Verrière toute hauteur', description: 'Du sol au plafond', href: '/produits/verrieres' },
      { name: 'Verrière cuisine', description: 'Séparation cuisine/séjour', href: '/produits/verrieres' },
    ],
    faq: [
      { question: 'Quel verre pour une verrière intérieure ?', answer: 'Nous utilisons du verre feuilleté de sécurité 44.2 (8mm). Transparent, dépoli ou texturé selon vos préférences.' },
    ],
  },
  {
    slug: 'pergolas',
    name: 'Pergolas',
    namePlural: 'pergolas',
    nameWithArticle: 'de pergolas',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Pergola acier sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Pergola acier sur mesure ${d.fullName} | Fabricant | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant de pergolas acier sur mesure ${prep(v)} ${loc(d, v)}. Bioclimatique, adossée, autoportante. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Pergola sur mesure à ${v.name}` : `Pergola sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Pergolas acier fabriquées sur mesure ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Vous souhaitez une pergola sur mesure ${prep(v)} ${loc(d, v)} ? AZ Construction conçoit des pergolas en acier thermolaqué, bioclimatiques ou classiques, pour terrasses et jardins.`,
    ctaLabel: 'Demander un devis pergola',
    features: ['Bioclimatique', 'Acier thermolaqué', 'Motorisation', '200+ couleurs'],
    benefits: [
      'Structure acier dimensionnée pour la neige + vent IDF (calcul fournis si DP)',
      'Lames orientables motorisées (Somfy/Nice) — domotique compatible Alexa/Google',
      'Pose en une journée pour les modèles standards, scellement chimique inclus',
      'Aide DP/PC : on prépare votre dossier urbanisme gratuitement sur demande',
    ],
    variants: [
      { name: 'Pergola bioclimatique', description: 'Lames orientables motorisées', href: '/produits/pergolas' },
      { name: 'Pergola adossée', description: 'Fixée contre la façade', href: '/produits/pergolas' },
    ],
    faq: [
      { question: 'Faut-il un permis de construire ?', answer: 'Une pergola de moins de 20m² nécessite une déclaration préalable. Au-delà, un permis de construire est requis.' },
    ],
  },
  {
    slug: 'marquises',
    name: 'Marquises',
    namePlural: 'marquises',
    nameWithArticle: 'de marquises',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Marquise sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Marquise sur mesure ${d.fullName} | Fabricant | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant de marquises et auvents sur mesure ${prep(v)} ${loc(d, v)}. Verre, acier, design. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Marquise sur mesure à ${v.name}` : `Marquise sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Marquises et auvents acier fabriqués sur mesure ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Besoin d'une marquise ${prep(v)} ${loc(d, v)} ? AZ Construction fabrique des marquises et auvents en acier et verre pour protéger vos entrées avec élégance.`,
    ctaLabel: 'Demander un devis marquise',
    features: ['Verre & acier', 'Design moderne', 'Sur mesure', '200+ couleurs'],
    benefits: [
      'Châssis acier soudé + verre feuilleté 44.2 — étanche et sécurisé',
      'Fixation copropriété acceptée : on fournit la note de calcul pour votre AG',
      'Pose en demi-journée, échafaudage léger compris',
      'Décennale + traitement anti-rouille électro-zingué, pas juste de la peinture',
    ],
    variants: [
      { name: 'Marquise porte d\'entrée', description: 'Protection élégante', href: '/produits/marquises' },
      { name: 'Marquise verre', description: 'Transparence et modernité', href: '/produits/marquises' },
      { name: 'Casquette acier', description: 'Style contemporain épuré', href: '/produits/marquises' },
    ],
    faq: [
      { question: 'Quelle taille pour une marquise ?', answer: 'Une marquise doit dépasser de 40 à 80cm de chaque côté de la porte pour une protection efficace.' },
    ],
  },
  {
    slug: 'grilles-ventilation',
    name: 'Grilles de ventilation',
    namePlural: 'grilles de ventilation',
    nameWithArticle: 'de grilles de ventilation',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Grille de ventilation sur mesure ${v.name} (${d.code}) | AZ Construction`
        : `Grille de ventilation sur mesure ${d.fullName} | AZ Construction`,
    metaDescription: (d, v) =>
      `Fabricant de grilles de ventilation acier sur mesure ${prep(v)} ${loc(d, v)}. Techniques et décoratives. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Grilles de ventilation à ${v.name}` : `Grilles de ventilation ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Grilles de ventilation acier fabriquées sur mesure ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Besoin de grilles de ventilation sur mesure ${prep(v)} ${loc(d, v)} ? AZ Construction fabrique des grilles techniques et décoratives en acier thermolaqué pour bâtiments résidentiels et industriels.`,
    ctaLabel: 'Demander un devis grille',
    features: ['Technique & décorative', 'Acier thermolaqué', 'Sur mesure', 'Normes ventilation'],
    benefits: [
      'Découpe laser haute précision + pliage — vos motifs personnalisés réalisés à l\'unité',
      'Calculs de section libre fournis pour respecter les normes ventilation (DTU 68.3)',
      'Fixation par cadre alu ou directement vissé — on s\'adapte au support',
      'Petites séries acceptées (1 à 50 pièces) — pas de minimum de commande',
    ],
    variants: [
      { name: 'Grille décorative', description: 'Design soigné pour façades', href: '/produits/grilles-ventilation' },
      { name: 'Grille technique', description: 'Ventilation industrielle', href: '/produits/grilles-ventilation' },
      { name: 'Caillebotis', description: 'Passage d\'air et drainage', href: '/produits/grilles-ventilation' },
    ],
    faq: [
      { question: 'Grille avec ou sans moustiquaire ?', answer: 'Nous proposons des grilles avec moustiquaire intégrée en option pour empêcher l\'intrusion d\'insectes.' },
    ],
  },
  {
    slug: 'thermolaquage',
    name: 'Thermolaquage',
    namePlural: 'prestations de thermolaquage',
    nameWithArticle: 'de thermolaquage',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Thermolaquage ${v.name} (${d.code}) | AZ Construction`
        : `Thermolaquage ${d.fullName} | Livraison & Enlèvement | AZ Construction`,
    metaDescription: (d, v) =>
      `Thermolaquage professionnel ${prep(v)} ${loc(d, v)}. Peinture poudre époxy sur métal. Enlèvement et livraison. 200+ couleurs RAL. Devis gratuit.`,
    heroTitle: (d, v) =>
      v ? `Thermolaquage à ${v.name}` : `Thermolaquage ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Service de thermolaquage professionnel ${prep(v)} ${loc(d, v)}. Enlèvement et livraison gratuits.`,
    introParagraph: (d, v) =>
      `Besoin d'un service de thermolaquage ${prep(v)} ${loc(d, v)} ? AZ Construction propose le thermolaquage (peinture poudre époxy) de toutes pièces métalliques. Enlèvement gratuit, 200+ couleurs RAL, délai 5 à 7 jours.`,
    ctaLabel: 'Demander un devis thermolaquage',
    features: ['200+ couleurs RAL', 'Enlèvement gratuit', 'Délai 5-7 jours', 'Garantie 10 ans'],
    benefits: [
      'Notre camion vient chercher vos pièces partout en Île-de-France — calage compris',
      'Sablage + dégraissage + couche d\'accroche + cuisson 200°C, le vrai process pro',
      '200+ teintes RAL en stock + collections premium Adapta sur commande',
      'Tenue 10 ans anti-UV/anti-corrosion — pas de la peinture qui s\'écaille au bout de 2 ans',
    ],
    variants: [
      { name: 'Thermolaquage jantes', description: 'Rénovation jantes auto/moto', href: '/services/thermolaquage/jantes' },
      { name: 'Thermolaquage moto', description: 'Cadres, réservoirs, pièces moto', href: '/services/thermolaquage/moto-art' },
      { name: 'Rénovation voiture', description: 'Pièces automobiles', href: '/services/thermolaquage/renovation-voiture' },
      { name: 'Pièces métalliques', description: 'Toutes pièces industrielles', href: '/services/thermolaquage/pieces-metalliques' },
    ],
    faq: [
      { question: 'Qu\'est-ce que le thermolaquage ?', answer: 'Le thermolaquage est un procédé de peinture par poudre époxy cuite au four à 200°C. Il offre une finition durable et résistante à la corrosion.' },
      { question: 'Quels objets peut-on thermolaquer ?', answer: 'Tout objet métallique : jantes, portails, garde-corps, mobilier, pièces industrielles, cadres vélo, etc.' },
    ],
  },
]
