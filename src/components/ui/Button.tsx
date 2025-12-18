"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-glow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-blue-corporate text-white hover:bg-blue-medium shadow-md hover:shadow-lg hover:-translate-y-0.5",
        secondary:
          "bg-gray-100 text-navy-dark hover:bg-gray-200 shadow-sm hover:shadow-md",
        outline:
          "border-2 border-white/50 bg-transparent text-white hover:bg-white/10 hover:border-white",
        outlineDark:
          "border-2 border-blue-corporate bg-transparent text-blue-corporate hover:bg-blue-corporate hover:text-white",
        ghost: "hover:bg-gray-100 hover:text-navy-dark",
        link: "text-blue-corporate underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-blue-corporate to-blue-medium text-white shadow-lg hover:shadow-xl hover:-translate-y-1",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 py-3.5 text-base",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      icon,
      iconPosition = "right",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };






