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

