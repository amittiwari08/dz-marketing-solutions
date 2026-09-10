import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/AnimatedContainer";
import { technologies } from "@/data/technologies";

export function Technologies() {
  return (
    <section className="section-py bg-bg">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Technology capability across the full stack."
          dark
        />

        <StaggerGroup className="mt-14 grid gap-x-12 gap-y-6 border-t border-white/10 pt-10 sm:grid-cols-2">
          {technologies.map((group) => (
            <StaggerItem key={group.category}>
              <div className="flex flex-col gap-1 border-b border-white/10 py-3 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-32 shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-brand-teal">
                  {group.category}
                </span>
                <span className="text-sm text-white/60">{group.items.join(" · ")}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
