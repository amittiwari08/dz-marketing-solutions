"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { CuratedImage } from "@/data/images";

export function HeroBackgroundSlider({
  images,
  intervalMs = 2000,
}: {
  images: CuratedImage[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* All frames stay mounted from first paint — rotation only toggles
          opacity, so nothing is fetched or painted late. */}
      {images.map((img, i) => (
        <div
          key={img.url}
          className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <Image
            src={img.url}
            alt=""
            fill
            placeholder="blur"
            blurDataURL={img.blurDataURL}
            {...(i === 0 ? { priority: true } : { loading: "eager" as const })}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: img.objectPosition ?? "50% 50%" }}
          />
        </div>
      ))}

      {/* Legibility wash — localized behind the text column (left side on
          desktop) so the photograph stays visible everywhere else. */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent md:via-bg/45 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
    </div>
  );
}
