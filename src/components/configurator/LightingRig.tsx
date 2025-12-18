"use client";

import * as React from "react";

interface LightingRigProps {
  intensity?: number;
  shadowsEnabled?: boolean;
}

/**
 * Configuration d'éclairage optimisée pour les produits métalliques.
 * Utilise un éclairage à 3 points pour un rendu professionnel.
 */
export function LightingRig({ 
  intensity = 1, 
  shadowsEnabled = true 
}: LightingRigProps) {
  return (
    <>
      {/* Lumière ambiante de base pour éviter les zones trop sombres */}
      <ambientLight intensity={0.4 * intensity} />
      
      {/* Lumière principale (key light) - simule le soleil */}
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2 * intensity}
        castShadow={shadowsEnabled}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />
      
      {/* Lumière de remplissage (fill light) - adoucit les ombres */}
      <directionalLight
        position={[-8, 8, -8]}
        intensity={0.5 * intensity}
        castShadow={false}
      />
      
      {/* Contre-jour (rim light) - sépare le sujet du fond */}
      <directionalLight
        position={[0, 5, -15]}
        intensity={0.3 * intensity}
        castShadow={false}
      />
      
      {/* Point light pour reflets sur le métal */}
      <pointLight
        position={[5, 10, 5]}
        intensity={0.4 * intensity}
        distance={30}
        decay={2}
      />
    </>
  );
}

export default LightingRig;



