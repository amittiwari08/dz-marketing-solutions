import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/siteConfig";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
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

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

// Best-effort rate limiting for a running server instance.
// For stronger production protection, also enable Vercel Firewall.
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  const recentSubmissions = (
    submissionsByIp.get(ip) ?? []
  ).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  recentSubmissions.push(now);
  submissionsByIp.set(ip, recentSubmissions);

  return recentSubmissions.length > RATE_LIMIT_MAX;
}

function trim(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    if (ip !== "unknown" && isRateLimited(ip)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Too many requests. Please try again shortly.",
        },
        { status: 429 }
      );
    }

    const body = (await request.json().catch(() => null)) as
      | ContactPayload
      | null;

    if (!body) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid request body.",
        },
        { status: 400 }
      );
    }

    // Honeypot protection for basic bots.
    if (trim(body.website, 200)) {
      return NextResponse.json({
        ok: true,
        delivered: true,
      });
    }

    const name = trim(body.name, LIMITS.name);
    const email = trim(body.email, LIMITS.email).toLowerCase();
    const phone = trim(body.phone, LIMITS.phone);
    const company = trim(body.company, LIMITS.company);
    const service = trim(body.service, LIMITS.service);
    const message = trim(body.message, LIMITS.message);

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          ok: false,
          error: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const destinationEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !destinationEmail || !fromEmail) {
      console.error("Contact form configuration is incomplete.", {
        hasApiKey: Boolean(apiKey),
        hasDestinationEmail: Boolean(destinationEmail),
        hasFromEmail: Boolean(fromEmail),
      });

      return NextResponse.json(
        {
          ok: false,
          error:
            "The contact service is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const submittedAt = new Date().toISOString();

    const plainText = [
      "DZ MARKETING SOLUTIONS",
      "New Website Enquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Company: ${company || "Not provided"}`,
      `Service: ${service || "Not selected"}`,
      "",
      "Message:",
      message,
      "",
      `Submitted: ${submittedAt}`,
    ].join("\n");

    const htmlContent = `
      <div
        style="
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #222;
        "
      >
        <h2>New Website Enquiry</h2>

        <p>
          <strong>Name:</strong>
          ${escapeHtml(name)}
        </p>

        <p>
          <strong>Email:</strong>
          ${escapeHtml(email)}
        </p>

        <p>
          <strong>Phone:</strong>
          ${escapeHtml(phone || "Not provided")}
        </p>

        <p>
          <strong>Company:</strong>
          ${escapeHtml(company || "Not provided")}
        </p>

        <p>
          <strong>Service:</strong>
          ${escapeHtml(service || "Not selected")}
        </p>

        <h3>Project Details</h3>

        <p>
          ${escapeHtml(message).replace(/\n/g, "<br />")}
        </p>

        <p>
          <strong>Submitted:</strong>
          ${escapeHtml(submittedAt)}
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `${siteConfig.companyName} Website <${fromEmail}>`,
      to: [destinationEmail],
      subject: `New Website Enquiry — ${name}`,
      replyTo: email,
      text: plainText,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend rejected the contact enquiry.", {
        name: error.name,
        message: error.message,
      });

      return NextResponse.json(
        {
          ok: false,
          error:
            "We could not send your enquiry right now. Please try again later.",
        },
        { status: 502 }
      );
    }

    console.info("Contact enquiry sent successfully.", {
      emailId: data?.id,
    });

    return NextResponse.json(
      {
        ok: true,
        delivered: true,
        message:
          "Thank you! Your enquiry has been sent successfully. We will contact you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected contact form error:", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your enquiry right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}