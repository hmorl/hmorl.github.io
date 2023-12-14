import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date_created: z.date().optional(),
    featured: z.boolean().optional(),
    description: z.string().optional(),
    thumbnail: z
      .object({
        cloudinary_id: z.string().optional(),
        url: z.string().optional(),
        // alt: z.string()
      })
      .optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { posts: postsCollection };
