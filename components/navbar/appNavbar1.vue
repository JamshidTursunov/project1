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
        <b-nav-item to="/about"> {{ $t('navbar.AboutUs') }}</b-nav-item
        ><b-nav-item> {{ $t('navbar.ContactUs') }}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="loggedIn">
        <language-switcher />
        <b-nav-item class="btn-login" :to="localePath('/sign')">
          {{ $t('navbar.logIn') }}</b-nav-item
        >
        <b-nav-item class="btn-sign-up" :to="localePath('/sign')">
          {{ $t('navbar.signUp') }}</b-nav-item
        >
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-else>
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
      loggedIn: true,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      console.log('logout')
    },
  },
}
</script>

<style scoped>


@media only screen and (max-width: 900px) {
  .ul-list {
    flex-direction: column;
  }
  .app-navbar {
    padding: 0 2rem;
  }
}
</style>
