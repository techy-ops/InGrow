"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  IndianRupee,
  Zap,
  ArrowRight,
  TrendingUp,
  PieChart,
  Target,
  ArrowDown,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const AutomationFlow: React.FC = () => {
  const steps = [
    {
      label: "YOU",
      desc: "One-time setup in under 3 minutes",
      icon: User,
      badge: "Investor",
      color: "bg-forest text-warm",
    },
    {
      label: "Daily amount — ₹500",
      desc: "Choose an amount that feels comfortable",
      icon: IndianRupee,
      badge: "Configurable",
      color: "bg-warm-50 text-charcoal border border-charcoal/10",
    },
    {
      label: "AutoPay — ● Active",
      desc: "UPI recurring debit approved via your favorite UPI app",
      icon: Zap,
      badge: "Seamless Autopilot",
      color: "bg-forest-900 text-warm border border-forest-700",
    },
    {
      label: "Investment",
      desc: "Direct mutual-fund units allocated at official daily NAV",
      icon: PieChart,
      badge: "Direct Growth",
      color: "bg-warm-50 text-charcoal border border-charcoal/10",
    },
    {
      label: "Portfolio",
      desc: "Live daily valuations & disciplined compounding",
      icon: TrendingUp,
      badge: "Wealth Foundation",
      color: "bg-warm-50 text-charcoal border border-charcoal/10",
    },
    {
      label: "Goal",
      desc: "Milestones like travel, down payments, or freedom reached",
      icon: Target,
      badge: "Achieved",
      color: "bg-forest text-gold border border-forest-700",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="mint" size="md" className="mb-3">
            SEAMLESS ROUTING
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            Set it once. Let your habit do the rest.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
            Eliminate everyday willpower friction. Your money flows smoothly and systematically from your bank account directly into your future.
          </p>
        </div>

        {/* Desktop Progressive Flow (Horizontal Layout) */}
        <div className="hidden lg:grid grid-cols-6 gap-3 items-stretch relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Arrow connector between steps */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-1/4 -right-3.5 z-20 transform -translate-y-1/2 text-ingreen">
                    <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`w-full h-full rounded-2xl p-5 shadow-subtle flex flex-col justify-between text-center ${step.color}`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-xl bg-mint/20 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <Badge variant="subtle" size="sm" className="mb-2 text-[10px]">
                      {step.badge}
                    </Badge>
                    <h3 className="font-display font-bold text-sm sm:text-base leading-snug">
                      {step.label}
                    </h3>
                  </div>

                  <p className="text-[11px] opacity-75 mt-3 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile Progressive Flow (Vertical Layout) */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-2xl p-5 flex items-start gap-4 shadow-subtle ${step.color}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-mint/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="subtle" size="sm" className="text-[10px]">
                        {step.badge}
                      </Badge>
                    </div>
                    <h3 className="font-display font-bold text-base">
                      {step.label}
                    </h3>
                    <p className="text-xs opacity-75 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {idx < steps.length - 1 && (
                  <div className="flex justify-center py-0.5 text-forest/40">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link href="/signup">
            <Button
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Manage Your Investment →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
