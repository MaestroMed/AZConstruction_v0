"use client";

/**
 * LumiereScene -- "Lumiere"
 *
 * Un garde-corps verre + acier slim dans un espace residential.
 * Lumiere naturelle douce venue du haut-gauche (simule une fenetre d appartement).
 * MeshPhysicalMaterial avec transmission pour un verre realiste.
 * Pas de radar industriel -- ambiance elegante, chaleureuse, residentielle.
 * Concept : votre maison, notre savoir-faire.
 */

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom, Vignette, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";

/* ====================================================================
   GEOMETRY HELPERS
==================================================================== */

// Profil carre slim 40x40 pour montants residentiels
function createSquareProfile(length: number): THREE.BufferGeometry {
  const s = 0.04;
  const geom = new THREE.BoxGeometry(s, s, length);
  return geom;
}

// Main courante rectangulaire slim
function createHandrailProfile(length: number): THREE.BufferGeometry {
  return new THREE.BoxGeometry(0.055, 0.04, length);
}

/* ====================================================================
   MATERIAUX
==================================================================== */

// Acier slim noir satiné (finition premium residentielle)
const STEEL_PROPS = {
  color:    "#1a1e22",
  metalness: 0.80,
  roughness: 0.18,
  envMapIntensity: 1.2,
};

/* ====================================================================
   GARDE-CORPS -- montants + panneaux verre + main courante
   Structure : 3 travees de 1.2m, hauteur 1.1m
==================================================================== */

function GardeCorps() {
  // Montants verticaux (5 pieces, pitch 1.2m)
  const POSTS = [-2.4, -1.2, 0, 1.2, 2.4];
  const H  = 1.1;  // hauteur garde-corps
  const pGeom = React.useMemo(() => createSquareProfile(H), []);
  const rGeom = React.useMemo(() => createHandrailProfile(5.0), []);

  // Panneaux verre (3 travees)
  const GLASS_X = [-1.8, 0, 1.8];
  const gGeom = React.useMemo(() => new THREE.PlaneGeometry(1.14, H - 0.08), []);

  React.useEffect(() => () => {
    pGeom.dispose(); rGeom.dispose(); gGeom.dispose();
  }, [pGeom, rGeom, gGeom]);

  return (
    <group position={[0, 0, 0]}>
      {/* Montants verticaux */}
      {POSTS.map((x, i) => (
        <mesh key={i} geometry={pGeom} position={[x, 0, 0]} castShadow receiveShadow>
          <meshStandardMaterial {...STEEL_PROPS} />
        </mesh>
      ))}

      {/* Main courante horizontale */}
      <mesh geometry={rGeom} position={[0, H/2, 0]} castShadow>
        <meshStandardMaterial {...STEEL_PROPS} />
      </mesh>

      {/* Lisse basse */}
      <mesh geometry={rGeom} position={[0, -H/2 + 0.06, 0]} castShadow>
        <meshStandardMaterial {...STEEL_PROPS} />
      </mesh>

      {/* Panneaux verre feuillete -- MeshPhysicalMaterial */}
      {GLASS_X.map((x, i) => (
        <mesh key={i} geometry={gGeom} position={[x, 0, 0]}>
          <meshPhysicalMaterial
            color="#c8dde8"
            transmission={0.88}
            opacity={0.95}
            transparent
            roughness={0.04}
            metalness={0.0}
            ior={1.52}
            thickness={0.012}
            reflectivity={0.5}
            envMapIntensity={0.8}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

/* ====================================================================
   ECLAIRAGE RESIDENTIEL -- lumiere naturelle douce
==================================================================== */

function ResidentialLighting() {
  const mainRef = React.useRef<THREE.DirectionalLight>(null!);
  const fillRef = React.useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Fade-in progressif pour eviter le noir initial
    const fadeIn = Math.min(1, t / 1.5);

    if (mainRef.current) {
      // Legere variation organique (comme nuages qui passent)
      mainRef.current.intensity = fadeIn * (2.8 + Math.sin(t * 0.15) * 0.15);
    }
    if (fillRef.current) {
      fillRef.current.intensity = fadeIn * (0.8 + Math.sin(t * 0.11) * 0.06);
    }
  });

  return (
    <>
      {/* Lumiere principale : simule soleil/fenetre haut-gauche */}
      <directionalLight
        ref={mainRef}
        color="#ffe8cc"
        intensity={2.8}
        position={[-5, 8, 4]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-camera-left={-8}
        shadow-camera-right={8}
        shadow-camera-top={8}
        shadow-camera-bottom={-8}
      />
      {/* Fill light doux depuis le bas-droit */}
      <pointLight
        ref={fillRef}
        color="#dde8ff"
        intensity={0.8}
        distance={12}
        decay={2}
        position={[4, -3, 3]}
      />
      {/* Ambient warm */}
      <ambientLight intensity={0.18} color="#f5eedc" />
    </>
  );
}

/* ====================================================================
   PARTICLES -- motes de poussiere en suspension (lumiere du matin)
==================================================================== */

function DustInLight() {
  const ref   = React.useRef<THREE.Points>(null!);
  const COUNT = 120;
  const pos = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i*3]=(Math.random()-0.5)*8; a[i*3+1]=(Math.random()-0.5)*4; a[i*3+2]=(Math.random()-0.5)*4;
    }
    return a;
  }, []);
  const vel = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i*3]=(Math.random()-0.5)*0.003; a[i*3+1]=(Math.random()-0.5)*0.002; a[i*3+2]=(Math.random()-0.5)*0.002;
    }
    return a;
  }, []);
  const live = React.useRef(pos.slice());
  useFrame(() => {
    if (!ref.current) return;
    const p = live.current;
    for (let i = 0; i < COUNT; i++) {
      p[i*3]+=vel[i*3]; p[i*3+1]+=vel[i*3+1]; p[i*3+2]+=vel[i*3+2];
      if (Math.abs(p[i*3])>4) vel[i*3]*=-1;
      if (Math.abs(p[i*3+1])>2) vel[i*3+1]*=-1;
      if (Math.abs(p[i*3+2])>2) vel[i*3+2]*=-1;
    }
    const a = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    a.array.set(p); a.needsUpdate = true;
  });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[pos, 3]} /></bufferGeometry>
      <pointsMaterial color="#fffae0" size={0.015} sizeAttenuation
        transparent opacity={0.50} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* ====================================================================
   CAMERA DIRECTOR
