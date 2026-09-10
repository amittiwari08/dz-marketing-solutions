"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { RotatingParagraphs } from "@/components/ui/RotatingParagraphs";
import { HeroBackgroundSlider } from "./HeroBackgroundSlider";
import { heroRotation } from "@/data/images";
import { pageParagraphs } from "@/data/pageParagraphs";

const benefits = [
  "AI-powered digital solutions",
  "Scalable software engineering",
  "Business-focused technology strategy",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <HeroBackgroundSlider images={heroRotation} intervalMs={6000} />
      <div className="pointer-events-none absolute inset-0 grain-grid opacity-[0.06]" />

      <Container className="relative pb-24 pt-40 md:pb-32 md:pt-48">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-2 border-l-2 border-brand-teal pl-3 text-xs font-medium uppercase tracking-[0.18em] text-white/50"
          >
            Intelligent Technology Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-[2.6rem] font-semibold leading-[1.06] text-white sm:text-[3.4rem] lg:text-[3.9rem]"
          >
            Intelligent technology.
            <br />
            Built for your next{" "}
            <span className="relative whitespace-nowrap">
              breakthrough.
              <svg
                viewBox="0 0 300 12"
                className="absolute -bottom-1 left-0 h-3 w-full text-brand-teal/70"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8 Q150 2 298 8" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-7 max-w-lg"
          >
            <RotatingParagraphs paragraphs={[...pageParagraphs.home]} dark />
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-7 space-y-2.5"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2.5 text-sm text-white/70 md:text-[0.95rem]">
                <Check className="h-4 w-4 shrink-0 text-brand-teal" strokeWidth={2.5} />
                {benefit}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button href="/services">Explore Our Services</Button>
            <Button href="/contact" variant="secondary" withArrow={false}>
              Let&rsquo;s Talk
            </Button>
          </motion.div>
        </div>
      </Container>

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}
