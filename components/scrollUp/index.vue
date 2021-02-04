<template>
  <a @click="scrollTop" v-show="visible" class="up-btn">
    <fa size="2x" :icon="['fas', 'angle-up']" />
  </a>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150
    },
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  },
}
</script>

<style scoped>
.up-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: orange;
  cursor: pointer;
  border-radius: 50%;
  background-color: white;
  padding: 0.4rem 0.8rem;
  z-index: 9999;
  border: 1px solid #ccc;
}
</style>
