import { Icon } from "./Icon";
import type { Industry } from "@/data/industries";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <div className="group flex flex-col items-start gap-4 rounded-md border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40 hover:bg-white/[0.06]">
      <div className="flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:border-brand-cyan/40">
        <Icon name={industry.icon} className="h-5 w-5 text-brand-cyan" />
      </div>
      <span className="text-sm font-medium text-white/85">{industry.name}</span>
    </div>
  );
}
