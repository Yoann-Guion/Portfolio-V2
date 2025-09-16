import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      authors: z.array(z.string()).optional(),
      draft: z.boolean().optional(),
    }),
})

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      image: image(),
      link: z.string().url(),
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
    }),
})

const about = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/about' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
      description: z.string().optional(),
      name: z.string().optional(),
      updatedDate: z.coerce.date().optional(),
      image: image().optional(), // Comme dans votre collection blog
      skills: z.array(z.string()).optional(),
      contact: z.object({
        email: z.string().optional(),
        linkedin: z.string().optional(),
        github: z.string().optional(),
      }).optional(),
    }),
})


export const collections = { blog, projects, about }
