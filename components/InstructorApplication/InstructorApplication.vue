<template>
  <div class="form__wrapper">
    <div class="form__content">
      <h1>Fill out the application form</h1>
      <p class="form__p">
        Build skills for today, tomorrow, and beyond. Education to future-proof
        your career.
      </p>
    </div>
    <form>
      <Input inputPlaceholder="First Name" />
      <Input inputPlaceholder="Last Name" />
      <Input type="email" inputPlaceholder="Email Address" />
      <Input type="file"> Send your resume </Input>
      <Input inputPlaceholder="Send your portfolio" />
      <Input
        controlType="textarea"
        textPlaceholder="Short information about your skills"
        rows="7"
      />
      <div class="form__button">
        <p class="form__p">
          By clicking Sign Up, you agree to our Terms of Use and our Privacy
          Policy.
        </p>
        <Button type="submit" btnStyle="controlButtonSubmit">Submit</Button>
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

<style></style>
