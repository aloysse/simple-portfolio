import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      startDate: z.date(),
      endDate: z.date().optional(),
      summary: z.string(),
      url: z.string().optional(),
      cover: image(),
      tags: z.array(z.string()),
      ogImage: z.string().optional(),
      author: z.string().optional(),
    }),
});

export const collections = { projects };
