import type { MetadataRoute } from "next";
import { siteUrl } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projetos", "/sobre", "/contato"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
