import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.string().default('Untold Stories'),
			videoDuration: z.string().default('Watch Full Video'),
			youtubeId: z.string().optional(),
			heroImage: z.union([image(), z.string()]).optional(),
			quickFacts: z
				.array(
					z.object({
						label: z.string(),
						value: z.string(),
					}),
				)
				.optional(),
		}),
});

export const collections = { blog };
