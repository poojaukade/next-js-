
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto grid min-h-[75vh] max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">

      {/* Left Content */}
      <div>
        <p className="mb-4 font-medium text-purple-600">
          Hello, welcome to my portfolio!
        </p>

        <h1 className="text-4xl font-bold leading-tight text-gray-950 sm:text-5xl lg:text-6xl">
          Hi, I'm Pooja.
          <span className="block text-purple-600">
            Frontend Developer
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
          I enjoy building clean, responsive and user-friendly
          websites using modern frontend technologies.
          I love turning ideas into meaningful digital experiences.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

          <Link
            href="/projects"
            className="rounded-full bg-purple-600 px-7 py-3 font-medium text-white transition hover:bg-purple-700"
          >
            View My Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-gray-300 px-7 py-3 font-medium text-gray-800 transition hover:border-purple-600 hover:text-purple-600"
          >
            Contact Me
          </Link>

        </div>
      </div>

      {/* Right Content */}
      <div className="flex justify-center">
        <div className="flex h-72 w-72 items-center justify-center rounded-full bg-purple-100 text-7xl font-bold text-purple-600 sm:h-96 sm:w-96">
          P
        </div>
      </div>

    </section>
  );
}
