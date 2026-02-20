"use client";

import dynamic from "next/dynamic";

const SteelScene = dynamic(() => import("./SteelScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: "0ms" }} />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: "200ms" }} />
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" style={{ animationDelay: "400ms" }} />
      </div>
    </div>
  ),
});

export default SteelScene;
