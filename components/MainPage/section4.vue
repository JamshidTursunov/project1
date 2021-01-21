<template>
  <div class="container-fluid section-4">
    <div class="row">
      <div class="col-md-4 py-12">
        <h2 class="text-h2">
          Not sure how<br />
          and where to
        </h2>
        <h1 class="text-h1 my-2">begin?</h1>
        <p class="text-paragraph my-4">
          No need to worry, we’ll help you<br />
          make sense of it all.
        </p>
        <button class="btn-quiz px-2">Take Our 5 minute Quiz</button>
      </div>
      <div class="col-md-8 row">
        <div class="col-md-12 text-start text-white mt-5">
          25 tests are reaydy to<br />
          check your skills
        </div>

        <div class="col-md-12 flex items-end">
          <img
            src="~assets/images/vector.png"
            alt="..."
            class="google-image mt-16 flex-shrink"
          />
          <div class="progress-google flex flex-grow items-end">
            <div class="flex-grow"></div>
            <div class="flex-grow"></div>
            <div class="flex-grow"></div>
            <div class="flex-grow"></div>
            <div class="flex-grow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section-4',
}
</script>

<style scoped>
.progress-google {
  background: transparent;
  width: 100%;
  height: 100%;
  position: relative;
}

.progress-google > div:nth-child(1) {
  width: 140px;
  height: 48px;
  background: #333366;
}
.progress-google div:nth-child(2) {
  width: 109px;
  height: 94px;
  background: #33337b;
}
.progress-google div:nth-child(3) {
  width: 109px;
  height: 138px;
  background: #383897;
}
.progress-google div:nth-child(4) {
  width: 109px;
  height: 176px;
  background: #292996;
}
.progress-google div:nth-child(5) {
  width: 103px;
  height: 230px;
  background: #202084;
}
.section-4 {
  background: #5d30db;
}
.row .col-md-4 {
  color: #fff;
}
.text-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 122.5%;
  color: #ffc700;
}
.text-h2 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 122.5%;
  color: #ffffff;
}
.text-paragraph {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 122.5%;
  color: #ffffff;
}
.btn-quiz {
  background: #ff9900;
  border-radius: 3px;
  height: 45px;
  color: white;
  outline: none;
}
.btn-quiz:hover {
  color: #ff9900;
  background: #fff;
  transition: all 0.2s linear;
  transform: translateY(-3px);
}
.btn-quiz:active {
  color: red;
  transform: translateY(0px);
}
.google-image {
  width: 204px;
  height: 214px;
}
</style>
