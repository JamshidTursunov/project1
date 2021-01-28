<template>
  <div class="container-fluid showcase my-learning">
    <div class="row app-header">
      <div class="col-md-10 offset-md-1 flex flex-wrap content-end">
        <h1 class="content-h1">My learning</h1>
        <div class="flex w-full my-8 flex-wrap nav-content">
          <nav style="flex: 1" class="flex items-center">
            <ul class="flex">
              <li
                v-for="link in toggleLinks"
                :key="link.id"
                :class="{ 'is-active': link.id === selectedLink }"
                @click="selectLink(link.id)"
                class="ul-item mr-6 pb-2 hover:bg-red"
              >
                <nuxt-link :to="link.toUrl">{{ link.name }}</nuxt-link>
              </li>
            </ul>
          </nav>
          <div style="flex: 2">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style="background: transparent; color: white"
              />
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <NuxtChild />
    </div>
  </div>
</template>

<script>
export default {
  name: 'myLearning',
  layout: 'userAccount',
  middleware: 'routeRedirect',
  data() {
    return {
      selectedLink: null,
      toggleLinks: [
        {
          id: 1,
          name: 'Category',
          toUrl: '/useraccount/mylearning/category',
        },
        {
          id: 2,
          name: 'Progress',
          toUrl: '/useraccount/mylearning/progress',
        },
        {
          id: 3,
          name: 'Instructor',
          toUrl: '/useraccount/mylearning/instructor',
        },
      ],
    }
  },
  created() {
    this.selectedLink = this.toggleLinks[0].id
  },
  methods: {
    selectLink(id) {
      this.selectedLink = id
    },
  },
}
</script>

<style scoped>
.is-active {
  border-bottom: 3px solid white;
}
.showcase {
  height: 100vh;
}
.app-header {
  min-height: 186px;
  background: #333366;
}
.content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 35px;
  color: #ffffff;
}
.toggle-link {
  padding: 0;
}
.ul-item {
  color: white;
}
.ul-item a {
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}
.ul-item:hover a {
  color: #fff;
}
</style>
