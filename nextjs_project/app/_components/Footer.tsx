
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © Pooja. All rights reserved.
        </p>

        {/* Footer navigation */}
        <div className="flex gap-6 text-sm text-gray-600">
          <Link href="/about" className="hover:text-purple-600">
            About
          </Link>

          <Link href="/projects" className="hover:text-purple-600">
            Projects
          </Link>

          <Link href="/contact" className="hover:text-purple-600">
            Contact
          </Link>
        </div>

      </div>
    </footer>
  );
}
