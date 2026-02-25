"use client";

/**
 * SteelScene -- "Atelier Noir" + Reveal AZ
 *
 * 6 IPN HEB-300 thermolaquees anthracite dans un hangar noir.
 * Les plans A/B/C montrent des gros plans sur les diagonales du "A".
 * Le Plan D revele que la structure entiere forme les lettres "AZ".
 * A t=15s les joints de soudure s allument en cyan.
 */

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/* ====================================================================
   IPN HEB-300 GEOMETRY
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
  shape.lineTo( tw / 2 + 0.015, tf + 0.015);
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

/**
 * 6 IPN forment les lettres "AZ"
 * AZ global : x de -5.5 a +6.5, y de -3 a +3, centre en (0.5, 0, 0)
 *
 * Lettre A -- apex (-2.5, 3, 0), pieds (-5.5, -3, 0) et (0.5, -3, 0)
 * Lettre Z -- top-left (1.5, 3, 0), top-right (6.5, 3, 0)
 *             bot-left (1.5,-3, 0), bot-right (6.5,-3, 0)
 */
const BEAMS: BeamDef[] = [
  // A -- diagonale gauche : (-5.5,-3,0) -> (-2.5,3,0)
  { center: [-4.0,  0.0, 0], dir: [ 0.447, 0.894, 0], length: 6.72, roughness: 0.34 },
  // A -- diagonale droite : (0.5,-3,0) -> (-2.5,3,0)
  { center: [-1.0,  0.0, 0], dir: [-0.447, 0.894, 0], length: 6.72, roughness: 0.33 },
  // A -- traverse : (-4.5,0,0) -> (-0.5,0,0)
  { center: [-2.5,  0.0, 0], dir: [ 1.000, 0.000, 0], length: 4.00, roughness: 0.36 },
  // Z -- barre haute : (1.5,3,0) -> (6.5,3,0)
  { center: [ 4.0,  3.0, 0], dir: [ 1.000, 0.000, 0], length: 5.00, roughness: 0.35 },
  // Z -- diagonale : (6.5,3,0) -> (1.5,-3,0)
  { center: [ 4.0,  0.0, 0], dir: [-0.640,-0.768, 0], length: 7.81, roughness: 0.33 },
  // Z -- barre basse : (1.5,-3,0) -> (6.5,-3,0)
  { center: [ 4.0, -3.0, 0], dir: [ 1.000, 0.000, 0], length: 5.00, roughness: 0.36 },
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
   WELD GLOW -- joints de soudure qui s allument a t=15s
==================================================================== */

const JOINT_POSITIONS: [number, number, number][] = [
  // Lettre A
  [-2.5,  3.0, 0],   // apex
  [-5.5, -3.0, 0],   // pied gauche
  [ 0.5, -3.0, 0],   // pied droit
  [-4.5,  0.0, 0],   // traverse cote gauche
  [-0.5,  0.0, 0],   // traverse cote droit
  // Lettre Z
  [ 1.5,  3.0, 0],   // coin haut-gauche
  [ 6.5,  3.0, 0],   // coin haut-droit
  [ 1.5, -3.0, 0],   // coin bas-gauche
  [ 6.5, -3.0, 0],   // coin bas-droit
];

function WeldGlow() {
  const matsRef  = React.useRef<(THREE.MeshStandardMaterial | null)[]>([]);
  const lightRef = React.useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const t      = state.clock.elapsedTime;
    const fadeIn = Math.min(1, Math.max(0, (t - 15) / 2));  // 0->1 de t=15 a t=17
    const pulse  = 1 + Math.sin(t * 3.2) * 0.22;
    const target = fadeIn * 5.5 * pulse;

    matsRef.current.forEach(m => { if (m) m.emissiveIntensity = target; });

    if (lightRef.current) {
      lightRef.current.intensity = fadeIn * 8 * pulse;
    }
  });

  return (
    <>
      {/* Spheres emissives aux joints */}
      {JOINT_POSITIONS.map(([x, y, z], i) => (
        <mesh key={i} position={[x, y, z]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial
            ref={el => { matsRef.current[i] = el; }}
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0}
            metalness={0}
            roughness={1}
          />
        </mesh>
      ))}
      {/* Point light cyan a l apex pour marquer la signature */}
      <pointLight
        ref={lightRef}
        position={[-2.5, 3.0, 2]}
        color="#00d4ff"
        intensity={0}
        distance={14}
        decay={2}
      />
    </>
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

    // 0.6s de noir total au debut
    const fadeIn = Math.min(1, Math.max(0, (t - 0.6) / 0.8));

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

    const sweep = Math.pow(Math.abs(Math.cos(t * speed * 2.1)), 2.5);
    spotRef.current.intensity = fadeIn * (95 + sweep * 55);
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
   LASER SHEET -- nappe cyan horizontale
==================================================================== */

function LaserSheet() {
  const meshRef  = React.useRef<THREE.Mesh>(null!);
  const glowRef  = React.useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    if (!meshRef.current || !glowRef.current) return;
    const t     = state.clock.elapsedTime;
    const cycle = (t * 0.14) % 1;
    const y     = -5.8 + cycle * 13;

    meshRef.current.position.y = y;
    glowRef.current.position.y = y;

    const alpha = Math.sin(cycle * Math.PI);
    (meshRef.current.material as THREE.MeshBasicMaterial).opacity = alpha * 0.75;
    glowRef.current.intensity = alpha * 22;
  });

  return (
    <>
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
   Plans A/B/C : gros plans sur la diagonale gauche du "A"
   Plan D : reveal "AZ"
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
  // Plan A : 0.6s de noir pur, puis macro sur la flange de la diagonale gauche du A
  // Le spectateur voit une grande diagonale d IPN sans savoir que c est un A
  {
    t0: 0, t1: 5.6,
    posA: new THREE.Vector3(-3.2,  0.6, 1.3),
    posB: new THREE.Vector3(-3.5,  0.1, 1.1),
    tgtA: new THREE.Vector3(-4.0,  0.3, 0),
    tgtB: new THREE.Vector3(-4.0, -0.1, 0),
    fovA: 32, fovB: 28,
  },
  // Plan B : Orbital -- autour de l apex du A
  // On commence a voir une pointe -- etrange pour un chantier
  {
    t0: 5, t1: 9,
    posA: new THREE.Vector3(-3.5,  0.1,  1.1),
    posB: new THREE.Vector3( 0.0,  5.0,  5.5),
    tgtA: new THREE.Vector3(-4.0,  0.0,  0.0),
    tgtB: new THREE.Vector3(-2.5,  3.0,  0.0),
    fovA: 28, fovB: 44,
  },
  // Plan C : Travelling -- remontee de la diagonale, pied bas visible
  {
    t0: 9, t1: 13,
    posA: new THREE.Vector3( 0.0,  5.0,  5.5),
    posB: new THREE.Vector3(-6.5, -4.0,  2.5),
    tgtA: new THREE.Vector3(-2.5,  3.0,  0.0),
    tgtB: new THREE.Vector3(-4.0,  0.0,  0.0),
    fovA: 44, fovB: 38,
  },
  // Plan D : Reveal AZ -- le pull-back revele la structure entiere
  // A t=15 les joints de soudure s allument
  {
    t0: 13, t1: 18,
    posA: new THREE.Vector3(-6.5, -4.0,  2.5),
    posB: new THREE.Vector3( 0.5,  0.5, 19.0),
    tgtA: new THREE.Vector3(-4.0,  0.0,  0.0),
    tgtB: new THREE.Vector3( 0.5,  0.0,  0.0),
    fovA: 38, fovB: 52,
  },
];

