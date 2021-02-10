<template>
  <div class="coursesField">
    <div class="coursesField__buttons">
      <button @click="showSection">+</button>
    </div>
    <transition name="fade">
      <div v-if="sectionToggler" class="coursesField__section">
        <div v-if="sectionNameToggler">
          <div class="coursesField__data">
            <h3>Section 1: {{ sectionName }}</h3>
            <ul v-if="lectureNameToggler">
              <li>Lecture 1: {{ lectureName }}</li>
            </ul>
          </div>
          <div v-if="lectureToggler" class="coursesField__lecture">
            <form @submit.prevent="addLectureData">
              <div class="coursesField__form">
                <div class="coursesField__group">
                  <label for="lecture">New lecture:</label>
                  <input
                    autocomplete="off"
                    name="lecture"
                    type="text"
                    v-model="lectureName"
                    placeholder="Enter a Title"
                  />
                </div>
                <div class="coursesField__group">
                  <h3>Lecture content:</h3>
                  <input
                    @change="valChange"
                    class="coursesField__file"
                    name="file2"
                    id="file2"
                    type="file"
                  />
                  <label for="file2">
                    <span>{{ label }}</span
                    ><span>Upload file</span>
                  </label>
                </div>
              </div>
              <button class="save" type="submit">+Add lecture</button>
            </form>
          </div>
          <button @click="showLecture" class="lecture">+</button>
        </div>
        <div v-if="!sectionNameToggler">
          <form @submit.prevent="addSectionName">
            <div class="coursesField__group mb-3">
              <label for="title">New section</label>
              <input
                autocomplete="off"
                name="title"
                required
                v-model="sectionName"
                placeholder="Enter a Title"
                type="text"
              />
            </div>
            <button class="save" type="submit">+Add section</button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionToggler: false,
      lectureToggler: false,
      sectionNameToggler: false,
      lectureNameToggler: false,
      label: 'Video / File',
      count: '1',
      sectionName: '',
      lectureName: '',
    }
  },

  created() {},

  methods: {
    valChange(e) {
      this.label = e.target.files[0].name
    },

    showSection() {
      this.sectionToggler = true
    },

    showLecture() {
      this.lectureToggler = true
    },

    addSectionName() {
      this.sectionNameToggler = true
    },

    addLectureData() {
      this.lectureToggler = false
      this.lectureNameToggler = true
    },
  },
}
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