==================================================================== */

function easeInOutSine(t: number) { return -(Math.cos(Math.PI * t) - 1) / 2; }

interface Shot {
  t0:number; t1:number;
  posA:THREE.Vector3; posB:THREE.Vector3;
  tgtA:THREE.Vector3; tgtB:THREE.Vector3;
  fovA:number; fovB:number;
}

const SHOTS: Shot[] = [
  // Plan A : Macro rasant sur la main courante en acier
  {
    t0:0, t1:5,
    posA: new THREE.Vector3(-1.0, 0.7, 1.0),
    posB: new THREE.Vector3(-0.5, 0.6, 0.8),
    tgtA: new THREE.Vector3( 0.0, 0.5, 0),
    tgtB: new THREE.Vector3( 1.0, 0.5, 0),
    fovA: 28, fovB: 24,
  },
  // Plan B : Orbital lent, le verre transparent devient visible
  {
    t0:5, t1:10,
    posA: new THREE.Vector3(-0.5,  0.6,  0.8),
    posB: new THREE.Vector3( 2.0,  0.5,  3.2),
    tgtA: new THREE.Vector3( 1.0,  0.5,  0),
    tgtB: new THREE.Vector3( 0.0,  0.0,  0),
    fovA: 24, fovB: 42,
  },
  // Plan C : Pull-back, garde-corps entier visible
  {
    t0:10, t1:15,
    posA: new THREE.Vector3( 2.0,  0.5,  3.2),
    posB: new THREE.Vector3( 0.0,  0.8,  6.5),
    tgtA: new THREE.Vector3( 0.0,  0.0,  0),
    tgtB: new THREE.Vector3( 0.0,  0.0,  0),
    fovA: 42, fovB: 52,
  },
];
const IDLE_START = 15;

