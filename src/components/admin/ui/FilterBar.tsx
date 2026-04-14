"use client";

import * as React from "react";
import { X, SlidersHorizontal } from "lucide-react";

interface FilterPill {
  key: string;
  label: string;
  value: string;
  displayValue: string;
}

interface FilterConfig {
  key: string;
  label: string;
  type: "select" | "date-range";
  options?: { label: string; value: string }[];
}

interface FilterBarProps {
  filters: FilterConfig[];
  activeFilters: Record<string, string>;
  onFilterChange: (key: string, value: string) => void;
  onClearAll?: () => void;
}

export function FilterBar({ filters, activeFilters, onFilterChange, onClearAll }: FilterBarProps) {
  const activePills: FilterPill[] = Object.entries(activeFilters)
    .filter(([, v]) => v && v !== "")
    .map(([key, value]) => {
      const config = filters.find(f => f.key === key);
      const option = config?.options?.find(o => o.value === value);
      return {
        key,
        label: config?.label || key,
        value,
        displayValue: option?.label || value,
      };
    });

  return (
    <div className="space-y-3">
      {/* Filter dropdowns */}
      <div className="flex flex-wrap items-center gap-2">
        <SlidersHorizontal className="w-4 h-4 text-gray-400" />
        {filters.map(filter => (
          <select
            key={filter.key}
            value={activeFilters[filter.key] || ""}
            onChange={(e) => onFilterChange(filter.key, e.target.value)}
            className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
          >
            <option value="">{filter.label}</option>
            {filter.options?.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        ))}
        {activePills.length > 0 && onClearAll && (
          <button
            onClick={onClearAll}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors"
          >
            Tout effacer
          </button>
        )}
      </div>

      {/* Active filter pills */}
      {activePills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activePills.map(pill => (
            <span
              key={pill.key}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs font-medium"
            >
              {pill.label}: {pill.displayValue}
              <button
                onClick={() => onFilterChange(pill.key, "")}
                className="p-0.5 hover:bg-cyan-100 rounded-full transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
