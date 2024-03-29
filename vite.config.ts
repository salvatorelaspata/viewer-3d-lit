import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/viewer-3d-lit.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
})
