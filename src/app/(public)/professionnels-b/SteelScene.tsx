"use client";

/**
 * SteelScene -- "Atelier Noir"
 *
 * 5 IPN HEB-300 thermolaquees anthracite dans un hangar noir.
 * Eclairage unique : radar spotLight rotatif + nappe laser cyan horizontale.
 * Camera tres proche des flanges (raking light sur texture).
 */

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/* ====================================================================
   IPN HEB-300 GEOMETRY  (section reelle mise a l echelle)
   h=0.80  b=0.75  tf=0.14  tw=0.095
==================================================================== */

function createHEBGeometry(length: number): THREE.ExtrudeGeometry {
  const b  = 0.75;
  const h  = 0.80;
  const tf = 0.14;
  const tw = 0.095;

  const shape = new THREE.Shape();
  shape.moveTo(-b / 2, 0);
  shape.lineTo( b / 2, 0);
  shape.lineTo( b / 2, tf);
  shape.lineTo( tw / 2 + 0.015, tf + 0.015);   // raccord congé
  shape.lineTo( tw / 2, h - tf - 0.015);
  shape.lineTo( b / 2, h - tf);
  shape.lineTo( b / 2, h);
  shape.lineTo(-b / 2, h);
  shape.lineTo(-b / 2, h - tf);
  shape.lineTo(-tw / 2, h - tf - 0.015);
  shape.lineTo(-tw / 2 - 0.015, tf + 0.015);
  shape.lineTo(-b / 2, tf);
  shape.closePath();

  const geom = new THREE.ExtrudeGeometry(shape, {
    depth: length,
    bevelEnabled: true,
    bevelSize: 0.010,
    bevelThickness: 0.010,
    bevelSegments: 2,
  });
  geom.center();
  return geom;
}

/* ====================================================================
   BEAM STATIQUE
==================================================================== */

const Z_VEC = new THREE.Vector3(0, 0, 1);

interface BeamDef {
  center: [number, number, number];
  dir: [number, number, number];
  length: number;
  roughness?: number;
}

// 5 IPN : structure de chantier
const BEAMS: BeamDef[] = [
  { center: [-3.5,  0.0,  0.0], dir: [0, 1, 0],            length: 14, roughness: 0.33 },
  { center: [ 3.5,  0.0, -0.5], dir: [0, 1, 0],            length: 12, roughness: 0.36 },
  { center: [ 0.5,  3.2, -1.2], dir: [1, 0, 0],            length: 11, roughness: 0.32 },
  { center: [-1.5, -2.0, -1.8], dir: [1, 0.06, 0],         length:  9, roughness: 0.38 },
  { center: [ 1.0,  0.5, -0.8], dir: [0.55, 0.83, 0.06],   length:  9, roughness: 0.35 },
];

function IPNBeam({ center, dir, length, roughness = 0.35 }: BeamDef) {
  const geom  = React.useMemo(() => createHEBGeometry(length), [length]);
  const dirV  = new THREE.Vector3(dir[0], dir[1], dir[2]).normalize();
  const quat  = new THREE.Quaternion().setFromUnitVectors(Z_VEC, dirV);
  React.useEffect(() => () => geom.dispose(), [geom]);

  return (
    <mesh
      geometry={geom}
      position={center}
      quaternion={quat}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial
        color="#2c3135"
        metalness={0.30}
        roughness={roughness}
        envMapIntensity={0.9}
      />
    </mesh>
  );
}

/* ====================================================================
   RADAR SPOT -- spotlight rotatif (lumiere principale)
==================================================================== */

function RadarSpot() {
  const spotRef = React.useRef<THREE.SpotLight>(null!);

  useFrame((state) => {
    if (!spotRef.current) return;
    const t     = state.clock.elapsedTime;
    const speed = 0.38;
    const r     = 14;

    spotRef.current.position.set(
      Math.sin(t * speed) * r,
      9,
      Math.cos(t * speed) * r + 2,
    );

    spotRef.current.target.position.set(
      Math.sin(t * speed + 0.35) * 1.5,
      -0.5,
      0,
    );
    spotRef.current.target.updateMatrixWorld();

    // Variation d intensite : cree l illusion d un balayage plus marque
    const sweep = Math.pow(Math.abs(Math.cos(t * speed * 2.1)), 2.5);
    spotRef.current.intensity = 95 + sweep * 55;
  });

  return (
    <spotLight
      ref={spotRef}
      color="#f8f4ee"
      intensity={95}
      distance={40}
      angle={0.25}
      penumbra={0.58}
      decay={1.4}
      castShadow
      shadow-mapSize-width={2048}
      shadow-mapSize-height={2048}
      shadow-camera-near={1}
      shadow-camera-far={50}
    />
  );
}

