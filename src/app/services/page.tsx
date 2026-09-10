import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

import { services } from "@/data/services";
import { slugify } from "@/lib/slugify";

const serviceImages = [
  "/images/service-01.png",
  "/images/service-02.png",
  "/images/service-03.png",
  "/images/service-04.png",
  "/images/service-05.png",
  "/images/service-06.png",
  "/images/service-07.png",
  "/images/service-08.png",
  "/images/service-09.png",
  "/images/service-10.png",
  "/images/service-11.png",
];

const whyAstrivion = [
  {
    icon: Sparkles,
    title: "Modern Technology",
    description:
      "We use modern technologies and practical digital strategies to create solutions that are reliable, scalable, and built for long-term growth.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    description:
      "From development to deployment, we focus on quality, security, performance, and dependable solutions for your business.",
  },
  {
    icon: Users,
    title: "Business Focused",
    description:
      "We understand that technology should solve real business problems. Every solution is designed around your goals and users.",
  },
  {
    icon: Zap,
    title: "Fast & Flexible",
    description:
      "Our team works with an agile mindset so your project can move quickly while adapting to changing business requirements.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#101114]">
        <div className="absolute inset-0">
          <img
            src="/images/about-team-enhanced.png"
            alt="DZ MARKETING SOLUTIONS PVT. LTD. team"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              <Sparkles
                size={16}
                className="text-[#ff334b]"
              />

              Digital Solutions That Move Business Forward
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Powering Your{" "}
              <span className="text-[#ff334b]">
                Digital Future
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              We combine technology, creativity, and business
              expertise to build digital solutions that help
              ambitious businesses grow, operate smarter, and
              stay ahead.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff334b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e82c43]"
              >
                Explore Our Services
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Start A Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section
        id="services"
        className="bg-[#f7f7f8] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section heading */}
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff334b]">
              What We Do
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-[#111216] sm:text-4xl lg:text-5xl">
              Services Built Around{" "}
              <span className="text-[#ff334b]">
                Your Goals
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              From technology consulting to digital marketing,
              application development, AI, design, and business
              solutions — we provide everything you need to build
              and grow digitally.
            </p>
          </div>

          {/* =================================================
              SERVICE GRID
          ================================================== */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              /*
               * Your Service type doesn't contain `slug`,
               * therefore we generate it from the title.
               */
              const slug = slugify(service.title);

              /*
               * Map service number to local image.
               */
              const image =
                serviceImages[index] ||
                "/images/service-01.png";

              return (
                <article
                  key={service.id}
                  className="group relative overflow-visible rounded-[28px] bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(0,0,0,0.1)]"
                >
                  {/* =================================================
                      IMAGE + VIEW MORE
                  ================================================== */}

                  {/*
                   * IMPORTANT:
                   * This outer wrapper MUST NOT have overflow-hidden.
                   * Otherwise the View More button gets clipped.
                   */}
                  <div className="relative aspect-[4/3] rounded-[22px]">
                    {/* Image wrapper */}
                    <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-gray-100">
                      <img
                        src={image}
                        alt={service.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* =================================================
                        VIEW MORE BUTTON
                    ================================================== */}
                    <Link
                      href={`/services/${slug}`}
                      aria-label={`View ${service.title}`}
                      className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-[#ff334b] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#e52c43] hover:shadow-xl"
                    >
                      View More

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>

                  {/* =================================================
                      CARD CONTENT
                  ================================================== */}
                  <div className="px-4 pb-5 pt-8">
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#ff334b]">
                      Get In Touch
                    </p>

                    <h3 className="text-xl font-bold leading-tight text-[#111216]">
                      {service.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {service.shortDescription}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-gray-400">
                      <span className="h-px w-6 bg-[#ff334b]" />

                      Learn More
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY DZ MARKETING SOLUTIONS
      ====================================================== */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            {/* Left */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff334b]">
                Why DZ MARKETING SOLUTIONS
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#111216] sm:text-4xl">
                Technology That Works{" "}
                <span className="text-[#ff334b]">
                  For Your Business
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-600">
                At DZ MARKETING SOLUTIONS PVT. LTD., we believe great technology
                is not just about features. It is about creating
                measurable value, simplifying operations,
                improving customer experiences, and helping
                businesses grow with confidence.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#111216] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ff334b]"
              >
                Talk To Our Team

                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Feature cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {whyAstrivion.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gray-100 bg-[#f8f8f9] p-6 transition hover:-translate-y-1 hover:border-[#ff334b]/20 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff334b]/10 text-[#ff334b]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-[#111216]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="px-6 pb-20 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#111216]">
          <div className="relative px-7 py-14 sm:px-12 sm:py-16 lg:px-16">
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff334b]/20 blur-3xl" />

            <div className="relative max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff334b]">
                Let&apos;s Build Something Great
              </p>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Have An Idea?{" "}
                <span className="text-[#ff334b]">
                  Let&apos;s Make It Real.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-white/65">
                Tell us what you are trying to achieve and our
                team will help you turn your idea into a practical
                digital solution.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff334b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e82c43]"
              >
                Start A Project

                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}