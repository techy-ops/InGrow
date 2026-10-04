"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
  barClassName?: string;
  showLabel?: boolean;
  animate?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className,
  barClassName,
  showLabel = false,
  animate = true,
}) => {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full h-2.5 bg-forest/10 rounded-full overflow-hidden">
        {animate ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${clamped}%` }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "h-full rounded-full bg-gradient-to-r from-ingreen to-ingreen-400",
              barClassName
            )}
          />
        ) : (
          <div
            style={{ width: `${clamped}%` }}
            className={cn(
              "h-full rounded-full bg-gradient-to-r from-ingreen to-ingreen-400",
              barClassName
            )}
          />
        )}
      </div>
      {showLabel && (
        <div className="mt-1.5 flex justify-between text-xs text-mutedText">
          <span>Progress</span>
          <span className="font-semibold text-charcoal">{Math.round(clamped)}%</span>
        </div>
      )}
    </div>
  );
};
