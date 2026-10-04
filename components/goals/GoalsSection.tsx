"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Target } from "lucide-react";
import { MOCK_GOALS } from "@/lib/constants/mockData";
import { Goal } from "@/lib/types";
import { GoalCard } from "./GoalCard";
import { CreateGoalModal } from "./CreateGoalModal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface GoalsSectionProps {
  isFullPage?: boolean;
}

export const GoalsSection: React.FC<GoalsSectionProps> = ({ isFullPage = false }) => {
  const [goals, setGoals] = useState<Goal[]>(MOCK_GOALS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoalCreated = (newGoal: Goal) => {
    setGoals((prev) => [newGoal, ...prev]);
  };

  return (
    <section className={`bg-warm ${isFullPage ? "py-10 sm:py-16" : "py-20 sm:py-28"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <Badge variant="mint" size="md" className="mb-3">
              PURPOSEFUL ACCUMULATION
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
              Don&apos;t just invest. Invest for something.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
              When your daily money is tied to meaningful ambitions, sticking with the habit becomes natural and deeply rewarding.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsModalOpen(true)}
              leftIcon={<Plus className="w-4 h-4" />}
            >
              Create your own goal →
            </Button>
          </div>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-8 p-4 rounded-2xl bg-warm-200/60 border border-charcoal/6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-mutedText gap-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-ingreen shrink-0" />
            <span>
              All goal calculations use market-linked mutual funds. Target timelines and progress percentages are illustrative estimates.
            </span>
          </div>

          {!isFullPage && (
            <Link
              href="/goals"
              className="text-forest font-semibold hover:underline flex items-center gap-1 shrink-0"
            >
              Explore all goals <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Create Goal Modal */}
      <CreateGoalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onGoalCreated={handleGoalCreated}
      />
    </section>
  );
};
