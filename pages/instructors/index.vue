<template>
  <section class="instructorsPage">
    <InstructorHeader />
    <InsructorContent />
    <InstructorProcess />
  </section>
</template>

<script>
import InstructorHeader from '~/components/Instructors/InstructorHeader.vue'
import InsructorContent from '~/components/Instructors/InstructorContent.vue'
import InstructorProcess from '~/components/Instructors/InstructorProcess.vue'
export default {
  components: {
    InstructorHeader,
    InsructorContent,
    InstructorProcess,
  },
}
</script>

<style lang="scss" scoped>
.instructorsPage {
  padding: 0 0 6rem;
}
</style>
