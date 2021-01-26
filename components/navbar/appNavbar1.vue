<template>
  <b-navbar toggleable="lg" type="light" class="app-navbar">
    <b-navbar-brand :to="localePath('index')"
      ><img
        class="logo-image w-14 h-14"
        src="~/assets/images/logo_main.png"
        alt="logo image"
    /></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item-dropdown :text="$t('navbar.AllCourses')" left>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown :text="$t('navbar.PlansAndPricing')" left>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown :text="$t('navbar.Careers')" left>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/about"> {{ $t('navbar.AboutUs') }}</b-nav-item
        ><b-nav-item> {{ $t('navbar.ContactUs') }}</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="loggedIn">
        <language-switcher class="mt-1 mr-2" />
        <b-nav-item class="btn-login" :to="localePath('/sign')">
          {{ $t('navbar.logIn') }}</b-nav-item
        >
        <b-nav-item class="btn-sign-up" :to="localePath('/sign')">
          {{ $t('navbar.signUp') }}</b-nav-item
        >
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-else>
        <language-switcher class="mt-1" />
        <b-nav-item :to="localePath('/')"
          ><img
            class="w-7 h-7"
            src="~assets/svgs/search.svg"
            alt="notification"
        /></b-nav-item>
        <b-nav-item :to="localePath('/')"
          ><img class="w-7 h-7" src="~assets/svgs/korzinka.svg" alt="korzinka"
        /></b-nav-item>
        <b-nav-item :to="localePath('/')"
          ><img
            class="w-7 h-7"
            src="~assets/svgs/notification.svg"
            alt="notification"
        /></b-nav-item>
        <b-dropdown
          size="md"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
          id="dropdown-right"
          right
        >
          <template #button-content>
            <img
              src="~assets/images/user_profile.png"
              class="w-10 h-10"
              alt="user-profile"
            />
          </template>
          <b-dropdown-header id="dropdown-header-label">
            <div class="flex flex-row">
              <img
                src="~assets/images/user_profile.png"
                class="w-10 h-10"
                alt="facebook"
              />
              <p class="user-fullname-text ml-3">
                <span>John Doe</span>
                <br />
                <span class="user-email-text">johndoe_1234@mail.ru</span>
              </p>
            </div>
          </b-dropdown-header>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">My Learning</b-dropdown-item>
          <b-dropdown-item href="#">My Cart</b-dropdown-item>
          <b-dropdown-item href="#">Notifications</b-dropdown-item>
          <b-dropdown-item href="#">Messages</b-dropdown-item>
          <b-dropdown-item href="#">Account settings</b-dropdown-item>
          <b-dropdown-item href="#">Purchage history</b-dropdown-item>
          <b-dropdown-item href="#">Logout</b-dropdown-item>
        </b-dropdown>
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
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
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
