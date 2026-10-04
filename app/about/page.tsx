import React from "react";
import type { Metadata } from "next";
import { WhyInGrowSection } from "@/components/about/WhyInGrowSection";
import { SecuritySection } from "@/components/security/SecuritySection";
import { Badge } from "@/components/ui/Badge";
import { Mail, MapPin, ShieldCheck, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About InGrow — Our Mission & Philosophy",
  description:
    "Learn about InGrow's mission to make disciplined mutual-fund investing accessible through daily automated micro-investments.",
};

export default function AboutPage() {
  return (
    <div className="bg-warm min-h-screen">
      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        <Badge variant="mint" size="md" className="mb-4">
          OUR MISSION
        </Badge>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-charcoal tracking-tight max-w-4xl mx-auto leading-tight">
          Investing shouldn&apos;t feel complicated.
        </h1>
        <p className="mt-6 text-base sm:text-xl text-mutedText max-w-2xl mx-auto leading-relaxed">
          Modern finance has become overly noisy with trading screens, leverage, and speculation. InGrow exists to make long-term wealth creation simple, automated, and deeply calm.
        </p>
      </div>

      {/* Core Principles Grid */}
      <section className="py-12 sm:py-16 bg-white border-y border-charcoal/8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl font-bold font-display text-charcoal">
                1. Small Contributions Matter
              </h2>
              <p className="text-sm text-mutedText leading-relaxed">
                You don&apos;t need a massive salary or a windfall bonus to start building wealth. A modest ₹100 or ₹250 saved every morning quietly outpaces irregular attempts to save large sums later.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold font-display text-charcoal">
                2. Autopilot Beats Willpower
              </h2>
              <p className="text-sm text-mutedText leading-relaxed">
                Willpower is an unreliable financial strategy. When your daily investment happens automatically via UPI AutoPay before your day begins, you never have to make a painful decision to save.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold font-display text-charcoal">
                3. Purposeful Goal Alignment
              </h2>
              <p className="text-sm text-mutedText leading-relaxed">
                Numbers in a bank account can feel abstract. Tying daily investments to tangible aspirations—a dream vacation, a down payment, or peace of mind—makes saving rewarding and stickier.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-bold font-display text-charcoal">
                4. Absolute Direct Transparency
              </h2>
              <p className="text-sm text-mutedText leading-relaxed">
                Zero hidden charges. Units are held directly in your legal folio with registered asset management companies, routed cleanly through authorized clearing and settlement infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why InGrow Section */}
      <WhyInGrowSection />

      {/* Security Section */}
      <SecuritySection />

      {/* Contact & Office Info Section */}
      <section id="contact" className="py-16 sm:py-24 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-charcoal/8 shadow-subtle text-center space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-forest/8 text-forest flex items-center justify-center mx-auto">
              <HeartHandshake className="w-6 h-6 stroke-[2]" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold font-display text-charcoal">
              Get in Touch
            </h2>
            <p className="text-sm text-mutedText max-w-lg mx-auto leading-relaxed">
              We&apos;re here to assist you with any questions regarding our platform, technical infrastructure, or your daily habit journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-2 text-left">
              <div className="p-4 rounded-2xl bg-warm-100 border border-charcoal/6 flex items-start gap-3">
                <Mail className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-charcoal block">Email Support</span>
                  <a
                    href="mailto:support@ingrow.in"
                    className="text-xs text-forest hover:underline font-medium"
                  >
                    support@ingrow.in
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-warm-100 border border-charcoal/6 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-charcoal block">Location</span>
                  <span className="text-xs text-mutedText">Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
