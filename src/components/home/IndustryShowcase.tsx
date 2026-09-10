import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedContainer } from "@/components/ui/AnimatedContainer";
import { images } from "@/data/images";

const benefits = [
  "Business-specific solution design",
  "Scalable architecture",
  "Transparent delivery",
];

export function IndustryShowcase() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            src={images.industryShowcase.url}
            alt={images.industryShowcase.alt}
            fill
            placeholder="blur"
            blurDataURL={images.industryShowcase.blurDataURL}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="animate-ken-burns object-cover"
            style={{ objectPosition: "0% 50%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent lg:bg-gradient-to-l lg:from-bg lg:via-bg/10 lg:to-transparent" />
        </div>

        <div className="flex items-center px-6 py-16 md:px-12 lg:py-24">
          <AnimatedContainer className="max-w-md">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
              Solution Showcase
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.1] text-white md:text-[2.4rem]">
              Technology that understands your business.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
              We don&rsquo;t apply the same template across industries. Every
              engagement starts with how your specific business operates,
              then builds outward from there.
            </p>

            <ul className="mt-7 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5 text-sm text-white/75 md:text-base">
                  <Check className="h-4 w-4 shrink-0 text-brand-teal" strokeWidth={2.5} />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="/services" variant="secondary" withArrow={false}>
                See How We Work
              </Button>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
