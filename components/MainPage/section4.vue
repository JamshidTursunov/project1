<template>
  <div class="container-fluid section-4">
    <div class="row">
      <div class="col-md-4 col-sm-12 py-12">
        <h2 class="text-h2">
          {{ $t('section4.Header') }}
          <br />
          {{ $t('section4.SubHeader') }}
        </h2>
        <h1 class="text-h1 my-2">{{ $t('section4.Title') }}</h1>
        <p class="text-paragraph my-4">
          {{ $t('section4.Paragraph') }}<br />
          {{ $t('section4.SubParagraph') }}
        </p>
        <button class="btn-quiz px-2" @click="$router.push('/quiz/subject/')">
          {{ $t('section4.Btn') }}
        </button>
      </div>
      <div class="col-md-8 col-sm-12 row m-0">
        <div class="col-md-12 text-start text-white mt-5">
          <p v-if="!quizPercentage">
            {{ $t('section4.Result1') }}<br />
            {{ $t('section4.SubResul1') }}
          </p>
          <p v-else>
            {{ $t('section4.Resul2') }} <br />
            {{ $t('section4.SubResul2') }}
            <span class="special-word">{{ quizPercentage }}%</span>
          </p>
        </div>

        <div class="col-md-12 flex items-end">
          <div class="google-image-wrap mt-16 flex-shrink">
            <span :class="{'activeImage':quizPercentage === null}"></span>
          </div>
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
    determineLevel() {
      if(this.quizPercentage === null){
        console.log('quizPercentage is null',this.quizPercentage)
        return 
      }else if(this.quizPercentage >=0 && this.quizPercentage <=20){
        this.isActive = 1
      }else if (payload > 20 && payload <= 40) {
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
    this.determineLevel()
  },
}
</script>

<style scoped>
.special-word {
  color: orange;
}
</style>
