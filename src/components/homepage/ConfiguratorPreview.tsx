"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/Slider";
import { ColorSwatch } from "@/components/ui/ColorSwatch";

const colors = [
  { id: "anthracite", name: "Anthracite", hex: "#383E42" },
  { id: "blanc", name: "Blanc", hex: "#F6F6F6" },
  { id: "gris-souris", name: "Gris Souris", hex: "#8C8C8C" },
  { id: "noir-sable", name: "Noir Sablé", hex: "#2A2A2A" },
  { id: "bleu", name: "Bleu", hex: "#1e3a5f" },
];

export default function ConfiguratorPreview() {
  const [largeur, setLargeur] = React.useState(320);
  const [hauteur, setHauteur] = React.useState(250);
  const [profondeur, setProfondeur] = React.useState(8);
  const [selectedColor, setSelectedColor] = React.useState("anthracite");

  const currentColor = colors.find((c) => c.id === selectedColor);

  return (
    <div className="relative">
      {/* Glow effect behind the card */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-glow/20 via-blue-corporate/10 to-cyan-glow/20 rounded-3xl blur-2xl" />
      
      {/* Perspective frame effect */}
      <motion.div
        className="absolute -inset-2 rounded-2xl opacity-40"
        style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.3) 0%, transparent 50%, rgba(79,195,247,0.2) 100%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main configurator card */}
      <div className="relative bg-gray-50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Gate visualization */}
        <div className="relative h-64 bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center p-8">
          {/* Simple gate SVG representation */}
          <motion.svg
            viewBox="0 0 400 200"
            className="w-full h-full max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Gate frame */}
            <rect
              x="20"
              y="20"
              width="360"
              height="160"
              rx="4"
              fill={currentColor?.hex || "#383E42"}
              className="transition-colors duration-300"
            />
            
            {/* Horizontal lines (slats) */}
            {[40, 70, 100, 130, 160].map((y, i) => (
              <motion.rect
                key={i}
                x="30"
                y={y}
                width="340"
                height="20"
                rx="2"
                fill={currentColor?.hex || "#383E42"}
                style={{
                  filter: "brightness(0.9)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
              />
            ))}
            
            {/* Center line */}
            <line
              x1="200"
              y1="20"
              x2="200"
              y2="180"
              stroke={currentColor?.hex || "#383E42"}
              strokeWidth="4"
              style={{ filter: "brightness(1.1)" }}
            />
            
            {/* Subtle shadow */}
            <rect
              x="20"
              y="170"
              width="360"
              height="10"
              fill="rgba(0,0,0,0.1)"
              rx="2"
            />
          </motion.svg>

          {/* Dimensions labels */}
          <div className="absolute top-4 left-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
            {largeur} × {hauteur} cm
          </div>
        </div>

        {/* Controls */}
        <div className="p-6 bg-white space-y-6">
          {/* Dimension sliders */}
          <div className="space-y-4">
            <Slider
              label="Largeur"
              value={largeur}
              min={200}
              max={500}
              step={10}
              unit="cm"
              onChange={setLargeur}
            />
            <Slider
              label="Hauteur"
              value={hauteur}
              min={150}
              max={300}
              step={10}
              unit="cm"
              onChange={setHauteur}
            />
            <Slider
              label="Profondeur"
              value={profondeur}
              min={4}
              max={12}
              step={1}
              unit="cm"
              onChange={setProfondeur}
            />
          </div>

          {/* Color selection */}
          <div className="pt-2">
            <p className="text-sm text-gray-600 mb-3">Sélection couleurs</p>
            <ColorSwatch
              colors={colors}
              selectedColor={selectedColor}
              onSelectColor={setSelectedColor}
              showLabels={true}
            />
          </div>
        </div>
      </div>

      {/* Floating elements for depth effect */}
      <motion.div
        className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-glow/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-corporate/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
}







