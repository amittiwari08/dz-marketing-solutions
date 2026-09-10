import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "./Icon";
import type { Service } from "@/data/services";

export function ServiceCard({
  service,
  dark = true,
}: {
  service: Service;
  dark?: boolean;
}) {
  return (
    <Link
      href={`/services#${service.id}`}
      className={`group relative flex h-full flex-col rounded-lg border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
        dark
          ? "border-white/10 bg-white/[0.03] hover:border-brand-cyan/40 hover:shadow-cyan"
          : "border-ink/10 bg-white hover:border-brand-purple/30 hover:shadow-card"
      }`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-md ${
            dark ? "bg-gradient-purple-violet" : "bg-gradient-cyan-purple"
          }`}
        >
          <Icon name={service.icon} className="h-5 w-5 text-white" />
        </div>
        <span
          className={`font-display text-sm font-semibold ${
            dark ? "text-white/25" : "text-ink/20"
          }`}
        >
          {service.number}
        </span>
      </div>

      <h3
        className={`mt-6 text-lg font-semibold ${dark ? "text-white" : "text-ink"}`}
      >
        {service.title}
      </h3>
      <p
        className={`mt-2 flex-1 text-sm leading-relaxed ${
          dark ? "text-white/55" : "text-ink-muted"
        }`}
      >
        {service.shortDescription}
      </p>

      <span
        className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
          dark ? "text-brand-cyan" : "text-brand-purple"
        }`}
      >
        Explore service
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
