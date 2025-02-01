// @ts-check
import { defineConfig } from 'astro/config'

import playformCompress from '@playform/compress'

export default defineConfig({
  build: {
    inlineStylesheets: 'always',
    format: 'file',
  },

  integrations: [
    playformCompress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          minifyCSS: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      },
    }),
  ],
})
