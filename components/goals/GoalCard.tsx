import React from "react";
import { Plane, Smartphone, Car, Home, Target, Sparkles } from "lucide-react";
import { Goal } from "@/lib/types";
import { formatINR } from "@/lib/calculations/compound";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Badge } from "@/components/ui/Badge";

const ICON_MAP: Record<string, React.ElementType> = {
  Plane,
  Smartphone,
  Car,
  Home,
  Target,
  Sparkles,
};

export interface GoalCardProps {
  goal: Goal;
  onSelect?: (goal: Goal) => void;
}

export const GoalCard: React.FC<GoalCardProps> = ({ goal, onSelect }) => {
  const IconComponent = ICON_MAP[goal.iconName] || Target;
  const percentage = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));

  return (
    <div
      onClick={() => onSelect?.(goal)}
      className="bg-white rounded-3xl p-6 border border-charcoal/8 shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-forest/8 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-warm transition-colors duration-200">
            <IconComponent className="w-6 h-6 stroke-[2]" />
          </div>

          <Badge variant={percentage >= 70 ? "mint" : "subtle"} size="sm">
            {goal.category}
          </Badge>
        </div>

        {/* Title & Target */}
        <h3 className="font-display font-bold text-xl text-charcoal mb-1">
          {goal.title}
        </h3>
        <p className="text-xs text-mutedText mb-4">
          Target Date: {new Date(goal.targetDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
        </p>

        {/* Progress Display */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-baseline">
            <span className="text-2xl font-bold font-display text-forest">
              {formatINR(goal.currentAmount)}
            </span>
            <span className="text-sm font-bold text-charcoal">
              {percentage}%
            </span>
          </div>

          <ProgressBar progress={percentage} />

          <div className="flex justify-between text-xs text-mutedText">
            <span>Current saved</span>
            <span>Target: {formatINR(goal.targetAmount)}</span>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-charcoal/6 flex items-center justify-between text-xs">
        <span className="text-mutedText">AutoPay Allocation</span>
        <span className="font-semibold text-charcoal font-display">
          ₹{goal.dailyContribution}/day
        </span>
      </div>
    </div>
  );
};
