import {
  Shield,
  Award,
  Truck,
  Palette,
  Clock,
  Ruler,
  CheckCircle2,
  Wrench,
  Home,
  Eye,
  Sparkles,
  Star,
  Zap,
  Heart,
  LucideIcon,
} from "lucide-react";

export interface ProductVariant {
  id: string;
  name: string;
  description: string;
  features: string[];
  startingPrice: string;
}

export interface ProductFamily {
  id: string;
  slug: string;
  name: string;
  nameSingular: string;
  tagline: string;
  description: string;
  longDescription: string;
  heroImages: string[]; // URLs for carousel
  startingPrice: string;
  unit: string; // e.g., "ml" for mètre linéaire, "pièce", etc.
  features: string[];
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  variants: ProductVariant[];
  specifications: {
    label: string;
    value: string;
  }[];
  gallery: string[];
  seoTitle: string;
  seoDescription: string;
}

// Default hero images (placeholders - will be replaced by back-office)
const defaultHeroImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80",
];

export const productFamilies: ProductFamily[] = [
  {
    id: "garde-corps",
    slug: "garde-corps",
    name: "Garde-corps",
    nameSingular: "Garde-corps",
    tagline: "Sécurité & Design",
    description: "Garde-corps et balustrades pour terrasses, balcons et escaliers.",
    longDescription: "Nos garde-corps allient sécurité maximale et esthétique raffinée. Fabriqués en inox 316L ou acier thermolaqué, ils s'adaptent à tous les styles architecturaux. Du contemporain au classique, chaque réalisation est unique et sur mesure.",
    heroImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    ],
    startingPrice: "290",
    unit: "ml",
    features: ["Norme NF P01-012", "Inox 316L", "8 modèles", "200+ couleurs RAL"],
    benefits: [
      { icon: "Shield", title: "Sécurité Maximale", description: "Conformes à la norme NF P01-012 pour une protection optimale." },
      { icon: "Palette", title: "Personnalisation", description: "Verre feuilleté, câbles inox, barreaux ou tôles perforées." },
      { icon: "Award", title: "Qualité Premium", description: "Inox 316L marine pour une durabilité exceptionnelle." },
      { icon: "Sparkles", title: "Design Sur Mesure", description: "Chaque garde-corps est fabriqué selon vos dimensions exactes." },
    ],
    variants: [
      { id: "verre-inox", name: "Garde-corps Verre & Inox", description: "Élégance et transparence avec panneaux en verre feuilleté.", features: ["Verre 8+8 feuilleté", "Main courante inox", "Fixations invisibles"], startingPrice: "450" },
      { id: "cables", name: "Garde-corps Câbles", description: "Design aérien avec câbles inox tendus horizontaux.", features: ["Câbles inox Ø4mm", "Tendeurs réglables", "Style moderne"], startingPrice: "320" },
      { id: "barreaux", name: "Garde-corps Barreaudé", description: "Classique et robuste avec barreaux verticaux.", features: ["Barreaux Ø16mm", "Espacement 11cm max", "Traditionnel"], startingPrice: "290" },
      { id: "toles", name: "Garde-corps Tôles Perforées", description: "Intimité et design avec tôles découpées laser.", features: ["Motifs personnalisés", "Découpe laser", "Créativité totale"], startingPrice: "380" },
    ],
    specifications: [
      { label: "Hauteur standard", value: "100 cm (90 cm pour fenêtres)" },
      { label: "Matériaux", value: "Inox 304, Inox 316L, Acier thermolaqué" },
      { label: "Finitions", value: "Brossé, poli miroir, satiné, thermolaqué" },
      { label: "Fixation", value: "À la française, à l'anglaise, en applique" },
      { label: "Normes", value: "NF P01-012, DTU 39.4" },
      { label: "Garantie", value: "10 ans" },
    ],
    gallery: [],
    seoTitle: "Garde-corps Sur Mesure | Verre, Inox, Câbles | AZ Construction",
    seoDescription: "Garde-corps et balustrades sur mesure en inox 316L. Verre feuilleté, câbles, barreaux. Norme NF P01-012. Devis gratuit.",
  },
  {
    id: "escaliers",
    slug: "escaliers",
    name: "Escaliers",
    nameSingular: "Escalier",
    tagline: "L'Art de Monter",
    description: "Escaliers droits, quart-tournant, double quart-tournant et hélicoïdaux.",
    longDescription: "Nos escaliers sont de véritables œuvres d'art fonctionnelles. Qu'il s'agisse d'un escalier droit épuré, d'un quart-tournant élégant ou d'un hélicoïdal spectaculaire, nous créons des pièces uniques qui magnifient votre intérieur.",
    heroImages: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=80",
    ],
    startingPrice: "4 500",
    unit: "pièce",
    features: ["Étude 3D gratuite", "8 modèles", "Marches bois/métal", "Sur mesure"],
    benefits: [
      { icon: "Ruler", title: "Étude 3D Gratuite", description: "Visualisez votre escalier avant fabrication." },
      { icon: "Wrench", title: "Fabrication Artisanale", description: "Chaque escalier est fabriqué dans notre atelier." },
      { icon: "Home", title: "Intégration Parfaite", description: "Adaptation à toutes les configurations d'espace." },
      { icon: "Award", title: "Finitions Premium", description: "Marches bois massif ou métal, garde-corps assortis." },
    ],
    variants: [
      { id: "helicoidal", name: "Escalier Hélicoïdal", description: "L'élégance en spirale, gain de place optimal.", features: ["Structure autoportante", "Diamètre à partir de 130cm", "Design sculptural"], startingPrice: "8 500" },
      { id: "droit", name: "Escalier Droit", description: "Classique et fonctionnel pour tous les espaces.", features: ["Structure limon central", "Marches flottantes", "Installation rapide"], startingPrice: "4 500" },
      { id: "quart-tournant", name: "Escalier Quart-tournant", description: "Optimisation de l'espace avec un angle de 90°.", features: ["Tournant à droite ou gauche", "Palier intermédiaire", "Adaptable"], startingPrice: "5 800" },
      { id: "suspendu", name: "Escalier Suspendu", description: "L'illusion de légèreté avec marches flottantes.", features: ["Fixation murale invisible", "Effet aérien", "Design contemporain"], startingPrice: "7 200" },
    ],
    specifications: [
      { label: "Hauteur max.", value: "Jusqu'à 6m (plusieurs volées)" },
      { label: "Largeur passage", value: "70 à 120 cm" },
      { label: "Marches", value: "Bois massif, verre, métal, composite" },
      { label: "Structure", value: "Acier, inox, aluminium" },
      { label: "Normes", value: "DTU, Code de la construction" },
      { label: "Garantie", value: "10 ans structure, 5 ans marches" },
    ],
    gallery: [],
    seoTitle: "Escaliers Sur Mesure | Hélicoïdal, Droit, Quart-tournant | AZ Construction",
    seoDescription: "Escaliers métalliques sur mesure. Hélicoïdaux, droits, suspendus. Marches bois ou métal. Étude 3D gratuite. Devis en 48h.",
  },
  {
    id: "portails",
    slug: "portails",
    name: "Portails",
    nameSingular: "Portail",
    tagline: "L'Entrée de Votre Style",
    description: "Portails battants et coulissants en acier, aluminium ou inox.",
    longDescription: "Votre portail est la première impression de votre propriété. Nous créons des portails sur mesure qui allient esthétique, sécurité et durabilité. Du design contemporain au style classique, motorisés ou manuels.",
    heroImages: defaultHeroImages,
    startingPrice: "1 890",
    unit: "pièce",
    features: ["Motorisable", "7 modèles", "200+ couleurs RAL", "Garantie 10 ans"],
    benefits: [
      { icon: "Shield", title: "Sécurité Renforcée", description: "Serrures multipoints et structure robuste." },
      { icon: "Zap", title: "Motorisation", description: "Options domotique et ouverture télécommandée." },
      { icon: "Palette", title: "200+ Couleurs", description: "Thermolaquage toutes teintes RAL." },
      { icon: "Eye", title: "Design Unique", description: "Personnalisation totale du motif." },
    ],
    variants: [
      { id: "battant", name: "Portail Battant 2 Vantaux", description: "L'ouverture classique à deux vantaux.", features: ["Ouverture 180°", "Motorisation possible", "Piliers standards"], startingPrice: "1 890" },
      { id: "coulissant", name: "Portail Coulissant", description: "Idéal pour les entrées en pente.", features: ["Gain de place", "Rail au sol", "Grandes largeurs"], startingPrice: "2 490" },
      { id: "autoportant", name: "Portail Autoportant", description: "Sans rail au sol, entretien minimal.", features: ["Pas de rail", "Motorisation intégrée", "Sol irrégulier OK"], startingPrice: "3 200" },
      { id: "portillon", name: "Portillon Piéton", description: "Accès piéton assorti à votre portail.", features: ["Assorti au portail", "Largeur 90-120cm", "Serrure sécurisée"], startingPrice: "890" },
    ],
    specifications: [
      { label: "Largeur max.", value: "Jusqu'à 7m (coulissant)" },
      { label: "Hauteur", value: "1m à 2.5m" },
      { label: "Matériaux", value: "Acier, aluminium, inox" },
      { label: "Motorisation", value: "Bras articulés, vérin, crémaillère" },
      { label: "Télécommande", value: "2 ou 4 canaux incluses" },
      { label: "Garantie", value: "10 ans structure, 2 ans motorisation" },
    ],
    gallery: [],
    seoTitle: "Portails Sur Mesure | Battants, Coulissants, Motorisés | AZ Construction",
    seoDescription: "Portails sur mesure en acier et aluminium. Battants, coulissants, motorisés. 200+ couleurs RAL. Devis gratuit.",
  },
  {
    id: "clotures",
    slug: "clotures",
    name: "Clôtures",
    nameSingular: "Clôture",
    tagline: "Délimitez avec Style",
    description: "Clôtures barreaudées, à lames, panneaux rigides et décoratives.",
    longDescription: "Nos clôtures délimitent votre propriété avec élégance et sécurité. Des modèles barreaudés classiques aux clôtures à lames modernes, nous proposons des solutions durables et esthétiques pour tous les budgets.",
    heroImages: defaultHeroImages,
    startingPrice: "85",
    unit: "ml",
    features: ["Prix au mètre", "8 modèles", "Anti-corrosion", "Montage facile"],
    benefits: [
      { icon: "Shield", title: "Sécurité", description: "Protection efficace de votre propriété." },
      { icon: "Eye", title: "Intimité", description: "Modèles occultants disponibles." },
      { icon: "Sparkles", title: "Esthétique", description: "Designs variés pour tous les styles." },
      { icon: "Award", title: "Durabilité", description: "Traitement anti-corrosion longue durée." },
    ],
    variants: [
      { id: "barreaudee", name: "Clôture Barreaudée", description: "Le classique indémodable.", features: ["Barreaux verticaux", "Plusieurs espacements", "Sobre et efficace"], startingPrice: "85" },
      { id: "lames", name: "Clôture à Lames", description: "Occultation et design moderne.", features: ["Lames horizontales", "100% occultant", "Style contemporain"], startingPrice: "120" },
      { id: "decorative", name: "Clôture Décorative", description: "Motifs découpés laser personnalisés.", features: ["Découpe laser", "Motifs sur mesure", "Design unique"], startingPrice: "180" },
      { id: "piscine", name: "Clôture Piscine", description: "Conforme à la norme NF P90-306.", features: ["Norme piscine", "Portillon sécurisé", "Transparence verre"], startingPrice: "290" },
    ],
    specifications: [
      { label: "Hauteur", value: "1m à 2m" },
      { label: "Matériaux", value: "Acier thermolaqué, aluminium" },
      { label: "Espacement barreaux", value: "9 à 14 cm selon modèle" },
      { label: "Poteaux", value: "60x60mm ou 80x80mm" },
      { label: "Fixation", value: "Platine, scellement, fondation" },
      { label: "Garantie", value: "10 ans" },
    ],
    gallery: [],
    seoTitle: "Clôtures Sur Mesure | Barreaudées, Lames, Décoratives | AZ Construction",
    seoDescription: "Clôtures métalliques sur mesure. Barreaudées, lames, décoratives. Traitement anti-corrosion. À partir de 85€/ml.",
  },
  {
    id: "portes",
    slug: "portes",
    name: "Portes",
    nameSingular: "Porte",
    tagline: "Entrées d'Exception",
    description: "Portes en acier et profilés Jansen : design, techniques, coupe-feu.",
    longDescription: "Nos portes en profilés Jansen représentent l'excellence en matière de menuiserie métallique. Du design contemporain aux exigences coupe-feu EI120, nous réalisons des portes d'exception pour tous les projets.",
    heroImages: defaultHeroImages,
    startingPrice: "1 200",
    unit: "pièce",
    features: ["Profilés Jansen", "8 modèles", "Coupe-feu EI120", "Isolation thermique"],
    benefits: [
      { icon: "Shield", title: "Sécurité Maximale", description: "Certification A2P et coupe-feu jusqu'à EI120." },
      { icon: "Sparkles", title: "Design Premium", description: "Finesse des profilés Jansen pour un rendu élégant." },
      { icon: "Home", title: "Isolation Performante", description: "Excellentes performances thermiques et acoustiques." },
      { icon: "Award", title: "Qualité Suisse", description: "Profilés Jansen, référence mondiale en acier." },
    ],
    variants: [
      { id: "entree", name: "Porte d'Entrée Acier", description: "L'entrée prestigieuse de votre habitat.", features: ["Vitrage isolant", "Serrure 5 points", "Design épuré"], startingPrice: "2 800" },
      { id: "atelier", name: "Porte Atelier", description: "Style industriel avec vitrage type verrière.", features: ["Petits carreaux", "Style loft", "Avec ou sans imposte"], startingPrice: "1 200" },
      { id: "coupe-feu", name: "Porte Coupe-feu", description: "Protection incendie certifiée EI30 à EI120.", features: ["Certification EI", "Ferme-porte", "Bâtiments ERP"], startingPrice: "1 800" },
      { id: "blindee", name: "Porte Blindée A2P", description: "Sécurité maximale certifiée A2P.", features: ["Certification A2P", "Blindage acier", "Serrure haute sécurité"], startingPrice: "3 500" },
    ],
    specifications: [
      { label: "Dimensions", value: "Sur mesure, jusqu'à 3m de haut" },
      { label: "Profilés", value: "Jansen Janisol, Economy" },
      { label: "Vitrage", value: "Simple, double, triple, feuilleté" },
      { label: "Isolation", value: "Uf jusqu'à 1.5 W/m²K" },
      { label: "Certifications", value: "CE, NF, A2P, EI30-120" },
      { label: "Garantie", value: "10 ans" },
    ],
    gallery: [],
    seoTitle: "Portes Sur Mesure | Acier Jansen, Coupe-feu, Blindées | AZ Construction",
    seoDescription: "Portes en profilés Jansen sur mesure. Entrées design, coupe-feu EI120, blindées A2P. Fabrication française.",
  },
  {
    id: "fenetres",
    slug: "fenetres",
    name: "Fenêtres & Châssis",
    nameSingular: "Fenêtre",
    tagline: "Lumière & Élégance",
    description: "Fenêtres et châssis en profilés acier Jansen.",
    longDescription: "Nos fenêtres en profilés acier Jansen offrent finesse et performances. Des châssis fixes aux baies panoramiques, nous créons des ouvertures sur mesure qui magnifient votre architecture.",
    heroImages: defaultHeroImages,
    startingPrice: "750",
    unit: "pièce",
    features: ["Profilés Jansen", "8 modèles", "Double/Triple vitrage", "Style atelier"],
    benefits: [
      { icon: "Eye", title: "Finesse des Profilés", description: "Profils acier ultra-fins pour maximum de lumière." },
      { icon: "Home", title: "Isolation Optimale", description: "Double ou triple vitrage haute performance." },
      { icon: "Sparkles", title: "Style Unique", description: "Du classique au contemporain, atelier inclus." },
      { icon: "Award", title: "Durabilité", description: "Acier thermolaqué pour une longévité maximale." },
    ],
    variants: [
      { id: "fixe", name: "Fenêtre Fixe Acier", description: "Maximum de lumière, isolation parfaite.", features: ["Profilés fins", "Grande surface vitrée", "Isolation premium"], startingPrice: "750" },
      { id: "oscillo-battante", name: "Fenêtre Oscillo-battante", description: "Ventilation et ouverture complète.", features: ["Double ouverture", "Entrebâillement sécurisé", "Quincaillerie cachée"], startingPrice: "1 200" },
      { id: "atelier", name: "Châssis Atelier", description: "Style industriel avec petits carreaux.", features: ["6 à 12 carreaux", "Look factory", "Très tendance"], startingPrice: "890" },
      { id: "baie", name: "Baie Panoramique", description: "Vue imprenable avec grande surface vitrée.", features: ["Coulissante ou fixe", "Grande dimension", "Vue dégagée"], startingPrice: "2 500" },
    ],
    specifications: [
      { label: "Dimensions max.", value: "Jusqu'à 4m x 3m" },
      { label: "Profilés", value: "Jansen Arte, Janisol" },
      { label: "Vitrage", value: "4/16/4 à 44.2 feuilleté" },
      { label: "Uw", value: "Jusqu'à 0.9 W/m²K" },
      { label: "Affaiblissement", value: "Jusqu'à 42 dB" },
      { label: "Garantie", value: "10 ans" },
    ],
    gallery: [],
    seoTitle: "Fenêtres Sur Mesure | Acier Jansen, Atelier, Baies | AZ Construction",
    seoDescription: "Fenêtres en profilés acier Jansen. Châssis atelier, baies panoramiques. Double et triple vitrage. Devis gratuit.",
  },
  {
    id: "verrieres",
    slug: "verrieres",
    name: "Verrières",
    nameSingular: "Verrière",
    tagline: "Lumière Intérieure",
    description: "Verrières intérieures style atelier.",
    longDescription: "Nos verrières intérieures transforment vos espaces en apportant lumière et caractère. Du style industriel chic aux designs contemporains épurés, elles créent des séparations élégantes tout en préservant la luminosité.",
    heroImages: defaultHeroImages,
    startingPrice: "480",
    unit: "ml",
    features: ["Style industriel", "7 modèles", "Porte intégrée", "Sur mesure"],
    benefits: [
      { icon: "Sparkles", title: "Style Atelier", description: "L'esprit loft dans votre intérieur." },
      { icon: "Eye", title: "Luminosité", description: "Séparez les espaces sans perdre la lumière." },
      { icon: "Ruler", title: "Sur Mesure", description: "Dimensions exactes pour une intégration parfaite." },
      { icon: "Home", title: "Polyvalence", description: "Cuisine, bureau, chambre... toutes pièces." },
    ],
    variants: [
      { id: "fixe", name: "Verrière Atelier Fixe", description: "La séparation élégante sans ouverture.", features: ["Petits carreaux", "Toute hauteur possible", "Structure fine"], startingPrice: "480" },
      { id: "porte", name: "Verrière avec Porte", description: "Passage intégré dans la verrière.", features: ["Porte battante", "Porte coulissante option", "Serrure discrète"], startingPrice: "890" },
      { id: "toute-hauteur", name: "Verrière Toute Hauteur", description: "Du sol au plafond pour un effet maximum.", features: ["Impact visuel fort", "Pièce entière", "Pose sur mesure"], startingPrice: "680" },
      { id: "cuisine", name: "Verrière Cuisine", description: "Séparez votre cuisine du salon avec style.", features: ["Passe-plat option", "Soubassement", "Étanche odeurs"], startingPrice: "520" },
    ],
    specifications: [
      { label: "Hauteur max.", value: "3m (ou plus sur étude)" },
      { label: "Largeur carreaux", value: "25 à 40 cm" },
      { label: "Profilés", value: "Acier 40x20mm ou 50x30mm" },
      { label: "Vitrage", value: "4 à 10mm, clair ou dépoli" },
      { label: "Finitions", value: "Noir, gris, couleurs RAL" },
      { label: "Garantie", value: "10 ans" },
    ],
    gallery: [],
    seoTitle: "Verrières Intérieures Sur Mesure | Style Atelier | AZ Construction",
    seoDescription: "Verrières intérieures style atelier sur mesure. Avec ou sans porte. Du sol au plafond. Devis gratuit.",
  },
  {
    id: "pergolas",
    slug: "pergolas",
    name: "Pergolas",
    nameSingular: "Pergola",
    tagline: "Vivre Dehors",
    description: "Pergolas bioclimatiques à lames orientables, classiques, carports.",
    longDescription: "Nos pergolas bioclimatiques à lames orientables vous permettent de profiter de votre extérieur par tous les temps. Réglez l'ensoleillement, protégez-vous de la pluie, créez votre espace de vie extérieur idéal.",
    heroImages: defaultHeroImages,
    startingPrice: "4 500",
    unit: "pièce",
    features: ["Lames orientables", "7 modèles", "Options LED/chauffage", "Motorisation"],
    benefits: [
      { icon: "Sparkles", title: "Lames Orientables", description: "Contrôlez lumière et ventilation à volonté." },
      { icon: "Shield", title: "Protection", description: "Pluie, soleil, vent : profitez par tous temps." },
      { icon: "Zap", title: "Motorisation", description: "Télécommande et capteurs météo." },
      { icon: "Eye", title: "Design Épuré", description: "Structure élégante en aluminium." },
    ],
    variants: [
      { id: "bioclimatique", name: "Pergola Bioclimatique", description: "Lames orientables 0° à 145°.", features: ["Lames motorisées", "Capteur pluie", "Évacuation eau intégrée"], startingPrice: "8 500" },
      { id: "adossee", name: "Pergola Adossée", description: "Fixée contre votre façade.", features: ["Extension maison", "2 poteaux", "Gouttière intégrée"], startingPrice: "4 500" },
      { id: "autoportee", name: "Pergola Autoportée", description: "Indépendante, placée où vous voulez.", features: ["4 poteaux", "Îlot de jardin", "Liberté totale"], startingPrice: "5 800" },
      { id: "carport", name: "Carport", description: "Abritez votre véhicule avec style.", features: ["1 ou 2 voitures", "Structure renforcée", "Options latérales"], startingPrice: "4 500" },
    ],
    specifications: [
      { label: "Dimensions max.", value: "6m x 4m (modules combinables)" },
      { label: "Structure", value: "Aluminium thermolaqué" },
      { label: "Lames", value: "Aluminium, largeur 135 à 200mm" },
      { label: "Motorisation", value: "Somfy, Nice, Bubendorff" },
      { label: "Options", value: "LED, chauffage, stores, baies" },
      { label: "Garantie", value: "10 ans structure, 5 ans motorisation" },
    ],
    gallery: [],
    seoTitle: "Pergolas Bioclimatiques Sur Mesure | Lames Orientables | AZ Construction",
    seoDescription: "Pergolas bioclimatiques à lames orientables sur mesure. Adossées, autoportées, carports. Motorisation Somfy. Devis gratuit.",
  },
  {
    id: "marquises",
    slug: "marquises",
    name: "Marquises & Auvents",
    nameSingular: "Marquise",
    tagline: "Protégez Vos Entrées",
    description: "Marquises pour portes d'entrée, auvents terrasse et casquettes.",
    longDescription: "Nos marquises et auvents protègent vos entrées de la pluie tout en apportant une touche architecturale élégante. Du petit auvent de porte à la grande casquette design, nous réalisons toutes les configurations.",
    heroImages: defaultHeroImages,
    startingPrice: "890",
    unit: "pièce",
    features: ["6 modèles", "Verre ou polycarb.", "Gouttière incluse", "Sur mesure"],
    benefits: [
      { icon: "Shield", title: "Protection", description: "Protégez votre entrée de la pluie et du soleil." },
      { icon: "Sparkles", title: "Design", description: "Valorisez votre façade avec une touche d'élégance." },
      { icon: "Award", title: "Durabilité", description: "Structure acier galvanisé et thermolaqué." },
      { icon: "Home", title: "Sur Mesure", description: "Dimensions adaptées à votre architecture." },
    ],
    variants: [
      { id: "porte-entree", name: "Marquise Porte d'Entrée", description: "Protégez votre porte d'entrée.", features: ["Largeur 80-150cm", "Profondeur 80-120cm", "Pose murale"], startingPrice: "890" },
      { id: "terrasse", name: "Auvent Terrasse", description: "Grande protection pour votre terrasse.", features: ["Grandes dimensions", "Poteaux option", "Toiture verre ou alu"], startingPrice: "2 200" },
      { id: "verre", name: "Marquise Verre", description: "Élégance et transparence.", features: ["Verre feuilleté", "Tirants inox", "Design épuré"], startingPrice: "1 200" },
      { id: "casquette", name: "Auvent Casquette", description: "Style architectural contemporain.", features: ["Sans tirants", "Porte-à-faux", "Design audacieux"], startingPrice: "1 800" },
    ],
    specifications: [
      { label: "Largeur", value: "80 cm à 4m+" },
      { label: "Profondeur", value: "60 cm à 3m" },
      { label: "Couverture", value: "Verre, polycarbonate, aluminium" },
      { label: "Structure", value: "Acier, inox, aluminium" },
      { label: "Évacuation", value: "Gouttière intégrée ou périphérique" },
      { label: "Garantie", value: "10 ans" },
    ],
    gallery: [],
    seoTitle: "Marquises & Auvents Sur Mesure | Verre, Design | AZ Construction",
    seoDescription: "Marquises et auvents sur mesure. Verre, polycarbonate, aluminium. Protection élégante pour vos entrées. Devis gratuit.",
  },
  {
    id: "grilles-ventilation",
    slug: "grilles-ventilation",
    name: "Grilles de ventilation",
    nameSingular: "Grille",
    tagline: "Ventilation Design",
    description: "Grilles de ventilation techniques et décoratives.",
    longDescription: "Nos grilles de ventilation allient fonctionnalité et esthétique. Des grilles décoratives pour façades aux modèles techniques coupe-feu, nous proposons des solutions sur mesure pour tous les besoins de ventilation.",
    heroImages: defaultHeroImages,
    startingPrice: "180",
    unit: "pièce",
    features: ["7 modèles", "Anti-corrosion", "Sur mesure", "Coupe-feu option"],
    benefits: [
      { icon: "Sparkles", title: "Design", description: "Grilles décoratives personnalisables." },
      { icon: "Shield", title: "Technique", description: "Solutions pour toutes contraintes techniques." },
      { icon: "Award", title: "Qualité", description: "Fabrication française, finitions soignées." },
      { icon: "Ruler", title: "Sur Mesure", description: "Dimensions et motifs personnalisés." },
    ],
    variants: [
      { id: "decorative", name: "Grille Décorative", description: "Esthétique pour façades et intérieurs.", features: ["Motifs variés", "Lames ou perforations", "Finitions RAL"], startingPrice: "180" },
      { id: "technique", name: "Grille Technique", description: "Performance pour locaux techniques.", features: ["Haute performance", "Anti-effraction option", "Grande dimension"], startingPrice: "250" },
      { id: "acoustique", name: "Grille Acoustique", description: "Réduction du bruit avec ventilation.", features: ["Atténuation 15-35 dB", "Lames acoustiques", "Studios, machines"], startingPrice: "450" },
      { id: "coupe-feu", name: "Grille Coupe-feu", description: "Protection incendie certifiée.", features: ["EI30 à EI120", "Certification CE", "Bâtiments ERP"], startingPrice: "380" },
    ],
    specifications: [
      { label: "Dimensions", value: "Sur mesure, toutes tailles" },
      { label: "Matériaux", value: "Acier, aluminium, inox" },
      { label: "Finitions", value: "Thermolaquage RAL, anodisation" },
      { label: "Performances", value: "DPS, acoustique, coupe-feu" },
      { label: "Fixation", value: "Applique, encastrée, cadre" },
      { label: "Garantie", value: "10 ans" },
    ],
    gallery: [],
    seoTitle: "Grilles de Ventilation Sur Mesure | Décoratives, Acoustiques | AZ Construction",
    seoDescription: "Grilles de ventilation sur mesure. Décoratives, techniques, acoustiques, coupe-feu. Fabrication française.",
  },
];

export function getProductFamilyBySlug(slug: string): ProductFamily | undefined {
  return productFamilies.find((family) => family.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productFamilies.map((family) => family.slug);
}


