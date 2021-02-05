<template>
  <div class="container-fluid section-7">
    <div class="row grid justify-center">
      <h1 class="text-h1 my-5">
        Our instuctors<br />
        team
      </h1>
    </div>
    <div class="row">
      <div class="col-md-1 flex greatsoft-typography">
        <img src="~assets/images/greatsoft.png" alt="greatsoft" />
      </div>
      <div class="col-md-10">
        <vueperslides :mentors="mentors" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      mentors: 'mentorModule/getMentors',
    }),
  },
  async created() {
    await this.$store.dispatch('mentorModule/getMentors')
  },
}
</script>
