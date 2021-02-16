<template>
  <Courses />
</template>

<script>
export default {
  created() {
    this.$store.dispatch('instructorsPage/initAllCoursesList')
  },
}
</script>

<style scoped></style>
