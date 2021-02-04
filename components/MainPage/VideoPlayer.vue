<template>
  <div>
    <video
      class="video-js my-video"
      data-setup="{}"
      controls
      :poster="postImage"
      style="height: 350px; border: none"
      :src="videoSrc"
    ></video>
  </div>
</template>

<script>
export default {
  props: {
    videoData: {
      type: Object,
    },
  },
  data() {
    return {
      postImage: require('~/assets/images/videoImage.jpg'),
      videoSrc: '',
    }
  },
  created() {
    this.changeVideo()
  },

  methods: {
    changeVideo() {
      if (this.videoData) {
        this.videoSrc = this.videoData.video
      }
    },
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
