"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ArrowRight,
  Info,
  Calendar,
  Sparkles,
} from "lucide-react";
import { calculateDailyCompounding, formatINR, formatIndianCompact } from "@/lib/calculations/compound";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface CalculatorProps {
  isFullPage?: boolean;
}

export const Calculator: React.FC<CalculatorProps> = ({ isFullPage = false }) => {
  const [dailyAmount, setDailyAmount] = useState<number>(500);
  const [years, setYears] = useState<number>(10);
  const [annualReturnRate, setAnnualReturnRate] = useState<number>(10);

  const durationOptions = [3, 5, 10, 15, 20];
  const rateOptions = [8, 10, 12, 14];
  const presetAmounts = [100, 250, 500, 1000, 2000];

  const results = useMemo(() => {
    return calculateDailyCompounding(dailyAmount, years, annualReturnRate);
  }, [dailyAmount, years, annualReturnRate]);

  // Generate coordinates for the dynamic chart
  const chartPoints = useMemo(() => {
    const data = results.breakdownByYear;
    if (data.length === 0) return { pathValue: "", pathInvested: "", maxVal: 1 };
    const maxVal = Math.max(...data.map((d) => d.value), 1);
    const width = 500;
    const height = 180;
    const padding = 20;

    const coordsValue = data.map((d, i) => {
      const x = padding + (i / (data.length - 1 || 1)) * (width - padding * 2);
      const y = height - padding - (d.value / maxVal) * (height - padding * 2);
      return { x, y };
    });

    const coordsInvested = data.map((d, i) => {
      const x = padding + (i / (data.length - 1 || 1)) * (width - padding * 2);
      const y = height - padding - (d.invested / maxVal) * (height - padding * 2);
      return { x, y };
    });

    const pathValue = coordsValue.reduce(
      (acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`),
      ""
    );

    const pathInvested = coordsInvested.reduce(
      (acc, p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`),
      ""
    );

    const areaValue = `${pathValue} L ${coordsValue[coordsValue.length - 1].x} ${
      height - padding
    } L ${coordsValue[0].x} ${height - padding} Z`;

    return { pathValue, pathInvested, areaValue, maxVal, coordsValue, width, height };
  }, [results]);

  return (
    <section
      id="calculator"
      className={cn(
        "bg-forest-900 text-warm relative overflow-hidden",
        isFullPage ? "py-12 sm:py-20" : "py-20 sm:py-28"
      )}
    >
      {/* Decorative ambient radial glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-ingreen/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Badge variant="mint" size="md" className="mb-3">
            INTERACTIVE WEALTH SIMULATOR
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-warm tracking-tight">
            What could your daily habit become?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mint/80 max-w-2xl mx-auto leading-relaxed">
            See how small amounts invested consistently every morning can compound over time into meaningful financial security.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-forest-800/90 backdrop-blur-xl rounded-3xl border border-forest-700 p-6 sm:p-10 shadow-floating">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-6 space-y-8">
              {/* Daily Amount Slider & Presets */}
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <label htmlFor="daily-amount-slider" className="text-sm font-semibold text-mint/90">
                    Daily Investment Amount
                  </label>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-warm">
                    ₹{dailyAmount.toLocaleString("en-IN")}
                    <span className="text-xs font-normal text-mint/70 ml-1">/day</span>
                  </div>
                </div>

                {/* Slider */}
                <input
                  id="daily-amount-slider"
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={dailyAmount}
                  onChange={(e) => setDailyAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-forest-900 rounded-lg appearance-none cursor-pointer accent-mint focus-ring"
                />

                {/* Approximation tags */}
                <div className="mt-3 flex items-center justify-between text-xs text-mint/80 bg-forest-900/60 rounded-xl px-3 py-2 border border-forest-700/50">
                  <span>≈ ₹{(dailyAmount * 30).toLocaleString("en-IN")}/month</span>
                  <span>•</span>
                  <span>≈ ₹{(dailyAmount * 365).toLocaleString("en-IN")}/year</span>
                </div>

                {/* Preset Chips */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setDailyAmount(amt)}
                      className={cn(
                        "px-3 py-1.5 rounded-xl text-xs font-medium transition-all focus-ring",
                        dailyAmount === amt
                          ? "bg-mint text-forest font-bold shadow-xs"
                          : "bg-forest-700/50 text-mint/80 hover:bg-forest-700 hover:text-warm"
                      )}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Investment Duration Buttons */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-semibold text-mint/90 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-mint" />
                    Investment Horizon (Years)
                  </label>
                  <span className="text-base font-bold text-warm font-display">
                    {years} Years
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {durationOptions.map((y) => (
                    <button
                      key={y}
                      type="button"
                      onClick={() => setYears(y)}
                      className={cn(
                        "py-2.5 rounded-xl text-xs sm:text-sm font-display font-semibold transition-all focus-ring text-center",
                        years === y
                          ? "bg-mint text-forest shadow-xs font-bold"
                          : "bg-forest-700/50 text-mint/80 hover:bg-forest-700 hover:text-warm"
                      )}
                    >
                      {y}Y
                    </button>
                  ))}
                </div>
              </div>

              {/* Illustrative Return Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-mint/80 flex items-center gap-1">
                    Illustrative Annual Growth
                    <Info className="w-3.5 h-3.5 text-mint/60" />
                  </span>
                  <span className="text-sm font-bold text-warm">
                    {annualReturnRate}% p.a.
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {rateOptions.map((rate) => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setAnnualReturnRate(rate)}
                      className={cn(
                        "py-1.5 rounded-lg text-xs font-medium transition-all",
                        annualReturnRate === rate
                          ? "bg-gold text-forest-900 font-bold"
                          : "bg-forest-700/40 text-mint/70 hover:bg-forest-700"
                      )}
                    >
                      {rate}%
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Output Summary & Dynamic Area Chart */}
            <div className="lg:col-span-6 bg-forest-900/90 rounded-2xl p-6 sm:p-7 border border-forest-700/80 flex flex-col justify-between">
              {/* Top Summary Metrics */}
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-mint/70 block mb-1">
                  ESTIMATED FUTURE VALUE (AFTER {years} YEARS)
                </span>
                <div className="text-3xl sm:text-5xl font-display font-extrabold text-warm tracking-tight">
                  {formatINR(results.estimatedFutureValue)}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-forest-700/60">
                  <div>
                    <span className="text-xs text-mint/70 block">Total Invested</span>
                    <span className="text-lg sm:text-xl font-bold font-display text-warm">
                      {formatINR(results.totalInvested)}
                    </span>
                    <span className="text-[11px] text-mint/50 block">
                      {dailyAmount * 365 * years} days
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-mint/70 block">Estimated Growth</span>
                    <div className="flex items-center gap-1">
                      <span className="text-lg sm:text-xl font-bold font-display text-gold-light">
                        +{formatINR(results.estimatedWealthGain)}
                      </span>
                    </div>
                    <span className="text-[11px] text-mint/50 block">
                      Compounded at {annualReturnRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual Compounding Progression Area Chart */}
              <div className="my-6">
                <div className="h-36 w-full relative">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox={`0 0 ${chartPoints.width} ${chartPoints.height}`}
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="calcAreaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#DDF5EA" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#DDF5EA" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Shaded Area for Value */}
                    <path
                      d={chartPoints.areaValue}
                      fill="url(#calcAreaGradient)"
                      className="transition-all duration-300"
                    />

                    {/* Invested Principal Base Line (dashed) */}
                    <path
                      d={chartPoints.pathInvested}
                      fill="none"
                      stroke="#6B7771"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      className="transition-all duration-300"
                    />

                    {/* Total Value Line */}
                    <path
                      d={chartPoints.pathValue}
                      fill="none"
                      stroke="#DDF5EA"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />

                    {/* Final Data Point */}
                    {chartPoints.coordsValue && chartPoints.coordsValue.length > 0 && (
                      <circle
                        cx={chartPoints.coordsValue[chartPoints.coordsValue.length - 1].x}
                        cy={chartPoints.coordsValue[chartPoints.coordsValue.length - 1].y}
                        r="6"
                        fill="#D7A84B"
                      />
                    )}
                  </svg>
                </div>

                <div className="flex items-center justify-between text-xs text-mint/60 pt-2 border-t border-forest-700/40">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-0.5 bg-mint/50 border-t border-dashed border-mint inline-block" />
                    <span>Invested Principal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-1.5 bg-mint rounded-sm inline-block" />
                    <span className="text-mint font-medium">Estimated Value</span>
                  </div>
                </div>
              </div>

              {/* Action & Statutory Disclaimer */}
              <div className="pt-2">
                <Link href="/signup">
                  <Button
                    variant="gold"
                    size="md"
                    className="w-full justify-center text-sm font-bold"
                    rightIcon={<ArrowRight className="w-4 h-4 ml-1" />}
                  >
                    Start Investing ₹{dailyAmount}/day
                  </Button>
                </Link>

                <p className="mt-3 text-[11px] text-mint/60 text-center leading-relaxed">
                  Illustration only. Mutual-fund returns are market-linked and actual results may vary. Past performance does not guarantee future outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
