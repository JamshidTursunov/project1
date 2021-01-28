<template>
  <div class="container-fluid section-7">
    <div class="row grid justify-center">
      <h1 class="text-h1 my-5">
        Our instuctors<br />
        team
      </h1>
    </div>
    <div class="row">
      <div class="col-md-1 flex greatsoft-typography">
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
      window: {
        width: 0,
        height: 0,
      },
    }
  },
}
</script>

<style scoped>
@media only screen and (max-width: 700px) {
  .greatsoft-typography {
    display: none;
  }
}
</style>
