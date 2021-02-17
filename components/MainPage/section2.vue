<template>
  <div class="container-fluid section-2-wrapper">
    <div class="row flex justify-end context">
      <h1 class="text-h1 my-8 mx-4">
        {{ $t('section2.Title')
        }}<span class="text-h1-span"> {{ $t('section2.SubTitle') }}</span>
      </h1>
    </div>
    <div class="row row-wrapper">
      <div
        class="col-md-6 col-sm-12 flex justify-center items-center mb-6 video-container"
      >
        <div class="video-wrapper">
          <video-player class="video-player" />
        </div>
      </div>
      <div class="col-md-6 col-sm-12 table mb-20 row">
        <table-2 />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {},
}
</script>
