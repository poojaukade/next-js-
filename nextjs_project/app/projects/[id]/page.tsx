
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetails({
  params,
}: ProjectDetailsProps) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href="/projects"
        className="text-purple-600 hover:text-purple-800"
      >
        ← Back to Projects
      </Link>

      <div className="mt-8 rounded-2xl border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-gray-950">
          {project.title}
        </h1>

        <p className="mt-5 leading-8 text-gray-600">
          {project.description}
        </p>

        <h2 className="mt-8 text-lg font-semibold">
          Technologies Used
        </h2>

        <div className="mt-4 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-purple-50 px-4 py-2 text-sm text-purple-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
