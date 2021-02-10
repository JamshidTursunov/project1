<template>
  <div class="instructorPage">
    <div class="instructorPage__nav">
      <h1>Instructor Board</h1>
      <ul class="instructorPage__list">
        <li class="instructorPage__item">
          <nuxt-link class="instructorPage__link" to="/">Home</nuxt-link>
        </li>
        <li class="instructorPage__item">
          <nuxt-link class="instructorPage__link" to="/instructor-page/courses"
            >Courses</nuxt-link
          >
        </li>
        <li class="instructorPage__item">
          <nuxt-link
            class="instructorPage__link"
            to="/instructor-page/communication"
            >Communication</nuxt-link
          >
        </li>
        <li class="instructorPage__item">
          <nuxt-link
            class="instructorPage__link"
            to="/instructor-page/performance"
            >Performance</nuxt-link
          >
        </li>
        <li class="instructorPage__item">
          <nuxt-link class="instructorPage__link" to="/instructor-page/tools"
            >Tools</nuxt-link
          >
        </li>
      </ul>
    </div>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'instructor-page',
  layout: 'userAccount',
}
</script>

<style></style>
