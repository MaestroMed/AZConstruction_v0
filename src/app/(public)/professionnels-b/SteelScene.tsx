"use client";

/**
 * SteelScene — AZ Construction World-Class Animation
 *
 * Animation cinematographique en 3 actes :
 *   1. Vol   : 6 IPN HEB reels convergent depuis le vide
 *   2. Forge : arc de soudure cyan trace chaque joint
 *   3. Idle  : "AZ" en acier poli, rotation + parallax souris
 */

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshReflectorMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

/* ====================================================================
   CONSTANTES GLOBALES
==================================================================== */

const Z_AXIS = new THREE.Vector3(0, 0, 1);

const T = {
  FORGE_START: 0.6,
  FLY_START: 1.4,
  FLY_END: 4.2,
  WELD_START: 4.4,
  WELD_END: 7.2,
  REVEAL_END: 8.8,
} as const;

/* ====================================================================
   PROFIL IPN HEB — ExtrudeGeometry en H
   Proportions HEB 200 : 200mm flanges, 200mm h
==================================================================== */

function createIPNGeometry(length: number): THREE.ExtrudeGeometry {
  const fw = 0.30;
  const fh = 0.058;
  const wt = 0.036;
  const ht = 0.32;

  const shape = new THREE.Shape();
  shape.moveTo(-fw / 2, 0);
  shape.lineTo( fw / 2, 0);
  shape.lineTo( fw / 2, fh);
  shape.lineTo( wt / 2 + 0.01, fh + 0.01);
  shape.lineTo( wt / 2, ht - fh - 0.01);
  shape.lineTo( fw / 2, ht - fh);
  shape.lineTo( fw / 2, ht);
  shape.lineTo(-fw / 2, ht);
  shape.lineTo(-fw / 2, ht - fh);
  shape.lineTo(-wt / 2, ht - fh - 0.01);
  shape.lineTo(-wt / 2 - 0.01, fh + 0.01);
  shape.lineTo(-fw / 2, fh);
  shape.closePath();

  const geom = new THREE.ExtrudeGeometry(shape, {
    depth: length,
    bevelEnabled: true,
    bevelSize: 0.006,
    bevelThickness: 0.006,
    bevelSegments: 2,
  });
  geom.center();
  return geom;
}

/* ====================================================================
   EASING
==================================================================== */

function easeOutExpo(t: number): number {
  return t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/* ====================================================================
   IPN BEAM — vol depuis direction aleatoire
==================================================================== */

interface IPNBeamProps {
  startWorld: THREE.Vector3;
  endWorld: THREE.Vector3;
  flyFrom: THREE.Vector3;
  color: string;
  emissive: string;
  emissiveIntensity: number;
  flyDelay: number;
  flyDuration: number;
  onLanded?: () => void;
}

function IPNBeam({
  startWorld, endWorld, flyFrom,
  color, emissive, emissiveIntensity,
  flyDelay, flyDuration, onLanded,
}: IPNBeamProps) {
  const groupRef = React.useRef<THREE.Group>(null!);
  const matRef   = React.useRef<THREE.MeshStandardMaterial>(null!);
  const landed   = React.useRef(false);
  const geomRef  = React.useRef<THREE.BufferGeometry | null>(null);

  const len = React.useMemo(() => startWorld.distanceTo(endWorld), [startWorld, endWorld]);

  const quat = React.useMemo(() => {
    const dir = endWorld.clone().sub(startWorld).normalize();
    return new THREE.Quaternion().setFromUnitVectors(Z_AXIS, dir);
  }, [startWorld, endWorld]);

  const finalCenter = React.useMemo(
    () => startWorld.clone().add(endWorld).multiplyScalar(0.5),
    [startWorld, endWorld],
  );

  const startCenter = React.useMemo(
    () => flyFrom.clone().add(endWorld.clone().sub(startWorld).multiplyScalar(0.5)),
    [flyFrom, startWorld, endWorld],
  );

  React.useEffect(() => {
    geomRef.current = createIPNGeometry(len);
    return () => { geomRef.current?.dispose(); };
  }, [len]);

  useFrame((state) => {
    if (!groupRef.current || !matRef.current) return;
    const t = state.clock.elapsedTime;
    const elapsed = t - (T.FLY_START + flyDelay);

    if (elapsed < 0) {
      groupRef.current.position.copy(startCenter);
      groupRef.current.quaternion.copy(quat);
      matRef.current.opacity = 0;
      return;
    }

    const progress = Math.min(1, elapsed / flyDuration);
    const eased = easeOutExpo(progress);

    const pos = startCenter.clone().lerp(finalCenter, eased);
    groupRef.current.position.copy(pos);
    groupRef.current.quaternion.copy(quat);
    matRef.current.opacity = Math.min(1, progress * 3);

    if (progress < 1) {
      const wobble = Math.sin(progress * Math.PI * 3) * (1 - progress) * 0.10;
      const extra = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), wobble);
      groupRef.current.quaternion.multiplyQuaternions(quat, extra);
    }

    if (progress >= 1 && !landed.current) {
      landed.current = true;
      onLanded?.();
    }
  });

  if (!geomRef.current) return null;

  return (
    <group ref={groupRef}>
      <mesh geometry={geomRef.current} castShadow>
        <meshStandardMaterial
          ref={matRef}
          color={color}
          emissive={emissive}
          emissiveIntensity={emissiveIntensity}
          metalness={0.92}
          roughness={0.12}
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
}

