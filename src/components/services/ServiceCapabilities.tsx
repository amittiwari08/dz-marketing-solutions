import { Container } from "@/components/ui/Container";
import { CheckCircle } from "lucide-react";
import type { ServiceDetail } from "@/data/servicesData";

interface ServiceCapabilitiesProps {
  capabilities: ServiceDetail["capabilities"];
}

export function ServiceCapabilities({
  capabilities,
}: ServiceCapabilitiesProps) {
  return (
    <section className="border-t border-white/10 bg-black/40 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
            Capabilities Scope
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            What We Provide
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-pink-500/30 hover:bg-white/[0.07]"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
