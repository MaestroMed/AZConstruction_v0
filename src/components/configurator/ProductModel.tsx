"use client";

import * as React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { applyColorToObject } from "./ColorMaterial";
import { ProceduralModel } from "./ProceduralModels";
import { hasGLBModel, getModelInfo } from "@/lib/models/modelRegistry";
import type { ProductFamily, FinishType } from "@/types/configurator";

interface ProductModelProps {
  family: ProductFamily;
  style: string;
  color: string;
  finish?: FinishType;
  width: number;
  height: number;
  depth?: number;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Composant principal pour afficher le modèle 3D du produit.
 * Utilise des modèles GLB s'ils existent, sinon des modèles procéduraux.
 */
export function ProductModel({
  family,
  style,
  color,
  finish = 'satine',
  width,
  height,
  depth,
  onLoad,
  onError,
}: ProductModelProps) {
  // Vérifier si un modèle GLB existe
  const hasGLB = hasGLBModel(family, style);

  if (hasGLB) {
    return (
      <GLBModel
        family={family}
        style={style}
        color={color}
        finish={finish}
        width={width}
        height={height}
        onLoad={onLoad}
        onError={onError}
      />
    );
  }

  // Utiliser le modèle procédural
  return (
    <ProceduralModel
      family={family}
      style={style}
      color={color}
      finish={finish}
      width={width}
      height={height}
      animated
    />
  );
}

/**
 * Composant pour charger et afficher un modèle GLB.
 */
function GLBModel({
  family,
  style,
  color,
  finish,
  width,
  height,
  onLoad,
  onError,
}: Omit<ProductModelProps, 'depth'>) {
  const modelInfo = getModelInfo(family, style);
  const groupRef = React.useRef<THREE.Group>(null);
  
  // Charger le modèle
  const { scene } = useGLTF(modelInfo?.path || '', undefined, undefined, (loader) => {
    loader.manager.onError = (url) => {
      onError?.(new Error(`Failed to load model: ${url}`));
    };
  });

  // Cloner la scène pour éviter les conflits
  const clonedScene = React.useMemo(() => {
    if (!scene) return null;
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  // Appliquer la couleur
  React.useEffect(() => {
    if (clonedScene) {
      applyColorToObject(clonedScene, color, finish);
    }
  }, [clonedScene, color, finish]);

  // Notifier le chargement
  React.useEffect(() => {
    if (clonedScene) {
      onLoad?.();
    }
  }, [clonedScene, onLoad]);

  // Animation d'entrée
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0,
        0.05
      );
    }
  });

  if (!clonedScene || !modelInfo) return null;

  // Calculer le scale basé sur les dimensions
  const defaultWidth = 350;
  const defaultHeight = 180;
  const scaleX = width / defaultWidth;
  const scaleY = height / defaultHeight;

  return (
    <group
      ref={groupRef}
      scale={[
        modelInfo.scale[0] * scaleX,
        modelInfo.scale[1] * scaleY,
        modelInfo.scale[2],
      ]}
      position={modelInfo.position}
      rotation={modelInfo.rotation as [number, number, number]}
    >
      <primitive object={clonedScene} />
    </group>
  );
}

export default ProductModel;

