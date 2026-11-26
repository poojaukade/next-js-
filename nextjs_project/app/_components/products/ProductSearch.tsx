
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProductSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    // console.log("searchParams", searchParams);
// console.log("params", params);
// console.log("params.toString()", params.toString());
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      defaultValue={searchParams.get("q") ?? ""}
      onChange={(e) => handleSearch(e.target.value)}
      className="border rounded-lg p-3 w-full"
    />
  );
}
