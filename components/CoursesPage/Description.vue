<template>
  <div class="description__container">
    <h1>Course modules:</h1>
    <ul class="description__list">
      <li v-for="(description, i) in courseRequirement" :key="i">
        {{ description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    courseData: {
      type: Object,
    },
  },

  computed: {
    courseRequirement() {
      return this.courseData.requirement_en.trim().split('+')
    },
  },

  data() {
    return {
      descriptions: [
        {
          content: 'Etiam laoreet gravida mi, nec accumsan dui malesuada a.',
          id: 1,
        },
        {
          content: 'Etiam laoreet gravida mi, nec accumsan dui ',
          id: 2,
        },
        {
          content: 'Etiam laoreet gravida mi, nec accumsan dui malesuada adui',
          id: 3,
        },
        {
          content: 'Gravida mi, nec accumsan dui malesuada a.',
          id: 4,
        },
        {
          content: 'Etiam laoreet gravida mi, nec accumsan dui malesuada a.',
          id: 5,
        },
      ],
    }
  },
}
</script>

<style></style>
