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
          placeholder="Your email (optional)"
          v-model="form.email"
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
        phone_number: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    sendMessage() {
      this.$store.dispatch('ContactUs/sendMessage', this.form)
      this.form.name = ''
      this.form.phone_number = ''
      this.form.email = ''
      this.form.message = ''
    },
  },
}
</script>
