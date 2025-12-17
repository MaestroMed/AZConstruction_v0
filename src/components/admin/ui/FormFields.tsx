"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, Upload, X, ChevronDown, Check } from "lucide-react";

// Input Field
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, leftIcon, rightIcon, className, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === "password";

    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            type={isPassword && showPassword ? "text" : type}
            className={cn(
              "w-full px-4 py-2.5 bg-white border rounded-lg text-sm transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
              "placeholder:text-gray-400",
              error
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-200 hover:border-gray-300",
              leftIcon && "pl-10",
              (rightIcon || isPassword) && "pr-10",
              className
            )}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          )}
          {rightIcon && !isPassword && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {hint && !error && <p className="text-sm text-gray-500">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";

// Textarea
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            "w-full px-4 py-2.5 bg-white border rounded-lg text-sm transition-all duration-200 resize-none",
            "focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
            "placeholder:text-gray-400",
            error
              ? "border-red-300 focus:ring-red-500"
              : "border-gray-200 hover:border-gray-300",
            className
          )}
          rows={4}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        {hint && !error && <p className="text-sm text-gray-500">{hint}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

// Select
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  onChange?: (value: string) => void;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, hint, options, className, onChange, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            onChange={(e) => onChange?.(e.target.value)}
            className={cn(
              "w-full px-4 py-2.5 bg-white border rounded-lg text-sm appearance-none cursor-pointer transition-all duration-200",
              "focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
              error
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-200 hover:border-gray-300",
              className
            )}
            {...props}
          >
            <option value="">Sélectionner...</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        {hint && !error && <p className="text-sm text-gray-500">{hint}</p>}
      </div>
    );
  }
);
Select.displayName = "Select";

// Switch/Toggle
interface SwitchProps {
  label?: string;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Switch({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
}: SwitchProps) {
  return (
    <label
      className={cn(
        "flex items-start gap-3 cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 flex-shrink-0 rounded-full transition-colors duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2",
          checked ? "bg-cyan-500" : "bg-gray-200"
        )}
      >
        <span
          className={cn(
            "inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition duration-200 ease-in-out",
            checked ? "translate-x-5" : "translate-x-0.5",
            "mt-0.5"
          )}
        />
      </button>
      {(label || description) && (
        <div className="flex-1">
          {label && <p className="text-sm font-medium text-gray-700">{label}</p>}
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      )}
    </label>
  );
}

// Checkbox
interface CheckboxProps {
  label?: string;
  description?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export function Checkbox({
  label,
  description,
  checked = false,
  onChange,
  disabled = false,
}: CheckboxProps) {
  return (
    <label
      className={cn(
        "flex items-start gap-3 cursor-pointer",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div
        className={cn(
          "w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 mt-0.5",
          checked
            ? "bg-cyan-500 border-cyan-500"
            : "bg-white border-gray-300 hover:border-gray-400"
        )}
        onClick={() => !disabled && onChange?.(!checked)}
      >
        {checked && <Check className="w-3 h-3 text-white" />}
      </div>
      {(label || description) && (
        <div className="flex-1">
          {label && <p className="text-sm font-medium text-gray-700">{label}</p>}
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
      )}
    </label>
  );
}

// File Upload
interface FileUploadProps {
  label?: string;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  error?: string;
  hint?: string;
  value?: File[];
  onChange?: (files: File[]) => void;
}

export function FileUpload({
  label,
  accept = "image/*",
  multiple = false,
  maxSize = 5,
  error,
  hint,
  value = [],
  onChange,
}: FileUploadProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = React.useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const validFiles = Array.from(files).filter(
      (file) => file.size <= maxSize * 1024 * 1024
    );
    onChange?.(multiple ? [...value, ...validFiles] : validFiles.slice(0, 1));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index: number) => {
    onChange?.(value.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200",
          dragActive
            ? "border-cyan-500 bg-cyan-50"
            : error
            ? "border-red-300 hover:border-red-400"
            : "border-gray-200 hover:border-gray-300"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
        <Upload className="w-10 h-10 mx-auto text-gray-400 mb-3" />
        <p className="text-sm text-gray-600">
          <span className="text-cyan-600 font-medium">Cliquez pour télécharger</span>{" "}
          ou glissez-déposez
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {accept.replace(/\*/g, "tous")} (max. {maxSize}MB)
        </p>
      </div>

      {/* Preview files */}
      {value.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {value.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg text-sm"
            >
              <span className="truncate max-w-[200px]">{file.name}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="text-gray-400 hover:text-red-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-sm text-red-500">{error}</p>}
      {hint && !error && <p className="text-sm text-gray-500">{hint}</p>}
    </div>
  );
}

// Color Picker
interface ColorPickerProps {
  label?: string;
  value?: string;
  onChange?: (color: string) => void;
  presets?: string[];
}

export function ColorPicker({
  label,
  value = "#000000",
  onChange,
  presets = [
    "#000000",
    "#ffffff",
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#06b6d4",
    "#3b82f6",
    "#8b5cf6",
    "#ec4899",
  ],
}: ColorPickerProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-gray-700">{label}</label>
      )}
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="color"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-10 h-10 rounded-lg border border-gray-200 cursor-pointer"
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-28 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm uppercase"
        />
        <div className="flex gap-1">
          {presets.slice(0, 6).map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => onChange?.(preset)}
              className={cn(
                "w-6 h-6 rounded-md border-2 transition-all",
                value === preset ? "border-cyan-500 scale-110" : "border-transparent"
              )}
              style={{ backgroundColor: preset }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


