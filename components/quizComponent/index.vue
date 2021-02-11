<template>
  <spinner v-if="isLoading" />
  <div v-else class="container-fluid">
    <div v-if="!isFinished" class="row">
      <div
        class="col-md-6 offset-md-3 wrapper"
        v-for="(question, index) in myQuestions"
        :key="index"
        v-show="index === currentIndex"
      >
        <h1 class="question-text">{{ question }}</h1>
        <b-form-group :label="question.question">
          <b-form-radio
            v-model="answer[index]"
            name="some-radios"
            value="A"
            @change="check()"
            >{{ question.A }}</b-form-radio
          >
          <b-form-radio
            v-model="answer[index]"
            name="some-radios"
            value="B"
            @change="check()"
            >{{ question.B }}</b-form-radio
          >
          <b-form-radio
            v-model="answer[index]"
            name="some-radios"
            value="C"
            @change="check()"
            >{{ question.C }}</b-form-radio
          >
          <b-form-radio
            v-model="answer[index]"
            name="some-radios"
            value="D"
            @change="check()"
            >{{ question.D }}</b-form-radio
          >
        </b-form-group>
        {{ answer[index] }}
        <div class="btns row my-2">
          <button class="btn btn-primary" @click="currentIndex--">
            Previous
          </button>
          <button class="btn btn-primary" @click="next()">Next</button>
        </div>
      </div>
    </div>
    <is-finished-component v-else :score="totalScore" />
  </div>
</template>

<script>
import spinner from '../spinner.vue'
import IsFinishedComponent from './isFinishedComponent.vue'
export default {
  components: { spinner, IsFinishedComponent },
  props: ['questions'],
  data() {
    return {
      isFinished: false,
      isLoading: true,
      answer: [],
      currentIndex: 0,
      myQuestions: [],
      correct: 0,
      setIndex: 0,
      questionSet: [],
      totalScore: {
        persentageValue: null,
        correctAnswers: this.correctSet,
        incorrectSet: 0,
        correctSet: 0,
      },
    }
  },
  methods: {
    check() {
      console.log(this.answer)
      if (
        this.answer[this.currentIndex] ===
        this.myQuestions[this.currentIndex].answer
      ) {
        this.totalScore.correctSet++
      } else {
        console.log('wrong answer')
        this.totalScore.incorrectSet++
      }
    },
    next() {
      this.currentIndex++
      console.log('[NEXT][currentIndex]', this.currentIndex)
      if (this.currentIndex === this.myQuestions.length) {
        this.isFinished = true
        this.totalScore.persentageValue = Math.floor(
          (this.answer.length / this.myQuestions.length) * 100
        )
      }
    },
  },
  async created() {
    await this.questions.map(async (o) => {
      return await this.$axios
        .get(`quiz/quiz/${o.id}`)
        .then(({ data }) => {
          this.myQuestions.push(data)
        })
        .catch((err) => console.log(err))
    })
    this.isLoading = false
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
