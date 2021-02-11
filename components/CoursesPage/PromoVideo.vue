<template>
  <div class="video__container">
    <div class="video__wrapper">
      <div class="video__promo">
        <VideoPlayer :videoData="promoVideo" />
      </div>
      <div class="video__price">
        <nuxt-link class="video__button video__button1" to="/"
          >Add to cart</nuxt-link
        >
        <nuxt-link class="video__button video__button2" to="/payment/1"
          >Buy now</nuxt-link
        >
        <p>30-Day Money-Back Guarantee</p>
      </div>
      <div class="video__content">
        <h3>This course includes:</h3>
        <ul class="video__list">
          <li v-for="(description, i) in promoDescription" :key="i">
            {{ description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    promo: {
      type: [Object, Array],
    },
  },

  data() {
    return {}
  },

  computed: {
    promoVideo() {
      if (this.promo) {
        return this.promo[0]
      }
    },
    promoDescription() {
      if (this.promo) {
        if (this.$i18n.locale == 'en') {
          return this.promo[0].video_description_en.trim().split(',')
        } else if (this.$i18n.locale == 'ru') {
          return this.promo[0].video_description_ru.trim().split(',')
        } else {
          return this.promo[0].video_description_uz.trim().split(',')
        }
      }
    },
  },

  created() {},

  methods: {},
}
</script>

<style></style>
