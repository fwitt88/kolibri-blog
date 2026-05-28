import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.enum(['Dany', 'Kolibri', 'Florian]),
    category: z.string().optional(),
    readingTime: z.number().optional(), // minutos
  }),
});

export const collections = { blog };
