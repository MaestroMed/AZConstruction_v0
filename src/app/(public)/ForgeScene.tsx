"use client";

/**
 * ForgeScene -- "Forge"
 *
 * 4 IPN HEB horizontaux comme des poutrelles de plancher, dans le noir.
 * Phase chaude (0-8s) : surface incandescente orange-rouge, braises tombantes.
 * Phase refroidissement (3-8s) : la matiere devient anthracite thermolaquee.
 * Phase reveal (8-12s) : SpotLight orbital revele la texture. Pull-back.
 * Concept : la transformation de la matiere brute en ouvrage fini.
 */

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

const Z_VEC = new THREE.Vector3(0, 0, 1);

/* ====================================================================
   IPN HEB-300 GEOMETRY
==================================================================== */

function createHEBGeometry(length: number): THREE.ExtrudeGeometry {
  const b = 0.75; const h = 0.80; const tf = 0.14; const tw = 0.095;
  const shape = new THREE.Shape();
  shape.moveTo(-b/2,0); shape.lineTo(b/2,0); shape.lineTo(b/2,tf);
  shape.lineTo(tw/2+0.015,tf+0.015); shape.lineTo(tw/2,h-tf-0.015);
  shape.lineTo(b/2,h-tf); shape.lineTo(b/2,h); shape.lineTo(-b/2,h);
  shape.lineTo(-b/2,h-tf); shape.lineTo(-tw/2,h-tf-0.015);
  shape.lineTo(-tw/2-0.015,tf+0.015); shape.lineTo(-b/2,tf); shape.closePath();
  const geom = new THREE.ExtrudeGeometry(shape, {
    depth: length, bevelEnabled: true,
    bevelSize: 0.010, bevelThickness: 0.010, bevelSegments: 2,
  });
  geom.center();
  return geom;
}

/* ====================================================================
   FORGE BEAM -- material qui refroidit de orange a anthracite
==================================================================== */

// 4 IPN horizontaux, profondeur croissante, hauteurs variees
const BEAM_DEFS = [
  { z: -4.5, y:  1.5, length: 14, roughness: 0.32 },
  { z: -2.2, y: -0.5, length: 16, roughness: 0.34 },
  { z:  0.3, y:  0.8, length: 13, roughness: 0.33 },
  { z:  2.8, y: -1.2, length: 12, roughness: 0.36 },
];

// Couleur et emissive cibles selon la phase
const HOT_COLOR   = new THREE.Color("#4a1500");
const COLD_COLOR  = new THREE.Color("#2c3135");
const HOT_EMIT   = new THREE.Color("#ff4400");
const COLD_EMIT  = new THREE.Color("#000000");

interface ForgeBeamProps {
  z: number; y: number; length: number; roughness: number;
}

function ForgeBeam({ z, y, length, roughness }: ForgeBeamProps) {
  const geom   = React.useMemo(() => createHEBGeometry(length), [length]);
  // horizontal : dir = (1, 0, 0)
  const quat   = React.useMemo(() =>
    new THREE.Quaternion().setFromUnitVectors(Z_VEC, new THREE.Vector3(1, 0, 0)),
  []);
  const matRef = React.useRef<THREE.MeshStandardMaterial>(null!);
  const tmpColor = React.useMemo(() => new THREE.Color(), []);
  const tmpEmit  = React.useMemo(() => new THREE.Color(), []);

  React.useEffect(() => () => geom.dispose(), [geom]);

  useFrame((state) => {
    if (!matRef.current) return;
    const t = state.clock.elapsedTime;
    // Cool-down : de t=2 a t=9 la matiere refroidit
    const cool = Math.min(1, Math.max(0, (t - 2.0) / 7.0));
    tmpColor.lerpColors(HOT_COLOR,  COLD_COLOR, cool);
    tmpEmit.lerpColors(HOT_EMIT,   COLD_EMIT,  cool);
    matRef.current.color.copy(tmpColor);
    matRef.current.emissive.copy(tmpEmit);
    // Emissive intensity : tres fort au debut, s eteint
    matRef.current.emissiveIntensity = Math.max(0, (1 - cool) * 3.5);
  });

  return (
    <mesh geometry={geom} position={[0, y, z]} quaternion={quat} castShadow receiveShadow>
      <meshStandardMaterial
        ref={matRef}
        color="#4a1500"
        emissive="#ff4400"
        emissiveIntensity={3.5}
        metalness={0.30}
        roughness={roughness}
        envMapIntensity={0.9}
      />
    </mesh>
  );
}

