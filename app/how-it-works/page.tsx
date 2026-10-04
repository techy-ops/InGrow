import React from "react";
import type { Metadata } from "next";
import { HowItWorksTimeline } from "@/components/how-it-works/HowItWorksTimeline";
import { AutomationFlow } from "@/components/how-it-works/AutomationFlow";
import { MobileAppPreview } from "@/components/how-it-works/MobileAppPreview";
import { FAQSection } from "@/components/faq/FAQSection";
import { FinalCTA } from "@/components/hero/FinalCTA";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "How InGrow Works — Step-by-Step Daily Mutual Fund Investing",
  description:
    "Learn how InGrow enables automated daily mutual-fund micro-investing with UPI AutoPay, regulated infrastructure, and goal tracking.",
};

export default function HowItWorksPage() {
  return (
    <div className="bg-warm min-h-screen">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4 text-center">
        <Badge variant="mint" size="md" className="mb-3">
          SYSTEM WALKTHROUGH
        </Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
          How InGrow Works
        </h1>
        <p className="mt-4 text-base sm:text-lg text-mutedText max-w-2xl mx-auto leading-relaxed">
          From paperless KYC to daily automated micro-SIPs. Understand how simple and disciplined long-term investing can be.
        </p>
      </div>

      {/* 4-Step Timeline */}
      <HowItWorksTimeline isFullPage={true} />

      {/* Automation Flow */}
      <AutomationFlow />

      {/* Mobile App Preview */}
      <MobileAppPreview />

      {/* FAQ Accordion */}
      <FAQSection />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
