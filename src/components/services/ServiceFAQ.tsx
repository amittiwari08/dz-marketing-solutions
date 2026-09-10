"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import type { ServiceDetail } from "@/data/servicesData";

interface ServiceFAQProps {
  faq: ServiceDetail["faq"];
}

export function ServiceFAQ({ faq }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="border-t border-white/10 bg-bg py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            Everything You Need To Know
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faq.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 text-left text-base font-semibold text-white transition-colors hover:text-pink-400 focus:outline-none"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-white/60 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-pink-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-white/10 px-5 pt-3 pb-5 text-sm leading-relaxed text-white/70">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
