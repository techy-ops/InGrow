import React from "react";
import Link from "next/link";
import { TrendingUp, ShieldCheck, ArrowUpRight } from "lucide-react";
import { FOOTER_DISCLAIMER, FOOTER_LINKS } from "@/lib/constants/navigation";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-900 text-warm border-t border-forest-700/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-forest-700/40">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 group focus:outline-none"
              aria-label="InGrow Homepage"
            >
              <div className="w-9 h-9 rounded-xl bg-forest flex items-center justify-center text-mint border border-forest-700 shadow-sm">
                <TrendingUp className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-warm">
                INGROW
              </span>
            </Link>

            <p className="text-sm font-medium text-mint/90 max-w-sm leading-relaxed">
              Invest every day. Grow towards tomorrow.
            </p>

            <p className="text-xs text-mint/60 max-w-sm leading-relaxed">
              Simple, automated mutual-fund micro-investing built for long-term financial discipline in India.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-mint/80 bg-forest/40 border border-forest-700/50 rounded-xl px-3 py-2 w-fit">
              <ShieldCheck className="w-4 h-4 text-mint shrink-0" />
              <span>Direct mutual-fund units routed via regulated infrastructure.</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-mint/70 mb-4">
              Product
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm/80 hover:text-mint transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-mint/70 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm/80 hover:text-mint transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-mint/70 mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-warm/80 hover:text-mint transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-mint/70 mb-4">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-warm/80 hover:text-mint transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                    {link.href.startsWith("mailto:") && (
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer & Legal Notice */}
        {/* LEGAL REVIEW REQUIRED BEFORE PRODUCTION */}
        <div className="pt-8 space-y-4">
          <div className="bg-forest-800/80 rounded-2xl p-4 sm:p-5 border border-forest-700/60">
            <p className="text-xs sm:text-xs text-mint/80 font-medium leading-relaxed">
              <strong className="text-gold-light">Statutory Disclaimer:</strong> {FOOTER_DISCLAIMER}
            </p>
            <p className="text-[11px] text-mint/60 mt-2 leading-relaxed">
              InGrow Technologies does not offer guaranteed returns or advisory speculation. Mutual fund transactions are executed through authorized payment systems and partner AMCs / RTAs. All registered trademarks, logos, and brand names are property of their respective owners.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-mint/60 pt-2">
            <p>© {new Date().getFullYear()} InGrow Technologies Pvt. Ltd. All rights reserved.</p>
            <p className="text-[11px]">
              Crafted for disciplined daily long-term wealth creation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
