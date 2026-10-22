import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

// Static build for Cloudflare Pages: `npm run build` -> dist/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt', // the site shows an "Update available" toast instead of reloading by itself
      injectRegister: false, // registration happens in src/components/common/ReloadPrompt.tsx
      includeAssets: ['favicon.ico', 'favicon.svg', 'apple-touch-icon.png', 'offline.html'],
      manifest: {
        id: '/',
        name: 'Margaret Amshi Foundation',
        short_name: 'Margaret Amshi',
        description: 'Margaret Amshi Foundation partners with donors and local leaders to improve lives through strategic grantmaking and dedicated leadership.',
        start_url: '/?source=pwa',
        scope: '/',
        lang: 'en-NG',
        dir: 'ltr',
        display: 'standalone',
        display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
        orientation: 'any',
        theme_color: '#156084',
        background_color: '#EAF5FA',
        categories: ['social', 'education', 'lifestyle'],
        icons: [
          ...[48, 72, 96, 128, 144, 152, 192, 256, 384, 512].map((s) => ({ src: `/icons/icon-${s}.png`, sizes: `${s}x${s}`, type: 'image/png', purpose: 'any' })),
          { src: '/icons/maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        shortcuts: [
          { name: 'Donate', short_name: 'Donate', description: 'Give securely online or by bank transfer', url: '/donate?source=shortcut', icons: [{ src: '/icons/shortcut-96.png', sizes: '96x96', type: 'image/png' }] },
          { name: 'Programs', short_name: 'Programs', description: 'Browse our programs and services', url: '/programs?source=shortcut', icons: [{ src: '/icons/shortcut-96.png', sizes: '96x96', type: 'image/png' }] },
          { name: 'Volunteer', short_name: 'Volunteer', description: 'Apply to volunteer', url: '/get-involved/volunteer?source=shortcut', icons: [{ src: '/icons/shortcut-96.png', sizes: '96x96', type: 'image/png' }] },
          { name: 'Contact', short_name: 'Contact', description: 'Call, message or visit us', url: '/contact?source=shortcut', icons: [{ src: '/icons/shortcut-96.png', sizes: '96x96', type: 'image/png' }] },
        ],
        screenshots: [
          { src: '/screenshots/home-wide.png', sizes: '1280x720', type: 'image/png', form_factor: 'wide', label: 'Margaret Amshi Foundation home page' },
          { src: '/screenshots/home-narrow.png', sizes: '750x1334', type: 'image/png', form_factor: 'narrow', label: 'Donate from your phone' },
        ],
      },
      workbox: {
        // App shell: JS, CSS, HTML and fonts are precached. Photos and PDFs are cached as they are used.
        globPatterns: ['**/*.{js,css,html,woff2,ico,svg}', 'logo/*.webp', 'icons/icon-192.png'],
        globIgnores: ['images/**', 'downloads/**', 'screenshots/**', 'og-image.png'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/downloads\//, /^\/sitemap\.xml$/, /^\/robots\.txt$/, /^\/offline\.html$/],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        runtimeCaching: [
          // Payments, analytics, maps and WhatsApp must always use the live network and are never cached.
          {
            urlPattern: ({ url }: { url: URL }) => /(^|\.)(paystack\.co|paystack\.com|googletagmanager\.com|google-analytics\.com|analytics\.google\.com|google\.com|wa\.me|whatsapp\.com)$/.test(url.hostname),
            handler: 'NetworkOnly',
          },
          { urlPattern: ({ request }: { request: Request }) => request.destination === 'font', handler: 'CacheFirst', options: { cacheName: 'maf-fonts', expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 } } },
          { urlPattern: ({ url }: { url: URL }) => /^\/(images|logo|screenshots)\//.test(url.pathname) || url.pathname === '/og-image.png', handler: 'CacheFirst', options: { cacheName: 'maf-images', expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 30 }, cacheableResponse: { statuses: [0, 200] } } },
          { urlPattern: ({ url }: { url: URL }) => url.pathname.startsWith('/downloads/'), handler: 'StaleWhileRevalidate', options: { cacheName: 'maf-downloads', expiration: { maxEntries: 30, maxAgeSeconds: 60 * 60 * 24 * 30 } } },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
