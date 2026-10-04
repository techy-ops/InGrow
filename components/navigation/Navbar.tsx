"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, TrendingUp } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-warm/85 backdrop-blur-md border-b border-charcoal/8 py-3.5 shadow-subtle"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group focus-ring rounded-lg py-1 px-1.5"
            aria-label="InGrow Homepage"
          >
            <div className="w-8 h-8 rounded-xl bg-forest flex items-center justify-center text-mint shadow-sm group-hover:scale-105 transition-transform duration-200">
              <TrendingUp className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="font-display font-black text-xl tracking-tight text-forest">
              INGROW
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-ring",
                    isActive
                      ? "text-forest bg-forest/8 font-semibold"
                      : "text-charcoal/80 hover:text-forest hover:bg-forest/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Auth CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="md" className="font-semibold text-charcoal">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />}
              >
                Start Investing
              </Button>
            </Link>
          </div>

          {/* Mobile Right Controls: Start button + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/signup">
              <Button variant="primary" size="sm" className="font-semibold text-xs px-3">
                Start
              </Button>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-charcoal hover:bg-forest/5 focus-ring"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-warm/98 backdrop-blur-xl border-b border-charcoal/10 px-4 pt-3 pb-6 shadow-floating overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5 pt-2">
              {NAV_LINKS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      isActive
                        ? "bg-forest/10 text-forest font-semibold"
                        : "text-charcoal hover:bg-forest/5 hover:text-forest"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-charcoal/10 flex flex-col gap-2.5">
                <Link href="/login" className="w-full">
                  <Button variant="outline" size="md" className="w-full justify-center">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup" className="w-full">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Start Investing →
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
