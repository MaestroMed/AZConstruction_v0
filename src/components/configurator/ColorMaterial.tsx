"use client";

import * as React from "react";
import * as THREE from "three";
import type { FinishType } from "@/types/configurator";

interface ColorMaterialProps {
  color: string;
  finish?: FinishType;
  metalness?: number;
  attach?: string;
}

// Configuration des finitions
const FINISH_CONFIG: Record<FinishType, { roughness: number; metalness: number }> = {
  mat: { roughness: 0.9, metalness: 0.1 },
  satine: { roughness: 0.5, metalness: 0.3 },
  brillant: { roughness: 0.1, metalness: 0.6 },
};

/**
 * Matériau métallique configuré pour le thermolaquage.
 * Gère les différentes finitions (mat, satiné, brillant).
 */
export function ColorMaterial({
  color,
  finish = 'satine',
  metalness,
  attach = "material",
}: ColorMaterialProps) {
  const finishConfig = FINISH_CONFIG[finish];
  
  return (
    <meshStandardMaterial
      attach={attach}
      color={color}
      roughness={finishConfig.roughness}
      metalness={metalness ?? finishConfig.metalness}
      envMapIntensity={1}
    />
  );
}

/**
 * Hook pour créer un matériau réactif aux changements de couleur.
 */
export function useColorMaterial(color: string, finish: FinishType = 'satine') {
  const materialRef = React.useRef<THREE.MeshStandardMaterial>(null);
  const finishConfig = FINISH_CONFIG[finish];

  React.useEffect(() => {
    if (materialRef.current) {
      materialRef.current.color.set(color);
      materialRef.current.roughness = finishConfig.roughness;
      materialRef.current.metalness = finishConfig.metalness;
      materialRef.current.needsUpdate = true;
    }
  }, [color, finishConfig]);

  return materialRef;
}

/**
 * Applique une couleur à tous les meshes d'un objet 3D.
 */
export function applyColorToObject(
  object: THREE.Object3D,
  color: string,
  finish: FinishType = 'satine'
) {
  const threeColor = new THREE.Color(color);
  const finishConfig = FINISH_CONFIG[finish];

  object.traverse((child) => {
    if (child instanceof THREE.Mesh && child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((mat) => {
          if (mat instanceof THREE.MeshStandardMaterial) {
            mat.color.copy(threeColor);
            mat.roughness = finishConfig.roughness;
            mat.metalness = finishConfig.metalness;
            mat.needsUpdate = true;
          }
        });
      } else if (child.material instanceof THREE.MeshStandardMaterial) {
        child.material.color.copy(threeColor);
        child.material.roughness = finishConfig.roughness;
        child.material.metalness = finishConfig.metalness;
        child.material.needsUpdate = true;
      }
    }
  });
}

/**
 * Crée un matériau MeshStandardMaterial pré-configuré.
 */
export function createMetalMaterial(
  color: string,
  finish: FinishType = 'satine'
): THREE.MeshStandardMaterial {
  const finishConfig = FINISH_CONFIG[finish];
  
  return new THREE.MeshStandardMaterial({
    color: new THREE.Color(color),
    roughness: finishConfig.roughness,
    metalness: finishConfig.metalness,
    envMapIntensity: 1,
  });
}

export default ColorMaterial;




