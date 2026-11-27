
"use client";

import { useCart } from "../_components/cart/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  if (cart.length === 0) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">
          Shopping Cart
        </h1>
        <p>Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">
        Shopping Cart
      </h1>

      <div className="space-y-4">
        {cart.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            <div>
              <h2 className="font-semibold">
                {product.title}
              </h2>
              <p>${product.price}</p>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-600 text-white px-3 py-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-xl font-bold">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </main>
  );
}
