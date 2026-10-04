import { FundHolding, Goal, InvestmentActivity, PortfolioSummary } from "../types";

export const MOCK_HOLDINGS: FundHolding[] = [
  {
    id: "fund-01",
    name: "InGrow Selected Index Fund — Nifty 50 Direct Plan",
    category: "Index",
    riskLevel: "Moderately High",
    nav: 59.61,
    units: 1245.62,
    investedAmount: 65800,
    currentValue: 74250,
    returns: 8450,
    returnsPercentage: 12.84,
    allocationPercentage: 59.6,
    expenseRatio: 0.18,
    fundHouse: "ICICI Prudential / InGrow Partner AMC",
    schemeCode: "INF109K012R6",
  },
  {
    id: "fund-02",
    name: "InGrow Dynamic Flexi-Cap Growth Fund",
    category: "Flexi Cap",
    riskLevel: "Very High",
    nav: 84.2,
    units: 382.4,
    investedAmount: 28200,
    currentValue: 32198,
    returns: 3998,
    returnsPercentage: 14.18,
    allocationPercentage: 25.8,
    expenseRatio: 0.45,
    fundHouse: "Parag Parikh / InGrow Partner AMC",
    schemeCode: "INF879O01015",
  },
  {
    id: "fund-03",
    name: "InGrow Conservative Debt & Arbitrage Shield",
    category: "Balanced Hybrid",
    riskLevel: "Low",
    nav: 22.15,
    units: 817.7,
    investedAmount: 16000,
    currentValue: 18112,
    returns: 2112,
    returnsPercentage: 13.2,
    allocationPercentage: 14.6,
    expenseRatio: 0.22,
    fundHouse: "HDFC / InGrow Partner AMC",
    schemeCode: "INF179K01992",
  },
];

export const MOCK_PORTFOLIO: PortfolioSummary = {
  currentValue: 124560,
  investedAmount: 110000,
  totalReturns: 14560,
  totalReturnsPercentage: 13.24,
  dailyInvestment: 500,
  autoPayStatus: "ACTIVE",
  nextInvestmentDate: "Tomorrow, 6:00 AM",
  activeGoalsCount: 4,
  holdings: MOCK_HOLDINGS,
};

export const MOCK_GOALS: Goal[] = [
  {
    id: "goal-1",
    title: "Europe Trip",
    category: "Travel",
    targetAmount: 300000,
    currentAmount: 186000,
    targetDate: "2027-06-30",
    startDate: "2025-01-01",
    dailyContribution: 250,
    status: "ACTIVE",
    iconName: "Plane",
  },
  {
    id: "goal-2",
    title: "New iPhone",
    category: "Tech",
    targetAmount: 150000,
    currentAmount: 111000,
    targetDate: "2026-11-15",
    startDate: "2025-06-01",
    dailyContribution: 200,
    status: "ACTIVE",
    iconName: "Smartphone",
  },
  {
    id: "goal-3",
    title: "New Car",
    category: "Automobile",
    targetAmount: 1000000,
    currentAmount: 280000,
    targetDate: "2029-12-31",
    startDate: "2024-03-01",
    dailyContribution: 400,
    status: "ACTIVE",
    iconName: "Car",
  },
  {
    id: "goal-4",
    title: "My Home",
    category: "Real Estate",
    targetAmount: 2500000,
    currentAmount: 450000,
    targetDate: "2034-03-31",
    startDate: "2023-01-01",
    dailyContribution: 500,
    status: "ACTIVE",
    iconName: "Home",
  },
];

export const MOCK_ACTIVITIES: InvestmentActivity[] = [
  {
    id: "act-01",
    date: "Today, 06:00 AM",
    fundName: "InGrow Selected Index Fund",
    amount: 500,
    type: "DAILY_AUTOPAY",
    status: "COMPLETED",
    unitsAllocated: 8.388,
    nav: 59.61,
  },
  {
    id: "act-02",
    date: "Yesterday, 06:00 AM",
    fundName: "InGrow Selected Index Fund",
    amount: 500,
    type: "DAILY_AUTOPAY",
    status: "COMPLETED",
    unitsAllocated: 8.401,
    nav: 59.52,
  },
  {
    id: "act-03",
    date: "2 Oct 2026, 06:00 AM",
    fundName: "InGrow Dynamic Flexi-Cap Growth Fund",
    amount: 500,
    type: "DAILY_AUTOPAY",
    status: "COMPLETED",
    unitsAllocated: 5.945,
    nav: 84.1,
  },
  {
    id: "act-04",
    date: "1 Oct 2026, 06:00 AM",
    fundName: "InGrow Selected Index Fund",
    amount: 500,
    type: "DAILY_AUTOPAY",
    status: "COMPLETED",
    unitsAllocated: 8.42,
    nav: 59.38,
  },
  {
    id: "act-05",
    date: "30 Sep 2026, 02:15 PM",
    fundName: "InGrow Selected Index Fund",
    amount: 2500,
    type: "LUMPSUM",
    status: "COMPLETED",
    unitsAllocated: 42.12,
    nav: 59.35,
  },
];

export const SECURITY_FEATURES = [
  {
    number: "01",
    title: "Encrypted Connections",
    description:
      "All web and API communications utilize TLS 1.3 encryption with forward secrecy to safeguard information in transit.",
  },
  {
    number: "02",
    title: "Data Protection",
    description:
      "User information is segmented and encrypted at rest with multi-layer access controls, adhering to strict data minimization principles.",
  },
  {
    number: "03",
    title: "Secure Authentication",
    description:
      "Time-based cryptographic OTPs and modern device-based authentication prevent unauthorized session hijacking and account access.",
  },
  {
    number: "04",
    title: "Privacy by Design",
    description:
      "InGrow does not sell or distribute personal financial data to marketing third parties or predatory lenders. Your data remains solely yours.",
  },
  {
    number: "05",
    title: "Auditable Systems",
    description:
      "Every mandate trigger, order dispatch, and confirmation produces an immutable transaction log for clear reconciliation.",
  },
  {
    number: "06",
    title: "Security Testing",
    description:
      "Continuous dependency audits, automated vulnerability scanning, and periodic code reviews help maintain resilient infrastructure.",
  },
];

