import { I18N } from './config'

export default {
  head: {
    title: 'GreateSoft_academy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap',
      },
    ],

    script: [
      {
        src: 'https://kit.fontawesome.com/fe43db86c1.js',
        crossorigin: 'anonymous',
      },
    ],
  },

  css: ['~assets/css/sass/main.css'],

  plugins: [{ src: '~/plugins/yMap', mode: 'client' }, '~/plugins/clickaway'],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faMapMarkerAlt',
              'faEnvelope',
              'faPhone',
              'faChevronLeft',
              'faChevronRight',
            ],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: [
              'faInstagram',
              'faTelegramPlane',
              'faLinkedinIn',
              'faTwitter',
              'faFacebookF',
              'faTelegram',
              'faFacebook',
            ],
          },
        ],
        suffix: true,
      },
    ],
  ],
  modules: [
    [
      'bootstrap-vue/nuxt',
      {
        icons: true,
      },
    ],
    '@nuxtjs/axios',
    'nuxt-gmaps',
    '@nuxtjs/svg',
    ['nuxt-i18n', I18N],
    '@nuxtjs/style-resources',
  ],
  bootstrapVue: {
    icons: true,
  },
  axios: {},

  build: {},
}
