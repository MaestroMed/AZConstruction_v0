"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ruler, Palette, Settings2, Eye, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { ExportConfig } from "@/types/configurator";

interface QuoteRecapProps {
  configuration: ExportConfig;
  screenshotDataUrl?: string | null;
  showPrice?: boolean;
  compact?: boolean;
  className?: string;
}

export function QuoteRecap({
  configuration,
  screenshotDataUrl,
  showPrice = true,
  compact = false,
  className,
}: QuoteRecapProps) {
  const {
    family,
    style,
    dimensions,
    material,
    color,
    colorName,
    options,
    price,
  } = configuration;

  return (
    <Card variant="elevated" className={cn("overflow-hidden", className)}>
      <CardContent className={cn("p-0", compact && "p-0")}>
        <div className={cn("grid", !compact && "md:grid-cols-2")}>
          {/* Image / Screenshot */}
          <div
            className={cn(
              "relative bg-gradient-to-br from-gray-100 to-gray-200",
              compact ? "h-48" : "h-64 md:h-full min-h-[250px]"
            )}
          >
            {screenshotDataUrl ? (
              <Image
                src={screenshotDataUrl}
                alt={`Configuration ${family}`}
                fill
                className="object-contain p-4"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Package className="w-16 h-16 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Aperçu non disponible</p>
                </div>
              </div>
            )}
          </div>

          {/* Détails */}
          <div className={cn("p-6", compact && "p-4")}>
            <h3 className={cn(
              "font-bold text-navy-dark mb-4",
              compact ? "text-lg" : "text-xl"
            )}>
              Votre {family}
            </h3>

            <div className="space-y-3">
              {/* Dimensions */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-corporate/10 flex items-center justify-center flex-shrink-0">
                  <Ruler className="w-4 h-4 text-blue-corporate" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Dimensions</p>
                  <p className="font-medium text-navy-dark">
                    {dimensions.width} × {dimensions.height} cm
                  </p>
                </div>
              </motion.div>

              {/* Style */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-corporate/10 flex items-center justify-center flex-shrink-0">
                  <Palette className="w-4 h-4 text-blue-corporate" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Style</p>
                  <p className="font-medium text-navy-dark">{style}</p>
                </div>
              </motion.div>

              {/* Matériau */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-corporate/10 flex items-center justify-center flex-shrink-0">
                  <Settings2 className="w-4 h-4 text-blue-corporate" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Matériau</p>
                  <p className="font-medium text-navy-dark">{material}</p>
                </div>
              </motion.div>

              {/* Couleur */}
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-corporate/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-4 h-4 text-blue-corporate" />
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-sm text-gray-500">Couleur</p>
                    <p className="font-medium text-navy-dark">{colorName}</p>
                  </div>
                  <div
                    className="w-6 h-6 rounded-md border border-gray-200 ml-2"
                    style={{ backgroundColor: color.startsWith('#') ? color : '#' + color }}
                  />
                </div>
              </motion.div>

              {/* Options */}
              {options.length > 0 && (
                <motion.div
                  className="pt-3 border-t border-gray-100"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-sm text-gray-500 mb-2">Options</p>
                  <div className="flex flex-wrap gap-2">
                    {options.map((option, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-cyan-glow/10 text-cyan-700 rounded-md text-xs font-medium"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Prix */}
            {showPrice && (
              <motion.div
                className="mt-6 p-4 bg-navy-dark rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Prix estimé TTC</span>
                  <span className="text-2xl font-bold text-cyan-glow">
                    {price.toLocaleString("fr-FR")} €
                  </span>
                </div>
                <p className="text-xs text-white/50 mt-1">Hors pose et livraison</p>
              </motion.div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default QuoteRecap;

