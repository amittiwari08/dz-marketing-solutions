import Link from "next/link";
import { Linkedin, Instagram, Facebook, X, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/siteConfig";

const footerServices = [
  { label: "IT Technical Management", href: "/it-technical-management" },
  { label: "IT Consulting", href: "/it-consulting" },
  { label: "Cloud Applications", href: "/cloud-applications" },
  { label: "IT Application Development", href: "/application-development" },
  { label: "Enterprise Resource Planning", href: "/enterprise-resource-planning" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg">
      <Container className="section-py">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
              <Logo />
              <span className="text-base uppercase tracking-wide">
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: X, href: siteConfig.social.x, label: "X" },
              ].map(({ icon: SocialIcon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/12 text-white/60 transition-colors duration-200 hover:border-brand-teal/50 hover:text-brand-teal"
                >
                  <SocialIcon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/about" className="text-white/65 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-white/65 hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="text-white/65 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/65 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-white/40 md:flex-row">
          <p>© 2026 {siteConfig.companyName}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-white/70">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white/70">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
