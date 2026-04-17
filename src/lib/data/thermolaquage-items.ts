import {
  ADAPTA_PATINA_SUBS,
  ADAPTA_POLARIS_SUBS,
  ADAPTA_DICHROIC_FINISHES,
  ADAPTA_SFERA_FINISHES,
} from "./adapta-collections.generated";

// Ce que demandent nos clients - 10 items pour la mosaïque thermolaquage
// Ces données seront éditables via le CMS (SiteSection) une fois implémenté

export interface ClientDemandItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  size: "default" | "large" | "wide" | "tall";
}

export const clientDemands: ClientDemandItem[] = [
  {
    // Grande image featured — Jantes en position dominante
    id: "jantes-auto",
    title: "Jantes Auto",
    description: "Rénovation jantes alu, personnalisation couleur, finition brillante ou mate.",
    imageUrl: "/placeholder.svg",
    size: "large",
  },
  {
    id: "cadres-velo",
    title: "Cadres Vélo",
    description: "Cadres VTT, route, fixie - toutes couleurs RAL disponibles.",
    imageUrl: "/placeholder.svg",
    size: "default",
  },
  {
    // Garde-corps en tall — railing vertical se lit parfaitement en portrait
    id: "garde-corps",
    title: "Garde-corps",
    description: "Balcons, terrasses, escaliers - finition impeccable.",
    imageUrl: "/placeholder.svg",
    size: "tall",
  },
  {
    id: "mobilier-jardin",
    title: "Mobilier Jardin",
    description: "Tables, chaises, bancs métalliques pour extérieur résistant aux intempéries.",
    imageUrl: "/placeholder.svg",
    size: "default",
  },
  {
    // Portails en default — photo carrée du portail, plus de problème de crop
    id: "portails",
    title: "Portails",
    description: "Portails coulissants et battants, protection longue durée.",
    imageUrl: "/placeholder.svg",
    size: "default",
  },
  {
    id: "radiateurs",
    title: "Radiateurs",
    description: "Rénovation radiateurs fonte et acier, nouvelle couleur.",
    imageUrl: "/placeholder.svg",
    size: "default",
  },
  {
    // Pièces Industrielles en large — étincelles spectaculaires en 2x2
    id: "pieces-industrielles",
    title: "Pièces Industrielles",
    description: "Charpentes, structures, équipements lourds - finition pro.",
    imageUrl: "/placeholder.svg",
    size: "large",
  },
  {
    id: "luminaires",
    title: "Luminaires",
    description: "Lampadaires, appliques, suspensions métal.",
    imageUrl: "/placeholder.svg",
    size: "default",
  },
  {
    // Pièces Moto en wide — moto sur route se lit parfaitement en horizontal
    id: "pieces-moto",
    title: "Pièces Moto",
    description: "Cadres, réservoirs, caches - personnalisation unique.",
    imageUrl: "/placeholder.svg",
    size: "wide",
  },
  {
    id: "grilles-clotures",
    title: "Grilles & Clôtures",
    description: "Clôtures, grilles de défense, barreaudage - protection durable.",
    imageUrl: "/placeholder.svg",
    size: "default",
  },
];

// ═══════════════════════════════════════════════════════
// RAL COLORS
// ═══════════════════════════════════════════════════════

export interface RALColor {
  code: string;      // "7016", "9005", etc.
  name: string;      // "RAL 7016"
  label: string;     // "Gris Anthracite"
  hex: string;       // "#383E42"
  family: string;    // "Gris", "Blanc/Noir", "Bleu", etc.
}

// Familles de couleurs RAL
export const RAL_FAMILIES = [
  "Jaune & Beige",
  "Orange",
  "Rouge",
  "Violet",
  "Bleu",
  "Vert",
  "Gris",
  "Brun",
  "Blanc & Noir",
] as const;
export type RALFamily = typeof RAL_FAMILIES[number];

