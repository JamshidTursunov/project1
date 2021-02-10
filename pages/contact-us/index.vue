<template>
  <div>
    <spinner v-if="isLoading" />
    <section v-else class="contact">
      <Contact />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    }
  },
  created() {
    this.isLoading = false
  },
}
</script>
