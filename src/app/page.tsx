import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Mail,
  Server,
  UserRound,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { projects } from "@/src/data/projects";

// Deixe vazio até adicionar sua fotografia.
// Depois use: "/images/perfil.jpg"
const profileImage: string = "/images/projects/profile.png";

const specialties = [
  {
    title: "Back-end & APIs",
    description: "APIs REST, regras de negócio e integração entre sistemas.",
    icon: Server,
  },
  {
    title: "Bancos de dados",
    description: "Modelagem, consultas e persistência de informações.",
    icon: Database,
  },
  {
    title: "Desenvolvimento Full Stack",
    description: "Aplicações que conectam interfaces e serviços.",
    icon: Code2,
  },
];

// Prioriza os projetos marcados como featured.
// Caso nenhum esteja marcado, mostra os 3 primeiros.
const markedProjects = projects.filter((project) => project.featured);

const featuredProjects = (
  markedProjects.length > 0 ? markedProjects : projects
).slice(0, 3);

export default function Home() {
  return (
    <div className="w-full">
      {/* =====================================
          HERO / APRESENTAÇÃO
      ===================================== */}

      <section className="grid items-center gap-12 py-12 sm:py-20 lg:grid-cols-[minmax(0,1fr)_350px] lg:gap-16 lg:py-24">
        {/* TEXTO */}
        <div className="portfolio-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-400" />

            <span className="text-xs font-medium text-blue-300">
              Aberto a oportunidades
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Olá, eu sou
            <br />
            <span className="text-blue-400">Richard Zago.</span>
          </h1>

          <h2 className="mt-5 text-lg font-medium text-slate-200 sm:text-xl">
            Desenvolvedor Full Stack
            <span className="text-slate-500"> | </span>
            <span className="text-blue-400">Back-end</span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
            Desenvolvo aplicações e soluções com foco em Back-end, APIs REST e
            bancos de dados. Gosto de transformar problemas em software
            organizado, funcional e escalável.
          </p>

          {/* TECNOLOGIAS PRINCIPAIS */}
          <div className="mt-7 flex flex-wrap gap-2">
            {["Node.js", "TypeScript", "NestJS", "PostgreSQL", "React"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[#304158] bg-[#101e34]/60 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* BOTÕES */}
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Ver projetos
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#304158] bg-[#101e34]/60 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/40 hover:bg-[#142746] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Entre em contato
              <Mail size={17} />
            </Link>
          </div>

          {/* REDES SOCIAIS */}
          <div className="mt-8 flex items-center gap-5">
            <a
              href="https://github.com/richzago"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Richard Zago"
              className="text-slate-500 transition-colors hover:text-blue-400"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/richzago/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Richard Zago"
              className="text-slate-500 transition-colors hover:text-blue-400"
            >
              <FaLinkedin size={22} />
            </a>

            <span className="h-4 w-px bg-[#304158]" />

            <Link
              href="/sobre"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Mais sobre mim
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>

        {/* =====================================
            FOTO DE PERFIL
        ===================================== */}

        <div className="portfolio-fade-up portfolio-delay-1 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[320px]">
            {/* Elemento decorativo */}
            <div className="absolute -inset-3 rounded-4xl border border-blue-500/10" />

            <div className="relative aspect-4/5 overflow-hidden rounded-[26px] border border-[#304968] bg-[#101e34] shadow-2xl shadow-blue-950/20">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="Foto de Richard Zago"
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 350px"
                  className="object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[linear-gradient(145deg,#172d4e_0%,#0b1629_65%,#080f1e_100%)]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10">
                    <UserRound
                      size={48}
                      strokeWidth={1.25}
                      className="text-blue-400"
                    />
                  </div>

                  <div className="text-center">
                    <p className="text-xl font-semibold tracking-tight text-slate-100">
                      Richard Zago
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Desenvolvedor Full Stack
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Pequena identificação */}
            <div className="absolute -bottom-5 left-1/2 w-max max-w-[90%] -translate-x-1/2 rounded-xl border border-[#304158] bg-[#101e34] px-4 py-3 shadow-lg shadow-black/20">
              <p className="text-center text-xs font-medium text-slate-200">
                Full Stack
                <span className="mx-2 text-blue-400">•</span>
                Back-end
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          ESPECIALIDADES
      ===================================== */}

      <section className="mt-10 border-y border-[#24344d]/70 py-12 sm:mt-12 sm:py-14">
        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
            Áreas de atuação
          </p>

          <h2 className="mt-3 text-2xl font-bold text-slate-100 sm:text-3xl">
            O que eu desenvolvo
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {specialties.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-[#24344d] bg-[#101e34]/50 p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-[#142746]/60"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <Icon size={21} />
                </div>

                <h3 className="font-semibold text-slate-100">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================
          PROJETOS EM DESTAQUE
      ===================================== */}

      <section className="py-16 sm:py-20">
        <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                Portfólio
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">
              Projetos em <span className="text-blue-400">destaque.</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Alguns projetos que representam minha experiência com
              desenvolvimento e resolução de problemas.
            </p>
          </div>

          <Link
            href="/projetos"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          >
            Ver todos os projetos
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#24344d] bg-[#101e34]/60 transition-all duration-300 hover:border-blue-500/40 motion-safe:hover:-translate-y-1 motion-reduce:transition-none"
            >
              {/* IMAGEM */}
              <div className="relative aspect-video overflow-hidden border-b border-[#24344d] bg-[#142746]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`Imagem do projeto ${project.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Code2 size={46} className="text-blue-400/60" />
                  </div>
                )}
              </div>

              {/* CONTEÚDO */}
              <div className="flex flex-1 flex-col p-5">
                <span className="mb-3 text-xs font-medium text-blue-400">
                  {project.category}
                </span>

                <h3 className="text-lg font-semibold text-slate-100">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#304158] bg-[#0b1629] px-2.5 py-1 text-xs text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-[#24344d] pt-5">
                  <Link
                    href="/projetos"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                  >
                    Explorar projetos
                    <ArrowRight size={15} />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-200"
                    >
                      <FaGithub size={15} />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================
          SOBRE MIM - RESUMO
      ===================================== */}

      <section className="border-t border-[#24344d]/70 py-14 sm:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
              Minha trajetória
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-100 sm:text-3xl">
              Além do código.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              Sou formado em Desenvolvimento Full Stack pela Kenzie Academy,
              onde também atuei como monitor de Back-end. Atualmente curso
              Análise e Desenvolvimento de Sistemas na UNISC.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
              Minha experiência anterior na área administrativa complementa
              minha atuação técnica com organização, comunicação e visão de
              processos.
            </p>

            <Link
              href="/sobre"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Conheça minha trajetória
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#24344d] bg-[#101e34]/60 p-6">
              <p className="text-3xl font-bold text-blue-400">2.000h</p>

              <p className="mt-2 text-sm font-medium text-slate-200">
                Kenzie Academy
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                Formação intensiva em desenvolvimento Full Stack.
              </p>
            </div>

            <div className="rounded-xl border border-[#24344d] bg-[#101e34]/60 p-6">
              <p className="text-lg font-bold text-blue-400">Peer Coach</p>

              <p className="mt-2 text-sm font-medium text-slate-200">
                Back-end
              </p>

              <p className="mt-2 text-xs leading-6 text-slate-400">
                Monitoria com Node.js e PostgreSQL.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          CHAMADA FINAL
      ===================================== */}

      <section className="pb-12 pt-4 sm:pb-16">
        <div className="rounded-2xl border border-blue-900/40 bg-[linear-gradient(135deg,rgba(25,48,83,0.65),rgba(11,22,41,0.8))] px-6 py-8 sm:px-9 sm:py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl font-bold text-slate-100 sm:text-2xl">
                Vamos construir algo juntos?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Tem uma oportunidade, projeto ou ideia? Estou aberto a novas
                conexões e desafios profissionais.
              </p>
            </div>

            <Link
              href="/contato"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              Falar comigo
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
