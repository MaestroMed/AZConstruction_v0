"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Smartphone, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ARViewerProps {
  isOpen: boolean;
  onClose: () => void;
  modelSrc: string;
  iosSrc?: string;
  alt: string;
  poster?: string;
}

/**
 * Composant wrapper pour model-viewer qui gère les types.
 */
function ModelViewerComponent({
  src,
  iosSrc,
  alt,
  poster,
  children,
}: {
  src: string;
  iosSrc?: string;
  alt: string;
  poster?: string;
  children?: React.ReactNode;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    // Créer l'élément model-viewer dynamiquement
    const modelViewer = document.createElement('model-viewer');
    modelViewer.setAttribute('src', src);
    if (iosSrc) modelViewer.setAttribute('ios-src', iosSrc);
    modelViewer.setAttribute('alt', alt);
    if (poster) modelViewer.setAttribute('poster', poster);
    modelViewer.setAttribute('ar', '');
    modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
    modelViewer.setAttribute('ar-scale', 'auto');
    modelViewer.setAttribute('camera-controls', '');
    modelViewer.setAttribute('auto-rotate', '');
    modelViewer.setAttribute('shadow-intensity', '1');
    modelViewer.setAttribute('exposure', '0.8');
    modelViewer.setAttribute('environment-image', 'neutral');
    modelViewer.style.width = '100%';
    modelViewer.style.height = '100%';
    modelViewer.style.backgroundColor = '#1a1a1a';

    // Ajouter le bouton AR personnalisé
    const arButton = document.createElement('button');
    arButton.setAttribute('slot', 'ar-button');
    arButton.className = 'absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow';
    arButton.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg> Voir en réalité augmentée`;
    modelViewer.appendChild(arButton);

    containerRef.current.appendChild(modelViewer);

    return () => {
      if (containerRef.current && modelViewer.parentNode === containerRef.current) {
        containerRef.current.removeChild(modelViewer);
      }
    };
  }, [src, iosSrc, alt, poster]);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

/**
 * Viewer AR utilisant @google/model-viewer.
 * S'ouvre en mode plein écran.
 */
export function ARViewer({
  isOpen,
  onClose,
  modelSrc,
  iosSrc,
  alt,
  poster,
}: ARViewerProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Charger dynamiquement model-viewer
  React.useEffect(() => {
    if (isOpen && typeof window !== 'undefined') {
      import('@google/model-viewer').then(() => {
        setIsLoaded(true);
      });
    }
  }, [isOpen]);

  // Bloquer le scroll du body quand ouvert
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Gérer la touche Escape
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black"
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-4">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
              <div className="text-white">
                <h2 className="font-bold">Réalité Augmentée</h2>
                <p className="text-sm text-white/70">
                  Placez le produit dans votre environnement
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-white hover:bg-white/20"
                icon={<X className="w-5 h-5" />}
              >
                Fermer
              </Button>
            </div>
          </div>

          {/* Model Viewer */}
          <div className="w-full h-full">
            {isLoaded && (
              <ModelViewerComponent
                src={modelSrc}
                iosSrc={iosSrc}
                alt={alt}
                poster={poster}
              />
            )}
          </div>

          {/* Instructions */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="max-w-screen-xl mx-auto">
              <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  <span>Faites glisser pour tourner</span>
                </div>
                <div className="flex items-center gap-2">
                  <ZoomIn className="w-4 h-4" />
                  <span>Pincez pour zoomer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Appuyez sur AR pour placer</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ARViewer;


