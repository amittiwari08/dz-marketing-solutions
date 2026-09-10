"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotatingParagraphs({
  paragraphs,
  intervalMs = 5000,
  dark = true,
  className = "",
}: {
  paragraphs: string[];
  intervalMs?: number;
  dark?: boolean;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paragraphs.length <= 1) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % paragraphs.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paragraphs.length, intervalMs]);

  function goTo(i: number) {
    setIndex(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % paragraphs.length);
    }, intervalMs);
  }

  if (paragraphs.length === 0) return null;

  return (
    <div className={className}>
      <div className="relative min-h-[3.5em]" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`text-base leading-relaxed md:text-lg ${
              dark ? "text-white/60" : "text-ink-muted"
            }`}
          >
            {paragraphs[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {paragraphs.length > 1 && (
        <div className="mt-5 flex items-center gap-2">
          {paragraphs.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show paragraph ${i + 1} of ${paragraphs.length}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-brand-teal"
                  : dark
                    ? "w-1.5 bg-white/25 hover:bg-white/40"
                    : "w-1.5 bg-ink/20 hover:bg-ink/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
