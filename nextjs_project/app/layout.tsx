
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";

export const metadata: Metadata = {
  title: "Pooja | Frontend Developer",
  description: "Personal portfolio of Pooja, a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          {children}
        </main>

        {/* Footer will be added later */}
      </body>
    </html>
  );
}
