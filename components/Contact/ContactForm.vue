<template>
  <div class="contact__container">
    <form @submit.prevent="sendMessage">
      <div class="contact__input__group">
        <label class="contact__form__label" for="FlName">Your full name</label>
        <input
          class="contact__form__input"
          type="text"
          name="FlName"
          placeholder="Full name"
          v-model="form.name"
        />
      </div>
      <div class="contact__input__group">
        <label class="contact__form__label" for="tel">Phone number</label>
        <input
          class="contact__form__input"
          name="tel"
          placeholder="+9989--------"
          required
          v-model="form.phone_number"
        />
      </div>
      <div class="contact__input__group">
        <label class="contact__form__label" for="email">Email address</label>
        <input
          class="contact__form__input"
          type="email"
          name="email"
          placeholder="Your email"
          v-model="form.email"
          required
        />
      </div>
      <div class="contact__input__group">
        <label class="contact__form__label" for="textArea">Message</label>
        <textarea
          name="textArea"
          id="text"
          cols="30"
          rows="8"
          class="contact__form__textArea"
          placeholder="Your message starts with…"
          required
          v-model="form.message"
        ></textarea>
      </div>
      <div class="contact__input__group">
        <button type="submit" class="contact__btn">Send your Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
        phone_number: '',
      },
    }
  },
  methods: {
    async sendMessage() {
      await this.$store.dispatch('ContactUs/sendMessage', this.form)
      const alertNotif = {
        dismissCountDownTimer: 5,
        variantColor: 'success',
        alertMessage: 'your message has been sent successfully',
      }
      this.$emit('showAlertMessage', alertNotif)
      if (!this.$auth.loggedIn) {
        this.form.message = ''
        this.form.name = ''
        this.form.email = ''
        this.form.phone_number = ''
      }
      this.form.message = ''
      console.log(this.form)
    },
  },
  created() {
    if (this.$auth.loggedIn) {
      this.form.name = ` ${this.$auth.user.user.first_name} ${this.$auth.user.user.last_name}`
      this.form.phone_number = this.$auth.user.user.phone_number
    }
  },
}
</script>
