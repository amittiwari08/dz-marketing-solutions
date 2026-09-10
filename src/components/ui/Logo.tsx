import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";

/**
 * The DZ mark has a solid black element that disappears when placed
 * directly on the navy brand background. Rather than filtering or
 * recoloring the source asset (which would damage the brand colors),
 * we give it a small rounded light "chip" behind it — enough contrast
 * to stay legible everywhere, with room to breathe.
 */
export function Logo({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md bg-white px-2 py-1.5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.35)] sm:px-2.5 sm:py-1.5 ${className}`}
    >
      <Image
        src={siteConfig.logo}
        alt={siteConfig.companyName}
        width={176}
        height={120}
        priority={priority}
        className="h-7 w-auto sm:h-8"
      />
    </span>
  );
}
