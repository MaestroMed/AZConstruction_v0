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
    id: "jantes-auto",
    title: "Jantes Auto",
    description: "Rénovation jantes alu, personnalisation couleur, finition brillante ou mate.",
    imageUrl: "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?w=600&q=80",
    size: "large",
  },
  {
    id: "cadres-velo",
    title: "Cadres Vélo",
    description: "Cadres VTT, route, fixie - toutes couleurs RAL disponibles.",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80",
    size: "default",
  },
  {
    id: "mobilier-jardin",
    title: "Mobilier Jardin",
    description: "Tables, chaises, bancs métalliques pour extérieur résistant aux intempéries.",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80",
    size: "default",
  },
  {
    id: "portails",
    title: "Portails",
    description: "Portails coulissants et battants, protection longue durée.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    size: "wide",
  },
  {
    id: "garde-corps",
    title: "Garde-corps",
    description: "Balcons, terrasses, escaliers - finition impeccable.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    size: "default",
  },
  {
    id: "radiateurs",
    title: "Radiateurs",
    description: "Rénovation radiateurs fonte et acier, nouvelle couleur.",
    imageUrl: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    size: "default",
  },
  {
    id: "pieces-moto",
    title: "Pièces Moto",
    description: "Cadres, réservoirs, caches - personnalisation unique.",
    imageUrl: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
    size: "tall",
  },
  {
    id: "luminaires",
    title: "Luminaires",
    description: "Lampadaires, appliques, suspensions métal.",
    imageUrl: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    size: "default",
  },
  {
    id: "grilles-clotures",
    title: "Grilles & Clôtures",
    description: "Clôtures, grilles de défense, barreaudage - protection durable.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    size: "default",
  },
  {
    id: "pieces-industrielles",
    title: "Pièces Industrielles",
    description: "Charpentes, structures, équipements lourds - finition pro.",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
    size: "large",
  },
];

// 20 Couleurs RAL les plus populaires pour le sélecteur interactif
export interface RALColor {
  code: string;      // "7016", "9005", etc.
  name: string;      // "RAL 7016"
  label: string;     // "Gris Anthracite"
  hex: string;       // "#383E42"
}

export const ralColors20: RALColor[] = [
  { code: "7016", name: "RAL 7016", label: "Gris Anthracite", hex: "#383E42" },
  { code: "9005", name: "RAL 9005", label: "Noir Profond", hex: "#0A0A0A" },
  { code: "9010", name: "RAL 9010", label: "Blanc Pur", hex: "#F7F7F7" },
  { code: "7035", name: "RAL 7035", label: "Gris Clair", hex: "#D7D7D7" },
  { code: "3004", name: "RAL 3004", label: "Rouge Bordeaux", hex: "#6B1C23" },
  { code: "5003", name: "RAL 5003", label: "Bleu Saphir", hex: "#1E3A5F" },
  { code: "6005", name: "RAL 6005", label: "Vert Mousse", hex: "#0E4243" },
  { code: "1015", name: "RAL 1015", label: "Ivoire Clair", hex: "#E6D2B5" },
  { code: "2004", name: "RAL 2004", label: "Orange Pur", hex: "#E75B12" },
  { code: "8017", name: "RAL 8017", label: "Brun Chocolat", hex: "#442F29" },
  { code: "1021", name: "RAL 1021", label: "Jaune Colza", hex: "#EEC900" },
  { code: "4005", name: "RAL 4005", label: "Lilas Bleu", hex: "#6C4675" },
  { code: "9016", name: "RAL 9016", label: "Blanc Trafic", hex: "#F1F0EA" },
  { code: "7021", name: "RAL 7021", label: "Gris Noir", hex: "#2F3234" },
  { code: "7022", name: "RAL 7022", label: "Gris Ombre", hex: "#4B4D46" },
  { code: "3020", name: "RAL 3020", label: "Rouge Feu", hex: "#CC0000" },
  { code: "5015", name: "RAL 5015", label: "Bleu Ciel", hex: "#007CB0" },
  { code: "6009", name: "RAL 6009", label: "Vert Sapin", hex: "#1F3D2F" },
  { code: "8014", name: "RAL 8014", label: "Brun Sépia", hex: "#4A3526" },
  { code: "7039", name: "RAL 7039", label: "Gris Quartz", hex: "#6B695F" },
];

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
    defaultImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "Voiture vintage classique",
  },
  {
    id: "jante",
    name: "jante",
    label: "Jante",
    defaultImage: "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?w=800&q=80",
    description: "Jante aluminium sportive",
  },
  {
    id: "moto",
    name: "moto",
    label: "Moto",
    defaultImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    description: "Cadre de moto custom",
  },
  {
    id: "portail",
    name: "portail",
    label: "Portail",
    defaultImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
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

