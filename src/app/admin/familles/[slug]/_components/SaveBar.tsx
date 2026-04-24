"use client";

import * as React from "react";
import { Loader2, Save, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SaveBarProps {
  dirty: boolean;
  saving: boolean;
  onSave: () => void;
  onReset?: () => void;
  label?: string;
}

export function SaveBar({
  dirty,
  saving,
  onSave,
  onReset,
  label = "Enregistrer",
}: SaveBarProps) {
  return (
    <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
      <StatusIndicator saving={saving} dirty={dirty} />
      <div className="flex items-center gap-2">
        {onReset && dirty && !saving && (
          <button
            type="button"
            onClick={onReset}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
          >
            Annuler
          </button>
        )}
        <button
          type="button"
          onClick={onSave}
          disabled={!dirty || saving}
          className={cn(
            "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors",
            dirty && !saving
              ? "bg-cyan-600 text-white hover:bg-cyan-700"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          )}
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {label}
        </button>
      </div>
    </div>
  );
}

export function StatusIndicator({
  saving,
  dirty,
}: {
  saving: boolean;
  dirty: boolean;
}) {
  if (saving) {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs text-cyan-600">
        <Loader2 className="w-3 h-3 animate-spin" />
        Enregistrement…
      </span>
    );
  }
  if (dirty) {
    return (
      <span className="text-xs text-amber-600">
        Modifications non enregistrées
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600">
      <Check className="w-3 h-3" />À jour
    </span>
  );
}
