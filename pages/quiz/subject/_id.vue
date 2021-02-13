<template>
  <spinner v-if="isLoading" />
  <div v-else class="subject-wrapper">
    <h1 class="text-center mt-8">Quiz subject: {{ subject }}</h1>
    <QuizComponent :questions="filteredQuestions" />
  </div>
</template>

<script>
import spinner from '~/components/spinner.vue'
export default {
  name: 'subject-id',
  components: { spinner },
  data() {
    return {
      isLoading: true,
      subject: null,
      allQuestions: [],
      filteredQuestions: [],
    }
  },
  async created() {
    await this.$axios
      .get(`quiz/subject/${this.$route.params.id}`)
      .then(({ data }) => (this.subject = data.direction))
      .catch((err) => console.log(err))
    await this.$axios
      .get(`quiz/quiz/`)
      .then(({ data }) => {
        this.allQuestions = data
      })
      .catch((err) => console.log(err))
    this.filteredQuestions = this.allQuestions.filter(
      (o) => o.subject === parseInt(`${this.$route.params.id}`)
    )
    this.isLoading = false
  },
}
</script>

<style scoped>
.subject-wrapper {
  min-height: 90vh;
}
</style>
