<template>
  <div class="communication">
    <OnGoingPage />
  </div>
</template>

<script>
import OnGoingPage from '~/components/OnGoingPage.vue'
export default {
  components: { OnGoingPage },
  data() {
    return {}
  },
  methods: {
    callback(key) {
      console.log(key)
    },
  },
}
</script>

<style scoped>
.communication {
  height: 50rem;
}
</style>
