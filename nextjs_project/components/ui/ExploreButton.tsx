
"use client";

import { useRouter } from "next/navigation";

export default function ExploreButton() {
  const router = useRouter();

  function handleClick() {
    router.push("/projects");
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-primary px-6 py-3 font-semibold text-white"
    >
      Explore Projects
    </button>
  );
}