// 20 Couleurs RAL les plus populaires pour le sélecteur interactif
export const ralColors20: RALColor[] = [
  { code: "7016", name: "RAL 7016", label: "Gris Anthracite", hex: "#383E42", family: "Gris" },
  { code: "9005", name: "RAL 9005", label: "Noir Profond", hex: "#0A0A0A", family: "Blanc & Noir" },
  { code: "9010", name: "RAL 9010", label: "Blanc Pur", hex: "#F7F7F7", family: "Blanc & Noir" },
  { code: "7035", name: "RAL 7035", label: "Gris Clair", hex: "#D7D7D7", family: "Gris" },
  { code: "3004", name: "RAL 3004", label: "Rouge Bordeaux", hex: "#6B1C23", family: "Rouge" },
  { code: "5003", name: "RAL 5003", label: "Bleu Saphir", hex: "#1E3A5F", family: "Bleu" },
  { code: "6005", name: "RAL 6005", label: "Vert Mousse", hex: "#0E4243", family: "Vert" },
  { code: "1015", name: "RAL 1015", label: "Ivoire Clair", hex: "#E6D2B5", family: "Jaune & Beige" },
  { code: "2004", name: "RAL 2004", label: "Orange Pur", hex: "#E75B12", family: "Orange" },
  { code: "8017", name: "RAL 8017", label: "Brun Chocolat", hex: "#442F29", family: "Brun" },
  { code: "1021", name: "RAL 1021", label: "Jaune Colza", hex: "#EEC900", family: "Jaune & Beige" },
  { code: "4005", name: "RAL 4005", label: "Lilas Bleu", hex: "#6C4675", family: "Violet" },
  { code: "9016", name: "RAL 9016", label: "Blanc Trafic", hex: "#F1F0EA", family: "Blanc & Noir" },
  { code: "7021", name: "RAL 7021", label: "Gris Noir", hex: "#2F3234", family: "Gris" },
  { code: "7022", name: "RAL 7022", label: "Gris Ombre", hex: "#4B4D46", family: "Gris" },
  { code: "3020", name: "RAL 3020", label: "Rouge Feu", hex: "#CC0000", family: "Rouge" },
  { code: "5015", name: "RAL 5015", label: "Bleu Ciel", hex: "#007CB0", family: "Bleu" },
  { code: "6009", name: "RAL 6009", label: "Vert Sapin", hex: "#1F3D2F", family: "Vert" },
  { code: "8014", name: "RAL 8014", label: "Brun Sépia", hex: "#4A3526", family: "Brun" },
  { code: "7039", name: "RAL 7039", label: "Gris Quartz", hex: "#6B695F", family: "Gris" },
];

