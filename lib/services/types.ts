import { Goal, PortfolioSummary, FundHolding, InvestmentActivity } from "../types";

export interface IAuthService {
  requestOtp(mobile: string): Promise<{ success: boolean; message: string }>;
  verifyOtp(mobile: string, otp: string): Promise<{ success: boolean; token?: string; user?: any }>;
  logout(): Promise<void>;
}

export interface IKycService {
  checkKycStatus(pan: string): Promise<{ status: "VERIFIED" | "PENDING" | "REQUIRED"; message: string }>;
  submitKyc(data: { pan: string; dob: string; fullName: string }): Promise<{ success: boolean; status: string }>;
}

export interface IPortfolioService {
  getPortfolio(): Promise<PortfolioSummary>;
  getHoldings(): Promise<FundHolding[]>;
  getActivityHistory(): Promise<InvestmentActivity[]>;
}

export interface IGoalService {
  getGoals(): Promise<Goal[]>;
  createGoal(goal: Omit<Goal, "id" | "currentAmount" | "status">): Promise<Goal>;
  updateGoalStatus(goalId: string, status: Goal["status"]): Promise<Goal>;
}

export interface IAutoPayService {
  setupMandate(params: {
    dailyAmount: number;
    method: "UPI_AUTOPAY" | "NET_BANKING_ENACH";
    bankAccount: string;
  }): Promise<{ mandateId: string; status: "ACTIVE" | "PENDING" }>;
  pauseAutoPay(mandateId?: string): Promise<{ success: boolean; status: "PAUSED" }>;
  resumeAutoPay(mandateId?: string): Promise<{ success: boolean; status: "ACTIVE" }>;
}
