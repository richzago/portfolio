import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import "./globals.css";
import { siteDescription, siteName, siteUrl } from "@/src/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${siteName} | Desenvolvedor Full Stack`,
    template: `%s | ${siteName}`,
  },

  description: siteDescription,

  applicationName: "Portfólio Richard Zago",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${siteName} | Desenvolvedor Full Stack`,
    description: siteDescription,
    url: "/",
    siteName,
    locale: "pt_BR",
    type: "website",
    images: ["/opengraph-image"],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Desenvolvedor Full Stack`,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
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
