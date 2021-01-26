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
        <img
          src="~assets/images/greatsoft.png"
          alt="greatsoft"
          style="height: 70%; width: 75%; margin-top: 0"
        />
      </div>
      <div class="col-md-10">
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
    if (process.client) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('resize', this.handleResize)
    }
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
