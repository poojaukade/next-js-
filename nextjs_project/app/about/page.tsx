
export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* Page Heading */}
      <div className="mb-12 text-center">
        <p className="font-medium text-purple-600">
          Get to know me
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-950">
          About Me
        </h1>
      </div>

      {/* About Content */}
      <div className="grid items-center gap-12 md:grid-cols-2">

        {/* Profile Placeholder */}
        <div className="flex justify-center">
          <div className="flex h-72 w-72 items-center justify-center rounded-3xl bg-purple-100 text-7xl font-bold text-purple-600">
            P
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Hello! I'm Pooja
          </h2>

          <p className="mt-5 leading-8 text-gray-600">
            I'm a frontend developer who enjoys creating
            responsive and user-friendly web experiences.
            I work with modern frontend technologies and
            enjoy learning new tools and improving my skills.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            I believe in writing clean code, building
            reusable components and creating interfaces
            that provide a great user experience.
          </p>

          {/* Skills */}
          <h3 className="mt-8 text-lg font-semibold text-gray-900">
            Technologies I Work With
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {["Shopify","HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
