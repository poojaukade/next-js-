
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import CartCount from "./cart/CartCount";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Products", href: "/products" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Pooja
        </Link>

        {/* Navigation links */}
        <div className="flex items-center gap-8">
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
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Contact button */}
        <Link
          href="/contact"
          className="rounded-full bg-gray-950 px-6 py-3 text-sm text-white hover:bg-purple-600"
        >
          Let's Talk
        </Link>
<CartCount />
      </nav>
    </header>
  );
}
