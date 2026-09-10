"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { FaqAccordionItem } from "./FaqAccordionItem";
import { faqs } from "@/data/faq";

export function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="section-py bg-brand-mint">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedContainer className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-ink md:text-[2.6rem]">
              Questions?
              <br />
              Let&rsquo;s make things clear.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-muted">
              Here are some of the questions clients ask us most often about
              working together.
            </p>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1} className="space-y-3 lg:col-span-7">
            {faqs.map((item, index) => (
              <FaqAccordionItem
                key={item.id}
                item={item}
                index={index}
                open={openId === item.id}
                onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
              />
            ))}
          </AnimatedContainer>
        </div>
      </Container>
    </section>
  );
}
