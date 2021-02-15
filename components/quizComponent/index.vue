<template>
  <spinner v-if="isLoading" />
  <div v-else class="container-fluid">
    <div class="row">
      <div
        class="col-md-6 offset-md-3 wrapper"
        v-for="(question, index) in myQuestions"
        :key="index"
        v-show="index === currentIndex"
      >
        <h1 class="question-text">{{ question.question }}</h1>
        <b-form-group>
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
        <div class="btns row my-2">
          <button
            class="btn btn-primary"
            @click="currentIndex--"
            :disabled="currentIndex === 0"
          >
            Previous
          </button>
          <button
            class="btn btn-primary"
            @click="next"
            v-if="currentIndex != myQuestions.length - 1"
          >
            Next
          </button>

          <button v-else @click="finishAll" class="btn btn-primary">Finish all quiz answers</button>
        </div>
      </div>
    </div>
    <quiz-modal />
  </div>
</template>

<script>
import spinner from '../spinner.vue'
import QuizModal from './quizModal.vue'
export default {
  components: { spinner, QuizModal },
  props: ['questions'],
  data() {
    return {
      isFinished: false,
      isLoading: true,
      answer: [],
      currentIndex: 0,
      myQuestions: [],
      correctSet: [],
      totalScore: {
        persentageValue: null,
        incorrectSet: 0,
      },
    }
  },
  methods: {
    reset() {
      this.currentIndex = 0
      this.isFinished = false
    },
    check() {
      if (
        this.answer[this.currentIndex] ===
        this.myQuestions[this.currentIndex].answer
      ) {
        this.correctSet[this.currentIndex] = 1
      } else {
        this.correctSet[this.currentIndex] = 0
      }
      setTimeout(()=>{
         if(this.currentIndex === this.myQuestions.length-1){ return }
         this.next()
      },900)
      var correctIndex = null
      this.correctSet.forEach((o) => {
        if (o === 1) {
          correctIndex++
        }
      })
      this.$store.commit('quizModule/setCorrectIndex', correctIndex)
    },
    finishAll() {
      const totalCorrect = this.$store.getters['quizModule/getCorrectIndex']
      this.totalScore.persentageValue = Math.floor(
        (totalCorrect / this.myQuestions.length) * 100
      )
      this.$store.commit(
        'quizModule/setPersentage',
        this.totalScore.persentageValue
      )

      console.log('finish button')
      this.$nextTick(() => {
        this.$bvModal.show('modal-quiz')
      })
      // await this.$router.push('/')
    },
    next() {
      this.currentIndex++
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
