<template>
  <div class="tools">
    <div class="tools__container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 p-0 tools__wrapper">
            <div class="tools__photo">
              <img
                src="~assets/images/userAccount.png"
                alt="user-image"
                class="tools__img"
              />
              <h1 class="">Name Surname</h1>
            </div>
            <ul class="tools__list">
              <li
                @click="toggleProfileActive"
                :class="{ tools__active: profileActive }"
              >
                <nuxt-link
                  class="tools__link"
                  :to="localePath('/instructor-page/tools/profile')"
                  >Profile</nuxt-link
                >
              </li>
              <li
                @click="togglePhotoActive"
                :class="{ tools__active: photoActive }"
              >
                <nuxt-link
                  class="tools__link"
                  :to="localePath('/instructor-page/tools/photo')"
                  >Photo</nuxt-link
                >
              </li>
              <li
                @click="toggleAccountActive"
                :class="{ tools__active: accountActive }"
              >
                <nuxt-link
                  class="tools__link"
                  :to="localePath('/instructor-page/tools/account')"
                  >Account</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-9 p-0 tools__wrapper">
            <NuxtChild />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileActive: true,
      accountActive: false,
      photoActive: false,
    }
  },

  methods: {
    toggleProfileActive() {
      this.profileActive = true
      this.accountActive = false
      this.photoActive = false
    },
    toggleAccountActive() {
      this.profileActive = false
      this.accountActive = true
      this.photoActive = false
    },
    togglePhotoActive() {
      this.profileActive = false
      this.accountActive = false
      this.photoActive = true
    },
  },
}
</script>

<style></style>
