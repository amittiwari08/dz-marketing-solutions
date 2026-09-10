// Centralized brand + content configuration.
// Replace these values when real company information is available —
// no component below hard-codes brand strings directly.

export const siteConfig = {
  companyName: "DZ MARKETING SOLUTIONS PVT. LTD.",
  shortName: "DZ MARKETING SOLUTIONS",
  tagline: "Intelligent Technology. Built for Growth.",
  description:
    "DZ MARKETING SOLUTIONS designs and engineers digital systems — software, AI, cloud and digital marketing — that simplify operations and create measurable business value.",
  url: "https://www.dzmarketingsolutions.example",
  email: "hello@dzmarketingsolutions.example",
  phone: "+91 00000 00000",
  address:
    "E-20, Upper Ground Floor, Jawahar Park, Laxmi Nagar, Delhi - 110092",
  logo: "/images/brand/dz-logo.png",
  social: {
    linkedin: "https://linkedin.com/company/dz-marketing-solutions",
    instagram: "https://instagram.com/dzmarketingsolutions",
    facebook: "https://facebook.com/dzmarketingsolutions",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact Us", href: "/contact" },
  ],
  // Demo/prototype statistics now live in src/data/stats.ts (single source
  // of truth for the Homepage Trust/Statistics section).
} as const;

export type SiteConfig = typeof siteConfig;
