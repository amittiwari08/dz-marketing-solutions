import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

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
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-bg-light font-body">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
