<template>
  <div>
    <app-navbar-1 />
    <Nuxt />
    <app-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
