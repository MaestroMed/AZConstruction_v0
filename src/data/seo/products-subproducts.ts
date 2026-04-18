import type { SEOProduct, Department, Commune } from './types'

// Sub-product SEO entries — long-tail intent searches.
// Each one has its own routes (/{slug}/[dept]/[ville]) and reuses the same
// `ProductLocalPage` template as the main products. Maintained separately
// from the 11 "core" products to keep the boilerplate distinct.

function loc(dept: Department, ville?: Commune): string {
  return ville ? ville.name : dept.fullName
}
function prep(ville?: Commune): string {
  return ville ? 'à' : 'en'
}

export const seoSubProducts: SEOProduct[] = [
  // ── Garde-corps verre — long-tail intent fort ────────────────────
  {
    slug: 'garde-corps-verre',
    name: 'Garde-corps verre',
    namePlural: 'garde-corps verre',
    nameWithArticle: 'de garde-corps verre',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Garde-corps verre sur mesure ${v.name} (${d.code})`
        : `Garde-corps verre sur mesure ${d.fullName} | Fabricant`,
    metaDescription: (d, v) =>
      `Fabricant de garde-corps en verre feuilleté sur mesure ${prep(v)} ${loc(d, v)}. Verre 8+8 sécurité, fixations invisibles, NF P01-012. Devis 48 h.`,
    heroTitle: (d, v) =>
      v ? `Garde-corps verre sur mesure à ${v.name}` : `Garde-corps verre sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Verre feuilleté 8+8 sécurité, profilés acier ou inox, fixations invisibles. Fabriqué dans notre atelier ${prep(v)} ${loc(d, v)}.`,
    introParagraph: (d, v) =>
      `Vous cherchez un garde-corps en verre pour balcon, terrasse ou escalier ${prep(v)} ${loc(d, v)} ? AZ Construction conçoit et installe des garde-corps en verre feuilleté 8+8 (16 mm) sécurité avec profilés acier thermolaqué ou inox brossé. Conformes NF P01-012, garantis 100 daN/ml.`,
    ctaLabel: 'Devis garde-corps verre',
    features: ['Verre feuilleté 8+8', 'Sans poteaux visibles', 'NF P01-012', 'Décennale'],
    benefits: [
      'Verre feuilleté de sécurité 8+8 mm collé sur film PVB — ne se brise pas en éclats',
      'Profils invisibles ou apparents au choix : pince inox, U-channel, fixations latérales',
      'Pose en copropriété fluide : on fournit la note de calcul + photo type pour AG',
      'Garantie décennale + 10 ans sur le thermolaquage acier',
    ],
    variants: [
      { name: 'Verre toute hauteur sans poteau', description: 'Profil U-channel encastré au sol pour vue 100% dégagée', href: '/produits/garde-corps' },
      { name: 'Verre + main courante acier', description: 'Sécurité visible, look contemporain', href: '/produits/garde-corps' },
      { name: 'Verre clipsé sur poteaux inox', description: 'Démontable, idéal escalier intérieur', href: '/produits/garde-corps' },
      { name: 'Verre dépoli ou sablé', description: 'Préserve l\'intimité, laisse passer la lumière', href: '/produits/garde-corps' },
    ],
    faq: [
      { question: 'Quelle épaisseur de verre pour un garde-corps de balcon ?', answer: 'Verre feuilleté 8+8 (16 mm avec film PVB) en standard, qui résiste à 100 daN/ml exigés par la norme NF P01-012 pour les locaux privés. Pour ERP : 10+10. Toujours feuilleté de sécurité, jamais trempé seul.' },
      { question: 'Verre transparent, dépoli ou texturé ?', answer: 'Transparent = vue maximale (le plus demandé). Dépoli ou sablé = préserve l\'intimité (idéal balcon urbain). Texturé (Karo, Silvit) = effet décoratif. On vous montre des échantillons en visite gratuite.' },
      { question: 'Quel délai et quel prix au mètre linéaire ?', answer: 'Comptez 4 à 6 semaines de fabrication, et 350 à 700 €/ml posé selon la finition et la complexité (avec ou sans poteaux, hauteur, etc.). Devis chiffré sous 48 h après visite.' },
      { question: 'Faut-il un permis ou une déclaration ?', answer: 'En rénovation à l\'identique : aucune formalité. Si modification de l\'aspect extérieur visible (ex. remplacement d\'un garde-corps barreaudé par du verre) : déclaration préalable en mairie. On vous prépare la fiche technique pour le dossier.' },
      { question: 'Comment ça se nettoie au quotidien ?', answer: 'Vinaigre blanc dilué + microfibre, 1 fois par mois. Pour les balcons exposés à la pollution urbaine : produit anti-traces type Briosol tous les 6 mois. Aucun entretien spécifique sur les profils thermolaqués.' },
      { question: 'Pose possible en copropriété ?', answer: 'Oui — passage en AG nécessaire si modification visible depuis la rue. On fournit fiche technique + photo type + note de calcul gratuitement pour ton dossier d\'AG.' },
      { question: 'Garantie ?', answer: 'Décennale sur l\'ouvrage + 10 ans sur le thermolaquage des profils. Verre feuilleté garanti vie du bâtiment selon norme.' },
    ],
  },

  // ── Escalier hélicoïdal ────────────────────────────────────────
  {
    slug: 'escalier-helicoidal',
    name: 'Escalier hélicoïdal',
    namePlural: 'escaliers hélicoïdaux',
    nameWithArticle: "d'escaliers hélicoïdaux",
    preposition: "d'",
    metaTitle: (d, v) =>
      v
        ? `Escalier hélicoïdal sur mesure ${v.name} (${d.code})`
        : `Escalier hélicoïdal sur mesure ${d.fullName} | Fabricant`,
    metaDescription: (d, v) =>
      `Fabricant d'escaliers hélicoïdaux acier sur mesure ${prep(v)} ${loc(d, v)}. Diamètre dès 130 cm, marches bois ou métal. Devis 48 h.`,
    heroTitle: (d, v) =>
      v ? `Escalier hélicoïdal sur mesure à ${v.name}` : `Escalier hélicoïdal sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Conception et fabrication d'escaliers hélicoïdaux en acier ${prep(v)} ${loc(d, v)}. Gain de place radical, design sculptural.`,
    introParagraph: (d, v) =>
      `L'escalier hélicoïdal est la solution reine quand l'espace est compté. ${prep(v)} ${loc(d, v)}, AZ Construction fabrique des escaliers en spirale acier sur mesure à partir de 130 cm de diamètre, structure autoportante, marches bois massif ou tôle pliée acier thermolaqué.`,
    ctaLabel: 'Devis escalier hélicoïdal',
    features: ['Diamètre dès 130 cm', 'Structure autoportante', 'Marches bois/métal', 'Décennale'],
    benefits: [
      'Diamètre minimum 130 cm pour un confort réel — sous 130 cm, on déconseille',
      'Structure autoportante en colonne centrale, calculée pour 250 kg/m²',
      'Choix marches : chêne massif, hêtre, tôle pliée 5 mm thermolaquée',
      'Métré sur place gratuit avec calcul d\'emprise au sol exacte',
    ],
    variants: [
      { name: 'Hélicoïdal acier + chêne', description: 'Le plus demandé — structure noir mat + marches chêne huilé', href: '/produits/escaliers' },
      { name: 'Hélicoïdal tout acier', description: 'Look industriel, marches tôle pliée thermolaquée', href: '/produits/escaliers' },
      { name: 'Hélicoïdal verre + acier', description: 'Marches verre feuilleté, ultra léger visuellement', href: '/produits/escaliers' },
      { name: 'Hélicoïdal extérieur', description: 'Galvanisé + thermolaqué, garde-corps barreaudé conforme', href: '/produits/escaliers' },
    ],
    faq: [
      { question: 'Quel diamètre minimum pour un escalier hélicoïdal confortable ?', answer: '130 cm minimum pour un usage quotidien (passage facile, marche d\'au moins 18 cm en girons). En dessous, on entre dans le confort "secondaire" (combles, mezzanine). 150 cm = grand confort.' },
      { question: 'Combien de marches pour 2,80 m de hauteur sous plafond ?', answer: '14 marches en standard (giron 21 cm, hauteur de marche 20 cm). Variations possibles selon la trémie et le pas. On calcule au mm près lors du métré.' },
      { question: 'Marches bois ou tôle ?', answer: 'Bois (chêne, hêtre) : chaud, classique, à entretenir tous les 5-10 ans. Tôle pliée acier : look contemporain, ultra durable, plus bruyant à la marche. On peut mixer (limon métal + marches bois).' },
      { question: 'Délai de fabrication et de pose ?', answer: '5 à 7 semaines de fabrication, 1 à 2 jours de pose (1 jour pour la structure, 1 jour pour les marches/finitions). Pose nette, on protège les sols.' },
      { question: 'Combien ça coûte ?', answer: 'Comptez 4 500 à 9 000 € posé selon le diamètre, le matériau des marches, la finition et la hauteur. Hélicoïdal extérieur = +15-20% (galva).' },
      { question: 'Faut-il une déclaration ?', answer: 'Non à l\'intérieur d\'un logement existant. En extérieur visible depuis rue : déclaration préalable. Si dessert un étage en extension/véranda : à intégrer au dossier d\'origine.' },
      { question: 'Garantie ?', answer: 'Décennale sur l\'ouvrage + 10 ans sur le thermolaquage. Marches bois garanties 5 ans (entretien régulier requis).' },
    ],
  },

  // ── Portail coulissant ─────────────────────────────────────────
  {
    slug: 'portail-coulissant',
    name: 'Portail coulissant',
    namePlural: 'portails coulissants',
    nameWithArticle: 'de portails coulissants',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Portail coulissant sur mesure ${v.name} (${d.code})`
        : `Portail coulissant sur mesure ${d.fullName} | Fabricant`,
    metaDescription: (d, v) =>
      `Fabricant de portails coulissants acier sur mesure ${prep(v)} ${loc(d, v)}. Motorisation Somfy/Nice. Devis 48 h, pose en 1 jour.`,
    heroTitle: (d, v) =>
      v ? `Portail coulissant sur mesure à ${v.name}` : `Portail coulissant sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Portails coulissants en acier thermolaqué fabriqués sur mesure ${prep(v)} ${loc(d, v)}. Motorisation incluse, pose en 1 jour.`,
    introParagraph: (d, v) =>
      `Le portail coulissant est idéal quand vous manquez de recul devant l'entrée — 1 m suffit. AZ Construction fabrique des portails coulissants acier ${prep(v)} ${loc(d, v)}, sur rail au sol ou autoportants, motorisés ou manuels.`,
    ctaLabel: 'Devis portail coulissant',
    features: ['Sur rail ou autoportant', 'Motorisation Somfy/Nice', '200+ couleurs RAL', 'Décennale'],
    benefits: [
      'Cadre soudé MIG en acier 60/80 — résiste aux torsions sur grandes longueurs',
      'Galets pro doubles roulements + butées de fin de course mécaniques',
      'Motorisation Somfy ou Nice montée et paramétrée le jour de la pose',
      'SAV moteur traité directement à l\'atelier — pas de call-center',
    ],
    variants: [
      { name: 'Coulissant sur rail au sol', description: 'Économique, robuste, idéal jusqu\'à 5 m', href: '/produits/portails' },
      { name: 'Coulissant autoportant', description: 'Sans rail, 0 entretien sol, design épuré', href: '/produits/portails' },
      { name: 'Coulissant à lames horizontales', description: 'Occultant, look contemporain', href: '/produits/portails' },
      { name: 'Coulissant ajouré barreaudé', description: 'Sécurisant, conserve la vue', href: '/produits/portails' },
    ],
    faq: [
      { question: 'Coulissant sur rail ou autoportant : que choisir ?', answer: 'Sur rail = moins cher (économie ~30%), nécessite un sol propre et droit, rail visible. Autoportant = plus cher, 0 entretien sol, look plus pur, max 6 m. Pour grands portails (>5 m) : autoportant recommandé.' },
      { question: 'Quelle largeur maximale ?', answer: 'Sur rail : jusqu\'à 6 m sans souci, jusqu\'à 8 m avec renforts. Autoportant : 5-6 m max sereinement. Au-delà, on découpe en deux vantaux ou on passe sur double battant.' },
      { question: 'Motorisation incluse ou en option ?', answer: 'En option (1 200 à 2 500 € selon modèle Somfy/Nice). Inclut moteur, télécommandes, photocellules, mise en route. Compatible domotique Alexa/Google si demandé.' },
      { question: 'Quel délai de fabrication ?', answer: '5 à 7 semaines : 1 semaine plans, 3-4 semaines fabrication, 1 semaine thermolaquage, pose en 1 jour (ou 2 si maçonnerie complexe).' },
      { question: 'Combien ça coûte ?', answer: 'Coulissant sur rail nu : 2 800 à 4 500 €. Autoportant : 4 200 à 7 000 €. Motorisation : +1 200 à 2 500 €. Pose comprise. Devis chiffré exact en 48 h après visite.' },
      { question: 'Faut-il une déclaration en mairie ?', answer: 'Oui, déclaration préalable de travaux pour tout portail neuf. On prépare gratuitement la fiche technique et le plan dimensionné pour ton dossier.' },
      { question: 'Garantie ?', answer: 'Décennale sur l\'ouvrage + 10 ans thermolaquage + 5 ans constructeur sur les moteurs Somfy/Nice.' },
    ],
  },

  // ── Verrière atelier ───────────────────────────────────────────
  {
    slug: 'verriere-atelier',
    name: 'Verrière atelier',
    namePlural: 'verrières atelier',
    nameWithArticle: 'de verrières atelier',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Verrière atelier sur mesure ${v.name} (${d.code})`
        : `Verrière atelier sur mesure ${d.fullName} | Fabricant`,
    metaDescription: (d, v) =>
      `Fabricant de verrières style atelier d'artiste sur mesure ${prep(v)} ${loc(d, v)}. Vrai acier soudé, verre feuilleté 44.2. Pose 1 jour.`,
    heroTitle: (d, v) =>
      v ? `Verrière atelier sur mesure à ${v.name}` : `Verrière atelier sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Verrières d'intérieur style atelier d'artiste, fabriquées en acier soudé ${prep(v)} ${loc(d, v)}. Vrai acier, pas de l'aluminium qui imite.`,
    introParagraph: (d, v) =>
      `La verrière style atelier d'artiste sépare les espaces tout en laissant passer la lumière. AZ Construction fabrique ${prep(v)} ${loc(d, v)} des verrières en acier soudé MIG (pas de l'aluminium ou du PVC qui imite) avec verre feuilleté 44.2 sécurité — pour cuisines ouvertes, séparations chambre, bureaux.`,
    ctaLabel: 'Devis verrière atelier',
    features: ['Vrai acier soudé', 'Verre feuilleté 44.2', '6 trames disponibles', 'Décennale'],
    benefits: [
      'Acier soudé MIG dans notre atelier — pas de l\'alu thermolaqué qui imite',
      'Verre feuilleté de sécurité 44.2 (8 mm) collé sur film PVB — résistant',
      '6 trames standard (carreaux 30×60, 30×80, 30×100, etc.) ou sur-mesure',
      'Pose en demi-journée à 1 journée, dépoussiérage compris',
    ],
    variants: [
      { name: 'Verrière fixe simple', description: 'Cloison vitrée sans ouverture — la plus courante', href: '/produits/verrieres' },
      { name: 'Verrière avec porte battante', description: 'Accès cuisine ou chambre, 70 à 90 cm de passage', href: '/produits/verrieres' },
      { name: 'Verrière avec porte coulissante', description: 'Gain de place pour petits espaces', href: '/produits/verrieres' },
      { name: 'Verrière toute hauteur sol-plafond', description: 'Effet maximal, ~25-40% plus chère qu\'une demi-cloison', href: '/produits/verrieres' },
    ],
    faq: [
      { question: 'Verre transparent, dépoli ou texturé ?', answer: 'Transparent = lumière maximale, le plus courant. Dépoli (acide ou sablé) = préserve l\'intimité (idéal salle de bain, chambre). Texturé (Karo, Silvit, Pelosit) = effet décoratif. Choix gratuit dans le devis.' },
      { question: 'Combien de carreaux choisir ?', answer: 'Question d\'esthétique : 4 grands carreaux = épuré contemporain. 6 carreaux 30×80 cm = atelier classique parisien. 8-12 carreaux = look industriel marqué. On fait un rendu 3D gratuit pour décider.' },
      { question: 'Demi-cloison ou toute hauteur : différence de prix ?', answer: 'Toute hauteur (sol-plafond) ≈ 25-40% plus chère qu\'une demi-cloison sur soubassement. Mais visuellement plus aérienne. Souvent : demi-cloison + verrière sommitale = bon compromis.' },
      { question: 'Quel niveau d\'isolation phonique ?', answer: 'Atténuation modérée : 20-25 dB (suffisant cuisine/séjour, chambre/dressing). Pas adapté pour isolation sérieuse (home-cinéma, studio). Joints décor seulement, pas étanches à l\'air.' },
      { question: 'Combien ça coûte au m² ?', answer: 'Comptez 1 200 à 2 000 € posé du m² selon trame, vitrage, porte ou non. Verrière 4 m² avec porte battante : ~5 500-7 500 € posée.' },
      { question: 'Délai et pose ?', answer: '4-5 semaines : 1 semaine relevé/plans, 2-3 semaines fab, 1 semaine pose. Pose elle-même = 1 demi-journée à 1 journée selon dimensions.' },
      { question: 'Garantie ?', answer: 'Décennale sur l\'ouvrage + 10 ans thermolaquage. Verre feuilleté garanti vie du bâtiment selon norme.' },
    ],
  },

  // ── Portail autoportant ───────────────────────────────────────
  {
    slug: 'portail-autoportant',
    name: 'Portail autoportant',
    namePlural: 'portails autoportants',
    nameWithArticle: 'de portails autoportants',
    preposition: 'de',
    metaTitle: (d, v) =>
      v
        ? `Portail autoportant sur mesure ${v.name} (${d.code})`
        : `Portail autoportant sur mesure ${d.fullName} | Fabricant`,
    metaDescription: (d, v) =>
      `Fabricant de portails autoportants sans rail au sol ${prep(v)} ${loc(d, v)}. Acier renforcé, motorisation Somfy. Devis 48 h.`,
    heroTitle: (d, v) =>
      v ? `Portail autoportant sur mesure à ${v.name}` : `Portail autoportant sur mesure ${d.fullName}`,
    heroSubtitle: (d, v) =>
      `Portails autoportants sans rail au sol, fabriqués en acier renforcé ${prep(v)} ${loc(d, v)}. Pas d'entretien du sol, look épuré.`,
    introParagraph: (d, v) =>
      `Le portail autoportant coulisse latéralement sans rail au sol — finition épurée et zéro entretien du sol (pas de gravier qui coince, pas de neige à dégager). Adapté aux ouvertures de 3 à 6 m. AZ Construction fabrique ${prep(v)} ${loc(d, v)} des autoportants en acier sur mesure, motorisés ou manuels.`,
    ctaLabel: 'Devis portail autoportant',
    features: ['Sans rail au sol', 'Jusqu\'à 6 m', 'Motorisation incluse', 'Décennale'],
    benefits: [
      'Structure caisson acier renforcé, calculée pour rester droite sur la durée',
      'Galets de roulement intérieurs au caisson — invisibles et protégés',
      'Aucun entretien du sol : ni rail à nettoyer, ni neige à dégager',
      'Motorisation industrielle (Came, Nice) avec décodeur intégré, fiable et silencieuse',
    ],
    variants: [
      { name: 'Autoportant à lames horizontales', description: 'Occultant, look contemporain', href: '/produits/portails' },
      { name: 'Autoportant ajouré barreaudé', description: 'Sécurisant, conserve la vue', href: '/produits/portails' },
      { name: 'Autoportant tôlé plein', description: 'Maximum d\'occultation, look industriel', href: '/produits/portails' },
      { name: 'Autoportant cintré', description: 'Forme arrondie ou décorative sur mesure', href: '/produits/portails' },
    ],
    faq: [
      { question: 'Autoportant ou coulissant sur rail : différences ?', answer: 'Autoportant = sans rail au sol, pas d\'entretien, look pur, ~30% plus cher. Sur rail = économique, demande un sol bien droit, rail visible. Pour grandes ouvertures (>5 m) ou environnement neigeux : autoportant.' },
      { question: 'Quelle largeur maximale ?', answer: '6 m sereinement, jusqu\'à 8 m possible avec caisson renforcé spécifique. Au-delà : on bascule sur double battant ou solution custom.' },
      { question: 'Combien ça coûte ?', answer: '4 200 à 7 500 € posé selon largeur, finition (lames/barreaux/tôle), motorisation. Devis exact sous 48 h après visite gratuite.' },
      { question: 'Quel encombrement latéral en position ouverte ?', answer: 'L\'autoportant glisse derrière le mur de clôture côté propriété. Prévoir une longueur libre = largeur du portail + ~50 cm. Si manque de recul, autoportant non possible — coulissant sur rail tronqué seulement.' },
      { question: 'Délai et pose ?', answer: '6 à 8 semaines de fabrication (caisson sur mesure plus long que coulissant standard), pose en 1 à 2 jours.' },
      { question: 'Faut-il une déclaration en mairie ?', answer: 'Oui, DP obligatoire. On fournit gratuitement fiche technique + plan dimensionné pour ton dossier CERFA.' },
      { question: 'Garantie ?', answer: 'Décennale + 10 ans thermolaquage + 5 ans constructeur sur la motorisation Came/Nice.' },
    ],
  },
]
