import { Container } from "@/components/ui/Container";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { siteConfig } from "@/data/siteConfig";

export function WhoWeAre() {
  return (
    <section className="section-py bg-bg-light">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <AnimatedContainer>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">
            Who We Are
          </span>
          <h2 className="text-3xl font-semibold leading-[1.1] text-ink md:text-[2.4rem]">
            A technology partner built for the way businesses actually work.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
            {siteConfig.companyName} was formed around a simple observation: most
            technology projects fail not because of bad code, but because of
            a poor understanding of the business behind them. We bring
            together engineers, designers and strategists who take the time
            to understand operations before writing a single line of code.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
            Today, our teams work across software engineering, cloud
            infrastructure, AI, and digital marketing — supporting clients
            from early-stage product builds to enterprise-scale
            modernization.
          </p>
        </AnimatedContainer>

        <AnimatedContainer delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-lg border border-white/10 bg-bg p-8">
              <p className="font-display text-4xl font-bold text-gradient-teal-gold">01</p>
              <p className="mt-3 text-sm font-semibold text-white">
                Understand the operation
              </p>
              <p className="mt-1 text-xs leading-relaxed text-white/55">
                We start with how the business actually runs, not a generic
                discovery template.
              </p>
            </div>
            <div className="rounded-lg border border-ink/8 bg-white p-6 shadow-card">
              <p className="font-display text-3xl font-bold text-gradient-gold-light">02</p>
              <p className="mt-3 text-sm font-semibold text-ink">Design for use</p>
            </div>
            <div className="rounded-lg border border-ink/8 bg-white p-6 shadow-card">
              <p className="font-display text-3xl font-bold text-gradient-gold-light">03</p>
              <p className="mt-3 text-sm font-semibold text-ink">Engineer to last</p>
            </div>
          </div>
        </AnimatedContainer>
      </Container>
    </section>
  );
}