/* ====================================================================
   BRAISES -- particules orange tombantes, actives pendant la phase chaude
==================================================================== */

function Embers() {
  const ref   = React.useRef<THREE.Points>(null!);
  const COUNT = 180;

  const positions = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i*3]   = (Math.random()-0.5) * 18;
      a[i*3+1] = Math.random() * 8 - 1;
      a[i*3+2] = (Math.random()-0.5) * 8;
    }
    return a;
  }, []);

  const vel = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i*3]   = (Math.random()-0.5) * 0.012;
      a[i*3+1] = -(Math.random() * 0.015 + 0.005);
      a[i*3+2] = (Math.random()-0.5) * 0.008;
    }
    return a;
  }, []);

  const live = React.useRef(positions.slice());

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    // S eteindre apres t=8
    const opacity = Math.max(0, 1 - Math.max(0, t - 6) / 3);
    (ref.current.material as THREE.PointsMaterial).opacity = opacity * 0.7;
    if (opacity <= 0) return;

    const p = live.current;
    for (let i = 0; i < COUNT; i++) {
      p[i*3]   += vel[i*3];
      p[i*3+1] += vel[i*3+1];
      p[i*3+2] += vel[i*3+2];
      vel[i*3+1] -= 0.0003;
      if (p[i*3+1] < -5) {
        p[i*3]   = (Math.random()-0.5) * 18;
        p[i*3+1] = 5 + Math.random() * 3;
        p[i*3+2] = (Math.random()-0.5) * 8;
        vel[i*3+1] = -(Math.random() * 0.015 + 0.005);
      }
    }
    const attr = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    attr.array.set(p); attr.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial color="#ff7722" size={0.045} sizeAttenuation
        transparent opacity={0.7} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* ====================================================================
   FORGE LIGHT -- lumiere chaude qui se refroidit + radar post-forge
==================================================================== */

function ForgeLight() {
  const hotRef  = React.useRef<THREE.PointLight>(null!);
  const coldRef = React.useRef<THREE.SpotLight>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const cool = Math.min(1, Math.max(0, (t - 2.0) / 7.0));
    const fadeIn = Math.min(1, Math.max(0, (t - 0.5) / 1.0));

    // Lumiere chaude orange de la forge (bas de la scene)
    if (hotRef.current) {
      hotRef.current.intensity = fadeIn * (1 - cool) * 8;
      hotRef.current.color.setStyle(cool < 0.5 ? "#ff5500" : "#ff8833");
    }

    // SpotLight orbital qui prend le relais apres t=7
    if (coldRef.current) {
      const radarActive = Math.min(1, Math.max(0, (t - 7) / 2));
      const speed = 0.38; const r = 14;
      coldRef.current.position.set(
        Math.sin(t * speed) * r, 9, Math.cos(t * speed) * r + 2,
      );
      coldRef.current.target.position.set(Math.sin(t * speed + 0.35) * 1.5, 0, 0);
      coldRef.current.target.updateMatrixWorld();
      const sweep = Math.pow(Math.abs(Math.cos(t * speed * 2.1)), 2.5);
      coldRef.current.intensity = radarActive * (90 + sweep * 50);
    }
  });

  return (
    <>
      {/* Lumiere chaude forge */}
      <pointLight ref={hotRef} position={[0, -10, 0]} color="#ff5500" intensity={8} distance={30} decay={1.5} />
      {/* Radar froid post-forge */}
      <spotLight
        ref={coldRef} color="#f8f4ee" intensity={0}
        distance={40} angle={0.25} penumbra={0.55} decay={1.4}
        castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048}
      />
    </>
  );
}

/* ====================================================================
   POUSSIERE
==================================================================== */

function DustMotes() {
  const ref   = React.useRef<THREE.Points>(null!);
  const COUNT = 200;
  const pos = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i*3]=(Math.random()-0.5)*22; a[i*3+1]=Math.random()*14-6; a[i*3+2]=(Math.random()-0.5)*12;
    }
    return a;
  }, []);
  const vel = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      a[i*3]=(Math.random()-0.5)*0.004; a[i*3+1]=(Math.random()-0.5)*0.003; a[i*3+2]=(Math.random()-0.5)*0.003;
    }
    return a;
  }, []);
  const live = React.useRef(pos.slice());
  useFrame(() => {
    if (!ref.current) return;
    const p = live.current;
    for (let i = 0; i < COUNT; i++) {
      p[i*3]+=vel[i*3]; p[i*3+1]+=vel[i*3+1]; p[i*3+2]+=vel[i*3+2];
      if (Math.abs(p[i*3])>11) vel[i*3]*=-1;
      if (p[i*3+1]>7||p[i*3+1]<-6) vel[i*3+1]*=-1;
      if (Math.abs(p[i*3+2])>6) vel[i*3+2]*=-1;
    }
    const a = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    a.array.set(p); a.needsUpdate = true;
  });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[pos, 3]} /></bufferGeometry>
      <pointsMaterial color="#c8d8e8" size={0.020} sizeAttenuation transparent opacity={0.28}
        blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* ====================================================================
   SOL
