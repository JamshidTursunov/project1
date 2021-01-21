<template>
  <div class="container-fluid section-7">
    <div class="row grid justify-center">
      <h1 class="text-h1 my-5">
        Our instuctors<br />
        team
      </h1>
    </div>
    <div class="row">
      <div class="col-md-1 flex">
        <h1 class="text-h1-rotate">GreatSoft</h1>
      </div>
      <div class="col-md-11">
        <vueperslides />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section-7',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Londrina+Shadow&display=swap');

/* font-family: 'Londrina Outline', cursive;
font-family: 'Londrina Shadow', cursive; */

.section-7 {
  height: 100vh; /* for temporary height */
}
.text-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 65px;
  text-align: center;
  color: #333366;
}
.text-h1-rotate {
  font-family: 'Londrina Outline', cursive;
  font-style: normal;
  color: #ccc;
  font-weight: 400;
  font-size: 100px;
  line-height: 136px;
  transform: rotate(-90deg);
}
</style>
