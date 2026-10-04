import React from "react";
import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/hero/TrustStrip";
import { ValueProposition } from "@/components/hero/ValueProposition";
import { Calculator } from "@/components/calculator/Calculator";
import { GoalsSection } from "@/components/goals/GoalsSection";
import { DashboardMockupSection } from "@/components/investments/DashboardMockupSection";
import { AutomationFlow } from "@/components/how-it-works/AutomationFlow";
import { TransparencySection } from "@/components/security/TransparencySection";
import { SecuritySection } from "@/components/security/SecuritySection";
import { WhyInGrowSection } from "@/components/about/WhyInGrowSection";
import { FutureYouSection } from "@/components/calculator/FutureYouSection";
import { HowItWorksTimeline } from "@/components/how-it-works/HowItWorksTimeline";
import { MobileAppPreview } from "@/components/how-it-works/MobileAppPreview";
import { FAQSection } from "@/components/faq/FAQSection";
import { FinalCTA } from "@/components/hero/FinalCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Value Proposition */}
      <ValueProposition />

      {/* 4. Calculator */}
      <Calculator />

      {/* 5. Goals */}
      <GoalsSection />

      {/* 6. Investment Dashboard Mockup */}
      <DashboardMockupSection />

      {/* 7. Automation Flow */}
      <AutomationFlow />

      {/* 8. Transparency */}
      <TransparencySection />

      {/* 9. Security */}
      <SecuritySection />

      {/* 10. Why InGrow */}
      <WhyInGrowSection />

      {/* 11. Future You */}
      <FutureYouSection />

      {/* 12. How It Works */}
      <HowItWorksTimeline />

      {/* 13. Mobile App Preview */}
      <MobileAppPreview />

      {/* 14. FAQ */}
      <FAQSection />

      {/* 15. Final CTA */}
      <FinalCTA />
    </div>
  );
}
