// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'A.C.A No1 — Beograd | Gume, felne, balansiranje',
      htmlAttrs: { lang: 'sr' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        {
          name: 'description',
          content:
            'A.C.A No1 — vulkanizer u Beogradu (Zvezdara) — montaža, demontaža i balansiranje guma, polovne i nove gume, čelične i alu felne. Smederevski put 3A, Beograd. Tel: 065 221 4144.',
        },
        { name: 'theme-color', content: '#0c0c0d' },
        // Open Graph
        { property: 'og:title', content: 'A.C.A No1 — Beograd' },
        {
          property: 'og:description',
          content: 'Gume, felne, balansiranje. Brzo, pošteno, profesionalno.',
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
