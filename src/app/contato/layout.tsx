import { createPageMetadata } from "@/src/lib/seo";

export const metadata = createPageMetadata(
  "Contato",
  "Entre em contato comigo para oportunidades profissionais, desenvolvimento de software e projetos de tecnologia.",
  "/contato",
);

export default function ContatoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
