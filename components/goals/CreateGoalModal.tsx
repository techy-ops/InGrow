"use client";

import React, { useState, useMemo } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { calculateRequiredDailyForGoal, formatINR } from "@/lib/calculations/compound";
import { Target, Calendar, IndianRupee, Sparkles, CheckCircle2 } from "lucide-react";
import { Goal } from "@/lib/types";

interface CreateGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoalCreated?: (newGoal: Goal) => void;
}

export const CreateGoalModal: React.FC<CreateGoalModalProps> = ({
  isOpen,
  onClose,
  onGoalCreated,
}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Goal["category"]>("Travel");
  const [targetAmount, setTargetAmount] = useState<number>(300000);
  const [targetMonths, setTargetMonths] = useState<number>(24); // default 2 years
  const [currentDaily, setCurrentDaily] = useState<number>(250);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Compute estimated required daily investment
  const goalCalculation = useMemo(() => {
    const years = targetMonths / 12;
    return calculateRequiredDailyForGoal(targetAmount, years, 10);
  }, [targetAmount, targetMonths]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const targetDate = new Date();
      targetDate.setMonth(targetDate.getMonth() + targetMonths);

      const newGoal: Goal = {
        id: `goal-${Date.now()}`,
        title: title.trim(),
        category,
        targetAmount,
        currentAmount: 0,
        startDate: new Date().toISOString().split("T")[0],
        targetDate: targetDate.toISOString().split("T")[0],
        dailyContribution: goalCalculation.requiredDaily,
        status: "ACTIVE",
        iconName: category === "Travel" ? "Plane" : category === "Tech" ? "Smartphone" : category === "Automobile" ? "Car" : category === "Real Estate" ? "Home" : "Target",
      };

      onGoalCreated?.(newGoal);
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setTitle("");
      }, 1200);
    }, 400);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Your Financial Goal"
      description="Connect your daily mutual-fund investments to an ambition that motivates you."
    >
      {isSuccess ? (
        <div className="py-10 text-center space-y-3">
          <div className="w-14 h-14 bg-mint rounded-full flex items-center justify-center text-forest mx-auto animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold font-display text-charcoal">
            Goal Created Successfully!
          </h4>
          <p className="text-sm text-mutedText">
            Your daily habit will help you steadily reach for {title}.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pt-1">
          {/* Goal Title */}
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1">
              Goal Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Higher Education, New Laptop, Ladakh Trip"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 bg-white text-sm focus-ring"
            />
          </div>

          {/* Category */}
          <div className="grid grid-cols-3 gap-2">
            {(["Travel", "Tech", "Automobile", "Real Estate", "Education", "Custom"] as const).map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                    category === cat
                      ? "bg-forest text-warm border-forest font-semibold"
                      : "bg-warm-100 hover:bg-forest/5 text-charcoal border-charcoal/10"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Target Amount */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <label className="text-xs font-semibold text-charcoal">
                Target Amount (INR)
              </label>
              <span className="text-base font-bold font-display text-forest">
                {formatINR(targetAmount)}
              </span>
            </div>
            <input
              type="range"
              min="20000"
              max="5000000"
              step="10000"
              value={targetAmount}
              onChange={(e) => setTargetAmount(Number(e.target.value))}
              className="w-full h-2 bg-charcoal/10 rounded-lg appearance-none cursor-pointer accent-forest focus-ring"
            />
          </div>

          {/* Timeframe in Months */}
          <div>
            <div className="flex justify-between items-baseline mb-1">
              <label className="text-xs font-semibold text-charcoal">
                Target Timeframe
              </label>
              <span className="text-xs font-bold text-charcoal">
                {targetMonths >= 12
                  ? `${(targetMonths / 12).toFixed(1).replace(/\.0$/, "")} Years (${targetMonths} mos)`
                  : `${targetMonths} Months`}
              </span>
            </div>
            <input
              type="range"
              min="6"
              max="120"
              step="6"
              value={targetMonths}
              onChange={(e) => setTargetMonths(Number(e.target.value))}
              className="w-full h-2 bg-charcoal/10 rounded-lg appearance-none cursor-pointer accent-forest focus-ring"
            />
          </div>

          {/* Calculation Estimate Output Box */}
          <div className="bg-mint/40 border border-ingreen/20 rounded-2xl p-4 space-y-1.5">
            <span className="text-[11px] font-bold text-forest uppercase tracking-wider block">
              ESTIMATED DAILY REQUIREMENT
            </span>
            <div className="text-xl sm:text-2xl font-bold font-display text-forest">
              You may need approximately{" "}
              <span className="underline decoration-gold decoration-2">
                ₹{goalCalculation.requiredDaily}/day
              </span>{" "}
              to reach this goal.
            </div>
            <p className="text-[11px] text-mutedText leading-relaxed pt-1">
              *Clearly an illustrative projection assuming 10% annualized market growth. Mutual fund returns fluctuate based on market movements. Not a guaranteed outcome.
            </p>
          </div>

          {/* Modal Actions */}
          <div className="flex items-center justify-end gap-3 pt-3">
            <Button
              type="button"
              variant="ghost"
              size="md"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              disabled={!title.trim()}
            >
              Save & Activate Goal
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
