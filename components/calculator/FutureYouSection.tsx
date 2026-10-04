"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const FutureYouSection: React.FC = () => {
  const milestones = [
    {
      timeframe: "TODAY",
      headline: "Start your habit.",
      subhead: "The biggest step is taking action.",
      desc: "Complete your paperless KYC, approve a ₹250 or ₹500 AutoPay mandate, and make today Day 1 of your long-term wealth habit.",
      color: "border-mint/30 bg-forest-800",
    },
    {
      timeframe: "1 YEAR",
      headline: "Routine is established.",
      subhead: "365 small contributions completed.",
      desc: "Investing has shifted from an active decision to an effortless daily habit. You now possess a solid emergency buffer and growing corpus.",
      color: "border-mint/40 bg-forest-800",
    },
    {
      timeframe: "5 YEARS",
      headline: "Compounding takes flight.",
      subhead: "More time for your money to work.",
      desc: "Market cycles have smoothed out your daily purchase NAVs. Compounded returns begin outpacing your annual fresh contributions.",
      color: "border-mint/50 bg-forest-800",
    },
    {
      timeframe: "10 YEARS",
      headline: "Long-term goals look different.",
      subhead: "Transformative financial security.",
      desc: "What started as spare daily pocket change has grown into meaningful independence—funding dreams, home ownership, or financial peace.",
      color: "border-gold/40 bg-forest-800",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-forest-900 text-warm relative overflow-hidden">
      {/* Background subtle ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-ingreen/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Badge variant="mint" size="md" className="mb-3">
            HORIZON & PERSPECTIVE
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-warm tracking-tight">
            Meet the version of you who started today.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mint/80 max-w-xl mx-auto leading-relaxed">
            “Consistency is powerful. Give your money time to work.”
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {milestones.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl p-6 sm:p-7 border ${item.color} backdrop-blur-md flex flex-col justify-between hover:-translate-y-1 transition-all duration-200`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant={index === 3 ? "gold" : "mint"} size="sm" className="font-bold">
                    {item.timeframe}
                  </Badge>
                  <Clock className="w-4 h-4 text-mint/50" />
                </div>

                <h3 className="font-display font-bold text-xl text-warm mb-1">
                  {item.headline}
                </h3>
                <p className="text-xs font-semibold text-mint/80 mb-3">
                  {item.subhead}
                </p>
                <p className="text-xs text-mint/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-forest-700/60 flex items-center gap-1.5 text-[11px] text-mint/60">
                <Sparkles className="w-3.5 h-3.5 text-gold-light" />
                <span>Market-linked compounding</span>
              </div>
            </div>
          ))}
        </div>

        {/* Realistic Advisory Reminder */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-mint/60 leading-relaxed">
            Market investments do not grow in straight linear lines. Long-term consistency allows rupee-cost averaging to work in your favor during market fluctuations.
          </p>

          <div className="mt-8">
            <Link href="/signup">
              <Button
                variant="gold"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
              >
                Start Investing Today →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
