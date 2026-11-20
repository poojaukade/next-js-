
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <div>
            <h2 className="text-lg font-bold text-primary">
              MyPortfolio.
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Building meaningful digital experiences.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-slate-600">
            <Link href="/about" className="hover:text-primary">
              About
            </Link>

            <Link href="/projects" className="hover:text-primary">
              Projects
            </Link>

            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>

        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
