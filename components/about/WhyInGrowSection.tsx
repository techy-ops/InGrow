import React from "react";
import { WHY_INGROW_CARDS } from "@/lib/constants/mockData";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Sparkles, Zap, Target, Eye } from "lucide-react";

const ICON_MAP = [Sparkles, Zap, Target, Eye];

export const WhyInGrowSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="mint" size="md" className="mb-3">
            THE INGROW PHILOSOPHY
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
            Most financial apps push loans, speculative stock trading, insurance, and high-frequency noise. We built the exact opposite: an unhurried, calm place to invest every day.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_INGROW_CARDS.map((card, idx) => {
            const Icon = ICON_MAP[idx] || CheckCircle2;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-charcoal/8 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-forest/8 text-forest flex items-center justify-center">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <Badge variant="subtle" size="sm" className="text-[10px]">
                      {card.badge}
                    </Badge>
                  </div>

                  <h3 className="font-display font-black text-xl text-charcoal tracking-wide mb-1">
                    {card.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-forest mb-3">
                    {card.tagline}
                  </h4>
                  <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal/6 flex items-center gap-1.5 text-xs text-charcoal/70">
                  <CheckCircle2 className="w-3.5 h-3.5 text-ingreen" />
                  <span>No trading terminals</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
