export interface FundHolding {
  id: string;
  name: string;
  category: "Large Cap" | "Flexi Cap" | "Index" | "Balanced Hybrid" | "Small Cap";
  riskLevel: "Low" | "Moderate" | "Moderately High" | "Very High";
  nav: number;
  units: number;
  investedAmount: number;
  currentValue: number;
  returns: number;
  returnsPercentage: number;
  allocationPercentage: number;
  expenseRatio: number;
  fundHouse: string;
  schemeCode?: string;
}

export interface PortfolioSummary {
  currentValue: number;
  investedAmount: number;
  totalReturns: number;
  totalReturnsPercentage: number;
  dailyInvestment: number;
  autoPayStatus: "ACTIVE" | "PAUSED" | "PENDING_SETUP";
  nextInvestmentDate: string;
  activeGoalsCount: number;
  holdings: FundHolding[];
}

export interface InvestmentActivity {
  id: string;
  date: string;
  fundName: string;
  amount: number;
  type: "DAILY_AUTOPAY" | "LUMPSUM" | "GOAL_CONTRIBUTION";
  status: "COMPLETED" | "PROCESSING" | "SCHEDULED";
  unitsAllocated: number;
  nav: number;
}

export interface Goal {
  id: string;
  title: string;
  category: "Travel" | "Tech" | "Automobile" | "Real Estate" | "Education" | "Custom";
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  startDate: string;
  dailyContribution: number;
  status: "ACTIVE" | "COMPLETED" | "PAUSED";
  iconName: string;
}

export interface CalculationResult {
  dailyAmount: number;
  monthlyAmount: number;
  annualAmount: number;
  years: number;
  annualReturnRate: number;
  totalInvested: number;
  estimatedFutureValue: number;
  estimatedWealthGain: number;
  breakdownByYear: Array<{
    year: number;
    invested: number;
    value: number;
    wealthGain: number;
  }>;
}

export interface SignupFormState {
  mobileNumber: string;
  otp: string;
  fullName: string;
  email: string;
  panNumber: string;
  dateOfBirth: string;
  kycStatus: "PENDING" | "VERIFIED" | "IN_REVIEW";
  bankAccount: string;
  ifscCode: string;
  bankName: string;
  selectedFundId: string;
  dailyAmount: number;
  autoPayMethod: "UPI_AUTOPAY" | "NET_BANKING_ENACH";
  mandateStatus: "PENDING" | "ACTIVE";
}
