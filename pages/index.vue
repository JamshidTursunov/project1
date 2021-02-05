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
    console.log('index created()')
    this.$store.dispatch('userModule/GET_USER')
    this.createToast()
    this.$axios.get('instructor/1/').then((res) => console.log(res.data))
  },
  methods: {
    createToast() {
      if (this.$store.getters['course/getToastShow']) {
        this.showToast(
          'success',
          'b-toaster-bottom-right',
          '3000',
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
