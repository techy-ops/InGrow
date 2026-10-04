"use client";

import React from "react";
import { UserCheck, PieChart, Coins, Zap } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants/mockData";
import { Badge } from "@/components/ui/Badge";

const ICON_MAP: Record<string, React.ElementType> = {
  UserCheck,
  PieChart,
  Coins,
  Zap,
};

interface HowItWorksTimelineProps {
  isFullPage?: boolean;
}

export const HowItWorksTimeline: React.FC<HowItWorksTimelineProps> = ({
  isFullPage = false,
}) => {
  return (
    <section className={`bg-warm ${isFullPage ? "py-10 sm:py-16" : "py-20 sm:py-28"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="mint" size="md" className="mb-3">
            ONBOARDING EXPERIENCE
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            How InGrow Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
            Get started in under 3 minutes with zero paperwork. A clean, seamless journey designed for modern investors.
          </p>
        </div>

        {/* Desktop Horizontal Visual Timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-6 relative">
          {/* Subtle horizontal connecting line */}
          <div className="absolute top-12 left-12 right-12 h-0.5 bg-charcoal/10 -z-0" />

          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const IconComponent = ICON_MAP[step.icon] || UserCheck;
            return (
              <div key={index} className="relative z-10 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-forest text-warm flex items-center justify-center font-display font-bold text-lg mb-6 shadow-card mx-auto">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>

                <div className="bg-white rounded-3xl p-6 border border-charcoal/8 shadow-subtle flex-grow flex flex-col justify-between text-center hover:shadow-card transition-all duration-200">
                  <div>
                    <span className="font-mono text-xs font-bold text-forest tracking-wider block mb-2">
                      STEP {step.step}
                    </span>
                    <h3 className="font-display font-bold text-base text-charcoal mb-1">
                      {step.title}
                    </h3>
                    <h4 className="text-xs font-semibold text-mutedText mb-3">
                      {step.subtitle}
                    </h4>
                    <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-charcoal/6 text-[11px] text-forest font-semibold">
                    Estimated time: ~1 min
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const IconComponent = ICON_MAP[step.icon] || UserCheck;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 border border-charcoal/8 shadow-subtle flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-forest text-warm flex items-center justify-center shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-forest tracking-wider block mb-1">
                    STEP {step.step}
                  </span>
                  <h3 className="font-display font-bold text-base text-charcoal mb-0.5">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-mutedText mb-2">
                    {step.subtitle}
                  </h4>
                  <p className="text-xs text-mutedText leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
