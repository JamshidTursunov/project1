<template>
  <div class="container-fluid section-2">
    <div class="row flex justify-end">
      <h1 class="text-h1 my-8">
        Only at GreatSoft:<span class="text-h1-span"> Job-Ready Skills</span>
      </h1>
    </div>
    <div class="row">
      <div
        class="col-md-6 h-40 flex justify-center"
        style="border: 1px solid red"
      >
        <h1 class="flex justify-center text-center align-self-center">
          Place for video
        </h1>
        <video-player />
      </div>
      <div class="col-md-6 mb-20 row px-10">
        <table-2 />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.s VideoPlayerection-2 {
  position: relative;
  overflow: hidden;
}
.section-2::after {
  position: absolute;
  content: '';
  width: 70px;
  height: 70px;
  bottom: -5%;
  right: 2%;
  border-radius: 50%;
  background: #64edbf;
}
.text-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 27.7895px;
  line-height: 38px;

  color: #ff9900;
}
.text-h1-span {
  font-size: 29.7895px;
  font-weight: 700;
  color: #333366;
}
</style>
