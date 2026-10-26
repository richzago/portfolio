import Image from "next/image";
import type { Project } from "@/src/app/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasRefactoringYear =
    project.updatedYear !== undefined && project.updatedYear > project.year;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#24344d] bg-[#101e34]/60 transition-all duration-300 hover:border-blue-500/40 motion-safe:hover:-translate-y-1 motion-reduce:transition-none">
      {/* Imagem */}
      <div className="relative aspect-video overflow-hidden border-b border-[#24344d] bg-[#142746]">
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-medium text-blue-400">
            {project.category}
          </span>

          <span className="text-xs text-slate-400">{project.year}</span>
        </div>

        <h3 className="text-lg font-semibold text-slate-100">
          {project.title}
        </h3>

        {hasRefactoringYear && (
          <p className="mt-2 text-xs text-emerald-400">
            Refatorado em {project.updatedYear}
          </p>
        )}

        <p className="mt-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Tecnologias */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-[#304158] bg-[#0b1629] px-2.5 py-1 text-xs text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex flex-wrap gap-4 border-t border-[#24344d] pt-5 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-400 transition-colors hover:text-blue-300"
              aria-label={`Ver código do projeto ${project.title} no GitHub`}
            >
              GitHub ↗
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 transition-colors hover:text-blue-400"
              aria-label={`Ver demonstração do projeto ${project.title}`}
            >
              Ver demonstração ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
