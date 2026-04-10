import { defineCollection, z } from 'astro:content';

const notes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number(),
    session: z.string().optional(),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['macro', 'policy', 'daily', 'thematic', 'articles', 'stocks']),
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { notes, research };
