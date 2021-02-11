<template>
  <div class="courses__container">
    <div class="courses__header">
      <h1>All Courses</h1>
      <button @click="addCourse">+New course</button>
    </div>
    <div
      v-if="modalToggle"
      @click.self="modalToggle = !modalToggle"
      class="courses__modal"
    >
      <form class="courses__form" @submit.prevent="createCourse">
        <span class="form__close" @click="modalToggle = !modalToggle"
          >&times;</span
        >
        <h1>
          It's ok if you can't think of a good title now. You can change it
          later.
        </h1>
        <div class="form__group">
          <label for="title">Title:</label>
          <input
            required
            autocomplete="off"
            v-model="courseData.title"
            placeholder="Title"
            name="title"
            type="text"
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
    <div
      v-if="deleteToggler"
      @click.self="deleteToggler = !deleteToggler"
      class="courses__modal"
    >
      <form class="courses__form" @submit.prevent="proveDeleteCourse">
        <span class="form__close" @click="deleteToggler = !deleteToggler"
          >&times;</span
        >
        <h1>Are you sure to delete this course?</h1>
        <button type="submit">Yes</button>
        <button @click="deleteToggler = !deleteToggler">No</button>
      </form>
    </div>
    <div
      v-for="(course, i) in createdCoursesArray"
      :key="i"
      :id="i"
      class="courses__edit"
    >
      <img src="~assets/images/laptop.png" alt="photo" />
      <div>
        <h2>{{ course.title }}</h2>
        <p>{{ course.description }}</p>
      </div>
      <div class="courses__edit__box">
        <nuxt-link
          class="courses__edit__link"
          :to="localePath(`/instructor-page/courses/${i}`)"
          >Edit</nuxt-link
        >
        <button @click="deleteCourse(i)" class="courses__edit__delete">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalToggle: false,
      deleteToggler: false,
      id: null,
      courseData: {
        title: '',
      },
    }
  },

  created() {},

  methods: {
    addCourse() {
      this.modalToggle = true
    },

    createCourse() {
      this.modalToggle = false
      this.$store.dispatch(
        'instructorsPage/initCreatedCourses',
        this.courseData
      )
      this.courseData = {
        title: '',
      }
    },

    deleteCourse(id) {
      this.id = id
      this.deleteToggler = true
    },

    proveDeleteCourse() {
      this.$store.dispatch('instructorsPage/initDeleteCourse', this.id)
      this.id = null
      this.deleteToggler = false
    },
  },

  computed: {
    createdCoursesArray() {
      return this.$store.getters['instructorsPage/getCreatedCourses']
    },
  },
}
</script>

<style></style>
