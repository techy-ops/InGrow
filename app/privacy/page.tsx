import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, AlertCircle } from "lucide-react";

// LEGAL REVIEW REQUIRED BEFORE PRODUCTION.
export const metadata: Metadata = {
  title: "Privacy Policy — InGrow",
  description: "InGrow's data protection, confidentiality policies, and privacy disclosures.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-warm min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <Badge variant="mint" size="md" className="mb-3">
            LEGAL & COMPLIANCE
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-mutedText mt-2">
            Last Updated: October 2026 • Status: Draft Policy Framework
          </p>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs mb-10 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-0.5">LEGAL REVIEW NOTICE:</strong>
            The text below constitutes placeholder policy structure for platform architecture demonstration. Complete formal legal review by regulatory counsel is required before commercial production launch.
          </div>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal/8 shadow-subtle space-y-8 text-sm text-charcoal/80 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              1. Information We Collect
            </h2>
            <p>
              InGrow collects minimal necessary information to fulfill legal KYC requirements under SEBI (Mutual Funds) Regulations and the Prevention of Money Laundering Act (PMLA). This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-mutedText">
              <li>Contact Details: Mobile phone number and email address.</li>
              <li>Identity & Tax Details: Permanent Account Number (PAN) and Date of Birth for verification against registered KRAs (KYC Registration Agencies).</li>
              <li>Financial Data: Bank account number and IFSC code for routing daily AutoPay investments and redemptions.</li>
              <li>Technical Identifiers: IP addresses, device identifiers, and session telemetry used strictly for fraud prevention.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              2. How Your Information is Used
            </h2>
            <p>
              We process personal data solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-mutedText">
              <li>Create and service your investment mandates with Asset Management Companies (AMCs) and RTAs.</li>
              <li>Authenticate your recurring UPI AutoPay mandates via NPCI and partner payment aggregators.</li>
              <li>Deliver required transaction receipts, statutory notices, and folio valuation summaries.</li>
              <li>Comply with Indian regulatory, judicial, and tax reporting requirements.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              3. Data Sharing & Third Parties
            </h2>
            <p>
              InGrow does NOT sell, rent, or commercialize your personal information to third-party marketing companies, advertisers, or loan brokers. Information is shared strictly with regulated capital market participants:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-mutedText">
              <li>Registered AMCs and RTAs (such as CAMS / KFintech) for unit allocation.</li>
              <li>NPCI and your sponsor bank for UPI AutoPay execution.</li>
              <li>SEBI-registered KRAs for one-time paperless KYC verification.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              4. Data Retention & Security
            </h2>
            <p>
              Customer records are encrypted at rest using industry-standard AES-256 and transmitted exclusively over TLS 1.3 encrypted connections. As mandated by Indian financial regulations, transaction and KYC records are retained for the statutory period following account closure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold font-display text-charcoal">
              5. Grievance Officer & Contact
            </h2>
            <p>
              If you have inquiries regarding your personal data or wish to exercise data rights under applicable Indian privacy laws, please reach our Grievance Officer at{" "}
              <a href="mailto:grievance@ingrow.in" className="text-forest font-semibold underline">
                grievance@ingrow.in
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
