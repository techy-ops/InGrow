import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "mint" | "forest" | "gold" | "outline" | "subtle";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "mint",
  size = "md",
  children,
  ...props
}) => {
  const variants = {
    default: "bg-forest/10 text-forest border border-forest/20",
    mint: "bg-mint text-forest font-medium border border-ingreen/20",
    forest: "bg-forest text-warm font-medium border border-forest-700",
    gold: "bg-gold/15 text-gold-dark font-medium border border-gold/30",
    outline: "border border-charcoal/20 text-charcoal bg-transparent",
    subtle: "bg-charcoal/5 text-mutedText border border-transparent",
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5 rounded-full tracking-wide",
    md: "text-xs px-2.5 py-1 rounded-full font-medium tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 leading-none transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
