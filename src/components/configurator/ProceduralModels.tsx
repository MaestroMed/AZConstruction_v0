"use client";

import * as React from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import type { ProductFamily, FinishType } from "@/types/configurator";

interface ProceduralModelProps {
  family: ProductFamily;
  style: string;
  color: string;
  finish?: FinishType;
  width: number;  // en cm
  height: number; // en cm
  animated?: boolean;
}

// Configuration des finitions
const FINISH_CONFIG: Record<FinishType, { roughness: number; metalness: number }> = {
  mat: { roughness: 0.9, metalness: 0.1 },
  satine: { roughness: 0.5, metalness: 0.3 },
  brillant: { roughness: 0.1, metalness: 0.6 },
};

/**
 * Modèles 3D procéduraux pour le MVP.
 * Ces modèles sont générés en code et seront remplacés par des GLB réels.
 */
export function ProceduralModel({
  family,
  style,
  color,
  finish = 'satine',
  width,
  height,
  animated = true,
}: ProceduralModelProps) {
  const groupRef = React.useRef<THREE.Group>(null);
  const [hovered, setHovered] = React.useState(false);

  // Animation d'entrée
  React.useEffect(() => {
    if (groupRef.current && animated) {
      groupRef.current.rotation.y = -0.5;
      groupRef.current.scale.set(0.8, 0.8, 0.8);
    }
  }, [family, style, animated]);

  useFrame((state, delta) => {
    if (groupRef.current && animated) {
      // Animation d'entrée douce
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        0,
        0.05
      );
      groupRef.current.scale.x = THREE.MathUtils.lerp(groupRef.current.scale.x, 1, 0.05);
      groupRef.current.scale.y = THREE.MathUtils.lerp(groupRef.current.scale.y, 1, 0.05);
      groupRef.current.scale.z = THREE.MathUtils.lerp(groupRef.current.scale.z, 1, 0.05);
    }
  });

  const finishConfig = FINISH_CONFIG[finish];
  const materialProps = {
    color,
    roughness: finishConfig.roughness,
    metalness: finishConfig.metalness,
    envMapIntensity: 1,
  };

  // Normalisation des dimensions (cm vers unités 3D, 100cm = 1 unité)
  const w = width / 100;
  const h = height / 100;

  const renderModel = () => {
    switch (family) {
      case 'portails':
        return <PortailModel style={style} w={w} h={h} materialProps={materialProps} />;
      case 'garde-corps':
        return <GardeCorpsModel style={style} w={w} h={h} materialProps={materialProps} />;
      case 'pergolas':
        return <PergolaModel style={style} w={w} h={h} materialProps={materialProps} />;
      case 'escaliers':
        return <EscalierModel style={style} w={w} h={h} materialProps={materialProps} />;
      case 'clotures':
        return <ClotureModel style={style} w={w} h={h} materialProps={materialProps} />;
      default:
        return <DefaultModel w={w} h={h} materialProps={materialProps} />;
    }
  };

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {renderModel()}
    </group>
  );
}

// Types pour les props des sous-modèles
interface ModelPartProps {
  style: string;
  w: number;
  h: number;
  materialProps: {
    color: string;
    roughness: number;
    metalness: number;
    envMapIntensity: number;
  };
}

/**
 * Modèle de portail procédural
 */
