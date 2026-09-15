"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    value: "E-20, Upper Ground Floor, Jawahar Park, Laxmi Nagar, Delhi - 110092",
    detail: "",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "contactdzmarketingsolutions@gmail.com",
    detail: "We'll get back to you soon",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "9654034295",
    detail: "Available during business hours",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Monday - Saturday",
    detail: "9:00 AM - 6:00 PM",
  },
];

/* =========================================================
   WHY CONTACT US
========================================================= */

const reasons = [
  "Free initial consultation",
  "Clear project planning",
  "Dedicated communication",
  "Flexible technology solutions",
];

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socials = [
  {
    name: "Facebook",
    href: "#",
    short: "f",
  },
  {
    name: "X",
    href: "https://x.com/dz_marketing_",
    short: "ð•",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/dz-marketing-solutions-pvt-ltd/posts/?feedView=all",
    short: "in",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dz.marketing.solutions/",
    short: "ig",
  },
];

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-2 text-[10px] font-semibold text-red-600 sm:text-xs">
      <Sparkles className="h-3.5 w-3.5" />
      <span>{children}</span>
    </div>
  );
}

/* =========================================================
   CONTACT PAGE
========================================================= */

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleContactSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = await res.json().catch(() => null);

      if (!res.ok || !payload?.delivered) {
        throw new Error(payload?.error || "Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f7f7f5] text-[#111318]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative isolate overflow-hidden border-b border-black/5">

        {/* Existing image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-intro.png')",
          }}
        />

        {/* Light premium overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-[#f7f7f5]/95 via-[#f7f7f5]/78 to-[#f7f7f5]/20"
        />

        {/* Subtle bottom fade */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#f7f7f5] to-transparent"
        />

        <div className="mx-auto flex min-h-[520px] w-full max-w-7xl items-center px-5 py-20 sm:min-h-[580px] sm:px-8 sm:py-24 lg:min-h-[650px] lg:px-10">

          <div className="w-full max-w-2xl">

            <SectionLabel>
              Get In Touch
            </SectionLabel>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.03] tracking-tight text-[#111318] sm:text-5xl md:text-6xl lg:text-7xl">

              Let&apos;s Build Something

              <span className="block text-red-600">
                Great Together
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 lg:text-lg">
              Have an idea, a challenge, or a project in mind? Tell us what
              you&apos;re working on and let&apos;s turn your vision into a
              practical technology solution.
            </p>

            <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">

              <a
                href="#contact-form"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-red-600/15 transition duration-300 hover:bg-red-700 sm:text-sm"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="tel:9654034295"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-300 bg-white/90 px-6 py-3 text-xs font-bold text-gray-800 shadow-sm backdrop-blur-sm transition duration-300 hover:border-red-400 hover:text-red-600 sm:text-sm"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-10">

          {/* LEFT CONTENT */}
          <div>

            <SectionLabel>
              Contact DZ MARKETING SOLUTIONS
            </SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#111318] sm:text-4xl lg:text-5xl">

              We&apos;re Here to Help

              <span className="block text-red-600">
                Bring Your Idea to Life.
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 lg:text-base lg:leading-8">
              Whether you need a new application, cloud solution, ERP system,
              digital marketing support, AI implementation, or simply want to
              discuss an idea, our team is ready to listen.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 lg:text-base lg:leading-8">
              Share a little about what you&apos;re trying to achieve. We&apos;ll
              understand your requirements, discuss the right approach, and
              help you identify the next step.
            </p>

            {/* Reasons */}
            <div className="mt-7 space-y-3">

              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-red-600" />
                  <span>{reason}</span>
                </div>
              ))}

            </div>

            {/* Social */}
            <div className="mt-9">

              <p className="mb-3 text-sm font-semibold text-gray-900">
                Connect With Us
              </p>

              <div className="flex flex-wrap gap-2">

                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    className="flex h-10 min-w-10 items-center justify-center rounded-xl border border-gray-200 bg-[#f7f7f5] px-3 text-xs font-bold text-gray-600 transition duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  >
                    {social.short}
                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* CONTACT CARDS */}
          <div className="grid gap-4 sm:grid-cols-2">

            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[20px] border border-gray-200 bg-[#f7f7f5] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg sm:p-6"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">
                    {item.title}
                  </p>

                  <p className="mt-2 break-words text-sm font-bold text-gray-900 sm:text-base">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {item.detail}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          FORM SECTION
      ===================================================== */}

      <section
        id="contact-form"
        className="border-y border-gray-200 bg-[#f7f7f5] py-16 sm:py-20 lg:py-24"
      >

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-3xl text-center">

            <SectionLabel>
              Start Your Project
            </SectionLabel>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl lg:text-5xl">

              Tell Us About Your

              <span className="text-red-600">
                {" "}Project
              </span>

            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Fill out the form below and our team will get in touch with you
              to discuss your requirements.
            </p>

          </div>

          {/* FORM CARD */}
          <div className="mx-auto mt-10 max-w-4xl rounded-[24px] border border-gray-200 bg-white p-5 shadow-sm sm:mt-12 sm:rounded-[28px] sm:p-8 lg:p-10">

            <form
              onSubmit={handleContactSubmit}
              className="space-y-5"
            >

              {status === "success" && (
                <div className="flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3.5 text-sm text-green-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>
                    Thanks! Your enquiry has been sent. Our team will get
                    back to you shortly.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-600">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
                  <p>
                    We couldn&apos;t send your enquiry right now. Please try
                    again or contact us directly.
                  </p>
                </div>
              )}

              {/* NAME + EMAIL */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold text-gray-700"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#f7f7f5] px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#f7f7f5] px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />

                </div>

              </div>

              {/* PHONE + SERVICE */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#f7f7f5] px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  />

                </div>

                <div>

                  <label
                    htmlFor="service"
                    className="mb-2 block text-xs font-semibold text-gray-700"
                  >
                    What Can We Help With?
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#f7f7f5] px-4 text-sm text-gray-700 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="IT Technical Management">
                      IT Technical Management
                    </option>

                    <option value="Digital Marketing">
                      Digital Marketing
                    </option>

                    <option value="IT Consulting">
                      IT Consulting
                    </option>

                    <option value="Cloud Applications">
                      Cloud Applications
                    </option>

                    <option value="UI/UX Design">
                      UI/UX Design
                    </option>

                    <option value="Application Development">
                      Application Development
                    </option>

                    <option value="Enterprise Resource Planning">
                      Enterprise Resource Planning
                    </option>

                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>

                    <option value="Artificial Intelligence">
                      Artificial Intelligence
                    </option>

                    <option value="Graphic Design">
                      Graphic Design
                    </option>

                    <option value="Global Travel Service">
                      Global Travel Service
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>

              </div>

              {/* COMPANY */}
              <div>

                <label
                  htmlFor="company"
                  className="mb-2 block text-xs font-semibold text-gray-700"
                >
                  Company Name
                  <span className="ml-1 text-gray-400">
                    (Optional)
                  </span>
                </label>

                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company name"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-[#f7f7f5] px-4 text-sm text-gray-900 outline-none placeholder:text-gray-400 transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold text-gray-700"
                >
                  Tell Us About Your Project
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about your idea, requirements, challenges, timeline, or anything else that would help us understand your project..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#f7f7f5] px-4 py-3 text-sm leading-6 text-gray-900 outline-none placeholder:text-gray-400 transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-100"
                />

              </div>

              {/* SUBMIT */}
              <div className="pt-2">

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/10 transition duration-300 hover:bg-red-700 disabled:opacity-70 sm:w-auto sm:min-w-[200px]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

              </div>

              <p className="text-[10px] leading-5 text-gray-400 sm:text-xs">
                By submitting this form, you agree that our team may contact
                you regarding your enquiry.
              </p>

            </form>

          </div>

        </div>
      </section>

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">

          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

            {/* LOCATION CONTENT */}
            <div>

              <SectionLabel>
                Find Us
              </SectionLabel>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#111318] sm:text-4xl lg:text-5xl">

                Let&apos;s Meet

                <span className="block text-red-600">
                  In Delhi
                </span>

              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 lg:text-base lg:leading-8">
                Our office is located in E-20, Upper Ground Floor, Jawahar Park, Laxmi Nagar, Delhi - 110092. If
                you&apos;re nearby, we&apos;d be happy to meet and discuss your
                project in person.
              </p>

              <div className="mt-7 flex items-start gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>

                  <p className="text-sm font-bold text-gray-900 sm:text-base">
                    DZ MARKETING SOLUTIONS
                  </p>

                  <p className="mt-1 text-xs leading-6 text-gray-500 sm:text-sm">
                    E-20, Upper Ground Floor, Jawahar Park, Laxmi Nagar, Delhi - 110092
                    <br />
                    
                  </p>

                </div>

              </div>

            </div>

            {/* MAP */}
            <div className="relative min-h-[300px] overflow-hidden rounded-[22px] border border-gray-200 bg-[#f7f7f5] shadow-sm sm:min-h-[360px] sm:rounded-[28px]">

              <img
                src="/images/global-network-map.png"
                alt="Technology network map"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />

              {/* Light overlay */}
              <div className="absolute inset-0 bg-white/40" />

              {/* Subtle grid */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Location marker */}
              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">

                <div className="relative">

                  <div className="absolute inset-0 animate-ping rounded-full bg-red-500/20" />

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-red-500/20 bg-red-600 shadow-xl shadow-red-600/20">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>

                </div>

                <div className="mt-4 rounded-xl border border-gray-200 bg-white/95 px-4 py-2 text-center shadow-lg backdrop-blur-sm">

                  <p className="text-xs font-bold text-gray-900">
                    DZ MARKETING SOLUTIONS
                  </p>

                  <p className="mt-0.5 text-[10px] text-gray-500">
                    
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#f7f7f5] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[24px] border border-red-100 bg-white shadow-sm sm:rounded-[30px]">

          {/* Decorative red glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-red-100 blur-[110px]" />

          <div className="relative px-5 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <MessageCircle className="h-6 w-6" />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold tracking-tight text-[#111318] sm:mt-7 sm:text-4xl lg:text-5xl">

              Have an Idea?

              <span className="block text-red-600">
                Let&apos;s Make It Real.
              </span>

            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600">
              Your next big idea could be the beginning of something amazing.
              Talk to DZ MARKETING SOLUTIONS and let&apos;s build it together.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 min-[400px]:flex-row">

              <a
                href="mailto:contactdzmarketingsolutions@gmail.com"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-xs font-bold text-white transition duration-300 hover:bg-red-700 sm:text-sm"
              >
                Email Us
                <Mail className="h-4 w-4" />
              </a>

              <Link
                href="/services"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-xs font-bold text-gray-800 transition duration-300 hover:border-red-400 hover:text-red-600 sm:text-sm"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}


