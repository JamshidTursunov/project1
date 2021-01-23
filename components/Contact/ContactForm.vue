<template>
  <div class="contact__container">
    <form @submit.prevent="">
      <div class="contact__input__group">
        <label class="contact__form__label" for="FlName">Your full name</label>
        <input
          class="contact__form__input"
          type="text"
          name="FlName"
          placeholder="Full name"
        />
      </div>
      <div class="contact__input__group">
        <label class="contact__form__label" for="tel">Phone number</label>
        <input
          class="contact__form__input"
          type="tel"
          name="tel"
          placeholder="+9989--------"
          required
        />
      </div>
      <div class="contact__input__group">
        <label class="contact__form__label" for="email">Email address</label>
        <input
          class="contact__form__input"
          type="email"
          name="email"
          placeholder="Your email (optional)"
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
        ></textarea>
      </div>
      <div class="contact__input__group">
        <button type="submit" class="contact__btn">Send your Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
