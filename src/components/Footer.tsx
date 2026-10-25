async function getCurrentYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-blue-950/60 bg-[#060b16]/50">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 p-6 text-sm text-zinc-400 md:flex-row">
        <p>© {currentYear} Zago. Todos os direitos reservados.</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
