import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    CircleCheck,
    Sparkles,
} from "lucide-react";

import { services } from "@/data/services";
import { serviceDetails } from "@/data/serviceDetails";
import { slugify } from "@/lib/slugify";

type PageProps = {
    params: {
        slug: string;
    };
};

export function generateStaticParams() {
    return services.map((service) => ({
        slug: slugify(service.title),
    }));
}

export function generateMetadata({ params }: PageProps) {
    const service = services.find(
        (item) => slugify(item.title) === params.slug
    );

    const detail =
        serviceDetails[
        params.slug as keyof typeof serviceDetails
        ];

    if (!service) {
        return {
            title: "Service | DZ MARKETING SOLUTIONS",
        };
    }

    return {
        title: `${service.title} | DZ MARKETING SOLUTIONS`,
        description:
            detail?.heroDescription || service.shortDescription,
    };
}

export default function ServiceDetailPage({
    params,
}: PageProps) {
    const service = services.find(
        (item) => slugify(item.title) === params.slug
    );

    if (!service) {
        notFound();
    }

    const detail =
        serviceDetails[
        params.slug as keyof typeof serviceDetails
        ];

    /*
     * Fallback content keeps every service route working
     * even when detailed content hasn't been added yet.
     */

    const benefits =
        detail?.benefits?.length
            ? detail.benefits
            : [
                {
                    title: "Business-Focused Solutions",
                    description:
                        "We create practical solutions around your business requirements, users, and long-term goals.",
                },
                {
                    title: "Experienced Team",
                    description:
                        "Our team combines technical expertise, creativity, and business understanding to deliver dependable results.",
                },
                {
                    title: "Scalable Approach",
                    description:
                        "Our solutions are designed to grow with your business and adapt as your requirements change.",
                },
                {
                    title: "Reliable Support",
                    description:
                        "We focus on quality, performance, and ongoing support throughout your digital journey.",
                },
            ];

    const process =
        detail?.process?.length
            ? detail.process
            : [
                {
                    number: "01",
                    title: "We Understand Your Requirements",
                    description:
                        "We learn about your business, goals, users, challenges, and technical requirements.",
                },
                {
                    number: "02",
                    title: "We Plan The Solution",
                    description:
                        "We create a clear strategy and implementation plan based on your needs.",
                },
                {
                    number: "03",
                    title: "We Build & Implement",
                    description:
                        "We develop and implement the solution with a focus on quality, usability, and performance.",
                },
                {
                    number: "04",
                    title: "We Test & Improve",
                    description:
                        "Everything is reviewed, tested, and refined before delivery.",
                },
                {
                    number: "05",
                    title: "We Support Your Growth",
                    description:
                        "We continue helping you optimize and improve your digital solution after launch.",
                },
            ];

    const faqs =
        detail?.faqs?.length
            ? detail.faqs
            : [
                {
                    question: `What does your ${service.title} service include?`,
                    answer:
                        "Our service is tailored around your business requirements. We first understand your goals and then recommend the right strategy, technology, implementation, and support.",
                },
                {
                    question:
                        "Can you customize the solution for my business?",
                    answer:
                        "Yes. We do not believe in one-size-fits-all solutions. Our approach is customized around your business, users, processes, and objectives.",
                },
                {
                    question: "How long does a project take?",
                    answer:
                        "Project timelines depend on the scope, requirements, integrations, and complexity. After understanding your requirements, we can provide a realistic project plan.",
                },
                {
                    question:
                        "Do you provide ongoing support?",
                    answer:
                        "Yes. We can provide ongoing technical support, maintenance, optimization, and improvements after the initial implementation.",
                },
                {
                    question: "How do I get started?",
                    answer:
                        "Simply contact our team and tell us about your requirement. We will discuss your goals and recommend the best next steps.",
                },
            ];

    const image =
        `/images/service-${String(service.number).padStart(
            2,
            "0"
        )}.png`;

    const heroTitle =
        detail?.heroTitle || service.title;

    const heroSubtitle =
        detail?.heroSubtitle || service.shortDescription;

    const heroDescription =
        detail?.heroDescription || service.description;

    const whyTitle =
        detail?.whyTitle ||
        `Why Choose DZ MARKETING SOLUTIONS for ${service.title}?`;

    const whyDescription =
        detail?.whyDescription ||
        service.description;

    const processTitle =
        detail?.processTitle ||
        "Know Our Simple Process";

    const processDescription =
        detail?.processDescription ||
        "Our simple and transparent approach keeps your technology reliable while allowing your team to focus on what matters most.";

    const manageTitle =
        detail?.manageTitle ||
        "What We Offer";

    const manageItems =
        detail?.manageItems?.length
            ? detail.manageItems
            : service.capabilities;

    const closingTitle =
        detail?.closingTitle ||
        `Take ${service.title} Off Your Plate`;

    const closingDescription =
        detail?.closingDescription ||
        service.businessValue;

    return (
        <main className="bg-white">
            {/* =====================================================
          HERO
      ====================================================== */}
            <section className="relative overflow-hidden bg-[#101114]">
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt={service.title}
                        className="h-full w-full object-cover opacity-35"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#101114] via-[#101114]/90 to-[#101114]/55" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <Link
                        href="/services"
                        className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-white/65 transition hover:text-white"
                    >
                        <ArrowLeft size={16} />
                        Back To Services
                    </Link>

                    <div className="max-w-4xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                            <Sparkles
                                size={14}
                                className="text-[#ff334b]"
                            />
                            DZ MARKETING SOLUTIONS
                        </div>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            {heroTitle}
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                            {heroSubtitle}
                        </p>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">
                            {heroDescription}
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-[#ff334b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e82c43]"
                            >
                                Start A Project
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="#why"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                Explore Service
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
            <section
                id="why"
                className="bg-white py-20 sm:py-24"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff334b]">
                            Why DZ MARKETING SOLUTIONS
                        </p>

                        <h2 className="text-3xl font-bold leading-tight text-[#111216] sm:text-4xl">
                            {whyTitle}
                        </h2>

                        <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                            {whyDescription}
                        </p>
                    </div>

                    {/* BENEFITS */}
                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {benefits.map((benefit, index) => (
                            <div
                                key={`${benefit.title}-${index}`}
                                className="group rounded-3xl border border-gray-100 bg-[#f8f8f9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#ff334b]/20 hover:shadow-xl"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff334b]/10 text-[#ff334b]">
                                    <CheckCircle2 size={22} />
                                </div>

                                <h3 className="mt-5 text-lg font-bold text-[#111216]">
                                    {benefit.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
          CTA
      ====================================================== */}
            <section className="px-6 pb-20 lg:px-8">
                <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#111216]">
                    <div className="relative px-7 py-12 sm:px-12 lg:px-16 lg:py-14">
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff334b]/20 blur-3xl" />

                        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff334b]">
                                    Let&apos;s Talk
                                </p>

                                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                                    {detail?.closingTitle ||
                                        `Need ${service.title}?`}
                                </h2>

                                <p className="mt-3 leading-7 text-white/60">
                                    {detail?.closingDescription ||
                                        "Tell us about your requirement and let our team help you find the right solution."}
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ff334b] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e82c43]"
                            >
                                Contact Us
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          PROCESS
      ====================================================== */}
            <section className="bg-[#f7f7f8] py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff334b]">
                            Our Process
                        </p>

                        <h2 className="text-3xl font-bold text-[#111216] sm:text-4xl">
                            {processTitle}
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            {processDescription}
                        </p>
                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-5">
                        {process.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <span className="text-4xl font-bold text-[#ff334b]/20">
                                    {step.number}
                                </span>

                                <h3 className="mt-5 text-lg font-bold text-[#111216]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
          MANAGE / WHAT WE OFFER
      ====================================================== */}
            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff334b]">
                                What We Do
                            </p>

                            <h2 className="text-3xl font-bold leading-tight text-[#111216] sm:text-4xl">
                                {manageTitle}
                            </h2>

                            <p className="mt-5 max-w-xl leading-7 text-gray-600">
                                We take care of the important details so you can focus on
                                running and growing your business.
                            </p>

                            <div className="mt-8 space-y-4">
                                {manageItems.map((item, index) => (
                                    <div
                                        key={`${item}-${index}`}
                                        className="flex items-start gap-3"
                                    >
                                        <CircleCheck
                                            size={20}
                                            className="mt-0.5 shrink-0 text-[#ff334b]"
                                        />

                                        <span className="text-sm leading-6 text-gray-700 sm:text-base">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-[32px] bg-[#111216]">
                            <img
                                src={image}
                                alt={service.title}
                                className="aspect-[4/3] h-full w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          CLOSING
      ====================================================== */}
            <section className="bg-[#f7f7f8] py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff334b]">
                            Move Forward
                        </p>

                        <h2 className="text-3xl font-bold text-[#111216] sm:text-4xl lg:text-5xl">
                            {closingTitle}
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
                            {closingDescription}
                        </p>

                        <Link
                            href="/contact"
                            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ff334b] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e82c43]"
                        >
                            Get Started
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* =====================================================
          FAQ
      ====================================================== */}
            <section className="bg-white py-20 sm:py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff334b]">
                            FAQ
                        </p>

                        <h2 className="text-3xl font-bold text-[#111216] sm:text-4xl">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="mt-12 space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={`${faq.question}-${index}`}
                                className="group rounded-2xl border border-gray-100 bg-[#f8f8f9] px-6 py-5"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-[#111216]">
                                    <span className="flex items-start gap-4">
                                        <span className="text-sm font-bold text-[#ff334b]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span>{faq.question}</span>
                                    </span>

                                    <ChevronDown
                                        size={19}
                                        className="shrink-0 transition-transform duration-300 group-open:rotate-180"
                                    />
                                </summary>

                                <div className="pl-10 pr-8 pt-4 text-sm leading-7 text-gray-600">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
          BOTTOM NAVIGATION
      ====================================================== */}
            <section className="border-t border-gray-100 bg-white py-10">
                <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-[#ff334b]"
                    >
                        <ArrowLeft size={16} />
                        Back To Services
                    </Link>

                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 text-sm font-semibold text-[#111216]"
                    >
                        Start A Project
                        <ArrowRight
                            size={17}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </div>
            </section>
        </main>
    );
}
