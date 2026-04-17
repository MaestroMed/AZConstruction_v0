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
      'Soudé dans notre atelier de 1800 m² à Bruyères-sur-Oise (95) — pas sous-traité',
      'Conforme NF P01-012, calculé pour résister à 100 daN/ml — papiers fournis',
      'Métré sur place gratuit, devis chiffré sous 48 h sans relance commerciale',
      'Décennale dans la poche, SAV joignable à l\'atelier en direct',
    ],
    variants: [
      { name: 'Garde-corps verre feuilleté', description: 'Transparence et élégance pour balcons et terrasses', href: '/produits/garde-corps' },
      { name: 'Garde-corps câbles', description: 'Design aérien, idéal pour les espaces contemporains', href: '/produits/garde-corps' },
      { name: 'Garde-corps barreaudé', description: 'Classique et robuste, barreaux verticaux acier', href: '/produits/garde-corps' },
      { name: 'Main courante', description: 'Rampe sur mesure pour escaliers et couloirs', href: '/produits/garde-corps' },
    ],
    faq: [
      { question: 'Quel est le prix d\'un garde-corps sur mesure ?', answer: 'Le prix dépend du matériau (acier, verre feuilleté, câbles), de la longueur, du nombre d\'angles et du remplissage. Comptez généralement entre 250€ et 600€ par mètre linéaire posé. On vous fait un devis chiffré sous 48h après visite gratuite chez vous.' },
      { question: 'Quelle norme pour les garde-corps ?', answer: 'Tous nos garde-corps respectent la norme NF P01-012 (hauteur minimum 1m, résistance 100 daN/ml horizontal pour les locaux privés, 170 daN/ml pour les ERP). Pour les balcons R+1 et plus, c\'est obligatoire — on fournit l\'attestation de conformité.' },
      { question: 'Quel délai pour un garde-corps sur mesure ?', answer: 'Comptez 3 à 5 semaines entre la validation du devis et la pose : 1 semaine pour la fabrication acier, 1 semaine pour le thermolaquage, 1 semaine pour la planification chantier. En urgence on peut faire plus court — dites-nous votre date butoir.' },
      { question: 'Verre feuilleté ou câbles inox : que choisir ?', answer: 'Verre = vue dégagée, look premium, mais nettoyage régulier. Câbles inox = transparence, design contemporain, exigeant en pose pour respecter l\'écartement maximum de 11cm. On vous montre des échantillons et photos de réalisations chez vous.' },
      { question: 'Pose en copropriété : qui s\'occupe des autorisations ?', answer: 'Vous devez passer en AG si le garde-corps modifie l\'aspect extérieur (changement de couleur, de matériau visible). On vous fournit la fiche technique + photo type pour votre dossier d\'AG.' },
      { question: 'Garantie et SAV ?', answer: 'Décennale incluse (attestation fournie avant pose), plus garantie 10 ans sur le thermolaquage anti-corrosion. SAV joignable directement à l\'atelier — pas de call-center.' },
      { question: 'Vous intervenez dans toute l\'Île-de-France ?', answer: 'Oui — les 8 départements IDF + l\'Oise (60). Notre camion sort tous les matins de Bruyères-sur-Oise. Pose comprise dans le devis pour la zone, hors options spécifiques (échafaudage, nacelle).' },
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
    benefits: [
      'Soudé et ajusté à la main par nos compagnons — chaque escalier est une pièce unique',
      'Métré sur place gratuit dans tout le 95, 92, 75, 60, 78',
      'Marches bois massif ou tôle pliée, finition thermolaquée maison (200+ teintes)',
      'Garantie décennale incluse — attestation fournie avant la pose',
    ],
    variants: [
      { name: 'Escalier hélicoïdal', description: 'Gain de place, design sculptural', href: '/produits/escaliers' },
      { name: 'Escalier droit', description: 'Classique et fonctionnel', href: '/produits/escaliers' },
      { name: 'Escalier quart-tournant', description: 'Optimise les espaces en angle', href: '/produits/escaliers' },
      { name: 'Escalier suspendu', description: 'Effet flottant, design contemporain', href: '/produits/escaliers' },
    ],
    faq: [
      { question: 'Quel type d\'escalier métal choisir ?', answer: 'Hélicoïdal (gain de place, design sculptural, à partir de 130cm de diamètre), droit (simple, économique, traditionnel), quart-tournant (90° pour optimiser un angle), suspendu (effet flottant, fixation murale invisible). Le choix dépend de l\'espace dispo, du style recherché et du budget. On vous montre des photos de chacun en visite.' },
      { question: 'Quel est le délai de fabrication ?', answer: 'Comptez 4 à 6 semaines : 1 semaine de relevé/plans validés, 2 à 3 semaines de fabrication atelier, 1 semaine de thermolaquage et finitions, 1 semaine de planning chantier. La pose elle-même prend 1 à 2 jours selon la complexité.' },
      { question: 'Acier brut, thermolaqué ou verni : quelle finition ?', answer: 'Acier brut = look industriel, à entretenir avec une cire de protection. Thermolaqué = finition durable 10 ans+, 200+ teintes RAL au choix. Vernis = entre les deux, look métal patiné. La majorité de nos clients choisit le thermolaqué pour la longévité.' },
      { question: 'Marches bois ou métal : différences ?', answer: 'Bois (chêne massif principalement) = chaleureux, classique, plus chaud sous les pieds, à entretenir tous les 5-10 ans. Métal/tôle pliée = look contemporain, ultra durable, sans entretien, mais peut être bruyant. On peut aussi mixer (limon métal + marches bois).' },
      { question: 'Faut-il une déclaration ou un permis pour un escalier intérieur ?', answer: 'Non, à l\'intérieur d\'un logement c\'est libre. Attention si l\'escalier dessert un étage en extension/véranda déclarée : intégrez-le au dossier d\'origine. Pour un escalier extérieur visible depuis la rue, déclaration préalable nécessaire.' },
      { question: 'Vous gérez la pose ou seulement la fabrication ?', answer: 'On gère les deux. Notre équipe interne (pas d\'intérimaires) vient poser. Si vous préférez prendre un poseur en local on peut aussi livrer monté ou démonté avec plans détaillés.' },
      { question: 'Garantie et SAV ?', answer: 'Décennale fournie, garantie 10 ans sur le thermolaquage. Pour les escaliers en extérieur, garantie 10 ans anti-corrosion. SAV à l\'atelier en direct.' },
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
    benefits: [
      'Cadre soudé MIG dans notre atelier 1800 m² — acier 60/80, pas du bricolage',
      'Pose et raccordement motorisation par notre équipe interne, en une journée',
      'Devis chiffré sous 48 h après visite, prix ferme sans surprise',
      'Décennale + SAV moteur traité directement à l\'atelier (pas un call-center)',
    ],
    variants: [
      { name: 'Portail battant', description: 'Ouverture classique, 1 ou 2 vantaux', href: '/produits/portails' },
      { name: 'Portail coulissant', description: 'Idéal pour les entrées étroites', href: '/produits/portails' },
      { name: 'Portail autoportant', description: 'Sans rail au sol, finition épurée', href: '/produits/portails' },
      { name: 'Portillon', description: 'Accès piéton assorti au portail', href: '/produits/portails' },
    ],
    faq: [
      { question: 'Portail battant ou coulissant ?', answer: 'Coulissant = idéal si vous manquez de recul devant l\'entrée (1m suffit), pas d\'emprise quand il est ouvert. Battant = plus simple, moins cher, mais nécessite 4m de recul libre. Autoportant = coulissant sans rail au sol, top en finition mais 30% plus cher.' },
      { question: 'La motorisation est-elle incluse ?', answer: 'En option, mais on installe les moteurs Somfy, Nice, Came compatibles avec tous nos portails. Comptez 1 200 à 2 500€ supplémentaires selon le modèle (filaire, télécommande, Wi-Fi). On gère le passage des câbles et la mise en route.' },
      { question: 'Quel délai de fabrication ?', answer: '5 à 7 semaines : 1 semaine devis/plans, 3 à 4 semaines fabrication acier, 1 semaine thermolaquage, 1 semaine pose. La motorisation se pose en même temps si commandée avec le portail.' },
      { question: 'Faut-il une déclaration en mairie ?', answer: 'Oui, déclaration préalable de travaux (DP) obligatoire pour un portail neuf ou un changement substantiel. On vous prépare la fiche technique + plan dimensionné gratuitement pour votre dossier — il suffit de la joindre au formulaire CERFA.' },
      { question: 'Que se passe-t-il en cas de panne moteur ?', answer: 'SAV à l\'atelier en direct (pas de call-center sous-traité). Sur les Somfy/Nice on a 80% des pièces en stock — intervention sous 48h en moyenne.' },
      { question: 'Couleur RAL : on peut choisir n\'importe quelle teinte ?', answer: '200+ teintes RAL classiques en stock. Pour une teinte hors RAL (Adapta, Pantone, etc.) on commande la poudre — comptez 1 à 2 semaines de délai supplémentaire et un léger surcoût.' },
      { question: 'Garantie ?', answer: 'Décennale sur l\'ouvrage + garantie 10 ans anti-corrosion sur le thermolaquage. Garantie constructeur 5 ans sur les moteurs (Somfy, Nice).' },
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
    benefits: [
      'Panneaux soudés à la mesure de vos longueurs réelles, pas de "presque"',
      'Acier galva + thermolaqué dans la même chaîne — résiste aux hivers franciliens',
      'Pose y compris terrassement et scellement, on gère la totalité',
      'Conseil PLU offert — on connaît les hauteurs réglementaires par commune',
    ],
    variants: [
      { name: 'Clôture barreaudée', description: 'Classique et sécurisante', href: '/produits/clotures' },
      { name: 'Clôture grillagée', description: 'Économique et fonctionnelle', href: '/produits/clotures' },
      { name: 'Clôture à lames', description: 'Occultante, design moderne', href: '/produits/clotures' },
      { name: 'Clôture décorative', description: 'Motifs personnalisés', href: '/produits/clotures' },
    ],
    faq: [
      { question: 'Quelle hauteur pour une clôture ?', answer: 'Dépend du PLU de votre commune. Généralement 1,50m à 2m en zone résidentielle, parfois 1,20m maxi sur rue. On vous fait un point sur le PLU local gratuitement avant le devis.' },
      { question: 'Faut-il une déclaration en mairie ?', answer: 'Déclaration préalable obligatoire pour toute clôture en limite de propriété (donné la loi) — sauf si votre commune a explicitement dispensé via délibération. On prépare la fiche technique pour votre dossier.' },
      { question: 'Acier galvanisé + thermolaqué : utile vraiment ?', answer: 'Oui — la galvanisation à chaud sous le thermolaquage protège l\'acier même si la peinture est rayée. Sans galva, une rayure = corrosion en 2-3 ans en extérieur. Avec galva, tenue 15+ ans. C\'est notre standard, pas un upsell.' },
      { question: 'Vous gérez le terrassement et les scellements ?', answer: 'Oui — on creuse les fondations, on coule les plots béton, on scelle les poteaux. Y compris en cas de sol dur ou racines (godet adapté). Le devis comprend tout, sauf empierrement préalable très lourd.' },
      { question: 'Combien de temps de pose pour 80 mètres ?', answer: 'Comptez 2 jours pour 80 mètres en terrain standard : 1 jour terrassement + plots, 1 jour pose des modules. Plus si pente, dénivelé, ou intégration portail.' },
      { question: 'Délai et garantie ?', answer: 'Fabrication 3 à 5 semaines, pose en 1 à 3 jours selon longueur. Décennale sur l\'ouvrage + garantie 10 ans anti-corrosion.' },
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
    benefits: [
      'Cadres et vantaux soudés/redressés à l\'atelier — ouverture parfaite à la pose',
      'Portes coupe-feu certifiées EI30/EI60 fournies avec PV en règle',
      'Quincaillerie pro (Vachette, Bricard, Heracles) montée et réglée par nos poseurs',
      'Devis sous 48 h, pose en une journée pour la plupart des configurations',
    ],
    variants: [
      { name: 'Porte de hall / SAS', description: 'Entrée d\'immeuble sécurisée', href: '/produits/portes' },
      { name: 'Porte tôlée', description: 'Robuste, 1 ou 2 vantaux', href: '/produits/portes' },
      { name: 'Porte style atelier', description: 'Vitrage et acier noir', href: '/produits/portes' },
      { name: 'Porte coupe-feu', description: 'Certification EI30/EI60', href: '/produits/portes' },
    ],
    faq: [
      { question: 'Quelles certifications pour les portes coupe-feu ?', answer: 'Nos portes coupe-feu sont certifiées EI30 (30 minutes) et EI60 (60 minutes) selon EN 13501-2. PV de classement fournis avec chaque porte — exigés en commission de sécurité ERP.' },
      { question: 'Délai de fabrication ?', answer: '4 à 6 semaines pour une porte standard, 6 à 8 semaines pour les portes coupe-feu et style atelier complexes. Pose en une journée pour la majorité des configurations.' },
      { question: 'Quelle quincaillerie utilisez-vous ?', answer: 'Quincaillerie pro Vachette, Bricard, Heracles. Serrures multipoints A2P*** disponibles, paumelles renforcées, ferme-porte hydraulique en option. Tout est testé/réglé à la pose, pas livré "comme ça".' },
      { question: 'Porte de hall en copropriété : qui choisit ?', answer: 'L\'AG vote le modèle (présentation des fiches techniques). On vous fournit les visuels et un devis comparatif si besoin. Pose coordonnée avec le syndic pour minimiser l\'impact sur les habitants.' },
      { question: 'Style atelier : c\'est juste du look ou c\'est isolé ?', answer: 'Vrai acier soudé (pas de l\'alu qui imite), vitrage feuilleté 44.2 = isolation phonique correcte (~32 dB). En option vitrage thermique pour porte d\'entrée extérieure. Pas optimal pour étanchéité air si exposition directe pluie battante.' },
      { question: 'Que faites-vous des anciennes portes ?', answer: 'On les démonte, on les évacue et on les recycle (filière agréée DEEE/métaux). Inclus dans le devis pour les portes standards.' },
      { question: 'Garantie ?', answer: 'Décennale sur l\'ouvrage + 10 ans sur le thermolaquage + 5 ans sur la quincaillerie pro. PV coupe-feu fourni avec chaque porte EI30/EI60.' },
    ],
  },
]