/* ====================================================================
   LASER SHEET -- nappe cyan horizontale qui remonte
==================================================================== */

function LaserSheet() {
  const meshRef  = React.useRef<THREE.Mesh>(null!);
  const glowRef  = React.useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return;
    const t     = state.clock.elapsedTime;
    const cycle = (t * 0.14) % 1;
    const y     = -5.8 + cycle * 13;     // balayage -5.8 -> +7.2

    meshRef.current.position.y = y;
    glowRef.current.position.y = y;

    const alpha = Math.sin(cycle * Math.PI);
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = alpha * 0.75;
    glowRef.current.intensity = alpha * 22;
  });

  return (
    <>
      {/* Nappe visuelle emissive */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[26, 0.07]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* PointLight positionne au niveau de la nappe pour eclairer les surfaces */}
      <pointLight
        ref={glowRef}
        color="#00d4ff"
        intensity={22}
        distance={14}
        decay={2}
        position={[0, 0, 1]}
      />
    </>
  );
}

/* ====================================================================
   DUST MOTES -- poussiere d atelier
   Visibles uniquement quand le radar les traverse (AdditiveBlending)
==================================================================== */

function DustMotes() {
  const ref   = React.useRef<THREE.Points>(null!);
  const COUNT = 320;

  const positions = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i * 3]     = (Math.random() - 0.5) * 22;
      a[i * 3 + 1] = Math.random() * 16 - 6;
      a[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return a;
  }, []);

  const velocities = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i * 3]     = (Math.random() - 0.5) * 0.004;
      a[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      a[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
    }
    return a;
  }, []);

  const live = React.useRef(positions.slice());

  useFrame(() => {
    if (!ref.current) return;
    const p = live.current;
    for (let i = 0; i < COUNT; i++) {
      p[i * 3]     += velocities[i * 3];
      p[i * 3 + 1] += velocities[i * 3 + 1];
      p[i * 3 + 2] += velocities[i * 3 + 2];
      if (Math.abs(p[i * 3])     > 11) velocities[i * 3]     *= -1;
      if (p[i * 3 + 1] > 8 || p[i * 3 + 1] < -6) velocities[i * 3 + 1] *= -1;
      if (Math.abs(p[i * 3 + 2]) > 7)  velocities[i * 3 + 2] *= -1;
    }
    const attr = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    attr.array.set(p);
    attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#c8d8e8"
        size={0.022}
        sizeAttenuation
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ====================================================================
   SOL REFLECHISSANT
==================================================================== */

function SteelFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -7.2, 0]} receiveShadow>
      <planeGeometry args={[44, 44]} />
      <MeshReflectorMaterial
        blur={[600, 150]}
        resolution={512}
        mirror={0.6}
        roughness={0.55}
        depthScale={1.0}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#050912"
        metalness={0.5}
      />
    </mesh>
  );
}

/* ====================================================================
   CAMERA DIRECTOR -- cinematographie documentaire industrielle
==================================================================== */

