import { Container } from "./Container";
import { Button } from "./Button";
import { AnimatedContainer } from "./AnimatedContainer";
import { ReactNode } from "react";

export function CTASection({
  title,
  description,
  buttonLabel = "Send Your Requirement",
  buttonHref = "/contact",
}: {
  title: ReactNode;
  description?: ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-bg-soft py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent" />
      <Container className="relative text-center">
        <AnimatedContainer>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-[1.1] text-white md:text-[2.75rem]">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/60 md:text-lg">
              {description}
            </p>
          )}
          <div className="mt-9">
            <Button href={buttonHref}>{buttonLabel}</Button>
          </div>
        </AnimatedContainer>
      </Container>
    </section>
  );
}
