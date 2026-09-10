import { Container } from "@/components/ui/Container";
import { StaggerGroup, StaggerItem } from "@/components/ui/AnimatedContainer";
import { Compass, Telescope } from "lucide-react";

export function MissionVision() {
  return (
    <section className="section-py bg-bg">
      <Container>
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          <StaggerItem>
            <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-teal-gold">
                <Compass className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                To help businesses build and operate digital systems that
                simplify their work — engineered with the same rigor we would
                want in our own operations.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="h-full rounded-lg border border-white/10 bg-white/[0.03] p-9">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-gold-rust">
                <Telescope className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                To be the technology partner distributed, ambitious
                businesses trust with the systems their operations run on —
                across every market we serve.
              </p>
            </div>
          </StaggerItem>
        </StaggerGroup>
      </Container>
    </section>
  );
}
