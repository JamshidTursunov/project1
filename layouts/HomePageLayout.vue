<template>
  <div>
    <div v-if="timerBool" class="grid justify-items-center w-full">
      <spinner class="mt-5" />
    </div>
    <div v-else>
      <app-navbar-1 />
      <Nuxt />
      <navbar-bottom />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      timerBool: false,
    }
  },
  // created() {
  //   setTimeout(() => {
  //     this.timerBool = false
  //   }, 200)
  // },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* page is used by default */
.page-leave-active,
.page-enter-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
