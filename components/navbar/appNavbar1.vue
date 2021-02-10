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
          <b-dropdown-item
            v-for="navItem in allData"
            :id="navItem.id"
            :key="navItem.id"
            :to="localePath(`/courses/${navItem.id}`)"
            >{{ navItem.courseName }}</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item :to="localePath('/pricing')">
          {{ $t('navbar.PlansAndPricing') }}
        </b-nav-item>
        <b-nav-item-dropdown :text="$t('navbar.Careers')" left>
          <!-- <b-dropdown-item :to="localePath('/inProcess')"
            >Become a mentor
          </b-dropdown-item> -->
          <b-dropdown-item :to="localePath('/instructors')"
            >Become an instructor</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item :to="localePath('/about')">
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
            >My Learning
          </b-dropdown-item>
          <b-dropdown-item to="/useraccount/mycart">My Cart</b-dropdown-item>
          <b-dropdown-item to="/useraccount/mynotifications"
            >Notifications</b-dropdown-item
          >
          <b-dropdown-item href="#">Messages</b-dropdown-item>
          <b-dropdown-item to="/userprofile">Account settings</b-dropdown-item>
          <b-dropdown-item href="/useraccount/mypurchase"
            >Purchage history</b-dropdown-item
          >
          <b-dropdown-item href="/" @click.prevent="$auth.logout()"
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

<script>
export default {
  data() {
    return {
      loggedIn: false,
    }
  },

  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      console.log('logout')
    },
  },

  computed: {
    allData() {
      const courseNames = this.$store.getters['course/getAllCourseData']
      if (this.$i18n.locale == 'en') {
        return courseNames.map((item) => {
          return { courseName: item.course_name_en, id: item.id }
        })
      } else if (this.$i18n.locale == 'ru') {
        return courseNames.map((item) => {
          return { courseName: item.course_name_ru, id: item.id }
        })
      } else {
        return courseNames.map((item) => {
          return { courseName: item.course_name_uz, id: item.id }
        })
      }
    },
  },
}
</script>

<<<<<<< HEAD ======= >>>>>>> 47debe607b67d12734f803cf3bf07e985a0784aa =======
>>>>>>> 3ac88574e3824c4f8e6e4ccc1eb82750752b8ac2 >>>>>>>
ca1e03bdf182ad7cd3079373990bb32668bdfaa7
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
