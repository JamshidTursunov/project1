<template>
  <spinner v-if="isLoading" />
  <div v-else class="container-fluid quiz-page">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center my-2 heading">
          select subject you want to pass quiz
        </h1>
        <div class="cards">
          <b-card
            v-for="subject in subjects"
            :key="subject.id"
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Card image"
            img-top
          >
            <b-card-text>
              <p class="mb-2 course-title">{{ subject.title }}</p>
              <nuxt-link :to="`/quiz/subject/${subject.id}`"
                >start quiz now</nuxt-link
              >
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spinner from '~/components/spinner.vue'
export default {
  components: { spinner },
  name: 'subject',
  data() {
    return {
      isLoading: true,
      subjects: [
        {
          id: 1,
          title: 'Front-end developer',
        },
        {
          id: 2,
          title: 'Back end developer',
        },
        {
          id: 3,
          title: 'Design Artichector',
        },
      ],
    }
  },
  methods: {
    async fetchSubjects() {
      // await this.$axios
      //   .get('quiz/subject/')
      //   .then((res) => {
      //     this.subjects = res.data
      //     console.log('subjects', res)
      //   })
      //   .catch((err) => console.log(err))
    },
  },
  async created() {
    await this.fetchSubjects()

    this.isLoading = false
  },
}
</script>

<style scoped>
.heading {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 152%;
  text-align: center;
  color: #333366;
}
.quiz-page {
  min-height: 75vh;
  background: #f3f8ff;
}
.cards {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
}
.course-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 152%;
  color: #333366;
}
</style>
