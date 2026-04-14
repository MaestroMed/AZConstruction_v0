export type FillType = "barreaude" | "cables" | "verre" | "tole"
export type Finition = "mat" | "satine" | "brillant"

export interface GardeCorpsConfig {
  longueur: number     // metres (1-10)
  hauteur: number      // metres (0.8-1.2)
  nbModules: number    // 1-10
  fillType: FillType
  ralCode: string      // "7016", "9005", etc.
  ralHex: string       // "#383E42"
  finition: Finition
}

export const DEFAULT_CONFIG: GardeCorpsConfig = {
  longueur: 3,
  hauteur: 1,
  nbModules: 3,
  fillType: "barreaude",
  ralCode: "7016",
  ralHex: "#383E42",
  finition: "satine",
}

// Popular RAL colors with hex approximations
export const RAL_COLORS = [
  { code: "7016", name: "Gris anthracite", hex: "#383E42" },
  { code: "9005", name: "Noir foncé", hex: "#0E0E10" },
  { code: "9016", name: "Blanc trafic", hex: "#F1F0EA" },
  { code: "7035", name: "Gris clair", hex: "#C5C7C4" },
  { code: "7021", name: "Gris noir", hex: "#2F3234" },
  { code: "9010", name: "Blanc pur", hex: "#F5F0E5" },
  { code: "6009", name: "Vert sapin", hex: "#27352A" },
  { code: "3004", name: "Rouge pourpre", hex: "#6B1C23" },
  { code: "5008", name: "Bleu gris", hex: "#2B3A44" },
  { code: "1015", name: "Ivoire clair", hex: "#E6D2B5" },
  { code: "7016S", name: "Anthracite satiné", hex: "#404549" },
  { code: "8017", name: "Brun chocolat", hex: "#3D2B1F" },
  { code: "5003", name: "Bleu saphir", hex: "#1D3557" },
  { code: "3000", name: "Rouge feu", hex: "#A72920" },
]

export const FILL_TYPE_LABELS: Record<FillType, string> = {
  barreaude: "Barreaudé",
  cables: "Câbles inox",
  verre: "Verre feuilleté",
  tole: "Tôle perforée",
}

export const FINITION_LABELS: Record<Finition, string> = {
  mat: "Mat",
  satine: "Satiné",
  brillant: "Brillant",
}

// Price estimation per linear meter (min-max) by fill type
export const PRICE_PER_ML: Record<FillType, [number, number]> = {
  barreaude: [150, 220],
  cables: [200, 280],
  verre: [280, 380],
  tole: [200, 300],
}

export function estimatePrice(config: GardeCorpsConfig): { min: number; max: number } {
  const [baseMin, baseMax] = PRICE_PER_ML[config.fillType]
  const finitionCoeff = config.finition === "brillant" ? 1.15 : 1
  return {
    min: Math.round(config.longueur * baseMin * finitionCoeff),
    max: Math.round(config.longueur * baseMax * finitionCoeff),
  }
}
