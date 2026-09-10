import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { serviceGradient } from "@/lib/serviceVisuals";
import type { Service } from "@/data/services";
import type { CuratedImage } from "@/data/images";

export function FeaturedService({
  service,
  image,
  gradientIndex = 0,
}: {
  service: Service;
  /** Real photo background. Omit to use the themed gradient + icon watermark instead. */
  image?: CuratedImage;
  gradientIndex?: number;
}) {
  return (
    <Link
      href={`/services#${service.id}`}
      className="group flex h-full flex-col overflow-hidden border border-white/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {image ? (
          <>
            <Image
              src={image.url}
              alt=""
              fill
              placeholder="blur"
              blurDataURL={image.blurDataURL}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              style={{ objectPosition: image.objectPosition ?? "50% 50%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/15 to-transparent" />
          </>
        ) : (
          <>
            <div className={`absolute inset-0 ${serviceGradient(gradientIndex)} opacity-90`} />
            <Icon
              name={service.icon}
              className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 text-white/15"
              strokeWidth={1.2}
            />
          </>
        )}
        <span className="absolute left-6 top-6 font-display text-sm font-semibold text-white">
          {service.number} — Featured
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between bg-bg-soft px-7 py-8 md:px-8">
        <div>
          <h3 className="text-xl font-semibold text-white md:text-2xl">
            {service.title}
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
            {service.description}
          </p>
          <ul className="mt-5 space-y-1.5">
            {service.capabilities.slice(0, 3).map((cap) => (
              <li key={cap} className="text-sm text-white/50">
                — {cap}
              </li>
            ))}
          </ul>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
          Explore Service
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
