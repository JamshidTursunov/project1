<template>
  <section class="allCourses">
    <nuxt-link
      v-for="singleCourse in allCourseData"
      :key="singleCourse.id"
      :to="localePath(`/courses/${singleCourse.id}`)"
      class="singleCourse"
    >
      <PromoVideo />
    </nuxt-link>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },

  created() {
    this.allCoursePromo()
  },

  computed: {
    allCourseData() {
      return this.$store.getters['course/getAllCourseData']
    },
  },

  methods: {
    allCoursePromo() {
      this.$store.dispatch('course/initAllPromoVideo')
    },
  },
}
</script>

<style scoped>
.allCourses {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 8rem;
  flex-wrap: wrap;
  background-color: lightblue;
}

.singleCourse {
  margin: 1rem;
}
</style>
