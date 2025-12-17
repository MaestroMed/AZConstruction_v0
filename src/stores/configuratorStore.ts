import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type {
  ConfiguratorStore,
  ConfiguratorState,
  ConfiguratorDimensions,
  ProductFamily,
  FinishType,
  ViewMode,
  ProductFamilyConfig,
} from '@/types/configurator';

const initialState: ConfiguratorState = {
  // Produit
  family: null,
  style: '',
  
  // Dimensions
  dimensions: {
    width: 350,
    height: 180,
    depth: undefined,
  },
  
  // Apparence
  material: '',
  color: '',
  colorHex: '#383E42',
  finish: 'satine',
  
  // Options
  selectedOptions: [],
  
  // UI
  currentStep: 1,
  isLoading: false,
  viewMode: '3d',
  isFullscreen: false,
  
  // Camera
  cameraPosition: 'default',
  autoRotate: true,
};

export const useConfiguratorStore = create<ConfiguratorStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Setters produit
        setFamily: (family: ProductFamily) => 
          set({ family }, false, 'setFamily'),
        
        setStyle: (style: string) => 
          set({ style }, false, 'setStyle'),

        // Setters dimensions
        setDimension: (key: keyof ConfiguratorDimensions, value: number) =>
          set(
            (state) => ({
              dimensions: { ...state.dimensions, [key]: value },
            }),
            false,
            'setDimension'
          ),

        setDimensions: (dimensions: Partial<ConfiguratorDimensions>) =>
          set(
            (state) => ({
              dimensions: { ...state.dimensions, ...dimensions },
            }),
            false,
            'setDimensions'
          ),

        // Setters apparence
        setMaterial: (material: string) => 
          set({ material }, false, 'setMaterial'),

        setColor: (colorId: string, colorHex: string) =>
          set({ color: colorId, colorHex }, false, 'setColor'),

        setFinish: (finish: FinishType) => 
          set({ finish }, false, 'setFinish'),

        // Options
        toggleOption: (optionId: string) =>
          set(
            (state) => ({
              selectedOptions: state.selectedOptions.includes(optionId)
                ? state.selectedOptions.filter((id) => id !== optionId)
                : [...state.selectedOptions, optionId],
            }),
            false,
            'toggleOption'
          ),

        setOptions: (options: string[]) =>
          set({ selectedOptions: options }, false, 'setOptions'),

        // UI
        setCurrentStep: (step: number) =>
          set({ currentStep: step }, false, 'setCurrentStep'),

        nextStep: () =>
          set(
            (state) => ({ currentStep: Math.min(4, state.currentStep + 1) }),
            false,
            'nextStep'
          ),

        prevStep: () =>
          set(
            (state) => ({ currentStep: Math.max(1, state.currentStep - 1) }),
            false,
            'prevStep'
          ),

        setLoading: (isLoading: boolean) =>
          set({ isLoading }, false, 'setLoading'),

        setViewMode: (viewMode: ViewMode) =>
          set({ viewMode }, false, 'setViewMode'),

        toggleFullscreen: () =>
          set(
            (state) => ({ isFullscreen: !state.isFullscreen }),
            false,
            'toggleFullscreen'
          ),

        // Camera
        setCameraPosition: (cameraPosition) =>
          set({ cameraPosition }, false, 'setCameraPosition'),

        toggleAutoRotate: () =>
          set(
            (state) => ({ autoRotate: !state.autoRotate }),
            false,
            'toggleAutoRotate'
          ),

        // Reset
        resetConfig: () =>
          set(
            { ...initialState, family: get().family },
            false,
            'resetConfig'
          ),

        // Calcul du prix
        calculatePrice: (config: ProductFamilyConfig) => {
          const state = get();
          
          const materialMod =
            config.materials.find((m) => m.id === state.material)?.priceModifier || 1;
          const styleMod =
            config.styles.find((s) => s.id === state.style)?.priceModifier || 1;
          
          const defaultWidth = config.dimensions.width.default;
          const defaultHeight = config.dimensions.height.default;
          
          const sizeFactor =
            (state.dimensions.width / defaultWidth) *
            (state.dimensions.height / defaultHeight);
          
          const optionsPrice = state.selectedOptions.reduce((total, optId) => {
            const opt = config.options.find((o) => o.id === optId);
            return total + (opt?.price || 0);
          }, 0);

          const baseCalculated = config.basePrice * sizeFactor * materialMod * styleMod;
          return Math.round(baseCalculated + optionsPrice);
        },
      }),
      {
        name: 'az-configurator-storage',
        partialize: (state) => ({
          // Ne persister que certaines valeurs
          family: state.family,
          style: state.style,
          dimensions: state.dimensions,
          material: state.material,
          color: state.color,
          colorHex: state.colorHex,
          selectedOptions: state.selectedOptions,
        }),
      }
    ),
    { name: 'ConfiguratorStore' }
  )
);

// Sélecteurs pour optimiser les re-renders
export const useConfigFamily = () => useConfiguratorStore((s) => s.family);
export const useConfigStyle = () => useConfiguratorStore((s) => s.style);
export const useConfigDimensions = () => useConfiguratorStore((s) => s.dimensions);
export const useConfigColor = () => useConfiguratorStore((s) => ({ color: s.color, colorHex: s.colorHex }));
export const useConfigOptions = () => useConfiguratorStore((s) => s.selectedOptions);
export const useConfigUI = () => useConfiguratorStore((s) => ({
  currentStep: s.currentStep,
  isLoading: s.isLoading,
  viewMode: s.viewMode,
  isFullscreen: s.isFullscreen,
}));
export const useConfigCamera = () => useConfiguratorStore((s) => ({
  cameraPosition: s.cameraPosition,
  autoRotate: s.autoRotate,
}));


