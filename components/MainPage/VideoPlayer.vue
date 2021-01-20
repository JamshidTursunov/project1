<template>
  <div class="example">
    <h3>Video will resume playing when you pause after two sec.</h3>
    <Media
      :kind="'video'"
      :isMuted="false"
      :src="['https://www.w3schools.com/html/mov_bbb.mp4']"
      :poster="'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'"
      :autoplay="true"
      :controls="true"
      :loop="true"
      @pause="handle"
      :ref="'video_player'"
      width="auto"
    ></Media>
  </div>
</template>

<script>
import Media from '@dongido/vue-viaudio'
import { setTimeout } from 'timers'

export default {
  components: {
    Media,
  },
  name: 'Example',
  methods: {
    handle() {
      console.log('Video paused!, playing in 2 sec...')

      //   setTimeout(() => {
      //     this.$refs.video_player.play()
      //   }, 2000)
    },
  },
}
</script>

<style scoped>
.example {
  text-align: center;
}
</style>
