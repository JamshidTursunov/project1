<template>
  <div class="introduction__container">
    <div class="container">
      <h3 class="introduction__h3">Web Development > Frontend > Vue.js</h3>
      <div class="row d-lg-none d-md-block">
        <div class="col-lg-12">
          <div class="introduction__responsive__promo">
            <VideoPlayer />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="introduction__content">
            <h1>Hands-on courses</h1>
            <p>
              Follow short videos led by expert instructors and then practice
              what you’ve learned with interactive exercises in your browser.
            </p>
            <p>Created by Jakhongir Tursunaliev</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6" v-for="info in introductionInfos" :key="info.id">
          <div class="introduction__info">
            <i
              :class="info.icon"
              class="introduction__icons introduction__iconss"
            />
            {{ info.text }}
          </div>
        </div>
        <div class="col-lg-6">
          <div class="introduction__button">
            <nuxt-link to="/" class="introduction__link introduction__link1">
              <i class="fas fa-play introduction__iconss" /> Start learning
              now</nuxt-link
            >
          </div>
        </div>
        <div class="col-lg-6">
          <div class="introduction__button">
            <nuxt-link to="/" class="introduction__link introduction__link2">
              <i class="fas fa-share-alt introduction__iconss" /> Share
              with</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <button @click="sendCourseData">Click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      introductionInfos: [
        { text: 'Learn at your own pace', icon: 'far fa-clock', id: 1 },
        { text: 'Get hands-on experience', icon: 'fas fa-code', id: 2 },
        {
          text: 'Complete bite-sized chapters',
          icon: 'far fa-file-alt',
          id: 3,
        },
        { text: 'Learn at your own', icon: 'far fa-clock', id: 4 },
      ],
    }
  },

  created() {},

  methods: {
    getData() {
      console.log(this.$store.state.course.list)
      // this.$store.commit('course/smth', e.target.value)
    },
    async sendCourseData() {
      try {
        await this.$axios
          .post('course/', {
            id: 1,
            yonalish: 'front-end',
            course_name_uz: 'front-end',
            course_name_ru: 'front-end',
            course_name_en: 'front-end',
            descriotion_uz: 'front-end',
            descriotion_ru: 'front-end',
            descriotion_en: 'front-end',
            requirement_uz: 'front-end',
            requirement_ru: 'front-end',
            requirement_en: 'front-end',
            instructor: 'Jahongir Tursunaliev',
          })
          .then((res) => {
            console.log(res.data)
          })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
