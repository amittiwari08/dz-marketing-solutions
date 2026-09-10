import Image from "next/image";
import Link from "next/link";
import type { ShowcaseService } from "@/data/servicesShowcase";

export function ServiceShowcaseCard({ service }: { service: ShowcaseService }) {
  return (
    <Link
      href={service.href}
      className="group flex h-full shrink-0 flex-col overflow-hidden border border-corp-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      {/* image area — ~62% of card height */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={service.image.url}
          alt={service.image.alt}
          fill
          placeholder="blur"
          blurDataURL={service.image.blurDataURL}
          sizes="(max-width: 768px) 88vw, (max-width: 1200px) 45vw, 24vw"
          className="object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: service.image.objectPosition ?? "50% 50%" }}
        />
        <div className="absolute inset-0 bg-corp-navy/10 transition-colors duration-[400ms] group-hover:bg-corp-navy/20" />
      </div>

      {/* content area */}
      <div className="flex flex-1 flex-col justify-between gap-6 bg-white px-6 py-6 md:px-7 md:py-7">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-corp-gold">
            Get In Touch
          </span>
          <h3 className="mt-2 text-2xl font-semibold leading-[1.15] text-corp-navy md:text-[1.65rem]">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-corp-muted">
            {service.description}
          </p>
        </div>

        <div className="flex justify-end">
          <span className="inline-flex items-center justify-center rounded-full bg-corp-navy px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-300 group-hover:bg-corp-gold">
            View More
          </span>
        </div>
      </div>
    </Link>
  );
}
