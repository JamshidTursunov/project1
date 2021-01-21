<template>
  <div class="form__wrapper">
    <div class="form__content">
      <h1>Fill out the application form</h1>
      <p>
        Build skills for today, tomorrow, and beyond. Education to future-proof
        your career.
      </p>
    </div>
    <form>
      <Input inputPlaceholder="First Name" />
      <Input inputPlaceholder="Last Name" />
      <Input type="email" inputPlaceholder="Email Address" />
      <Input type="file" inputPlaceholder="Send your resume" />
      <Input inputPlaceholder="Send your portfolio" />
      <Input
        controlType="textarea"
        textPlaceholder="Short information about your skills"
        rows="7"
      />
      <div class="form__button">
        <p>
          By clicking Sign Up, you agree to our Terms of Use and our Privacy
          Policy.
        </p>
        <Button type="submit" btnStyle="submit">Submit</Button>
      </div>
    </form>
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
.form__wrapper {
  padding: 2.5rem 3.75rem;
  background-color: transparent;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  color: #111111;
  border: 2px solid #ccc;
}

.form__content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3.8rem;
}

h1 {
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 1rem;
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
</style>
