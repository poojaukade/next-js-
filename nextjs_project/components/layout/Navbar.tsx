
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-bold text-primary"
          >
            MyPortfolio.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-slate-600 hover:text-primary"
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="mt-1 block h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-slate-200 py-5 md:hidden">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium ${
                    isActive
                      ? "text-primary"
                      : "text-slate-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

      </Container>
    </header>
  );
}
