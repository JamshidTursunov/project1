<template>
  <div class="coursesField">
    <div class="coursesField__buttons">
      <button @click="showSection">+Add section</button>
      <button class="save">Save</button>
    </div>
    <div v-if="sectionToggler" class="coursesField__section">
      <div class="coursesField__group mb-4">
        <label for="title">New section {{ count }}:</label>
        <input
          autocomplete="off"
          name="title"
          placeholder="Enter a Title"
          type="text"
        />
      </div>
      <div v-if="lectureToggler" class="coursesField__lecture">
        <div class="coursesField__group">
          <label for="lecture">New lecture {{ count }}:</label>
          <input
            autocomplete="off"
            name="lecture"
            type="text"
            placeholder="Enter a Title"
          />
        </div>
        <div class="coursesField__group">
          <h3>Lecture content {{ count }}:</h3>
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
      <button @click="showLecture" class="lecture">+Add lecture</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionToggler: false,
      lectureToggler: false,
      label: 'Video / File',
      count: '1',
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
  },
}
</script>

<style></style>
