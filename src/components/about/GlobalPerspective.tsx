import { Container } from "@/components/ui/Container";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { countries } from "@/data/countries";

export function GlobalPerspective() {
  return (
    <section className="section-py bg-bg">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <AnimatedContainer>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
            Global Perspective
          </span>
          <h2 className="text-3xl font-semibold leading-[1.1] text-white md:text-[2.4rem]">
            Designed for distributed, international businesses.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
            Our teams work across time zones and markets, which shapes how we
            build: async-friendly processes, clear documentation, and
            systems that don&rsquo;t assume everyone is in the same office.
          </p>
        </AnimatedContainer>

        <AnimatedContainer delay={0.1} className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {countries.map((c) => (
            <div
              key={c.code}
              className="rounded-md border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <p className="text-sm font-semibold text-white">{c.name}</p>
              <p className="mt-1 text-[11px] text-white/45">{c.label}</p>
            </div>
          ))}
        </AnimatedContainer>
      </Container>
    </section>
  );
}
