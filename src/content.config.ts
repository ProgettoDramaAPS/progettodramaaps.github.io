import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pagine = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pagine' }),
  schema: z.object({
    titolo: z.string(),
  }),
});

const eventi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventi' }),
  schema: z.object({
    titolo: z.string(),
    data: z.coerce.date().optional(),
    luogo: z.string().optional(),
    immagine: z.string().optional(),
    prenotabile: z.boolean().optional().default(false),
    postiMax: z.number().int().positive().optional(),
  }),
});

export const collections = { pagine, eventi };
