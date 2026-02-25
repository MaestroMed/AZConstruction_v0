"use client";
import dynamic from "next/dynamic";
import * as React from "react";

const SpectreScene = dynamic(() => import("./SpectreScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="flex gap-1">
        {[0,1,2,3,4].map(i => (
          <div key={i} className="w-2 h-10 rounded-full animate-pulse"
            style={{
              animationDelay: `${i*100}ms`,
              background: ["#0e0e10","#2c3135","#f0f0eb","#1a2f4a","#6b1c23"][i],
              opacity: 0.8,
            }}
          />
        ))}
      </div>
    </div>
  ),
});
export default SpectreScene;
