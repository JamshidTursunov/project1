<template>
  <div class="container-fluid section-3">
    <h1 class="header-title mb-10">
      First, we invented the best system for learning to code.<br />
      Seven years and 45 million learners later, we've perfected it.
    </h1>
    <div class="row py-4" v-for="i in 4" :key="i">
      <div class="col-md-2 flex justify-center items-center">
        <div class="circle">
          <div class="inner-set">{{ i }}</div>
        </div>
      </div>
      <div class="col-md-4 my-6 flex justify-center items-center">
        <img class="image" src="~assets/images/iMac.png" alt="..." />
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

<style scoped></style>
