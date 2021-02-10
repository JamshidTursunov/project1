<template>
  <div class="container-fluid section-5">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-h1 my-4">Explore all our courses</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="course in courses" :key="course.id">
        <div class="cart grid hover:shadow-lg">
          <img
            src="~assets/images/ux-design.png"
            class="justify-self-center w-20 h-20 mb-4"
            alt="..."
          />
          <h2 class="text-h2 mb-2 md:text-center sm:text-center">
            <!-- {{ course.course_name_uz }} -->
            Lorem ipsum
          </h2>

          <p class="text-paragraph text-justify">
            <!-- {{ course.description }} -->
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem id
            incidunt expedita, illo tempora labore esse optio eos voluptatibus
            quisquam impedit veritatis quae pariatur accusantium, iste
            blanditiis, harum adipisci beatae!
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

<script>
export default {
  props: ['courses'],
  created() {
    console.log('my courses', this.courses)
  },
}
</script>
