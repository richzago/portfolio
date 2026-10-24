import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/data/projects";

export default function Projetos() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Meus Projetos</h1>

      <p className="mt-4 text-zinc-400">Alguns dos projetos que desenvolvi.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
