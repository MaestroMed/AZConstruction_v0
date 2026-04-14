"use client";

interface FormFieldSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function FormFieldSection({ title, description, children, className }: FormFieldSectionProps) {
  return (
    <div className={className}>
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}