const IDLE_START = 18;

function CameraDirector() {
  const { camera } = useThree();
  const mouse    = React.useRef({ x: 0, y: 0 });
  const lookAt   = React.useRef(new THREE.Vector3(-4.0, 0.3, 0));

  React.useEffect(() => {
    camera.position.set(-3.2, 0.6, 1.3);
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
      // Idle : orbite lente centree sur le milieu de l AZ (x=0.5)
      const it   = t - IDLE_START;
      const tgtX = 0.5 + Math.sin(it * 0.07) * 4.0 + mouse.current.x * 1.4;
      const tgtY = 0.8 + Math.sin(it * 0.05) * 0.9 + mouse.current.y * 0.7;
      const tgtZ = 17.5 + Math.cos(it * 0.06) * 1.5;

      camera.position.x += (tgtX - camera.position.x) * Math.min(1, delta * 1.0);
      camera.position.y += (tgtY - camera.position.y) * Math.min(1, delta * 1.0);
      camera.position.z += (tgtZ - camera.position.z) * Math.min(1, delta * 0.7);

      lookAt.current.lerp(new THREE.Vector3(0.5, 0.3, -0.5), Math.min(1, delta * 1.5));
      camera.lookAt(lookAt.current);

      cam.fov += (52 - cam.fov) * Math.min(1, delta * 1.5);
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
        camera={{ position: [-3.2, 0.6, 1.3], fov: 32, near: 0.05, far: 200 }}
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
        {/* Quasi-noir total */}
        <ambientLight intensity={0.04} color="#0a1020" />

        {/* Radar SpotLight rotatif */}
        <RadarSpot />

        {/* Nappe laser cyan */}
        <LaserSheet />

        {/* Camera cinematographique */}
        <CameraDirector />

        {/* 6 IPN HEB-300 formant AZ */}
        {BEAMS.map((b, i) => <IPNBeam key={i} {...b} />)}

        {/* Joints de soudure -- s allument a t=15 lors du reveal */}
        <WeldGlow />

        {/* Poussiere d atelier */}
        <DustMotes />

        {/* Sol reflechissant */}
        <SteelFloor />

        {/* Post-processing */}
        <EffectComposer>
          <Bloom
            intensity={2.2}
            luminanceThreshold={0.18}
            luminanceSmoothing={0.85}
            mipmapBlur
          />
          <Vignette offset={0.40} darkness={0.88} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
