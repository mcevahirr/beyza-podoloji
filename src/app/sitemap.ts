import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/hizmetler", "/hakkimda", "/galeri", "/sss", "/iletisim"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const serviceUrls = services.map((s) => ({
    url: `${site.url}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...pages, ...serviceUrls];
}
