import { Container } from "@/components/ui/Container";
import { ServiceShowcaseCard } from "./ServiceShowcaseCard";
import { servicesShowcase } from "@/data/servicesShowcase";

export function ServicesShowcase() {
  return (
    <section className="section-py bg-corp-bg">
      <Container>
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-corp-gold">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl font-semibold leading-[1.1] text-corp-navy md:text-[3.25rem]">
            Technology Solutions Built Around Your Business.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-corp-muted md:text-lg">
            From application development and cloud solutions to technical
            management and digital growth, we help businesses build,
            modernize, and scale with confidence.
          </p>
        </div>

        {/* One column on mobile, two on tablet, four on desktop — every
            card is fully visible at every breakpoint, never clipped. */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-3">
          {servicesShowcase.map((service) => (
            <ServiceShowcaseCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
