"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Smartphone,
  KeyRound,
  Fingerprint,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { authService } from "@/lib/services/mockServices";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const [mobile, setMobile] = useState("9876543210");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const res = await authService.requestOtp(mobile);
    setLoading(false);
    if (res.success) {
      setStep("otp");
    } else {
      setError(res.message);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const res = await authService.verifyOtp(mobile, otp);
    setLoading(false);
    if (res.success) {
      router.push("/investments");
    } else {
      setError(res.message || "Invalid verification code.");
    }
  };

  const handleBiometricAuth = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/investments");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-warm py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Brand header */}
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
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-mutedText mt-1">
            Access your daily portfolio & goals.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal/10 shadow-floating">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
              {error}
            </div>
          )}

          {step === "mobile" ? (
            <form onSubmit={handleSendOtp} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-charcoal mb-1">
                  Registered Mobile Number
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
                    required
                    className="w-full px-3 py-2.5 text-sm outline-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full justify-center"
                isLoading={loading}
                disabled={mobile.length !== 10}
              >
                Get Verification Code →
              </Button>

              {/* Optional Biometric Login Option */}
              <div className="pt-4 border-t border-charcoal/8 text-center space-y-3">
                <span className="text-[11px] text-mutedText uppercase tracking-wider block">
                  OR USE BIOMETRICS
                </span>
                <button
                  type="button"
                  onClick={handleBiometricAuth}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-charcoal/15 text-xs font-semibold text-charcoal hover:bg-forest/5 hover:border-forest transition-all focus-ring"
                >
                  <Fingerprint className="w-4 h-4 text-forest" />
                  <span>Face ID / Fingerprint</span>
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-charcoal">
                    Enter OTP
                  </h3>
                  <p className="text-xs text-mutedText">
                    Sent to +91 {mobile} (Demo: 123456)
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep("mobile")}
                  className="text-xs text-forest font-semibold hover:underline"
                >
                  Change
                </button>
              </div>

              <div>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="123456"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-charcoal/15 text-center font-mono text-xl tracking-widest focus-ring"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() => setStep("mobile")}
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  className="flex-1 justify-center"
                  isLoading={loading}
                  disabled={otp.length !== 6}
                >
                  Verify & Log In →
                </Button>
              </div>
            </form>
          )}

          {/* New to InGrow signup redirect */}
          <div className="mt-6 pt-5 border-t border-charcoal/8 text-center text-xs text-mutedText">
            New to InGrow?{" "}
            <Link href="/signup" className="text-forest font-bold hover:underline">
              Create an account
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-mutedText flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-ingreen" />
          <span>Encrypted time-based OTP authentication</span>
        </div>
      </div>
    </div>
  );
}
