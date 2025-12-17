"use client";

import * as React from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export type CameraPosition = 'default' | 'front' | 'side' | 'top';

interface CameraControllerProps {
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  enableZoom?: boolean;
  enablePan?: boolean;
  minDistance?: number;
  maxDistance?: number;
  minPolarAngle?: number;
  maxPolarAngle?: number;
  targetPosition?: CameraPosition;
  onPositionChange?: (position: CameraPosition) => void;
}

// Positions de caméra prédéfinies
const CAMERA_POSITIONS: Record<CameraPosition, { position: [number, number, number]; target: [number, number, number] }> = {
  default: { position: [5, 3, 5], target: [0, 0.5, 0] },
  front: { position: [0, 1.5, 6], target: [0, 0.5, 0] },
  side: { position: [6, 1.5, 0], target: [0, 0.5, 0] },
  top: { position: [0, 8, 0.1], target: [0, 0, 0] },
};

/**
 * Contrôleur de caméra avec OrbitControls et positions prédéfinies.
 */
export function CameraController({
  autoRotate = false,
  autoRotateSpeed = 1,
  enableZoom = true,
  enablePan = false,
  minDistance = 2,
  maxDistance = 15,
  minPolarAngle = 0.1,
  maxPolarAngle = Math.PI / 2 - 0.1,
  targetPosition = 'default',
}: CameraControllerProps) {
  const controlsRef = React.useRef<any>(null);
  const { camera } = useThree();
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Effet pour animer vers une nouvelle position
  React.useEffect(() => {
    if (!controlsRef.current || isTransitioning) return;

    const targetConfig = CAMERA_POSITIONS[targetPosition];
    if (!targetConfig) return;

    setIsTransitioning(true);

    const startPosition = camera.position.clone();
    const endPosition = new THREE.Vector3(...targetConfig.position);
    const startTarget = controlsRef.current.target.clone();
    const endTarget = new THREE.Vector3(...targetConfig.target);

    let progress = 0;
    const duration = 1000; // ms
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);

      camera.position.lerpVectors(startPosition, endPosition, eased);
      controlsRef.current.target.lerpVectors(startTarget, endTarget, eased);
      controlsRef.current.update();

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsTransitioning(false);
      }
    };

    animate();
  }, [targetPosition, camera, isTransitioning]);

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      autoRotate={autoRotate && !isTransitioning}
      autoRotateSpeed={autoRotateSpeed}
      enableZoom={enableZoom}
      enablePan={enablePan}
      minDistance={minDistance}
      maxDistance={maxDistance}
      minPolarAngle={minPolarAngle}
      maxPolarAngle={maxPolarAngle}
      enableDamping
      dampingFactor={0.05}
      target={[0, 0.5, 0]}
    />
  );
}

export default CameraController;
