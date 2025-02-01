import { defineCollection, z } from 'astro:content'

import { file } from 'astro/loaders'

const errors = defineCollection({
  loader: file('src/errors.json'),
  schema: z.object({
    id: z.number(),
    message: z.string(),
  }),
})

export const collections = { errors }
