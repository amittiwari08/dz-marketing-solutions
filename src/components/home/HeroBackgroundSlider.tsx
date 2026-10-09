
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
  const [isMobile, setIsMobile] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect mobile viewport and update image framing when it changes.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobile();
    mediaQuery.addEventListener("change", updateMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateMobile);
    };
  }, []);

  // Rotate background images while respecting reduced-motion preferences.
  useEffect(() => {
    if (images.length <= 1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Keep all frames mounted; rotation only changes opacity. */}
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
            {...(i === 0
              ? { priority: true }
              : { loading: "eager" as const })}
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: isMobile
                ? img.mobileObjectPosition ??
                  img.objectPosition ??
                  "50% 50%"
                : img.objectPosition ?? "50% 50%",
            }}
          />
        </div>
      ))}

      {/* Preserve the existing text-legibility overlays. */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/55 to-transparent md:via-bg/45 md:to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
    </div>
  );
}