/* ====================================================================
   WELD SEAM — soudure emissive
==================================================================== */

function WeldSeam({ pointA, pointB, visible }: {
  pointA: THREE.Vector3; pointB: THREE.Vector3; visible: boolean;
}) {
  const matRef = React.useRef<THREE.MeshStandardMaterial>(null!);
  const length = pointA.distanceTo(pointB);
  const center = pointA.clone().add(pointB).multiplyScalar(0.5);
  const dir    = pointB.clone().sub(pointA).normalize();
  const quat   = new THREE.Quaternion().setFromUnitVectors(Z_AXIS, dir);

  useFrame((state, delta) => {
    if (!matRef.current) return;
    const target = visible ? 3.5 : 0;
    matRef.current.emissiveIntensity += (target - matRef.current.emissiveIntensity) * Math.min(1, delta * 8);
    if (visible) {
      matRef.current.emissiveIntensity += Math.sin(state.clock.elapsedTime * 4) * 0.3;
    }
  });

  return (
    <mesh position={center} quaternion={quat}>
      <boxGeometry args={[0.025, 0.025, length]} />
      <meshStandardMaterial
        ref={matRef}
        color="#00d4ff"
        emissive="#00d4ff"
        emissiveIntensity={0}
        metalness={0}
        roughness={1}
      />
    </mesh>
  );
}

/* ====================================================================
   SPARK SYSTEM
==================================================================== */

interface SparkParticle {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  life: number;
  type: "cyan" | "orange" | "white";
}

function useSparkSystem(capacity = 700) {
  const particles = React.useRef<SparkParticle[]>([]);

  const emit = React.useCallback((origin: THREE.Vector3, count: number, burst: "impact" | "weld") => {
    for (let i = 0; i < count; i++) {
      const r = Math.random();
      const type = burst === "weld"
        ? (r < 0.5 ? "cyan" : r < 0.75 ? "orange" : "white")
        : (r < 0.3 ? "cyan" : r < 0.65 ? "orange" : "white");
      const speed = burst === "weld" ? Math.random() * 0.16 + 0.05 : Math.random() * 0.22 + 0.08;
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.random() * Math.PI;
      particles.current.push({
        pos: origin.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * 0.25,
          (Math.random() - 0.5) * 0.25,
          (Math.random() - 0.5) * 0.25,
        )),
        vel: new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta) * speed,
          Math.abs(Math.cos(phi)) * speed * 1.5,
          Math.sin(phi) * Math.sin(theta) * speed,
        ),
        life: 1.0,
        type,
      });
    }
    if (particles.current.length > capacity) {
      particles.current = particles.current.slice(-capacity);
    }
  }, [capacity]);

  return { particles, emit };
}

