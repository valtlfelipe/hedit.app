import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@nuxt/eslint', '@nuxt/ui-pro', '@nuxt/scripts', '@nuxt/image', '@nuxt/icon', '@nuxt/fonts', 'shadcn-nuxt', 'nuxt-lucide-icons', '@nuxtjs/device', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/seo', 'nuxt-umami', '@nuxt/content', 'nitro-cloudflare-dev'],
  devtools: { enabled: true },

  app: {
    head: {
      // title: 'Hedit - Modern Hosts File Editor',
      titleTemplate: '%s %separator %siteName',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:image', content: 'https://hedit.app/img/og-image.png' },
        { property: 'og:title', content: 'Hedit - Modern Hosts File Editor' },
        {
          property: 'og:description', content: 'Fast and intuitive hosts file editor with syntax highlighting, remote files, and validation. The modern hosts file editor for people who care about their tools.',
        },
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
    '/': { prerender: true },
    '/terms': { prerender: true },
    '/privacy': { prerender: true },
    '/human': { prerender: true },
    '/pricing': { prerender: true },
    '/download': { prerender: false },
    '/docs': { redirect: '/docs/getting-started', prerender: false },
    '/docs/getting-started': { prerender: true },
  },

  compatibilityDate: '2025-12-09',

  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },

    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml', '/docs'],
      autoSubfolderIndex: false,
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
    id: 'ce4b5c56-91d9-4193-b07e-9d6b154dfb27',
    host: 'https://sun.felipevm.dev',
    autoTrack: true,
    useDirective: false,
    ignoreLocalhost: true,
    domains: ['hedit.app'],
  },

})
