export interface NavItem {
  label: string;
  href: string;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Invest", href: "/investments" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Goals", href: "/goals" },
  { label: "Calculator", href: "/calculator" },
  { label: "Why InGrow", href: "/about" },
];

export const FOOTER_LINKS = {
  product: [
    { label: "Invest", href: "/investments" },
    { label: "Goals", href: "/goals" },
    { label: "Calculator", href: "/calculator" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  company: [
    { label: "About InGrow", href: "/about" },
    { label: "Contact Us", href: "/about#contact" },
    { label: "Careers", href: "/about#careers" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Risk Disclosure", href: "/risk-disclosure" },
    { label: "Regulatory Disclosures", href: "/disclosures" },
    { label: "Grievance Redressal", href: "/grievance-redressal" },
  ],
  support: [
    { label: "Help Center", href: "/how-it-works#faq" },
    { label: "Contact Support", href: "mailto:support@ingrow.in" },
  ],
};

export const FOOTER_DISCLAIMER =
  "Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing. InGrow is a technology platform enabling mutual-fund investments through registered intermediaries and regulated infrastructure. Past performance is not indicative of future returns.";
