"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  KeyRound,
  User,
  FileCheck,
  Building,
  PieChart,
  IndianRupee,
  Zap,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatINR } from "@/lib/calculations/compound";
import { MOCK_HOLDINGS } from "@/lib/constants/mockData";
import { autoPayService } from "@/lib/services/mockServices";

type StepKey = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export default function SignupPage() {
  const [step, setStep] = useState<StepKey>(1);
  const [loading, setLoading] = useState(false);

  // Form State
  const [mobile, setMobile] = useState("9876543210");
  const [otp, setOtp] = useState("");
  const [fullName, setFullName] = useState("Aarav Sharma");
  const [email, setEmail] = useState("aarav.sharma@example.com");
  const [pan, setPan] = useState("ABCDE1234F");
  const [dob, setDob] = useState("1995-08-15");
  const [bankAccount, setBankAccount] = useState("912010048291044");
  const [ifsc, setIfsc] = useState("HDFC0000128");
  const [selectedFundId, setSelectedFundId] = useState(MOCK_HOLDINGS[0].id);
  const [dailyAmount, setDailyAmount] = useState(500);
  const [upiId, setUpiId] = useState("aarav@okhdfcbank");

  // Step Category for Progress Indicator: ACCOUNT → KYC → BANK → INVEST → AUTOPAY
  const getProgressPhase = () => {
    if (step <= 3) return "ACCOUNT";
    if (step === 4) return "KYC";
    if (step === 5) return "BANK";
    if (step <= 7) return "INVEST";
    return "AUTOPAY";
  };

  const handleNext = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep((prev) => Math.min(9, prev + 1) as StepKey);
    }, 400);
  };

  const handleBack = () => {
    setStep((prev) => Math.max(1, prev - 1) as StepKey);
  };

  const phases = ["ACCOUNT", "KYC", "BANK", "INVEST", "AUTOPAY"] as const;
  const currentPhase = getProgressPhase();

  return (
    <div className="min-h-screen bg-warm py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        {/* Top Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-3 focus-ring rounded-lg">
            <div className="w-8 h-8 rounded-xl bg-forest flex items-center justify-center text-mint">
              <TrendingUp className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="font-display font-black text-xl tracking-tight text-forest">
              INGROW
            </span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal">
            Start Your Daily Habit
          </h1>
          <p className="text-xs sm:text-sm text-mutedText mt-1">
            Complete your setup in under 3 minutes.
          </p>
        </div>

        {/* Multi-Step Progress Tracker */}
        {step < 9 && (
          <div className="mb-8 bg-white rounded-2xl p-4 border border-charcoal/8 shadow-subtle">
            <div className="flex items-center justify-between text-[11px] font-bold tracking-wider">
              {phases.map((p, idx) => {
                const isCurrent = currentPhase === p;
                const phaseIndex = phases.indexOf(currentPhase);
                const isPassed = phaseIndex > idx;

                return (
                  <div key={p} className="flex flex-col items-center flex-1">
                    <span
                      className={`transition-colors ${
                        isCurrent
                          ? "text-forest font-black"
                          : isPassed
                          ? "text-ingreen font-semibold"
                          : "text-mutedText/60"
                      }`}
                    >
                      {p}
                    </span>
                    <div
                      className={`w-full h-1.5 rounded-full mt-2 transition-all ${
                        isCurrent
                          ? "bg-forest"
                          : isPassed
                          ? "bg-ingreen"
                          : "bg-charcoal/10"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-2 text-right text-[10px] text-mutedText font-mono">
              Step {step} of 8
            </div>
          </div>
        )}

        {/* Step Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/10 shadow-floating">
          <AnimatePresence mode="wait">
            {/* Step 1: Mobile Number */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/8 text-forest flex items-center justify-center">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-charcoal">
                      Enter Mobile Number
                    </h2>
                    <p className="text-xs text-mutedText">
                      We will send a 6-digit verification code.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Mobile Number
                  </label>
                  <div className="flex rounded-xl border border-charcoal/15 overflow-hidden focus-within:ring-2 focus-within:ring-forest">
                    <span className="px-3 py-2.5 bg-warm-100 text-xs font-semibold text-charcoal flex items-center border-r border-charcoal/10">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                      placeholder="98765 43210"
                      className="w-full px-3 py-2.5 text-sm outline-none"
                    />
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  isLoading={loading}
                  onClick={handleNext}
                  disabled={mobile.length !== 10}
                >
                  Send OTP Code →
                </Button>
              </motion.div>
            )}

            {/* Step 2: OTP Verification */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/8 text-forest flex items-center justify-center">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-charcoal">
                      Verify OTP
                    </h2>
                    <p className="text-xs text-mutedText">
                      Sent to +91 {mobile}. (Demo OTP: Any 6 digits or 123456)
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    6-Digit Code
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="123456"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 text-center font-mono text-lg tracking-widest focus-ring"
                  />
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="md" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center"
                    isLoading={loading}
                    onClick={handleNext}
                    disabled={otp.length !== 6}
                  >
                    Verify & Continue →
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Create Profile */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/8 text-forest flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-charcoal">
                      Personal Profile
                    </h2>
                    <p className="text-xs text-mutedText">
                      As it appears on your official PAN document.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-charcoal/15 text-sm focus-ring"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-charcoal/15 text-sm focus-ring"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="md" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center"
                    isLoading={loading}
                    onClick={handleNext}
                    disabled={!fullName.trim() || !email.trim()}
                  >
                    Continue to KYC →
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Paperless KYC */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/8 text-forest flex items-center justify-center">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-charcoal">
                      Paperless KYC Check
                    </h2>
                    <p className="text-xs text-mutedText">
                      Required by SEBI regulations for mutual fund investments.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      PAN Number
                    </label>
                    <input
                      type="text"
                      maxLength={10}
                      value={pan}
                      onChange={(e) => setPan(e.target.value.toUpperCase())}
                      className="w-full px-3.5 py-2 rounded-xl border border-charcoal/15 font-mono text-sm focus-ring uppercase"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-charcoal/15 text-sm focus-ring"
                    />
                  </div>
                </div>

                <div className="p-3 bg-mint/40 rounded-xl border border-ingreen/20 flex items-center gap-2 text-xs text-forest">
                  <ShieldCheck className="w-4 h-4 text-ingreen shrink-0" />
                  <span>Your PAN is checked against the centralized KRA repository.</span>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="md" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center"
                    isLoading={loading}
                    onClick={handleNext}
                    disabled={pan.length !== 10}
                  >
                    Verify KYC →
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 5: Bank Details */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/8 text-forest flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-charcoal">
                      Bank Account for AutoPay & Redemptions
                    </h2>
                    <p className="text-xs text-mutedText">
                      Must match the name on your PAN card.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      Bank Account Number
                    </label>
                    <input
                      type="text"
                      value={bankAccount}
                      onChange={(e) => setBankAccount(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-charcoal/15 font-mono text-sm focus-ring"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      maxLength={11}
                      value={ifsc}
                      onChange={(e) => setIfsc(e.target.value.toUpperCase())}
                      className="w-full px-3.5 py-2 rounded-xl border border-charcoal/15 font-mono text-sm focus-ring uppercase"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="md" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center"
                    isLoading={loading}
                    onClick={handleNext}
                    disabled={!bankAccount || ifsc.length !== 11}
                  >
                    Confirm Bank Details →
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 6: Choose Investment Option */}
            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/8 text-forest flex items-center justify-center">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-charcoal">
                      Select Mutual Fund
                    </h2>
                    <p className="text-xs text-mutedText">
                      Curated, low-cost direct index and diversified funds.
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {MOCK_HOLDINGS.map((fund) => {
                    const isSelected = selectedFundId === fund.id;
                    return (
                      <div
                        key={fund.id}
                        onClick={() => setSelectedFundId(fund.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? "border-forest bg-forest/5 shadow-xs"
                            : "border-charcoal/10 hover:border-charcoal/20"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs text-charcoal">
                            {fund.name}
                          </span>
                          <Badge variant="subtle" size="sm">
                            {fund.category}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-[11px] text-mutedText">
                          <span>Risk: {fund.riskLevel}</span>
                          <span className="font-semibold text-forest">
                            Expense Ratio: {fund.expenseRatio}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="md" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center"
                    isLoading={loading}
                    onClick={handleNext}
                  >
                    Select Fund & Set Amount →
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 7: Set Daily Amount */}
            {step === 7 && (
              <motion.div
                key="step7"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/8 text-forest flex items-center justify-center">
                    <IndianRupee className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-charcoal">
                      Set Your Daily Amount
                    </h2>
                    <p className="text-xs text-mutedText">
                      You can adjust or pause this contribution anytime.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs font-semibold text-charcoal">Amount</span>
                    <span className="text-2xl font-bold font-display text-forest">
                      ₹{dailyAmount}/day
                    </span>
                  </div>

                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={dailyAmount}
                    onChange={(e) => setDailyAmount(Number(e.target.value))}
                    className="w-full h-2 bg-charcoal/10 rounded-lg appearance-none cursor-pointer accent-forest focus-ring"
                  />

                  <div className="mt-3 flex gap-2">
                    {[100, 250, 500, 1000].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setDailyAmount(amt)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border ${
                          dailyAmount === amt
                            ? "bg-forest text-warm border-forest"
                            : "bg-warm-100 text-charcoal border-charcoal/10"
                        }`}
                      >
                        ₹{amt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-warm-100 p-3 rounded-xl border border-charcoal/8 text-xs text-mutedText flex justify-between">
                  <span>Estimated monthly:</span>
                  <span className="font-bold text-charcoal font-display">
                    ≈ ₹{(dailyAmount * 30).toLocaleString("en-IN")}/mo
                  </span>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="md" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    className="flex-1 justify-center"
                    isLoading={loading}
                    onClick={handleNext}
                  >
                    Setup AutoPay →
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 8: AutoPay Authorization */}
            {step === 8 && (
              <motion.div
                key="step8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/8 text-forest flex items-center justify-center">
                    <Zap className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-charcoal">
                      Authorize UPI AutoPay Mandate
                    </h2>
                    <p className="text-xs text-mutedText">
                      Approves daily execution of ₹{dailyAmount} at 06:00 AM.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    UPI ID (Virtual Payment Address)
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@okhdfcbank"
                    className="w-full px-3.5 py-2 rounded-xl border border-charcoal/15 font-mono text-sm focus-ring"
                  />
                </div>

                <div className="bg-forest-900 text-warm rounded-2xl p-4 border border-forest-700 text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-mint/70">Mandate Frequency</span>
                    <span className="font-bold">Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mint/70">Amount per debit</span>
                    <span className="font-bold text-gold-light">₹{dailyAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mint/70">Pause / Cancel</span>
                    <span className="font-bold text-mint">Anytime with 1-click</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="md" onClick={handleBack}>
                    Back
                  </Button>
                  <Button
                    variant="gold"
                    size="md"
                    className="flex-1 justify-center font-bold"
                    isLoading={loading}
                    onClick={() => {
                      setLoading(true);
                      autoPayService
                        .setupMandate({
                          dailyAmount,
                          method: "UPI_AUTOPAY",
                          bankAccount,
                        })
                        .then(() => {
                          setLoading(false);
                          setStep(9);
                        });
                    }}
                    disabled={!upiId}
                  >
                    Authorize AutoPay Mandate
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 9: Success Celebration */}
            {step === 9 && (
              <motion.div
                key="step9"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-mint text-forest flex items-center justify-center mx-auto shadow-card">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <Badge variant="mint" size="md" className="mb-2">
                    ● AUTOPAY ACTIVE
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-charcoal">
                    You&apos;re All Set to Grow!
                  </h2>
                  <p className="text-sm text-mutedText mt-1 max-w-sm mx-auto">
                    Your daily habit begins tomorrow morning at 06:00 AM with ₹{dailyAmount}/day.
                  </p>
                </div>

                <div className="bg-warm-100 rounded-2xl p-5 border border-charcoal/8 text-left text-xs space-y-2 max-w-sm mx-auto">
                  <div className="flex justify-between">
                    <span className="text-mutedText">Investor Name</span>
                    <span className="font-bold text-charcoal">{fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mutedText">Daily Amount</span>
                    <span className="font-bold text-forest">₹{dailyAmount}/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mutedText">First Investment</span>
                    <span className="font-bold text-charcoal">Tomorrow, 06:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-mutedText">Fund Choice</span>
                    <span className="font-bold text-charcoal truncate max-w-[180px]">
                      {MOCK_HOLDINGS.find((f) => f.id === selectedFundId)?.name}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href="/investments">
                    <Button variant="primary" size="lg" className="w-full justify-center">
                      Go to Your Dashboard →
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Security reassurance footer */}
        <div className="mt-8 text-center text-xs text-mutedText flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-ingreen" />
          <span>Paperless authentication via licensed regulatory infrastructure</span>
        </div>
      </div>
    </div>
  );
}
