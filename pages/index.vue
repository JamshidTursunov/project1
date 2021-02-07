<template>
  <div class="wrapper">
    <section-1 class="limit-size" />
    <section-2 class="limit-size" />
    <section-3 class="limit-size" />
    <section-4 class="custom-p" />
    <section-5 class="custom-p" />
    <section-6 class="custom-p" v-if="!$auth.loggedIn" />
    <section-7 />
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
export default {
  layout: 'HomePageLayout',
  mixins: [Toast],
  created() {
    this.$store.dispatch('userModule/GET_USER')
    this.createToast()
  },

  updated() {},
  methods: {
    createToast() {
      if (this.$store.getters['course/getToastShow']) {
        this.showToast(
          'success',
          'Muvafaqiyatli',
          "Muvafaqiyatli ro'yxatdan o'tdingiz"
        )
      }
      this.$store.dispatch('course/initToastShow', false)
    },
  },
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
