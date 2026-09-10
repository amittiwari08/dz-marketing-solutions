import { Container } from "@/components/ui/Container";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";

const pillars = [
  { number: "01", title: "Business-First Thinking", text: "Technology starts with the business problem, not the tool." },
  { number: "02", title: "Modern Engineering", text: "Scalable, maintainable development practices, not shortcuts." },
  { number: "03", title: "Scalable Solutions", text: "Architecture built to grow with you, not be rebuilt in a year." },
  { number: "04", title: "Transparent Collaboration", text: "You know what's happening at every stage of the work." },
];

export function WhyChooseUsHome() {
  return (
    <section className="section-py bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedContainer className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.12] text-ink md:text-[2.3rem]">
              Technology should create momentum, not complexity.
            </h2>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1} className="lg:col-span-7">
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              {pillars.map((pillar) => (
                <div key={pillar.number} className="flex flex-col gap-2 py-6 sm:flex-row sm:gap-8">
                  <dt className="w-10 shrink-0 font-display text-sm font-semibold text-ink/30">
                    {pillar.number}
                  </dt>
                  <div>
                    <dt className="text-base font-semibold text-ink">{pillar.title}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-ink-muted">{pillar.text}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </AnimatedContainer>
        </div>
      </Container>
    </section>
  );
}
