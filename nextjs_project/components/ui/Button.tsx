
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  onClick,
}: ButtonProps) {
  const styles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary:
      "border border-slate-300 text-slate-800 hover:bg-slate-100",
  };

  const className = `${styles} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
