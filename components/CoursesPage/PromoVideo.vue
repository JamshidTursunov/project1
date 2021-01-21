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

<style scoped>
.video__container {
  display: flex;
  justify-content: flex-end;
}

.video__wrapper {
  max-width: 24rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.video__promo {
  width: 100%;
  height: 12.5rem;
  background-image: url('~assets/images/courses/promo.png');
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 1rem;
}

.video__price {
  padding: 1.6rem 1.6rem 0.3rem 1.6rem;
  font-style: normal;
}

.video__price h1 {
  font-weight: 600;
  font-size: 42px;
  color: #333366;
  margin-bottom: 1.8rem;
}

.video__price p {
  text-align: center;
  color: #333366;
}

.video__content {
  padding: 1.6rem;
}

.video__button,
.video__button:link,
.video__button:visited {
  text-decoration: none;
  width: 100%;
  padding: 1rem;
  display: block;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1rem;
  box-shadow: 0px 16px 24px rgba(255, 153, 0, 0.1);
  border-radius: 4px;
  text-align: center;
  transition: all 0.2s;
}

.video__button:hover {
  transform: translateY(-0.3rem);
}

.video__button:active {
  transform: translateY(-0.1rem);
}

.video__button1 {
  background-color: #ff9900;
  color: white;
}

.video__button2 {
  color: #ff9900;
  background-color: transparent;
  border: 2px solid #ff9900;
}

.video__content {
  color: #333366;
}

.video__content h3 {
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 1rem;
}

.video__content p {
  font-size: 16px;
}

.video__list {
  list-style: inside;
}

.video__list li {
  font-size: 14px;
  margin-bottom: 0.7rem;
}
</style>
