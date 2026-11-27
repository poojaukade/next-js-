import type { Product } from "@/types/product";
import ProductSearch from "@/app/_components/products/ProductSearch";
import CategoryFilter from "@/app/_components/products/CategoryFilter";
import AddToCartButton from "@/app/_components/cart/AddToCartButton";
import { Suspense } from "react";
import Link from "next/link";

type ProductsPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const { q , category} = await searchParams;

  
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: { products: Product[] } = await response.json();

  const categories = [
  ...new Set(data.products.map((product) => product.category)),
];


 const filteredProducts = data.products.filter((product) => {
  const matchesSearch = product.title
    .toLowerCase()
    .includes((q ?? "").toLowerCase());

  const matchesCategory =
    !category || product.category === category;

  return matchesSearch && matchesCategory;
});

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Product Catalog</h1>

     <Suspense fallback={<p>Loading filters...</p>}>
  <ProductSearch />
  <CategoryFilter categories={categories} />
</Suspense>


      <div className="grid grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-contain"
            />
              <Link href={`/products/${product.id}`}>
      <h2 className="font-semibold mt-3 hover:underline">
        {product.title}
      </h2>
    </Link>

            <p>${product.price}</p>
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-6">No products found.</p>
      )}
    </main>
  );
}