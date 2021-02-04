<template>
  <div>
    <Nuxt />
    <scroll-up />
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
.page-leave-active,
.page-enter-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
