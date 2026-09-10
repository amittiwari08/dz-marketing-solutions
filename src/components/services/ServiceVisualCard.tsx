"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/data/servicesData";

interface ServiceVisualCardProps {
  service: ServiceDetail;
  index: number;
}

export function ServiceVisualCard({ service, index }: ServiceVisualCardProps) {
  return (
    <Link
      href={service.route}
      aria-label={`Explore ${service.title}`}
      className="group relative block overflow-hidden rounded-2xl border border-ink/10 bg-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
    >
      {/* Visual Service Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950 sm:aspect-[16/9]">
        <Image
          src={service.mainImage.url}
          alt={service.title}
          fill
          priority={index < 2}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Subtle Gradient Overlay to ensure visual contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />

        {/* Explore Button — Positioned neatly at bottom right */}
        <div className="absolute bottom-5 right-5 z-10 sm:bottom-6 sm:right-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 group-hover:bg-pink-700 group-hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm">
            Explore
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
