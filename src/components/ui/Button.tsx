import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-2 focus-visible:outline-brand-teal";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-gold-light text-white shadow-[0_8px_20px_-8px_rgba(17,17,17,0.22)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(17,17,17,0.3)]",
  secondary:
    "border border-white/20 text-white bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/35 hover:-translate-y-0.5",
  ghost:
    "border border-ink/15 text-ink bg-transparent hover:bg-ink/[0.04] hover:-translate-y-0.5",
};

export function Button({
  children,
  variant = "primary",
  withArrow = true,
  className = "",
  href,
  ...rest
}: CommonProps & { href?: string } & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
