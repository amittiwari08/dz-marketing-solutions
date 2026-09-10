"use client";

import { useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/data/faq";

export function FaqAccordionItem({
  item,
  index,
  open,
  onToggle,
}: {
  item: FaqItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-ink/10">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="flex items-center gap-4">
            <span className="font-display text-sm font-semibold text-brand-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-ink md:text-base">
              {item.question}
            </span>
          </span>
          <Plus
            className={`h-5 w-5 shrink-0 text-ink-muted transition-transform duration-300 ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-[3.1rem] text-sm leading-relaxed text-ink-muted">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
