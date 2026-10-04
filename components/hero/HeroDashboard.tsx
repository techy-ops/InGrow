"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatINR } from "@/lib/calculations/compound";

export const HeroDashboard: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute -inset-2 bg-gradient-to-r from-mint/40 via-ingreen/10 to-gold/15 rounded-3xl blur-2xl opacity-70 transform -rotate-1 pointer-events-none" />

      {/* Main Portfolio Dashboard Mockup Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-warm-50 rounded-3xl border border-charcoal/10 shadow-floating p-6 sm:p-7 overflow-hidden"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between pb-5 border-b border-charcoal/8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-mutedText">
                YOUR INGROW PORTFOLIO
              </span>
              <Badge variant="subtle" size="sm" className="text-[10px]">
                Demo Folio
              </Badge>
            </div>
            <div className="flex items-baseline gap-3 mt-1.5">
              <span className="text-3xl sm:text-4xl font-display font-black text-charcoal tracking-tight">
                ₹1,24,560
              </span>
              <div className="flex items-center gap-1 text-ingreen-600 font-semibold text-sm">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                <span>+₹14,560</span>
                <span className="text-xs font-normal text-mutedText">(+13.24%)</span>
              </div>
            </div>
          </div>

          <div className="w-10 h-10 rounded-2xl bg-mint flex items-center justify-center text-forest shadow-xs">
            <TrendingUp className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        {/* Dynamic Growth Chart Area (SVG wave) */}
        <div className="py-4 relative">
          <div className="h-28 w-full flex items-end">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 400 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0B6B4F" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#0B6B4F" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Shaded Area */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                d="M 0 85 Q 70 75, 120 60 T 220 45 T 320 25 T 400 8 L 400 100 L 0 100 Z"
                fill="url(#heroGradient)"
              />
              {/* Bold Trend Line */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                d="M 0 85 Q 70 75, 120 60 T 220 45 T 320 25 T 400 8"
                fill="none"
                stroke="#0B6B4F"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Active Pulsing Point */}
              <circle cx="400" cy="8" r="5" fill="#063B2A" />
              <circle cx="400" cy="8" r="9" fill="#0B6B4F" opacity="0.3" className="animate-ping" />
            </svg>
          </div>
          <div className="flex justify-between items-center text-[11px] text-mutedText pt-2">
            <span>Day 1 (₹500)</span>
            <span>6 Months</span>
            <span className="font-medium text-forest">Today (₹1,24,560)</span>
          </div>
        </div>

        {/* Investment Details Grid */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-charcoal/8">
          <div className="bg-warm rounded-2xl p-3.5 border border-charcoal/5">
            <span className="text-[11px] text-mutedText block font-medium">Daily investment</span>
            <span className="text-base font-bold text-charcoal font-display">₹500/day</span>
            <div className="flex items-center gap-1.5 mt-1 text-[11px] text-ingreen-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-ingreen-500 animate-pulse" />
              <span>AutoPay Active</span>
            </div>
          </div>

          <div className="bg-warm rounded-2xl p-3.5 border border-charcoal/5">
            <span className="text-[11px] text-mutedText block font-medium">Next investment</span>
            <span className="text-base font-bold text-charcoal font-display">Tomorrow</span>
            <div className="flex items-center gap-1 mt-1 text-[11px] text-mutedText">
              <Calendar className="w-3 h-3" />
              <span>06:00 AM • Automated</span>
            </div>
          </div>
        </div>

        {/* Statutory Caption */}
        <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-mutedText border-t border-charcoal/6">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-ingreen" />
            <span>Fictional demonstration portfolio</span>
          </div>
          <span className="text-charcoal/60">SEBI Regulated AMCs</span>
        </div>
      </motion.div>

      {/* Floating Card 1: AutoPay Active Status */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ y: -4 }}
        className="hidden sm:flex absolute -top-4 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-charcoal/10 shadow-floating items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-xl bg-mint flex items-center justify-center text-forest font-bold">
          <CheckCircle2 className="w-5 h-5 text-ingreen" />
        </div>
        <div>
          <span className="text-xs font-bold text-charcoal block">AutoPay Active</span>
          <span className="text-[11px] text-mutedText">UPI recurring mandate approved</span>
        </div>
      </motion.div>

      {/* Floating Card 2: Goal Progress (Europe Trip 62%) */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ y: -4 }}
        className="hidden sm:flex absolute -bottom-5 -right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-charcoal/10 shadow-floating items-center gap-3 z-20"
      >
        <div className="w-9 h-9 rounded-xl bg-forest flex items-center justify-center text-gold">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-bold text-charcoal">Europe Trip</span>
            <span className="text-xs font-bold text-ingreen">62%</span>
          </div>
          <span className="text-[11px] text-mutedText">₹1,86,000 of ₹3,00,000</span>
        </div>
      </motion.div>

      {/* Floating Card 3: ₹500 Invested notification badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute top-1/2 -right-4 -translate-y-1/2 bg-forest text-warm rounded-2xl px-3.5 py-2 shadow-floating border border-forest-700 hidden md:flex items-center gap-2 z-20"
      >
        <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
        <span className="text-xs font-semibold">₹500 Daily SIP Invested</span>
      </motion.div>
    </div>
  );
};
