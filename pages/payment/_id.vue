<template>
  <div class="container-fluid payment-container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <b-button @click="changeComponent('componentA')"
          ><img src="~assets/svgs/click.svg" alt="click"
        /></b-button>
        <b-button @click="changeComponent('componentB')">
          <img src="~assets/svgs/payme.svg" alt="click" />
        </b-button>
        <transition name="fade">
          <component :is="currentComponent" class="my-4" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import componentA from '@/components/Payment/click'
import componentB from '@/components/Payment/payme'

export default {
  name: 'payment',
  components: {
    componentA,
    componentB,
  },

  data() {
    return {
      currentComponent: componentA,
    }
  },
  methods: {
    changeComponent(componentType) {
      this.currentComponent = componentType
      console.log('change components type')
    },
  },
}
</script>

<style scoped>
.payment-container {
  min-height: 100vh;
  padding: 2rem 1rem;
  background: #f3f8ff;
}
.is-active {
  background: #4d25bb;
  color: #fff;
}
.payment-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 100%;
  color: #333366;
}
</style>
