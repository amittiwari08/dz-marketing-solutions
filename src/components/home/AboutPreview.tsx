import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { images } from "@/data/images";

const strengths = [
  { label: "Business-first thinking", text: "Every engagement starts with the problem, not the tech stack." },
  { label: "Modern engineering", text: "Scalable architecture built to be maintained, not just shipped." },
  { label: "Transparent communication", text: "You know what's happening at every stage of the work." },
];

export function AboutPreview() {
  return (
    <section className="section-py bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <AnimatedContainer className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-ink md:text-[2.5rem]">
              Technology should solve problems — not create new ones.
            </h2>
            <div className="mt-8">
              <a
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-gold"
              >
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </AnimatedContainer>

          <AnimatedContainer delay={0.1} className="lg:col-span-7">
            <p className="max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
              We&rsquo;re a technology partner for companies that need
              software, AI and digital infrastructure to actually work for
              the business — not the other way around. Our teams combine
              engineering rigor with a genuine understanding of operations.
            </p>

            <dl className="mt-10 space-y-7 border-t border-ink/10 pt-8">
              {strengths.map((item, i) => (
                <div key={item.label} className="flex gap-6">
                  <dt className="w-8 shrink-0 font-display text-sm font-semibold text-ink/30">
                    {String(i + 1).padStart(2, "0")}
                  </dt>
                  <dd>
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </AnimatedContainer>
        </div>

        <AnimatedContainer delay={0.15} className="relative mt-16 aspect-[4/3] w-full overflow-hidden sm:aspect-[2/1]">
          <Image
            src={images.aboutTeam.url}
            alt={images.aboutTeam.alt}
            fill
            placeholder="blur"
            blurDataURL={images.aboutTeam.blurDataURL}
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="animate-ken-burns object-cover"
            style={{ objectPosition: "50% 35%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-bg/0 to-bg/5" />
        </AnimatedContainer>
      </Container>
    </section>
  );
}
