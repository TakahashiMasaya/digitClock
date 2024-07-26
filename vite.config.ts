import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: '/digitClock/',
  plugins: [
    vue(),
    vueJsx(),
    command === 'serve' &&
      VitePWA({
        manifest: {
          name: 'Digit Clock',
          short_name: 'Digit Clock',
          background_color: '#000000',
          display: 'fullscreen',
          icons: [
            {
              src: 'icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        },
        registerType: 'autoUpdate',
        includeAssets: [
          'icons/*.{ico,png}',
          'images/*.webp',
          'images-dom/*.webp'
        ],
        workbox: {
          // Only precache these files - html should be excluded
          globPatterns: ['**/*.{js,css}'],
          // NOTE: index.htmlのrevisionを毎回変更することで、キャッシュを更新する
          additionalManifestEntries: [
            { url: 'index.html', revision: `${Date.now()}` }
          ]
        }
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}))
