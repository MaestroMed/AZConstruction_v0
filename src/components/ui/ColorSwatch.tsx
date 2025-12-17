"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ColorOption {
  id: string;
  name: string;
  hex: string;
}

interface ColorSwatchProps {
  colors: ColorOption[];
  selectedColor: string;
  onSelectColor: (colorId: string) => void;
  showLabels?: boolean;
  className?: string;
}

export function ColorSwatch({
  colors,
  selectedColor,
  onSelectColor,
  showLabels = true,
  className,
}: ColorSwatchProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onSelectColor(color.id)}
            className={cn(
              "relative w-8 h-8 rounded-full transition-all duration-200 hover:scale-110",
              selectedColor === color.id &&
                "ring-2 ring-cyan-glow ring-offset-2 ring-offset-white"
            )}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          >
            {selectedColor === color.id && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={
                    isLightColor(color.hex) ? "#0b1d3a" : "#ffffff"
                  }
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>
      {showLabels && (
        <div className="flex gap-3 text-xs text-gray-500">
          {colors.map((color) => (
            <span
              key={color.id}
              className={cn(
                "w-8 text-center truncate",
                selectedColor === color.id && "text-navy-dark font-medium"
              )}
            >
              {color.name.split(" ")[0]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}



