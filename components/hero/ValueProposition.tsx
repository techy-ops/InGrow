"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Target, TrendingUp, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export const ValueProposition: React.FC = () => {
  const [selectedDemoAmount, setSelectedDemoAmount] = useState<number>(500);

  const amounts = [100, 250, 500, 1000];

  return (
    <section className="py-20 sm:py-28 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="mint" size="md" className="mb-3">
            THE HABIT OF COMPOUNDING
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            Small amounts. Big intentions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
            Big financial decisions often cause hesitation. Daily micro-investing removes decision fatigue by transforming investing into a seamless background ritual.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 01 — Choose Your Amount */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/8 shadow-subtle hover:shadow-floating flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest font-display block mb-3">
                01 — CHOOSE YOUR AMOUNT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal mb-3">
                Start with what feels effortless.
              </h3>
              <p className="text-sm text-mutedText leading-relaxed mb-6">
                Pick a micro-amount you won’t even miss from your daily spending. Scale up or down anytime.
              </p>

              {/* Amount Selector Visual */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {amounts.map((amt) => {
                  const isSelected = selectedDemoAmount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedDemoAmount(amt)}
                      className={cn(
                        "py-3 px-3 rounded-2xl text-center font-display font-bold transition-all text-sm sm:text-base border",
                        isSelected
                          ? "bg-forest text-warm border-forest shadow-sm"
                          : "bg-warm-100 hover:bg-forest/5 text-charcoal border-charcoal/10"
                      )}
                    >
                      ₹{amt}
                      <span className="text-xs font-normal opacity-80 block">/day</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-warm-200/60 rounded-2xl p-3.5 text-xs text-charcoal/80 flex items-center justify-between">
              <span>Approx. monthly</span>
              <span className="font-bold text-forest font-display">
                ≈ ₹{(selectedDemoAmount * 30).toLocaleString("en-IN")}/mo
              </span>
            </div>
          </motion.div>

          {/* Card 02 — Automate It */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/8 shadow-subtle hover:shadow-floating flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest font-display block mb-3">
                02 — AUTOMATE IT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal mb-3">
                Turn on UPI AutoPay.
              </h3>
              <p className="text-sm text-mutedText leading-relaxed mb-6">
                One-time approval via Google Pay, PhonePe, or BHIM. Every morning, your investment is automatically executed.
              </p>

              {/* AutoPay Visual Element */}
              <div className="bg-forest-900 text-warm rounded-2xl p-4 sm:p-5 border border-forest-700 space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-mint flex items-center justify-center text-forest font-bold text-xs">
                      <Zap className="w-4 h-4 text-forest" />
                    </div>
                    <span className="text-xs font-semibold text-warm">UPI Recurring Mandate</span>
                  </div>
                  <Badge variant="mint" size="sm" className="text-[10px]">
                    ● Active
                  </Badge>
                </div>

                <div className="pt-2 border-t border-forest-700/60 flex justify-between text-xs">
                  <span className="text-mint/70">Frequency</span>
                  <span className="font-semibold text-warm">Daily at 06:00 AM</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-mint/70">Limit authorized</span>
                  <span className="font-semibold text-warm">₹5,000 / day</span>
                </div>
              </div>
            </div>

            <div className="bg-mint/40 rounded-2xl p-3.5 text-xs text-forest font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-ingreen shrink-0" />
              <span>Zero manual PINs required daily</span>
            </div>
          </motion.div>

          {/* Card 03 — Keep Growing */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/8 shadow-subtle hover:shadow-floating flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-forest font-display block mb-3">
                03 — KEEP GROWING
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-charcoal mb-3">
                Track goals effortlessly.
              </h3>
              <p className="text-sm text-mutedText leading-relaxed mb-6">
                Watch small everyday drops accumulate into substantial goal milestones with crystal clear progress tracking.
              </p>

              {/* Goal Progress Visual */}
              <div className="bg-warm-100 rounded-2xl p-4 border border-charcoal/8 space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-forest text-gold flex items-center justify-center">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-charcoal">Europe Trip 2027</span>
                  </div>
                  <span className="font-bold text-forest">62%</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2.5 bg-charcoal/10 rounded-full overflow-hidden">
                  <div className="h-full bg-ingreen rounded-full w-[62%]" />
                </div>

                <div className="flex justify-between text-[11px] text-mutedText">
                  <span>₹1,86,000 saved</span>
                  <span>Target: ₹3,00,000</span>
                </div>
              </div>
            </div>

            <div className="bg-warm-200/60 rounded-2xl p-3.5 text-xs text-charcoal/80 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-ingreen shrink-0" />
              <span>All units allocated directly in your name</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
