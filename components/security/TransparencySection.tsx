import React from "react";
import { User, Smartphone, Building2, Landmark, CheckCircle, Info, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const TransparencySection: React.FC = () => {
  const nodes = [
    {
      label: "YOU",
      desc: "Authorized mandate holder with 100% control",
      icon: User,
    },
    {
      label: "INGROW PLATFORM",
      desc: "Smart habit layer, portfolio tracking & UI",
      icon: Smartphone,
    },
    {
      label: "APPROPRIATE REGULATED / PARTNER INFRASTRUCTURE",
      desc: "Licensed payment aggregators & NPCI UPI AutoPay",
      icon: Landmark,
    },
    {
      label: "MUTUAL FUND / AMC",
      desc: "SEBI-regulated asset management companies",
      icon: Building2,
    },
    {
      label: "YOUR INVESTMENT",
      desc: "Folio registered directly in your legal name",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-warm-200/50 border-t border-charcoal/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="mint" size="md" className="mb-3">
            RADICAL TRANSPARENCY
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            Know where your money goes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
            InGrow never holds customer funds in proprietary company accounts. Your money flows straight to regulated institutional entities.
          </p>
        </div>

        {/* Visual Pipeline Architecture */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal/8 shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {nodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-4 rounded-2xl bg-warm border border-charcoal/6 relative">
                  {/* Connector Arrow on md+ */}
                  {index < nodes.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-ingreen">
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  )}

                  <div className="w-12 h-12 rounded-2xl bg-forest/8 text-forest flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="font-display font-bold text-xs sm:text-sm text-charcoal mb-1.5 uppercase tracking-wide">
                    {node.label}
                  </h3>

                  <p className="text-xs text-mutedText leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Conceptual Operational Clarification Note */}
          <div className="mt-8 p-4 rounded-2xl bg-warm-100 border border-charcoal/8 flex items-start gap-3">
            <Info className="w-5 h-5 text-forest shrink-0 mt-0.5" />
            <div className="text-xs text-mutedText leading-relaxed">
              <strong className="text-charcoal block mb-0.5">Architecture Disclosure:</strong>
              This diagram is a conceptual representation of fund and data flow. Specific payment aggregator relationships, clearing corporations, BSE Star MF / NSE NMF II routing, and RTA integrations are governed by actual legal and operational infrastructure agreements prior to live commercial transactions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
