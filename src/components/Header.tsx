"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Links da navegação
const navLinks = [
  { label: "Início", href: "/" },
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo e identificação */}
        <Link
          href="/"
          onClick={() => setIsMenuOpen(false)}
          className="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-400"
        >
          {/* Monograma RZ */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold tracking-tight text-zinc-950 transition-transform duration-300 ease-out motion-safe:group-hover:scale-105 motion-reduce:transition-none">
            RZ
          </div>

          {/* Nome e especialidade */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-zinc-100 sm:text-base">
              Richard Zago
            </span>

            <span className="text-[11px] text-zinc-400 sm:text-xs">
              Full Stack · Back-end
            </span>
          </div>
        </Link>

        {/* Navegação Desktop */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-2 md:flex"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`
                  inline-block rounded-md px-3 py-2 text-sm
                  transition-all duration-200 ease-out
                  motion-safe:hover:scale-105
                  motion-reduce:transition-none
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-zinc-400
                  ${
                    isActive
                      ? "font-semibold text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-100"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Botão Mobile */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-zinc-400 md:hidden"
        >
          {isMenuOpen ? (
            // Ícone X
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            // Ícone Hambúrguer
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navegação Mobile */}
      <div
        id="mobile-menu"
        className={`border-t border-zinc-800 md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          className="mx-auto flex max-w-5xl flex-col gap-1 px-4 py-4 sm:px-6"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  rounded-lg px-4 py-3 text-sm
                  transition-all duration-200 ease-out
                  motion-safe:hover:scale-[1.02]
                  motion-reduce:transition-none
                  focus-visible:outline-2
                  focus-visible:outline-zinc-400
                  ${
                    isActive
                      ? "bg-zinc-800 font-semibold text-zinc-100"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
