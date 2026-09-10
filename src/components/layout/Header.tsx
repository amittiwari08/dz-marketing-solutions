"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-xl">

      {/* =====================================================
          MAIN NAVBAR
      ===================================================== */}

      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-6 lg:px-10">

        {/* ===================================================
            BRAND
        =================================================== */}

        <Link
          href="/"
          onClick={closeMenu}
          aria-label="DZ MARKETING SOLUTIONS PVT. LTD."
          className="group flex min-w-0 shrink-0 items-center"
        >

          <div className="flex items-center gap-2.5 sm:gap-3">

            {/* Existing logo */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 group-hover:ring-red-200 sm:h-12 sm:w-12">
              <img
                src="/images/brand/dz-logo.png"
                alt="DZ MARKETING SOLUTIONS PVT. LTD. logo"
                className="h-full w-full object-contain p-1"
              />
            </div>

            {/* Company name */}
            <div className="min-w-0">

              <div className="whitespace-nowrap text-[13px] font-extrabold leading-none tracking-tight text-gray-950 min-[390px]:text-[14px] sm:text-[16px]">
                DZ MARKETING SOLUTIONS
              </div>

              <div className="mt-1 whitespace-nowrap text-[8px] font-bold leading-none tracking-[0.18em] text-red-600 min-[390px]:text-[9px] sm:text-[10px]">
                VENTURES
              </div>

            </div>

          </div>

        </Link>

        {/* ===================================================
            DESKTOP NAV
        =================================================== */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >

          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2.5 text-sm transition-all duration-300 ${active
                    ? "bg-red-50 font-semibold text-red-600"
                    : "font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-950"
                  }`}
              >
                {item.label}

                {active && (
                  <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-red-600" />
                )}
              </Link>
            );
          })}

        </nav>

        {/* ===================================================
            DESKTOP CTA
        =================================================== */}

        <Link
          href="/contact"
          className="group hidden min-h-11 items-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/10 lg:inline-flex"
        >
          Let&apos;s Talk

          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

        {/* ===================================================
            MOBILE MENU BUTTON
        =================================================== */}

        <button
          type="button"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-[#f7f7f5] text-gray-800 transition-all duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:h-11 sm:w-11 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 lg:hidden ${mobileOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
          }`}
      >

        <div className="mx-auto w-full max-w-7xl px-4 pb-5 pt-3 sm:px-6">

          <nav
            aria-label="Mobile navigation"
            className="space-y-1"
          >

            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex min-h-12 items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${active
                      ? "bg-red-50 font-bold text-red-600"
                      : "font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-950"
                    }`}
                >

                  <span className="text-sm">
                    {item.label}
                  </span>

                  <ArrowRight
                    className={`h-4 w-4 ${active
                        ? "text-red-600"
                        : "text-gray-300"
                      }`}
                  />

                </Link>
              );
            })}

          </nav>

          {/* Mobile CTA */}

          <div className="mt-4 border-t border-gray-100 pt-4">

            <Link
              href="/contact"
              onClick={closeMenu}
              className="group flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/10 transition-all duration-300 hover:bg-red-700"
            >
              Let&apos;s Talk

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}