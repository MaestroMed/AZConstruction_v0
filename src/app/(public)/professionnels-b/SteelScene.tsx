"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ── Beam component — one steel IPN bar ── */
interface BeamProps {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  targetPosition: [number, number, number];
  progress: number;
  delay: number;
  color?: string;
}

function Beam({ position, rotation, scale, targetPosition, progress, delay, color = "#8899aa" }: BeamProps) {
  const meshRef = React.useRef<THREE.Mesh>(null!);
  const startPos = React.useRef(new THREE.Vector3(...position));
  const targetPos = React.useRef(new THREE.Vector3(...targetPosition));
  const currentPos = React.useRef(new THREE.Vector3(...position));

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = Math.max(0, Math.min(1, (progress - delay) / 0.6));
    const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    currentPos.current.lerpVectors(startPos.current, targetPos.current, eased);
    meshRef.current.position.copy(currentPos.current);
    // Slow idle rotation when assembled
    if (t > 0.95) {
      meshRef.current.rotation.y += 0.001 * Math.sin(state.clock.elapsedTime * 0.3 + delay * 5);
    }
  });

  return (
    <mesh ref={meshRef} rotation={rotation} scale={scale} castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        metalness={0.95}
        roughness={0.15}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

/* ── Spark particle system ── */
function Sparks({ active }: { active: boolean }) {
  const pointsRef = React.useRef<THREE.Points>(null!);
  const count = 300;

  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return arr;
  }, []);

  const velocities = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 0.08;
      arr[i * 3 + 1] = Math.random() * 0.12 + 0.02;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.06;
    }
    return arr;
  }, []);

  const posRef = React.useRef(positions.slice());

  useFrame(() => {
    if (!pointsRef.current || !active) return;
    const pos = posRef.current;
    const geo = pointsRef.current.geometry;
    for (let i = 0; i < count; i++) {
      pos[i * 3] += velocities[i * 3];
      pos[i * 3 + 1] += velocities[i * 3 + 1];
      pos[i * 3 + 2] += velocities[i * 3 + 2];
      velocities[i * 3 + 1] -= 0.003; // gravity
      // Reset when fallen
      if (pos[i * 3 + 1] < -4) {
        pos[i * 3] = (Math.random() - 0.5) * 6;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 2;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 3;
        velocities[i * 3 + 1] = Math.random() * 0.12 + 0.04;
      }
    }
    const attr = geo.getAttribute("position") as THREE.BufferAttribute;
    attr.array.set(pos);
    attr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00d4ff"
        size={0.06}
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

/* ── Cyan welding light ── */
function WeldingLight({ progress }: { progress: number }) {
  const lightRef = React.useRef<THREE.PointLight>(null!);

  useFrame((state) => {
    if (!lightRef.current) return;
    const t = state.clock.elapsedTime;
    lightRef.current.position.x = Math.sin(t * 0.8) * 4;
    lightRef.current.position.y = Math.cos(t * 0.6) * 2.5;
    lightRef.current.position.z = Math.sin(t * 0.4) * 3;
    // Flicker like a welding arc
    lightRef.current.intensity = 3 + Math.sin(t * 20) * 0.8 + Math.random() * 0.4;
    lightRef.current.intensity *= progress;
  });

  return <pointLight ref={lightRef} color="#00d4ff" intensity={3} distance={20} decay={2} />;
}

/* ── Mouse rotation handler ── */
function SceneRotator({ progress }: { progress: number }) {
  const { camera } = useThree();
  const mouse = React.useRef({ x: 0, y: 0 });
  const targetRot = React.useRef({ x: 0, y: 0 });

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame(() => {
    targetRot.current.y += (mouse.current.x * 0.3 - targetRot.current.y) * 0.05;
    targetRot.current.x += (mouse.current.y * 0.15 - targetRot.current.x) * 0.05;
    camera.position.x += (targetRot.current.y * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (targetRot.current.x * 0.5 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

/* ── Main scene content ── */
function Scene({ progress }: { progress: number }) {
  // 14 beams forming a structural frame / garde-corps shape
  const beamData: BeamProps[] = [
    // Horizontals top
    { position: [-6, 4, 0], rotation: [0, 0, 0], scale: [4, 0.12, 0.12], targetPosition: [-1.5, 2, 0], progress, delay: 0 },
    { position: [6, 4, 0], rotation: [0, 0, 0], scale: [4, 0.12, 0.12], targetPosition: [1.5, 2, 0], progress, delay: 0.05 },
    { position: [0, 6, -3], rotation: [0, 0, 0], scale: [6, 0.12, 0.12], targetPosition: [0, 2, 0], progress, delay: 0.1, color: "#99aacc" },
    // Verticals
    { position: [-5, -5, 0], rotation: [0, 0, Math.PI / 2], scale: [4, 0.12, 0.12], targetPosition: [-3, 0, 0], progress, delay: 0.15 },
    { position: [5, -5, 0], rotation: [0, 0, Math.PI / 2], scale: [4, 0.12, 0.12], targetPosition: [3, 0, 0], progress, delay: 0.2 },
    { position: [0, -6, 0], rotation: [0, 0, Math.PI / 2], scale: [4, 0.12, 0.12], targetPosition: [0, 0, 0], progress, delay: 0.22 },
    // Cross members
    { position: [-7, 0, 2], rotation: [0, Math.PI / 4, 0], scale: [2.5, 0.1, 0.1], targetPosition: [-1.5, 0, 0.5], progress, delay: 0.3, color: "#7788bb" },
    { position: [7, 0, 2], rotation: [0, -Math.PI / 4, 0], scale: [2.5, 0.1, 0.1], targetPosition: [1.5, 0, 0.5], progress, delay: 0.32, color: "#7788bb" },
    // Depth rails
    { position: [0, 3, -7], rotation: [0, Math.PI / 2, 0], scale: [3.5, 0.09, 0.09], targetPosition: [-2.5, 1.5, -1], progress, delay: 0.38 },
    { position: [0, -3, -7], rotation: [0, Math.PI / 2, 0], scale: [3.5, 0.09, 0.09], targetPosition: [2.5, -1, -1], progress, delay: 0.4 },
    // Diagonal accents
    { position: [-4, 5, -2], rotation: [0, 0, Math.PI / 6], scale: [3, 0.08, 0.08], targetPosition: [-2, 1, -0.5], progress, delay: 0.48, color: "#aabbdd" },
    { position: [4, 5, -2], rotation: [0, 0, -Math.PI / 6], scale: [3, 0.08, 0.08], targetPosition: [2, 1, -0.5], progress, delay: 0.5, color: "#aabbdd" },
    // Fine details
    { position: [0, -8, 3], rotation: [Math.PI / 3, 0, 0], scale: [5, 0.07, 0.07], targetPosition: [0, -1.5, 0.8], progress, delay: 0.55, color: "#667799" },
    { position: [-3, 6, 4], rotation: [0, 0, Math.PI / 3], scale: [2, 0.07, 0.07], targetPosition: [-1, 1.8, 0.3], progress, delay: 0.6, color: "#99aacc" },
  ];

  return (
    <>
      <ambientLight intensity={0.08} />
      <directionalLight position={[8, 10, 5]} intensity={1.8} color="#ffffff" castShadow />
      <directionalLight position={[-5, -3, -8]} intensity={0.4} color="#334466" />
      <WeldingLight progress={progress} />
      <SceneRotator progress={progress} />
      {beamData.map((b, i) => <Beam key={i} {...b} />)}
      <Sparks active={progress > 0.2} />
    </>
  );
}

/* ── Public API ── */
interface SteelSceneProps {
  progress?: number;
  className?: string;
}

export default function SteelScene({ progress = 0, className = "" }: SteelSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        shadows={false}
        dpr={[1, 1.5]}
      >
        <Scene progress={progress} />
      </Canvas>
    </div>
  );
}
