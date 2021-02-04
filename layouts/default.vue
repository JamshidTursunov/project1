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

/* slide-left */
.slide-left-leave-active {
  transition: all 0.1s;
}
.slide-left-enter-active {
  transition: all 1s;
}
.slide-left-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-enter-to,
.slide-left-leave {
  opacity: 1;
  transform: translate(0, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(0, 0);
}

/* swipe-right */
.swipe-right-leave-active {
  transition: all 0.01s;
}
.swipe-right-enter-active {
  transition: all 0.3s;
}
.swipe-right-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
.swipe-right-enter-to,
.swipe-right-leave {
  opacity: 1;
  transform: translate(0, 0);
}
.swipe-right-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}

/* jump */
.jump-leave-active,
.jump-enter-active {
  transition: all 0.6s;
}
.jump-enter {
  opacity: 0;
  transform: rotate(-12deg);
}
.jump-enter-to,
.jump-leave {
  opacity: 1;
  transform: rotate(0deg);
}
.jump-leave-to {
  opacity: 0;
  transform: rotate(12deg);
}

.fade-enter-active {
  transition: all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.fade-enter {
  opacity: 0;
  margin-left: 90px;
}
.fade-leave-active {
  transition: all 0.01s cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: 0;
  margin-left: -100px;
}

.slide-right-leave-active {
  transition: all 0.01s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.slide-right-enter-active {
  transition: all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
.slide-right-enter-to,
.slide-right-leave {
  opacity: 1;
  transform: translate(0, 0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}
</style>
