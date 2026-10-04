"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Layers,
  Activity,
  ArrowRight,
  Filter,
} from "lucide-react";
import { formatINR } from "@/lib/calculations/compound";
import { MOCK_ACTIVITIES, MOCK_HOLDINGS, MOCK_PORTFOLIO } from "@/lib/constants/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface DashboardMockupSectionProps {
  isFullPage?: boolean;
}

export const DashboardMockupSection: React.FC<DashboardMockupSectionProps> = ({
  isFullPage = false,
}) => {
  const [activeTab, setActiveTab] = useState<"holdings" | "activity">("holdings");

  return (
    <section className={`bg-warm-100 ${isFullPage ? "py-10 sm:py-16" : "py-20 sm:py-28"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Badge variant="mint" size="md" className="mb-3">
            PORTFOLIO INTELLIGENCE
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            One place to understand your money.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
            Clean, distraction-free clarity. Review mutual-fund units, live NAV valuations, AutoPay debits, and performance without financial noise.
          </p>
        </div>

        {/* Realistic High-Fidelity Product Mockup Frame */}
        <div className="bg-white rounded-3xl sm:rounded-4xl border border-charcoal/10 shadow-floating overflow-hidden">
          {/* App Window Chrome / Header */}
          <div className="bg-warm-200/80 px-6 py-4 border-b border-charcoal/8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-charcoal/20 inline-block" />
              <span className="w-3 h-3 rounded-full bg-charcoal/20 inline-block" />
              <span className="w-3 h-3 rounded-full bg-charcoal/20 inline-block" />
              <span className="ml-3 text-xs font-mono font-medium text-mutedText hidden sm:inline">
                ingrow.in/app/investments
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="gold" size="sm" className="font-semibold text-[11px]">
                FICTIONAL DEMONSTRATION DATA
              </Badge>
            </div>
          </div>

          {/* Main Dashboard Body */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            {/* Top Value Cards Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Current Portfolio Value */}
              <div className="bg-warm-50 rounded-2xl p-6 border border-charcoal/6">
                <span className="text-xs uppercase font-bold tracking-wider text-mutedText block mb-1">
                  CURRENT VALUE
                </span>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal">
                  {formatINR(MOCK_PORTFOLIO.currentValue)}
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-ingreen-600 font-semibold">
                  <ArrowUpRight className="w-4 h-4" />
                  <span>+{formatINR(MOCK_PORTFOLIO.totalReturns)} total gain</span>
                </div>
              </div>

              {/* Card 2: Total Invested */}
              <div className="bg-warm-50 rounded-2xl p-6 border border-charcoal/6">
                <span className="text-xs uppercase font-bold tracking-wider text-mutedText block mb-1">
                  TOTAL INVESTED
                </span>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal">
                  {formatINR(MOCK_PORTFOLIO.investedAmount)}
                </div>
                <span className="mt-2 text-xs text-mutedText block">
                  Accumulated via ₹500/day daily habit
                </span>
              </div>

              {/* Card 3: Overall Returns */}
              <div className="bg-warm-50 rounded-2xl p-6 border border-charcoal/6">
                <span className="text-xs uppercase font-bold tracking-wider text-mutedText block mb-1">
                  TOTAL RETURNS
                </span>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-ingreen-600">
                  +{MOCK_PORTFOLIO.totalReturnsPercentage}%
                </div>
                <span className="mt-2 text-xs text-mutedText block">
                  Unrealized market-linked returns
                </span>
              </div>
            </div>

            {/* InGrow Selected Fund Spotlight Card */}
            <div className="bg-forest-900 text-warm rounded-3xl p-6 sm:p-8 border border-forest-700">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-forest-700/70">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="mint" size="sm">
                      Core Holding
                    </Badge>
                    <span className="text-xs text-mint/70 font-mono">
                      Scheme Code: INF109K012R6
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-warm">
                    InGrow Selected Fund
                  </h3>
                  <p className="text-xs text-mint/80 mt-1">
                    Direct Growth Plan • Nifty 50 Index Benchmark
                  </p>
                </div>

                <div className="flex items-baseline lg:items-end flex-col">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-warm">
                    ₹74,250
                  </div>
                  <div className="flex items-center gap-1 text-gold-light text-sm font-semibold">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+12.8%</span>
                  </div>
                </div>
              </div>

              {/* Fund Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 text-xs">
                <div>
                  <span className="text-mint/60 block">Units Allocated</span>
                  <span className="font-bold text-warm text-sm sm:text-base font-mono">
                    1,245.62
                  </span>
                </div>
                <div>
                  <span className="text-mint/60 block">Current NAV</span>
                  <span className="font-bold text-warm text-sm sm:text-base font-mono">
                    ₹59.61
                  </span>
                </div>
                <div>
                  <span className="text-mint/60 block">Daily Contribution</span>
                  <span className="font-bold text-warm text-sm sm:text-base">
                    ₹350/day
                  </span>
                </div>
                <div>
                  <span className="text-mint/60 block">Folio Status</span>
                  <span className="font-bold text-mint text-sm sm:text-base flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-mint" />
                    Active Mandate
                  </span>
                </div>
              </div>
            </div>

            {/* Holdings & Activity Tabs */}
            <div>
              <div className="flex items-center justify-between border-b border-charcoal/8 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("holdings")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      activeTab === "holdings"
                        ? "bg-forest text-warm shadow-xs"
                        : "text-mutedText hover:text-charcoal hover:bg-forest/5"
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    <span>Holdings ({MOCK_HOLDINGS.length})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("activity")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      activeTab === "activity"
                        ? "bg-forest text-warm shadow-xs"
                        : "text-mutedText hover:text-charcoal hover:bg-forest/5"
                    }`}
                  >
                    <Activity className="w-4 h-4" />
                    <span>Recent Daily AutoPay Activity</span>
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs text-mutedText">
                  <ShieldCheck className="w-3.5 h-3.5 text-ingreen" />
                  <span>Held with registered AMCs</span>
                </div>
              </div>

              {/* Tab 1: Holdings Table */}
              {activeTab === "holdings" && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-charcoal/8 text-xs uppercase font-bold text-mutedText">
                        <th className="py-3 px-3">Fund Name</th>
                        <th className="py-3 px-3">Category</th>
                        <th className="py-3 px-3 text-right">Units</th>
                        <th className="py-3 px-3 text-right">NAV</th>
                        <th className="py-3 px-3 text-right">Current Value</th>
                        <th className="py-3 px-3 text-right">Returns</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-charcoal/6">
                      {MOCK_HOLDINGS.map((fund) => (
                        <tr key={fund.id} className="hover:bg-warm-100/60 transition-colors">
                          <td className="py-4 px-3">
                            <span className="font-bold text-charcoal block">{fund.name}</span>
                            <span className="text-xs text-mutedText">{fund.fundHouse}</span>
                          </td>
                          <td className="py-4 px-3">
                            <Badge variant="subtle" size="sm">
                              {fund.category}
                            </Badge>
                          </td>
                          <td className="py-4 px-3 text-right font-mono text-xs text-charcoal">
                            {fund.units.toLocaleString()}
                          </td>
                          <td className="py-4 px-3 text-right font-mono text-xs text-charcoal">
                            ₹{fund.nav.toFixed(2)}
                          </td>
                          <td className="py-4 px-3 text-right font-bold text-charcoal font-display">
                            {formatINR(fund.currentValue)}
                          </td>
                          <td className="py-4 px-3 text-right font-semibold text-ingreen-600">
                            +{fund.returnsPercentage}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Tab 2: Activity Table */}
              {activeTab === "activity" && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-charcoal/8 text-xs uppercase font-bold text-mutedText">
                        <th className="py-3 px-3">Date & Time</th>
                        <th className="py-3 px-3">Transaction</th>
                        <th className="py-3 px-3">Fund</th>
                        <th className="py-3 px-3 text-right">Amount</th>
                        <th className="py-3 px-3 text-right">Units</th>
                        <th className="py-3 px-3 text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-charcoal/6">
                      {MOCK_ACTIVITIES.map((act) => (
                        <tr key={act.id} className="hover:bg-warm-100/60 transition-colors">
                          <td className="py-3.5 px-3 text-xs text-mutedText">
                            {act.date}
                          </td>
                          <td className="py-3.5 px-3 text-xs font-semibold text-charcoal">
                            {act.type === "DAILY_AUTOPAY" ? "UPI AutoPay SIP" : "Lump Sum Deposit"}
                          </td>
                          <td className="py-3.5 px-3 text-xs text-charcoal font-medium">
                            {act.fundName}
                          </td>
                          <td className="py-3.5 px-3 text-right font-bold text-charcoal font-display">
                            ₹{act.amount}
                          </td>
                          <td className="py-3.5 px-3 text-right text-xs font-mono text-charcoal">
                            +{act.unitsAllocated}
                          </td>
                          <td className="py-3.5 px-3 text-center">
                            <Badge variant="mint" size="sm">
                              Completed
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Bar with CTA & Disclaimer */}
          <div className="bg-warm-200/60 px-6 py-4 border-t border-charcoal/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-mutedText">
              *All values shown are fictional demonstration figures for product illustration only.
            </span>

            {!isFullPage && (
              <Link href="/investments">
                <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                  Explore Full Portfolio View
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
