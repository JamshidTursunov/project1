<template>
  <div
    class="container-fluid category-showcase pt-5"
    style="border: 2px solid red"
  >
    <div class="row">
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
}
</style>
