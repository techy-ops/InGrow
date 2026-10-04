import { CalculationResult } from "../types";

/**
 * InGrow Illustrative Financial Compounding Utilities
 * 
 * NOTE: All calculations provided are strictly illustrative models.
 * Mutual fund returns are market-linked and actual values will fluctuate based on scheme NAV.
 * These utilities do NOT constitute financial advice or guaranteed returns.
 */

/**
 * Calculates the illustrative future value of a regular daily investment.
 *
 * Formula:
 * Compounding is modeled daily:
 * dailyRate (i) = annualReturnRate / 365
 * totalDays (n) = years * 365
 * FV = P * [((1 + i)^n - 1) / i] * (1 + i)  (annuity due: deposited at beginning of period)
 * 
 * @param dailyAmount Daily investment amount in INR
 * @param years Investment horizon in years
 * @param annualReturnRate Illustrative annual return percentage (e.g. 10 for 10%)
 */
export function calculateDailyCompounding(
  dailyAmount: number,
  years: number,
  annualReturnRate: number = 10
): CalculationResult {
  const safeDaily = Math.max(0, dailyAmount);
  const safeYears = Math.max(1, years);
  const r = annualReturnRate / 100;
  const daysPerYear = 365;

  const monthlyAmount = Math.round(safeDaily * 30);
  const annualAmount = Math.round(safeDaily * daysPerYear);

  const totalDays = safeYears * daysPerYear;
  const dailyRate = r / daysPerYear;

  let estimatedFutureValue: number;
  if (dailyRate === 0) {
    estimatedFutureValue = safeDaily * totalDays;
  } else {
    // Standard annuity due formula for daily contributions
    estimatedFutureValue =
      safeDaily * ((Math.pow(1 + dailyRate, totalDays) - 1) / dailyRate) * (1 + dailyRate);
  }

  const totalInvested = safeDaily * totalDays;
  const estimatedWealthGain = Math.max(0, estimatedFutureValue - totalInvested);

  // Breakdown by year for charts and timelines
  const breakdownByYear: CalculationResult["breakdownByYear"] = [];
  for (let y = 1; y <= safeYears; y++) {
    const d = y * daysPerYear;
    const invested = safeDaily * d;
    const value =
      dailyRate === 0
        ? invested
        : safeDaily * ((Math.pow(1 + dailyRate, d) - 1) / dailyRate) * (1 + dailyRate);
    breakdownByYear.push({
      year: y,
      invested: Math.round(invested),
      value: Math.round(value),
      wealthGain: Math.max(0, Math.round(value - invested)),
    });
  }

  return {
    dailyAmount: safeDaily,
    monthlyAmount,
    annualAmount,
    years: safeYears,
    annualReturnRate,
    totalInvested: Math.round(totalInvested),
    estimatedFutureValue: Math.round(estimatedFutureValue),
    estimatedWealthGain: Math.round(estimatedWealthGain),
    breakdownByYear,
  };
}

/**
 * Calculates the approximate daily contribution required to achieve a target goal amount.
 * 
 * @param targetAmount Target financial goal in INR
 * @param targetYears Horizon in years (or fraction of year, min 0.1)
 * @param annualReturnRate Illustrative annual return percentage (default 10%)
 */
export function calculateRequiredDailyForGoal(
  targetAmount: number,
  targetYears: number,
  annualReturnRate: number = 10
): { requiredDaily: number; totalEstimatedInvested: number; estimatedGrowth: number } {
  const safeTarget = Math.max(1000, targetAmount);
  const safeYears = Math.max(0.1, targetYears);
  const r = annualReturnRate / 100;
  const daysPerYear = 365;
  const totalDays = Math.round(safeYears * daysPerYear);
  const dailyRate = r / daysPerYear;

  if (totalDays <= 0) {
    return {
      requiredDaily: Math.ceil(safeTarget),
      totalEstimatedInvested: safeTarget,
      estimatedGrowth: 0,
    };
  }

  let requiredDaily: number;
  if (dailyRate === 0) {
    requiredDaily = safeTarget / totalDays;
  } else {
    // Invert annuity due: Target = P * [((1 + i)^n - 1) / i] * (1 + i)
    const factor = ((Math.pow(1 + dailyRate, totalDays) - 1) / dailyRate) * (1 + dailyRate);
    requiredDaily = safeTarget / factor;
  }

  const roundedDaily = Math.max(50, Math.ceil(requiredDaily / 10) * 10); // round up to nearest ₹10
  const totalEstimatedInvested = Math.round(roundedDaily * totalDays);
  const estimatedGrowth = Math.max(0, safeTarget - totalEstimatedInvested);

  return {
    requiredDaily: roundedDaily,
    totalEstimatedInvested,
    estimatedGrowth,
  };
}

/**
 * Formats a numeric value into standard Indian Currency (INR).
 * E.g. 124560 -> "₹1,24,560"
 */
export function formatINR(value: number, showDecimals: boolean = false): string {
  const isNegative = value < 0;
  const absVal = Math.abs(value);
  const formatted = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: showDecimals ? 2 : 0,
    minimumFractionDigits: showDecimals ? 2 : 0,
  }).format(absVal);

  return `${isNegative ? "-" : ""}₹${formatted}`;
}

/**
 * Formats a number into Indian compact notation (Lakhs, Crores).
 * E.g. 150000 -> "₹1.5 L", 2500000 -> "₹25 L", 12000000 -> "₹1.2 Cr"
 */
export function formatIndianCompact(value: number): string {
  const abs = Math.abs(value);
  const sign = value < 0 ? "-" : "";

  if (abs >= 10000000) {
    const cr = (abs / 10000000).toFixed(1).replace(/\.0$/, "");
    return `${sign}₹${cr} Cr`;
  }
  if (abs >= 100000) {
    const l = (abs / 100000).toFixed(1).replace(/\.0$/, "");
    return `${sign}₹${l} L`;
  }
  if (abs >= 1000) {
    const k = (abs / 1000).toFixed(1).replace(/\.0$/, "");
    return `${sign}₹${k} K`;
  }
  return `${sign}₹${Math.round(abs)}`;
}
