import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#063B2A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "InGrow — Invest Every Day. Grow Towards Tomorrow.",
  description:
    "InGrow makes mutual-fund investing simple with recurring investments, AutoPay and goal-based investing.",
  metadataBase: new URL("https://ingrow.in"),
  keywords: [
    "daily mutual fund investing",
    "micro SIP",
    "UPI AutoPay",
    "automated mutual funds India",
    "goal based investing",
    "direct mutual funds",
  ],
  authors: [{ name: "InGrow" }],
  creator: "InGrow Technologies",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ingrow.in",
    siteName: "InGrow",
    title: "InGrow — Invest Every Day. Grow Towards Tomorrow.",
    description:
      "InGrow makes mutual-fund investing simple with recurring investments, AutoPay and goal-based investing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "InGrow — Invest Every Day. Grow Towards Tomorrow.",
    description:
      "InGrow makes mutual-fund investing simple with recurring investments, AutoPay and goal-based investing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialProduct",
              name: "InGrow Daily Mutual Fund Investing",
              description:
                "Simple automated recurring mutual-fund investing platform with UPI AutoPay.",
              provider: {
                "@type": "Organization",
                name: "InGrow Technologies",
                url: "https://ingrow.in",
              },
              feesAndCommissionsSpecification:
                "Direct mutual funds without distributor commissions.",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-warm text-charcoal flex flex-col min-h-screen selection:bg-forest selection:text-mint">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-forest text-warm rounded-lg font-medium shadow-card"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