export const WHY_INGROW_CARDS = [
  {
    title: "SIMPLE",
    tagline: "Zero noise, pure clarity",
    description:
      "No trading charts, derivatives, tips, or spam notifications. Only clean, low-cost mutual funds that make long-term sense.",
    badge: "Distraction Free",
  },
  {
    title: "AUTOMATED",
    tagline: "UPI AutoPay sets it on autopilot",
    description:
      "Set your daily amount once. Micro-SIPs process automatically every morning, building disciplined habits without manual friction.",
    badge: "Frictionless Habit",
  },
  {
    title: "GOAL-DRIVEN",
    tagline: "Invest for things that matter",
    description:
      "Tag your investments to real-world dreams—whether an annual trip, a down payment, or long-term financial independence.",
    badge: "Purposeful Growth",
  },
  {
    title: "TRANSPARENT",
    tagline: "Know every single rupee's journey",
    description:
      "Zero hidden fees. Direct mutual fund units held in your name with clear routing through regulated infrastructure.",
    badge: "100% Direct",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "CREATE YOUR ACCOUNT",
    subtitle: "Quick Paperless Setup",
    description:
      "Register with your mobile number and complete your required paperless KYC in under 3 minutes.",
    icon: "UserCheck",
  },
  {
    step: "02",
    title: "CHOOSE YOUR INVESTMENT",
    subtitle: "Curated High-Quality Funds",
    description:
      "Select from proven, well-diversified mutual fund options aligned with your horizon and risk profile.",
    icon: "PieChart",
  },
  {
    step: "03",
    title: "SET YOUR AMOUNT",
    subtitle: "Start With Comfort",
    description:
      "Choose a daily figure—₹100, ₹250, ₹500, or custom. An amount that feels effortless to maintain every day.",
    icon: "Coins",
  },
  {
    step: "04",
    title: "AUTOMATE & TRACK",
    subtitle: "UPI AutoPay & Real-Time Tracking",
    description:
      "Authenticate your recurring AutoPay mandate once. Track daily units, returns, and goal progress seamlessly.",
    icon: "Zap",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is InGrow?",
    answer:
      "InGrow is an Indian investing platform dedicated to simple, automated daily mutual-fund investing. Instead of relying on irregular lump-sum investments, InGrow helps you build a disciplined daily habit with small amounts starting from ₹100/day.",
  },
  {
    question: "How does daily investing work?",
    answer:
      "Once you select your chosen mutual fund and set an amount (e.g. ₹500/day), InGrow triggers a daily automated transfer via UPI AutoPay. The funds are routed to the registered Asset Management Company (AMC), which allocates mutual fund units directly to your folio at the applicable NAV.",
  },
  {
    question: "How does AutoPay work?",
    answer:
      "UPI AutoPay allows recurring debits to be authorized once using your favourite UPI app (GPay, PhonePe, Paytm, or BHIM). You authorize a recurring mandate, and subsequent daily investments execute automatically without needing an OTP or UPI PIN every day.",
  },
  {
    question: "Can I increase my daily investment?",
    answer:
      "Yes. You can modify or top-up your daily contribution at any time from your InGrow dashboard. If the updated amount exceeds your current mandate limit, you will simply approve a revised AutoPay authorization.",
  },
  {
    question: "Can I pause AutoPay?",
    answer:
      "Absolutely. You have 100% control over your money. You can pause, adjust, or cancel your AutoPay mandate with a single click inside the app whenever you need to take a break—without penalty.",
  },
  {
    question: "Where is my money invested?",
    answer:
      "Your money is invested directly into SEBI-regulated Indian mutual funds managed by registered AMCs (Asset Management Companies). InGrow acts as your technology and access platform; all fund units are created in your legal folio and held securely.",
  },
  {
    question: "Can I withdraw my investment?",
    answer:
      "Yes. For open-ended mutual funds, you can place a redemption request anytime directly from the platform. Redeemed funds are credited directly into your verified bank account according to the scheme's standard settlement cycle (typically T+1 or T+2 business days).",
  },
  {
    question: "What happens if AutoPay fails?",
    answer:
      "If a daily AutoPay debit fails due to temporary insufficient bank balance or bank server downtime, no mutual fund units are purchased for that specific day. InGrow will notify you, and your bank will not penalize you. The schedule resumes the next day or can be retried manually.",
  },
  {
    question: "Are mutual-fund returns guaranteed?",
    answer:
      "No. Mutual fund investments are subject to market risks. Values fluctuate with financial markets and past performance is not a guarantee of future returns. Any numbers shown in calculators are purely illustrative projections based on historical assumptions.",
  },
  {
    question: "What KYC information is required?",
    answer:
      "As mandated by Indian regulatory framework for mutual fund investments, you will need your PAN card, basic personal identity details, address verification (via DigiLocker or Aadhaar OTP), and a bank account in your name for debits and redemptions.",
  },
  {
    question: "How does InGrow make money?",
    answer:
      "[LEGAL & COMMERCIAL REVIEW REQUIRED BEFORE PRODUCTION: Specific commercial disclosures regarding direct plans vs advisory advisory fees or distribution fees will be detailed here prior to live commercial launch.]",
  },
];
