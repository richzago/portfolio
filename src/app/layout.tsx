import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richard Zago | Desenvolvedor Full Stack",
  description:
    "Portfólio de Richard Zago, desenvolvedor Full Stack com foco em Back-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex min-h-screen flex-col text-slate-100">
        <Header />

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