// Catalogue complet RAL Classic (210+ couleurs)
export const ralColorsAll: RALColor[] = [
  // ── Jaune & Beige ──
  { code: "1000", name: "RAL 1000", label: "Beige Vert", hex: "#CDBA88", family: "Jaune & Beige" },
  { code: "1001", name: "RAL 1001", label: "Beige", hex: "#D2AA6D", family: "Jaune & Beige" },
  { code: "1002", name: "RAL 1002", label: "Jaune Sable", hex: "#D2A62B", family: "Jaune & Beige" },
  { code: "1003", name: "RAL 1003", label: "Jaune Signal", hex: "#F5A800", family: "Jaune & Beige" },
  { code: "1004", name: "RAL 1004", label: "Jaune Or", hex: "#E49B00", family: "Jaune & Beige" },
  { code: "1005", name: "RAL 1005", label: "Jaune Miel", hex: "#C88C00", family: "Jaune & Beige" },
  { code: "1006", name: "RAL 1006", label: "Jaune Maïs", hex: "#E3A000", family: "Jaune & Beige" },
  { code: "1007", name: "RAL 1007", label: "Jaune Narcisse", hex: "#E4A010", family: "Jaune & Beige" },
  { code: "1011", name: "RAL 1011", label: "Beige Brun", hex: "#AE8E30", family: "Jaune & Beige" },
  { code: "1012", name: "RAL 1012", label: "Jaune Citron", hex: "#D6AE00", family: "Jaune & Beige" },
  { code: "1013", name: "RAL 1013", label: "Blanc Perlé", hex: "#E7DBBF", family: "Jaune & Beige" },
  { code: "1014", name: "RAL 1014", label: "Ivoire", hex: "#DFCA8F", family: "Jaune & Beige" },
  { code: "1015", name: "RAL 1015", label: "Ivoire Clair", hex: "#E6D2B5", family: "Jaune & Beige" },
  { code: "1016", name: "RAL 1016", label: "Jaune Soufre", hex: "#F0E050", family: "Jaune & Beige" },
  { code: "1017", name: "RAL 1017", label: "Jaune Safran", hex: "#F5A623", family: "Jaune & Beige" },
  { code: "1018", name: "RAL 1018", label: "Jaune Zinc", hex: "#F8D60A", family: "Jaune & Beige" },
  { code: "1019", name: "RAL 1019", label: "Beige Gris", hex: "#A49177", family: "Jaune & Beige" },
  { code: "1020", name: "RAL 1020", label: "Jaune Olive", hex: "#9B8840", family: "Jaune & Beige" },
  { code: "1021", name: "RAL 1021", label: "Jaune Colza", hex: "#EEC900", family: "Jaune & Beige" },
  { code: "1023", name: "RAL 1023", label: "Jaune Trafic", hex: "#F6B600", family: "Jaune & Beige" },
  { code: "1024", name: "RAL 1024", label: "Jaune Ocre", hex: "#BA8E2A", family: "Jaune & Beige" },
  { code: "1026", name: "RAL 1026", label: "Jaune Brillant", hex: "#FFFF00", family: "Jaune & Beige" },
  { code: "1027", name: "RAL 1027", label: "Jaune Curry", hex: "#A57B1C", family: "Jaune & Beige" },
  { code: "1028", name: "RAL 1028", label: "Jaune Melon", hex: "#FF9B00", family: "Jaune & Beige" },
  { code: "1032", name: "RAL 1032", label: "Jaune Ajoncs", hex: "#E2A300", family: "Jaune & Beige" },
  { code: "1033", name: "RAL 1033", label: "Jaune Dahlia", hex: "#FF9A00", family: "Jaune & Beige" },
  { code: "1034", name: "RAL 1034", label: "Jaune Pastel", hex: "#EBA00A", family: "Jaune & Beige" },
  { code: "1035", name: "RAL 1035", label: "Beige Nacré", hex: "#B89950", family: "Jaune & Beige" },
  { code: "1036", name: "RAL 1036", label: "Or Nacré", hex: "#A27F2A", family: "Jaune & Beige" },
  { code: "1037", name: "RAL 1037", label: "Jaune Soleil", hex: "#F09200", family: "Jaune & Beige" },

  // ── Orange ──
  { code: "2000", name: "RAL 2000", label: "Orangé Jaune", hex: "#E45A00", family: "Orange" },
  { code: "2001", name: "RAL 2001", label: "Orangé Rouge", hex: "#BE4E20", family: "Orange" },
  { code: "2002", name: "RAL 2002", label: "Orangé Sang", hex: "#C63921", family: "Orange" },
  { code: "2003", name: "RAL 2003", label: "Orangé Pastel", hex: "#FA7625", family: "Orange" },
  { code: "2004", name: "RAL 2004", label: "Orange Pur", hex: "#E75B12", family: "Orange" },
  { code: "2005", name: "RAL 2005", label: "Orangé Brillant", hex: "#FF4C00", family: "Orange" },
  { code: "2007", name: "RAL 2007", label: "Orangé Brillant Clair", hex: "#FFA340", family: "Orange" },
  { code: "2008", name: "RAL 2008", label: "Orangé Rouge Clair", hex: "#EF6C2A", family: "Orange" },
  { code: "2009", name: "RAL 2009", label: "Orangé Trafic", hex: "#E05206", family: "Orange" },
  { code: "2010", name: "RAL 2010", label: "Orangé Signal", hex: "#D4581A", family: "Orange" },
  { code: "2011", name: "RAL 2011", label: "Orangé Profond", hex: "#E46B00", family: "Orange" },
  { code: "2012", name: "RAL 2012", label: "Orangé Saumon", hex: "#D5624A", family: "Orange" },
  { code: "2013", name: "RAL 2013", label: "Orangé Nacré", hex: "#933709", family: "Orange" },

  // ── Rouge ──
  { code: "3000", name: "RAL 3000", label: "Rouge Feu", hex: "#A52019", family: "Rouge" },
  { code: "3001", name: "RAL 3001", label: "Rouge Signal", hex: "#9B2423", family: "Rouge" },
  { code: "3002", name: "RAL 3002", label: "Rouge Carmin", hex: "#9B2321", family: "Rouge" },
  { code: "3003", name: "RAL 3003", label: "Rouge Rubis", hex: "#8C1D19", family: "Rouge" },
  { code: "3004", name: "RAL 3004", label: "Rouge Pourpre", hex: "#6B1C23", family: "Rouge" },
  { code: "3005", name: "RAL 3005", label: "Rouge Vin", hex: "#521E24", family: "Rouge" },
  { code: "3007", name: "RAL 3007", label: "Rouge Noir", hex: "#3A1D20", family: "Rouge" },
  { code: "3009", name: "RAL 3009", label: "Rouge Oxyde", hex: "#70332D", family: "Rouge" },
  { code: "3011", name: "RAL 3011", label: "Rouge Brun", hex: "#7B3231", family: "Rouge" },
  { code: "3012", name: "RAL 3012", label: "Rouge Beige", hex: "#CAA5A2", family: "Rouge" },
  { code: "3013", name: "RAL 3013", label: "Rouge Tomate", hex: "#952A27", family: "Rouge" },
  { code: "3014", name: "RAL 3014", label: "Vieux Rose", hex: "#C27279", family: "Rouge" },
  { code: "3015", name: "RAL 3015", label: "Rose Clair", hex: "#D5AAA8", family: "Rouge" },
  { code: "3016", name: "RAL 3016", label: "Rouge Corail", hex: "#AC4034", family: "Rouge" },
  { code: "3017", name: "RAL 3017", label: "Rose", hex: "#C5626D", family: "Rouge" },
  { code: "3018", name: "RAL 3018", label: "Rouge Fraise", hex: "#C4384A", family: "Rouge" },
  { code: "3020", name: "RAL 3020", label: "Rouge Trafic", hex: "#CC0000", family: "Rouge" },
  { code: "3022", name: "RAL 3022", label: "Rouge Saumon", hex: "#CF6B54", family: "Rouge" },
  { code: "3024", name: "RAL 3024", label: "Rouge Brillant", hex: "#FF0000", family: "Rouge" },
  { code: "3026", name: "RAL 3026", label: "Rouge Brillant Clair", hex: "#FF5050", family: "Rouge" },
  { code: "3027", name: "RAL 3027", label: "Rouge Framboise", hex: "#B42041", family: "Rouge" },
  { code: "3028", name: "RAL 3028", label: "Rouge Pur", hex: "#CC2D25", family: "Rouge" },
  { code: "3031", name: "RAL 3031", label: "Rouge Orient", hex: "#A63C39", family: "Rouge" },

  // ── Violet ──
  { code: "4001", name: "RAL 4001", label: "Lilas Rouge", hex: "#8B6699", family: "Violet" },
  { code: "4002", name: "RAL 4002", label: "Violet Rouge", hex: "#8B2D52", family: "Violet" },
  { code: "4003", name: "RAL 4003", label: "Violet Bruyère", hex: "#C36281", family: "Violet" },
  { code: "4004", name: "RAL 4004", label: "Violet Bordeaux", hex: "#671E44", family: "Violet" },
  { code: "4005", name: "RAL 4005", label: "Lilas Bleu", hex: "#6C4675", family: "Violet" },
  { code: "4006", name: "RAL 4006", label: "Violet Trafic", hex: "#903373", family: "Violet" },
  { code: "4007", name: "RAL 4007", label: "Violet Pourpre", hex: "#401F3E", family: "Violet" },
  { code: "4008", name: "RAL 4008", label: "Violet Signal", hex: "#82367A", family: "Violet" },
  { code: "4009", name: "RAL 4009", label: "Violet Pastel", hex: "#A38090", family: "Violet" },
  { code: "4010", name: "RAL 4010", label: "Télémagenta", hex: "#C23B7E", family: "Violet" },

  // ── Bleu ──
  { code: "5000", name: "RAL 5000", label: "Bleu Violet", hex: "#3D5B7A", family: "Bleu" },
  { code: "5001", name: "RAL 5001", label: "Bleu Vert", hex: "#23576B", family: "Bleu" },
  { code: "5002", name: "RAL 5002", label: "Bleu Outremer", hex: "#1D3468", family: "Bleu" },
  { code: "5003", name: "RAL 5003", label: "Bleu Saphir", hex: "#1E3A5F", family: "Bleu" },
  { code: "5004", name: "RAL 5004", label: "Bleu Noir", hex: "#18263A", family: "Bleu" },
  { code: "5005", name: "RAL 5005", label: "Bleu Signal", hex: "#154889", family: "Bleu" },
  { code: "5007", name: "RAL 5007", label: "Bleu Brillant", hex: "#3B6898", family: "Bleu" },
  { code: "5008", name: "RAL 5008", label: "Bleu Gris", hex: "#323C47", family: "Bleu" },
  { code: "5009", name: "RAL 5009", label: "Bleu Azur", hex: "#2B5B84", family: "Bleu" },
  { code: "5010", name: "RAL 5010", label: "Bleu Gentiane", hex: "#0C4578", family: "Bleu" },
  { code: "5011", name: "RAL 5011", label: "Bleu Acier", hex: "#1A2B3C", family: "Bleu" },
  { code: "5012", name: "RAL 5012", label: "Bleu Clair", hex: "#5499C7", family: "Bleu" },
  { code: "5013", name: "RAL 5013", label: "Bleu Cobalt", hex: "#1E3063", family: "Bleu" },
  { code: "5014", name: "RAL 5014", label: "Bleu Pigeon", hex: "#6483A4", family: "Bleu" },
  { code: "5015", name: "RAL 5015", label: "Bleu Ciel", hex: "#007CB0", family: "Bleu" },
  { code: "5017", name: "RAL 5017", label: "Bleu Trafic", hex: "#045F8A", family: "Bleu" },
  { code: "5018", name: "RAL 5018", label: "Bleu Turquoise", hex: "#3D8A8B", family: "Bleu" },
  { code: "5019", name: "RAL 5019", label: "Bleu Capri", hex: "#1B5D85", family: "Bleu" },
  { code: "5020", name: "RAL 5020", label: "Bleu Océan", hex: "#10414E", family: "Bleu" },
  { code: "5021", name: "RAL 5021", label: "Bleu Eau", hex: "#0D7A86", family: "Bleu" },
  { code: "5022", name: "RAL 5022", label: "Bleu Nuit", hex: "#17244D", family: "Bleu" },
  { code: "5023", name: "RAL 5023", label: "Bleu Distant", hex: "#49698C", family: "Bleu" },
  { code: "5024", name: "RAL 5024", label: "Bleu Pastel", hex: "#6A8FA8", family: "Bleu" },
  { code: "5025", name: "RAL 5025", label: "Bleu Nacré Gentiane", hex: "#2A7B9B", family: "Bleu" },
  { code: "5026", name: "RAL 5026", label: "Bleu Nacré Nuit", hex: "#0E2D4A", family: "Bleu" },

  // ── Vert ──
  { code: "6000", name: "RAL 6000", label: "Vert Patine", hex: "#316D5B", family: "Vert" },
  { code: "6001", name: "RAL 6001", label: "Vert Émeraude", hex: "#28713E", family: "Vert" },
  { code: "6002", name: "RAL 6002", label: "Vert Feuillage", hex: "#2D6446", family: "Vert" },
  { code: "6003", name: "RAL 6003", label: "Vert Olive", hex: "#51614F", family: "Vert" },
  { code: "6004", name: "RAL 6004", label: "Vert Bleu", hex: "#1B5443", family: "Vert" },
  { code: "6005", name: "RAL 6005", label: "Vert Mousse", hex: "#0E4243", family: "Vert" },
  { code: "6006", name: "RAL 6006", label: "Vert Gris", hex: "#3A3D2E", family: "Vert" },
  { code: "6007", name: "RAL 6007", label: "Vert Bouteille", hex: "#2B3D2A", family: "Vert" },
  { code: "6008", name: "RAL 6008", label: "Vert Brun", hex: "#3A3628", family: "Vert" },
  { code: "6009", name: "RAL 6009", label: "Vert Sapin", hex: "#1F3D2F", family: "Vert" },
  { code: "6010", name: "RAL 6010", label: "Vert Herbe", hex: "#35682D", family: "Vert" },
  { code: "6011", name: "RAL 6011", label: "Vert Réséda", hex: "#6E8C5B", family: "Vert" },
  { code: "6012", name: "RAL 6012", label: "Vert Noir", hex: "#313D38", family: "Vert" },
  { code: "6013", name: "RAL 6013", label: "Vert Roseau", hex: "#7E896B", family: "Vert" },
  { code: "6014", name: "RAL 6014", label: "Vert Jaune", hex: "#4F4D2F", family: "Vert" },
  { code: "6015", name: "RAL 6015", label: "Vert Olive Noir", hex: "#3D3D30", family: "Vert" },
  { code: "6016", name: "RAL 6016", label: "Vert Turquoise", hex: "#16643C", family: "Vert" },
  { code: "6017", name: "RAL 6017", label: "Vert Mai", hex: "#3D8238", family: "Vert" },
  { code: "6018", name: "RAL 6018", label: "Vert Jaune Clair", hex: "#5A9C27", family: "Vert" },
  { code: "6019", name: "RAL 6019", label: "Vert Blanc", hex: "#C9E0B2", family: "Vert" },
  { code: "6020", name: "RAL 6020", label: "Vert Chrome Oxyde", hex: "#3A4B35", family: "Vert" },
  { code: "6021", name: "RAL 6021", label: "Vert Pâle", hex: "#82AC77", family: "Vert" },
  { code: "6022", name: "RAL 6022", label: "Vert Olive Brun", hex: "#3B3A28", family: "Vert" },
  { code: "6024", name: "RAL 6024", label: "Vert Trafic", hex: "#167F38", family: "Vert" },
  { code: "6025", name: "RAL 6025", label: "Vert Fougère", hex: "#5A6E3B", family: "Vert" },
  { code: "6026", name: "RAL 6026", label: "Vert Opale", hex: "#0A5441", family: "Vert" },
  { code: "6027", name: "RAL 6027", label: "Vert Clair", hex: "#85C1A3", family: "Vert" },
  { code: "6028", name: "RAL 6028", label: "Vert Pin", hex: "#35533A", family: "Vert" },
  { code: "6029", name: "RAL 6029", label: "Vert Menthe", hex: "#006E3C", family: "Vert" },
  { code: "6032", name: "RAL 6032", label: "Vert Signal", hex: "#228B47", family: "Vert" },
  { code: "6033", name: "RAL 6033", label: "Vert Turquoise Menthe", hex: "#4B9E8E", family: "Vert" },
  { code: "6034", name: "RAL 6034", label: "Vert Turquoise Pastel", hex: "#81C1BC", family: "Vert" },
  { code: "6035", name: "RAL 6035", label: "Vert Nacré", hex: "#1A5D35", family: "Vert" },
  { code: "6036", name: "RAL 6036", label: "Vert Nacré Opale", hex: "#19635A", family: "Vert" },
  { code: "6037", name: "RAL 6037", label: "Vert Pur", hex: "#0B8537", family: "Vert" },
  { code: "6038", name: "RAL 6038", label: "Vert Brillant", hex: "#00B51A", family: "Vert" },

  // ── Gris ──
  { code: "7000", name: "RAL 7000", label: "Gris Petit-gris", hex: "#7A878E", family: "Gris" },
  { code: "7001", name: "RAL 7001", label: "Gris Argent", hex: "#8D9FA6", family: "Gris" },
  { code: "7002", name: "RAL 7002", label: "Gris Olive", hex: "#808070", family: "Gris" },
  { code: "7003", name: "RAL 7003", label: "Gris Mousse", hex: "#7B7D6F", family: "Gris" },
  { code: "7004", name: "RAL 7004", label: "Gris Signal", hex: "#9EA2A2", family: "Gris" },
  { code: "7005", name: "RAL 7005", label: "Gris Souris", hex: "#6B716E", family: "Gris" },
  { code: "7006", name: "RAL 7006", label: "Gris Beige", hex: "#6E6962", family: "Gris" },
  { code: "7008", name: "RAL 7008", label: "Gris Kaki", hex: "#7A7048", family: "Gris" },
  { code: "7009", name: "RAL 7009", label: "Gris Vert", hex: "#5C6B5E", family: "Gris" },
  { code: "7010", name: "RAL 7010", label: "Gris Tente", hex: "#545C55", family: "Gris" },
  { code: "7011", name: "RAL 7011", label: "Gris Fer", hex: "#495763", family: "Gris" },
  { code: "7012", name: "RAL 7012", label: "Gris Basalte", hex: "#4D585D", family: "Gris" },
  { code: "7013", name: "RAL 7013", label: "Gris Brun", hex: "#5D5B4E", family: "Gris" },
  { code: "7015", name: "RAL 7015", label: "Gris Ardoise", hex: "#4E545A", family: "Gris" },
  { code: "7016", name: "RAL 7016", label: "Gris Anthracite", hex: "#383E42", family: "Gris" },
  { code: "7021", name: "RAL 7021", label: "Gris Noir", hex: "#2F3234", family: "Gris" },
  { code: "7022", name: "RAL 7022", label: "Gris Ombre", hex: "#4B4D46", family: "Gris" },
  { code: "7023", name: "RAL 7023", label: "Gris Béton", hex: "#7D7D78", family: "Gris" },
  { code: "7024", name: "RAL 7024", label: "Gris Graphite", hex: "#474A50", family: "Gris" },
  { code: "7026", name: "RAL 7026", label: "Gris Granit", hex: "#374247", family: "Gris" },
  { code: "7030", name: "RAL 7030", label: "Gris Pierre", hex: "#9A9894", family: "Gris" },
  { code: "7031", name: "RAL 7031", label: "Gris Bleu", hex: "#5B6770", family: "Gris" },
  { code: "7032", name: "RAL 7032", label: "Gris Silex", hex: "#B9B4A9", family: "Gris" },
  { code: "7033", name: "RAL 7033", label: "Gris Ciment", hex: "#818A78", family: "Gris" },
  { code: "7034", name: "RAL 7034", label: "Gris Jaune", hex: "#938B73", family: "Gris" },
  { code: "7035", name: "RAL 7035", label: "Gris Clair", hex: "#D7D7D7", family: "Gris" },
  { code: "7036", name: "RAL 7036", label: "Gris Platine", hex: "#979892", family: "Gris" },
  { code: "7037", name: "RAL 7037", label: "Gris Poussière", hex: "#7C7F7D", family: "Gris" },
  { code: "7038", name: "RAL 7038", label: "Gris Agate", hex: "#B4B8B0", family: "Gris" },
  { code: "7039", name: "RAL 7039", label: "Gris Quartz", hex: "#6B695F", family: "Gris" },
  { code: "7040", name: "RAL 7040", label: "Gris Fenêtre", hex: "#9AA0A6", family: "Gris" },
  { code: "7042", name: "RAL 7042", label: "Gris Trafic A", hex: "#8F9695", family: "Gris" },
  { code: "7043", name: "RAL 7043", label: "Gris Trafic B", hex: "#4E5451", family: "Gris" },
  { code: "7044", name: "RAL 7044", label: "Gris Soie", hex: "#BCBBB5", family: "Gris" },
  { code: "7045", name: "RAL 7045", label: "Gris Télégris 1", hex: "#8F9695", family: "Gris" },
  { code: "7046", name: "RAL 7046", label: "Gris Télégris 2", hex: "#7F878B", family: "Gris" },
  { code: "7047", name: "RAL 7047", label: "Gris Télégris 4", hex: "#CCCDD0", family: "Gris" },
  { code: "7048", name: "RAL 7048", label: "Gris Nacré Mouse", hex: "#817B73", family: "Gris" },

  // ── Brun ──
  { code: "8000", name: "RAL 8000", label: "Brun Vert", hex: "#8B6542", family: "Brun" },
  { code: "8001", name: "RAL 8001", label: "Brun Ocre", hex: "#9B6332", family: "Brun" },
  { code: "8002", name: "RAL 8002", label: "Brun Signal", hex: "#7B4829", family: "Brun" },
  { code: "8003", name: "RAL 8003", label: "Brun Argile", hex: "#84491D", family: "Brun" },
  { code: "8004", name: "RAL 8004", label: "Brun Cuivre", hex: "#8C3B25", family: "Brun" },
  { code: "8007", name: "RAL 8007", label: "Brun Fauve", hex: "#6F4220", family: "Brun" },
  { code: "8008", name: "RAL 8008", label: "Brun Olive", hex: "#6F4A1F", family: "Brun" },
  { code: "8011", name: "RAL 8011", label: "Brun Noisette", hex: "#5A3219", family: "Brun" },
  { code: "8012", name: "RAL 8012", label: "Brun Rouge", hex: "#6C271D", family: "Brun" },
  { code: "8014", name: "RAL 8014", label: "Brun Sépia", hex: "#4A3526", family: "Brun" },
  { code: "8015", name: "RAL 8015", label: "Brun Marron", hex: "#5A2C21", family: "Brun" },
  { code: "8016", name: "RAL 8016", label: "Brun Acajou", hex: "#4A2118", family: "Brun" },
  { code: "8017", name: "RAL 8017", label: "Brun Chocolat", hex: "#442F29", family: "Brun" },
  { code: "8019", name: "RAL 8019", label: "Brun Gris", hex: "#3C3230", family: "Brun" },
  { code: "8022", name: "RAL 8022", label: "Brun Noir", hex: "#1C1412", family: "Brun" },
  { code: "8023", name: "RAL 8023", label: "Orangé Brun", hex: "#9B4D1A", family: "Brun" },
  { code: "8024", name: "RAL 8024", label: "Brun Beige", hex: "#7E4E2E", family: "Brun" },
  { code: "8025", name: "RAL 8025", label: "Brun Pâle", hex: "#7B5B45", family: "Brun" },
  { code: "8028", name: "RAL 8028", label: "Brun Terre", hex: "#4F3A27", family: "Brun" },
  { code: "8029", name: "RAL 8029", label: "Cuivre Nacré", hex: "#7A3B1E", family: "Brun" },

  // ── Blanc & Noir ──
  { code: "9001", name: "RAL 9001", label: "Blanc Crème", hex: "#F0EAD2", family: "Blanc & Noir" },
  { code: "9002", name: "RAL 9002", label: "Blanc Gris", hex: "#E8E4D5", family: "Blanc & Noir" },
  { code: "9003", name: "RAL 9003", label: "Blanc Signal", hex: "#ECECE7", family: "Blanc & Noir" },
  { code: "9004", name: "RAL 9004", label: "Noir Signal", hex: "#1E1E1E", family: "Blanc & Noir" },
  { code: "9005", name: "RAL 9005", label: "Noir Profond", hex: "#0A0A0A", family: "Blanc & Noir" },
  { code: "9006", name: "RAL 9006", label: "Blanc Aluminium", hex: "#A8AAA8", family: "Blanc & Noir" },
  { code: "9007", name: "RAL 9007", label: "Gris Aluminium", hex: "#8A8D8A", family: "Blanc & Noir" },
  { code: "9010", name: "RAL 9010", label: "Blanc Pur", hex: "#F7F7F7", family: "Blanc & Noir" },
  { code: "9011", name: "RAL 9011", label: "Noir Graphite", hex: "#1C1E21", family: "Blanc & Noir" },
  { code: "9016", name: "RAL 9016", label: "Blanc Trafic", hex: "#F1F0EA", family: "Blanc & Noir" },
  { code: "9017", name: "RAL 9017", label: "Noir Trafic", hex: "#1D1D1B", family: "Blanc & Noir" },
  { code: "9018", name: "RAL 9018", label: "Blanc Papyrus", hex: "#D7DAD5", family: "Blanc & Noir" },
  { code: "9022", name: "RAL 9022", label: "Gris Nacré Clair", hex: "#9B9B9B", family: "Blanc & Noir" },
  { code: "9023", name: "RAL 9023", label: "Gris Nacré Foncé", hex: "#7A7A7A", family: "Blanc & Noir" },
];

