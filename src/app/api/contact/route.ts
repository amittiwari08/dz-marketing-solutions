import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/siteConfig";

// RESEND_API_KEY, CONTACT_EMAIL and CONTACT_FROM_EMAIL are read from
// environment variables only. Never expose the API key in client-side
// code â€” this route runs server-side and process.env.RESEND_API_KEY is
// never sent to the browser.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  // Honeypot field â€” real visitors never see or fill this (hidden via CSS
  // in ContactForm). If it arrives populated, the submission is a bot.
  website?: string;
};

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  company: 120,
  service: 120,
  message: 4000,
} as const;

// Best-effort in-memory rate limit. This resets on cold start / across
// serverless instances, so it is a courtesy backstop, not a guarantee â€”
// pair with provider- or edge-level rate limiting for real protection.
const submissionsByIp = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  submissionsByIp.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function trim(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (ip !== "unknown" && isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    const body = (await request.json().catch(() => null)) as ContactPayload | null;
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    // Honeypot: bots fill every field including this hidden one. Return a
    // generic success without sending anything, so the bot has no signal
    // that it was caught (this is the one legitimate case for a
    // non-committal 200 â€” it never claims a *real* enquiry was delivered
    // to a human recipient, it's simply not a real enquiry at all).
    if (trim(body.website, 200)) {
      return NextResponse.json({ ok: true, delivered: true });
    }

    const name = trim(body.name, LIMITS.name);
    const email = trim(body.email, LIMITS.email);
    const phone = trim(body.phone, LIMITS.phone);
    const company = trim(body.company, LIMITS.company);
    const service = trim(body.service, LIMITS.service);
    const message = trim(body.message, LIMITS.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const to = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!resend || !fromEmail || !to) {
      // Email delivery is not fully configured. This is a server
      // configuration problem, not a successful submission â€” the client
      // must show a failure state, so this returns a non-2xx status
      // rather than a fake { ok: true }.
      console.error(
        "Contact form: email delivery is not fully configured (requires RESEND_API_KEY, CONTACT_FROM_EMAIL and CONTACT_EMAIL). Enquiry was NOT sent:",
        { name, email, phone, company, service, message }
      );
      return NextResponse.json(
        { error: "Email delivery is not configured yet." },
        { status: 503 }
      );
    }

    const { error: sendError } = await resend.emails.send({
      from: `${siteConfig.companyName} Website <${fromEmail}>`,
      to,
      subject: `New Website Enquiry â€” ${name}`,
      reply_to: email,
      text: [
        "DZ MARKETING SOLUTIONS",
        "New Website Enquiry",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "â€”"}`,
        `Company: ${company || "â€”"}`,
        `Service: ${service || "â€”"}`,
        "",
        "Message:",
        message,
        "",
        `Submitted: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    if (sendError) {
      console.error("Contact form: Resend rejected the send:", sendError);
      return NextResponse.json(
        { error: "The email provider could not deliver this enquiry." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 500 });
  }
}

