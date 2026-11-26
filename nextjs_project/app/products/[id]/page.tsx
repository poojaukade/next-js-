import type { Product } from "@/types/product";

type ProductDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsProps) {
  const { id } = await params;

  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const product: Product = await response.json();

  return (
    <main className="p-8">
        <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-40 object-contain"
            />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </main>
  );
}