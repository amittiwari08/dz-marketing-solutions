"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-white/12 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors duration-200 focus:border-brand-teal/60 focus:outline-none";

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  company: 120,
  message: 4000,
} as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
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

      // Only treat this as success when the server explicitly confirms
      // the email was delivered — a 200 with delivered:false (or any
      // non-2xx status) is a failure from the visitor's point of view,
      // even if it wasn't a crash.
      if (!res.ok || !payload?.delivered) {
        throw new Error(payload?.error || "Request failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.03] px-8 py-16 text-center">
        <CheckCircle2 className="h-12 w-12 text-brand-teal" />
        <p className="mt-5 text-lg font-semibold text-white">
          Thank you for contacting {siteConfig.shortName}.
        </p>
        <p className="mt-2 max-w-sm text-sm text-white/55">
          Your enquiry has been received successfully. Our team will get back
          to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-teal hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === "error" && (
        <div className="flex items-start gap-3 rounded-md border border-brand-rust/30 bg-brand-rust/10 px-4 py-3.5 text-sm text-brand-rust">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            We couldn&rsquo;t send your enquiry right now. Please try again or
            contact our team directly.
          </p>
        </div>
      )}

      {/* Honeypot — hidden from real visitors and screen readers, filled
          in only by bots. Kept off-screen rather than display:none, which
          some bots skip past. */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={LIMITS.name}
            className={inputClasses}
            placeholder="Jordan Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={LIMITS.email}
            className={inputClasses}
            placeholder="jordan@company.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            maxLength={LIMITS.phone}
            className={inputClasses}
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            maxLength={LIMITS.company}
            className={inputClasses}
            placeholder="Company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50">
          Service Interested In
        </label>
        <select id="service" name="service" className={inputClasses} defaultValue="">
          <option value="" disabled className="text-ink">
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.title} className="text-ink">
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white/50">
          Your Query *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          maxLength={LIMITS.message}
          className={inputClasses}
          placeholder="Tell us what you're building, fixing or transforming."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gradient-gold-light px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(17,17,17,0.22)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Enquiry →"
        )}
      </button>
    </form>
  );
}
