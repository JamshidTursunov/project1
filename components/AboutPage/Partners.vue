<template>
  <div class="partners">
    <div class="container column__margin">
      <h1 class="mb-4">Our partners</h1>
      <div class="row">
        <div
          class="col-lg-3 col-md-4 column__margin"
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

<style scoped>
.partners {
  padding: 4rem 6rem 10rem;
}

.partners h1 {
  font-family: 'Open Sans', sans-serif;
  font-size: 4.5rem;
  color: #5d30db;
  font-weight: 700;
  margin-left: 2.5rem;
}

.column__margin {
  padding: 0;
  margin: 0;
}

.partners__box {
  margin: 2rem 3rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.partners__img {
  height: 100%;
}
</style>
