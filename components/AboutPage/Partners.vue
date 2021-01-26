<template>
  <div class="partners">
    <div class="container partners__column__margin">
      <h1 class="mb-4">Our partners</h1>
      <div class="row mb-5">
        <div
          class="col-lg-3 col-md-4 col-sm-6 col-6 partners__column__margin"
          v-for="partner in partnersNumber"
          :key="partner.id"
        >
          <div class="partners__box">
            <img
              :src="require(`~/assets/images/about/partner${partner.logo}.png`)"
              alt="logo"
              class="partners__img"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 flex justify-center">
          <nuxt-link to="/partner-application" class="partners__btn"
            >Become a partner</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partnersNumber: [
        { logo: '1', id: 1 },
        { logo: '2', id: 2 },
        { logo: '3', id: 3 },
        { logo: '4', id: 4 },
        { logo: '5', id: 5 },
        { logo: '6', id: 6 },
      ],
    }
  },
}
</script>

<style></style>
