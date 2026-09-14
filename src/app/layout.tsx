import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.companyName} — Intelligent Technology & Digital Solutions`,
    template: `%s — ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.companyName} — Intelligent Technology & Digital Solutions`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.companyName,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-light font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}