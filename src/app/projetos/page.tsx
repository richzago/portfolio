import ProjectGallery from "@/src/components/ProjectGallery";
import { projects } from "@/src/data/projects";

export default function Projetos() {
  return (
    <section className="py-10 sm:py-14">
      {/* Cabeçalho da página */}
      <div className="mb-10 max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
            Portfólio / Projetos
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
          Meus <span className="text-blue-400">Projetos.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          Uma seleção de projetos desenvolvidos ao longo da minha trajetória,
          com foco em Back-end, APIs REST, bancos de dados e desenvolvimento
          Full Stack.
        </p>
      </div>

      {/* Galeria e filtros */}
      <ProjectGallery projects={projects} />
    </section>
  );
}
