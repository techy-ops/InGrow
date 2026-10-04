import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle } from "lucide-react";

// LEGAL REVIEW REQUIRED BEFORE PRODUCTION.
export const metadata: Metadata = {
  title: "Terms and Conditions — InGrow",
  description: "Terms of use governing access to the InGrow automated mutual-fund investing platform.",
};

export default function TermsPage() {
  return (
    <div className="bg-warm min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <Badge variant="mint" size="md" className="mb-3">
            LEGAL AGREEMENT
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs text-mutedText mt-2">
            Last Updated: October 2026 • Status: Draft Terms Framework
          </p>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs mb-10 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-0.5">LEGAL REVIEW NOTICE:</strong>
            LEGAL REVIEW REQUIRED BEFORE PRODUCTION. These terms outline user rights, platform obligations, and investment execution boundaries for demonstration purposes.
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal/8 shadow-subtle space-y-8 text-sm text-charcoal/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              1. Platform Nature & Scope
            </h2>
            <p>
              InGrow Technologies Pvt. Ltd. provides a technological interface enabling Indian residents to automate recurring mutual-fund investments. InGrow does not hold customer funds in proprietary accounts, act as a mutual-fund depository, or guarantee capital protection.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              2. User Eligibility & KYC Requirements
            </h2>
            <p>
              To use InGrow, you must be at least 18 years of age, an Indian resident or eligible Non-Resident Indian (NRI), and hold a valid Permanent Account Number (PAN) along with an active bank account in your name. You agree to submit truthful identity information for regulatory KRA checks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              3. UPI AutoPay Mandates & Recurring Debits
            </h2>
            <p>
              By configuring a daily recurring investment amount, you authorize InGrow and its partner payment aggregators to initiate automated UPI debit requests against your designated bank account. You retain the right to modify, pause, or revoke this mandate at any time directly through the InGrow dashboard or your UPI application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              4. Execution Timing & Cut-off Hours
            </h2>
            <p>
              Daily mutual fund transactions are processed in accordance with SEBI circulars and AMC cut-off guidelines. Applicable NAV allocations depend strictly on the time funds are realized by the respective Mutual Fund Scheme accounts. InGrow shall not be held liable for bank-side gateway downtime, network delays, or clearing delays.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              5. Disclaimers & Limitation of Liability
            </h2>
            <p>
              Mutual fund investments are subject to market risks. InGrow provides informational tools and execution technology and does not offer guaranteed investment returns. To the maximum extent permitted by applicable law, InGrow shall not be liable for indirect, incidental, or consequential losses arising from market movements.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
