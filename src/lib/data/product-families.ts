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
    description: "Garde-corps escalier, main courante, balustrades verre et acier.",
    longDescription: "Nos garde-corps et mains courantes allient sécurité maximale et esthétique raffinée. Fabriqués en acier thermolaqué ou verre, ils s'adaptent à tous les styles architecturaux. Du contemporain au classique, chaque réalisation est unique et sur mesure.",
    heroImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
    ],
    startingPrice: "",
    unit: "ml",
    features: ["Norme NF P01-012", "Décennale", "8 modèles", "200+ couleurs RAL"],
    benefits: [
      { icon: "Shield", title: "Sécurité Maximale", description: "Conformes à la norme NF P01-012 pour une protection optimale." },
      { icon: "Palette", title: "Personnalisation", description: "Verre feuilleté, câbles, barreaux ou tôles perforées." },
      { icon: "Award", title: "Décennale", description: "Couverture décennale pour tous nos ouvrages." },
      { icon: "Sparkles", title: "Design Sur Mesure", description: "Chaque garde-corps est fabriqué selon vos dimensions exactes." },
    ],
    variants: [
      { id: "verre-acier", name: "Garde-corps Verre & Acier", description: "Élégance et transparence avec panneaux en verre feuilleté.", features: ["Verre 8+8 feuilleté", "Main courante acier", "Fixations invisibles"], startingPrice: "" },
      { id: "cables", name: "Garde-corps Câbles", description: "Design aérien avec câbles tendus horizontaux.", features: ["Câbles Ø4mm", "Tendeurs réglables", "Style moderne"], startingPrice: "" },
      { id: "barreaux", name: "Garde-corps Barreaudé", description: "Classique et robuste avec barreaux verticaux.", features: ["Barreaux Ø16mm", "Espacement 11cm max", "Traditionnel"], startingPrice: "" },
      { id: "main-courante", name: "Main Courante", description: "Main courante pour escaliers et rampes d'accès.", features: ["Acier ou verre", "Fixation murale", "Sur mesure"], startingPrice: "" },
    ],
    specifications: [
      { label: "Hauteur standard", value: "100 cm (90 cm pour fenêtres)" },
      { label: "Matériaux", value: "Acier thermolaqué, verre feuilleté" },
      { label: "Finitions", value: "Brossé, satiné, thermolaqué" },
      { label: "Fixation", value: "À la française, à l'anglaise, en applique" },
      { label: "Normes", value: "NF P01-012, DTU 39.4" },
      { label: "Assurance", value: "Décennale" },
    ],
    gallery: [],
    seoTitle: "Garde-corps Sur Mesure | Verre, Acier, Main Courante | AZ Construction",
    seoDescription: "Garde-corps et mains courantes sur mesure. Verre feuilleté, câbles, barreaux. Norme NF P01-012. Devis gratuit.",
  },
  {
    id: "escaliers",
    slug: "escaliers",
    name: "Escaliers",
    nameSingular: "Escalier",
    tagline: "Votre escalier sur mesure",
    description: "Escaliers droits, quart-tournant, double quart-tournant et hélicoïdaux.",
    longDescription: "Nos escaliers sont de véritables œuvres d'art fonctionnelles. Qu'il s'agisse d'un escalier droit épuré, d'un quart-tournant élégant ou d'un hélicoïdal spectaculaire, nous créons des pièces uniques qui magnifient votre intérieur.",
    heroImages: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=80",
    ],
    startingPrice: "",
    unit: "pièce",
    features: ["Décennale", "8 modèles", "Marches bois/métal", "Sur mesure"],
    benefits: [
      { icon: "Wrench", title: "Fabrication Artisanale", description: "Chaque escalier est fabriqué dans notre atelier." },
      { icon: "Home", title: "Intégration Parfaite", description: "Adaptation à toutes les configurations d'espace." },
      { icon: "Award", title: "Décennale", description: "Couverture décennale pour tous nos ouvrages." },
      { icon: "Sparkles", title: "Finitions Premium", description: "Marches bois massif ou métal, garde-corps assortis." },
    ],
    variants: [
      { id: "helicoidal", name: "Escalier Hélicoïdal", description: "L'élégance en spirale, gain de place optimal.", features: ["Structure autoportante", "Diamètre à partir de 130cm", "Design sculptural"], startingPrice: "" },
      { id: "droit", name: "Escalier Droit", description: "Classique et fonctionnel pour tous les espaces.", features: ["Structure limon central", "Marches flottantes", "Installation rapide"], startingPrice: "" },
      { id: "quart-tournant", name: "Escalier Quart-tournant", description: "Optimisation de l'espace avec un angle de 90°.", features: ["Tournant à droite ou gauche", "Palier intermédiaire", "Adaptable"], startingPrice: "" },
      { id: "suspendu", name: "Escalier Suspendu", description: "L'illusion de légèreté avec marches flottantes.", features: ["Fixation murale invisible", "Effet aérien", "Design contemporain"], startingPrice: "" },
    ],
    specifications: [
      { label: "Hauteur max.", value: "Jusqu'à 6m (plusieurs volées)" },
      { label: "Largeur passage", value: "70 à 120 cm" },
      { label: "Marches", value: "Bois massif, verre, métal, composite" },
      { label: "Structure", value: "Acier, aluminium" },
      { label: "Normes", value: "DTU, Code de la construction" },
      { label: "Assurance", value: "Décennale" },
    ],
    gallery: [],
    seoTitle: "Escaliers Sur Mesure | Hélicoïdal, Droit, Quart-tournant | AZ Construction",
    seoDescription: "Escaliers métalliques sur mesure. Hélicoïdaux, droits, suspendus. Marches bois ou métal. Devis en 48h.",
  },
  {
    id: "portails",
    slug: "portails",
    name: "Portails",
    nameSingular: "Portail",
    tagline: "L'Entrée de Votre Style",
    description: "Portails battants et coulissants en acier.",
    longDescription: "Votre portail est la première impression de votre propriété. Nous créons des portails sur mesure qui allient esthétique, sécurité et durabilité. Du design contemporain au style classique, motorisés ou manuels.",
    heroImages: defaultHeroImages,
    startingPrice: "",
    unit: "pièce",
    features: ["Motorisable", "7 modèles", "200+ couleurs RAL", "Décennale"],
    benefits: [
      { icon: "Shield", title: "Sécurité Renforcée", description: "Serrures multipoints et structure robuste." },
      { icon: "Zap", title: "Motorisation", description: "Options domotique et ouverture télécommandée." },
      { icon: "Palette", title: "200+ Couleurs", description: "Thermolaquage toutes teintes RAL." },
      { icon: "Award", title: "Décennale", description: "Couverture décennale pour tous nos ouvrages." },
    ],
    variants: [
      { id: "1-vantail", name: "Portail 1 Vantail", description: "Portail simple battant, idéal pour petites entrées.", features: ["Ouverture simple", "Motorisation possible", "Compact"], startingPrice: "" },
      { id: "battant", name: "Portail Battant 2 Vantaux", description: "L'ouverture classique à deux vantaux.", features: ["Ouverture 180°", "Motorisation possible", "Piliers standards"], startingPrice: "" },
      { id: "coulissant", name: "Portail Coulissant", description: "Idéal pour les entrées en pente.", features: ["Gain de place", "Rail au sol", "Grandes largeurs"], startingPrice: "" },
      { id: "autoportant", name: "Portail Autoportant", description: "Sans rail au sol, entretien minimal.", features: ["Pas de rail", "Motorisation intégrée", "Sol irrégulier OK"], startingPrice: "" },
      { id: "portillon", name: "Portillon Piéton", description: "Accès piéton assorti à votre portail.", features: ["Assorti au portail", "Largeur 90-120cm", "Serrure sécurisée"], startingPrice: "" },
    ],
    specifications: [
      { label: "Largeur max.", value: "Jusqu'à 7m (coulissant)" },
      { label: "Hauteur", value: "1m à 2.5m" },
      { label: "Matériaux", value: "Acier" },
      { label: "Motorisation", value: "Bras articulés, vérin, crémaillère" },
      { label: "Télécommande", value: "2 ou 4 canaux incluses" },
      { label: "Assurance", value: "Décennale" },
    ],
    gallery: [],
    seoTitle: "Portails Sur Mesure | Battants, Coulissants, Motorisés | AZ Construction",
    seoDescription: "Portails sur mesure en acier. Battants, coulissants, motorisés. 200+ couleurs RAL. Devis gratuit.",
  },
  {
    id: "clotures",
    slug: "clotures",
    name: "Clôtures",
    nameSingular: "Clôture",
    tagline: "Délimitez avec Style",
    description: "Clôtures barreaudées, grillagées, à lames et décoratives.",
    longDescription: "Nos clôtures délimitent votre propriété avec élégance et sécurité. Des modèles barreaudés classiques aux clôtures grillagées économiques, nous proposons des solutions durables et esthétiques pour tous les budgets.",
    heroImages: defaultHeroImages,
    startingPrice: "",
    unit: "ml",
    features: ["Sur mesure", "8 modèles", "Anti-corrosion", "Décennale"],
    benefits: [
      { icon: "Shield", title: "Sécurité", description: "Protection efficace de votre propriété." },
      { icon: "Eye", title: "Intimité", description: "Modèles occultants disponibles." },
      { icon: "Sparkles", title: "Esthétique", description: "Designs variés pour tous les styles." },
      { icon: "Award", title: "Décennale", description: "Couverture décennale pour tous nos ouvrages." },
    ],
    variants: [
      { id: "barreaudee", name: "Clôture Barreaudée", description: "Le classique indémodable.", features: ["Barreaux verticaux", "Plusieurs espacements", "Sobre et efficace"], startingPrice: "" },
      { id: "grillagee", name: "Clôture Grillagée", description: "Économique et robuste.", features: ["Panneaux rigides", "Installation rapide", "Rapport qualité-prix"], startingPrice: "" },
      { id: "lames", name: "Clôture à Lames", description: "Occultation et design moderne.", features: ["Lames horizontales", "100% occultant", "Style contemporain"], startingPrice: "" },
      { id: "decorative", name: "Clôture Décorative", description: "Motifs découpés laser personnalisés.", features: ["Découpe laser", "Motifs sur mesure", "Design unique"], startingPrice: "" },
    ],
    specifications: [
      { label: "Hauteur", value: "1m à 2m" },
      { label: "Matériaux", value: "Acier thermolaqué, aluminium" },
      { label: "Espacement barreaux", value: "9 à 14 cm selon modèle" },
      { label: "Poteaux", value: "60x60mm ou 80x80mm" },
      { label: "Fixation", value: "Platine, scellement, fondation" },
      { label: "Assurance", value: "Décennale" },
    ],
    gallery: [],
    seoTitle: "Clôtures Sur Mesure | Barreaudées, Grillagées, Lames | AZ Construction",
    seoDescription: "Clôtures métalliques sur mesure. Barreaudées, grillagées, lames, décoratives. Traitement anti-corrosion. Devis gratuit.",
  },
  {
    id: "portes",
    slug: "portes",
    name: "Portes",
    nameSingular: "Porte",
    tagline: "Entrées d'Exception",
    description: "Portes en acier : hall, SAS vitré, taulées, coupe-feu.",
    longDescription: "Nos portes en profilés Jansen représentent l'excellence en matière de menuiserie métallique. Du design contemporain aux exigences coupe-feu EI120, portes de hall et SAS vitrés, nous réalisons des portes d'exception pour tous les projets.",
    heroImages: defaultHeroImages,
    startingPrice: "",
    unit: "pièce",
    features: ["Profilés Jansen", "Décennale", "Coupe-feu EI120", "Isolation thermique"],
    benefits: [
      { icon: "Shield", title: "Sécurité Maximale", description: "Certification A2P et coupe-feu jusqu'à EI120." },
      { icon: "Sparkles", title: "Design Premium", description: "Finesse des profilés Jansen pour un rendu élégant." },
      { icon: "Home", title: "Isolation Performante", description: "Excellentes performances thermiques et acoustiques." },
      { icon: "Award", title: "Décennale", description: "Couverture décennale pour tous nos ouvrages." },
    ],
    variants: [
      { id: "hall-sas", name: "Porte de Hall & SAS Vitré", description: "Entrées d'immeubles et SAS vitrés sécurisés.", features: ["Vitrage feuilleté", "Contrôle d'accès", "Design contemporain"], startingPrice: "" },
      { id: "taulee-1v", name: "Porte Taulée 1 Vantail", description: "Porte pleine en tôle acier.", features: ["Structure robuste", "Isolation acoustique", "Peinture RAL"], startingPrice: "" },
      { id: "taulee-2v", name: "Porte Taulée 2 Vantaux", description: "Double porte taulée pour grands passages.", features: ["Ouverture large", "Ferme-porte option", "Industriel/tertiaire"], startingPrice: "" },
      { id: "entree", name: "Porte d'Entrée Acier", description: "L'entrée prestigieuse de votre habitat.", features: ["Vitrage isolant", "Serrure 5 points", "Design épuré"], startingPrice: "" },
      { id: "atelier", name: "Porte Atelier", description: "Style industriel avec vitrage type verrière.", features: ["Petits carreaux", "Style loft", "Avec ou sans imposte"], startingPrice: "" },
      { id: "coupe-feu", name: "Porte Coupe-feu", description: "Protection incendie certifiée EI30 à EI120.", features: ["Certification EI", "Ferme-porte", "Bâtiments ERP"], startingPrice: "" },
    ],
    specifications: [
      { label: "Dimensions", value: "Sur mesure, jusqu'à 3m de haut" },
      { label: "Profilés", value: "Jansen Janisol, Economy" },
      { label: "Vitrage", value: "Simple, double, triple, feuilleté" },
      { label: "Isolation", value: "Uf jusqu'à 1.5 W/m²K" },
      { label: "Certifications", value: "CE, NF, A2P, EI30-120" },
      { label: "Assurance", value: "Décennale" },
    ],
    gallery: [],
    seoTitle: "Portes Sur Mesure | Hall, SAS Vitré, Taulées, Coupe-feu | AZ Construction",
    seoDescription: "Portes en profilés Jansen sur mesure. Hall, SAS vitré, taulées, coupe-feu EI120. Fabrication française.",
  },
  {
    id: "fenetres",
    slug: "fenetres",
    name: "Fenêtres & Châssis",
    nameSingular: "Fenêtre",
    tagline: "Lumière & Élégance",
    description: "Fenêtres et châssis acier, aluminium et PVC.",
    longDescription: "Nos fenêtres en profilés acier Jansen, aluminium ou PVC offrent finesse et performances. Des châssis fixes aux baies panoramiques, nous créons des ouvertures sur mesure qui magnifient votre architecture. Disponible en Alu / PVC.",
    heroImages: defaultHeroImages,
    startingPrice: "",
    unit: "pièce",
    features: ["Acier / Alu / PVC", "Décennale", "Double/Triple vitrage", "Style atelier"],
    benefits: [
      { icon: "Eye", title: "Finesse des Profilés", description: "Profils ultra-fins pour maximum de lumière." },
      { icon: "Home", title: "Isolation Optimale", description: "Double ou triple vitrage haute performance." },
      { icon: "Sparkles", title: "Choix Matériaux", description: "Acier Jansen, aluminium ou PVC selon vos besoins." },
      { icon: "Award", title: "Décennale", description: "Couverture décennale pour tous nos ouvrages." },
    ],
    variants: [
      { id: "fixe", name: "Fenêtre Fixe", description: "Maximum de lumière, isolation parfaite.", features: ["Profilés fins", "Grande surface vitrée", "Isolation premium"], startingPrice: "" },
      { id: "oscillo-battante", name: "Fenêtre Oscillo-battante", description: "Ventilation et ouverture complète.", features: ["Double ouverture", "Entrebâillement sécurisé", "Quincaillerie cachée"], startingPrice: "" },
      { id: "atelier", name: "Châssis Atelier", description: "Style industriel avec petits carreaux.", features: ["6 à 12 carreaux", "Look factory", "Très tendance"], startingPrice: "" },
      { id: "baie", name: "Baie Panoramique", description: "Vue imprenable avec grande surface vitrée.", features: ["Coulissante ou fixe", "Grande dimension", "Vue dégagée"], startingPrice: "" },
    ],
    specifications: [
      { label: "Dimensions max.", value: "Jusqu'à 4m x 3m" },
      { label: "Matériaux", value: "Acier Jansen, Aluminium, PVC" },
      { label: "Vitrage", value: "4/16/4 à 44.2 feuilleté" },
      { label: "Uw", value: "Jusqu'à 0.9 W/m²K" },
      { label: "Affaiblissement", value: "Jusqu'à 42 dB" },
      { label: "Assurance", value: "Décennale" },
    ],
    gallery: [],
    seoTitle: "Fenêtres Sur Mesure | Acier, Alu, PVC, Atelier | AZ Construction",
    seoDescription: "Fenêtres en acier Jansen, aluminium ou PVC. Châssis atelier, baies panoramiques. Double et triple vitrage. Devis gratuit.",
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
    startingPrice: "",
    unit: "ml",
    features: ["Style industriel", "Décennale", "Porte intégrée", "Sur mesure"],
    benefits: [
      { icon: "Sparkles", title: "Style Atelier", description: "L'esprit loft dans votre intérieur." },
      { icon: "Eye", title: "Luminosité", description: "Séparez les espaces sans perdre la lumière." },
      { icon: "Ruler", title: "Sur Mesure", description: "Dimensions exactes pour une intégration parfaite." },
      { icon: "Award", title: "Décennale", description: "Couverture décennale pour tous nos ouvrages." },
    ],
    variants: [
      { id: "fixe", name: "Verrière Atelier Fixe", description: "La séparation élégante sans ouverture.", features: ["Petits carreaux", "Toute hauteur possible", "Structure fine"], startingPrice: "" },
      { id: "porte", name: "Verrière avec Porte", description: "Passage intégré dans la verrière.", features: ["Porte battante", "Porte coulissante option", "Serrure discrète"], startingPrice: "" },
      { id: "toute-hauteur", name: "Verrière Toute Hauteur", description: "Du sol au plafond pour un effet maximum.", features: ["Impact visuel fort", "Pièce entière", "Pose sur mesure"], startingPrice: "" },
      { id: "cuisine", name: "Verrière Cuisine", description: "Séparez votre cuisine du salon avec style.", features: ["Passe-plat option", "Soubassement", "Étanche odeurs"], startingPrice: "" },
    ],
    specifications: [
      { label: "Hauteur max.", value: "3m (ou plus sur étude)" },
      { label: "Largeur carreaux", value: "25 à 40 cm" },
      { label: "Profilés", value: "Acier 40x20mm ou 50x30mm" },
      { label: "Vitrage", value: "4 à 10mm, clair ou dépoli" },
      { label: "Finitions", value: "Noir, gris, couleurs RAL" },
      { label: "Assurance", value: "Décennale" },
    ],
    gallery: [],
    seoTitle: "Verrières Intérieures Sur Mesure | Style Atelier | AZ Construction",
    seoDescription: "Verrières intérieures style atelier sur mesure. Avec ou sans porte. Du sol au plafond. Devis gratuit.",
  },
  {
    id: "marquises",
    slug: "marquises",
    name: "Marquises",
    nameSingular: "Marquise",
    tagline: "Protégez Vos Entrées",
    description: "Marquises pour portes d'entrée et façades.",
    longDescription: "Nos marquises protègent vos entrées de la pluie tout en apportant une touche architecturale élégante. Marquises vitrées, casquettes design, nous réalisons toutes les configurations sur mesure.",
    heroImages: defaultHeroImages,
    startingPrice: "",
    unit: "pièce",
    features: ["Décennale", "Verre ou polycarb.", "Gouttière incluse", "Sur mesure"],
    benefits: [
      { icon: "Shield", title: "Protection", description: "Protégez votre entrée de la pluie et du soleil." },
      { icon: "Sparkles", title: "Design", description: "Valorisez votre façade avec une touche d'élégance." },
      { icon: "Award", title: "Décennale", description: "Couverture décennale pour tous nos ouvrages." },
      { icon: "Home", title: "Sur Mesure", description: "Dimensions adaptées à votre architecture." },
    ],
    variants: [
      { id: "porte-entree", name: "Marquise Porte d'Entrée", description: "Protégez votre porte d'entrée.", features: ["Largeur 80-150cm", "Profondeur 80-120cm", "Pose murale"], startingPrice: "" },
      { id: "verre", name: "Marquise Verre", description: "Élégance et transparence.", features: ["Verre feuilleté", "Tirants acier", "Design épuré"], startingPrice: "" },
      { id: "casquette", name: "Marquise Casquette", description: "Style architectural contemporain.", features: ["Sans tirants", "Porte-à-faux", "Design audacieux"], startingPrice: "" },
    ],
    specifications: [
      { label: "Largeur", value: "80 cm à 4m+" },
      { label: "Profondeur", value: "60 cm à 2m" },
      { label: "Couverture", value: "Verre, polycarbonate" },
      { label: "Structure", value: "Acier thermolaqué" },
      { label: "Évacuation", value: "Gouttière intégrée ou périphérique" },
      { label: "Assurance", value: "Décennale" },
    ],
    gallery: [],
    seoTitle: "Marquises Sur Mesure | Verre, Design | AZ Construction",
    seoDescription: "Marquises sur mesure. Verre, polycarbonate. Protection élégante pour vos entrées. Devis gratuit.",
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
    startingPrice: "",
    unit: "pièce",
    features: ["Décennale", "Anti-corrosion", "Sur mesure", "Coupe-feu option"],
    benefits: [
      { icon: "Sparkles", title: "Design", description: "Grilles décoratives personnalisables." },
      { icon: "Shield", title: "Technique", description: "Solutions pour toutes contraintes techniques." },
      { icon: "Award", title: "Décennale", description: "Couverture décennale pour tous nos ouvrages." },
      { icon: "Ruler", title: "Sur Mesure", description: "Dimensions et motifs personnalisés." },
    ],
    variants: [
      { id: "decorative", name: "Grille Décorative", description: "Esthétique pour façades et intérieurs.", features: ["Motifs variés", "Lames ou perforations", "Finitions RAL"], startingPrice: "" },
      { id: "technique", name: "Grille Technique", description: "Performance pour locaux techniques.", features: ["Haute performance", "Anti-effraction option", "Grande dimension"], startingPrice: "" },
      { id: "caliboutis", name: "Grille Caliboutis", description: "Grille caliboutis métallique sur mesure, pour passages muraux et intégrations architecturales.", features: ["Sur mesure", "Acier thermolaqué", "Intégration architecturale"], startingPrice: "" },
    ],
    specifications: [
      { label: "Dimensions", value: "Sur mesure, toutes tailles" },
      { label: "Matériaux", value: "Acier, aluminium" },
      { label: "Finitions", value: "Thermolaquage RAL, anodisation" },
      { label: "Performances", value: "DPS, acoustique, coupe-feu" },
      { label: "Fixation", value: "Applique, encastrée, cadre" },
      { label: "Assurance", value: "Décennale" },
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


