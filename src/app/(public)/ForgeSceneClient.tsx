"use client";
import dynamic from "next/dynamic";
import * as React from "react";

const ForgeScene = dynamic(() => import("./ForgeScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-2 border-orange-500/50 border-t-orange-400 rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  ),
});
export default ForgeScene;
