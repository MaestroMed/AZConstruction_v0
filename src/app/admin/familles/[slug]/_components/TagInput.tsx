"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TagInputProps {
  label?: string;
  hint?: string;
  placeholder?: string;
  value: string[];
  onChange: (next: string[]) => void;
}

/**
 * Tag input: `Enter` / `,` to commit, backspace removes last tag when empty.
 */
export function TagInput({
  label,
  hint,
  placeholder,
  value,
  onChange,
}: TagInputProps) {
  const [draft, setDraft] = React.useState("");

  const commit = (raw: string) => {
    const v = raw.trim().replace(/,$/, "").trim();
    if (!v) return;
    if (value.includes(v)) {
      setDraft("");
      return;
    }
    onChange([...value, v]);
    setDraft("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commit(draft);
    } else if (e.key === "Backspace" && draft.length === 0 && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <div
        className={cn(
          "w-full min-h-[44px] px-2 py-2 bg-white border rounded-lg text-sm",
          "focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-transparent",
          "border-gray-200 hover:border-gray-300"
        )}
      >
        <div className="flex flex-wrap items-center gap-1.5">
          {value.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-cyan-50 text-cyan-700 text-xs font-medium border border-cyan-100"
            >
              {tag}
              <button
                type="button"
                onClick={() => onChange(value.filter((t) => t !== tag))}
                className="hover:text-red-600"
                aria-label={`Retirer ${tag}`}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          <input
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={onKeyDown}
            onBlur={() => draft.trim() && commit(draft)}
            placeholder={value.length === 0 ? placeholder : ""}
            className="flex-1 min-w-[140px] bg-transparent outline-none px-1 py-0.5 text-sm placeholder:text-gray-400"
          />
        </div>
      </div>
      {hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
