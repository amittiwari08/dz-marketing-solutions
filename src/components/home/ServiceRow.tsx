import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/data/services";

export function ServiceRow({ service }: { service: Service }) {
  return (
    <Link
      href={`/services#${service.id}`}
      className="group flex items-center justify-between gap-6 border-b border-white/10 py-6 transition-colors duration-300 hover:border-white/25"
    >
      <div className="flex items-center gap-5">
        <span className="font-display text-sm font-semibold text-white/25">
          {service.number}
        </span>
        <Icon name={service.icon} className="h-5 w-5 text-white/40 transition-colors duration-300 group-hover:text-brand-cyan" />
        <div>
          <p className="text-sm font-semibold text-white md:text-base">{service.title}</p>
          <p className="mt-0.5 hidden max-w-md text-xs leading-relaxed text-white/45 sm:block">
            {service.shortDescription}
          </p>
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-cyan" />
    </Link>
  );
}
