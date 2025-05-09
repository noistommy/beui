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
      fileName: (format) => `be-ui.${format}.js`
    },
    rollupOption: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        preserveModules: true,
        moduleIds: 'deterministic',
        assetFileNames: assetInfo => {
          if (assetInfo.name == "style.css") return "nt-ui-css.css"
          return assetInfo.name
        }
      }
    },
    sourcemap: true
  }
}

const docsConfig = {
  root: "./docs",
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./docs/src', import.meta.url))
    },
  },
  server: {
    port: 5177
  },
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const executionMode = process.env.MODE || "lib"
  console.log(executionMode)

  const mode = command === 'build' ? "production" : "development"

  if(executionMode === 'docs') {
    return { ...docsConfig, mode }
  } else {
    return { ...libConfig, mode }
  }
})
