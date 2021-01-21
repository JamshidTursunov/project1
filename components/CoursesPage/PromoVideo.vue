<template>
  <div class="video__container">
    <div class="video__wrapper">
      <div class="video__promo"></div>
      <div class="video__price">
        <h1>$19.99</h1>
        <nuxt-link class="video__button video__button1" to="/"
          >Add to cart</nuxt-link
        >
        <nuxt-link class="video__button video__button2" to="/"
          >Buy now</nuxt-link
        >
        <p>30-Day Money-Back Guarantee</p>
      </div>
      <div class="video__content">
        <h3>This course includes:</h3>
        <ul class="video__list">
          <li v-for="content in contents" :key="content.id">
            {{ content.item }}
          </li>
        </ul>
        <p>
          Latin words, combined with a handful of model sentence structures, to
          generate Lorem Ipsum which looks reasonable.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        { item: '2 hours on-demand video', id: 1 },
        { item: '1 article', id: 2 },
        { item: '21 downloadable resources', id: 3 },
        { item: 'Full lifetime access', id: 4 },
        { item: 'Access on mobile and TV', id: 5 },
        { item: 'Certificate of completion', id: 6 },
      ],
    }
  },
}
</script>

<style></style>