function CameraDirector() {
  const { camera } = useThree();
  const mouse  = React.useRef({ x: 0, y: 0 });
  const lookAt = React.useRef(new THREE.Vector3(0, 0.5, 0));

  React.useEffect(() => {
    camera.position.set(-1.0, 0.7, 1.0);
    (camera as THREE.PerspectiveCamera).fov = 28;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
  }, [camera]);

  React.useEffect(() => {
    const h = (e: MouseEvent) => {
      mouse.current.x = (e.clientX/window.innerWidth-0.5)*2;
      mouse.current.y = -(e.clientY/window.innerHeight-0.5)*2;
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => window.removeEventListener("mousemove", h);
  }, []);

  useFrame((state, delta) => {
    const t   = state.clock.elapsedTime;
    const cam = camera as THREE.PerspectiveCamera;

    if (t >= IDLE_START) {
      const it   = t - IDLE_START;
      const tgtX = Math.sin(it * 0.05) * 2.5 + mouse.current.x * 0.8;
      const tgtY = 0.5 + Math.sin(it * 0.04) * 0.3 + mouse.current.y * 0.4;
      const tgtZ = 6.5 + Math.cos(it * 0.04) * 0.8;
      camera.position.x += (tgtX - camera.position.x) * Math.min(1, delta * 0.8);
      camera.position.y += (tgtY - camera.position.y) * Math.min(1, delta * 0.8);
      camera.position.z += (tgtZ - camera.position.z) * Math.min(1, delta * 0.6);
      lookAt.current.lerp(new THREE.Vector3(0, 0.1, 0), Math.min(1, delta * 1.0));
      camera.lookAt(lookAt.current);
      cam.fov += (52 - cam.fov) * Math.min(1, delta * 1.2);
      cam.updateProjectionMatrix();
      return;
    }

    const shot = SHOTS.find(s => t >= s.t0 && t <= s.t1) ?? SHOTS[SHOTS.length - 1];
    const prog = easeInOutSine(Math.min(1, (t - shot.t0) / (shot.t1 - shot.t0)));
    const tPos = new THREE.Vector3().lerpVectors(shot.posA, shot.posB, prog);
    const tTgt = new THREE.Vector3().lerpVectors(shot.tgtA, shot.tgtB, prog);
    camera.position.lerp(tPos, Math.min(1, delta * 2.5));
    lookAt.current.lerp(tTgt, Math.min(1, delta * 3.0));
    camera.lookAt(lookAt.current);
    cam.fov += (shot.fovA + (shot.fovB - shot.fovA) * prog - cam.fov) * Math.min(1, delta * 2.2);
    cam.updateProjectionMatrix();
  });

  return null;
}

/* ====================================================================
   ROOT EXPORT
==================================================================== */

export default function LumiereScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [-1.0, 0.7, 1.0], fov: 28, near: 0.01, far: 100 }}
        gl={{
          antialias: true, alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.20,
        }}
        dpr={[1, 1.5]}
        shadows
      >
        <ResidentialLighting />
        <CameraDirector />

        {/* Garde-corps verre + acier */}
        <GardeCorps />

        {/* Poussiere en suspension (lumiere du matin) */}
        <DustInLight />

        {/* Sol sombre neutre */}
        <mesh rotation={[-Math.PI/2,0,0]} position={[0,-0.57,0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#0d0f12" metalness={0.3} roughness={0.8} />
        </mesh>

        <EffectComposer>
          <Bloom intensity={0.6} luminanceThreshold={0.35} luminanceSmoothing={0.9} mipmapBlur />
          <Vignette offset={0.35} darkness={0.70} />
          <DepthOfField focusDistance={0.012} focalLength={0.025} bokehScale={2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
