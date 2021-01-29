<template>
  <section class="pricing">
    <Pricing />
  </section>
</template>

<script>
import Pricing from '~/components/Pricing/Pricing.vue'
export default {
  components: {
    Pricing,
  },
}
</script>

<style lang="scss" scoped>
.pricing {
  padding: 5rem 8.125rem;
  background-color: #f3f8ff;
  background: url('~assets/images/pricing/pricing.png');
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
  @media only screen and (max-width: 75em) {
    padding: 5rem 2rem;
  }
  @media only screen and (max-width: 62em) {
    padding: 5rem 11rem;
  }
  @media only screen and (max-width: 46.25em) {
    padding: 5rem 7rem;
  }
  @media only screen and (max-width: 37.5em) {
    padding: 5rem 1rem;
  }
  @media only screen and (max-width: 25em) {
    padding: 5rem 1rem;
  }
}
</style>
