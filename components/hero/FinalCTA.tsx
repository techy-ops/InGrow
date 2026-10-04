"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Play, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-forest-900 text-warm relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-ingreen/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Badge variant="mint" size="md" className="mb-4">
          YOUR JOURNEY BEGINS TODAY
        </Badge>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-warm tracking-tight leading-tight">
          Start with what feels right. <br className="hidden sm:inline" />
          <span className="text-mint">Grow from there.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-mint/80 max-w-2xl mx-auto leading-relaxed font-light">
          “Your first investment doesn&apos;t have to be big. It just has to start.”
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/signup" className="w-full sm:w-auto">
            <Button
              variant="gold"
              size="lg"
              className="w-full sm:w-auto font-bold text-base"
              rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
            >
              Start Investing →
            </Button>
          </Link>

          <Link href="/how-it-works" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-warm border-mint/30 hover:border-mint hover:bg-forest-800 text-base"
              leftIcon={<Play className="w-4 h-4 fill-current opacity-70" />}
            >
              Explore How It Works
            </Button>
          </Link>
        </div>

        {/* Reassurance footer */}
        <div className="mt-10 pt-8 border-t border-forest-700/50 flex flex-wrap items-center justify-center gap-6 text-xs text-mint/60">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-mint" />
            No lock-in penalties*
          </span>
          <span>•</span>
          <span>₹100/day minimum</span>
          <span>•</span>
          <span>Direct Mutual Funds</span>
          <span>•</span>
          <span>Pause or Stop Anytime</span>
        </div>
      </div>
    </section>
  );
};
