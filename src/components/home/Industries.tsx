import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/AnimatedContainer";
import { Icon } from "@/components/ui/Icon";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section className="section-py bg-bg-light">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Powering innovation across sectors."
          description="We deliver practical digital solutions across diverse industries, combining technology, domain understanding and strategic insight."
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry) => (
            <StaggerItem key={industry.id}>
              <div className="group flex h-full flex-col items-start gap-4 border border-ink/10 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/30">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-gold/8 transition-colors duration-300 group-hover:bg-brand-gold/14">
                  <Icon name={industry.icon} className="h-6 w-6 text-brand-gold" />
                </div>
                <span className="text-sm font-semibold leading-snug text-ink">
                  {industry.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
