<template>
  <div>
    <spinner v-if="isLoading" />
    <section v-else class="about">
      <Promo />
      <Instructors />
      <Partners />
    </section>
  </div>
</template>

<script>
import Promo from '~/components/AboutPage/Promo'
import Instructors from '~/components/AboutPage/Instructors'
import Partners from '~/components/AboutPage/Partners'
export default {
  components: {
    Partners,
    Promo,
    Instructors,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  created() {
    this.isLoading = false
  },
}
</script>

<style lang="scss" scoped>
.about {
  background-color: #f3f8ff;
}
</style>
