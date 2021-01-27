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

<style lang="scss" scoped>
.courses {
  background-image: linear-gradient(
    to bottom,
    rgba(243, 248, 255, 1) 0,
    rgba(243, 248, 255, 1) 58%,
    rgba(255, 255, 255, 1) 32%
  );
  padding: 3.5rem 8.2rem 10rem;

  &__column__margin {
    padding: 0;
    margin: 0;
  }

  &__h3 {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: #5d30db;
    margin-bottom: 1.5rem;
  }
}
</style>
