// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Vesa Vulkanizer — Kaluđerica | Gume, felne, balansiranje',
      htmlAttrs: { lang: 'sr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'Vesa Vulkanizer u Kaluđerici — montaža, demontaža i balansiranje guma, polovne i nove gume, čelične i alu felne. Ocena 4.2★. Živorada Jakovljevića 1, Kaluđerica. Tel: 063 203397.',
        },
        { name: 'theme-color', content: '#0c0c0d' },
        // Open Graph
        { property: 'og:title', content: 'Vesa Vulkanizer — Kaluđerica' },
        {
          property: 'og:description',
          content: 'Gume, felne, balansiranje. Brzo, pošteno, profesionalno. Ocena 4.2★.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Barlow+Condensed:wght@500;600;700&family=Barlow:wght@400;500;600&display=swap',
        },
      ],
    },
  },
})
