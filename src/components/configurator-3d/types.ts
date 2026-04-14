// ── Types ──────────────────────────────────────────────────

export type FillType = "barreaude" | "cables" | "verre" | "tole"
export type Finition = "mat" | "satine" | "brillant"
export type BuildingType = "residential" | "erp"
export type CameraPreset = "perspective" | "front" | "side" | "top"

export interface GardeCorpsConfig {
  longueur: number       // metres (0.5–6)
  hauteur: number        // metres (0.8–1.2)
  nbModules: number      // 1–6
  fillType: FillType
  ralCode: string        // "7016", "9005", etc.
  ralHex: string         // "#383E42"
  finition: Finition
  buildingType: BuildingType
}

export const DEFAULT_CONFIG: GardeCorpsConfig = {
  longueur: 3,
  hauteur: 1,
  nbModules: 3,
  fillType: "barreaude",
  ralCode: "7016",
  ralHex: "#383E42",
  finition: "satine",
  buildingType: "residential",
}

// ── NF P01-012 (Révision 2024) ────────────────────────────

export const NORMS = {
  /** Hauteur min résidentiel (m) */
  minHeightResidential: 1.0,
  /** Hauteur min ERP (m) */
  minHeightERP: 1.1,
  /** Zone de sécurité pleine (m) — non-escaladable */
  securityZoneHeight: 0.60,
  /** Espacement max barreaux verticaux (m) — Gabarit T1 Ø11cm */
  maxBarSpacing: 0.11,
  /** Espacement max lisses horizontales (m) — Gabarit T2 Ø18cm */
  maxHorizontalSpacing: 0.18,
  /** Espacement max câbles au-dessus de la zone de sécurité (m) */
  maxCableSpacing: 0.145,
  /** Jeu max entre sol et remplissage (m) */
  maxBottomClearance: 0.11,
  /** Entraxe max poteaux résidentiel avec barreaux (m) */
  maxPostSpacingBars: 1.50,
  /** Entraxe max poteaux avec verre (m) */
  maxPostSpacingGlass: 1.25,
  /** Diamètre main courante min/max (m) */
  handrailDiameterMin: 0.025,
  handrailDiameterMax: 0.050,
  /** Surface max panneau verre (m²) */
  maxGlassPanelArea: 0.90,
  /** Résistance min résidentiel (daN) */
  resistanceResidential: 60,
  /** Résistance min ERP (daN) */
  resistanceERP: 100,
} as const

export interface NormViolation {
  code: string
  message: string
  severity: "error" | "warning"
}

export function validateNorms(config: GardeCorpsConfig): NormViolation[] {
  const violations: NormViolation[] = []
  const minH = config.buildingType === "erp" ? NORMS.minHeightERP : NORMS.minHeightResidential

  if (config.hauteur < minH) {
    violations.push({
      code: "HEIGHT",
      message: `Hauteur min ${config.buildingType === "erp" ? "ERP" : "résidentiel"} : ${minH * 100} cm (NF P01-012)`,
      severity: "error",
    })
  }

  if (config.fillType === "cables" && config.hauteur <= NORMS.securityZoneHeight + 0.15) {
    violations.push({
      code: "CABLE_ZONE",
      message: "Câbles interdits dans la zone de sécurité 0–60 cm. Une partie pleine est requise en bas.",
      severity: "warning",
    })
  }

  const moduleWidth = config.longueur / config.nbModules
  const maxPostSpacing = config.fillType === "verre" ? NORMS.maxPostSpacingGlass : NORMS.maxPostSpacingBars
  if (moduleWidth > maxPostSpacing) {
    violations.push({
      code: "POST_SPACING",
      message: `Entraxe poteaux max ${maxPostSpacing * 100} cm pour ${config.fillType === "verre" ? "verre" : "barreaux"}. Actuellement ${(moduleWidth * 100).toFixed(0)} cm.`,
      severity: "error",
    })
  }

  if (config.fillType === "verre") {
    const panelArea = moduleWidth * (config.hauteur - 0.1)
    if (panelArea > NORMS.maxGlassPanelArea) {
      violations.push({
        code: "GLASS_AREA",
        message: `Surface panneau verre max ${NORMS.maxGlassPanelArea} m². Actuellement ${panelArea.toFixed(2)} m².`,
        severity: "warning",
      })
    }
  }

  return violations
}

// ── RAL Colors — Official hex approximations ───────────────

