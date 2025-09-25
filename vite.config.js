import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      injectRegister: 'auto',
      includeAssets: ['/android', '/windows11'],
      manifest: {
        name: 'Horoscopo',
        short_name: 'Horoscopo-PWA',
        description: 'App de Horoscopo con React y Vite',
        theme_color: '#ffffff',
        display_override: ["fullscreen", "minimal-ui", "window-controls-overlay"],
        display: "standalone",
      }
    })
  ],
})
