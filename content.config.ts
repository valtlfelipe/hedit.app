import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    docs: defineCollection({
      source: 'docs/**/*.md',
      type: 'page',
    }),
  },
})
