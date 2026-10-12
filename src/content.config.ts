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
    orario: z.string().optional(),
    luogo: z.string().optional(),
    immagine: z.string().optional(),
    riassunto: z.string().optional(),
    prenotabile: z.boolean().optional().default(false),
    postiMax: z.number().int().positive().optional(),
    // Palette alternativa per la pagina del singolo evento (es. "esoterico": nero e oro).
    tema: z.enum(['esoterico']).optional(),
  }),
});

export const collections = { pagine, eventi };
