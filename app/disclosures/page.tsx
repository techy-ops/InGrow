import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle, Landmark, ShieldCheck } from "lucide-react";

// LEGAL REVIEW REQUIRED BEFORE PRODUCTION.
export const metadata: Metadata = {
  title: "Regulatory Disclosures — InGrow",
  description: "Mandatory corporate disclosures, operational model transparency, and intermediary status.",
};

export default function DisclosuresPage() {
  return (
    <div className="bg-warm min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <Badge variant="mint" size="md" className="mb-3">
            COMPLIANCE DISCLOSURES
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal tracking-tight">
            Regulatory Disclosures
          </h1>
          <p className="text-xs text-mutedText mt-2">
            Transparency on operating model, partnerships, and intermediary classification
          </p>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs mb-10 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-0.5">LEGAL REVIEW NOTICE:</strong>
            LEGAL REVIEW REQUIRED BEFORE PRODUCTION. InGrow operates as a technology facilitator. Final registration details (AMFI Registration Number / RIA / Execution Only Platform license) will be finalized prior to live transaction processing.
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal/8 shadow-subtle space-y-8 text-sm text-charcoal/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal flex items-center gap-2">
              <Landmark className="w-5 h-5 text-forest" />
              1. Platform Status & Entity Information
            </h2>
            <p>
              InGrow Technologies Pvt. Ltd. is a technology platform registered in India. The platform facilitates order instruction routing and AutoPay mandate generation between verified retail investors and authorized mutual-fund intermediaries / AMCs.
            </p>
            <div className="bg-warm-100 p-4 rounded-2xl border border-charcoal/6 text-xs space-y-1">
              <div><strong>Registered Office:</strong> Bengaluru, Karnataka, India</div>
              <div><strong>Corporate Identification:</strong> Draft Incorporation In-Progress</div>
              <div><strong>Compliance Email:</strong> compliance@ingrow.in</div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              2. Mutual Fund Scheme Categorization
            </h2>
            <p>
              All schemes displayed on InGrow are registered with the Securities and Exchange Board of India (SEBI). Investments are placed in <strong>Direct Plans</strong> without distributor commissions, ensuring that investors benefit from lower expense ratios and enhanced long-term compounding.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              3. Non-Custodial Money Flow Model
            </h2>
            <p>
              InGrow does NOT take custody of client funds or client securities at any stage. When a daily AutoPay debit occurs, your funds are routed directly via NPCI clearing networks and licensed payment aggregators to the designated Bank Account of the Mutual Fund Scheme. Mutual fund units are allotted by the respective AMC / RTA directly to your individual folio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              4. Absence of Advisory or Speculative Recommendations
            </h2>
            <p>
              Any curated lists, categories, or index funds highlighted on InGrow are organized based on objective diversification criteria and public scheme data. InGrow does not provide personalized investment advisory services, stock tips, derivative recommendations, or guaranteed price targets.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
