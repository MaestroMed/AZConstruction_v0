"use client";

/**
 * SpectreScene -- "Spectre RAL"
 *
 * 5 IPN HEB-300 en rang dans le noir, chacun thermolaque d une couleur RAL differente.
 * Un SpotLight radar balaie lateralement de gauche a droite, revelant chaque couleur.
 * Des particules de la couleur de chaque beam tombent doucement.
 * Concept : la palette RAL vivante — la promesse du thermolaquage.
 */

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial, Environment } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, ChromaticAberration, Noise, HueSaturation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";

/* ====================================================================
   IPN HEB-300 GEOMETRY
==================================================================== */

function createHEBGeometry(length: number): THREE.ExtrudeGeometry {
  const b  = 0.75;
  const h  = 0.80;
  const tf = 0.14;
  const tw = 0.095;
  const shape = new THREE.Shape();
  shape.moveTo(-b/2, 0); shape.lineTo(b/2, 0); shape.lineTo(b/2, tf);
  shape.lineTo(tw/2+0.015, tf+0.015); shape.lineTo(tw/2, h-tf-0.015);
  shape.lineTo(b/2, h-tf); shape.lineTo(b/2, h); shape.lineTo(-b/2, h);
  shape.lineTo(-b/2, h-tf); shape.lineTo(-tw/2, h-tf-0.015);
  shape.lineTo(-tw/2-0.015, tf+0.015); shape.lineTo(-b/2, tf);
  shape.closePath();
  const geom = new THREE.ExtrudeGeometry(shape, {
    depth: length, bevelEnabled: true,
    bevelSize: 0.010, bevelThickness: 0.010, bevelSegments: 2,
  });
  geom.center();
  return geom;
}

const Z_VEC = new THREE.Vector3(0, 0, 1);

/* ====================================================================
   PALETTE RAL -- 5 couleurs iconiques thermolaquage
==================================================================== */

const RAL_PALETTE = [
  { color: "#0e0e10", roughness: 0.26, name: "RAL 9005 Noir" },
  { color: "#2c3135", roughness: 0.33, name: "RAL 7016 Anthracite" },
  { color: "#f0f0eb", roughness: 0.20, name: "RAL 9010 Blanc pur" },
  { color: "#1a2f4a", roughness: 0.30, name: "RAL 5003 Bleu saphir" },
  { color: "#6b1c23", roughness: 0.35, name: "RAL 3004 Bordeaux" },
];

// Espacement elargi : de x=-10 a x=+10 (5 beams, pitch = 5)
const BEAM_X = [-10, -5, 0, 5, 10];
const BEAM_LENGTH = 14;

/* ====================================================================
   IPN BEAM COLORE
==================================================================== */

function ColoredIPNBeam({
  x, color, roughness,
}: { x: number; color: string; roughness: number }) {
  const geom = React.useMemo(() => createHEBGeometry(BEAM_LENGTH), []);
  const quat = React.useMemo(() =>
    new THREE.Quaternion().setFromUnitVectors(Z_VEC, new THREE.Vector3(0, 1, 0)),
  []);
  React.useEffect(() => () => geom.dispose(), [geom]);

  return (
    <mesh geometry={geom} position={[x, 0, 0]} quaternion={quat} castShadow receiveShadow>
      <meshStandardMaterial
        color={color}
        metalness={0.30}
        roughness={roughness}
        envMapIntensity={1.0}
      />
    </mesh>
  );
}

/* ====================================================================
   PARTICLES COLOREES -- poudre tombante par beam
==================================================================== */

function ColorParticles({ x, color }: { x: number; color: string }) {
  const ref   = React.useRef<THREE.Points>(null!);
  const COUNT = 24;

  const positions = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i*3]   = x + (Math.random()-0.5) * 1.0;
      a[i*3+1] = Math.random() * 10 - 3;
      a[i*3+2] = (Math.random()-0.5) * 0.8;
    }
    return a;
  }, [x]);

  const live = React.useRef(positions.slice());

  useFrame(() => {
    if (!ref.current) return;
    const p = live.current;
    for (let i = 0; i < COUNT; i++) {
      p[i*3+1] -= 0.008;
      if (p[i*3+1] < -6) {
        p[i*3]   = x + (Math.random()-0.5) * 1.0;
        p[i*3+1] = 6 + Math.random() * 2;
        p[i*3+2] = (Math.random()-0.5) * 0.8;
      }
    }
    const attr = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    attr.array.set(p); attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={color} size={0.08} sizeAttenuation
        transparent opacity={0.80}
        blending={THREE.AdditiveBlending} depthWrite={false}
      />
    </points>
  );
}

