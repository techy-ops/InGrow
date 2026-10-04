import { MOCK_ACTIVITIES, MOCK_GOALS, MOCK_HOLDINGS, MOCK_PORTFOLIO } from "../constants/mockData";
import { Goal, PortfolioSummary, FundHolding, InvestmentActivity } from "../types";
import { IAuthService, IKycService, IPortfolioService, IGoalService, IAutoPayService } from "./types";

const GOALS_STORAGE_KEY = "ingrow_user_goals";
const AUTOPAY_STORAGE_KEY = "ingrow_autopay_state";

export class MockAuthService implements IAuthService {
  async requestOtp(mobile: string): Promise<{ success: boolean; message: string }> {
    await new Promise((r) => setTimeout(r, 600));
    if (!/^[6-9]\d{9}$/.test(mobile.replace(/\D/g, ""))) {
      return { success: false, message: "Please provide a valid 10-digit Indian mobile number." };
    }
    return { success: true, message: "OTP sent to +91 " + mobile.slice(-10) };
  }

  async verifyOtp(mobile: string, otp: string): Promise<{ success: boolean; token?: string; user?: any; message?: string }> {
    await new Promise((r) => setTimeout(r, 700));
    if (otp === "123456" || otp.length === 6) {
      const user = { mobile, name: "InGrow Investor", kycVerified: true };
      if (typeof window !== "undefined") {
        localStorage.setItem("ingrow_auth_user", JSON.stringify(user));
      }
      return { success: true, token: "demo_jwt_token_sample", user };
    }
    return { success: false, message: "Invalid verification code. Try entering 123456." };
  }

  async logout(): Promise<void> {
    if (typeof window !== "undefined") {
      localStorage.removeItem("ingrow_auth_user");
    }
  }
}

export class MockKycService implements IKycService {
  async checkKycStatus(pan: string): Promise<{ status: "VERIFIED" | "PENDING" | "REQUIRED"; message: string }> {
    await new Promise((r) => setTimeout(r, 500));
    return {
      status: "VERIFIED",
      message: `KYC verified for PAN ${pan.toUpperCase()} via KRA registry`,
    };
  }

  async submitKyc(data: { pan: string; dob: string; fullName: string }): Promise<{ success: boolean; status: string }> {
    await new Promise((r) => setTimeout(r, 800));
    return { success: true, status: "VERIFIED" };
  }
}

export class MockPortfolioService implements IPortfolioService {
  async getPortfolio(): Promise<PortfolioSummary> {
    await new Promise((r) => setTimeout(r, 400));
    return { ...MOCK_PORTFOLIO };
  }

  async getHoldings(): Promise<FundHolding[]> {
    await new Promise((r) => setTimeout(r, 400));
    return [...MOCK_HOLDINGS];
  }

  async getActivityHistory(): Promise<InvestmentActivity[]> {
    await new Promise((r) => setTimeout(r, 300));
    return [...MOCK_ACTIVITIES];
  }
}

export class MockGoalService implements IGoalService {
  async getGoals(): Promise<Goal[]> {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(GOALS_STORAGE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          // fallback
        }
      }
    }
    return [...MOCK_GOALS];
  }

  async createGoal(goalData: Omit<Goal, "id" | "currentAmount" | "status">): Promise<Goal> {
    await new Promise((r) => setTimeout(r, 500));
    const newGoal: Goal = {
      ...goalData,
      id: `goal-${Date.now()}`,
      currentAmount: 0,
      status: "ACTIVE",
    };

    if (typeof window !== "undefined") {
      const current = await this.getGoals();
      const updated = [newGoal, ...current];
      localStorage.setItem(GOALS_STORAGE_KEY, JSON.stringify(updated));
    }
    return newGoal;
  }

  async updateGoalStatus(goalId: string, status: Goal["status"]): Promise<Goal> {
    const goals = await this.getGoals();
    const target = goals.find((g) => g.id === goalId);
    if (!target) throw new Error("Goal not found");
    target.status = status;
    if (typeof window !== "undefined") {
      localStorage.setItem(GOALS_STORAGE_KEY, JSON.stringify(goals));
    }
    return target;
  }
}

export class MockAutoPayService implements IAutoPayService {
  async setupMandate(params: {
    dailyAmount: number;
    method: "UPI_AUTOPAY" | "NET_BANKING_ENACH";
    bankAccount: string;
  }): Promise<{ mandateId: string; status: "ACTIVE" | "PENDING" }> {
    await new Promise((r) => setTimeout(r, 800));
    const mandateId = `UMRN-INGROW-${Math.floor(10000000 + Math.random() * 90000000)}`;
    if (typeof window !== "undefined") {
      localStorage.setItem(
        AUTOPAY_STORAGE_KEY,
        JSON.stringify({
          mandateId,
          status: "ACTIVE",
          dailyAmount: params.dailyAmount,
          method: params.method,
          updatedAt: new Date().toISOString(),
        })
      );
    }
    return { mandateId, status: "ACTIVE" };
  }

  async pauseAutoPay(): Promise<{ success: boolean; status: "PAUSED" }> {
    await new Promise((r) => setTimeout(r, 400));
    return { success: true, status: "PAUSED" };
  }

  async resumeAutoPay(): Promise<{ success: boolean; status: "ACTIVE" }> {
    await new Promise((r) => setTimeout(r, 400));
    return { success: true, status: "ACTIVE" };
  }
}

export const authService = new MockAuthService();
export const kycService = new MockKycService();
export const portfolioService = new MockPortfolioService();
export const goalService = new MockGoalService();
export const autoPayService = new MockAutoPayService();
