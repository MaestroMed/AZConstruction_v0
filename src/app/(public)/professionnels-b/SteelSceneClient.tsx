"use client";

import dynamic from "next/dynamic";

const SteelScene = dynamic(() => import("./SteelScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-2 h-2 rounded-full bg-cyan-glow animate-ping" />
    </div>
  ),
});

export default SteelScene;
