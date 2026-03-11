import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/data/categories";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://toolbox.sixsides-ai.org";

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/kategorie/${cat.id}`,
    lastModified: new Date("2026-03-10"),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryPages,
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
