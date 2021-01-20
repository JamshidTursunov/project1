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

<style scoped>
.pricing {
  padding: 5rem 8.125rem 13rem;
  background-color: #f3f8ff;
  background: url('~assets/images/pricing/pricing.png');
  background-size: contain;
  background-position: 0 0;
  background-repeat: no-repeat;
}
</style>
