"use client";

import { useState, type SubmitEvent } from "react";

import { Mail, Send, ArrowUpRight, MessageSquare } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contato() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const contactEmail = "zaguinhoo97@gmail.com";

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailSubject = encodeURIComponent(`[Portfólio] ${subject.trim()}`);

    const emailBody = encodeURIComponent(
      `Nome: ${name.trim()}\n` +
        `E-mail: ${email.trim()}\n\n` +
        `Mensagem:\n${message.trim()}`,
    );

    const mailto = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailto;
  }

  return (
    <section className="py-10 sm:py-14">
      {/* =====================================
          CABEÇALHO
      ===================================== */}

      <div className="mb-12 max-w-3xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
            Portfólio / Contato
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          Vamos <span className="text-blue-400">conversar.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Tem uma oportunidade, projeto ou ideia em mente? Estou aberto a
          conexões profissionais, oportunidades de desenvolvimento e novos
          desafios. Entre em contato!
        </p>
      </div>

      {/* =====================================
          CONTEÚDO PRINCIPAL
      ===================================== */}

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* =====================================
            COLUNA ESQUERDA
        ===================================== */}

        <div>
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-100">
              Informações de contato
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Escolha o canal que preferir. Ficarei feliz em conversar sobre
              tecnologia, projetos e oportunidades profissionais.
            </p>
          </div>

          <div className="space-y-4">
            {/* E-MAIL */}
            <a
              href={`mailto:${contactEmail}`}
              className="group flex items-center gap-4 rounded-xl border border-[#24344d] bg-[#101e34]/70 p-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-[#142746] motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <Mail size={21} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-100">E-mail</p>

                <p className="mt-1 break-all text-sm text-slate-400">
                  {contactEmail}
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-slate-500 transition-colors group-hover:text-blue-400"
              />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/richzago/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-[#24344d] bg-[#101e34]/70 p-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-[#142746] motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <FaLinkedin size={21} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-100">LinkedIn</p>

                <p className="mt-1 text-sm text-slate-400">
                  linkedin.com/in/richzago
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-slate-500 transition-colors group-hover:text-blue-400"
              />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/richzago"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-[#24344d] bg-[#101e34]/70 p-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-[#142746] motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <FaGithub size={21} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-100">GitHub</p>

                <p className="mt-1 text-sm text-slate-400">
                  github.com/richzago
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0 text-slate-500 transition-colors group-hover:text-blue-400"
              />
            </a>
          </div>

          {/* Mensagem complementar */}
          <div className="mt-8 flex items-start gap-3 rounded-xl border border-blue-900/30 bg-blue-950/20 p-4">
            <MessageSquare
              size={19}
              className="mt-0.5 shrink-0 text-blue-400"
            />

            <p className="text-sm leading-6 text-slate-400">
              Tenho interesse especial em oportunidades de desenvolvimento{" "}
              <span className="font-medium text-blue-300">
                Back-end e Full Stack
              </span>
              , além de projetos que envolvam APIs, bancos de dados e
              arquitetura de sistemas.
            </p>
          </div>
        </div>

        {/* =====================================
            COLUNA DIREITA - FORMULÁRIO
        ===================================== */}

        <div className="h-fit rounded-2xl border border-[#24344d] bg-[#101e34]/70 p-5 shadow-xl shadow-black/10 sm:p-7">
          <div className="mb-7">
            <h2 className="text-xl font-semibold text-slate-100">
              Envie uma mensagem
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Preencha os campos abaixo para preparar um e-mail de contato.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* NOME */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Nome
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
                placeholder="Seu nome"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-lg border border-[#304158] bg-[#0b1629] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>

            {/* E-MAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border border-[#304158] bg-[#0b1629] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>

            {/* ASSUNTO */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Assunto
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                maxLength={150}
                placeholder="Sobre o que deseja conversar?"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                className="w-full rounded-lg border border-[#304158] bg-[#0b1629] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>

            {/* MENSAGEM */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Mensagem
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={3000}
                placeholder="Escreva sua mensagem..."
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="w-full resize-y rounded-lg border border-[#304158] bg-[#0b1629] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 active:scale-[0.98] motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              <Send size={17} />
              Preparar e-mail
            </button>

            <p className="text-center text-xs leading-5 text-slate-500">
              O botão abrirá seu aplicativo de e-mail com a mensagem preenchida.
              Confirme o envio por lá.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
