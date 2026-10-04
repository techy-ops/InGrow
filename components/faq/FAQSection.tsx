"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants/mockData";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-warm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <Badge variant="mint" size="md" className="mb-3">
            QUESTIONS & ANSWERS
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-charcoal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed">
            Everything you need to know about daily mutual-fund investing, UPI AutoPay, and safety.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className={cn(
                  "rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-white border-forest/20 shadow-card"
                    : "bg-white/80 border-charcoal/8 hover:border-charcoal/15"
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={headingId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleQuestion(index)}
                    className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus-ring"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-charcoal">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-mutedText shrink-0 transition-transform duration-200",
                        isOpen && "transform rotate-180 text-forest"
                      )}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-mutedText leading-relaxed border-t border-charcoal/5">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-xs text-mutedText">
          Have more questions? Write to our support desk at{" "}
          <a
            href="mailto:support@ingrow.in"
            className="text-forest font-semibold underline hover:text-ingreen"
          >
            support@ingrow.in
          </a>
        </div>
      </div>
    </section>
  );
};
