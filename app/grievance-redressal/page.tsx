import React from "react";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { AlertCircle, LifeBuoy, Mail, Phone, ExternalLink } from "lucide-react";

// LEGAL REVIEW REQUIRED BEFORE PRODUCTION.
export const metadata: Metadata = {
  title: "Grievance Redressal Mechanism — InGrow",
  description: "3-tier escalation matrix for customer complaints and regulatory investor grievance resolution.",
};

export default function GrievanceRedressalPage() {
  return (
    <div className="bg-warm min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <Badge variant="mint" size="md" className="mb-3">
            INVESTOR SUPPORT
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-charcoal tracking-tight">
            Grievance Redressal Policy
          </h1>
          <p className="text-xs text-mutedText mt-2">
            Structured 3-tier escalation process for timely investor complaint resolution
          </p>
        </div>

        {/* Notice Banner */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs mb-10 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold mb-0.5">LEGAL REVIEW NOTICE:</strong>
            LEGAL REVIEW REQUIRED BEFORE PRODUCTION. The designated officer details and escalation timelines below will be formally updated upon deployment of the production customer service infrastructure.
          </div>
        </div>

        {/* Escalation Matrix Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal/8 shadow-subtle space-y-8 text-sm text-charcoal/80 leading-relaxed">
          <p>
            At InGrow, we are committed to transparent, fair, and prompt resolution of all investor complaints and queries. Below is our formal 3-tier escalation matrix:
          </p>

          {/* Level 1 */}
          <div className="bg-warm-50 rounded-2xl p-6 border border-charcoal/8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-forest font-display">
                LEVEL 1 — CUSTOMER SUPPORT HELP DESK
              </span>
              <Badge variant="mint" size="sm">
                Turnaround: 24–48 Hours
              </Badge>
            </div>
            <p className="text-xs text-mutedText">
              For initial issues concerning account access, OTP delivery, AutoPay mandate status, or portfolio synchronization:
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs font-medium text-charcoal">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest" />
                <span>support@ingrow.in</span>
              </div>
              <div className="flex items-center gap-2">
                <LifeBuoy className="w-4 h-4 text-forest" />
                <span>In-App Support Ticket Console</span>
              </div>
            </div>
          </div>

          {/* Level 2 */}
          <div className="bg-warm-50 rounded-2xl p-6 border border-charcoal/8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-forest font-display">
                LEVEL 2 — DESIGNATED GRIEVANCE OFFICER
              </span>
              <Badge variant="mint" size="sm">
                Turnaround: 3–5 Business Days
              </Badge>
            </div>
            <p className="text-xs text-mutedText">
              If your grievance has not been resolved satisfactorily at Level 1, or if you have not received a response within 48 hours, you may escalate directly to our Principal Grievance Officer:
            </p>
            <div className="bg-white p-4 rounded-xl border border-charcoal/6 text-xs space-y-1">
              <div><strong>Name:</strong> Compliance & Grievance Officer</div>
              <div><strong>Designation:</strong> Head of Regulatory Affairs & Investor Relations</div>
              <div><strong>Email:</strong> grievance@ingrow.in</div>
              <div><strong>Address:</strong> InGrow Technologies Pvt. Ltd., Bengaluru, Karnataka, India</div>
            </div>
          </div>

          {/* Level 3 */}
          <div className="bg-warm-50 rounded-2xl p-6 border border-charcoal/8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-forest font-display">
                LEVEL 3 — REGULATORY ESCALATION (SEBI SCORES)
              </span>
              <Badge variant="gold" size="sm">
                Statutory Escalation
              </Badge>
            </div>
            <p className="text-xs text-mutedText">
              If your complaint remains unresolved within 30 days after escalating through Level 1 and Level 2, you may lodge a complaint directly on the SEBI Complaints Redress System (SCORES) portal:
            </p>
            <div className="pt-1">
              <a
                href="https://scores.sebi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-forest underline hover:text-ingreen"
              >
                <span>Visit SEBI SCORES Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
