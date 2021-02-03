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
          <b-dropdown-item to="/courses">Frontend development</b-dropdown-item>
          <b-dropdown-item to="/courses">Backend development</b-dropdown-item>
          <b-dropdown-item to="/courses">Mobile development</b-dropdown-item>
          <b-dropdown-item to="/courses"
            >Data science with python</b-dropdown-item
          >
          <b-dropdown-item to="/courses"
            >Machine learning with python</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item :to="localePath('/pricing')">
          {{ $t('navbar.PlansAndPricing') }}</b-nav-item
        >

        <b-nav-item-dropdown :text="$t('navbar.Careers')" left>
          <b-dropdown-item to="/mentor">Become a mentor</b-dropdown-item>
          <b-dropdown-item to="/instructors"
            >Become an instructor</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item :to="localePath('about')">
          {{ $t('navbar.AboutUs') }}</b-nav-item
        ><b-nav-item :to="localePath('/contact-us')">
          {{ $t('navbar.ContactUs') }}</b-nav-item
        >
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="$auth.loggedIn">
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
            alt="korzinka"
        /></b-nav-item>
        <b-dropdown
          size="md"
          variant="none"
          toggle-class="text-decoration-none"
          no-caret
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
                <span>
                  {{ $auth.user.user.first_name }}
                  {{ $auth.user.user.last_name }}
                </span>
                <br />
                <span class="user-email-text"
                  >+998
                  {{ $auth.user.user.phone_number }}
                </span>
              </p>
            </div>
          </b-dropdown-header>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item to="/useraccount/mylearning"
            >My Learning</b-dropdown-item
          >
          <b-dropdown-item to="/useraccount/mycart">My Cart</b-dropdown-item>
          <b-dropdown-item to="/useraccount/mynotifications"
            >Notifications</b-dropdown-item
          >
          <b-dropdown-item href="#">Messages</b-dropdown-item>
          <b-dropdown-item to="/userprofile">Account settings</b-dropdown-item>
          <b-dropdown-item href="/useraccount/mypurchase"
            >Purchage history</b-dropdown-item
          >
          <b-dropdown-item href="/" @click="$auth.logout()"
            >Logout</b-dropdown-item
          >
        </b-dropdown>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-else>
        <language-switcher class="mt-1 mr-2" />
        <b-nav-item class="btn-login" :to="localePath('/auth/login')">
          {{ $t('navbar.logIn') }}</b-nav-item
        >
        <b-nav-item class="btn-sign-up" :to="localePath('/auth/signUp')">
          {{ $t('navbar.signUp') }}</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

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
</style>
