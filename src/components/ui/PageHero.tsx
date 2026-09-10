import { Container } from "./Container";
import { RotatingParagraphs } from "./RotatingParagraphs";
import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  paragraphs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  /** Static single paragraph. Ignored when `paragraphs` is provided. */
  description?: ReactNode;
  /** A set of paragraphs to auto-rotate through instead of a static description. */
  paragraphs?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-bg pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="pointer-events-none absolute inset-0 grain-grid opacity-40" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 bg-radial-fade" />
      <Container className="relative">
        <div className="max-w-3xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
            {eyebrow}
          </span>
          <h1 className="text-4xl font-semibold leading-[1.05] text-white md:text-6xl">
            {title}
          </h1>
          {paragraphs && paragraphs.length > 0 ? (
            <div className="mt-6 max-w-xl">
              <RotatingParagraphs paragraphs={paragraphs} dark />
            </div>
          ) : (
            description && (
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                {description}
              </p>
            )
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
