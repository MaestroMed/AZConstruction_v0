"use client";

import * as React from "react";
import * as THREE from "three";
import type { GardeCorpsConfig } from "./types";

interface GardeCorpsModelProps {
  config: GardeCorpsConfig;
}

export function GardeCorpsModel({ config }: GardeCorpsModelProps) {
  const { longueur, hauteur, nbModules, fillType, ralHex, finition } = config;

  const roughness = finition === "mat" ? 0.9 : finition === "satine" ? 0.5 : 0.1;
  const metalness = finition === "brillant" ? 0.8 : 0.6;
  const color = new THREE.Color(ralHex);

  const moduleWidth = longueur / nbModules;
  const postRadius = 0.025;
  const railRadius = 0.02;
  const barreauRadius = 0.008;
  const barreauSpacing = 0.11; // 11cm norme NF P01-012

  // Generate posts positions
  const posts = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i <= nbModules; i++) {
      arr.push(i * moduleWidth - longueur / 2);
    }
    return arr;
  }, [nbModules, moduleWidth, longueur]);

  // Generate barreaux for each module
  const barreaux = React.useMemo(() => {
    if (fillType !== "barreaude") return [];
    const arr: { x: number; moduleIdx: number }[] = [];
    for (let m = 0; m < nbModules; m++) {
      const startX = m * moduleWidth - longueur / 2 + postRadius * 2;
      const endX = (m + 1) * moduleWidth - longueur / 2 - postRadius * 2;
      const span = endX - startX;
      const count = Math.floor(span / barreauSpacing);
      const actualSpacing = span / (count + 1);
      for (let i = 1; i <= count; i++) {
        arr.push({ x: startX + i * actualSpacing, moduleIdx: m });
      }
    }
    return arr;
  }, [fillType, nbModules, moduleWidth, longueur]);

  return (
    <group>
      {/* Posts */}
      {posts.map((x, i) => (
        <mesh key={`post-${i}`} position={[x, hauteur / 2, 0]}>
          <boxGeometry args={[postRadius * 2, hauteur, postRadius * 2]} />
          <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
        </mesh>
      ))}

      {/* Top rail (main courante) */}
      <mesh position={[0, hauteur, 0]}>
        <boxGeometry args={[longueur, railRadius * 2, railRadius * 2]} />
        <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
      </mesh>

      {/* Bottom rail */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[longueur, railRadius * 1.5, railRadius * 2]} />
        <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
      </mesh>

      {/* Fill based on type */}
      {fillType === "barreaude" && barreaux.map((b, i) => (
        <mesh key={`bar-${i}`} position={[b.x, hauteur / 2, 0]}>
          <cylinderGeometry args={[barreauRadius, barreauRadius, hauteur - 0.1, 8]} />
          <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
        </mesh>
      ))}

      {fillType === "cables" && Array.from({ length: 6 }).map((_, i) => {
        const y = 0.1 + (i * (hauteur - 0.15)) / 5;
        return (
          <mesh key={`cable-${i}`} position={[0, y, 0]}>
            <cylinderGeometry args={[0.002, 0.002, longueur, 8]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#C0C0C0" roughness={0.3} metalness={0.9} />
          </mesh>
        );
      })}

      {fillType === "verre" && Array.from({ length: nbModules }).map((_, m) => {
        const x = m * moduleWidth - longueur / 2 + moduleWidth / 2;
        return (
          <mesh key={`glass-${m}`} position={[x, hauteur / 2, 0]}>
            <boxGeometry args={[moduleWidth - postRadius * 4, hauteur - 0.1, 0.008]} />
            <meshPhysicalMaterial
              color="#B8D4E3"
              transparent
              opacity={0.3}
              roughness={0.05}
              metalness={0}
              transmission={0.6}
              thickness={0.5}
            />
          </mesh>
        );
      })}

      {fillType === "tole" && Array.from({ length: nbModules }).map((_, m) => {
        const x = m * moduleWidth - longueur / 2 + moduleWidth / 2;
        return (
          <mesh key={`tole-${m}`} position={[x, hauteur / 2, 0]}>
            <boxGeometry args={[moduleWidth - postRadius * 4, hauteur - 0.1, 0.003]} />
            <meshStandardMaterial color={color} roughness={roughness + 0.1} metalness={metalness - 0.1} />
          </mesh>
        );
      })}
    </group>
  );
}
