import { defineCollection, z } from "astro:content";

const features = defineCollection({
  type: "data",
  schema: z.object({
    order: z.number(),
    title: z.string(),
    content: z.string(),
  }),
});

const howItWorks = defineCollection({
  type: "data",
  schema: z.object({
    order: z.number(),
    image: z.string(),
    content: z.string(),
  }),
});

export const collections = { features, howItWorks };
