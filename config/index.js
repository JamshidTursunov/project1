import en from '../lang/en-US'
import ru from '../lang/ru-Ru'
import uz from '../lang/uz-UZ'

export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      img: '~assets/svgs/en.svg',
    },
    {
      code: 'ru',
      iso: 'ru-RU',
      name: 'Russian',
      img: '~assets/svgs/ru.svg',
    },
    {
      code: 'uz',
      iso: 'uz-UZ',
      img: '~assets/svgs/uz.svg',
      name: 'Uzbek',
    },
  ],
  defaultLocale: 'en',
  routes: {
    index: {
      en: '/',
    },
    about: {
      en: '/about',
      ru: '/about',
    },
    posts: {
      en: '/posts',
    },
  },
  vueI18n: {
    fallbackLocale: 'en',
    messages: { en, ru, uz },
  },
}
