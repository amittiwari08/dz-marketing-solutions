import { Container } from "@/components/ui/Container";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section className="border-b border-ink/8 bg-bg-light">
      <Container>
        <div className="grid grid-cols-2 divide-y divide-ink/8 md:grid-cols-4 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center md:py-14">
              <div className="font-display text-3xl font-semibold text-ink md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-ink-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
