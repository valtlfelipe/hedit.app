import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/ui-pro', '@nuxt/content', '@nuxt/scripts', '@nuxt/image', '@nuxt/icon', '@nuxt/fonts', 'shadcn-nuxt', 'nuxt-lucide-icons', '@nuxtjs/device', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/seo', 'nuxt-umami', 'nitro-cloudflare-dev'],
  devtools: { enabled: true },

  app: {
    head: {
      // title: 'Hedit - Modern Hosts File Editor',
      titleTemplate: '%s %separator %siteName',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { property: 'og:image', content: 'https://hedit.app/og_image.png' },
        { property: 'og:title', content: 'Hedit - Modern Hosts File Editor' },
        { property: 'og:description', content: 'Fast and intuitive hosts file editor with syntax highlighting, multiple files, and validation. The modern tool for who care about their workflow.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/tailwind.css'],

  site: {
    url: 'https://hedit.app',
    name: 'Hedit - Modern Hosts File Editor',
  },

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
  },

  routeRules: {
    '/terms': { prerender: true },
    '/privacy': { prerender: true },
    '/human': { prerender: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false },
  },
  compatibilityDate: '2025-08-18',

  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },

    storage: {
      kv: {
        driver: 'cloudflare-kv-binding',
        binding: 'KV',
      },
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  robots: {
    disallow: [
      '/cdn-cgi',
      '/api',
      '/_nuxt',
      '/thank-you',
    ],
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './app/components/ui',
  },

  sitemap: {
    // strictNuxtContentPaths: true,
    exclude: ['/thank-you'],
  },

  umami: {
    id: '4483964e-a22c-4ba7-9857-be25f8b1e55b',
    host: 'https://umami.bluelab.cloud',
    autoTrack: true,
    useDirective: false,
    ignoreLocalhost: true,
    domains: ['hedit.app'],
  },

})
