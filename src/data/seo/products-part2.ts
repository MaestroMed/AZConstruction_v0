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
      { question: 'Fenêtre acier ou aluminium ?', answer: 'Acier : profils ultra-fins (40mm vs 60mm en alu), look industriel authentique, durable 50 ans+, mais plus lourd et plus cher. Alu : léger, moins cher, profils plus visibles, plus moderne mais sans le caractère acier. Pour un style atelier vrai, c\'est acier obligatoire.' },
      { question: 'Quel vitrage utilisez-vous ?', answer: 'Vitrage feuilleté de sécurité 44.2 (8mm) en standard. Pour l\'isolation thermique, vitrage 4/16/4 argon (Uw ≈ 1,4 W/m²K). En double vitrage feuilleté pour zones bruyantes (boulevards, voies ferrées).' },
      { question: 'Délai et pose ?', answer: 'Fabrication 5 à 7 semaines, pose en 1 jour pour 1-3 fenêtres standard. Dépoussiérage compris, on laisse propre. Pas d\'enduit/ravalement (à voir avec maçon si besoin).' },
      { question: 'Étanchéité à l\'air et eau ?', answer: 'Joints EPDM en feuillure + bavette intérieure. Conforme RT 2012 et RE 2020 pour rénovation. PV de classement A*E*V fournis sur demande pour les pros.' },
      { question: 'Vous travaillez en rénovation lourde ?', answer: 'Oui — dépose ancien dormant, repose en neuf sur tableau, reprise des feuillures, calfeutrement étanche. On fait le bouchement périphérique et on laisse propre côté intérieur.' },
      { question: 'Style atelier en porte-fenêtre / baie : possible ?', answer: 'Oui — on fabrique des baies vitrées style atelier jusqu\'à 4-5m de large. Au-delà, on segmente avec un montant intermédiaire pour la rigidité. Vitrage feuilleté épais selon la dimension.' },
      { question: 'Garantie ?', answer: 'Décennale sur l\'ouvrage + 10 ans sur l\'étanchéité des joints + 10 ans sur le thermolaquage anti-corrosion.' },
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
      { question: 'Quel verre pour une verrière intérieure ?', answer: 'Verre feuilleté de sécurité 44.2 (8mm) en standard — 2 vitrages collés par film PVB, ne se brise pas en éclats. Choix transparent, dépoli, ou texturé (Karo, Silvit, Pelosit). Verre teinté possible mais peu courant en intérieur.' },
      { question: 'Combien de carreaux pour une verrière ?', answer: 'Question d\'esthétique : 4 grands carreaux = épuré contemporain ; 6 carreaux 30×80 = atelier classique parisien ; 8-12 petits carreaux = look industriel marqué. On vous fait un rendu 3D pour décider.' },
      { question: 'Délai de fabrication ?', answer: '4 à 5 semaines : 1 semaine relevé/plans validés, 2 à 3 semaines fab acier + thermolaquage, 1 semaine pose. Pose elle-même = 1 demi-journée à 1 journée selon dimensions.' },
      { question: 'Verrière avec porte : largeur de passage ?', answer: 'Porte simple : 70 à 90cm utile. Porte double : 120 à 160cm. Au-delà, on prévoit un fixe latéral pour la rigidité. Battement, va-et-vient ou coulissant : on s\'adapte.' },
      { question: 'Étanchéité air/son entre 2 pièces ?', answer: 'Pas étanche à l\'air (joints décor, pas joints d\'étanchéité). Atténuation phonique modérée (~20-25 dB). Pour cloisonner entre cuisine et chambre, ça suffit. Pour isoler un home-cinéma, il faut une cloison vitrée acoustique spécifique.' },
      { question: 'Toute hauteur ou demi-cloison : différences de prix ?', answer: 'Toute hauteur (sol-plafond) ≈ 25-40% plus chère qu\'une demi-cloison sur soubassement. Mais visuellement plus aérien. Souvent, demi-cloison + verrière sommitale = bon compromis prix/effet.' },
      { question: 'Garantie ?', answer: 'Décennale sur l\'ouvrage + 10 ans sur le thermolaquage. Verre feuilleté garanti vie du bâtiment selon norme.' },
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
      { question: 'Faut-il un permis de construire ?', answer: 'Pergola < 5m² : pas de formalité. Entre 5 et 20m² : déclaration préalable de travaux (DP) en mairie. > 20m² : permis de construire (PC). On vous prépare la fiche technique + plan dimensionné gratuitement pour votre dossier.' },
      { question: 'Bioclimatique : ça marche vraiment ?', answer: 'Oui. Lames orientables motorisées (15° à 165°) qui régulent l\'ensoleillement et la pluie. Capteur de pluie en option (ferme automatiquement). En hiver lames ouvertes = max de lumière. En été lames inclinées = ombrage et ventilation.' },
      { question: 'Délai et pose ?', answer: 'Fab + thermolaquage 5 à 7 semaines. Pose en 1 à 2 jours pour les pergolas standards (4×3m, 5×4m). Scellement chimique inclus (pas du béton sale qui prend 24h). Motorisation calée + paramétrée le jour de la pose.' },
      { question: 'Tient la neige et le vent francilien ?', answer: 'Oui — structure dimensionnée selon Eurocodes pour Île-de-France (charge neige 35-45 daN/m², vent zone 1). On peut fournir la note de calcul si demandée par votre commission DP/PC.' },
      { question: 'Domotique compatible Alexa / Google ?', answer: 'Oui — moteurs Somfy IO/Tahoma, Nice Era, compatibles Alexa, Google Home, Apple HomeKit (selon modèle). Configuration maison faite à la pose.' },
      { question: 'Fixation sur mur : ça abîme ?', answer: 'Adossée : chevillage chimique dans le mur porteur, pas dans l\'isolant. Étanchéité périphérique au silicone neutre + bavette zinc. Aucun risque d\'infiltration si pose propre.' },
      { question: 'Garantie ?', answer: 'Décennale sur l\'ouvrage + 10 ans thermolaquage + 5 ans constructeur sur la motorisation Somfy/Nice.' },
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
      { question: 'Quelle taille pour une marquise ?', answer: 'Pour une protection efficace : 40 à 80cm de débord de chaque côté de la porte, et 80 à 120cm en profondeur depuis la façade. Largeur totale typique : 1,80m à 2,50m. On adapte à la largeur de votre porte/marche existante.' },
      { question: 'Verre ou tôle/casquette acier ?', answer: 'Verre (feuilleté 8 ou 10mm) = lumière, transparence, look raffiné, mais nettoyage à prévoir. Casquette acier pleine = épuré contemporain, robuste, plus discrète mais cache la lumière au-dessus de la porte. Choix esthétique avant tout.' },
      { question: 'Pose en copropriété : faut-il l\'AG ?', answer: 'Oui, si la marquise modifie l\'aspect extérieur (et c\'est forcément le cas). On vous fournit la note de calcul + photo type pour votre dossier d\'AG. Pose une fois autorisée.' },
      { question: 'Délai de fabrication ?', answer: '4 à 5 semaines : 2 semaines fab, 1 semaine thermolaquage, 1 à 2 semaines planning chantier. Pose en demi-journée pour la majorité des cas (échafaudage léger compris).' },
      { question: 'Fixation : sur quel type de mur ?', answer: 'Béton, parpaing, brique pleine = chevillage chimique. Pierre naturelle = scellement chimique adapté. Pas de bois ou plaque de plâtre seule (forcément doublé d\'une structure porteuse). Contrôle visuel sur place inclus dans le métré.' },
      { question: 'Comment résiste à la pluie / neige francilienne ?', answer: 'Structure acier électro-zinguée + thermolaquée = pas de rouille. Verre feuilleté étanche en superposition. Chéneau d\'évacuation latéral en option pour fortes pluies. Tient sans souci la neige IDF (charge max ~45 kg/m²).' },
      { question: 'Garantie ?', answer: 'Décennale + 10 ans anti-corrosion sur le thermolaquage + 10 ans étanchéité joints.' },
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
      { question: 'Grille avec ou sans moustiquaire ?', answer: 'Moustiquaire intégrée en option (treillis fil 1mm). Conseillé en zones rurales ou pour grilles donnant directement sur extérieur. Léger surcoût, démontable pour nettoyage annuel.' },
      { question: 'Décorative ou technique : quelle différence ?', answer: 'Technique = section libre calculée pour un débit d\'air précis (DTU 68.3, normes VMC). Souvent peu visible, fonctionnelle. Décorative = motifs personnalisés découpe laser, soigne la façade tout en assurant la ventilation. Les deux peuvent se cumuler.' },
      { question: 'Petites séries acceptées ?', answer: 'Oui — pas de minimum de commande. On fait à l\'unité, en série de 5, 50, 500. Le coût unitaire baisse avec la quantité, mais on n\'impose pas de seuil.' },
      { question: 'Découpe laser : quels motifs possibles ?', answer: 'Tout ce que vous nous fournissez en vectoriel (DXF, AI, SVG) ou même en photo si la complexité le permet. On a fait des logos d\'entreprise, des frises, des motifs géométriques, des paysages stylisés. Bureau d\'études interne pour adapter les motifs au calcul de section libre.' },
      { question: 'Délai de fabrication ?', answer: '2 à 4 semaines selon série et complexité du motif. Petite urgence acceptée — dites-nous votre besoin, on regarde.' },
      { question: 'Fixation : comment ça se monte ?', answer: 'Cadre alu ou acier autour de la grille (en option), ou directement vissé/scellé sur tableau béton/maçonnerie. On fournit les vis inox et conseils de pose si vous posez vous-même.' },
      { question: 'Garantie ?', answer: 'Décennale sur la fabrication + 10 ans thermolaquage anti-corrosion. Calculs section libre fournis sur demande pour DTU 68.3.' },
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
      { question: 'Qu\'est-ce que le thermolaquage ?', answer: 'Procédé de peinture par poudre époxy ou polyester appliquée par projection électrostatique, puis cuite au four à 200°C pendant 15 à 30 minutes. La poudre fond et se polymérise en une couche dure, durable, anti-corrosion. Très différent de la peinture liquide qui s\'écaille.' },
      { question: 'Quels objets peut-on thermolaquer ?', answer: 'Tout métal qui supporte 200°C : acier, alu, fonte, inox. Donc : jantes, portails, garde-corps, mobilier de jardin, cadres vélo/moto, pièces industrielles, étriers de frein, carter moto, grilles, etc. Pas le bois, pas le plastique, pas l\'électronique embarquée.' },
      { question: 'Combien de temps ça dure ?', answer: '10 à 15 ans en extérieur exposé sans entretien (10 ans garantis), 20+ ans en intérieur ou abrité. Sur jantes auto : tient parfaitement à la chaleur freinage et aux projections de sel hivernal.' },
      { question: 'Combien ça coûte ?', answer: 'Très variable selon taille et préparation : 4 jantes auto = 250-400€, 1 portail = 300-600€, 1 cadre moto = 200-350€, série de pièces industrielles = devis sur volume. Devis exact en 24-48h après envoi de photos + dimensions.' },
      { question: 'Vous prenez les pièces démontées ou montées ?', answer: 'Démontées de préférence (pour atteindre toutes les faces). Sur jantes : démontées des pneus. Sur étriers : démontés du bras. On peut faire le démontage simple, mais facturé en sus. Les pièces qui doivent rester montées (mécanique de précision) sont masquées avant cuisson.' },
      { question: 'Peut-on choisir n\'importe quelle couleur ?', answer: '200+ teintes RAL en stock (livraison immédiate). Hors stock = commande de poudre, comptez 1 à 2 semaines de plus. Collections premium Adapta (Patina, Polaris, Dichroic, Sfera) disponibles sur demande — prix légèrement supérieur.' },
      { question: 'Délai et logistique ?', answer: '5 à 7 jours en standard. Notre camion vient récupérer vos pièces en Île-de-France (calage compris, jamais en vrac). Retour livré chez vous ou sur chantier.' },
      { question: 'Garantie ?', answer: '10 ans anti-corrosion et tenue couleur. Reprises gratuites si défaut imputable à la fabrication (rare, mais ça arrive).' },
    ],
  },
]
