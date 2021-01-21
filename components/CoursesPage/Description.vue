<template>
  <div class="description__container">
    <h1>Course modules:</h1>
    <ul class="description__list">
      <li v-for="description in descriptions" :key="description.id">
        {{ description.content }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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

<style scoped>
.description__container {
  padding: 3rem 1rem 2rem;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
}

h1 {
  font-weight: 600;
  font-size: 42px;
  color: #333366;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
}

ul li {
  font-size: 18px;
  margin-bottom: 0.3rem;
}

ul li::before {
  content: '\2022'; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #ff9900; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block;
  /* Needed to add space between the bullet and the text */
  width: 3em; /* Also needed for space (tweak if needed) */
  margin-right: -2em; /* Also needed for space (tweak if needed) */
}
</style>
