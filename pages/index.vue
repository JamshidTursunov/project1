<template>
  <div>
    <spinner v-if="isLoading" />
    <div v-else class="wrapper">
      <section-1  />
      <section-2  />
      <section-3  />
      <section-4  id="section_4" />
      <section-5  :courses="allCourses" />
      <section-6  v-if="!$auth.loggedIn" />
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
    const percentageM = this.$store.getters['quizModule/getPercentage']
    this.isLoading = false
  },
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
