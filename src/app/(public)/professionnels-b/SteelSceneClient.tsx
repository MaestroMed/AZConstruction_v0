"use client";

import dynamic from "next/dynamic";
import * as React from "react";

const SteelScene = dynamic(() => import("./SteelScene"), {
  ssr: false,
  loading: () => <SteelLoader />,
});

function SteelLoader() {
  const [progress, setProgress] = React.useState(0);
  const [label, setLabel] = React.useState("Initialisation...");

  React.useEffect(() => {
    const steps = [
      { delay: 120,  pct: 15, txt: "Chargement des profilés IPN..." },
      { delay: 400,  pct: 35, txt: "Calcul des géométries..." },
      { delay: 700,  pct: 55, txt: "Configuration des matériaux acier..." },
      { delay: 1000, pct: 75, txt: "Préparation de la scène..." },
      { delay: 1400, pct: 90, txt: "Post-processing Bloom..." },
      { delay: 1800, pct: 99, txt: "Prêt." },
    ];
    const timers = steps.map(({ delay, pct, txt }) =>
      setTimeout(() => { setProgress(pct); setLabel(txt); }, delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black">
      {/* Logo AZ stylisé */}
      <div className="mb-10 relative">
        <svg width="80" height="56" viewBox="0 0 80 56" fill="none">
          {/* A */}
          <line x1="8"  y1="52" x2="22" y2="8"  stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" />
          <line x1="36" y1="52" x2="22" y2="8"  stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" />
          <line x1="13" y1="33" x2="31" y2="33" stroke="#00d4ff" strokeWidth="3" strokeLinecap="round" />
          {/* Z */}
          <line x1="44" y1="8"  x2="72" y2="8"  stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" />
          <line x1="72" y1="8"  x2="44" y2="52" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" />
          <line x1="44" y1="52" x2="72" y2="52" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" />
          {/* Glow effect via filter */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
        </svg>
        {/* Pulsation */}
        <div
          className="absolute inset-0 blur-2xl opacity-40 animate-pulse"
          style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)" }}
        />
      </div>

      {/* Barre de progression */}
      <div className="w-56 h-px bg-white/10 rounded-full overflow-hidden mb-4">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #0066aa, #00d4ff)",
            boxShadow: "0 0 8px #00d4ff80",
          }}
        />
      </div>

      <p className="text-white/35 text-xs tracking-[0.25em] uppercase font-medium">
        {label}
      </p>
    </div>
  );
}

export default SteelScene;
