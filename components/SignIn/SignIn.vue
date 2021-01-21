<template>
  <div class="form__container">
    <div class="container switch__container">
      <div class="row">
        <div class="col-lg-6 switch__box switch__box1">
          <button class="swith__btn">SIGN UP</button>
        </div>
        <div class="col-lg-6 switch__box">
          <button class="swith__btn">SIGN IN</button>
        </div>
      </div>
    </div>
    <div class="form__wrapper">
      <div class="form__content">
        <h1>Log in to your account</h1>
        <p>
          Build skills for today, tomorrow, and beyond. Education to
          future-proof your career.
        </p>
        <div class="form__search">
          <button>
            <img
              class="search"
              src="~/assets/images/form/google.png"
              alt="google"
            />
            Sign in with Google
          </button>
          <button>
            <img
              src="~/assets/images/form/facebook.png"
              alt="google"
              class="search"
            />
            Sign in with Facebook
          </button>
        </div>
        <div class="line">
          <div>&nbsp;</div>
          or
          <div>&nbsp;</div>
        </div>
      </div>
      <form>
        <Input type="email" inputPlaceholder="Email Address" />
        <Input type="password" inputPlaceholder="Password" />
        <div class="form__button">
          <p>
            By clicking Sign Up, you agree to our Terms of Use and our Privacy
            Policy.
          </p>
          <Button type="submit" btnStyle="submit">Sign in</Button>
          <h4>Forgot your password?</h4>
          <div class="line">
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
  props: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.form__container {
  background-color: transparent;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
}

.switch__box {
  padding: 0;
  border: 2px solid #ccc;
}

.switch__box1 {
  border-right: none;
}

.swith__btn {
  background-color: transparent;
  width: 100%;
  padding: 1.2rem 3rem;
  font-weight: 600;
  font-size: 18px;
  border: none;
  color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s;
}

.swith__btn:hover {
  background-color: #eaeef3;
}

.swith__btn:focus {
  outline: none;
}

.form__search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 3rem;
}

.form__search button {
  background-color: white;
  padding: 0.6rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
  border-radius: 5px;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-size: 16px;
  color: #333366;
  transition: all 0.2s;
}

.form__search button:hover {
  background-color: #f3f3f3;
}

.form__search button:focus {
  outline: none;
}

.search {
  height: 2.1rem;
  float: left;
  margin-right: 1rem;
}

.form__wrapper {
  padding: 2.5rem 3.75rem;
  border-radius: 0 0 5px 5px;
  color: #111111;
  border-left: 2px solid #ccc;
  border-right: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
}

.form__content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
}

h1 {
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 1rem;
}

h4 {
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #5d30db;
  margin: 2rem 0;
}

p {
  font-weight: normal;
  font-size: 18px;
  text-align: center;
}

.form__button p {
  text-align: left;
  font-size: 14px;
  margin-bottom: 2.5rem;
}

.form__button {
  text-align: center;
}

.line {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.line div {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
}
</style>
