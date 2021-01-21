<template>
  <div class="container-fluid section-3">
    <h1 class="header-title mb-10">
      First, we invented the best system for learning to code.<br />
      Seven years and 45 million learners later, we've perfected it.
    </h1>
    <div class="row py-3">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">1</div>
        </div>
      </div>
      <div class="col-md-4 justify-center items-center">
        <img class="object-contain" src="~assets/images/laptop.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">Choose what to learn</h1>
        <p class="text-paragraph">
          From building websites to analyzing data, the choice is yours. Not
          sure where to start? We'll point you in the right direction.
        </p>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">2</div>
        </div>
      </div>
      <div class="col-md-4 flex justify-center items-center">
        <img src="~assets/images/laptop.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">Choose what to learn</h1>
        <p class="text-paragraph">
          From building websites to analyzing data, the choice is yours. Not
          sure where to start? We'll point you in the right direction.
        </p>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">3</div>
        </div>
      </div>
      <div class="col-md-4 flex justify-center items-center">
        <img src="~assets/images/laptop.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">Choose what to learn</h1>
        <p class="text-paragraph">
          From building websites to analyzing data, the choice is yours. Not
          sure where to start? We'll point you in the right direction.
        </p>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">4</div>
        </div>
      </div>
      <div class="col-md-4 flex justify-center items-center">
        <img src="~assets/images/laptop.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">Choose what to learn</h1>
        <p class="text-paragraph">
          From building websites to analyzing data, the choice is yours. Not
          sure where to start? We'll point you in the right direction.
        </p>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">5</div>
        </div>
      </div>
      <div class="col-md-4 flex justify-center items-center">
        <img src="~assets/images/laptop.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">Choose what to learn</h1>
        <p class="text-paragraph">
          From building websites to analyzing data, the choice is yours. Not
          sure where to start? We'll point you in the right direction.
        </p>
      </div>
    </div>
    <div class="row py-3">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">6</div>
        </div>
      </div>
      <div class="col-md-4 flex justify-center items-center">
        <img src="~assets/images/laptop.png" alt="..." />
      </div>
      <div class="col-md-6 px-5">
        <h1 class="text-h1 text-left mb-2">Choose what to learn</h1>
        <p class="text-paragraph">
          From building websites to analyzing data, the choice is yours. Not
          sure where to start? We'll point you in the right direction.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'section-3',
}
</script>

<style scoped>
.section-3 {
  height: 100%;
  position: relative;
}
.section-3::after {
  position: absolute;
  content: '';
  top: 15%;
  left: -10%;
  width: 303px;
  height: 303px;
  background: rgba(100, 237, 191, 0.1);
  border-radius: 50%;
}
.section-3::before {
  position: absolute;
  content: '';
  top: 30%;
  right: -2%;
  width: 70px;
  height: 70px;
  border: 11px solid #ff9900;
  box-sizing: border-box;
  border-radius: 50%;
}
.header-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 152%;
  text-align: center;
  color: #333366;
  position: relative;
}
.header-title::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 25%;
  left: -5%;
  border: 7px solid #ff9900;
  box-sizing: border-box;
}
.text-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 152%;
  text-align: center;
  color: #333366;
}
.text-paragraph {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 127.5%;
  color: #333366;
}
.circle {
  background: #f3f8ff;
  box-shadow: inset -2px -2px 5px rgba(100, 106, 112, 0.15),
    inset 2px 2px 5px rgba(100, 106, 112, 0.15);
  border-radius: 50%;
  width: 103px;
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner-set {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border-radius: 50%;
  /* text font */
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 152%;
  text-align: center;
  color: #333366;
}
</style>
