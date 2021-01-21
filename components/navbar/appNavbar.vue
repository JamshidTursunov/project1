<template>
  <header class="bg-white z-9999 w-full shadow-md app-navbar">
    <nav
      class="container-fluid app-header mx-auto px-28 flex flex-wrap justify-between items-center"
    >
      <nuxt-link :to="localePath('index')" class="flex-shrink-0">
        <img class="logo-image" src="~/assets/svgs/logo.svg" alt="logo image" />
      </nuxt-link>
      <div class="block lg:hidden">
        <button
          @click="toggleMenu"
          class="flex items-center px-3 py-2 mr-4 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600"
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
        style="border: 1px solid green"
        class="list-items tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-grow lg:w-auto items-center lg:mt-0 justify-between xs:flex-col"
        :class="menuOpen ? 'block' : 'hidden'"
      >
        <div class="flexation md:flex">
          <li class="mr-8 lg:mb-0 btn-hover">
            <nuxt-link :to="localePath('/')">
              <mega-menu style="z-index: 9999" />
            </nuxt-link>
          </li>

          <li class="mr-8 lg:mb-0 btn-hover">
            <nuxt-link :to="localePath('/plans_pricing')">
              {{ $t('navbar.PlansAndPricing') }}
            </nuxt-link>
          </li>
          <li class="mr-8 lg:mb-0 btn-hover">
            <nuxt-link :to="localePath('/careers')">
              {{ $t('navbar.Careers') }}
            </nuxt-link>
          </li>
          <li class="mr-8 lg:mb-0 btn-hover">
            <nuxt-link :to="localePath('/about')">
              {{ $t('navbar.AboutUs') }}
            </nuxt-link>
          </li>
          <li class="mr-8 lg:mb-0 btn-hover">
            <nuxt-link :to="localePath('/contactUs')">
              {{ $t('navbar.ContactUs') }}
            </nuxt-link>
          </li>
        </div>
        <div class="flexation md:flex">
          <li class="mr-4 lg:mb-0 language-toggler">
            <language-switcher />
          </li>
          <li class="mr-2 px-4 lg:mb-0 btn login-btn">
            <nuxt-link :to="localePath('/login')">
              {{ $t('navbar.logIn') }}
            </nuxt-link>
          </li>
          <li class="lg:mb-0 btn signup-btn">
            <nuxt-link :to="localePath('/signup')">
              {{ $t('navbar.signUp') }}
            </nuxt-link>
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
*:focus {
  outline: none;
}
*:active {
  outline: none;
}

.app-navbar {
  height: 100px;
  z-index: 999999;
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
.logo-image {
  width: 108px;
  height: 108px;
}
li a {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
  text-decoration: none;
}
.login-btn {
  border: 1px solid #333366;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #333366;
  transition: all 0.1s linear;
}
.login-btn:hover {
  transform: scale(1.05);
}
.btn-hover {
  transition: all 0.2s ease;
}
.btn-hover:hover {
  transform: scale(1.05);
}

.signup-btn {
  background: #333366;
  border: 1px solid #333366;
  transition: all 0.1s linear;
  box-sizing: border-box;
  border-radius: 4px;
}
.signup-btn:hover {
  transform: scale(1.05);
}

.signup-btn a {
  color: white;
}
@media only screen and (max-width: 900px) {
  /* .app-header {
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  .list-items {
    padding: 1rem 1rem;
  }
  .list-items li {
    margin: 1rem 0;
  } */
}
</style>
