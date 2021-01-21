<template>
  <section class="courses">
    <div class="container">
      <h3 class="courses__h3">Web Development > Frontend > Vue.js</h3>
      <div class="row">
        <div
          class="col-lg-6 courses__column__margin d-flex align-items-stretch"
        >
          <div class="courses__box">
            <Introduction />
            <Description />
          </div>
        </div>
        <div class="col-lg-6 column__margin">
          <div class="courses__box">
            <PromoVideo />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Introduction from '~/components/CoursesPage/Introduction.vue'
import Description from '~/components/CoursesPage/Description.vue'
import PromoVideo from '~/components/CoursesPage/PromoVideo.vue'
export default {
  components: {
    Introduction,
    Description,
    PromoVideo,
  },
}
</script>

<style></style>
