import { Container } from "@/components/ui/Container";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import type { ServiceDetail } from "@/data/servicesData";

interface ServiceProblemProps {
  businessChallenge: ServiceDetail["businessChallenge"];
}

export function ServiceProblem({ businessChallenge }: ServiceProblemProps) {
  return (
    <section className="border-t border-white/10 bg-black/40 py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400">
            <AlertCircle className="h-6 w-6" />
          </div>
          <h2 className="mt-6 font-display text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
            {businessChallenge.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            {businessChallenge.description}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businessChallenge.points.map((point, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-pink-500/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pink-500" />
                <p className="text-sm leading-relaxed text-white/80">{point}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