/* ====================================================================
   RADAR LATERAL -- spot qui balaie de gauche a droite
==================================================================== */

function LateralRadar() {
  const spotRef = React.useRef<THREE.SpotLight>(null!);

  useFrame((state) => {
    if (!spotRef.current) return;
    const t = state.clock.elapsedTime;
    const fadeIn = Math.min(1, Math.max(0, (t - 0.5) / 1.0));

    // Position : tourne en X sur un arc, reste a hauteur 8 et z=12
    // Balaie de x=-12 a x=+12 avec oscillation sinusoidale lente
    const posX = Math.sin(t * 0.28) * 14;
    spotRef.current.position.set(posX, 10, 12);

    // Vise le beam le plus proche du centre du sweep
    const targetX = Math.sin(t * 0.28 + 0.2) * 5;
    spotRef.current.target.position.set(targetX, 0, 0);
    spotRef.current.target.updateMatrixWorld();

    // Intensite : tres forte quand le spot est en face (axe Z), plus douce sur les cotes
    const sweep = Math.pow(Math.max(0, Math.cos(t * 0.28 * 1.5)), 2);
    spotRef.current.intensity = fadeIn * (160 + sweep * 90);
  });

  return (
    <spotLight
      ref={spotRef}
      color="#f8f4ee"
      intensity={0}
      distance={45}
      angle={0.22}
      penumbra={0.60}
      decay={1.3}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
    />
  );
}

/* ====================================================================
   SOL REFLECHISSANT
==================================================================== */

function SpectrumFloor() {
  return (
    <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -6.3, 0]} receiveShadow>
      <planeGeometry args={[50, 30]} />
      <MeshReflectorMaterial
        blur={[500, 100]} resolution={512} mirror={0.55}
        roughness={0.6} depthScale={1.0} minDepthThreshold={0.4}
        maxDepthThreshold={1.4} color="#030810" metalness={0.4}
      />
    </mesh>
  );
}

/* ====================================================================
   POUSSIERE D ATELIER
==================================================================== */

