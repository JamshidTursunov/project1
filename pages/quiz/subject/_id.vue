<template>
  <div class="subject-wrapper">
    <h1 class="text-center my-4">Quiz subject: {{ subject }}</h1>
    <QuizComponent :questions="filteredQuestions" />
  </div>
</template>

<script>
export default {
  name: 'subject-id',

  asyncData: async ({ $axios, route }) => {
    const subjectId = route.params.id
    const subject = (await $axios.get(`quiz/subject/${subjectId}`)).data
      .direction
    const allQuestions = (await $axios.get('quiz/quiz/')).data
    const filteredQuestions = allQuestions.filter(
      (o) => o.subject === parseInt(subjectId)
    )
    return {
      subject,
      filteredQuestions,
    }
  },
}
</script>

<style scoped>
.subject-wrapper {
  min-height: 90vh;
  border: 1px solid red;
}
</style>
