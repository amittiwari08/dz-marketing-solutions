import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
            dark
              ? "border-white/15 text-brand-teal"
              : "border-ink/10 text-brand-gold"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-semibold leading-[1.1] md:text-[2.6rem] ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            dark ? "text-white/60" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
