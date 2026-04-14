"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GardeCorpsModel } from "./GardeCorpsModel";
import {
  type GardeCorpsConfig,
  type FillType,
  type Finition,
  DEFAULT_CONFIG,
  RAL_COLORS,
  FILL_TYPE_LABELS,
  FINITION_LABELS,
  estimatePrice,
} from "./types";

export default function GardeCorpsConfigurator() {
  const [config, setConfig] = React.useState<GardeCorpsConfig>(DEFAULT_CONFIG);
  const [expandedSection, setExpandedSection] = React.useState<string>("type");

  const price = estimatePrice(config);

  const update = (partial: Partial<GardeCorpsConfig>) => {
    setConfig(prev => ({ ...prev, ...partial }));
  };

  const reset = () => setConfig(DEFAULT_CONFIG);

  const toggleSection = (key: string) => {
    setExpandedSection(prev => prev === key ? "" : key);
  };

  return (
    <div className="min-h-screen bg-navy-dark flex flex-col lg:flex-row">
      {/* 3D Scene */}
      <div className="flex-1 relative min-h-[50vh] lg:min-h-screen">
        {/* Header overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 p-4 flex items-center justify-between">
          <Link href="/lab" className="inline-flex items-center gap-2 px-3 py-2 glass-card text-white/70 text-sm rounded-lg hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Lab
          </Link>
          <button onClick={reset} className="inline-flex items-center gap-2 px-3 py-2 glass-card text-white/70 text-sm rounded-lg hover:text-white transition-colors">
            <RotateCcw className="w-4 h-4" /> Réinitialiser
          </button>
        </div>

        <Canvas
          camera={{ position: [2, 1.5, 3], fov: 45 }}
          shadows
          gl={{ antialias: true, alpha: false }}
          style={{ background: "#0a1628" }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
          <directionalLight position={[-3, 3, -2]} intensity={0.5} />
          <pointLight position={[0, 3, 0]} intensity={0.3} color="#00d4ff" />

          <GardeCorpsModel config={config} />

          <ContactShadows position={[0, -0.01, 0]} opacity={0.4} scale={10} blur={2} />
          <Environment preset="city" />
          <OrbitControls
            makeDefault
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            minDistance={1}
            maxDistance={8}
            target={[0, 0.5, 0]}
          />
        </Canvas>

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 text-white/30 text-xs">
          Clic + glisser pour tourner · Molette pour zoomer
        </div>
      </div>

      {/* Config Panel */}
      <div className="w-full lg:w-[380px] bg-white dark:bg-slate-900 lg:h-screen overflow-y-auto border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-slate-700">
        <div className="p-6">
          <h1 className="text-xl font-bold text-navy-dark dark:text-white mb-1">Garde-corps sur mesure</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Configurez en 3D, obtenez une estimation instantanée</p>

          {/* Type */}
          <Section title="Type de remplissage" open={expandedSection === "type"} onToggle={() => toggleSection("type")}>
            <div className="grid grid-cols-2 gap-2">
              {(Object.entries(FILL_TYPE_LABELS) as [FillType, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => update({ fillType: key })}
                  className={cn(
                    "px-3 py-3 rounded-xl text-sm font-medium transition-all border-2",
                    config.fillType === key
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300"
                      : "border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-400 hover:border-gray-300"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </Section>

          {/* Dimensions */}
          <Section title="Dimensions" open={expandedSection === "dimensions"} onToggle={() => toggleSection("dimensions")}>
            <div className="space-y-4">
              <SliderField label="Longueur" value={config.longueur} min={1} max={10} step={0.5} unit="m"
                onChange={v => update({ longueur: v, nbModules: Math.max(1, Math.round(v)) })} />
              <SliderField label="Hauteur" value={config.hauteur} min={0.8} max={1.2} step={0.05} unit="m"
                onChange={v => update({ hauteur: v })} />
              <SliderField label="Modules" value={config.nbModules} min={1} max={10} step={1} unit=""
                onChange={v => update({ nbModules: v })} />
            </div>
          </Section>

          {/* Couleur */}
          <Section title="Couleur RAL" open={expandedSection === "couleur"} onToggle={() => toggleSection("couleur")}>
            <div className="grid grid-cols-7 gap-2">
              {RAL_COLORS.map(c => (
                <button
                  key={c.code}
                  onClick={() => update({ ralCode: c.code, ralHex: c.hex })}
                  title={`RAL ${c.code} — ${c.name}`}
                  className={cn(
                    "w-full aspect-square rounded-lg border-2 transition-all",
                    config.ralCode === c.code
                      ? "border-cyan-500 ring-2 ring-cyan-200 scale-110"
                      : "border-gray-200 dark:border-slate-600 hover:scale-105"
                  )}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2">RAL {config.ralCode} — {RAL_COLORS.find(c => c.code === config.ralCode)?.name}</p>
          </Section>

          {/* Finition */}
          <Section title="Finition" open={expandedSection === "finition"} onToggle={() => toggleSection("finition")}>
            <div className="flex gap-2">
              {(Object.entries(FINITION_LABELS) as [Finition, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => update({ finition: key })}
                  className={cn(
                    "flex-1 px-3 py-2.5 rounded-xl text-sm font-medium transition-all border-2",
                    config.finition === key
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300"
                      : "border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-400 hover:border-gray-300"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </Section>

          {/* Price estimate */}
          <div className="mt-6 p-5 bg-gray-50 dark:bg-slate-800 rounded-2xl">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Estimation indicative</p>
            <p className="text-2xl font-bold text-navy-dark dark:text-white">
              {price.min.toLocaleString("fr-FR")} — {price.max.toLocaleString("fr-FR")} €
              <span className="text-sm font-normal text-gray-400"> HT</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {config.longueur}m × {FILL_TYPE_LABELS[config.fillType]} × {FINITION_LABELS[config.finition]}
            </p>
          </div>

          {/* CTA */}
          <Link
            href={`/contact?product=garde-corps&type=${config.fillType}&longueur=${config.longueur}&ral=${config.ralCode}`}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-glow/25 transition-all"
          >
            Demander un devis précis <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-[10px] text-gray-400 text-center mt-3">
            Tarif indicatif. Le prix final dépend de l&apos;état du support et des conditions de pose.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────

function Section({ title, open, onToggle, children }: {
  title: string; open: boolean; onToggle: () => void; children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-100 dark:border-slate-700 py-4">
      <button onClick={onToggle} className="w-full flex items-center justify-between text-left">
        <h3 className="text-sm font-semibold text-navy-dark dark:text-white">{title}</h3>
        <ChevronDown className={cn("w-4 h-4 text-gray-400 transition-transform", open && "rotate-180")} />
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

function SliderField({ label, value, min, max, step, unit, onChange }: {
  label: string; value: number; min: number; max: number; step: number; unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="text-xs text-gray-500 dark:text-gray-400">{label}</label>
        <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step} value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className="w-full h-1.5 bg-gray-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-500"
      />
    </div>
  );
}
