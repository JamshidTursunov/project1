<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6 offset-md-3 wrapper">
        <h1 class="question-text">{{ getQuestion }}|</h1>
        <div class="btns row">
          <button class="btn btn-info">A</button>
          <button class="btn btn-info">B</button>
          <button class="btn btn-info">C</button>
          <button class="btn btn-info">D</button>
        </div>
      </div>
      <!-- <p class="my-4" style="color: red">{{ myQuestion }}</p>
      <p class="my-3">{{ getQuestion }}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['questions'],
  data() {
    return {}
  },
  computed: {
    // getQuestion() {
    //   const myQuestion = this.questions[
    //     Math.floor(Math.random() * this.questions.length)
    //   ]
    //   return myQuestion
    // },
    // myQuestion(){
    // }
  },
  async asyncData({ $axios }) {
    const getQuestion = this.questions[
      Math.floor(Math.random() * this.questions.length)
    ]
    // const myQuestion = await $axios.get(`quiz/quiz/${this.getQuestion.id}`)
    return {
      randomNumber: Math.floor(Math.random() * this.questions.length),
      getQuestion,
    }
  },
}
</script>

<style scoped>
.btns {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
  padding: 0 1rem;
}
.question-text {
  margin: 1rem auto 2rem auto;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #333366;
}
.wrapper {
  margin-top: 3rem;
}
</style>