export const RAL_COLORS = [
  // Gris / Noirs — les plus populaires
  { code: "7016", name: "Gris anthracite", hex: "#293133" },
  { code: "9005", name: "Noir foncé", hex: "#0A0A0A" },
  { code: "7021", name: "Gris noir", hex: "#2F3234" },
  { code: "7016S", name: "Anthracite sablé", hex: "#353B40" },
  { code: "7022", name: "Gris ombre", hex: "#4B4D46" },
  { code: "7039", name: "Gris quartz", hex: "#6C6960" },
  { code: "7035", name: "Gris clair", hex: "#C5C7C4" },
  // Blancs
  { code: "9016", name: "Blanc trafic", hex: "#F1F0EA" },
  { code: "9010", name: "Blanc pur", hex: "#F5F0E5" },
  { code: "9001", name: "Blanc crème", hex: "#FDF4E3" },
  // Beiges
  { code: "1015", name: "Ivoire clair", hex: "#E6D2B5" },
  { code: "1019", name: "Beige gris", hex: "#9E9764" },
  // Bruns
  { code: "8017", name: "Brun chocolat", hex: "#45322E" },
  { code: "8019", name: "Brun gris", hex: "#403A3A" },
  // Bleus
  { code: "5003", name: "Bleu saphir", hex: "#1D3461" },
  { code: "5008", name: "Bleu gris", hex: "#263B4E" },
  { code: "5024", name: "Bleu pastel", hex: "#5B9BD5" },
  // Verts
  { code: "6009", name: "Vert sapin", hex: "#27352A" },
  { code: "6005", name: "Vert mousse", hex: "#2F4538" },
  // Rouges
  { code: "3004", name: "Rouge pourpre", hex: "#6B1C23" },
  { code: "3000", name: "Rouge feu", hex: "#A72920" },
]

// ── Labels ──────────────────────────────────────────────────

export const FILL_TYPE_LABELS: Record<FillType, string> = {
  barreaude: "Barreaudé",
  cables: "Câbles inox",
  verre: "Verre feuilleté",
  tole: "Tôle perforée",
}

export const FILL_TYPE_DESCRIPTIONS: Record<FillType, string> = {
  barreaude: "Barreaux verticaux aluminium — le classique sûr et élégant",
  cables: "Câbles inox tendus — design épuré, vue dégagée",
  verre: "Panneaux verre feuilleté 44.2 — transparence totale",
  tole: "Tôle perforée — intimité avec style industriel",
}

export const FINITION_LABELS: Record<Finition, string> = {
  mat: "Mat",
  satine: "Satiné",
  brillant: "Brillant",
}

export const BUILDING_TYPE_LABELS: Record<BuildingType, string> = {
  residential: "Résidentiel",
  erp: "ERP / Public",
}

// ── PBR Material presets (thermolaquage) ────────────────────

export const MATERIAL_PRESETS: Record<Finition, {
  roughness: number
  metalness: number
  envMapIntensity: number
  clearcoat: number
  clearcoatRoughness: number
}> = {
  mat: {
    roughness: 0.85,
    metalness: 0.15,
    envMapIntensity: 0.3,
    clearcoat: 0,
    clearcoatRoughness: 0,
  },
  satine: {
    roughness: 0.5,
    metalness: 0.3,
    envMapIntensity: 0.7,
    clearcoat: 0.15,
    clearcoatRoughness: 0.4,
  },
  brillant: {
    roughness: 0.15,
    metalness: 0.5,
    envMapIntensity: 1.2,
    clearcoat: 0.6,
    clearcoatRoughness: 0.1,
  },
}

// ── Camera presets ──────────────────────────────────────────

export const CAMERA_PRESETS: Record<CameraPreset, {
  position: [number, number, number]
  label: string
  icon: string
}> = {
  perspective: { position: [2.5, 1.5, 3], label: "3D", icon: "cube" },
  front: { position: [0, 1, 4], label: "Face", icon: "square" },
  side: { position: [4, 1, 0], label: "Profil", icon: "sidebar" },
  top: { position: [0, 5, 0.01], label: "Dessus", icon: "layers" },
}

// ── Price estimation ────────────────────────────────────────

/** Prix au mètre linéaire [min, max] par type de remplissage */
export const PRICE_PER_ML: Record<FillType, [number, number]> = {
  barreaude: [150, 220],
  cables: [200, 280],
  verre: [280, 380],
  tole: [200, 300],
}

export interface PriceBreakdown {
  min: number
  max: number
  details: string
}

export function estimatePrice(config: GardeCorpsConfig): PriceBreakdown {
  const [baseMin, baseMax] = PRICE_PER_ML[config.fillType]

  // Coefficient finition
  const finitionCoeff = config.finition === "brillant" ? 1.15 : config.finition === "mat" ? 1.0 : 1.05

  // Coefficient hauteur (référence 1m)
  const hauteurCoeff = 0.7 + (config.hauteur * 0.3)

  // Légère majoration pour plus de poteaux (plus de modules = plus de poteaux)
  const postCoeff = 1 + (config.nbModules / config.longueur - 1) * 0.05

  // ERP = majoration matériaux plus résistants
  const erpCoeff = config.buildingType === "erp" ? 1.12 : 1.0

  const min = Math.round(config.longueur * baseMin * finitionCoeff * hauteurCoeff * postCoeff * erpCoeff)
  const max = Math.round(config.longueur * baseMax * finitionCoeff * hauteurCoeff * postCoeff * erpCoeff)

  const details = `${config.longueur}m × ${FILL_TYPE_LABELS[config.fillType]} × ${FINITION_LABELS[config.finition]}${config.buildingType === "erp" ? " × ERP" : ""}`

  return { min, max, details }
}
