import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/AnimatedContainer";
import { Target, Cpu, Sparkles, Globe2, Eye } from "lucide-react";

const points = [
  { icon: Target, title: "Business-First Thinking", text: "Technology starts with the business problem, not the tool." },
  { icon: Cpu, title: "Modern Engineering", text: "We use scalable and maintainable development practices." },
  { icon: Sparkles, title: "AI-Ready", text: "AI is integrated where it creates measurable value — nowhere else." },
  { icon: Globe2, title: "Global Perspective", text: "Solutions designed for distributed, international businesses." },
  { icon: Eye, title: "Transparent Process", text: "Clients understand what's happening at every stage." },
];

export function WhyChooseUs() {
  return (
    <section className="section-py bg-bg-light">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A partner that thinks like an operator, not a vendor."
          align="center"
          className="mx-auto"
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {points.map(({ icon: PIcon, title, text }) => (
            <StaggerItem key={title}>
              <div className="flex h-full flex-col gap-4 rounded-md border border-ink/8 bg-white p-6 shadow-card transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-gold-light">
                  <PIcon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-ink">{title}</h3>
                <p className="text-xs leading-relaxed text-ink-muted">{text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
