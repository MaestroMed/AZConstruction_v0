"use client";

import * as React from "react";
import * as THREE from "three";
import { type GardeCorpsConfig, MATERIAL_PRESETS, NORMS } from "./types";

// ── Shared geometry refs (avoid re-creation) ──────────────

const POST_PROFILE = 0.04;        // 40×40mm profil carré
const HANDRAIL_W = 0.045;         // 45mm main courante
const HANDRAIL_H = 0.025;         // 25mm épaisseur
const BOTTOM_RAIL_H = 0.03;       // 30mm traverse basse
const BOTTOM_RAIL_OFFSET = 0.05;  // 5cm du sol
const BARREAU_RADIUS = 0.008;     // Ø16mm barreaux
const BARREAU_SEGMENTS = 16;      // Smooth cylinders
const CABLE_RADIUS = 0.0015;      // Ø3mm inox
const CABLE_SEGMENTS = 8;
const GLASS_THICKNESS = 0.0088;   // 8.76mm feuilleté 44/2
const TOLE_THICKNESS = 0.002;     // 2mm acier

// ── Main component ────────────────────────────────────────

interface GardeCorpsModelProps {
  config: GardeCorpsConfig;
}

export const GardeCorpsModel = React.memo(function GardeCorpsModel({ config }: GardeCorpsModelProps) {
  const { longueur, hauteur, nbModules, fillType, ralHex, finition } = config;

  const mat = MATERIAL_PRESETS[finition];
  const color = React.useMemo(() => new THREE.Color(ralHex), [ralHex]);
  const moduleWidth = longueur / nbModules;

  // ── Posts positions ──────────────────────────────────
  const posts = React.useMemo(() => {
    const arr: number[] = [];
    for (let i = 0; i <= nbModules; i++) {
      arr.push(i * moduleWidth - longueur / 2);
    }
    return arr;
  }, [nbModules, moduleWidth, longueur]);

  // ── Barreaux positions (NF P01-012: espacement max 11cm) ──
  const barreaux = React.useMemo(() => {
    if (fillType !== "barreaude") return [];
    const arr: number[] = [];
    for (let m = 0; m < nbModules; m++) {
      const startX = m * moduleWidth - longueur / 2 + POST_PROFILE / 2 + BARREAU_RADIUS * 2;
      const endX = (m + 1) * moduleWidth - longueur / 2 - POST_PROFILE / 2 - BARREAU_RADIUS * 2;
      const span = endX - startX;
      // Ensure spacing ≤ 11cm (norm)
      const count = Math.max(1, Math.ceil(span / NORMS.maxBarSpacing));
      const actualSpacing = span / (count + 1);
      for (let i = 1; i <= count; i++) {
        arr.push(startX + i * actualSpacing);
      }
    }
    return arr;
  }, [fillType, nbModules, moduleWidth, longueur]);

  // ── Cable positions (above security zone 60cm) ──────────
  const cables = React.useMemo(() => {
    if (fillType !== "cables") return [];
    const zoneTop = NORMS.securityZoneHeight;
    const topRailY = hauteur - HANDRAIL_H;
    const usable = topRailY - zoneTop;
    if (usable <= 0) return [];
    // Spacing ≤ 14.5cm
    const count = Math.max(2, Math.ceil(usable / NORMS.maxCableSpacing) + 1);
    const spacing = usable / (count - 1);
    const arr: number[] = [];
    for (let i = 0; i < count; i++) {
      arr.push(zoneTop + i * spacing);
    }
    return arr;
  }, [fillType, hauteur]);

  // ── Material props ──────────────────────────────────────
  const metalMat = React.useMemo(() => ({
    color,
    roughness: mat.roughness,
    metalness: mat.metalness,
    envMapIntensity: mat.envMapIntensity,
  }), [color, mat]);

  const barreauH = hauteur - BOTTOM_RAIL_OFFSET - HANDRAIL_H - 0.01;

  return (
    <group>
      {/* ── POTEAUX (profils carrés 40×40mm) ────────── */}
      {posts.map((x, i) => (
        <mesh
          key={`post-${i}`}
          position={[x, hauteur / 2, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[POST_PROFILE, hauteur, POST_PROFILE]} />
          <meshPhysicalMaterial {...metalMat} clearcoat={mat.clearcoat} clearcoatRoughness={mat.clearcoatRoughness} />
        </mesh>
      ))}

      {/* Platines de fixation (base des poteaux) */}
      {posts.map((x, i) => (
        <mesh key={`base-${i}`} position={[x, 0.005, 0]} castShadow receiveShadow>
          <boxGeometry args={[POST_PROFILE * 2.2, 0.01, POST_PROFILE * 2.2]} />
          <meshPhysicalMaterial {...metalMat} clearcoat={mat.clearcoat} clearcoatRoughness={mat.clearcoatRoughness} />
        </mesh>
      ))}

      {/* ── MAIN COURANTE (top rail 45×25mm) ────────── */}
      <mesh position={[0, hauteur - HANDRAIL_H / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[longueur + POST_PROFILE, HANDRAIL_H, HANDRAIL_W]} />
        <meshPhysicalMaterial {...metalMat} clearcoat={mat.clearcoat} clearcoatRoughness={mat.clearcoatRoughness} />
      </mesh>
      {/* Arrondi dessus main courante (demi-cylindre) */}
      <mesh position={[0, hauteur, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[HANDRAIL_H / 2, HANDRAIL_H / 2, longueur + POST_PROFILE, 16, 1, false, 0, Math.PI]} />
        <meshPhysicalMaterial {...metalMat} clearcoat={mat.clearcoat} clearcoatRoughness={mat.clearcoatRoughness} />
      </mesh>

      {/* ── TRAVERSE BASSE ──────────────────────────── */}
      <mesh position={[0, BOTTOM_RAIL_OFFSET, 0]} castShadow receiveShadow>
        <boxGeometry args={[longueur + POST_PROFILE, BOTTOM_RAIL_H, POST_PROFILE]} />
        <meshPhysicalMaterial {...metalMat} clearcoat={mat.clearcoat} clearcoatRoughness={mat.clearcoatRoughness} />
      </mesh>

      {/* ── REMPLISSAGE ────────────────────────────── */}

      {/* --- BARREAUDÉ --- */}
      {fillType === "barreaude" && barreaux.map((x, i) => (
        <mesh
          key={`bar-${i}`}
          position={[x, BOTTOM_RAIL_OFFSET + barreauH / 2 + BOTTOM_RAIL_H / 2, 0]}
          castShadow
          receiveShadow
        >
          <cylinderGeometry args={[BARREAU_RADIUS, BARREAU_RADIUS, barreauH, BARREAU_SEGMENTS]} />
          <meshPhysicalMaterial {...metalMat} clearcoat={mat.clearcoat} clearcoatRoughness={mat.clearcoatRoughness} />
        </mesh>
      ))}

      {/* --- CÂBLES INOX --- */}
      {fillType === "cables" && (
        <>
          {/* Zone basse pleine (0–60cm) — tôle de soubassement */}
          {Array.from({ length: nbModules }).map((_, m) => {
            const x = m * moduleWidth - longueur / 2 + moduleWidth / 2;
            return (
              <mesh key={`sous-${m}`} position={[x, NORMS.securityZoneHeight / 2, 0]} castShadow receiveShadow>
                <boxGeometry args={[moduleWidth - POST_PROFILE * 1.1, NORMS.securityZoneHeight - BOTTOM_RAIL_OFFSET, TOLE_THICKNESS]} />
                <meshPhysicalMaterial {...metalMat} clearcoat={mat.clearcoat} clearcoatRoughness={mat.clearcoatRoughness} />
              </mesh>
            );
          })}
          {/* Câbles horizontaux au-dessus */}
          {cables.map((y, i) => (
            <mesh key={`cable-${i}`} position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[CABLE_RADIUS, CABLE_RADIUS, longueur, CABLE_SEGMENTS]} />
              <meshStandardMaterial
                color="#D3D3D3"
                roughness={0.35}
                metalness={0.9}
                envMapIntensity={0.8}
              />
            </mesh>
          ))}
          {/* Tendeurs (petits cylindres aux poteaux) */}
          {cables.map((y, ci) =>
            posts.map((x, pi) => (
              <mesh key={`tend-${ci}-${pi}`} position={[x, y, 0]}>
                <cylinderGeometry args={[0.005, 0.005, 0.015, 8]} />
                <meshStandardMaterial color="#B0B0B0" roughness={0.3} metalness={0.95} />
              </mesh>
            ))
          )}
        </>
      )}

      {/* --- VERRE FEUILLETÉ --- */}
      {fillType === "verre" && Array.from({ length: nbModules }).map((_, m) => {
        const x = m * moduleWidth - longueur / 2 + moduleWidth / 2;
        const panelH = hauteur - BOTTOM_RAIL_OFFSET - HANDRAIL_H;
        return (
          <mesh key={`glass-${m}`} position={[x, BOTTOM_RAIL_OFFSET + panelH / 2, 0]} castShadow receiveShadow>
            <boxGeometry args={[moduleWidth - POST_PROFILE * 1.3, panelH, GLASS_THICKNESS]} />
            <meshPhysicalMaterial
              color="#e8eff5"
              transparent
              opacity={0.15}
              roughness={0.02}
              metalness={0}
              transmission={0.92}
              thickness={0.5}
              ior={1.52}
              envMapIntensity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        );
      })}
      {/* Joints de verre (profils U en alu) */}
      {fillType === "verre" && posts.slice(0, -1).map((x, i) => {
        if (i === 0) return null;
        const panelH = hauteur - BOTTOM_RAIL_OFFSET - HANDRAIL_H;
        return (
          <mesh key={`joint-${i}`} position={[x, BOTTOM_RAIL_OFFSET + panelH / 2, 0]} castShadow>
            <boxGeometry args={[0.005, panelH, GLASS_THICKNESS + 0.01]} />
            <meshStandardMaterial color="#C0C0C0" roughness={0.3} metalness={0.8} />
          </mesh>
        );
      })}

      {/* --- TÔLE PERFORÉE --- */}
      {fillType === "tole" && Array.from({ length: nbModules }).map((_, m) => {
        const x = m * moduleWidth - longueur / 2 + moduleWidth / 2;
        const panelH = hauteur - BOTTOM_RAIL_OFFSET - HANDRAIL_H - 0.01;
        return (
          <group key={`tole-group-${m}`}>
            {/* Panneau principal */}
            <mesh position={[x, BOTTOM_RAIL_OFFSET + BOTTOM_RAIL_H / 2 + panelH / 2, 0]} castShadow receiveShadow>
              <boxGeometry args={[moduleWidth - POST_PROFILE * 1.3, panelH, TOLE_THICKNESS]} />
              <meshPhysicalMaterial
                {...metalMat}
                clearcoat={mat.clearcoat}
                clearcoatRoughness={mat.clearcoatRoughness}
                side={THREE.DoubleSide}
              />
            </mesh>
            {/* Cadre (listel) */}
            <mesh position={[x, BOTTOM_RAIL_OFFSET + BOTTOM_RAIL_H / 2 + panelH / 2, 0]} castShadow>
              <boxGeometry args={[moduleWidth - POST_PROFILE * 1.2, panelH + 0.01, TOLE_THICKNESS + 0.006]} />
              <meshPhysicalMaterial
                color={color}
                roughness={mat.roughness + 0.05}
                metalness={mat.metalness}
                transparent
                opacity={0.3}
              />
            </mesh>
          </group>
        );
      })}

      {/* ── SOL DE RÉFÉRENCE (dalle béton) ──────────── */}
      <mesh position={[0, -0.025, 0]} receiveShadow>
        <boxGeometry args={[longueur + 1.5, 0.05, 1.2]} />
        <meshStandardMaterial color="#D4D0C8" roughness={0.95} metalness={0} />
      </mesh>
      {/* Ligne de niveau */}
      <mesh position={[0, 0.001, 0]}>
        <boxGeometry args={[longueur + 1.2, 0.001, 0.001]} />
        <meshBasicMaterial color="#888888" />
      </mesh>
    </group>
  );
});
