"use client";
import dynamic from "next/dynamic";
import * as React from "react";

const LumiereScene = dynamic(() => import("./LumiereScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#0d0f12] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
      </div>
    </div>
  ),
});
export default LumiereScene;
