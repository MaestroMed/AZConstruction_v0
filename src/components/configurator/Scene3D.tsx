"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { LightingRig } from "./LightingRig";
import { CameraController } from "./CameraController";
import { EnvironmentSetup } from "./EnvironmentSetup";
import { ProductModel } from "./ProductModel";
import { LoadingSpinner3D } from "./LoadingSpinner3D";
import type { ProductFamily, FinishType } from "@/types/configurator";
import type { CameraPosition } from "./CameraController";

interface Scene3DProps {
  family: ProductFamily;
  style: string;
  color: string;
  colorHex?: string;
  finish?: FinishType;
  width: number;
  height: number;
  depth?: number;
  autoRotate?: boolean;
  cameraPosition?: CameraPosition;
  showGrid?: boolean;
  className?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Composant principal du viewer 3D.
 * Encapsule le Canvas React Three Fiber avec tous les sous-composants.
 */
export function Scene3D({
  family,
  style,
  color,
  colorHex,
  finish = 'satine',
  width,
  height,
  depth,
  autoRotate = true,
  cameraPosition = 'default',
  showGrid = true,
  className = "",
  onLoad,
  onError,
}: Scene3DProps) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadProgress, setLoadProgress] = React.useState(0);

  // Simuler une progression de chargement
  React.useEffect(() => {
    setIsLoading(true);
    setLoadProgress(0);
    
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [family, style]);

  const handleModelLoad = React.useCallback(() => {
    setLoadProgress(100);
    setTimeout(() => {
      setIsLoading(false);
      onLoad?.();
    }, 300);
  }, [onLoad]);

  const handleModelError = React.useCallback((error: Error) => {
    setIsLoading(false);
    onError?.(error);
  }, [onError]);

  // Utiliser colorHex si fourni, sinon color
  const displayColor = colorHex || color;

  return (
    <div className={`relative w-full h-full min-h-[300px] ${className}`}>
      {/* Loader */}
      {isLoading && (
        <LoadingSpinner3D 
          message="Génération du modèle 3D..."
          progress={loadProgress}
        />
      )}

      {/* Canvas 3D */}
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [5, 3, 5], fov: 45, near: 0.1, far: 100 }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true, // Nécessaire pour les screenshots
        }}
        style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        {/* Couleur de fond */}
        <color attach="background" args={['#f5f5f5']} />
        
        {/* Éclairage */}
        <LightingRig intensity={1} shadowsEnabled />
        
        {/* Environnement */}
        <EnvironmentSetup showGrid={showGrid} showShadows />
        
        {/* Contrôles caméra */}
        <CameraController
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
          targetPosition={cameraPosition}
          minDistance={1}
          maxDistance={12}
        />
        
        {/* Modèle du produit */}
        <React.Suspense fallback={null}>
          <ProductModel
            family={family}
            style={style}
            color={displayColor}
            finish={finish}
            width={width}
            height={height}
            depth={depth}
            onLoad={handleModelLoad}
            onError={handleModelError}
          />
          <Preload all />
        </React.Suspense>
      </Canvas>

      {/* Overlay d'informations */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
        {width} × {height} cm
      </div>
    </div>
  );
}

export default Scene3D;







