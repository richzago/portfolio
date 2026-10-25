"use client";

import { useState } from "react";

import ProjectCard from "@/src/components/ProjectCard";
import type { Project, ProjectCategory } from "@/src/app/types/project";

type ProjectFilter = "Todos" | ProjectCategory;

interface ProjectGalleryProps {
  projects: Project[];
}

const filters: ProjectFilter[] = [
  "Todos",
  "Back-end",
  "Front-end",
  "Full Stack",
];

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("Todos");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "Todos" || project.category === activeFilter,
  );

  return (
    <div>
      {/* Filtros e contador */}
      <div className="mb-8 flex flex-col gap-5 border-b border-zinc-800/80 pb-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Botões de filtro */}
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar projetos por categoria"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`
                  cursor-pointer rounded-lg border
                  px-4 py-2 text-sm font-medium
                  transition-all duration-200 ease-out
                  motion-safe:hover:-translate-y-0.5
                  motion-reduce:transition-none
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-blue-400
                  ${
                    isActive
                      ? "border-blue-500/50 bg-blue-500/10 text-blue-300"
                      : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-100"
                  }
                `}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Contador */}
        <p aria-live="polite" className="shrink-0 text-xs text-zinc-500">
          <span className="font-semibold text-blue-400">
            {filteredProjects.length}
          </span>{" "}
          {filteredProjects.length === 1
            ? "projeto encontrado"
            : "projetos encontrados"}
        </p>
      </div>

      {/* Grid de projetos */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-6 py-16 text-center">
          <p className="text-zinc-400">
            Nenhum projeto encontrado nesta categoria.
          </p>
        </div>
      )}
    </div>
  );
}
