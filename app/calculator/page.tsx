import React from "react";
import type { Metadata } from "next";
import { Calculator } from "@/components/calculator/Calculator";
import { FutureYouSection } from "@/components/calculator/FutureYouSection";
import { ShieldCheck, Info, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Daily Mutual Fund SIP Calculator — InGrow",
  description:
    "Simulate the growth of daily mutual-fund investments over 3, 5, 10, 15, and 20 years with illustrative compounding rates.",
};

export default function CalculatorPage() {
  return (
    <div className="bg-warm min-h-screen">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 text-center">
        <Badge variant="mint" size="md" className="mb-3">
          FINANCIAL TOOL
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
          Daily Mutual Fund Compounding Calculator
        </h1>
        <p className="mt-4 text-base sm:text-lg text-mutedText max-w-2xl mx-auto leading-relaxed">
          See how daily discipline turns micro-savings into long-term wealth. Explore how adjusting your daily amount or investment horizon influences compounding.
        </p>
      </div>

      {/* Main Reusable Calculator Section */}
      <Calculator isFullPage={true} />

      {/* Educational Compounding Explanation Section */}
      <section className="py-16 sm:py-20 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal/8 shadow-subtle space-y-6">
            <h2 className="text-2xl font-bold font-display text-charcoal">
              How Does Daily Compounding Work?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-mutedText leading-relaxed">
              <div className="space-y-3">
                <h3 className="font-semibold text-charcoal flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ingreen" />
                  Rupee-Cost Averaging Every Day
                </h3>
                <p>
                  Instead of buying once a month and hoping market timing works in your favor, daily investing automatically averages your purchase NAV across all market ups and downs.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-charcoal flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ingreen" />
                  Formula & Mathematical Assumption
                </h3>
                <p>
                  Calculations assume daily deposits at the start of each day compounded at an illustrative annual rate. The annuity due formula yields the projected future value.
                </p>
              </div>
            </div>

            {/* Statutory Disclaimer */}
            <div className="p-4 rounded-2xl bg-warm-200/60 border border-charcoal/8 flex items-start gap-3">
              <Info className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <div className="text-xs text-mutedText leading-relaxed">
                <strong className="text-charcoal block mb-0.5">Statutory Disclaimer:</strong>
                Calculations shown are strictly for illustrative purposes based on user inputs and assumed annual growth rates. Mutual-fund returns are market-linked and not guaranteed. Past performance is not an indicator of future performance.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future You Timeline */}
      <FutureYouSection />
    </div>
  );
}
