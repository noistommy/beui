import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const libConfig = {
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, './src'),
      name: 'be-ui',
      fileName: (format) => `be-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        // moduleIds: 'deterministic',
        // exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css') return 'nt-ui-css.css'
          return assetInfo.name
        },
      },
    },
    sourcemap: true,
  },
}

const docsConfig = {
  root: './demo',
  base: '/beui/',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./demo/src', import.meta.url)),
    },
  },
  server: {
    port: 5177,
  },
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const executionMode = process.env.MODE || 'lib'

  const mode = command === 'build' ? 'production' : 'development'

  if (executionMode === 'demo') {
    return { ...docsConfig, mode }
  } else {
    return { ...libConfig, mode }
  }
})
