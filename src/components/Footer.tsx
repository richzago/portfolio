async function getCurrentYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCurrentYear();

  return (
    <footer className="border-t border-[#24344d] bg-[#060b16]/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-center text-sm text-slate-400 sm:px-6 md:flex-row md:text-left lg:px-8">
        <p>© {currentYear} Richard Zago. Todos os direitos reservados.</p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://github.com/richzago"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/richzago/"
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
