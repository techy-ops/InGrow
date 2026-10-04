import React from "react";
import {
  Lock,
  Shield,
  KeyRound,
  EyeOff,
  FileCheck2,
  Bug,
} from "lucide-react";
import { SECURITY_FEATURES } from "@/lib/constants/mockData";
import { Badge } from "@/components/ui/Badge";

const ICON_MAP = [Lock, Shield, KeyRound, EyeOff, FileCheck2, Bug];

export const SecuritySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="mint" size="md" className="mb-3">
            RESPONSIBLE ARCHITECTURE
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            Security isn&apos;t a feature. It&apos;s the foundation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
            We build every layer of InGrow with deep respect for your privacy and financial security, following defense-in-depth principles.
          </p>
        </div>

        {/* 6 Security Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SECURITY_FEATURES.map((item, index) => {
            const Icon = ICON_MAP[index] || Shield;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-charcoal/8 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-forest/8 text-forest flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-mutedText/70">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal/6 flex items-center gap-1.5 text-[11px] text-forest font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-ingreen" />
                  <span>Defense-in-depth policy</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Compliance Source Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-mutedText max-w-xl mx-auto leading-relaxed">
            Security protocols and technical benchmarks are validated continuously. InGrow adheres strictly to Indian regulatory data residency guidelines.
          </p>
        </div>
      </div>
    </section>
  );
};
