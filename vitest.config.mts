import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    alias: {
      'redux-thunk': new URL(
        process.env.TEST_DIST ? 'node_modules/redux-thunk' : 'src/index.ts',
        import.meta.url,
      ).pathname,

      // this mapping is disabled as we want `dist` imports in the tests only to be used for "type-only" imports which don't play a role for jest
      '@internal': new URL('src', import.meta.url).pathname,
    },
  },
})
