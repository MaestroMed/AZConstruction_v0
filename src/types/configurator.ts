// Types pour le configurateur 3D

export type ProductFamily = 
  | 'portails' 
  | 'garde-corps' 
  | 'escaliers' 
  | 'clotures' 
  | 'pergolas'
  | 'marquises'
  | 'portes'
  | 'fenetres'
  | 'verrieres'
  | 'grilles-ventilation';

export type FinishType = 'mat' | 'satine' | 'brillant';

export type ViewMode = '3d' | 'ar';

export interface RALColor {
  id: string;
  name: string;
  ral: string;
  hex: string;
}

export interface ProductMaterial {
  id: string;
  name: string;
  priceModifier: number;
}

export interface ProductStyle {
  id: string;
  name: string;
  description: string;
  priceModifier: number;
  modelPath?: string;
}

export interface ProductOption {
  id: string;
  name: string;
  description: string;
  price: number;
  visible3D?: boolean; // Si l'option est visible dans le modèle 3D
}

export interface DimensionConfig {
  min: number;
  max: number;
  default: number;
  step: number;
  unit: string;
}

export interface ProductDimensions {
  width: DimensionConfig;
  height: DimensionConfig;
  depth?: DimensionConfig;
}

export interface ProductFamilyConfig {
  name: string;
  nameSingular: string;
  description: string;
  basePrice: number;
  imageKey: string; // Dynamic image key for site images
  dimensions: ProductDimensions;
  materials: ProductMaterial[];
  styles: ProductStyle[];
  options: ProductOption[];
  colors: RALColor[];
}

// State du configurateur
export interface ConfiguratorDimensions {
  width: number;
  height: number;
  depth?: number;
}

export interface ConfiguratorState {
  // Produit sélectionné
  family: ProductFamily | null;
  style: string;
  
  // Dimensions actuelles
  dimensions: ConfiguratorDimensions;
  
  // Apparence
  material: string;
  color: string;
  colorHex: string;
  finish: FinishType;
  
  // Options sélectionnées
  selectedOptions: string[];
  
  // UI State
  currentStep: number;
  isLoading: boolean;
  viewMode: ViewMode;
  isFullscreen: boolean;
  
  // Camera
  cameraPosition: 'default' | 'front' | 'side' | 'top';
  autoRotate: boolean;
}

export interface ConfiguratorActions {
  // Setters produit
  setFamily: (family: ProductFamily) => void;
  setStyle: (style: string) => void;
  
  // Setters dimensions
  setDimension: (key: keyof ConfiguratorDimensions, value: number) => void;
  setDimensions: (dimensions: Partial<ConfiguratorDimensions>) => void;
  
  // Setters apparence
  setMaterial: (material: string) => void;
  setColor: (colorId: string, colorHex: string) => void;
  setFinish: (finish: FinishType) => void;
  
  // Options
  toggleOption: (optionId: string) => void;
  setOptions: (options: string[]) => void;
  
  // UI
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setLoading: (loading: boolean) => void;
  setViewMode: (mode: ViewMode) => void;
  toggleFullscreen: () => void;
  
  // Camera
  setCameraPosition: (position: ConfiguratorState['cameraPosition']) => void;
  toggleAutoRotate: () => void;
  
  // Reset
  resetConfig: () => void;
  
  // Calculs
  calculatePrice: (config: ProductFamilyConfig) => number;
}

export type ConfiguratorStore = ConfiguratorState & ConfiguratorActions;

// Types pour les modèles 3D
export interface ModelInfo {
  path: string;
  scale: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
}

export interface FamilyModels {
  [styleId: string]: ModelInfo;
}

export interface ModelRegistry {
  [familyId: string]: FamilyModels;
}

// Props des composants 3D
export interface Scene3DProps {
  family: ProductFamily;
  style: string;
  color: string;
  dimensions: ConfiguratorDimensions;
  selectedOptions: string[];
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export interface ProductModelProps {
  modelPath: string;
  color: string;
  scale: [number, number, number];
  position?: [number, number, number];
  rotation?: [number, number, number];
}

export interface ARViewerProps {
  modelSrc: string;
  iosSrc?: string;
  alt: string;
  poster?: string;
}

// Export config pour PDF
export interface ExportConfig {
  family: string;
  style: string;
  dimensions: ConfiguratorDimensions;
  material: string;
  color: string;
  colorName: string;
  options: string[];
  price: number;
  date: Date;
  reference?: string;
}

