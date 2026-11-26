
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type CategoryFilterProps = {
  categories: string[];
};

export default function CategoryFilter({
  categories,
}: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("category", value);
    } else {
      params.delete("category");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      value={searchParams.get("category") ?? ""}
      onChange={(e) => handleCategoryChange(e.target.value)}
      className="border rounded-lg p-3"
    >
      <option value="">All Categories</option>

      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
