<template>
  <button class="button" :class="btnStyle" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnStyle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.button {
  font-size: 1rem;
  color: white;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  text-align: center;
}

.submit {
  background-color: #5d30db;
}

.submit:hover,
.submit:active {
  background-color: #4d25bb;
}

.cancel {
  background-color: red;
  color: white;
}

.cancel:hover,
.cancel:active {
  background-color: #c90e0e;
}
</style>
