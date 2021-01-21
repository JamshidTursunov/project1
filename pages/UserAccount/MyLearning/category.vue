<template>
  <div class="container-fluid category-showcase pt-4">
    <div class="row my-3" v-for="i in 3" :key="i">
      <div class="col-md-10 offset-md-1">
        <learning-cart />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'category',
}
</script>

<style scoped>
.category-showcase {
  background: #f3f8ff;
  min-height: 75vh;
}
</style>
