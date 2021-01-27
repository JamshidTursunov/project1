<template>
  <video
    class="video-js my-video"
    data-setup="{}"
    controls
    :poster="postImage"
    style="height: 350px; border: none"
  >
    <source src="~assets/video/dog.mp4" type="video/mp4" />
  </video>
</template>

<script>
export default {
  data() {
    return {
      postImage: require('~/assets/images/videoImage.jpg'),
    }
  },
}
</script>

<style scoped>
*:focus {
  outline: none;
}
.my-video {
  position: relative !important;
}
</style>