function SparkRenderer({ particles }: { particles: React.MutableRefObject<SparkParticle[]> }) {
  const cyanRef   = React.useRef<THREE.Points>(null!);
  const orangeRef = React.useRef<THREE.Points>(null!);
  const whiteRef  = React.useRef<THREE.Points>(null!);
  const MAX = 700;

  const cyanPos   = React.useMemo(() => new Float32Array(MAX * 3), []);
  const orangePos = React.useMemo(() => new Float32Array(MAX * 3), []);
  const whitePos  = React.useMemo(() => new Float32Array(MAX * 3), []);

  useFrame((_, delta) => {
    const ps = particles.current;
    let ci = 0, oi = 0, wi = 0;
    const GRAVITY = 0.006;
    const FLOOR   = -2.75;

    for (let i = ps.length - 1; i >= 0; i--) {
      const p = ps[i];
      p.vel.y -= GRAVITY;
      p.pos.addScaledVector(p.vel, 1);
      p.life -= delta * 0.85;
      if (p.pos.y < FLOOR) {
        p.pos.y = FLOOR;
        p.vel.y *= -0.22;
        p.vel.x *= 0.65;
        p.vel.z *= 0.65;
      }
      if (p.life <= 0) { ps.splice(i, 1); continue; }
      if (p.type === "cyan"   && ci < MAX) { cyanPos[ci*3]   = p.pos.x; cyanPos[ci*3+1]   = p.pos.y; cyanPos[ci*3+2]   = p.pos.z; ci++; }
      else if (p.type === "orange" && oi < MAX) { orangePos[oi*3] = p.pos.x; orangePos[oi*3+1] = p.pos.y; orangePos[oi*3+2] = p.pos.z; oi++; }
      else if (p.type === "white"  && wi < MAX) { whitePos[wi*3]  = p.pos.x; whitePos[wi*3+1]  = p.pos.y; whitePos[wi*3+2]  = p.pos.z; wi++; }
    }
    const OOB = 9999;
    for (let i = ci; i < MAX; i++) { cyanPos[i*3+1]   = OOB; }
    for (let i = oi; i < MAX; i++) { orangePos[i*3+1] = OOB; }
    for (let i = wi; i < MAX; i++) { whitePos[i*3+1]  = OOB; }

    const upd = (ref: React.RefObject<THREE.Points>, buf: Float32Array) => {
      if (!ref.current) return;
      const a = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute;
      a.array.set(buf); a.needsUpdate = true;
    };
    upd(cyanRef, cyanPos); upd(orangeRef, orangePos); upd(whiteRef, whitePos);
  });

  const makeGeo = () => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(MAX * 3), 3));
    return g;
  };

  return (
    <>
      <points ref={cyanRef}   geometry={React.useMemo(makeGeo, [])}>
        <pointsMaterial color="#00d4ff" size={0.07} sizeAttenuation transparent opacity={0.9} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>
      <points ref={orangeRef} geometry={React.useMemo(makeGeo, [])}>
        <pointsMaterial color="#ff9922" size={0.09} sizeAttenuation transparent opacity={0.85} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>
      <points ref={whiteRef}  geometry={React.useMemo(makeGeo, [])}>
        <pointsMaterial color="#ffffff" size={0.05} sizeAttenuation transparent opacity={0.95} blending={THREE.AdditiveBlending} depthWrite={false} />
      </points>
    </>
  );
}

/* ====================================================================
   AMBIENT SPARKS — pluie continue idle
==================================================================== */

function AmbientSparks() {
  const ref = React.useRef<THREE.Points>(null!);
  const COUNT = 90;
  const joints = [
    [-3.2, 2.4, 0], [-5.4, -2.4, 0], [-1.0, -2.4, 0],
    [-4.8,  0.0, 0], [-1.6,  0.0, 0],
    [ 0.6,  2.4, 0], [ 5.0,  2.4, 0],
    [ 0.6, -2.4, 0], [ 5.0, -2.4, 0],
  ] as [number, number, number][];

  function rndJ(): [number, number, number] {
    const j = joints[Math.floor(Math.random() * joints.length)];
    return [j[0]+(Math.random()-0.5)*0.4, j[1], j[2]+(Math.random()-0.5)*0.3];
  }

  const pos = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) { const [x,y,z] = rndJ(); a[i*3]=x; a[i*3+1]=y; a[i*3+2]=z; }
    return a;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const vel = React.useMemo(() => {
    const a = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) { a[i*3]=(Math.random()-0.5)*0.05; a[i*3+1]=Math.random()*0.07+0.02; a[i*3+2]=(Math.random()-0.5)*0.04; }
    return a;
  }, []);
  const live = React.useRef(pos.slice());

  useFrame((state) => {
    if (state.clock.elapsedTime < T.WELD_END || !ref.current) return;
    const p = live.current;
    for (let i = 0; i < COUNT; i++) {
      p[i*3] += vel[i*3]; p[i*3+1] += vel[i*3+1]; p[i*3+2] += vel[i*3+2];
      vel[i*3+1] -= 0.0018;
      if (p[i*3+1] < -3.0) {
        const [x,y,z] = rndJ(); p[i*3]=x; p[i*3+1]=y; p[i*3+2]=z;
        vel[i*3]=(Math.random()-0.5)*0.05; vel[i*3+1]=Math.random()*0.07+0.02; vel[i*3+2]=(Math.random()-0.5)*0.04;
      }
    }
    const a = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    a.array.set(p); a.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[pos, 3]} /></bufferGeometry>
      <pointsMaterial color="#00d4ff" size={0.05} transparent opacity={0.7} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* ====================================================================
   DECORS
==================================================================== */

function SteelFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.88, 0]} receiveShadow>
      <planeGeometry args={[34, 34]} />
      <MeshReflectorMaterial
        blur={[512, 128]} resolution={512} mirror={0.8}
        roughness={0.38} depthScale={1.2} minDepthThreshold={0.4}
        maxDepthThreshold={1.4} color="#030810" metalness={0.7}
      />
    </mesh>
  );
}

