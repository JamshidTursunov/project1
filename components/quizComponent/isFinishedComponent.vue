<template>
  <div>
    <h1>Test is finished</h1>
    <h1>your correct answers: {{ score.correctAnswers }}</h1>
    <h1>your incorrect answers: {{ score.incorrectSet }}</h1>
    <h1>percentage: {{ score.persentageValue }}%</h1>
  </div>
</template>

<script>
export default {
  props: ['score'],
}
</script>

<style scoped></style>
