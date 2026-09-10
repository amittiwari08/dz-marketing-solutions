import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/AnimatedContainer";

const steps = [
  { number: "01", title: "Discover", text: "Understand the business, the constraints and the real problem worth solving." },
  { number: "02", title: "Design", text: "Define the UX, the architecture and the shape of the solution." },
  { number: "03", title: "Build", text: "Develop, test and refine in short, visible iterations." },
  { number: "04", title: "Scale", text: "Launch, monitor and continuously improve based on real usage." },
];

export function Process() {
  return (
    <section className="section-py bg-bg-light">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A structured path from problem to product."
        />

        <StaggerGroup className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-3 hidden h-px bg-ink/10 md:block" />
          {steps.map((step) => (
            <StaggerItem key={step.number} className="relative border-t border-ink/10 pt-6 md:border-0 md:pt-0">
              <span className="relative z-10 -mt-9 mb-3 hidden h-6 w-6 items-center justify-center bg-bg-light font-display text-xs font-semibold text-ink/40 md:flex">
                {step.number}
              </span>
              <span className="font-display text-2xl font-semibold text-ink/25 md:hidden">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.text}</p>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