// ═══════════════════════════════════════════════════════
// COLLECTIONS ADAPTACOLOR
// ═══════════════════════════════════════════════════════

export interface RALCollection {
  id: string;
  slug: string;
  nom: string;
  subtitle: string;
  description: string;
  longDescription: string;
  url: string;
  accentColor: string;     // couleur d'accent pour le design
  bgGradient: string;      // classes Tailwind pour le gradient de fond
  tags: string[];
  finishes: CollectionFinish[];           // liste aplatie — toutes les finitions
  subCollections?: SubCollection[];       // sous-collections optionnelles (Patina, Polaris)
}

export interface SubCollection {
  id: string;
  name: string;
  description?: string;
  finishes: CollectionFinish[];
}

export interface CollectionFinish {
  id: string;
  name: string;
  description?: string;
  hex?: string;            // couleur approximative si disponible
  imageUrl?: string;       // image Adapta officielle
}

export const ralCollections: RALCollection[] = [
  {
    id: "patina",
    slug: "patina",
    nom: "Patina Collection",
    subtitle: "Effets oxyde et corten",
    description: "Effets oxyde et corten pour un rendu authentique et contemporain",
    longDescription: "La collection Patina propose des finitions aux effets oxyde et corten spectaculaires. Ces teintes évoquent le passage du temps, la patine naturelle des métaux exposés aux éléments. Idéale pour les projets architecturaux contemporains qui recherchent l'authenticité et le caractère.",
    url: "https://adaptacolor.com/fr/catalogoPatina",
    accentColor: "#A0522D",
    bgGradient: "from-amber-950 via-orange-900 to-stone-900",
    tags: ["Oxyde", "Corten", "Rouille", "Patine", "Naturel", "Architecture"],
    subCollections: ADAPTA_PATINA_SUBS,
    finishes: ADAPTA_PATINA_SUBS.flatMap((s) => s.finishes),
  },
  {
    id: "polaris",
    slug: "polaris",
    nom: "Polaris Collection",
    subtitle: "Pour le design industriel",
    description: "Finitions métalliques et effets structurés pour le design industriel",
    longDescription: "La collection Polaris est conçue pour le design industriel exigeant. Elle propose des effets métalliques dynamiques, des finitions martelées et des teintes inspirées de la palette Pantone Guidemetallic. Des finitions qui allient esthétique et résistance pour les marchés les plus exigeants.",
    url: "https://adaptacolor.com/fr/catalogoPolaris",
    accentColor: "#4A6FA5",
    bgGradient: "from-slate-900 via-blue-950 to-slate-800",
    tags: ["Métallique", "Industriel", "Martelé", "Structuré", "Pantone", "Extérieur"],
    subCollections: ADAPTA_POLARIS_SUBS,
    finishes: ADAPTA_POLARIS_SUBS.flatMap((s) => s.finishes),
  },
  {
    id: "dichroic",
    slug: "dichroic",
    nom: "Dichroic Collection",
    subtitle: "Effets dichroïques",
    description: "Finitions aux reflets changeants selon la lumière et l'angle de vue",
    longDescription: "La collection Dichroic propose des finitions aux propriétés optiques exceptionnelles : les couleurs changent selon l'angle de vue et la lumière incidente. Un effet saisissant, parfait pour les projets architecturaux ou décoratifs qui souhaitent sortir de l'ordinaire.",
    url: "https://adaptacolor.com/fr/catalogoDichroic",
    accentColor: "#7B2FBE",
    bgGradient: "from-violet-950 via-purple-900 to-indigo-950",
    tags: ["Dichroïque", "Irisé", "Changeant", "Luxe", "Architecture", "Design"],
    finishes: ADAPTA_DICHROIC_FINISHES,
  },
  {
    id: "sfera",
    slug: "sfera",
    nom: "Sfera Collection",
    subtitle: "Effets anodisés",
    description: "Finitions aux effets anodisés et cosmos double couche",
    longDescription: "La collection Sfera représente une avancée novatrice dans la reproduction des effets anodisés. Les séries Cosmos à double couche proposent des finitions d'une profondeur et d'un relief exceptionnels. Cuivres, bronzes, argents et aluminiums anodisés avec un rendu premium.",
    url: "https://adaptacolor.com/fr/catalogoSfera",
    accentColor: "#B87333",
    bgGradient: "from-amber-900 via-yellow-900 to-stone-900",
    tags: ["Anodisé", "Cosmos", "Cuivre", "Bronze", "Aluminium", "Premium"],
    finishes: ADAPTA_SFERA_FINISHES,
  },
];

