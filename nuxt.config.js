import { I18N } from './config'

export default {
  head: {
    title: 'GreateSoft_academy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

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
  ],
  bootstrapVue: {
    icons: true,
  },
  axios: {},

  build: {},
}
