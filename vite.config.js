import { defineConfig, configDefaults } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@utils': resolve(__dirname, './src/utils'),
      '@models': resolve(__dirname, './src/models'),
      '@types': resolve(__dirname, './src/types.d.ts')
    }
  },
  test: {
    exclude: [...configDefaults.exclude, 'lib/*', '**/*.e2e.test.ts']
  }
})
