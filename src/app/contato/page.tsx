"use client";

import { useState, type SubmitEvent } from "react";

import { Mail, Send, ArrowUpRight, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type FormFeedback = {
  type: "success" | "error";
  message: string;
};

const contactEmail = "zaguinhoo97@gmail.com";

export default function Contato() {
  // =========================
  // ESTADOS DO FORMULÁRIO
  // =========================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Campo oculto para proteção simples contra spam
  const [website, setWebsite] = useState("");

  // Controle de envio e feedback
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<FormFeedback | null>(null);

  // =========================
  // FUNÇÕES
  // =========================

  function clearFeedback() {
    setFeedback(null);
  }

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          website,
        }),
      });

      // Verifica se a API retornou JSON.
      const contentType = response.headers.get("content-type");

      if (!contentType?.includes("application/json")) {
        console.error(
          "Resposta inesperada da API:",
          response.status,
          response.statusText,
        );

        throw new Error(
          `Erro na comunicação com o servidor (HTTP ${response.status}).`,
        );
      }

      const result: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Não foi possível enviar a mensagem.",
        );
      }

      setFeedback({
        type: "success",
        message: result.message || "Mensagem enviada com sucesso!",
      });

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setWebsite("");
    } catch (error) {
      console.error("Erro no formulário:", error);

      setFeedback({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ocorreu um erro inesperado. Tente novamente.",
      });
    } finally {
      setIsSending(false);
    }
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
            INFORMAÇÕES DE CONTATO
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

          {/* MENSAGEM COMPLEMENTAR */}

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
            COLUNA DIREITA
            FORMULÁRIO DE CONTATO
        ===================================== */}

        <div className="h-fit rounded-2xl border border-[#24344d] bg-[#101e34]/70 p-5 shadow-xl shadow-black/10 sm:p-7">
          <div className="mb-7">
            <h2 className="text-xl font-semibold text-slate-100">
              Envie uma mensagem
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Preencha os campos abaixo para enviar sua mensagem diretamente.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            aria-busy={isSending}
            className="relative space-y-5"
          >
            {/* HONEYPOT ANTISPAM */}

            <div
              className="pointer-events-none absolute top-0 left-0 h-px w-px overflow-hidden opacity-0"
              aria-hidden="true"
            >
              <label htmlFor="website">Não preencha este campo</label>

              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </div>

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
                minLength={2}
                maxLength={100}
                autoComplete="name"
                placeholder="Seu nome"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  clearFeedback();
                }}
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
                onChange={(event) => {
                  setEmail(event.target.value);
                  clearFeedback();
                }}
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
                minLength={3}
                maxLength={150}
                placeholder="Sobre o que deseja conversar?"
                value={subject}
                onChange={(event) => {
                  setSubject(event.target.value);
                  clearFeedback();
                }}
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
                minLength={10}
                maxLength={3000}
                placeholder="Escreva sua mensagem..."
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  clearFeedback();
                }}
                className="w-full resize-y rounded-lg border border-[#304158] bg-[#0b1629] px-4 py-3 text-sm text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>

            {/* BOTÃO DE ENVIO */}

            <button
              type="submit"
              disabled={isSending}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              <Send size={17} aria-hidden="true" />

              {isSending ? "Enviando..." : "Enviar mensagem"}
            </button>

            {/* FEEDBACK DE ENVIO */}

            {feedback && (
              <p
                role={feedback.type === "error" ? "alert" : "status"}
                className={`rounded-lg border px-4 py-3 text-sm ${
                  feedback.type === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                    : "border-red-500/30 bg-red-500/10 text-red-300"
                }`}
              >
                {feedback.message}
              </p>
            )}

            {/* INFORMAÇÃO COMPLEMENTAR */}

            <p className="text-center text-xs leading-5 text-slate-500">
              Sua mensagem será enviada diretamente pelo formulário. Responderei
              pelo e-mail informado.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
