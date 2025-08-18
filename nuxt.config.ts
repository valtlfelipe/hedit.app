import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/eslint', '@nuxt/scripts', '@nuxt/image', '@nuxt/icon', '@nuxt/fonts', 'shadcn-nuxt', 'nuxt-lucide-icons', '@nuxtjs/device', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxtjs/seo', 'nuxt-umami'],

  app: {
    head: {
      // title: 'Hedit - Modern Hosts File Editor',
      titleTemplate: '%s %separator %siteName',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { property: 'og:image', content: 'https://hedit.app/og_image.png' },
        { property: 'og:title', content: 'Hedit - Modern Hosts File Editor' },
        { property: 'og:description', content: 'Fast and intuitive hosts file editor with syntax highlighting, backup, and validation. The modern tool for who care about their workflow.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    },
  },

  site: {
    url: 'https://hedit.app',
    name: 'Hedit - Modern Hosts File Editor',
  },

  routeRules: {
    '/terms': { prerender: true },
    '/privacy': { prerender: true },
    '/human': { prerender: true },
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
      '/configuracoes',
      '/pagamento',
      '/chat/*',
    ],
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  umami: {
    id: '4483964e-a22c-4ba7-9857-be25f8b1e55b',
    host: 'https://umami.bluelab.cloud',
    autoTrack: true,
    useDirective: false,
    ignoreLocalhost: true,
    domains: ['hedit.app'],
  },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
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
    componentDir: './app/components/ui'
  }

})