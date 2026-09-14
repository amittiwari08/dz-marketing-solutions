import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ShieldCheck } from "lucide-react";
import type { ServiceDetail } from "@/data/servicesData";

interface ServiceWhyChooseProps {
  whyDZ: ServiceDetail["whyDZ"];
  supportingImage?: { url: string; alt: string };
}

export function ServiceWhyChoose({
  whyDZ,
  supportingImage,
}: ServiceWhyChooseProps) {
  return (
    <section className="py-16 md:py-24 bg-bg">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Supporting Image (Left or Right) */}
          {supportingImage && (
            <div className="lg:col-span-5 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                <Image
                  src={supportingImage.url}
                  alt={supportingImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-bg/40 to-transparent" />
              </div>
            </div>
          )}

          {/* Content Column */}
          <div className={supportingImage ? "lg:col-span-7 lg:order-1" : "lg:col-span-12"}>
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
              Why DZ MARKETING SOLUTIONS
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
              {whyDZ.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {whyDZ.description}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {whyDZ.points.map((point, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-pink-500/20"
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-pink-500" />
                    <h3 className="text-base font-semibold text-white">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

