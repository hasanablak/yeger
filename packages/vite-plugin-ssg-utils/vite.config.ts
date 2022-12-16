import path from 'node:path'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
  test: {
    include: ['test/**/*.test.ts'],
    coverage: {
      enabled: !!process.env.COVERAGE,
      all: true,
      include: ['src/**/*.*'],
    },
  },
})