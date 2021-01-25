<template>
  <div>
    <div v-if="timerBool" class="grid justify-items-center w-full">
      <spinner class="mt-5" />
    </div>
    <div v-else>
      <app-navbar-1 />
      <Nuxt />
      <app-footer />
    </div>
  </div>
</template>

<script>
import appFooter from '../components/appFooter.vue'
export default {
  components: { appFooter },
  data() {
    return {
      timerBool: true,
    }
  },
  created() {
    setTimeout(() => {
      this.timerBool = false
    }, 200)
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
