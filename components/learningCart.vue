<template>
  <div class="container-fluid">
    <div class="row wrap-row">
      <div class="col-md-6 h-100">
        <p class="content-p">School of business</p>
        <h1 class="content-h1">Front end Development</h1>
        <ul class="flex ul-list">
          <li class="mr-3" v-for="i in links" :key="i.id">
            <nuxt-link :to="i.urlLink">{{ i.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="col-md-2 h-10" style="border: 1px solid blue"></div>
      <div class="col-md-4 h-10" style="border: 1px solid green"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'learningCart',
  data() {
    return {
      links: [
        {
          id: 1,
          name: 'Discussion board',
          urlLink: '#',
        },
        {
          id: 2,
          name: 'My submission',
          urlLink: '#',
        },
        {
          id: 3,
          name: 'Contact',
          urlLink: '#',
        },
      ],
    }
  },
}
</script>

<style scoped>
.content-p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13.7148px;
  line-height: 19px;
  color: #121212;
  mix-blend-mode: normal;
  opacity: 0.5;
}
.content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 21.5519px;
  line-height: 29px;
  letter-spacing: -0.195926px;
  color: #121212;
}
.ul-list {
  margin-top: 2rem;
}
.ul-list a {
  text-decoration: none;
  color: #5d30db;
}
.wrap-row {
  padding: 1rem 0.5rem;
  border: 3px solid green;
}
</style>
