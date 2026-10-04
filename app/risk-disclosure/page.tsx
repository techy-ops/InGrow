import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { AlertTriangle, AlertCircle, ShieldAlert } from "lucide-react";

// LEGAL REVIEW REQUIRED BEFORE PRODUCTION.
export const metadata: Metadata = {
  title: "Risk Disclosure — InGrow",
  description: "Comprehensive risk factors associated with mutual-fund investing and daily SIP habit models.",
};

export default function RiskDisclosurePage() {
  return (
    <div className="bg-warm min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <Badge variant="mint" size="md" className="mb-3">
            MANDATORY DISCLOSURE
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal tracking-tight">
            Risk Disclosure Document
          </h1>
          <p className="text-xs text-mutedText mt-2">
            Statutory Notice under SEBI (Mutual Funds) Regulations, 1996
          </p>
        </div>

        {/* Warning Banner */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-charcoal text-xs mb-10 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="block font-bold text-amber-900 mb-1">
              STATUTORY MARKET RISK NOTICE:
            </strong>
            Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future returns.
            <div className="mt-1 text-amber-800 font-medium">
              [LEGAL REVIEW REQUIRED BEFORE PRODUCTION: Full statutory legal disclosure text to be signed off by compliance officer.]
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal/8 shadow-subtle space-y-8 text-sm text-charcoal/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600" />
              1. Market & NAV Price Fluctuation Risk
            </h2>
            <p>
              Mutual funds invest across equity shares, debt instruments, and money market securities. The Net Asset Value (NAV) of schemes fluctuates continuously with daily trading movements in capital markets, interest rates, economic policies, and geopolitical events. There is no assurance or guarantee that a scheme&apos;s investment objectives will be achieved.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              2. Absence of Guaranteed Returns
            </h2>
            <p>
              No mutual fund scheme offered or accessible through InGrow offers assured, fixed, or guaranteed returns. Projections, calculators, compounding simulations, and historical charts available on this platform are strictly illustrative models. You may experience capital depreciation during adverse market periods.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              3. Liquidity & Redemption Settlement Timelines
            </h2>
            <p>
              While open-ended funds generally allow redemptions on any business day, redemptions are subject to standard SEBI settlement cycles (typically T+1 or T+2 days for equity funds and T+1 for debt funds). In exceptional market conditions, trading suspensions, or credit events, redemption settlement times may be extended pursuant to SEBI regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              4. Rupee-Cost Averaging Considerations
            </h2>
            <p>
              Daily micro-investing utilizes rupee-cost averaging, purchasing more units when NAVs are low and fewer units when NAVs are high. While this strategy mitigates timing risk over extended time horizons, it does not prevent losses in continuously declining markets.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              5. Taxation & Exit Loads
            </h2>
            <p>
              Mutual fund redemptions may incur capital gains tax (STCG / LTCG) depending on your holding period and tax slab, in accordance with the Indian Income Tax Act. Certain schemes may also charge an exit load if units are redeemed prior to a specified threshold (e.g. 1 year). Investors should review Scheme Information Documents (SID) for exact exit load structures.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
