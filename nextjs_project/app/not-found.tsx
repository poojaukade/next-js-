
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-bold text-purple-600">
        404
      </p>

      <h1 className="mt-5 text-3xl font-bold text-gray-950">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-gray-600">
        Sorry, the page or project you're looking for
        doesn't exist or may have been removed.
      </p>

      <Link
        href="/projects"
        className="mt-8 rounded-full bg-purple-600 px-7 py-3 font-medium text-white hover:bg-purple-700"
      >
        Back to Projects
      </Link>
    </section>
  );
}
