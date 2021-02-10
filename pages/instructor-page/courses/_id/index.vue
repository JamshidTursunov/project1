<template>
  <transition name="fade">
    <div class="container-fluid coursesSingle">
      <div class="row">
        <div class="col-md-3 col-xs-3 col-sm-3 p-0">
          <Sidebar />
        </div>
        <div class="col-md-9 col-xs-9 col-sm-9 p-0">
          <CoursesField />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
