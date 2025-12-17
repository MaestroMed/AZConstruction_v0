// Type declarations pour @google/model-viewer
import * as React from 'react';

interface ModelViewerJSX {
  // Source
  src?: string;
  'ios-src'?: string;
  alt?: string;
  poster?: string;

  // AR
  ar?: boolean;
  'ar-modes'?: string;
  'ar-scale'?: 'auto' | 'fixed';
  'ar-placement'?: 'floor' | 'wall';
  'xr-environment'?: boolean;

  // Camera Controls
  'camera-controls'?: boolean;
  'disable-zoom'?: boolean;
  'disable-pan'?: boolean;
  'disable-tap'?: boolean;
  'touch-action'?: string;
  'interpolation-decay'?: number;
  'orbit-sensitivity'?: number;

  // Camera Position
  'camera-orbit'?: string;
  'camera-target'?: string;
  'field-of-view'?: string;
  'max-camera-orbit'?: string;
  'min-camera-orbit'?: string;
  'max-field-of-view'?: string;
  'min-field-of-view'?: string;

  // Animation
  'auto-rotate'?: boolean;
  'auto-rotate-delay'?: number;
  'rotation-per-second'?: string;
  'animation-name'?: string;
  'animation-crossfade-duration'?: number;
  autoplay?: boolean;

  // Lighting & Environment
  'environment-image'?: string;
  exposure?: string | number;
  'shadow-intensity'?: string | number;
  'shadow-softness'?: string | number;
  'skybox-image'?: string;
  'skybox-height'?: string;

  // Loading
  loading?: 'auto' | 'lazy' | 'eager';
  reveal?: 'auto' | 'manual';
  'with-credentials'?: boolean;

  // Interaction
  'interaction-prompt'?: 'auto' | 'none' | 'when-focused';
  'interaction-prompt-style'?: string;
  'interaction-prompt-threshold'?: number;

  // Variant / Material
  'variant-name'?: string;

  // Standard HTML attributes
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;

  // Events
  onLoad?: (event: Event) => void;
  onError?: (event: ErrorEvent) => void;
  onProgress?: (event: ProgressEvent) => void;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSX;
    }
  }
}

declare module '@google/model-viewer' {
  export interface ModelViewerElement extends HTMLElement {
    src: string;
    alt: string;
    ar: boolean;
    cameraControls: boolean;
    autoRotate: boolean;
    environmentImage: string;
    exposure: number;
    shadowIntensity: number;
    shadowSoftness: number;
    
    // Methods
    activateAR(): Promise<void>;
    getCameraOrbit(): { theta: number; phi: number; radius: number };
    getCameraTarget(): { x: number; y: number; z: number };
    getFieldOfView(): number;
    jumpCameraToGoal(): void;
    resetTurntableRotation(): void;
    toDataURL(type?: string, encoderOptions?: number): string;
    
    // AR Methods
    canActivateAR: boolean;
    
    // Animation
    availableAnimations: string[];
    pause(): void;
    play(): void;
  }

  const ModelViewer: {
    new(): ModelViewerElement;
    prototype: ModelViewerElement;
  };
  
  export default ModelViewer;
}

export {};


