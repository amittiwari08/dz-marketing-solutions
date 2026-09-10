import { Container } from "@/components/ui/Container";
import { Zap, TrendingUp, ShieldAlert, BarChart3 } from "lucide-react";
import type { ServiceDetail } from "@/data/servicesData";

interface ServiceBenefitsProps {
  benefits: ServiceDetail["benefits"];
}

const icons = [Zap, TrendingUp, ShieldAlert, BarChart3];

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <section className="border-t border-white/10 bg-black/30 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
            Business Impact
          </span>
          <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            Key Business Benefits
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-white/[0.08]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-pink-500/30 bg-pink-500/10 text-pink-400 transition-colors group-hover:bg-pink-500 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {b.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
