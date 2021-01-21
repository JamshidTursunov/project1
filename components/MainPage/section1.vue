<template>
  <div class="container-fluid all-wrapper">
    <div class="row">
      <div class="col-md-6 flex flex-column">
        <h1 class="text-h1 space-around my-14">
          Boost your skills and <br />Build your future
        </h1>
        <div class="flex justify-start">
          <div class="content">
            <h4 class="content-title">GreatSoft Academy-</h4>
            <p class="content-context">
              bu sening orzularing sari eng to‘g‘ri tanlov
            </p>
          </div>
          <img
            src="~assets/images/new.png"
            alt="man"
            class="align-self-center man-image"
          />
        </div>
      </div>
      <div class="col-md-6">
        <form-1 style="z-index: 9999" />
      </div>
    </div>
    <div class="row flex justify-center mt-8">
      <div class="col-md flex items-center justify-center">
        <img src="~assets/images/python.png" alt="...." class="w-20 h-20" />
        <h1>PYTHON</h1>
      </div>
      <div class="col-md flex items-center justify-center">
        <img src="~assets/images/python1.png" alt="...." class="w-20 h-20" />
        <h1>Django</h1>
      </div>
      <div class="col-md flex items-center justify-center">
        <img src="~assets/images/python.png" alt="...." class="w-20 h-20" />
        <h1>PYTHON</h1>
      </div>
      <div class="col-md flex items-center justify-center">
        <img src="~assets/images/python1.png" alt="...." class="w-20 h-20" />
        <h1>Django</h1>
      </div>
      <div class="col-md flex items-center justify-center">
        <img src="~assets/images/python.png" alt="...." class="w-20 h-20" />
        <h1>PYTHON</h1>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.all-wrapper {
  position: relative;
}
.all-wrapper::after {
  position: absolute;
  content: '';
  top: -10%;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('~assets/images/shape.png');
  background-repeat: no-repeat;
}
.all-wrapper::before {
  position: absolute;
  content: '';
  top: -8%;
  right: 0%;
  width: 13%;
  height: 30%;
  background: url('~assets/images/shape1.png');
  background-repeat: no-repeat;
}
.text-h1 {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 100%;
  color: #333366;
}
.man-image {
  z-index: 10;
  transform: translate(-8%, -10%);
}
.content {
  position: relative;
  z-index: 10;
  margin-top: 6%;
  margin-left: 4%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
}
.content::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 304px;
  height: 261px;
  background: #ff9900;
  border-radius: 4px 80px 4px 25px;
  z-index: -1;
}
.content::before {
  content: '';
  position: absolute;
  top: 4%;
  left: -6%;
  width: 304px;
  height: 261px;
  background: transparent;
  border: 3px solid #333366;
  border-radius: 4px 80px 4px 25px;
  z-index: -1;
}
.content-title {
  font-family: Oswald;
  font-style: normal;
  font-weight: bold;
  font-size: 43.7296px;
  line-height: 104.5%;
  color: #ffffff;
  margin-bottom: 1rem;
}
.content-context {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 107.5%;
  color: #333366;
}
</style>
