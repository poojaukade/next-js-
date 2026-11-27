
"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function CartCount() {
  const { cart } = useCart();

  return (
    <Link
      href="/cart"
      className="font-semibold hover:underline"
    >
      Cart ({cart.length})
    </Link>
  );
}