function GridLine() {
  const ref = React.useRef<THREE.GridHelper>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.LineBasicMaterial;
    const target = state.clock.elapsedTime > 1.0 ? 0.09 : 0;
    mat.opacity += (target - mat.opacity) * 0.03;
  });
  return (
    <gridHelper ref={ref} args={[30, 30, "#00d4ff", "#001a33"]} position={[0, -2.87, 0]}>
      <lineBasicMaterial attach="material" transparent opacity={0} depthWrite={false} />
    </gridHelper>
  );
}

function ScanLine() {
  const ref = React.useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const active = t > T.FLY_START && t < T.WELD_END;
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    if (!active) { mat.opacity = 0; return; }
    const cycle = ((t - T.FLY_START) * 0.45) % 1;
    ref.current.position.y = 3.4 - cycle * 7.8;
    mat.opacity = Math.sin(cycle * Math.PI) * 0.20;
  });
  return (
    <mesh ref={ref} position={[0, 3, 0.8]}>
      <planeGeometry args={[12, 0.05]} />
      <meshBasicMaterial color="#00d4ff" transparent opacity={0} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.DoubleSide} />
    </mesh>
  );
}

/* ====================================================================
   WELD ARC
==================================================================== */

const WELD_JOINTS: THREE.Vector3[] = [
  new THREE.Vector3(-3.2,  2.4, 0),
  new THREE.Vector3(-5.4, -2.4, 0),
  new THREE.Vector3(-3.2,  2.4, 0),
  new THREE.Vector3(-1.0, -2.4, 0),
  new THREE.Vector3(-4.8,  0.0, 0),
  new THREE.Vector3(-1.6,  0.0, 0),
  new THREE.Vector3( 0.6,  2.4, 0),
  new THREE.Vector3( 5.0,  2.4, 0),
  new THREE.Vector3( 0.6, -2.4, 0),
  new THREE.Vector3( 5.0, -2.4, 0),
];

function WeldArc({ joints, onSeamComplete, onBurst }: {
  joints: THREE.Vector3[];
  onSeamComplete: (idx: number) => void;
  onBurst: (pos: THREE.Vector3) => void;
}) {
  const sphereRef = React.useRef<THREE.Mesh>(null!);
  const lightRef  = React.useRef<THREE.PointLight>(null!);
  const matRef    = React.useRef<THREE.MeshStandardMaterial>(null!);
  const segIdx    = React.useRef(0);
  const segProg   = React.useRef(0);
  const done      = React.useRef(false);
  const lastBurst = React.useRef(-1);
  const SEG_SPEED = 0.38;

  useFrame((state, delta) => {
    if (!sphereRef.current || !lightRef.current || !matRef.current) return;
    const t = state.clock.elapsedTime;
    const active = t >= T.WELD_START && t < T.WELD_END;
    if (!active || done.current) { matRef.current.opacity = 0; lightRef.current.intensity = 0; return; }
    const i = segIdx.current;
    if (i >= joints.length - 1) { done.current = true; return; }
    const A = joints[i];
    const B = joints[i + 1];
    const segLen = A.distanceTo(B);
    segProg.current += (delta * SEG_SPEED) / segLen;
    if (lastBurst.current !== i) { lastBurst.current = i; onBurst(A.clone()); }
    if (segProg.current >= 1) { onSeamComplete(i); onBurst(B.clone()); segIdx.current++; segProg.current = 0; return; }
    const pos = A.clone().lerp(B, segProg.current);
    sphereRef.current.position.copy(pos);
    lightRef.current.position.copy(pos);
    const flicker = 1 + Math.sin(t * 60) * 0.4 + Math.sin(t * 97) * 0.2;
    lightRef.current.intensity = 20 * flicker;
    matRef.current.opacity = 0.95;
    matRef.current.emissiveIntensity = 7 * flicker;
  });

  return (
    <>
      <mesh ref={sphereRef} position={joints[0]}>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshStandardMaterial ref={matRef} color="#ffffff" emissive="#00d4ff" emissiveIntensity={7} transparent opacity={0} />
      </mesh>
      <pointLight ref={lightRef} color="#00d4ff" intensity={0} distance={11} decay={1.4} />
    </>
  );
}