==================================================================== */

function ForgeFloor() {
  return (
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-7.0,0]} receiveShadow>
      <planeGeometry args={[44, 30]} />
      <MeshReflectorMaterial
        blur={[600,150]} resolution={512} mirror={0.5}
        roughness={0.65} depthScale={1.0} minDepthThreshold={0.4}
        maxDepthThreshold={1.4} color="#080500" metalness={0.4}
      />
    </mesh>
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
  // Plan A : Macro sur la surface chaude du 2e beam (le plus proche)
  {
    t0:0, t1:4.5,
    posA: new THREE.Vector3(0.5,  0.5, 2.5),
    posB: new THREE.Vector3(1.2,  0.1, 2.0),
    tgtA: new THREE.Vector3(0,    0.3, 0.3),
    tgtB: new THREE.Vector3(0,   -0.1, -0.2),
    fovA: 34, fovB: 28,
  },
  // Plan B : Recul, le metal refroidit, 2 beams visibles
  {
    t0:4.5, t1:9,
    posA: new THREE.Vector3(1.2,  0.1,  2.0),
    posB: new THREE.Vector3(3.0,  2.0,  7.5),
    tgtA: new THREE.Vector3(0,   -0.1, -0.2),
    tgtB: new THREE.Vector3(0,    0.0, -1.0),
    fovA: 28, fovB: 46,
  },
  // Plan C : Pull-back reveal des 4 IPN
  {
    t0:9, t1:14,
    posA: new THREE.Vector3(3.0,  2.0,  7.5),
    posB: new THREE.Vector3(0.0,  1.5, 17.0),
    tgtA: new THREE.Vector3(0,    0.0, -1.0),
    tgtB: new THREE.Vector3(0,    0.0, -0.5),
    fovA: 46, fovB: 52,
  },
];
const IDLE_START = 14;

function CameraDirector() {
  const { camera } = useThree();
  const mouse  = React.useRef({ x: 0, y: 0 });
  const lookAt = React.useRef(new THREE.Vector3(0, 0.3, 0.3));

  React.useEffect(() => {
    camera.position.set(0.5, 0.5, 2.5);
    (camera as THREE.PerspectiveCamera).fov = 34;
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
      const tgtX = Math.sin(it * 0.08) * 3.5 + mouse.current.x * 1.3;
      const tgtY = 1.2 + Math.sin(it * 0.05) * 0.7 + mouse.current.y * 0.6;
      const tgtZ = 16.5 + Math.cos(it * 0.06) * 1.2;
      camera.position.x += (tgtX - camera.position.x) * Math.min(1, delta * 1.0);
      camera.position.y += (tgtY - camera.position.y) * Math.min(1, delta * 1.0);
      camera.position.z += (tgtZ - camera.position.z) * Math.min(1, delta * 0.7);
      lookAt.current.lerp(new THREE.Vector3(0, 0.3, -0.5), Math.min(1, delta * 1.2));
      camera.lookAt(lookAt.current);
      cam.fov += (52 - cam.fov) * Math.min(1, delta * 1.5);
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

export default function ForgeScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0.5, 0.5, 2.5], fov: 34, near: 0.05, far: 200 }}
        gl={{
          antialias: true, alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.50,
        }}
        dpr={[1, 1.5]}
        shadows
      >
        <ambientLight intensity={0.04} color="#100804" />

        <ForgeLight />
        <CameraDirector />

        {/* 4 IPN HEB horizontaux qui refroidissent */}
        {BEAM_DEFS.map((b, i) => <ForgeBeam key={i} {...b} />)}

        {/* Braises tombantes */}
        <Embers />
        <DustMotes />
        <ForgeFloor />

        <EffectComposer>
          <Bloom intensity={2.5} luminanceThreshold={0.18} luminanceSmoothing={0.85} mipmapBlur />
          <Vignette offset={0.38} darkness={0.85} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
