import React from "react";
import type { Metadata } from "next";
import { DashboardMockupSection } from "@/components/investments/DashboardMockupSection";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Investment Portfolio & Holdings — InGrow",
  description:
    "Review your daily mutual-fund investments, NAV valuations, asset allocation, and AutoPay transaction history.",
};

export default function InvestmentsPage() {
  return (
    <div className="bg-warm min-h-screen">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 text-center">
        <Badge variant="mint" size="md" className="mb-3">
          INVESTOR CONSOLE
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
          Your Mutual Fund Portfolio
        </h1>
        <p className="mt-4 text-base sm:text-lg text-mutedText max-w-2xl mx-auto leading-relaxed">
          Real-time visibility into your accumulated units, scheme performance, and recurring UPI AutoPay executions.
        </p>
      </div>

      {/* Main Portfolio Dashboard Mockup Section */}
      <DashboardMockupSection isFullPage={true} />

      {/* Statutory Regulatory Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="p-4 rounded-2xl bg-white border border-charcoal/8 shadow-subtle flex items-start gap-3 text-xs text-mutedText leading-relaxed">
          <Info className="w-5 h-5 text-forest shrink-0 mt-0.5" />
          <div>
            <strong className="text-charcoal block mb-0.5">Demonstration Portfolio Notice:</strong>
            All holdings, NAVs, and return figures displayed on this page are simulated demonstration data for platform evaluation. In live operation, your folio statements and CAS (Consolidated Account Statements) are issued directly by CAMS / KFintech and partner AMCs.
          </div>
        </div>
      </div>
    </div>
  );
}
