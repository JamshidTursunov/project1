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

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <language-switcher />
        <b-nav-item>Login</b-nav-item>
        <b-nav-item>Sign up</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
.app-navbar {
  padding: 0 110px;
}
@media only screen and (max-width: 900px) {
  .ul-list {
    flex-direction: column;
  }
  .app-navbar {
    padding: 0 10px;
  }
}
</style>
