import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-800">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-6">
        <Link href="/" className="text-xl font-bold">
          Zago.dev
        </Link>

        <div className="flex gap-6">
          <Link href="/">Início</Link>
          <Link href="/projetos">Projetos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </nav>
    </header>
  );
}
