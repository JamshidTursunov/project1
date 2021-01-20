<template>
  <div>
    <div v-if="timerBool" class="grid justify-items-center w-full">
      <spinner class="mt-5" />
    </div>
    <div v-else>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
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
