import * as React from 'react';
import { useConfiguratorStore } from '@/stores/configuratorStore';
import type { ProductFamily, ProductFamilyConfig } from '@/types/configurator';

/**
 * Hook principal pour utiliser le configurateur.
 * Combine le store avec des utilitaires pratiques.
 */
export function useConfigurator(familyConfig?: ProductFamilyConfig) {
  const store = useConfiguratorStore();

  // Initialiser la configuration quand familyConfig change
  React.useEffect(() => {
    if (familyConfig) {
      // Initialiser les valeurs par défaut si pas encore définies
      if (!store.style && familyConfig.styles.length > 0) {
        store.setStyle(familyConfig.styles[0].id);
      }
      if (!store.material && familyConfig.materials.length > 0) {
        store.setMaterial(familyConfig.materials[0].id);
      }
      if (!store.color && familyConfig.colors.length > 0) {
        store.setColor(familyConfig.colors[0].id, familyConfig.colors[0].hex);
      }
      if (store.dimensions.width === 350 && store.dimensions.height === 180) {
        store.setDimensions({
          width: familyConfig.dimensions.width.default,
          height: familyConfig.dimensions.height.default,
        });
      }
    }
  }, [familyConfig, store]);

  // Calculer le prix actuel
  const price = React.useMemo(() => {
    if (!familyConfig) return 0;
    return store.calculatePrice(familyConfig);
  }, [familyConfig, store]);

  // Obtenir les informations de couleur actuelles
  const currentColor = React.useMemo(() => {
    if (!familyConfig) return null;
    return familyConfig.colors.find((c) => c.id === store.color) || null;
  }, [familyConfig, store.color]);

  // Obtenir les informations de matériau actuelles
  const currentMaterial = React.useMemo(() => {
    if (!familyConfig) return null;
    return familyConfig.materials.find((m) => m.id === store.material) || null;
  }, [familyConfig, store.material]);

  // Obtenir les informations de style actuelles
  const currentStyle = React.useMemo(() => {
    if (!familyConfig) return null;
    return familyConfig.styles.find((s) => s.id === store.style) || null;
  }, [familyConfig, store.style]);

  // Obtenir les options sélectionnées avec leurs détails
  const selectedOptionsDetails = React.useMemo(() => {
    if (!familyConfig) return [];
    return store.selectedOptions
      .map((optId) => familyConfig.options.find((o) => o.id === optId))
      .filter(Boolean);
  }, [familyConfig, store.selectedOptions]);

  // Générer la configuration d'export
  const exportConfig = React.useMemo(() => {
    if (!familyConfig) return null;
    return {
      family: familyConfig.nameSingular,
      style: currentStyle?.name || store.style,
      dimensions: store.dimensions,
      material: currentMaterial?.name || store.material,
      color: currentColor?.ral || store.color,
      colorName: currentColor?.name || 'N/A',
      options: selectedOptionsDetails.map((o) => o?.name || ''),
      price,
      date: new Date(),
    };
  }, [
    familyConfig,
    currentStyle,
    currentMaterial,
    currentColor,
    store,
    selectedOptionsDetails,
    price,
  ]);

  return {
    // State
    ...store,
    
    // Computed
    price,
    currentColor,
    currentMaterial,
    currentStyle,
    selectedOptionsDetails,
    exportConfig,
    
    // Helpers
    isOptionSelected: (optionId: string) => store.selectedOptions.includes(optionId),
  };
}

/**
 * Hook pour précharger les modèles 3D d'une famille.
 */
export function usePreloadModels(family: ProductFamily | null) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (!family) return;

    // Les modèles procéduraux n'ont pas besoin de préchargement
    // Ce hook sera utile quand on aura de vrais fichiers GLB
    setIsLoaded(true);
  }, [family]);

  return { isLoaded, error };
}

export default useConfigurator;






