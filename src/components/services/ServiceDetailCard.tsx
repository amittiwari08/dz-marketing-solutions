import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Icon } from "@/components/ui/Icon";
import { serviceGradient } from "@/lib/serviceVisuals";
import { serviceImages } from "@/data/images";
import type { Service } from "@/data/services";

type ServiceDetailCardProps = {
  service: Service;
  index: number;
};

export function ServiceDetailCard({
  service,
  index,
}: ServiceDetailCardProps) {
  const photo = serviceImages[service.id];

  return (
    <article
      id={service.id}
      className="
        group
        relative
        w-full
        scroll-mt-28
      "
    >
      {/* =====================================================
          IMAGE + VIEW MORE
      ====================================================== */}
      <div className="relative overflow-visible">
        {/* -----------------------------------------------------
            IMAGE
        ------------------------------------------------------ */}
        <div
          className="
            relative
            h-[260px]
            w-full
            overflow-hidden
            rounded-[22px]
            bg-gray-200

            sm:h-[285px]
            md:h-[300px]
            lg:h-[310px]
          "
        >
          {photo ? (
            <>
              <Image
                src={photo.url}
                alt={photo.alt || service.title}
                fill
                priority={index < 4}
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                sizes="
                  (max-width: 639px) 100vw,
                  (max-width: 1023px) 50vw,
                  (max-width: 1279px) 25vw,
                  25vw
                "
                className="
                  object-cover
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-105
                "
                style={{
                  objectPosition:
                    photo.objectPosition ?? "50% 50%",
                }}
              />

              {/* Image Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/55
                  via-black/10
                  to-transparent
                "
              />
            </>
          ) : (
            <>
              {/* Fallback Background */}
              <div
                className={`
                  absolute
                  inset-0
                  ${serviceGradient(index)}
                `}
              />

              {/* Fallback Icon */}
              <Icon
                name={service.icon}
                className="
                  pointer-events-none
                  absolute
                  bottom-4
                  right-4
                  h-32
                  w-32
                  text-white/20

                  sm:h-36
                  sm:w-36
                "
                strokeWidth={1}
              />

              {/* Fallback Gradient */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/45
                  via-transparent
                  to-transparent
                "
              />
            </>
          )}

          {/* =================================================
              NUMBER
          ================================================== */}
          <div
            className="
              absolute
              left-5
              top-5
              z-10

              sm:left-6
              sm:top-6
            "
          >
            <span
              className="
                flex
                h-10
                min-w-10
                items-center
                justify-center
                rounded-full
                bg-black/60
                px-3
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
              "
            >
              {service.number}
            </span>
          </div>
        </div>

        {/* =================================================
            VIEW MORE BUTTON

            IMPORTANT:
            This is OUTSIDE the overflow-hidden image.
            Therefore it will NEVER be clipped.
        ================================================== */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            z-30
            -translate-x-1/2
            translate-y-1/2
          "
        >
          <Link
            href={`/services#${service.id}`}
            className="
              flex
              min-w-[145px]
              items-center
              justify-center
              gap-2

              whitespace-nowrap

              rounded-[10px]

              bg-[#ff334b]

              px-6
              py-3.5

              text-sm
              font-semibold
              text-white

              shadow-[0_8px_20px_rgba(255,51,75,0.28)]

              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-[#e92740]

              hover:shadow-[0_12px_28px_rgba(255,51,75,0.38)]

              active:translate-y-0

              focus:outline-none
              focus:ring-2
              focus:ring-[#ff334b]
              focus:ring-offset-2
            "
          >
            <span>
              View More
            </span>

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </div>

      {/* =====================================================
          SERVICE CONTENT
      ====================================================== */}
      <div
        className="
          px-1
          pt-9

          sm:px-2
        "
      >
        {/* GET IN TOUCH */}
        <Link
          href="/contact"
          className="
            inline-block
            text-[12px]
            font-semibold
            uppercase
            tracking-[0.03em]
            text-[#ff334b]

            transition-colors
            duration-300

            hover:text-[#d9233a]

            sm:text-[13px]
          "
        >
          GET IN TOUCH
        </Link>

        {/* SERVICE TITLE */}
        <h3
          className="
            mt-2

            min-h-[44px]

            text-[18px]
            font-semibold
            uppercase
            leading-[1.2]
            tracking-[-0.02em]

            text-[#101828]

            transition-colors
            duration-300

            group-hover:text-[#ff334b]

            sm:text-[19px]
            md:text-[20px]
            lg:text-[21px]
          "
        >
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-3

            line-clamp-2
            min-h-[45px]

            text-[13px]
            leading-[1.6]

            text-[#667085]

            sm:text-[14px]
            md:text-[15px]
          "
        >
          {service.shortDescription}
        </p>
      </div>
    </article>
  );
}