
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Providers from "./_components/cart/Providers";

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
        <Providers>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
        </Providers>
      </body>
    </html>
  );
}
