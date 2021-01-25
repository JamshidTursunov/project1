<template>
  <div class="form__container">
    <div class="form__wrapper">
      <div class="form__content">
        <h1>Create your free account</h1>
        <p class="form__content__p">
          Build skills for today, tomorrow and beyond. Education allows to
          future-proof your career.
        </p>
        <div class="form__search">
          <button>
            <img
              class="form__search__img"
              src="~/assets/images/form/google.png"
              alt="google"
            />
            Sign up with Google
          </button>
          <button>
            <img
              src="~/assets/images/form/facebook.png"
              alt="google"
              class="form__search__img"
            />
            Sign up with Facebook
          </button>
        </div>
        <div class="form__line">
          <span></span>
          or
          <span></span>
        </div>
      </div>
      <form>
        <Input inputPlaceholder="First Name" />
        <Input inputPlaceholder="Last Name" />
        <Input type="email" inputPlaceholder="Email Address" />
        <Input type="password" inputPlaceholder="Password" />
        <Input type="password" inputPlaceholder="Confirm your password" />
        <div class="form__button">
          <p class="form__content__p">
            By clicking Sign Up, you agree to GreatSoft Academy's Terms of
            Service & Privacy Policy.
          </p>
          <Button type="submit" btnStyle="controlButtonSubmit">Sign up</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
