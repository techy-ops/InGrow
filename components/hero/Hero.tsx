"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroDashboard } from "./HeroDashboard";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-warm bg-subtle-grid">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-96 bg-gradient-to-b from-mint/50 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Pill Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <Badge variant="mint" size="md" className="py-1 px-3.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-ingreen inline-block animate-pulse" />
                <span className="font-semibold tracking-wider uppercase text-[11px]">
                  SMARTER DAILY INVESTING
                </span>
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-display font-extrabold text-charcoal tracking-tight leading-[1.1]"
            >
              Your money. <br className="hidden sm:inline" />
              <span className="text-forest">Growing every day.</span>
            </motion.h1>

            {/* Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-mutedText max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Set an amount. Turn on AutoPay. Let InGrow help you build a consistent
              mutual-fund investing habit.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1"
            >
              <Link href="/signup" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto text-base font-semibold group"
                  rightIcon={
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  }
                >
                  Start Investing
                </Button>
              </Link>

              <Link href="/how-it-works" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base font-medium"
                  leftIcon={<Play className="w-4 h-4 fill-current opacity-70" />}
                >
                  See How It Works
                </Button>
              </Link>
            </motion.div>

            {/* Mini Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 border-t border-charcoal/8"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-xs sm:text-sm font-medium text-charcoal/80">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-ingreen shrink-0" />
                  ₹100/day
                </span>
                <span className="text-charcoal/30">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-ingreen shrink-0" />
                  UPI AutoPay
                </span>
                <span className="text-charcoal/30">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-ingreen shrink-0" />
                  Mutual Funds
                </span>
                <span className="text-charcoal/30">•</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-ingreen shrink-0" />
                  Pause Anytime*
                </span>
              </div>

              {/* Disclaimer */}
              <p className="mt-3 text-[11px] text-mutedText/75 leading-relaxed max-w-lg mx-auto lg:mx-0">
                *Pause or modify daily contributions without exit penalties. Mutual fund investments are subject to market risks. Read all scheme-related documents carefully.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
};
