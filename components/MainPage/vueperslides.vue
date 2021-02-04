<template>
  <vueper-slides
    class="no-shadow"
    :visible-slides="4"
    slide-multiple
    :gap="0"
    :slide-ratio="2 / 7"
    :dragging-distance="200"
    :breakpoints="myBreakPoints"
  >
    <vueper-slide class="cart-self" v-for="(i, index) in slides" :key="index">
      <template v-slot:content>
        <div class="cart-block">
          <img class="cart-image" :src="i.image" alt="..." />
          <div class="w-full flex justify-between items-center">
            <p class="user-name">{{ i.username }}</p>
            <p class="user-level">{{ i.level }}</p>
          </div>
          <div class="w-full flex justify-between items-center my-2">
            <div class="flex flex-wrap user-profession pb-1">
              {{ i.profession }}
            </div>
            <b-form-rating
              style="border: 1px solid red; background: transparent; width: 50%"
              no-border
              v-model="ratingValue"
              variant="warning"
              class="mb-2 ml-auto pl-4"
              readonly
              size="xs"
            ></b-form-rating>
          </div>
          <div class="w-full flex items-center mb-3">
            <p class="user-work-experience">Work <br />experience</p>
            <span class="flex-grow work-line"></span>
          </div>
          <div class="w-full flex user-experience">
            <p>{{ i.experience }}</p>
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      myBreakPoints: {
        1350: { visibleSlides: 3, slideMultiple: 2, slideRatio: 1 / 3 },
        1140: { visibleSlides: 3, slideMultiple: 2, slideRatio: 1 / 2.5 },
        1090: { visibleSlides: 3, slideMultiple: 2, slideRatio: 2 / 5 },
        1025: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 5 },
        955: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 4 },
        800: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 3.5 },
        610: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 3 },
        510: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 2.4 },
        400: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 2 },
        360: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 1.8 },
      },
      ratingValue: 4,
      slides: [
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur  ',
          image: require('@/assets/images/cart-image-1.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus ipsum, dolor sit amet ',
          image: require('@/assets/images/cart-image-2.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur ',
          image: require('@/assets/images/cart-image-3.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus, Lorem ipsum, dolor sit amet o unde ',
          image: require('@/assets/images/cart-image-4.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero  ',
          image: require('@/assets/images/cart-image-1.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, ipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariaturComdolor sit amet conss hic libero unde ',
          image: require('@/assets/images/cart-image-2.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde  ',
          image: require('@/assets/images/cart-image-3.png'),
        },
      ],
    }
  },
}
</script>

<style scoped>
.cart-block {
  padding: 3.4rem 1rem 1rem 1rem;
  background: #eef3fa;
  border-radius: 6px 6px 6px 50px;
  height: 100%;
  position: relative;
}
.cart-self {
  padding: 3rem 0rem 0 1rem;
  height: 100%;
}
.cart-image {
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  transform: translateY(-105%);
}
.user-name {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #333366;
}
.user-level {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #5d30db;
}
.user-profession {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: #5d30db;
}
.user-work-experience {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #333366;
}
.user-experience {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 160%;
  color: #333366;
  overflow: hidden;
}
.work-line {
  height: 2px;
  background: rgba(51, 51, 102, 0.2);
}
.vueperslides__arrow {
  color: yellow;
}
</style>
