import React from "react";
import type { Metadata } from "next";
import { GoalsSection } from "@/components/goals/GoalsSection";
import { Badge } from "@/components/ui/Badge";
import { Target, Compass, Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Goal-Based Mutual Fund Investing — InGrow",
  description:
    "Set tangible targets like vacations, gadgets, cars, or home down payments and track daily progress with automated micro-investments.",
};

export default function GoalsPage() {
  return (
    <div className="bg-warm min-h-screen">
      {/* Intro Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 text-center">
        <Badge variant="mint" size="md" className="mb-3">
          PURPOSE-DRIVEN WEALTH
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
          Your Financial Goals
        </h1>
        <p className="mt-4 text-base sm:text-lg text-mutedText max-w-2xl mx-auto leading-relaxed">
          Investing with a destination in mind transforms vague saving into focused daily momentum. Connect your goals to disciplined daily mutual-fund investments.
        </p>
      </div>

      {/* Main Interactive Goals Management Section */}
      <GoalsSection isFullPage={true} />

      {/* Best Practices Section */}
      <section className="py-16 sm:py-20 bg-warm-100 border-t border-charcoal/8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-charcoal">
              How InGrow Helps You Reach Your Milestones
            </h2>
            <p className="mt-2 text-sm text-mutedText">
              Simple principles to turn aspirations into reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-charcoal/8 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-forest/8 text-forest flex items-center justify-center">
                <Compass className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-base text-charcoal">
                Micro-Milestone Tracking
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Rather than feeling intimidated by large lump-sums, your target is broken down into modest, comfortable daily steps.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-charcoal/8 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-forest/8 text-forest flex items-center justify-center">
                <Sparkles className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-base text-charcoal">
                Flexible Priority Allocations
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Reprioritize anytime. Direct more daily funds toward urgent goals or pause lower-priority milestones when needs change.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-charcoal/8 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-forest/8 text-forest flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 stroke-[2]" />
              </div>
              <h3 className="font-display font-bold text-base text-charcoal">
                Market-Linked Estimates
              </h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Calculations are always realistic estimates based on market benchmarks. We never guarantee timelines or fixed returns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
