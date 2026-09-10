"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { countries } from "@/data/countries";
import { images } from "@/data/images";

// Visual hub point (percentage position on the map image) that connection
// lines radiate from — a design device, not a claimed office location.
const HUB = { x: 50, y: 50 };

export function GlobalPresence() {
  return (
    <section className="section-py bg-bg">
      <Container>
        <SectionHeading
          eyebrow="Global Presence"
          title="Empowering businesses across borders."
          description="Our solutions connect businesses, teams and technology across global markets."
          dark
        />

        <AnimatedContainer delay={0.1} className="relative mt-14 w-full overflow-hidden border border-white/10">
          <div className="relative aspect-[4/3] w-full sm:aspect-[735/401]">
            <Image
              src={images.globalNetwork.url}
              alt={images.globalNetwork.alt}
              fill
              loading="eager"
              placeholder="blur"
              blurDataURL={images.globalNetwork.blurDataURL}
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="animate-ken-burns object-cover"
            />
            <div className="absolute inset-0 bg-bg/10" />

            {/* connection lines + markers, positioned as a percentage overlay */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              {countries.map((c) => (
                <line
                  key={`line-${c.code}`}
                  x1={HUB.x}
                  y1={HUB.y}
                  x2={c.x}
                  y2={c.y}
                  stroke="url(#routeGradient)"
                  strokeWidth={0.25}
                  strokeDasharray="1 1.6"
                  className="animate-dash-move"
                  opacity={0.55}
                  vectorEffect="non-scaling-stroke"
                />
              ))}
              <defs>
                <linearGradient id="routeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2F6B42" />
                  <stop offset="100%" stopColor="#F0FFDF" />
                </linearGradient>
              </defs>
            </svg>

            {countries.map((c) => (
              <div
                key={c.code}
                className="group absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{ left: `${c.x}%`, top: `${c.y}%` }}
              >
                <span className="absolute -inset-2.5 rounded-full bg-brand-teal/25 animate-pulse-soft" />
                <span className="relative block h-2 w-2 rounded-full bg-brand-teal ring-2 ring-bg" />

                <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <div className="rounded-sm border border-white/15 bg-bg-soft px-3 py-2 text-center shadow-card">
                    <p className="text-[11px] font-semibold text-white">{c.name}</p>
                    <p className="text-[10px] text-white/55">{c.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedContainer>

        {/* mobile-friendly chips, always visible */}
        <div className="mt-8 flex flex-wrap gap-3 md:hidden">
          {countries.map((c) => (
            <span
              key={c.code}
              className="border border-white/12 px-4 py-2 text-xs font-medium text-white/70"
            >
              {c.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
