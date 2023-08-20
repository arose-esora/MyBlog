// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '/assets/css/style.min.css',
    '/assets/css/variables.min.css',
    'vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  app: {
    head: {
      title: 'Test Title',
      meta: [{ name: 'description', content: 'Test Description' }],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&family=Noto+Sans+JP:wght@300&display=swap' },
      ],
      script: [
        {
          type: 'module',
          src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
        },
        {
          nomodule: true,
          src: 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('ion-')
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/variables.scss";'
        }
      }
    }
  },
  devtools: { enabled: true }
})