function DustMotes() {
  const ref   = React.useRef<THREE.Points>(null!);
  const COUNT = 200;
  const positions = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i*3]   = (Math.random()-0.5) * 26;
      a[i*3+1] = Math.random() * 14 - 5;
      a[i*3+2] = (Math.random()-0.5) * 10;
    }
    return a;
  }, []);
  const vel = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i*3]   = (Math.random()-0.5) * 0.004;
      a[i*3+1] = (Math.random()-0.5) * 0.003;
      a[i*3+2] = (Math.random()-0.5) * 0.003;
    }
    return a;
  }, []);
  const live = React.useRef(positions.slice());

  useFrame(() => {
    if (!ref.current) return;
    const p = live.current;
    for (let i = 0; i < COUNT; i++) {
      p[i*3] += vel[i*3]; p[i*3+1] += vel[i*3+1]; p[i*3+2] += vel[i*3+2];
      if (Math.abs(p[i*3]) > 13) vel[i*3] *= -1;
      if (p[i*3+1] > 8 || p[i*3+1] < -5) vel[i*3+1] *= -1;
      if (Math.abs(p[i*3+2]) > 5) vel[i*3+2] *= -1;
    }
    const attr = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    attr.array.set(p); attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial color="#c8d8e8" size={0.020} sizeAttenuation
        transparent opacity={0.30} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* ====================================================================
   CAMERA DIRECTOR
==================================================================== */

function easeInOutSine(t: number) { return -(Math.cos(Math.PI * t) - 1) / 2; }

interface Shot {
  t0: number; t1: number;
  posA: THREE.Vector3; posB: THREE.Vector3;
  tgtA: THREE.Vector3; tgtB: THREE.Vector3;
  fovA: number; fovB: number;
}

const SHOTS: Shot[] = [
  // Plan A : Macro sur le beam central (anthracite)
  {
    t0: 0, t1: 4.5,
    posA: new THREE.Vector3( 0.8,  0.4, 1.2),
    posB: new THREE.Vector3( 0.5,  0.0, 1.0),
    tgtA: new THREE.Vector3( 0.0,  0.2, 0),
    tgtB: new THREE.Vector3( 0.0, -0.1, 0),
    fovA: 30, fovB: 26,
  },
  // Plan B : Camera recule, le blanc et le noir apparaissent
  {
    t0: 4.5, t1: 9,
    posA: new THREE.Vector3( 0.5,  0.0,  1.0),
    posB: new THREE.Vector3( 0.0,  1.5,  8.0),
    tgtA: new THREE.Vector3( 0.0, -0.1,  0),
    tgtB: new THREE.Vector3( 0.0,  0.0,  0),
    fovA: 26, fovB: 44,
  },
  // Plan C : Pull-back lateral revele les 5 IPN en rang
  {
    t0: 9, t1: 14,
    posA: new THREE.Vector3( 0.0,  1.5,  8.0),
    posB: new THREE.Vector3( 0.0,  1.0, 18.0),
    tgtA: new THREE.Vector3( 0.0,  0.0,  0),
    tgtB: new THREE.Vector3( 0.0,  0.0,  0),
    fovA: 44, fovB: 55,
  },
];
const IDLE_START = 14;

function CameraDirector() {
  const { camera } = useThree();
  const mouse  = React.useRef({ x: 0, y: 0 });
  const lookAt = React.useRef(new THREE.Vector3(0, 0.2, 0));

  React.useEffect(() => {
    camera.position.set(0.8, 0.4, 1.2);
    (camera as THREE.PerspectiveCamera).fov = 30;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
  }, [camera]);

  React.useEffect(() => {
    const h = (e: MouseEvent) => {
      mouse.current.x = (e.clientX/window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY/window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => window.removeEventListener("mousemove", h);
  }, []);

  useFrame((state, delta) => {
    const t   = state.clock.elapsedTime;
    const cam = camera as THREE.PerspectiveCamera;

    if (t >= IDLE_START) {
      const it   = t - IDLE_START;
      const tgtX = Math.sin(it * 0.06) * 5.0 + mouse.current.x * 1.2;
      const tgtY = 1.0 + Math.sin(it * 0.04) * 0.6 + mouse.current.y * 0.6;
      const tgtZ = 17 + Math.cos(it * 0.05) * 1.5;
      camera.position.x += (tgtX - camera.position.x) * Math.min(1, delta * 0.9);
      camera.position.y += (tgtY - camera.position.y) * Math.min(1, delta * 0.9);
      camera.position.z += (tgtZ - camera.position.z) * Math.min(1, delta * 0.6);
      lookAt.current.lerp(new THREE.Vector3(0, 0.3, -0.5), Math.min(1, delta * 1.2));
      camera.lookAt(lookAt.current);
      cam.fov += (55 - cam.fov) * Math.min(1, delta * 1.5);
      cam.updateProjectionMatrix();
      return;
    }

    const shot = SHOTS.find(s => t >= s.t0 && t <= s.t1) ?? SHOTS[SHOTS.length - 1];
    const prog = easeInOutSine(Math.min(1, (t - shot.t0) / (shot.t1 - shot.t0)));
    const tPos = new THREE.Vector3().lerpVectors(shot.posA, shot.posB, prog);
    const tTgt = new THREE.Vector3().lerpVectors(shot.tgtA, shot.tgtB, prog);
    camera.position.lerp(tPos, Math.min(1, delta * 2.8));
    lookAt.current.lerp(tTgt, Math.min(1, delta * 3.2));
    camera.lookAt(lookAt.current);
    cam.fov += (shot.fovA + (shot.fovB - shot.fovA) * prog - cam.fov) * Math.min(1, delta * 2.5);
    cam.updateProjectionMatrix();
  });

  return null;
}

/* ====================================================================
   ROOT EXPORT
==================================================================== */

export default function SpectreScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0.8, 0.4, 1.2], fov: 30, near: 0.05, far: 200 }}
        gl={{
          antialias: true, alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.55,
        }}
        dpr={[1, 2]}
        shadows
      >
        <ambientLight intensity={0.04} color="#0a1020" />

        {/* Environment map studio : critique pour les couleurs RAL */}
        <Environment preset="studio" />

        {/* Radar lateral */}
        <LateralRadar />

        {/* Camera */}
        <CameraDirector />

        {/* 5 IPN avec couleurs RAL */}
        {RAL_PALETTE.map((ral, i) => (
          <ColoredIPNBeam key={i} x={BEAM_X[i]} color={ral.color} roughness={ral.roughness} />
        ))}

        {/* Particules poudre par beam */}
        {RAL_PALETTE.map((ral, i) => (
          <ColorParticles key={i} x={BEAM_X[i]} color={ral.color} />
        ))}

        <DustMotes />
        <SpectrumFloor />

        <EffectComposer>
          <Bloom intensity={2.0} luminanceThreshold={0.20} luminanceSmoothing={0.85} mipmapBlur />
          <HueSaturation saturation={0.3} />
          <ChromaticAberration
            offset={[0.004, 0.004]}
            radialModulation={false}
            modulationOffset={0}
            blendFunction={BlendFunction.NORMAL}
          />
          <Noise opacity={0.020} />
          <Vignette offset={0.40} darkness={0.85} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
