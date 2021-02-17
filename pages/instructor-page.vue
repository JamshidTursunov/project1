<template>
  <div class="instructorPage">
    <div class="instructorPage__nav">
      <h1>Instructor Board</h1>
      <ul class="instructorPage__list">
        <li class="instructorPage__item">
          <nuxt-link class="instructorPage__link" :to="localePath('/')"
            >Home</nuxt-link
          >
        </li>
        <li
          @click="activateCourses"
          class="instructorPage__item"
          :class="{ instructorPage__item__active: activeCourses }"
        >
          <nuxt-link
            class="instructorPage__link"
            :to="localePath('/instructor-page/courses')"
            >Courses</nuxt-link
          >
        </li>
        <li
          @click="activateCommunication"
          class="instructorPage__item"
          :class="{ instructorPage__item__active: activeCommunication }"
        >
          <nuxt-link
            class="instructorPage__link"
            :to="localePath('/instructor-page/communication')"
            >Communication</nuxt-link
          >
        </li>
        <li
          @click="activatePerformance"
          class="instructorPage__item"
          :class="{ instructorPage__item__active: activePerformance }"
        >
          <nuxt-link
            class="instructorPage__link"
            :to="localePath('/instructor-page/performance')"
            >Performance</nuxt-link
          >
        </li>
        <li
          @click="activateTools"
          class="instructorPage__item"
          :class="{ instructorPage__item__active: activeTools }"
        >
          <nuxt-link
            class="instructorPage__link"
            :to="localePath('/instructor-page/tools')"
            >Tools</nuxt-link
          >
        </li>
      </ul>
    </div>
    <NuxtChild />
  </div>
</template>

<script>
import { instructorPageRedirect } from '~/middleware'
export default {
  data() {
    return {
      activeCourses: true,
      activeCommunication: false,
      activePerformance: false,
      activeTools: false,
    }
  },
  methods: {
    activateCourses() {
      this.activeCourses = true
      this.activeCommunication = false
      this.activePerformance = false
      this.activeTools = false
    },
    activateCommunication() {
      this.activeCourses = false
      this.activeCommunication = true
      this.activePerformance = false
      this.activeTools = false
    },
    activatePerformance() {
      this.activeCourses = false
      this.activeCommunication = false
      this.activePerformance = true
      this.activeTools = false
    },
    activateTools() {
      this.activeCourses = false
      this.activeCommunication = false
      this.activePerformance = false
      this.activeTools = true
    },
  },
  middleware: [instructorPageRedirect],
  name: 'instructor-page',
  layout: 'userAccount',
}
</script>

<style></style>
