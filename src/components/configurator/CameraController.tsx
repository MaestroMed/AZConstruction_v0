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
  const isTransitioningRef = React.useRef(false);
  const animationFrameRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    // Attendre que les controls soient montés
    if (!controlsRef.current) return;
    if (isTransitioningRef.current) return;

    const targetConfig = CAMERA_POSITIONS[targetPosition];
    if (!targetConfig) return;

    // Capturer la référence actuelle
    const controls = controlsRef.current;
    if (!controls || !controls.target) return;

    isTransitioningRef.current = true;
    setIsTransitioning(true);

    const startPosition = camera.position.clone();
    const endPosition = new THREE.Vector3(...targetConfig.position);
    const startTarget = controls.target.clone();
    const endTarget = new THREE.Vector3(...targetConfig.target);

    const duration = 1000; // ms
    const startTime = Date.now();

    const animate = () => {
      // Vérifier que les controls sont toujours valides
      if (!controlsRef.current || !controlsRef.current.target) {
        isTransitioningRef.current = false;
        setIsTransitioning(false);
        return;
      }

      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out cubic)
      const eased = 1 - Math.pow(1 - progress, 3);

      camera.position.lerpVectors(startPosition, endPosition, eased);
      controlsRef.current.target.lerpVectors(startTarget, endTarget, eased);
      controlsRef.current.update();

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        isTransitioningRef.current = false;
        setIsTransitioning(false);
      }
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      isTransitioningRef.current = false;
    };
  }, [targetPosition, camera]);

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