function easeInOutSine(t: number): number {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

interface Shot {
  t0: number;
  t1: number;
  posA: THREE.Vector3;
  posB: THREE.Vector3;
  tgtA: THREE.Vector3;
  tgtB: THREE.Vector3;
  fovA: number;
  fovB: number;
}

const SHOTS: Shot[] = [
  // Plan A : Macro -- rasant sur la flange du pilier gauche
  {
    t0: 0, t1: 5,
    posA: new THREE.Vector3(-2.6,  0.4, 1.3),
    posB: new THREE.Vector3(-2.9,  0.1, 1.1),
    tgtA: new THREE.Vector3(-3.5,  0.2, 0),
    tgtB: new THREE.Vector3(-3.5, -0.1, 0),
    fovA: 32, fovB: 28,
  },
  // Plan B : Orbital -- intersection pilier/poutre horizontale haute
  {
    t0: 5, t1: 9,
    posA: new THREE.Vector3(-2.9,  0.1,  1.1),
    posB: new THREE.Vector3( 0.5,  4.5,  5.5),
    tgtA: new THREE.Vector3(-3.5,  0.0,  0.0),
    tgtB: new THREE.Vector3(-2.5,  2.8, -1.0),
    fovA: 28, fovB: 44,
  },
  // Plan C : Travelling -- remontee le long du pilier gauche
  {
    t0: 9, t1: 13,
    posA: new THREE.Vector3( 0.5,  4.5,  5.5),
    posB: new THREE.Vector3(-5.5, -5.0,  2.8),
    tgtA: new THREE.Vector3(-2.5,  2.8, -1.0),
    tgtB: new THREE.Vector3(-3.5,  0.0,  0.0),
    fovA: 44, fovB: 38,
  },
  // Plan D : Reveal -- les 5 IPN dans la penombre
  {
    t0: 13, t1: 18,
    posA: new THREE.Vector3(-5.5, -5.0,  2.8),
    posB: new THREE.Vector3( 1.0,  1.5, 16.0),
    tgtA: new THREE.Vector3(-3.5,  0.0,  0.0),
    tgtB: new THREE.Vector3( 0.0,  0.0, -1.0),
    fovA: 38, fovB: 50,
  },
];

const IDLE_START = 18;

function CameraDirector() {
  const { camera } = useThree();
  const mouse    = React.useRef({ x: 0, y: 0 });
  const lookAt   = React.useRef(new THREE.Vector3(-3.5, 0.2, 0));

  React.useEffect(() => {
    camera.position.set(-2.6, 0.4, 1.3);
    (camera as THREE.PerspectiveCamera).fov = 32;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
  }, [camera]);

  React.useEffect(() => {
    const h = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => window.removeEventListener("mousemove", h);
  }, []);

  useFrame((state, delta) => {
    const t   = state.clock.elapsedTime;
    const cam = camera as THREE.PerspectiveCamera;

    if (t >= IDLE_START) {
      const it    = t - IDLE_START;
      const tgtX  = Math.sin(it * 0.07) * 3.5 + mouse.current.x * 1.4;
      const tgtY  = 1.5 + Math.sin(it * 0.05) * 0.8 + mouse.current.y * 0.7;
      const tgtZ  = 14.5 + Math.cos(it * 0.06) * 1.5;

      camera.position.x += (tgtX - camera.position.x) * Math.min(1, delta * 1.0);
      camera.position.y += (tgtY - camera.position.y) * Math.min(1, delta * 1.0);
      camera.position.z += (tgtZ - camera.position.z) * Math.min(1, delta * 0.7);

      lookAt.current.lerp(new THREE.Vector3(0, 0.5, -1), Math.min(1, delta * 1.5));
      camera.lookAt(lookAt.current);

      cam.fov += (50 - cam.fov) * Math.min(1, delta * 1.5);
      cam.updateProjectionMatrix();
      return;
    }

    const shot = SHOTS.find(s => t >= s.t0 && t <= s.t1) ?? SHOTS[SHOTS.length - 1];
    const dur  = shot.t1 - shot.t0;
    const prog = easeInOutSine(Math.min(1, (t - shot.t0) / dur));

    const targetPos = new THREE.Vector3().lerpVectors(shot.posA, shot.posB, prog);
    const targetTgt = new THREE.Vector3().lerpVectors(shot.tgtA, shot.tgtB, prog);
    const targetFov = shot.fovA + (shot.fovB - shot.fovA) * prog;

    camera.position.lerp(targetPos, Math.min(1, delta * 2.8));
    lookAt.current.lerp(targetTgt, Math.min(1, delta * 3.2));
    camera.lookAt(lookAt.current);

    cam.fov += (targetFov - cam.fov) * Math.min(1, delta * 2.5);
    cam.updateProjectionMatrix();
  });

  return null;
}

/* ====================================================================
   ROOT EXPORT
==================================================================== */

export default function SteelScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [-2.6, 0.4, 1.3], fov: 32, near: 0.05, far: 200 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.65,
        }}
        dpr={[1, 1.5]}
        shadows
      >
        {/* Quasi-noir : seul le radar et le laser eclairent */}
        <ambientLight intensity={0.04} color="#0a1020" />

        {/* Radar SpotLight rotatif */}
        <RadarSpot />

        {/* Nappe laser cyan */}
        <LaserSheet />

        {/* Camera cinematographique */}
        <CameraDirector />

        {/* 5 IPN HEB-300 thermolaquees */}
        {BEAMS.map((b, i) => <IPNBeam key={i} {...b} />)}

        {/* Poussiere d atelier */}
        <DustMotes />

        {/* Sol reflechissant */}
        <SteelFloor />

        {/* Post-processing */}
        <EffectComposer>
          <Bloom
            intensity={1.8}
            luminanceThreshold={0.22}
            luminanceSmoothing={0.85}
            mipmapBlur
          />
          <Vignette offset={0.40} darkness={0.88} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
