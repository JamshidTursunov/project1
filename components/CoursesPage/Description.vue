<template>
  <div class="description__container">
    <h1>Course modules:</h1>
    <ul class="description__list">
      <li v-for="(description, i) in descriptions" :key="i">
        {{ description.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},

  computed: {},

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
