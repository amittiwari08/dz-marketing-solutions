import Image from "next/image";
import { Container } from "@/components/ui/Container";
import type { ServiceDetail } from "@/data/servicesData";

interface ServiceProcessProps {
  process: ServiceDetail["process"];
  supportingImage?: { url: string; alt: string };
}

export function ServiceProcess({ process, supportingImage }: ServiceProcessProps) {
  return (
    <section className="border-t border-white/10 bg-bg py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Process steps column */}
          <div className={supportingImage ? "lg:col-span-7" : "lg:col-span-12"}>
            <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
              Execution Methodology
            </span>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
              How We Deliver Results
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              A structured, low-risk process engineered for clarity and predictability at every milestone.
            </p>

            <div className="mt-10 space-y-6">
              {process.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-pink-500/30"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-pink-500/20 font-display text-sm font-bold text-pink-400">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Supporting Visual Image */}
          {supportingImage && (
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <Image
                  src={supportingImage.url}
                  alt={supportingImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