// ═══════════════════════════════════════════════════════
// 20 Couleurs RAL les plus populaires pour le sélecteur interactif (alias)
// ═══════════════════════════════════════════════════════

// Modèles RAL interactifs
export interface RALModel {
  id: string;
  name: string;
  label: string;
  defaultImage: string;
  description: string;
}

export const ralModels: RALModel[] = [
  {
    id: "coccinelle",
    name: "coccinelle",
    label: "Coccinelle",
    defaultImage: "/placeholder.svg",
    description: "Voiture vintage classique",
  },
  {
    id: "jante",
    name: "jante",
    label: "Jante",
    defaultImage: "/placeholder.svg",
    description: "Jante aluminium sportive",
  },
  {
    id: "moto",
    name: "moto",
    label: "Moto",
    defaultImage: "/placeholder.svg",
    description: "Cadre de moto custom",
  },
  {
    id: "portail",
    name: "portail",
    label: "Portail",
    defaultImage: "/placeholder.svg",
    description: "Portail métallique élégant",
  },
];

// Fonction helper pour obtenir l'URL d'une image modèle/couleur
export function getModelColorImageUrl(modelId: string, ralCode: string): string {
  // Cette fonction sera appelée pour récupérer l'image depuis l'API
  // Pour l'instant, retourne un placeholder basé sur l'image par défaut du modèle
  const model = ralModels.find((m) => m.id === modelId);
  return model?.defaultImage || "";
}
