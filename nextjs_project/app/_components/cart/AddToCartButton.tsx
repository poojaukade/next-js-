"use client";

import { useCart } from "./CartContext";
import type { Product } from "@/types/product";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-black text-white px-4 py-2 rounded-lg mt-3"
    >
      Add to Cart
    </button>
  );
}