import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem, AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { Button } from "@/components/ui/Button";
import { FeaturedService } from "./FeaturedService";
import { ServiceRow } from "./ServiceRow";
import { services } from "@/data/services";
import { images } from "@/data/images";

// The two capabilities highlighted on the homepage — swap these ids to
// feature different services without touching the layout.
const FEATURED_IDS = ["artificial-intelligence", "it-consulting"];

export function ServicesPreview() {
  const featured = FEATURED_IDS.map((id) => services.find((s) => s.id === id)).filter(
    (s): s is (typeof services)[number] => Boolean(s)
  );
  const rest = services.filter((s) => !FEATURED_IDS.includes(s.id));

  return (
    <section className="section-py bg-bg">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Future-ready services, built around your business."
            description="From software engineering and AI to cloud, consulting and digital growth, our capabilities cover the technology journey end to end."
            dark
          />
          <Button href="/services" variant="secondary" className="shrink-0">
            View All Services
          </Button>
        </div>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {featured.map((service, i) => (
            <StaggerItem key={service.id}>
              <FeaturedService
                service={service}
                image={service.id === "artificial-intelligence" ? images.featuredAi : undefined}
                gradientIndex={i}
              />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <AnimatedContainer delay={0.1} className="mt-4">
          {rest.map((service) => (
            <ServiceRow key={service.id} service={service} />
          ))}
        </AnimatedContainer>
      </Container>
    </section>
  );
}
