import { defineCollection, z } from 'astro:content';

const noteSchema = z.object({
  title: z.string(),
  order: z.number(),
  session: z.string().optional(),
});

const notes = defineCollection({ type: 'content', schema: noteSchema });
const notesEn = defineCollection({ type: 'content', schema: noteSchema });

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

export const collections = { notes, 'notes-en': notesEn, research };
