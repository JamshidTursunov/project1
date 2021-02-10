<template>
  <div>
    <spinner v-if="isLoading" />
    <div v-else class="wrapper">
      <section-1 class="limit-size" />
      <section-2 class="limit-size" />
      <section-3 class="limit-size" />
      <section-4 class="custom-p" />
      <section-5 class="custom-p" :courses="allCourses" />
      <section-6 class="custom-p" v-if="!$auth.loggedIn" />
      <section-7 />
    </div>
  </div>
</template>

<script>
import spinner from '~/components/spinner.vue'
import Toast from '~/utils/toast.js'
export default {
  components: { spinner },
  layout: 'HomePageLayout',
  mixins: [Toast],
  data() {
    return {
      isLoading: true,
    }
  },
  computed: {
    allCourses() {
      return this.$store.getters['course/getAllCourseData']
    },
  },
  async created() {
    await this.$store.dispatch('userModule/GET_USER')
    await this.createToast()
    await this.$store.dispatch('course/allCourses')
    this.isLoading = false
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
