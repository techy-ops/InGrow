import React from "react";
import { Shield, Eye, RefreshCw, Target } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Secure infrastructure",
      description: "Direct bank mandate routing with end-to-end encryption",
    },
    {
      icon: Eye,
      title: "Transparent investing",
      description: "Zero hidden charges. Units held directly in your legal folio",
    },
    {
      icon: RefreshCw,
      title: "Automated contributions",
      description: "Daily micro-SIPs via authorized UPI AutoPay",
    },
    {
      icon: Target,
      title: "Goal-based investing",
      description: "Map daily micro-investments to real-world milestones",
    },
  ];

  return (
    <section className="py-12 bg-warm-200/60 border-y border-charcoal/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs uppercase tracking-wider font-bold text-forest mb-1.5">
            OUR PROMISE
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal tracking-tight">
            Designed for simple, disciplined investing.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-warm rounded-2xl p-5 border border-charcoal/6 shadow-subtle hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-forest/10 flex items-center justify-center text-forest mb-3.5">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>
                <h3 className="font-display font-bold text-charcoal text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-mutedText leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
