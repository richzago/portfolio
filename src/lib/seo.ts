import type { Metadata } from "next";

export const siteUrl = (
  process.env.SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const siteName = "Richard Zago";

export const siteDescription =
  "Portfólio de Richard Zago, desenvolvedor Full Stack com foco em Back-end, APIs REST, TypeScript e bancos de dados.";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: "pt_BR",
      type: "website",
      images: ["/opengraph-image"],
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/opengraph-image"],
    },
  };
}
