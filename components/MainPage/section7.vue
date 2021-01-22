<template>
  <div class="container-fluid section-7">
    <div class="row grid justify-center">
      <h1 class="text-h1 my-5">
        Our instuctors<br />
        team
      </h1>
    </div>
    <div class="row">
      <div :class="{ resMiddle: resMiddle }" class="col-md-1 flex">
        <h1 class="text-h1-rotate">GreatSoft</h1>
      </div>
      <div class="col-md-10 offset-md-1">
        <vueperslides />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resMiddle: false,
      window: {
        width: 0,
        height: 0,
      },
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      console.log('window width', this.window.width)
      if (this.window.width < 1296) {
        this.resMiddle = true
      }
      if (this.window.width < 1122) {
      }
    },
  },
}
</script>

<style scoped>
.resMiddle {
  display: none;
}
</style>
