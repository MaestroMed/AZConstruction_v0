"use client";

import * as React from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ClickToCallBannerProps {
  phoneNumber?: string;
  displayNumber?: string;
  message?: string;
}

export default function ClickToCallBanner({
  phoneNumber = "+33123456789",
  displayNumber = "01 23 45 67 89",
  message = "Devis gratuit - Réponse sous 24h",
}: ClickToCallBannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Détection mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Ne pas afficher sur desktop
  if (!isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 safe-area-inset-bottom"
        >
          {/* Gradient overlay pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark to-navy-dark/95 backdrop-blur-sm" />

          <div className="relative px-4 py-3">
            {/* Bouton fermer */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 p-1 text-white/60 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>

            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center justify-center gap-3 w-full"
            >
              {/* Icône animée */}
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-glow/30 rounded-full animate-ping" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-glow to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-glow/30">
                  <Phone className="w-5 h-5 text-navy-dark" />
                </div>
              </div>

              {/* Texte */}
              <div className="text-left">
                <p className="text-white font-bold text-lg tracking-wide">
                  {displayNumber}
                </p>
                <p className="text-cyan-glow text-xs font-medium">
                  {message}
                </p>
              </div>
            </a>

            {/* Barre décorative */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-glow/50 to-transparent rounded-full" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}




