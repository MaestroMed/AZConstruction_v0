"use client";

import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ─── Easing ─── */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

/* ─── Single steel beam ─── */
interface BeamProps {
  startPos: [number, number, number];
  endPos: [number, number, number];
  dims: [number, number, number]; // length, height, depth
  rotation: [number, number, number];
  color: string;
  delay: number; // seconds
  duration: number; // seconds
}

function Beam({ startPos, endPos, dims, rotation, color, delay, duration }: BeamProps) {
  const meshRef = React.useRef<THREE.Mesh>(null!);
  const start = React.useRef(new THREE.Vector3(...startPos));
  const end = React.useRef(new THREE.Vector3(...endPos));
  const clock = React.useRef(0);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    clock.current += delta;
    const elapsed = Math.max(0, clock.current - delay);
    const t = Math.min(1, elapsed / duration);
    const eased = easeOutCubic(t);
    meshRef.current.position.lerpVectors(start.current, end.current, eased);
  });

  return (
    <mesh ref={meshRef} rotation={rotation} position={startPos}>
      <boxGeometry args={dims} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.25}
      />
    </mesh>
  );
}

/* ─── Slowly rotating structure group ─── */
function StructureGroup() {
  const groupRef = React.useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.3;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
  });

  const beams: BeamProps[] = [
    // ── Garde-corps structure — montants verticaux ──
    { startPos: [-8, -4, 0], endPos: [-3, 0, 0], dims: [0.18, 4.5, 0.18], rotation: [0, 0, 0], color: "#8899bb", delay: 0.0, duration: 1.2 },
    { startPos: [8, -4, 0], endPos: [3, 0, 0], dims: [0.18, 4.5, 0.18], rotation: [0, 0, 0], color: "#8899bb", delay: 0.15, duration: 1.2 },
    { startPos: [0, -8, 0], endPos: [0, 0, 0], dims: [0.18, 4.5, 0.18], rotation: [0, 0, 0], color: "#aabbcc", delay: 0.25, duration: 1.1 },
    // ── Main courante horizontale ──
    { startPos: [-9, 5, 0], endPos: [0, 2, 0], dims: [6.5, 0.14, 0.14], rotation: [0, 0, 0], color: "#99aacc", delay: 0.4, duration: 1.0 },
    { startPos: [9, 5, 0], endPos: [0, 2, 0], dims: [6.5, 0.14, 0.14], rotation: [0, 0, 0], color: "#99aacc", delay: 0.45, duration: 1.0 },
    // ── Traverse basse ──
    { startPos: [-9, -5, 0], endPos: [0, -2, 0], dims: [6.5, 0.14, 0.14], rotation: [0, 0, 0], color: "#778899", delay: 0.55, duration: 0.9 },
    { startPos: [9, -5, 0], endPos: [0, -2, 0], dims: [6.5, 0.14, 0.14], rotation: [0, 0, 0], color: "#778899", delay: 0.6, duration: 0.9 },
    // ── Câbles / intermédiaires verticaux ──
    { startPos: [-6, 6, 0], endPos: [-2, 0, 0], dims: [0.08, 4.0, 0.08], rotation: [0, 0, 0], color: "#667788", delay: 0.7, duration: 0.8 },
    { startPos: [6, 6, 0], endPos: [2, 0, 0], dims: [0.08, 4.0, 0.08], rotation: [0, 0, 0], color: "#667788", delay: 0.75, duration: 0.8 },
    { startPos: [0, -7, -1], endPos: [-1, 0, -0.5], dims: [0.08, 4.0, 0.08], rotation: [0, 0, 0], color: "#667788", delay: 0.8, duration: 0.8 },
    { startPos: [0, -7, 1], endPos: [1, 0, 0.5], dims: [0.08, 4.0, 0.08], rotation: [0, 0, 0], color: "#667788", delay: 0.85, duration: 0.8 },
    // ── Diagonales structurelles ──
    { startPos: [-7, -7, 2], endPos: [-1.5, 0.5, 0.5], dims: [3.5, 0.12, 0.12], rotation: [0, 0, Math.PI / 5], color: "#556677", delay: 0.9, duration: 0.9 },
    { startPos: [7, -7, 2], endPos: [1.5, 0.5, 0.5], dims: [3.5, 0.12, 0.12], rotation: [0, 0, -Math.PI / 5], color: "#556677", delay: 0.95, duration: 0.9 },
    // ── Profondeur (profilés de derrière) ──
    { startPos: [0, 6, -8], endPos: [0, 0, -1.5], dims: [5.5, 0.12, 0.12], rotation: [0, 0, 0], color: "#9aabbc", delay: 1.0, duration: 0.8 },
    { startPos: [0, -6, -8], endPos: [0, 0, -1.5], dims: [5.5, 0.12, 0.12], rotation: [0, 0, 0], color: "#7788aa", delay: 1.05, duration: 0.8 },
  ];

  return (
    <group ref={groupRef}>
      {beams.map((b, i) => <Beam key={i} {...b} />)}
    </group>
  );
}

/* ─── Subtle sparks — only near assembly points ─── */
function Sparks() {
  const pointsRef = React.useRef<THREE.Points>(null!);
  const count = 120;

  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 5;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return arr;
  }, []);

  const velocities = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 0.04;
      arr[i * 3 + 1] = Math.random() * 0.06;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.03;
    }
    return arr;
  }, []);

  const posRef = React.useRef(positions.slice());

  useFrame(() => {
    if (!pointsRef.current) return;
    const pos = posRef.current;
    const geo = pointsRef.current.geometry;
    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3];
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      pos[i * 3 + 2] += velocities[i * 3 + 2];
      velocities[i * 3 + 1] -= 0.002;
      if (pos[i * 3 + 1] < -3.5) {
        const cx = (Math.random() - 0.5) * 5;
        const cy = (Math.random() - 0.5) * 4;
        pos[i * 3] = cx;
        pos[i * 3 + 1] = cy;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
        velocities[i * 3 + 1] = Math.random() * 0.05 + 0.02;
      }
    }
    const attr = geo.getAttribute("position") as THREE.BufferAttribute;
    attr.array.set(pos);
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#00d4ff"
        size={0.04}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ─── Cyan orbiting light (welding simulation) ─── */
function WeldingLight() {
  const lightRef = React.useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    if (!lightRef.current) return;
    const t = state.clock.elapsedTime;
    lightRef.current.position.x = Math.sin(t * 0.7) * 5;
    lightRef.current.position.y = Math.cos(t * 0.5) * 3;
    lightRef.current.position.z = Math.sin(t * 0.3) * 4 + 2;
    lightRef.current.intensity = 4 + Math.sin(t * 15) * 1.5;
  });

  return <pointLight ref={lightRef} color="#00d4ff" intensity={4} distance={18} decay={2} />;
}

/* ─── Mouse-driven camera parallax ─── */
function CameraParallax() {
  const mouse = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const h = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5);
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", h, { passive: true });
    return () => window.removeEventListener("mousemove", h);
  }, []);

  useFrame((state) => {
    state.camera.position.x += (mouse.current.x * 1.5 - state.camera.position.x) * 0.03;
    state.camera.position.y += (mouse.current.y * 0.8 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ─── Public API ─── */
export default function SteelScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 11], fov: 52 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.12} color="#334466" />
        <directionalLight position={[6, 8, 4]} intensity={2} color="#ffffff" />
        <directionalLight position={[-4, -2, -6]} intensity={0.5} color="#1a2a44" />
        <WeldingLight />
        <CameraParallax />
        <StructureGroup />
        <Sparks />
      </Canvas>
    </div>
  );
}
