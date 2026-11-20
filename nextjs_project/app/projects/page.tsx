
import Link from "next/link";
import { projects } from "@/data/projects";


export default function Projects() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="font-medium text-purple-600">
          My recent work
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-950">
          My Projects
        </h1>

        <p className="mt-4 text-gray-600">
          Here are some projects I've worked on.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >

            <h2 className="text-xl font-bold text-gray-900">
              {project.title}
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Details Link */}
            <Link
              href={`/projects/${project.id}`}
              className="mt-6 inline-block font-medium text-purple-600 hover:text-purple-800"
            >
              View Details →
            </Link>

          </div>
        ))}

      </div>
    </section>
  );
}
