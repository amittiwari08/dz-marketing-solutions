import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import type { ServiceDetail } from "@/data/servicesData";

interface ServiceHeroProps {
  service: ServiceDetail;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background ambient accents */}
      <div className="pointer-events-none absolute inset-0 grain-grid opacity-20" />
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-pink-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-6">
            <span className="inline-block rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-pink-400">
              {service.category}
            </span>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {service.heroTitle}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
              {service.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" className="px-6 py-3 text-sm">
                Consult With Our Experts
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Hero Realistic Image Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src={service.heroImage.url}
                alt={service.heroImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
