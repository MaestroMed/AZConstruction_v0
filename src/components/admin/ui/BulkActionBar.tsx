"use client";

import { X, LucideIcon } from "lucide-react";

interface BulkAction {
  label: string;
  icon?: LucideIcon;
  onClick: () => void;
  variant?: "primary" | "danger";
  loading?: boolean;
}

interface BulkActionBarProps {
  selectedCount: number;
  actions: BulkAction[];
  onClearSelection: () => void;
}

export function BulkActionBar({ selectedCount, actions, onClearSelection }: BulkActionBarProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 bg-navy-dark text-white rounded-2xl shadow-2xl border border-white/10 animate-in slide-in-from-bottom-4">
      <span className="text-sm font-medium whitespace-nowrap">
        {selectedCount} sélectionné{selectedCount > 1 ? "s" : ""}
      </span>
      <div className="w-px h-6 bg-white/20" />
      {actions.map((action, i) => {
        const Icon = action.icon;
        return (
          <button
            key={i}
            onClick={action.onClick}
            disabled={action.loading}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 ${
              action.variant === "danger"
                ? "bg-red-500/20 text-red-300 hover:bg-red-500/30"
                : "bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30"
            }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            {action.label}
          </button>
        );
      })}
      <button onClick={onClearSelection} className="p-1.5 text-white/50 hover:text-white rounded-lg hover:bg-white/10 transition-colors ml-1">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
