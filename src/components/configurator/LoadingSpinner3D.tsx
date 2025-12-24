"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoadingSpinner3DProps {
  message?: string;
  progress?: number;
}

/**
 * Spinner de chargement affiché pendant le chargement des modèles 3D.
 */
export function LoadingSpinner3D({ 
  message = "Chargement du modèle 3D...",
  progress 
}: LoadingSpinner3DProps) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Animation de spinner */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Cercle extérieur animé */}
        <motion.div
          className="w-20 h-20 rounded-full border-4 border-cyan-glow/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-glow rounded-full" />
        </motion.div>
        
        {/* Icône centrale */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-blue-corporate animate-spin" />
        </div>
      </motion.div>
      
      {/* Message */}
      <motion.p
        className="mt-6 text-gray-600 text-sm font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </motion.p>
      
      {/* Barre de progression optionnelle */}
      {progress !== undefined && (
        <motion.div
          className="mt-4 w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-glow to-blue-corporate"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      )}
      
      {/* Animation de points */}
      <div className="mt-4 flex gap-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-blue-corporate/40 rounded-full"
            animate={{ 
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default LoadingSpinner3D;







