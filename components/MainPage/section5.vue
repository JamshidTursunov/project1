<template>
  <div class="container-fluid section-5">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-h1 my-4">Explore all our courses</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="i in 6" :key="i">
        <div class="cart grid hover:shadow-lg">
          <img
            src="~assets/images/ux-design.png"
            class="justify-self-center w-20 h-20 mb-4"
            alt="..."
          />
          <h2 class="text-h2 mb-2 md:text-center sm:text-center">
            Frontend web development
          </h2>
          <p class="text-paragraph text-justify">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley o scrambled it to
            make a type specimen book.
          </p>
        </div>
      </div>
    </div>
    <div class="row flex justify-end">
      <button class="btn btn-know-more px-4 py-2.5 flex items-center">
        Know More
        <b-icon
          icon="arrow-right"
          animation="cylon"
          font-scale="1"
          class="ml-3"
          variant="white"
        ></b-icon>
      </button>
    </div>
  </div>
</template>
