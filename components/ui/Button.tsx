"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "forest";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    const variants = {
      primary:
        "bg-forest hover:bg-ingreen text-warm shadow-subtle hover:shadow-card focus-visible:ring-forest border border-transparent",
      forest:
        "bg-forest hover:bg-forest-900 text-warm shadow-subtle hover:shadow-card focus-visible:ring-forest",
      secondary:
        "bg-mint hover:bg-mint-dark text-forest font-semibold focus-visible:ring-forest border border-transparent",
      outline:
        "border border-charcoal/20 hover:border-forest text-charcoal hover:text-forest bg-transparent hover:bg-forest/5 focus-visible:ring-forest",
      ghost:
        "text-charcoal hover:text-forest hover:bg-forest/5 focus-visible:ring-forest",
      gold:
        "bg-gold hover:bg-gold-dark text-forest-900 font-semibold shadow-subtle hover:shadow-card focus-visible:ring-gold",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5 h-8",
      md: "text-sm px-5 py-2.5 gap-2 h-11",
      lg: "text-base px-6 py-3.5 gap-2.5 h-13 rounded-2xl",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
