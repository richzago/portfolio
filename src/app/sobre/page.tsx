
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";

const technologies = [
  {
    title: "Back-end",
    icon: Server,
    items: [
      "Node.js",
      "TypeScript",
      "Express",
      "NestJS",
      "Python",
      "Django",
      "PHP 8",
      "Laravel",
      "Lua",
    ],
  },
  {
    title: "Front-end",
    icon: Code2,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
    ],
  },
  {
    title: "Bancos de dados",
    icon: Database,
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Ferramentas",
    icon: Wrench,
    items: [
      "Git",
      "Docker",
      "CI/CD",
    ],
  },
];

const timeline = [
  {
    period: "2022 — 2023",
    title: "Formação Full Stack",
    organization: "Kenzie Academy Brasil",
    icon: GraduationCap,
    description:
      "Formação intensiva de 2.000 horas em desenvolvimento Front-end e Back-end, com projetos práticos e desenvolvimento de habilidades técnicas e profissionais.",
  },
  {
    period: "Nov. 2022 — Abr. 2023",
    title: "Peer Coach Back-end",
    organization: "Kenzie Academy Brasil",
    icon: Code2,
    description:
      "Atuação como monitor, auxiliando alunos em Node.js e PostgreSQL, revisando entregas, esclarecendo dúvidas e acompanhando o aprendizado.",
  },
  {
    period: "2025",
    title: "Experiência administrativa",
    organization: "Área educacional",
    icon: BriefcaseBusiness,
    description:
      "Atuação com organização de documentos, gestão de processos, atendimento e utilização de ferramentas digitais para otimizar rotinas.",
  },
  {
    period: "Atualmente",
    title: "Análise e Desenvolvimento de Sistemas",
    organization: "UNISC",
    icon: GraduationCap,
    description:
      "Graduação em andamento, aprofundando conhecimentos em desenvolvimento de software e tecnologia.",
  },
];

export default function Sobre() {
  return (
    <section className="py-10 sm:py-14">

      {/* =====================================
          APRESENTAÇÃO
      ===================================== */}

      <div className="portfolio-fade-up mb-14 max-w-3xl">

        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
            Portfólio / Sobre mim
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          Um pouco{" "}
          <span className="text-blue-400">
            sobre mim.
          </span>
        </h1>

        <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
          Sou desenvolvedor{" "}
          <span className="font-semibold text-slate-100">
            Full Stack com foco em Back-end
          </span>
          , interessado na construção de APIs,
          integração de sistemas e soluções
          que resolvam problemas reais.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          Tenho formação Full Stack pela Kenzie Academy,
          experiência como monitor Back-end e curso
          Análise e Desenvolvimento de Sistemas na UNISC.
          Minha trajetória anterior na área administrativa
          também contribuiu para desenvolver organização,
          comunicação e resolução de problemas.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">

          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Ver meus projetos
            <ArrowRight size={17} />
          </Link>

          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-lg border border-[#304158] bg-[#101e34]/60 px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:bg-[#142746] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Entre em contato
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      {/* =====================================
          RESUMO EM CARDS
      ===================================== */}

      <div className="portfolio-fade-up portfolio-delay-1 mb-16 grid gap-4 sm:grid-cols-3">

        <div className="rounded-xl border border-[#24344d] bg-[#101e34]/60 p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-500/40 motion-reduce:transition-none">
          <GraduationCap
            size={23}
            className="mb-4 text-blue-400"
          />

          <p className="text-2xl font-bold text-slate-100">
            2.000h
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Formação Full Stack na Kenzie
          </p>
        </div>

        <div className="rounded-xl border border-[#24344d] bg-[#101e34]/60 p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-500/40 motion-reduce:transition-none">
          <Terminal
            size={23}
            className="mb-4 text-blue-400"
          />

          <p className="text-lg font-bold text-slate-100">
            Back-end
          </p>

          <p className="mt-1 text-sm text-slate-400">
            APIs, regras de negócio e dados
          </p>
        </div>

        <div className="rounded-xl border border-[#24344d] bg-[#101e34]/60 p-5 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-blue-500/40 motion-reduce:transition-none">
          <Layers3
            size={23}
            className="mb-4 text-blue-400"
          />

          <p className="text-lg font-bold text-slate-100">
            Full Stack
          </p>

          <p className="mt-1 text-sm text-slate-400">
            Desenvolvimento de ponta a ponta
          </p>
        </div>
      </div>

      {/* =====================================
          TRAJETÓRIA
      ===================================== */}

      <div className="mb-16">

        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-blue-400">
            <BriefcaseBusiness size={19} />

            <span className="text-xs font-medium uppercase tracking-[0.18em]">
              Experiência e formação
            </span>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">
            Minha trajetória
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Os principais passos da minha formação
            e experiência profissional.
          </p>
        </div>

        <div className="relative ml-3 border-l border-blue-900/70 pl-7 sm:ml-4 sm:pl-10">

          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={`${item.title}-${index}`}
                className="portfolio-fade-up relative pb-9 last:pb-0"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >

                {/* Marcador da linha do tempo */}
                <span className="absolute -left-9.25 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-blue-500/60 bg-[#0b1629] shadow-[0_0_0_4px_#080f1e] sm:-left-12.25">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                </span>

                <article className="group rounded-xl border border-[#24344d] bg-[#101e34]/60 p-5 transition-all duration-300 hover:border-blue-500/40 hover:bg-[#142746]/70 sm:p-6">

                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">

                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      {item.period}
                    </span>

                    <Icon
                      size={19}
                      className="text-slate-500 transition-colors group-hover:text-blue-400"
                    />
                  </div>

                  <h3 className="text-base font-semibold text-slate-100 sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-300/80">
                    {item.organization}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================
          TECNOLOGIAS
      ===================================== */}

      <div className="mb-16">

        <div className="mb-8">

          <div className="mb-3 flex items-center gap-2 text-blue-400">
            <Code2 size={19} />

            <span className="text-xs font-medium uppercase tracking-[0.18em]">
              Conhecimentos técnicos
            </span>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">
            Tecnologias e ferramentas
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Linguagens, frameworks e ferramentas
            que fazem parte da minha formação
            e experiência com desenvolvimento.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">

          {technologies.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-xl border border-[#24344d] bg-[#101e34]/60 p-5 transition-colors duration-300 hover:border-blue-500/30 sm:p-6"
              >
                <div className="mb-5 flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Icon size={19} />
                  </div>

                  <h3 className="font-semibold text-slate-100">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">

                  {category.items.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-[#304158] bg-[#0b1629] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-blue-500/40 hover:text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =====================================
          FINAL / CTA
      ===================================== */}

      <div className="rounded-2xl border border-blue-900/40 bg-[linear-gradient(135deg,rgba(25,48,83,0.65),rgba(11,22,41,0.8))] p-6 sm:p-8">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="max-w-xl">

            <h2 className="text-xl font-bold text-slate-100 sm:text-2xl">
              Vamos construir algo juntos?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Estou aberto a oportunidades profissionais,
              colaborações e projetos de desenvolvimento.
            </p>
          </div>

          <Link
            href="/contato"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Falar comigo
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
