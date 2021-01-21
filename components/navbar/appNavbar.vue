<template>
  <header class="bg-white z-9999 w-full shadow-md app-navbar">
    <nav
      class="container-fluid mx-auto px-28 flex flex-wrap justify-between items-center"
    >
      <nuxt-link :to="`/${$i18n.locale}`" class="flex-shrink-0">
        <img
          class="pt-3 h-15"
          src="~/assets/images/logo.png"
          alt="logo image"
        />
      </nuxt-link>
      <div class="block lg:hidden">
        <button
          @click="toggleMenu"
          class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
        >
          <svg
            class="current-color h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" />
          </svg>
        </button>
      </div>

      <ul
        class="tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-grow lg:w-auto items-center mt-8 lg:mt-0 justify-between xs:flex-col"
        :class="menuOpen ? 'block' : 'hidden'"
      >
        <div class="flexation md:flex">
          <li class="mr-8 mb-6 lg:mb-0">
            <nuxt-link :to="localePath('index')">
              <mega-menu style="z-index: 9999" />
            </nuxt-link>
          </li>

          <li class="mr-8 mb-6 lg:mb-0">
            <nuxt-link :to="localePath('posts')">
              {{ $t('posts') }}
            </nuxt-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <nuxt-link :to="localePath('about')">
              {{ $t('about') }}
            </nuxt-link>
          </li>
        </div>
        <div class="flexation md:flex">
          <li class="mr-8 mb-6 lg:mb-0">
            <nuxt-link :to="localePath('index')">
              {{ $t('home') }}
            </nuxt-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <nuxt-link :to="localePath('posts')">
              {{ $t('posts') }}
            </nuxt-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <nuxt-link :to="localePath('about')">
              {{ $t('about') }}
            </nuxt-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <language-switcher />
          </li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
import MegaMenu from './MegaMenu.vue'

export default {
  name: 'appNavbar',
  components: {
    LanguageSwitcher,
    MegaMenu,
  },
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>

<style scoped>
/* :root {
  --blush: red;
} */
.app-navbar {
  height: 100px;
  padding: 0 137px;
  z-index: 999999;
  /* border: 1px solid red; */
}
.flexation {
  font-size: 18px;
  color: #333366;
  line-height: 25px;
  font-weight: 600;
  align-items: center;
}
.flexation a {
  padding-top: 1rem;
}
@media only screen and (max-width: 900px) {
}
</style>
