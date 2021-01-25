<template>
  <div class="form__container" v-if="toggler">
    <div class="container form__switch__container">
      <div class="row">
        <div class="col-lg-6 form__switch__box form__switch__box1">
          <button @click="handleSignToggler" class="form__swith__btn">
            SIGN IN
          </button>
        </div>
        <div class="col-lg-6 form__switch__box">
          <button class="form__swith__btn">SIGN UP</button>
        </div>
      </div>
    </div>
    <div class="form__wrapper">
      <div class="form__content">
        <h1>Create your free account</h1>
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
          <div>&nbsp;</div>
          or
          <div>&nbsp;</div>
        </div>
      </div>
      <form>
        <Input inputPlaceholder="First Name" v-model="firstName" />
        <Input inputPlaceholder="Last Name" v-model="lastName" />
        <Input type="email" inputPlaceholder="Email Address" v-model="email" />
        <Input type="password" inputPlaceholder="Password" v-model="password" />
        <Input type="password" inputPlaceholder="Confirm your password" />
        <div class="form__button">
          <p class="form__content__p">
            By clicking Sign Up, you agree to our Terms of Use and our Privacy
            Policy.
          </p>
          <Button
            type="submit"
            @click="submitSignUp"
            btnStyle="controlButtonSubmit"
            >Sign in</Button
          >
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
      firstName: '',
      lastName: '',
      password: '',
      email: '',
    }
  },
  methods: {
    handleSignToggler() {
      this.$emit('showSignUp')
    },
    async submitSignUp() {
      const user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
      }
      await this.$store.dispatch('auth/register', user)
      console.log('user has registered succesfully')
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
