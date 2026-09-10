"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[60] bg-white md:hidden"
        >
          <div className="container-x flex h-[76px] items-center justify-between">
            <Link
              href="/"
              onClick={onClose}
              className="flex min-w-0 flex-1 items-center gap-2"
            >
              <Logo />
              <span className="min-w-0 whitespace-normal break-words font-display text-xs font-bold uppercase leading-[1.15] tracking-wide text-ink">
                {siteConfig.shortName}
              </span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ink/15 text-ink"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="container-x mt-10 flex flex-col gap-1">
            {siteConfig.nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-ink/8 py-5 font-display text-3xl font-semibold text-ink"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="container-x mt-10">
            <Button href="/contact" className="w-full justify-center">
              Let&rsquo;s Talk
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
