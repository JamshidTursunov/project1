<template>
  <div class="isLoading">
    <b-spinner variant="warning"></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'spinner',
}
</script>

<style scoped>
.isLoading {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-top: 5rem;
}
</style>
