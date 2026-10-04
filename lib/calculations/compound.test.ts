import { describe, it, expect } from "vitest";
import {
  calculateDailyCompounding,
  calculateRequiredDailyForGoal,
  formatINR,
  formatIndianCompact,
} from "./compound";

describe("InGrow Compounding Calculations", () => {
  it("calculates annual and monthly approximations correctly", () => {
    const res = calculateDailyCompounding(500, 1, 10);
    expect(res.dailyAmount).toBe(500);
    expect(res.monthlyAmount).toBe(15000); // 500 * 30
    expect(res.annualAmount).toBe(182500); // 500 * 365
    expect(res.totalInvested).toBe(182500);
  });

  it("yields compounding value strictly greater than total invested when return is positive", () => {
    const res = calculateDailyCompounding(500, 5, 10);
    expect(res.totalInvested).toBe(500 * 365 * 5); // 912,500
    expect(res.estimatedFutureValue).toBeGreaterThan(res.totalInvested);
    expect(res.estimatedWealthGain).toBe(res.estimatedFutureValue - res.totalInvested);
  });

  it("handles zero return rate gracefully without dividing by zero", () => {
    const res = calculateDailyCompounding(500, 3, 0);
    expect(res.totalInvested).toBe(500 * 365 * 3);
    expect(res.estimatedFutureValue).toBe(res.totalInvested);
    expect(res.estimatedWealthGain).toBe(0);
  });

  it("calculates multi-year progression items properly", () => {
    const res = calculateDailyCompounding(100, 10, 12);
    expect(res.breakdownByYear.length).toBe(10);
    expect(res.breakdownByYear[0].year).toBe(1);
    expect(res.breakdownByYear[9].year).toBe(10);
    expect(res.breakdownByYear[9].value).toBe(res.estimatedFutureValue);
  });

  it("calculates required daily amount for a goal accurately", () => {
    const goalTarget = 300000; // 3 Lakhs
    const years = 2;
    const { requiredDaily, totalEstimatedInvested } = calculateRequiredDailyForGoal(
      goalTarget,
      years,
      10
    );
    expect(requiredDaily).toBeGreaterThan(0);
    expect(totalEstimatedInvested).toBeLessThanOrEqual(goalTarget * 1.05);
  });

  it("formats INR correctly according to Indian numbering system", () => {
    expect(formatINR(124560)).toBe("₹1,24,560");
    expect(formatINR(500)).toBe("₹500");
    expect(formatINR(1000000)).toBe("₹10,00,000");
    expect(formatINR(-5000)).toBe("-₹5,000");
  });

  it("formats Indian compact numbers into L and Cr", () => {
    expect(formatIndianCompact(150000)).toBe("₹1.5 L");
    expect(formatIndianCompact(2500000)).toBe("₹25 L");
    expect(formatIndianCompact(10000000)).toBe("₹1 Cr");
    expect(formatIndianCompact(500)).toBe("₹500");
  });
});
