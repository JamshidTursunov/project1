<template>
  <div>
    <spinner v-if="isLoading" />
    <div v-else class="contact__us">
      <div class="container">
        <transition name="fade">
          <alerts
            :dismissCountDown="dismissCountDownTimer"
            :alertVariant="variantColor"
            :msg="alertMessage"
          />
        </transition>
        <h1>Contact Us!</h1>
        <p>Ask your question. Our administrator will call you soon</p>
        <div class="row">
          <div class="col-lg-6">
            <ContactForm @showAlertMessage="displayAlert" />
          </div>
          <div class="col-lg-6">
            <ContactMap />
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
      isLoading: true,
    }
  },
  methods: {
    displayAlert({ dismissCountDownTimer, variantColor, alertMessage }) {
      ;(this.dismissCountDownTimer = dismissCountDownTimer),
        (this.variantColor = variantColor),
        (this.alertMessage = alertMessage)
    },
  },
  created() {
    this.isLoading = false
  },
}
</script>
