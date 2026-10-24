import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Zago | Desenvolvedor",
  description: "Portfólio pessoal e projetos de desenvolvimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-zinc-100">
        <Header />

        <main className="mx-auto min-h-screen max-w-5xl p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
