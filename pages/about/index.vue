<template>
  <section class="about">
    <Promo />
    <Instructors />
    <Partners />
  </section>
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
}
</script>

<style></style>