function PortailModel({ style, w, h, materialProps }: ModelPartProps) {
  const frameThickness = 0.05;
  const barCount = Math.floor(w * 8);
  const barSpacing = w / (barCount + 1);

  return (
    <group position={[0, h / 2, 0]}>
      {/* Cadre extérieur */}
      {/* Barre du haut */}
      <mesh position={[0, h / 2 - frameThickness / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[w, frameThickness, frameThickness]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Barre du bas */}
      <mesh position={[0, -h / 2 + frameThickness / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[w, frameThickness, frameThickness]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Montant gauche */}
      <mesh position={[-w / 2 + frameThickness / 2, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[frameThickness, h, frameThickness]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Montant droit */}
      <mesh position={[w / 2 - frameThickness / 2, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[frameThickness, h, frameThickness]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      {/* Montant central (séparation des vantaux) */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[frameThickness, h, frameThickness]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Barreaux horizontaux selon le style */}
      {style !== 'ajoure' && (
        <>
          {Array.from({ length: 5 }).map((_, i) => {
            const y = -h / 2 + (h / 6) * (i + 1);
            return (
              <mesh key={i} position={[0, y, 0]} castShadow receiveShadow>
                <boxGeometry args={[w - frameThickness * 2, 0.03, 0.02]} />
                <meshStandardMaterial {...materialProps} />
              </mesh>
            );
          })}
        </>
      )}

      {/* Barreaux verticaux pour style classique */}
      {style === 'classique' && (
        <>
          {Array.from({ length: barCount }).map((_, i) => {
            const x = -w / 2 + barSpacing * (i + 1);
            if (Math.abs(x) < 0.03) return null; // Skip center
            return (
              <mesh key={i} position={[x, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.015, h - frameThickness * 2, 0.015]} />
                <meshStandardMaterial {...materialProps} />
              </mesh>
            );
          })}
        </>
      )}
    </group>
  );
}

/**
 * Modèle de garde-corps procédural
 */
function GardeCorpsModel({ style, w, h, materialProps }: ModelPartProps) {
  const postSpacing = 1; // Un poteau tous les mètres
  const postCount = Math.max(2, Math.ceil(w / postSpacing) + 1);

  return (
    <group position={[0, h / 2, 0]}>
      {/* Poteaux */}
      {Array.from({ length: postCount }).map((_, i) => {
        const x = -w / 2 + (w / (postCount - 1)) * i;
        return (
          <mesh key={i} position={[x, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.04, h, 0.04]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      })}

      {/* Main courante */}
      <mesh position={[0, h / 2 - 0.025, 0]} castShadow receiveShadow>
        <boxGeometry args={[w, 0.05, 0.05]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Remplissage selon le style */}
      {style === 'verre' && (
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[w - 0.08, h - 0.15, 0.02]} />
          <meshPhysicalMaterial
            color="#88ccff"
            transparent
            opacity={0.3}
            roughness={0}
            metalness={0}
            transmission={0.9}
            thickness={0.02}
          />
        </mesh>
      )}

      {style === 'cables' && (
        <>
          {Array.from({ length: 6 }).map((_, i) => {
            const y = -h / 2 + 0.1 + ((h - 0.2) / 5) * i;
            return (
              <mesh key={i} position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
                <cylinderGeometry args={[0.003, 0.003, w, 8]} />
                <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
              </mesh>
            );
          })}
        </>
      )}

      {(style === 'barreaux' || !style) && (
        <>
          {Array.from({ length: Math.floor(w * 10) }).map((_, i) => {
            const x = -w / 2 + 0.05 + (i * 0.1);
            if (x > w / 2 - 0.05) return null;
            return (
              <mesh key={i} position={[x, -0.05, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.015, h - 0.1, 0.015]} />
                <meshStandardMaterial {...materialProps} />
              </mesh>
            );
          })}
        </>
      )}
    </group>
  );
}

/**
 * Modèle de pergola procédural
 */
function PergolaModel({ style, w, h, materialProps }: ModelPartProps) {
  const depth = w * 0.8; // Profondeur proportionnelle
  const postSize = 0.1;
  const lameCount = Math.floor(w * 3);
  const lameWidth = 0.15;
  const lameSpacing = w / lameCount;

  return (
    <group position={[0, 0, 0]}>
      {/* 4 Poteaux */}
      {[
        [-w / 2 + postSize / 2, 0, -depth / 2 + postSize / 2],
        [w / 2 - postSize / 2, 0, -depth / 2 + postSize / 2],
        [-w / 2 + postSize / 2, 0, depth / 2 - postSize / 2],
        [w / 2 - postSize / 2, 0, depth / 2 - postSize / 2],
      ].map((pos, i) => (
        <mesh key={i} position={[pos[0], h / 2, pos[2]]} castShadow receiveShadow>
          <boxGeometry args={[postSize, h, postSize]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      ))}

      {/* Poutres latérales */}
      <mesh position={[-w / 2 + postSize / 2, h, 0]} castShadow receiveShadow>
        <boxGeometry args={[postSize, postSize, depth]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      <mesh position={[w / 2 - postSize / 2, h, 0]} castShadow receiveShadow>
        <boxGeometry args={[postSize, postSize, depth]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Poutres avant/arrière */}
      <mesh position={[0, h, -depth / 2 + postSize / 2]} castShadow receiveShadow>
        <boxGeometry args={[w, postSize, postSize]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      <mesh position={[0, h, depth / 2 - postSize / 2]} castShadow receiveShadow>
        <boxGeometry args={[w, postSize, postSize]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Lames du toit */}
      {Array.from({ length: lameCount }).map((_, i) => {
        const x = -w / 2 + lameSpacing / 2 + lameSpacing * i;
        return (
          <mesh
            key={i}
            position={[x, h + postSize / 2 + 0.02, 0]}
            rotation={style === 'bioclimatique' ? [Math.PI * 0.1, 0, 0] : [0, 0, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[lameWidth, 0.02, depth - postSize * 2]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      })}
    </group>
  );
}

/**
 * Modèle d'escalier procédural
 */
function EscalierModel({ style, w, h, materialProps }: ModelPartProps) {
  const stepCount = Math.floor(h / 0.18); // Hauteur de marche ~18cm
  const stepHeight = h / stepCount;
  const stepDepth = 0.28; // Profondeur de marche standard
  const totalDepth = stepDepth * stepCount;

  return (
    <group position={[0, 0, -totalDepth / 2]}>
      {/* Limons (côtés) */}
      {[-w / 2 + 0.02, w / 2 - 0.02].map((x, i) => (
        <mesh
          key={i}
          position={[x, h / 2, totalDepth / 2]}
          rotation={[Math.atan2(h, totalDepth), 0, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.04, Math.sqrt(h * h + totalDepth * totalDepth), 0.15]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      ))}

      {/* Marches */}
      {Array.from({ length: stepCount }).map((_, i) => {
        const y = stepHeight * (i + 0.5);
        const z = stepDepth * (i + 0.5);
        return (
          <mesh key={i} position={[0, y, z]} castShadow receiveShadow>
            <boxGeometry args={[w - 0.04, 0.04, stepDepth]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      })}

      {/* Garde-corps */}
      {[-w / 2 - 0.02, w / 2 + 0.02].map((x, i) => (
        <React.Fragment key={`rail-${i}`}>
          {/* Poteaux */}
          {Array.from({ length: Math.ceil(stepCount / 3) }).map((_, j) => {
            const stepIndex = j * 3;
            const y = stepHeight * stepIndex + 0.5;
            const z = stepDepth * stepIndex;
            return (
              <mesh key={j} position={[x, y, z]} castShadow receiveShadow>
                <boxGeometry args={[0.03, 1, 0.03]} />
                <meshStandardMaterial {...materialProps} />
              </mesh>
            );
          })}
          {/* Main courante */}
          <mesh
            position={[x, h / 2 + 0.5, totalDepth / 2]}
            rotation={[Math.atan2(h, totalDepth), 0, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.04, Math.sqrt(h * h + totalDepth * totalDepth), 0.04]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
}

/**
 * Modèle de clôture procédural
 */
function ClotureModel({ style, w, h, materialProps }: ModelPartProps) {
  const postSpacing = 2; // Un poteau tous les 2 mètres
  const postCount = Math.max(2, Math.ceil(w / postSpacing) + 1);
  const barCount = style === 'barreaudee' ? Math.floor(w * 8) : 0;

  return (
    <group position={[0, h / 2, 0]}>
      {/* Poteaux */}
      {Array.from({ length: postCount }).map((_, i) => {
        const x = -w / 2 + (w / (postCount - 1)) * i;
        return (
          <mesh key={i} position={[x, 0.05, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.06, h + 0.1, 0.06]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        );
      })}

      {/* Lisses horizontales */}
      <mesh position={[0, h / 2 - 0.03, 0]} castShadow receiveShadow>
        <boxGeometry args={[w, 0.04, 0.04]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      <mesh position={[0, -h / 2 + 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[w, 0.04, 0.04]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Remplissage selon le style */}
      {style === 'lames' && (
        <>
          {Array.from({ length: Math.floor(h * 6) }).map((_, i) => {
            const y = -h / 2 + 0.15 + i * 0.15;
            if (y > h / 2 - 0.1) return null;
            return (
              <mesh key={i} position={[0, y, 0]} castShadow receiveShadow>
                <boxGeometry args={[w - 0.12, 0.12, 0.02]} />
                <meshStandardMaterial {...materialProps} />
              </mesh>
            );
          })}
        </>
      )}

      {style === 'barreaudee' && (
        <>
          {Array.from({ length: barCount }).map((_, i) => {
            const x = -w / 2 + 0.1 + (i * (w - 0.2) / barCount);
            return (
              <mesh key={i} position={[x, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[0.012, h - 0.2, 0.012]} />
                <meshStandardMaterial {...materialProps} />
              </mesh>
            );
          })}
        </>
      )}

      {style === 'panneaux' && (
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[w - 0.12, h - 0.2, 0.01]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      )}
    </group>
  );
}

/**
 * Modèle par défaut (cube simple)
 */
function DefaultModel({ w, h, materialProps }: Omit<ModelPartProps, 'style'>) {
  return (
    <mesh position={[0, h / 2, 0]} castShadow receiveShadow>
      <boxGeometry args={[w, h, 0.1]} />
      <meshStandardMaterial {...materialProps} />
    </mesh>
  );
}

export default ProceduralModel;