/* ====================================================================
   FORGE ATMOSPHERE
==================================================================== */

function ForgeAtmosphere() {
  const ref = React.useRef<THREE.PointLight>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const active = t > T.FORGE_START && t < T.WELD_END;
    const target = active ? (3.5 + Math.sin(t * 8) * 0.8 + Math.sin(t * 17) * 0.4) : 0;
    ref.current.intensity += (target - ref.current.intensity) * 0.05;
  });
  return <pointLight ref={ref} position={[0, -8, 2]} color="#ff5500" intensity={0} distance={22} decay={1.2} />;
}

/* ====================================================================
   CAMERA DIRECTOR
==================================================================== */

function CameraDirector() {
  const { camera } = useThree();
  const mouse = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const h = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => window.removeEventListener("mousemove", h);
  }, []);

  type KF = [number, number, number, number, number];
  const keyframes: KF[] = [
    [0.0,          0,   0,   5.5, 62],
    [T.FLY_START,  2.5, 0.5, 8.5, 56],
    [T.FLY_END,    1.5, 0.5, 12,  52],
    [T.REVEAL_END, 0,   0.5, 17,  50],
  ];

  function getKF(t: number): { pos: THREE.Vector3; fov: number } {
    let a = keyframes[0];
    let b = keyframes[0];
    for (let i = 0; i < keyframes.length - 1; i++) {
      if (t >= keyframes[i][0] && t <= keyframes[i+1][0]) { a = keyframes[i]; b = keyframes[i+1]; break; }
    }
    if (t > keyframes[keyframes.length-1][0]) { a = b = keyframes[keyframes.length-1]; }
    const dur  = b[0] - a[0];
    const prog = dur > 0 ? easeInOutCubic(Math.min(1, (t - a[0]) / dur)) : 1;
    return {
      pos: new THREE.Vector3(a[1]+(b[1]-a[1])*prog, a[2]+(b[2]-a[2])*prog, a[3]+(b[3]-a[3])*prog),
      fov: a[4] + (b[4]-a[4]) * prog,
    };
  }

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const { pos, fov } = getKF(t);
    const cam = camera as THREE.PerspectiveCamera;

    if (t > T.REVEAL_END) {
      const tx = pos.x + mouse.current.x * 1.6 + Math.sin(t * 0.10) * 0.4;
      const ty = pos.y + mouse.current.y * 0.8 + Math.sin(t * 0.07) * 0.2;
      const tz = pos.z + Math.sin(t * 0.05) * 0.5;
      camera.position.x += (tx - camera.position.x) * Math.min(1, delta * 2.2);
      camera.position.y += (ty - camera.position.y) * Math.min(1, delta * 2.2);
      camera.position.z += (tz - camera.position.z) * Math.min(1, delta * 1.5);
    } else {
      camera.position.x += (pos.x - camera.position.x) * Math.min(1, delta * 3.5);
      camera.position.y += (pos.y - camera.position.y) * Math.min(1, delta * 3.5);
      camera.position.z += (pos.z - camera.position.z) * Math.min(1, delta * 3.5);
    }

    cam.fov += (fov - cam.fov) * Math.min(1, delta * 3);
    cam.updateProjectionMatrix();
    camera.lookAt(0, 0.2, 0);
  });

  return null;
}

/* ====================================================================
   SCENE PRINCIPALE
==================================================================== */

const FLY_ORIGINS: THREE.Vector3[] = [
  new THREE.Vector3(-18,  8, -12),
  new THREE.Vector3( 18,  8, -10),
  new THREE.Vector3(-20,  0,   8),
  new THREE.Vector3(  0, 18,  -8),
  new THREE.Vector3( 18, -6,  12),
  new THREE.Vector3( -6,-18, -10),
];

