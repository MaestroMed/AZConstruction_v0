import type { ModelRegistry, ModelInfo, ProductFamily } from '@/types/configurator';

/**
 * Registre des modèles 3D pour chaque famille et style de produit.
 * Pour le MVP, on utilise des modèles générés en code (ProceduralModel).
 * Les chemins vers des fichiers .glb seront utilisés quand les vrais modèles seront disponibles.
 */
export const modelRegistry: ModelRegistry = {
  // ============================================
  // GARDE-CORPS
  // ============================================
  'garde-corps': {
    verre: {
      path: '/models/garde-corps/verre.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    cables: {
      path: '/models/garde-corps/cables.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    barreaux: {
      path: '/models/garde-corps/barreaux.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    toles: {
      path: '/models/garde-corps/toles.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },

  // ============================================
  // ESCALIERS
  // ============================================
  escaliers: {
    droit: {
      path: '/models/escaliers/droit.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    quart: {
      path: '/models/escaliers/quart.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    double: {
      path: '/models/escaliers/double.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    helicoidal: {
      path: '/models/escaliers/helicoidal.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, Math.PI / 4, 0],
    },
    suspendu: {
      path: '/models/escaliers/suspendu.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    exterieur: {
      path: '/models/escaliers/exterieur.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },

  // ============================================
  // PORTAILS
  // ============================================
  portails: {
    contemporain: {
      path: '/models/portails/contemporain.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    classique: {
      path: '/models/portails/classique.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    ajoure: {
      path: '/models/portails/ajoure.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    plein: {
      path: '/models/portails/plein.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    coulissant: {
      path: '/models/portails/coulissant.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },

  // ============================================
  // CLÔTURES
  // ============================================
  clotures: {
    barreaudee: {
      path: '/models/clotures/barreaudee.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    panneaux: {
      path: '/models/clotures/panneaux.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    lames: {
      path: '/models/clotures/lames.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    decorative: {
      path: '/models/clotures/decorative.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },

  // ============================================
  // PERGOLAS
  // ============================================
  pergolas: {
    bioclimatique: {
      path: '/models/pergolas/bioclimatique.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    classique: {
      path: '/models/pergolas/classique.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    adossee: {
      path: '/models/pergolas/adossee.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    autoportee: {
      path: '/models/pergolas/autoportee.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    carport: {
      path: '/models/pergolas/carport.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },

  // ============================================
  // MARQUISES & AUVENTS
  // ============================================
  marquises: {
    entree: {
      path: '/models/marquises/entree.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    terrasse: {
      path: '/models/marquises/terrasse.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    casquette: {
      path: '/models/marquises/casquette.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    verre: {
      path: '/models/marquises/verre.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },

  // ============================================
  // PORTES
  // ============================================
  portes: {
    entree: {
      path: '/models/portes/entree.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    atelier: {
      path: '/models/portes/atelier.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    technique: {
      path: '/models/portes/technique.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    'coupe-feu': {
      path: '/models/portes/coupe-feu.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    blindee: {
      path: '/models/portes/blindee.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    coulissante: {
      path: '/models/portes/coulissante.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },

  // ============================================
  // FENÊTRES & CHÂSSIS
  // ============================================
  fenetres: {
    fixe: {
      path: '/models/fenetres/fixe.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    'oscillo-battante': {
      path: '/models/fenetres/oscillo-battante.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    coulissante: {
      path: '/models/fenetres/coulissante.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    atelier: {
      path: '/models/fenetres/atelier.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    panoramique: {
      path: '/models/fenetres/panoramique.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    'porte-fenetre': {
      path: '/models/fenetres/porte-fenetre.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },

  // ============================================
  // VERRIÈRES
  // ============================================
  verrieres: {
    atelier: {
      path: '/models/verrieres/atelier.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    'avec-porte': {
      path: '/models/verrieres/avec-porte.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    'toute-hauteur': {
      path: '/models/verrieres/toute-hauteur.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    imposte: {
      path: '/models/verrieres/imposte.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    cuisine: {
      path: '/models/verrieres/cuisine.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },

  // ============================================
  // GRILLES DE VENTILATION
  // ============================================
  'grilles-ventilation': {
    decorative: {
      path: '/models/grilles-ventilation/decorative.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    technique: {
      path: '/models/grilles-ventilation/technique.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    acoustique: {
      path: '/models/grilles-ventilation/acoustique.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    'pare-pluie': {
      path: '/models/grilles-ventilation/pare-pluie.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
    'coupe-feu': {
      path: '/models/grilles-ventilation/coupe-feu.glb',
      scale: [1, 1, 1],
      position: [0, 0, 0],
      rotation: [0, 0, 0],
    },
  },
};

/**
 * Récupère les informations du modèle pour une famille et un style donnés.
 * Retourne le premier style disponible si le style demandé n'existe pas.
 */
export function getModelInfo(
  family: ProductFamily,
  style: string
): ModelInfo | null {
  const familyModels = modelRegistry[family];
  if (!familyModels) return null;

  // Retourne le style demandé ou le premier disponible
  return familyModels[style] || Object.values(familyModels)[0] || null;
}

/**
 * Vérifie si un modèle GLB existe (utile pour basculer vers le mode procédural)
 */
export function hasGLBModel(family: ProductFamily, style: string): boolean {
  const modelInfo = getModelInfo(family, style);
  // Pour le MVP, on considère qu'aucun GLB n'existe encore
  // Changer cette logique quand les vrais modèles seront ajoutés
  return false;
}

/**
 * Calcule le scale du modèle en fonction des dimensions configurées
 */
export function calculateModelScale(
  baseDimensions: { width: number; height: number },
  currentDimensions: { width: number; height: number },
  baseScale: [number, number, number] = [1, 1, 1]
): [number, number, number] {
  const widthRatio = currentDimensions.width / baseDimensions.width;
  const heightRatio = currentDimensions.height / baseDimensions.height;
  
  return [
    baseScale[0] * widthRatio,
    baseScale[1] * heightRatio,
    baseScale[2] * Math.max(widthRatio, heightRatio) * 0.5 + 0.5, // Profondeur proportionnelle
  ];
}

/**
 * Map des couleurs RAL vers leurs valeurs hex pour Three.js
 * Palette étendue pour correspondre au catalogue complet
 */
export const RAL_COLORS: Record<string, string> = {
  // Blancs
  'ral9010': '#FFFFFF', // Blanc pur
  'ral9016': '#F6F6F6', // Blanc signalisation
  'ral9001': '#FDF4E3', // Blanc crème
  'ral9003': '#F4F4F4', // Blanc de sécurité
  
  // Gris
  'ral7016': '#383E42', // Gris anthracite
  'ral7021': '#2F3234', // Gris noir
  'ral7024': '#474A50', // Gris graphite
  'ral7035': '#CBD0CC', // Gris clair
  'ral7036': '#999999', // Gris platine
  'ral7037': '#7A7B7A', // Gris poussière
  'ral7038': '#B4B8B0', // Gris agate
  'ral7039': '#6C6B5E', // Gris quartz
  'ral7040': '#9DA3A6', // Gris fenêtre
  'ral7043': '#4E5451', // Gris signalisation B
  
  // Noirs
  'ral9005': '#0E0E10', // Noir foncé
  'ral9011': '#1C1C1C', // Noir graphite
  'ral9017': '#1E1E1E', // Noir signalisation
  
  // Bruns
  'ral8017': '#442F29', // Brun chocolat
  'ral8019': '#3D3635', // Brun gris
  'ral8022': '#1A1718', // Brun noir
  
  // Verts
  'ral6005': '#0F4336', // Vert mousse
  'ral6009': '#273829', // Vert sapin
  'ral6012': '#303D3A', // Vert noir
  
  // Bleus
  'ral5003': '#1E3A5F', // Bleu saphir
  'ral5008': '#313C48', // Bleu gris
  'ral5011': '#1A2B3C', // Bleu acier
  'ral5015': '#2271B3', // Bleu ciel
  
  // Rouges
  'ral3000': '#A72920', // Rouge feu
  'ral3004': '#6B1C23', // Rouge bordeaux
  'ral3005': '#5C232F', // Rouge vin
  
  // Ivoires & Beiges
  'ral1015': '#E6D2B5', // Ivoire clair
  'ral1013': '#EAE6CA', // Blanc perlé
  'ral1019': '#A08C7A', // Beige gris
  
  // Spéciaux
  'inox': '#C0C0C0', // Inox naturel
  'inox_brosse': '#C0C0C0', // Inox brossé
  'inox_poli': '#E8E8E8', // Inox poli miroir
  'corten': '#8B4513', // Corten (acier patiné)
  'zinc': '#A8A8A8', // Zinc naturel
};

/**
 * Obtient la couleur hex à partir d'un ID RAL
 */
export function getColorHex(colorId: string): string {
  return RAL_COLORS[colorId] || '#383E42';
}

/**
 * Liste des familles avec leurs informations de base
 */
export const FAMILY_INFO: Record<ProductFamily, { name: string; icon: string }> = {
  'garde-corps': { name: 'Garde-corps', icon: '🛡️' },
  'escaliers': { name: 'Escaliers', icon: '🪜' },
  'portails': { name: 'Portails', icon: '🚪' },
  'clotures': { name: 'Clôtures', icon: '🏗️' },
  'pergolas': { name: 'Pergolas', icon: '🏠' },
  'marquises': { name: 'Marquises', icon: '☂️' },
  'portes': { name: 'Portes', icon: '🚪' },
  'fenetres': { name: 'Fenêtres', icon: '🪟' },
  'verrieres': { name: 'Verrières', icon: '🔲' },
  'grilles-ventilation': { name: 'Grilles', icon: '🌀' },
};
