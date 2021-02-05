<template>
  <div class="container-fluid section-4">
    <div class="row">
      <div class="col-md-4 col-sm-12 py-12">
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
      <div class="col-md-8 col-sm-12 row m-0">
        <div class="col-md-12 text-start text-white mt-5">
          25 tests are ready to<br />
          check your skills
        </div>

        <div class="col-md-12 flex items-end">
          <img
            src="~assets/images/vector.png"
            alt="..."
            class="google-image mt-16 flex-shrink"
          />
          <div class="progress-google flex flex-grow flex-shrink items-end">
            <div
              class="flex-grow"
              :class="{ 'is-active': i === isActive }"
              v-for="i in 5"
              :key="i"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 3,
    }
  },
}
</script>
