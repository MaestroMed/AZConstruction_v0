"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, AdaptiveDpr, AdaptiveEvents } from "@react-three/drei";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  ChevronDown,
  Camera,
  Box,
  Square,
  SidebarOpen,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Shield,
  Info,
  Ruler,
  Palette,
  Paintbrush,
  Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GardeCorpsModel } from "./GardeCorpsModel";
import {
  type GardeCorpsConfig,
  type FillType,
  type Finition,
  type CameraPreset,
  type BuildingType,
  DEFAULT_CONFIG,
  RAL_COLORS,
  FILL_TYPE_LABELS,
  FILL_TYPE_DESCRIPTIONS,
  FINITION_LABELS,
  BUILDING_TYPE_LABELS,
  CAMERA_PRESETS,
  estimatePrice,
  validateNorms,
  NORMS,
} from "./types";

// ── Camera controller (smooth transitions) ────────────────

function CameraController({ preset, longueur }: { preset: CameraPreset; longueur: number }) {
  const controlsRef = React.useRef<React.ComponentRef<typeof OrbitControls>>(null);
  const [targetPos, setTargetPos] = React.useState(CAMERA_PRESETS.perspective.position);

  React.useEffect(() => {
    const base = CAMERA_PRESETS[preset].position;
    // Scale camera distance based on rail length
    const scale = Math.max(1, longueur / 3);
    setTargetPos([base[0] * scale, base[1] * scale, base[2] * scale]);
  }, [preset, longueur]);

  React.useEffect(() => {
    const ctrl = controlsRef.current;
    if (!ctrl) return;
    // Smooth animate to target
    const obj = ctrl.object;
    const start = { x: obj.position.x, y: obj.position.y, z: obj.position.z };
    const end = { x: targetPos[0], y: targetPos[1], z: targetPos[2] };
    let frame: number;
    let t = 0;

    function animate() {
      t += 0.04;
      if (t >= 1) t = 1;
      const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
      obj.position.set(
        start.x + (end.x - start.x) * ease,
        start.y + (end.y - start.y) * ease,
        start.z + (end.z - start.z) * ease
      );
      controlsRef.current?.update();
      if (t < 1) frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetPos]);

  return (
    <OrbitControls
      ref={controlsRef}
      makeDefault
      minPolarAngle={Math.PI / 12}
      maxPolarAngle={Math.PI / 2.05}
      minDistance={0.8}
      maxDistance={12}
      target={[0, 0.5, 0]}
      enableDamping
      dampingFactor={0.08}
    />
  );
}

// ── Main component ────────────────────────────────────────

export default function GardeCorpsConfigurator() {
  const [config, setConfig] = React.useState<GardeCorpsConfig>(DEFAULT_CONFIG);
  const [expandedSection, setExpandedSection] = React.useState<string>("type");
  const [cameraPreset, setCameraPreset] = React.useState<CameraPreset>("perspective");
  const [showNorms, setShowNorms] = React.useState(false);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const price = estimatePrice(config);
  const violations = React.useMemo(() => validateNorms(config), [config]);

  const update = React.useCallback((partial: Partial<GardeCorpsConfig>) => {
    setConfig(prev => ({ ...prev, ...partial }));
  }, []);

  const reset = React.useCallback(() => {
    setConfig(DEFAULT_CONFIG);
    setCameraPreset("perspective");
  }, []);

  const toggleSection = React.useCallback((key: string) => {
    setExpandedSection(prev => prev === key ? "" : key);
  }, []);

  const handleScreenshot = React.useCallback(() => {
    const canvas = canvasRef.current ?? document.querySelector("canvas");
    if (!canvas) return;
    // Force render then capture
    requestAnimationFrame(() => {
      const link = document.createElement("a");
      link.download = `garde-corps-${config.fillType}-${config.ralCode}-${config.longueur}m.png`;
      link.href = canvas.toDataURL("image/png", 1.0);
      link.click();
    });
  }, [config.fillType, config.ralCode, config.longueur]);

  const cameraPresetIcon = (preset: CameraPreset) => {
    switch (preset) {
      case "perspective": return <Box className="w-3.5 h-3.5" />;
      case "front": return <Square className="w-3.5 h-3.5" />;
      case "side": return <SidebarOpen className="w-3.5 h-3.5" />;
      case "top": return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1426] flex flex-col lg:flex-row">
      {/* ── 3D Scene ───────────────────────────────── */}
      <div className="flex-1 relative min-h-[45vh] lg:min-h-screen">
        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 z-10 p-3 flex items-center justify-between">
          <Link
            href="/lab"
            className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-sm rounded-lg hover:text-white hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Lab
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={handleScreenshot}
              className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-sm rounded-lg hover:text-white hover:bg-white/10 transition-all"
              title="Capturer une image"
            >
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Capture</span>
            </button>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-sm rounded-lg hover:text-white hover:bg-white/10 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>
        </div>

        {/* Camera presets */}
        <div className="absolute top-16 left-3 z-10 flex flex-col gap-1.5">
          {(Object.keys(CAMERA_PRESETS) as CameraPreset[]).map(key => (
            <button
              key={key}
              onClick={() => setCameraPreset(key)}
              title={CAMERA_PRESETS[key].label}
              className={cn(
                "w-9 h-9 flex items-center justify-center rounded-lg transition-all text-xs font-bold",
                cameraPreset === key
                  ? "bg-cyan-500 text-navy-dark shadow-lg shadow-cyan-500/30"
                  : "bg-white/5 backdrop-blur-md border border-white/10 text-white/60 hover:text-white hover:bg-white/10"
              )}
            >
              {cameraPresetIcon(key)}
            </button>
          ))}
        </div>

        {/* Norm status badge */}
        {violations.length > 0 && (
          <div className="absolute top-16 right-3 z-10">
            <button
              onClick={() => setShowNorms(true)}
              className="flex items-center gap-2 px-3 py-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs rounded-lg hover:bg-amber-500/30 transition-all animate-pulse"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              {violations.length} alerte{violations.length > 1 ? "s" : ""} norme
            </button>
          </div>
        )}
        {violations.length === 0 && (
          <div className="absolute top-16 right-3 z-10">
            <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/15 backdrop-blur-md border border-emerald-500/20 text-emerald-400 text-xs rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Conforme NF P01-012
            </div>
          </div>
        )}

        <Canvas
          ref={canvasRef}
          shadows
          gl={{ antialias: true, alpha: false, preserveDrawingBuffer: true }}
          dpr={[1, 2]}
          style={{ background: "linear-gradient(180deg, #0B1426 0%, #111D33 50%, #192840 100%)" }}
        >
          {/* Adaptive performance */}
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          {/* ── Lighting (3-point studio) ──────────── */}
          <ambientLight intensity={0.5} />
          {/* Key light */}
          <directionalLight
            position={[5, 8, 4]}
            intensity={1.8}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={25}
            shadow-camera-left={-8}
            shadow-camera-right={8}
            shadow-camera-top={5}
            shadow-camera-bottom={-2}
            shadow-bias={-0.0005}
          />
          {/* Fill light */}
          <directionalLight position={[-4, 4, -3]} intensity={0.6} color="#B0C4DE" />
          {/* Rim/back light */}
          <directionalLight position={[0, 3, -5]} intensity={0.4} color="#E0E8FF" />
          {/* Subtle accent light (cyan) */}
          <pointLight position={[0, 4, 2]} intensity={0.2} color="#00d4ff" distance={10} decay={2} />

          <GardeCorpsModel config={config} />

          <ContactShadows position={[0, -0.049, 0]} opacity={0.5} scale={15} blur={2.5} far={5} />
          <Environment preset="studio" background={false} />

          <CameraController preset={cameraPreset} longueur={config.longueur} />
        </Canvas>

        {/* Bottom info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <div className="text-white/25 text-[10px]">
            Clic + glisser pour tourner · Molette pour zoomer
          </div>
          <div className="text-white/20 text-[10px] text-right">
            NF P01-012 (2024) · Image non contractuelle
          </div>
        </div>
      </div>

      {/* ── Config Panel ───────────────────────────── */}
      <div className="w-full lg:w-[400px] bg-white dark:bg-slate-900 lg:h-screen overflow-y-auto border-t lg:border-t-0 lg:border-l border-gray-200 dark:border-slate-700/50">
        <div className="p-5 lg:p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h1 className="text-lg font-bold text-navy-dark dark:text-white leading-tight">
                Garde-corps sur mesure
              </h1>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                Configurez en 3D · Estimation instantanée
              </p>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded-md">
              <Shield className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
              <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">NF P01-012</span>
            </div>
          </div>

          {/* Norm Alerts */}
          {(showNorms || violations.length > 0) && violations.length > 0 && (
            <div className="mb-4 p-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  Alertes conformité
                </span>
                <button onClick={() => setShowNorms(false)} className="text-amber-400 text-xs hover:text-amber-600">Fermer</button>
              </div>
              <ul className="space-y-1.5">
                {violations.map((v, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-amber-700 dark:text-amber-300">
                    <span className={cn(
                      "mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0",
                      v.severity === "error" ? "bg-red-500" : "bg-amber-500"
                    )} />
                    {v.message}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ── Building type ──────────────────────── */}
          <Section
            title="Type de bâtiment"
            icon={<Building2 className="w-4 h-4" />}
            open={expandedSection === "building"}
            onToggle={() => toggleSection("building")}
          >
            <div className="flex gap-2">
              {(Object.entries(BUILDING_TYPE_LABELS) as [BuildingType, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => update({
                    buildingType: key,
                    // Auto-adjust height to min norm
                    hauteur: key === "erp"
                      ? Math.max(config.hauteur, NORMS.minHeightERP)
                      : config.hauteur,
                  })}
                  className={cn(
                    "flex-1 px-3 py-2.5 rounded-xl text-sm font-medium transition-all border-2",
                    config.buildingType === key
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300"
                      : "border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-400 hover:border-gray-300"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-gray-400 mt-2 flex items-center gap-1">
              <Info className="w-3 h-3" />
              Hauteur min {config.buildingType === "erp" ? "110 cm (ERP)" : "100 cm (résidentiel)"}
            </p>
          </Section>

          {/* ── Fill Type ──────────────────────────── */}
          <Section
            title="Type de remplissage"
            icon={<Layers className="w-4 h-4" />}
            open={expandedSection === "type"}
            onToggle={() => toggleSection("type")}
          >
            <div className="grid grid-cols-2 gap-2">
              {(Object.entries(FILL_TYPE_LABELS) as [FillType, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => update({ fillType: key })}
                  className={cn(
                    "px-3 py-3 rounded-xl text-left transition-all border-2",
                    config.fillType === key
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20"
                      : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500"
                  )}
                >
                  <span className={cn(
                    "text-sm font-semibold block",
                    config.fillType === key ? "text-cyan-700 dark:text-cyan-300" : "text-gray-700 dark:text-gray-300"
                  )}>
                    {label}
                  </span>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight mt-0.5 block">
                    {FILL_TYPE_DESCRIPTIONS[key]}
                  </span>
                </button>
              ))}
            </div>
          </Section>

          {/* ── Dimensions ─────────────────────────── */}
          <Section
            title="Dimensions"
            icon={<Ruler className="w-4 h-4" />}
            open={expandedSection === "dimensions"}
            onToggle={() => toggleSection("dimensions")}
          >
            <div className="space-y-4">
              <SliderField
                label="Longueur totale"
                value={config.longueur}
                min={0.5}
                max={6}
                step={0.25}
                unit=" m"
                onChange={v => update({ longueur: v })}
              />
              <SliderField
                label="Hauteur"
                value={config.hauteur}
                min={0.8}
                max={1.2}
                step={0.05}
                unit=" m"
                onChange={v => update({ hauteur: v })}
                warning={
                  config.hauteur < (config.buildingType === "erp" ? NORMS.minHeightERP : NORMS.minHeightResidential)
                    ? `Min ${config.buildingType === "erp" ? "110" : "100"} cm requis`
                    : undefined
                }
              />
              <SliderField
                label="Nombre de modules"
                value={config.nbModules}
                min={1}
                max={Math.max(1, Math.ceil(config.longueur / 0.5))}
                step={1}
                unit=""
                onChange={v => update({ nbModules: v })}
                info={`Entraxe poteaux : ${((config.longueur / config.nbModules) * 100).toFixed(0)} cm`}
              />
            </div>
          </Section>

          {/* ── Couleur RAL ────────────────────────── */}
          <Section
            title="Couleur RAL"
            icon={<Palette className="w-4 h-4" />}
            open={expandedSection === "couleur"}
            onToggle={() => toggleSection("couleur")}
          >
            <div className="grid grid-cols-7 gap-1.5">
              {RAL_COLORS.map(c => (
                <button
                  key={c.code}
                  onClick={() => update({ ralCode: c.code, ralHex: c.hex })}
                  title={`RAL ${c.code} — ${c.name}`}
                  className={cn(
                    "w-full aspect-square rounded-lg border-2 transition-all relative",
                    config.ralCode === c.code
                      ? "border-cyan-500 ring-2 ring-cyan-300/50 scale-110 z-10"
                      : "border-gray-200/50 dark:border-slate-600/50 hover:scale-105"
                  )}
                  style={{ backgroundColor: c.hex }}
                >
                  {config.ralCode === c.code && (
                    <CheckCircle2 className="w-3 h-3 absolute -top-1 -right-1 text-cyan-500 bg-white dark:bg-slate-900 rounded-full" />
                  )}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                RAL {config.ralCode}
              </p>
              <p className="text-xs font-medium text-gray-600 dark:text-gray-300">
                {RAL_COLORS.find(c => c.code === config.ralCode)?.name}
              </p>
            </div>
          </Section>

          {/* ── Finition ───────────────────────────── */}
          <Section
            title="Finition thermolaquage"
            icon={<Paintbrush className="w-4 h-4" />}
            open={expandedSection === "finition"}
            onToggle={() => toggleSection("finition")}
          >
            <div className="flex gap-2">
              {(Object.entries(FINITION_LABELS) as [Finition, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => update({ finition: key })}
                  className={cn(
                    "flex-1 px-3 py-3 rounded-xl text-sm font-medium transition-all border-2 text-center",
                    config.finition === key
                      ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300"
                      : "border-gray-200 dark:border-slate-600 text-gray-600 dark:text-gray-400 hover:border-gray-300"
                  )}
                >
                  <span className="block">{label}</span>
                  <span className="block text-[10px] text-gray-400 mt-0.5">
                    {key === "mat" ? "Texture douce" : key === "satine" ? "Semi-brillant" : "Haute brillance"}
                  </span>
                </button>
              ))}
            </div>
          </Section>

          {/* ── Price ──────────────────────────────── */}
          <div className="mt-5 p-5 bg-gradient-to-br from-gray-50 to-gray-100/80 dark:from-slate-800 dark:to-slate-800/80 rounded-2xl border border-gray-100 dark:border-slate-700/50">
            <div className="flex items-center justify-between mb-2">
              <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                Estimation indicative HT
              </p>
              {violations.length === 0 && (
                <span className="text-[10px] text-emerald-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Conforme
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-navy-dark dark:text-white tracking-tight">
              {price.min.toLocaleString("fr-FR")} — {price.max.toLocaleString("fr-FR")}
              <span className="text-base font-medium text-gray-400 ml-1">€</span>
            </p>
            <p className="text-[11px] text-gray-400 mt-1.5">{price.details}</p>
            <div className="flex items-center gap-4 mt-2 text-[10px] text-gray-400">
              <span>{(price.min / config.longueur).toFixed(0)}–{(price.max / config.longueur).toFixed(0)} €/ml</span>
              <span>·</span>
              <span>Résistance {config.buildingType === "erp" ? "100" : "60"} daN</span>
            </div>
          </div>

          {/* ── CTA ────────────────────────────────── */}
          <Link
            href={`/contact?product=garde-corps&type=${config.fillType}&longueur=${config.longueur}&hauteur=${config.hauteur}&modules=${config.nbModules}&ral=${config.ralCode}&finition=${config.finition}&building=${config.buildingType}`}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-glow to-cyan-400 text-navy-dark font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-glow/25 transition-all active:scale-[0.98]"
          >
            Demander un devis précis <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-[9px] text-gray-400 text-center mt-3 leading-relaxed">
            Tarif indicatif, fourniture uniquement. Le prix final dépend du relevé sur site,
            de la complexité de pose et des finitions.
          </p>
        </div>
      </div>

      {/* ── Norms modal overlay ────────────────────── */}
      {showNorms && violations.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={() => setShowNorms(false)}>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold text-navy-dark dark:text-white">Alertes conformité</h3>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Configuration actuelle non conforme à la norme NF P01-012 (révision 2024).
            </p>
            <ul className="space-y-3 mb-5">
              {violations.map((v, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className={cn(
                    "mt-1 w-2 h-2 rounded-full flex-shrink-0",
                    v.severity === "error" ? "bg-red-500" : "bg-amber-500"
                  )} />
                  <span className="text-gray-700 dark:text-gray-300">{v.message}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowNorms(false)}
              className="w-full py-2.5 bg-navy-dark text-white rounded-xl text-sm font-medium hover:bg-navy-dark/90 transition-colors"
            >
              Compris
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────

const Section = React.memo(function Section({ title, icon, open, onToggle, children }: {
  title: string;
  icon?: React.ReactNode;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-100 dark:border-slate-700/50 py-3.5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-gray-400 dark:text-gray-500 group-hover:text-cyan-500 transition-colors">{icon}</span>}
          <h3 className="text-sm font-semibold text-navy-dark dark:text-white">{title}</h3>
        </div>
        <ChevronDown className={cn(
          "w-4 h-4 text-gray-400 transition-transform duration-200",
          open && "rotate-180"
        )} />
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-200",
        open ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
      )}>
        {children}
      </div>
    </div>
  );
});

const SliderField = React.memo(function SliderField({ label, value, min, max, step, unit, onChange, warning, info }: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange: (v: number) => void;
  warning?: string;
  info?: string;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <label className="text-xs font-medium text-gray-600 dark:text-gray-400">{label}</label>
        <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 tabular-nums">
          {Number.isInteger(value) ? value : value.toFixed(2)}{unit}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-gray-200 dark:bg-slate-600 rounded-full appearance-none cursor-pointer accent-cyan-500"
          style={{
            background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${percentage}%, ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#475569' : '#e5e7eb'} ${percentage}%, ${typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? '#475569' : '#e5e7eb'} 100%)`,
          }}
        />
      </div>
      {warning && (
        <p className="text-[10px] text-amber-500 mt-1 flex items-center gap-1">
          <AlertTriangle className="w-3 h-3" /> {warning}
        </p>
      )}
      {info && !warning && (
        <p className="text-[10px] text-gray-400 mt-1">{info}</p>
      )}
    </div>
  );
});
