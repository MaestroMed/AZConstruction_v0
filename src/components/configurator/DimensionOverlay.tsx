"use client";

import * as React from "react";
import { Html, Line } from "@react-three/drei";

interface DimensionOverlayProps {
  width: number;  // en cm
  height: number; // en cm
  depth?: number; // en cm
  showWidth?: boolean;
  showHeight?: boolean;
  showDepth?: boolean;
  color?: string;
}

/**
 * Overlay pour afficher les dimensions du produit en 3D.
 */
export function DimensionOverlay({
  width,
  height,
  depth,
  showWidth = true,
  showHeight = true,
  showDepth = false,
  color = "#00d4ff",
}: DimensionOverlayProps) {
  // Conversion cm vers unités 3D (100cm = 1 unité)
  const w = width / 100;
  const h = height / 100;
  const d = (depth || 10) / 100;

  return (
    <group>
      {/* Ligne de dimension largeur (en bas) */}
      {showWidth && (
        <group position={[0, 0.05, w / 2 + 0.3]}>
          {/* Ligne */}
          <Line
            points={[[-w / 2, 0, 0], [w / 2, 0, 0]]}
            color={color}
            lineWidth={1}
          />
          
          {/* Marqueurs de fin */}
          <mesh position={[-w / 2, 0, 0]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
          <mesh position={[w / 2, 0, 0]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
          
          {/* Label */}
          <Html
            position={[0, 0.1, 0]}
            center
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <div
              className="px-2 py-1 rounded text-xs font-bold whitespace-nowrap"
              style={{
                backgroundColor: color,
                color: '#0a1628',
              }}
            >
              {width} cm
            </div>
          </Html>
        </group>
      )}

      {/* Ligne de dimension hauteur (sur le côté) */}
      {showHeight && (
        <group position={[w / 2 + 0.3, h / 2, 0]}>
          {/* Ligne */}
          <Line
            points={[[0, -h / 2, 0], [0, h / 2, 0]]}
            color={color}
            lineWidth={1}
          />
          
          {/* Marqueurs de fin */}
          <mesh position={[0, -h / 2, 0]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
          <mesh position={[0, h / 2, 0]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color={color} />
          </mesh>
          
          {/* Label */}
          <Html
            position={[0.1, 0, 0]}
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <div
              className="px-2 py-1 rounded text-xs font-bold whitespace-nowrap"
              style={{
                backgroundColor: color,
                color: '#0a1628',
              }}
            >
              {height} cm
            </div>
          </Html>
        </group>
      )}

      {/* Ligne de dimension profondeur (optionnelle) */}
      {showDepth && depth && (
        <group position={[-w / 2 - 0.3, 0.05, 0]}>
          {/* Ligne */}
          <Line
            points={[[0, 0, -d / 2], [0, 0, d / 2]]}
            color={color}
            lineWidth={1}
          />
          
          {/* Label */}
          <Html
            position={[0, 0.1, 0]}
            center
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <div
              className="px-2 py-1 rounded text-xs font-bold whitespace-nowrap"
              style={{
                backgroundColor: color,
                color: '#0a1628',
              }}
            >
              {depth} cm
            </div>
          </Html>
        </group>
      )}
    </group>
  );
}

export default DimensionOverlay;