const BEAM_DEFS = [
  // A — diag gauche
  { start: [-5.4,-2.4,0], end: [-3.2, 2.4,0], fi: 0, color:"#8aaabf", emissive:"#005588", ei:0.28, delay:0.0,  dur:1.1 },
  // A — diag droite
  { start: [-1.0,-2.4,0], end: [-3.2, 2.4,0], fi: 1, color:"#8aaabf", emissive:"#005588", ei:0.28, delay:0.35, dur:1.0 },
  // A — traverse
  { start: [-4.8, 0.0,0], end: [-1.6, 0.0,0], fi: 2, color:"#9bbccf", emissive:"#0066aa", ei:0.25, delay:0.65, dur:0.95 },
  // Z — haut
  { start: [ 0.6, 2.4,0], end: [ 5.0, 2.4,0], fi: 3, color:"#8aaabf", emissive:"#005588", ei:0.28, delay:1.0,  dur:1.0 },
  // Z — diagonale
  { start: [ 5.0, 2.4,0], end: [ 0.6,-2.4,0], fi: 4, color:"#9bbccf", emissive:"#0066aa", ei:0.25, delay:1.3,  dur:1.05 },
  // Z — bas
  { start: [ 0.6,-2.4,0], end: [ 5.0,-2.4,0], fi: 5, color:"#8aaabf", emissive:"#005588", ei:0.28, delay:1.6,  dur:0.95 },
] as const;

function AZScene() {
  const [seamsVisible, setSeamsVisible] = React.useState<boolean[]>(
    new Array(WELD_JOINTS.length - 1).fill(false),
  );
  const { particles, emit } = useSparkSystem(700);

  const impactCenters = [
    [-3.2, 2.4,0], [-3.2, 2.4,0], [-3.2, 0.0,0],
    [2.8,  2.4,0], [2.8,  0.0,0], [2.8, -2.4,0],
  ] as [number,number,number][];

  const handleLanded = React.useCallback((i: number) => {
    const c = impactCenters[i] ?? [0,0,0];
    emit(new THREE.Vector3(c[0],c[1],c[2]), 240, "impact");
  }, [emit]);

  const handleSeamComplete = React.useCallback((idx: number) => {
    setSeamsVisible(prev => { const n=[...prev]; n[idx]=true; return n; });
  }, []);

  const handleBurst = React.useCallback((pos: THREE.Vector3) => {
    emit(pos, 170, "weld");
  }, [emit]);

  const groupRef = React.useRef<THREE.Group>(null!);
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    if (t > T.REVEAL_END) {
      groupRef.current.rotation.y = Math.sin(t * 0.10) * 0.16;
      groupRef.current.rotation.x = Math.sin(t * 0.07) * 0.03;
    }
  });

  const beams = React.useMemo(() => BEAM_DEFS.map((d, i) => ({
    startWorld: new THREE.Vector3(d.start[0], d.start[1], d.start[2]),
    endWorld:   new THREE.Vector3(d.end[0],   d.end[1],   d.end[2]),
    flyFrom:    FLY_ORIGINS[d.fi],
    color: d.color, emissive: d.emissive, emissiveIntensity: d.ei,
    flyDelay: d.delay, flyDuration: d.dur,
    idx: i,
  })), []);

  return (
    <group ref={groupRef}>
      {beams.map((b) => (
        <IPNBeam key={b.idx} {...b} onLanded={() => handleLanded(b.idx)} />
      ))}
      {WELD_JOINTS.slice(0, -1).map((a, i) => (
        <WeldSeam key={i} pointA={a} pointB={WELD_JOINTS[i + 1]} visible={seamsVisible[i]} />
      ))}
      <WeldArc joints={WELD_JOINTS} onSeamComplete={handleSeamComplete} onBurst={handleBurst} />
      <SparkRenderer particles={particles} />
      <AmbientSparks />
    </group>
  );
}

/* ====================================================================
   ROOT — Canvas + PostProcessing
==================================================================== */

export default function SteelScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 62, near: 0.1, far: 200 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.35,
        }}
        dpr={[1, 1.5]}
        shadows={false}
      >
        <ambientLight intensity={0.18} color="#0d1f3a" />
        <directionalLight position={[8, 12, 6]}  intensity={3.0} color="#ffffff" />
        <directionalLight position={[-6,-4,-8]}   intensity={0.5} color="#1a2a44" />
        <directionalLight position={[0, -8,  4]}  intensity={0.3} color="#002244" />
        <ForgeAtmosphere />
        <CameraDirector />
        <AZScene />
        <SteelFloor />
        <GridLine />
        <ScanLine />
        <EffectComposer>
          <Bloom intensity={2.2} luminanceThreshold={0.28} luminanceSmoothing={0.88} mipmapBlur />
          <Vignette offset={0.35} darkness={0.75} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
