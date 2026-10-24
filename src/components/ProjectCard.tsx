import Image from "next/image";
import { Project } from "../app/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-colors hover:border-blue-500">
      {/* Imagem do projeto */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {/* Conteúdo do card */}
      <div className="p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="mt-3 text-zinc-400">{project.description}</p>

        {/* Tecnologias */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md bg-zinc-800 px-3 py-1 text-sm text-blue-400"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub ↗
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Ver projeto ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
