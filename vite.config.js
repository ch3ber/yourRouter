import { defineConfig, configDefaults } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@types': resolve(__dirname, 'src/types.d.ts')
    }
  },
  test: {
    exclude: [...configDefaults.exclude, 'lib/*', '**/*.e2e.test.ts'],
    globals: true,
    browser: {
      headless: true,
      provider: 'playwright',
      enabled: false,
      name: 'chromium'
    }
  }
})
