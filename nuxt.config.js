import { I18N } from './config'

export default {
  target: 'static',
  router: {
    base: '/test/',
  },
  layoutTransition: 'layout',
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

      {
        src: '//code.jivosite.com/widget/TuzHwIPOp0',
      },
    ],
  },

  css: ['~assets/css/sass/main.css', '~assets/css/transition.css'],

  plugins: [
    { src: '~/plugins/yMap', mode: 'client' },
    { src: '~/plugins/aos', mode: 'client' },
    '~/plugins/clickaway',
    { src: '~/plugins/localStorage.js', ssr: false },
  ],

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
            icons: ['faTools', 'faAngleUp'],
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
    '@nuxtjs/auth',
    '@nuxtjs/svg',
    ['nuxt-i18n', I18N],
    '@nuxtjs/style-resources',
  ],
  bootstrapVue: {
    icons: true,
  },
  axios: {
    baseURL: 'https://greatsoft-academy.herokuapp.com/api/',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'token/', method: 'post', propertyName: 'access' },
          user: { url: 'user/profile', method: 'get', propertyName: false },
          logout: false,
        },
      },
    },
  },
  build: {},
  loading: {
    color: '#5d30db',
  },
}
