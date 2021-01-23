<template>
  <b-navbar toggleable="lg" type="light" class="app-navbar">
    <b-navbar-brand :to="localePath('index')"
      ><img class="logo-image" src="~/assets/svgs/logo.svg" alt="logo image"
    /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown :text="$t('navbar.AllCourses')" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown :text="$t('navbar.PlansAndPricing')" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown :text="$t('navbar.Careers')" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item> {{ $t('navbar.AboutUs') }}</b-nav-item
        ><b-nav-item> {{ $t('navbar.ContactUs') }}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav v-if="isAuthenticated === false" class="ml-auto">
        <language-switcher />
        <b-nav-item :to="localePath('/sign')">
          {{ $t('navbar.logIn') }}</b-nav-item
        >
        <b-nav-item> {{ $t('navbar.signUp') }}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav v-else-if="isAuthenticated === true" class="ml-auto">
        <language-switcher style="z-index: 9999" />
        <b-nav-item :to="localePath('/')"> korzinka</b-nav-item>
        <b-nav-item> user profile</b-nav-item>
        <b-nav-item @click="logout" to="/">logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      console.log('logout')
    },
  },
  computed: {
    isAuthenticated() {
      console.log('is authorized', this.$store.getters['auth/isAuthorized'])
      return this.$store.getters['auth/isAuthorized']
    },
  },
}
</script>

<style scoped>
.app-navbar {
  padding: 0 110px;
}
@media only screen and (max-width: 900px) {
  .ul-list {
    flex-direction: column;
  }
  .app-navbar {
    padding: 0 2rem;
  }
}
</style>
