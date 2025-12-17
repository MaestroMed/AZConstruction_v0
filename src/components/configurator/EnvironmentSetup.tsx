"use client";

import * as React from "react";
import { Environment, Grid, ContactShadows } from "@react-three/drei";

interface EnvironmentSetupProps {
  showGrid?: boolean;
  showShadows?: boolean;
  preset?: 'sunset' | 'dawn' | 'night' | 'warehouse' | 'forest' | 'apartment' | 'studio' | 'city' | 'park' | 'lobby';
}

/**
 * Configuration de l'environnement 3D avec sol, grille et éclairage ambiant HDRI.
 */
export function EnvironmentSetup({
  showGrid = true,
  showShadows = true,
  preset = 'city',
}: EnvironmentSetupProps) {
  return (
    <>
      {/* Environnement HDRI pour les reflets réalistes sur le métal */}
      <Environment preset={preset} />
      
      {/* Grille de référence pour l'échelle */}
      {showGrid && (
        <Grid
          position={[0, -0.01, 0]}
          args={[20, 20]}
          cellSize={0.5}
          cellThickness={0.5}
          cellColor="#6e6e6e"
          sectionSize={2}
          sectionThickness={1}
          sectionColor="#9d9d9d"
          fadeDistance={30}
          fadeStrength={1}
          followCamera={false}
          infiniteGrid
        />
      )}
      
      {/* Sol invisible pour recevoir les ombres */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -0.001, 0]} 
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
      
      {/* Ombres de contact pour un effet de flottement réaliste */}
      {showShadows && (
        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.4}
          scale={20}
          blur={2}
          far={4}
          resolution={512}
          color="#000000"
        />
      )}
      
      {/* Fog léger pour la profondeur atmosphérique */}
      <fog attach="fog" args={['#f5f5f5', 15, 50]} />
    </>
  );
}

export default EnvironmentSetup;
