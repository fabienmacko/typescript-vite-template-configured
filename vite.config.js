// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path';
import checker from 'vite-plugin-checker';

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    checker({
      typescript: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  }
})