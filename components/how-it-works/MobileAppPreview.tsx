"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatINR } from "@/lib/calculations/compound";

export const MobileAppPreview: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-warm-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="mint" size="md" className="mb-3">
            MOBILE WEB & INTERFACE
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            Your investing habit, in your pocket.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
            Engineered with the polish and responsiveness of modern fintech. Track, pause, or adjust your investments anytime from your browser.
          </p>
        </div>

        {/* 3 Smartphone Mockups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto items-center">
          {/* Phone Mockup 1: Home Dashboard */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xs mx-auto bg-charcoal rounded-[44px] p-3 shadow-floating border-4 border-charcoal/80"
          >
            {/* Screen Inner */}
            <div className="bg-warm rounded-[36px] overflow-hidden p-5 flex flex-col justify-between min-h-[520px] text-charcoal border border-charcoal/10">
              {/* Dynamic Island / Notch */}
              <div className="w-24 h-4 bg-charcoal rounded-full mx-auto mb-4" />

              {/* Screen Content: Home */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-forest">INGROW</span>
                  <div className="w-7 h-7 rounded-full bg-forest/10 flex items-center justify-center text-forest text-xs font-bold">
                    JD
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-charcoal/6 shadow-subtle">
                  <span className="text-[10px] uppercase font-bold text-mutedText block">
                    TOTAL ACCUMULATED
                  </span>
                  <div className="text-2xl font-bold font-display text-charcoal mt-0.5">
                    ₹1,24,560
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-ingreen-600 font-semibold mt-1">
                    <ArrowUpRight className="w-3 h-3" />
                    <span>+₹14,560 (+13.2%)</span>
                  </div>
                </div>

                {/* AutoPay widget */}
                <div className="bg-forest text-warm rounded-2xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold">AutoPay Active</span>
                    <span className="w-2 h-2 rounded-full bg-mint" />
                  </div>
                  <div className="text-base font-bold font-display">₹500 / day</div>
                  <span className="text-[10px] text-mint/70 block">
                    Next debit: Tomorrow, 6:00 AM
                  </span>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-charcoal/6 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-forest" />
                    <span className="font-medium text-charcoal">Streak</span>
                  </div>
                  <span className="font-bold text-forest">214 Days</span>
                </div>
              </div>

              {/* Bottom Nav Mock */}
              <div className="pt-3 border-t border-charcoal/8 flex justify-around text-mutedText text-[10px]">
                <span className="font-bold text-forest">Home</span>
                <span>Invest</span>
                <span>Goals</span>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup 2: Investment Portfolio (Highlighted) */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xs mx-auto bg-charcoal rounded-[44px] p-3 shadow-floating border-4 border-forest transform md:-translate-y-4"
          >
            {/* Screen Inner */}
            <div className="bg-forest-900 rounded-[36px] overflow-hidden p-5 flex flex-col justify-between min-h-[550px] text-warm border border-forest-700">
              {/* Dynamic Island */}
              <div className="w-24 h-4 bg-charcoal-dark rounded-full mx-auto mb-4" />

              {/* Screen Content: Portfolio */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-mint">PORTFOLIO</span>
                  <Badge variant="mint" size="sm" className="text-[9px]">
                    Direct Plan
                  </Badge>
                </div>

                <div>
                  <span className="text-[10px] text-mint/70 block uppercase">
                    Core Holdings
                  </span>
                  <div className="text-2xl font-bold font-display text-warm mt-0.5">
                    ₹74,250
                  </div>
                  <span className="text-[11px] text-gold font-semibold">
                    +12.8% Returns
                  </span>
                </div>

                {/* Mini chart in mockup */}
                <div className="h-16 w-full flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <path
                      d="M 0 35 Q 25 30, 50 18 T 100 5"
                      fill="none"
                      stroke="#DDF5EA"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>

                {/* Holding item */}
                <div className="bg-forest-800 rounded-2xl p-3 border border-forest-700 space-y-1">
                  <span className="text-xs font-bold text-warm block">
                    InGrow Index Fund
                  </span>
                  <div className="flex justify-between text-[11px] text-mint/70">
                    <span>1,245.62 units</span>
                    <span>NAV: ₹59.61</span>
                  </div>
                </div>

                <div className="bg-forest-800 rounded-2xl p-3 border border-forest-700 space-y-1">
                  <span className="text-xs font-bold text-warm block">
                    Flexi-Cap Growth
                  </span>
                  <div className="flex justify-between text-[11px] text-mint/70">
                    <span>382.40 units</span>
                    <span>NAV: ₹84.20</span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Mock */}
              <div className="pt-3 border-t border-forest-700/60 flex justify-around text-mint/60 text-[10px]">
                <span>Home</span>
                <span className="font-bold text-mint">Invest</span>
                <span>Goals</span>
              </div>
            </div>
          </motion.div>

          {/* Phone Mockup 3: Goal Tracking */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xs mx-auto bg-charcoal rounded-[44px] p-3 shadow-floating border-4 border-charcoal/80"
          >
            {/* Screen Inner */}
            <div className="bg-warm rounded-[36px] overflow-hidden p-5 flex flex-col justify-between min-h-[520px] text-charcoal border border-charcoal/10">
              {/* Dynamic Island */}
              <div className="w-24 h-4 bg-charcoal rounded-full mx-auto mb-4" />

              {/* Screen Content: Goals */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-forest">GOALS</span>
                  <span className="text-xs font-bold text-charcoal">4 Active</span>
                </div>

                {/* Goal 1 */}
                <div className="bg-white rounded-2xl p-3.5 border border-charcoal/6 shadow-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-charcoal">Europe Trip</span>
                    <span className="text-xs font-bold text-forest">62%</span>
                  </div>
                  <div className="w-full h-2 bg-charcoal/10 rounded-full overflow-hidden">
                    <div className="h-full bg-ingreen rounded-full w-[62%]" />
                  </div>
                  <span className="text-[10px] text-mutedText block">
                    ₹1,86,000 of ₹3,00,000
                  </span>
                </div>

                {/* Goal 2 */}
                <div className="bg-white rounded-2xl p-3.5 border border-charcoal/6 shadow-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-charcoal">New iPhone</span>
                    <span className="text-xs font-bold text-forest">74%</span>
                  </div>
                  <div className="w-full h-2 bg-charcoal/10 rounded-full overflow-hidden">
                    <div className="h-full bg-ingreen rounded-full w-[74%]" />
                  </div>
                  <span className="text-[10px] text-mutedText block">
                    ₹1,11,000 of ₹1,50,000
                  </span>
                </div>

                {/* Goal 3 */}
                <div className="bg-white rounded-2xl p-3.5 border border-charcoal/6 shadow-subtle space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-charcoal">New Car</span>
                    <span className="text-xs font-bold text-forest">28%</span>
                  </div>
                  <div className="w-full h-2 bg-charcoal/10 rounded-full overflow-hidden">
                    <div className="h-full bg-ingreen rounded-full w-[28%]" />
                  </div>
                  <span className="text-[10px] text-mutedText block">
                    ₹2,80,000 of ₹10,00,000
                  </span>
                </div>
              </div>

              {/* Bottom Nav Mock */}
              <div className="pt-3 border-t border-charcoal/8 flex justify-around text-mutedText text-[10px]">
                <span>Home</span>
                <span>Invest</span>
                <span className="font-bold text-forest">Goals</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
