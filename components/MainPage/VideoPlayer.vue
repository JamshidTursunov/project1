<template>
  <Media
    :kind="'video'"
    :isMuted="false"
    :src="['https://www.w3schools.com/html/mov_bbb.mp4']"
    :poster="'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'"
    :controls="true"
    :loop="true"
    :ref="'video_player'"
    width="300px"
    height="300px"
  ></Media>
</template>

<script>
import Media from '@dongido/vue-viaudio'

export default {
  components: {
    Media,
  },
}
</script>
