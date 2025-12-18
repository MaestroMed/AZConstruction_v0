"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Smartphone, View, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ARButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

/**
 * Détecte si l'appareil supporte la réalité augmentée.
 */
function useARSupport() {
  const [isSupported, setIsSupported] = React.useState<boolean | null>(null);
  const [supportType, setSupportType] = React.useState<'webxr' | 'quicklook' | 'sceneviewer' | null>(null);

  React.useEffect(() => {
    const checkARSupport = async () => {
      // Vérifier WebXR (Android Chrome)
      if ('xr' in navigator) {
        try {
          const xr = (navigator as any).xr;
          if (xr) {
            const supported = await xr.isSessionSupported('immersive-ar');
            if (supported) {
              setIsSupported(true);
              setSupportType('webxr');
              return;
            }
          }
        } catch (e) {
          // WebXR non supporté
        }
      }

      // Vérifier iOS Quick Look
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        // iOS supporte Quick Look AR depuis iOS 12
        const versionMatch = navigator.userAgent.match(/OS (\d+)/);
        if (versionMatch && parseInt(versionMatch[1]) >= 12) {
          setIsSupported(true);
          setSupportType('quicklook');
          return;
        }
      }

      // Vérifier Android Scene Viewer
      const isAndroid = /Android/.test(navigator.userAgent);
      if (isAndroid) {
        // La plupart des Android modernes supportent Scene Viewer
        setIsSupported(true);
        setSupportType('sceneviewer');
        return;
      }

      // Pas de support AR détecté
      setIsSupported(false);
      setSupportType(null);
    };

    checkARSupport();
  }, []);

  return { isSupported, supportType };
}

/**
 * Bouton pour activer la vue AR.
 * Affiche un message si AR n'est pas supporté.
 */
export function ARButton({ onClick, disabled = false, className = "" }: ARButtonProps) {
  const { isSupported, supportType } = useARSupport();
  const [showTooltip, setShowTooltip] = React.useState(false);

  // Si on ne sait pas encore si AR est supporté
  if (isSupported === null) {
    return (
      <Button
        variant="outline"
        disabled
        className={`relative ${className}`}
        icon={<Smartphone className="w-4 h-4 animate-pulse" />}
        iconPosition="left"
      >
        Vérification AR...
      </Button>
    );
  }

  // Si AR n'est pas supporté
  if (!isSupported) {
    return (
      <div className="relative">
        <Button
          variant="outline"
          disabled
          className={`relative opacity-50 ${className}`}
          icon={<AlertCircle className="w-4 h-4" />}
          iconPosition="left"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          AR non disponible
        </Button>
        
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-50"
          >
            La réalité augmentée nécessite un appareil mobile compatible
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </motion.div>
        )}
      </div>
    );
  }

  // AR supporté
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        variant="outline"
        onClick={onClick}
        disabled={disabled}
        className={`relative bg-gradient-to-r from-purple-500/10 to-blue-500/10 border-purple-300 hover:border-purple-400 ${className}`}
        icon={<View className="w-4 h-4" />}
        iconPosition="left"
      >
        <span className="flex items-center gap-2">
          Voir chez moi
          <span className="px-1.5 py-0.5 text-[10px] font-bold bg-purple-500 text-white rounded uppercase">
            AR
          </span>
        </span>
      </Button>
    </motion.div>
  );
}

export default ARButton;



