import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface ServiceCTAProps {
  title?: string;
  subtitle?: string;
}

export function ServiceCTA({
  title = "Ready to elevate your technology capabilities?",
  subtitle = "Talk with our senior engineering team to discuss your project requirements and strategic technology roadmap.",
}: ServiceCTAProps) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-black/60 py-20 text-center md:py-28">
      <div className="pointer-events-none absolute inset-0 grain-grid opacity-25" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-600/20 blur-[130px]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-pink-400">
            Let&rsquo;s Get Started
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary" className="px-8 py-3.5 text-base">
              Get In Touch With DZ MARKETING SOLUTIONS
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
