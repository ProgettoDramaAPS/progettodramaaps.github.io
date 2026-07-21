import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pagine = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pagine' }),
  schema: z.object({
    titolo: z.string(),
  }),
});

export const collections = { pagine };
