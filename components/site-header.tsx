"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/conference";

function navClass(active: boolean) {
  return `flex h-10 items-center justify-center border px-6 text-preset-6-medium uppercase transition focus-visible:outline-none focus-visible:border-dashed focus-visible:border-green-200 focus-visible:shadow-hard-sm focus-visible:shadow-green-200 ${
    active
      ? "border-green-200 text-green-200 shadow-hard-sm shadow-green-200"
      : "border-white text-white hover:shadow-hard-sm hover:shadow-neutral-100"
  }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="top" className="site-container">
      <div className="flex h-16 items-center justify-between border-b border-neutral-600 md:h-20">
        <Link href="/" className="text-preset-2-mobile text-green-200">
          DEVHORIZON_26
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  className={navClass(pathname === href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex size-10 items-center justify-center border border-white md:hidden"
        >
          <span className="sr-only">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-4">
            {menuOpen ? (
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            ) : (
              <path
                d="M2 4h12M2 8h12M2 12h12"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-b border-neutral-600 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={navClass(pathname === href)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
