<template>
  <div class="form__container" v-if="toggler">
    <div class="container form__switch__container">
      <div class="row">
        <div class="col-lg-6 form__switch__box form__switch__box1">
          <button class="form__swith__btn">SIGN IN</button>
        </div>
        <div class="col-lg-6 form__switch__box">
          <button @click="handleSignToggler" class="form__swith__btn">
            SIGN UP
          </button>
        </div>
      </div>
    </div>
    <div class="form__wrapper">
      <div class="form__content">
        <h1>Log in to your account</h1>
        <p class="form__content__p">
          Build skills for today, tomorrow, and beyond. Education to
          future-proof your career.
        </p>
        <div class="form__search">
          <button>
            <img
              class="form__search__img"
              src="~/assets/images/form/google.png"
              alt="google"
            />
            Sign in with Google
          </button>
          <button>
            <img
              src="~/assets/images/form/facebook.png"
              alt="google"
              class="form__search__img"
            />
            Sign in with Facebook
          </button>
        </div>
        <div class="form__line">
          <div>&nbsp;</div>
          or
          <div>&nbsp;</div>
        </div>
      </div>
      <form @submit.prevent="submitSignIn">
        <Input type="email" inputPlaceholder="Email Address" v-model="email" />
        <Input type="password" inputPlaceholder="Password" v-model="password" />
        <div class="form__button">
          <Button
            type="submit"
            @click="submitSignIn"
            btnStyle="controlButtonSubmit"
            >Sign in</Button
          >
          <h4>Forgot your password?</h4>
          <div class="form__line">
            <div>&nbsp;</div>
            or
            <div>&nbsp;</div>
          </div>
          <h4>Sign in with your organization</h4>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggler: {
      type: Boolean,
    },
  },
  data() {
    return {
      email: '',
      password: null,
    }
  },
  methods: {
    handleSignToggler() {
      this.$emit('showSignIn')
    },
    async submitSignIn() {
      const loggedUser = await this.$store.getters['auth/loggedUser']
      if (
        this.email === loggedUser.email &&
        this.password === loggedUser.password
      ) {
        await this.$store.dispatch('auth/login')
        console.log('user has logged in succesfully')
        this.$router.replace('/')
      } else {
        console.log('login is failed')
      }
    },
  },
}
</script>

<style></style>
