<template>
  <div>
    <app-navbar-1 />
    <Nuxt />
    <navbar-bottom />
  </div>
</template>

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
