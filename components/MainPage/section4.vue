<template>
  <div class="container-fluid section-4" >
    <div class="row">
      <div class="col-md-4 col-sm-12 py-12">
        <h2 class="text-h2">
          Not sure how<br />
          and where to
        </h2>
        <h1 class="text-h1 my-2">begin?</h1>
        <p class="text-paragraph my-4">
          No need to worry, we’ll help you<br />
          make sense of it all.
        </p>
        <button class="btn-quiz px-2" @click="$router.push('/quiz/subject/')">
          Take Our 5 minute Quiz
        </button>
      </div>
      <div class="col-md-8 col-sm-12 row m-0">
        <div class="col-md-12 text-start text-white mt-5">
          <p v-if="!quizPercentage">
            25 tests are ready to<br />
            check your skills
          </p>
          <p v-else>
            Test results are ready: <br />
            Your status is: <span class="special-word">{{ quizPercentage }}%</span>
          </p>
        </div>

        <div class="col-md-12 flex items-end">
          <img
            src="~assets/images/vector.png"
            alt="..."
            class="google-image mt-16 flex-shrink "
          />
          <div class="progress-google flex flex-grow flex-shrink items-end">
            <div
              class="flex-grow"
              :class="{ 'is-active': i === isActive }"
              v-for="i in 5"
              :key="i"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
    }
  },
  computed: {
    quizPercentage() {
      return localStorage.getItem('Percentage')
    },
  },
  methods: {
    determineLevel(payload) {
      if (payload > -1 && payload <= 20) {
        this.isActive = 1
      } else if (payload > 20 && payload <= 40) {
        this.isActive = 2
      } else if (payload > 40 && payload <= 60) {
        this.isActive = 3
      } else if (payload > 60 && payload <= 80) {
        this.isActive = 4
      } else if (payload > 80) {
        this.isActive = 5
      }
    },
  },
  created() {
    this.determineLevel(this.quizPercentage)
  },
}
</script>

<style scoped>
.special-word {
  color: orange;
}
</style>
