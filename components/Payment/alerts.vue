<template>
  <b-alert
    :show="dismissCountDown"
    dismissible
    :variant="alertVariant"
    @dismissed="dismissCountDown = 0"
    @dismiss-count-down="countDownChanged"
  >
    <p>{{ msg }}</p>
  </b-alert>
</template>

<script>
export default {
  props: ['dismissCountDown', 'alertVariant', 'msg'],
  data() {
    return {
      //   dismissCountDown: 0,
    }
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>
