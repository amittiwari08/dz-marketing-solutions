import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/AnimatedContainer";
import { Handshake, ShieldCheck, Rocket, Users } from "lucide-react";

const values = [
  { icon: Handshake, title: "Accountability", text: "We own outcomes, not just deliverables." },
  { icon: ShieldCheck, title: "Integrity", text: "Honest recommendations, even when they're inconvenient." },
  { icon: Rocket, title: "Craft", text: "We sweat the details other vendors skip." },
  { icon: Users, title: "Partnership", text: "We work as an extension of your team, not a vendor at arm's length." },
];

export function Values() {
  return (
    <section className="section-py bg-bg-light">
      <Container>
        <SectionHeading eyebrow="Values" title="What we hold ourselves to." align="center" className="mx-auto" />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: VIcon, title, text }) => (
            <StaggerItem key={title}>
              <div className="flex h-full flex-col gap-4 rounded-md border border-ink/8 bg-white p-6 shadow-card">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-gold-light">
                  <VIcon className="h-5 w-5 text-white" />
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
