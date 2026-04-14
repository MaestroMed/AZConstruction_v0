"use client";

import * as React from "react";
import { Search, Download, Filter, X } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterConfig {
  label: string;
  key: string;
  options: FilterOption[];
}

interface DataTableToolbarProps {
  searchValue?: string;
  onSearch?: (value: string) => void;
  searchPlaceholder?: string;
  filters?: FilterConfig[];
  activeFilters?: Record<string, string>;
  onFilterChange?: (key: string, value: string) => void;
  onExport?: () => void;
  resultCount?: number;
  children?: React.ReactNode;
}

export function DataTableToolbar({
  searchValue = "",
  onSearch,
  searchPlaceholder = "Rechercher...",
  filters,
  activeFilters = {},
  onFilterChange,
  onExport,
  resultCount,
  children,
}: DataTableToolbarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
      {/* Search */}
      {onSearch && (
        <div className="relative flex-1 w-full sm:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500"
          />
          {searchValue && (
            <button onClick={() => onSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* Filters */}
      {filters && onFilterChange && (
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          {filters.map((filter) => (
            <select
              key={filter.key}
              value={activeFilters[filter.key] || ""}
              onChange={(e) => onFilterChange(filter.key, e.target.value)}
              className="px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            >
              <option value="">{filter.label}</option>
              {filter.options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          ))}
        </div>
      )}

      {/* Right side: result count + export + custom children */}
      <div className="flex items-center gap-3 ml-auto">
        {resultCount !== undefined && (
          <span className="text-xs text-gray-400">{resultCount} résultat{resultCount !== 1 ? "s" : ""}</span>
        )}
        {children}
        {onExport && (
          <button
            onClick={onExport}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            Exporter
          </button>
        )}
      </div>
    </div>
  );
}
