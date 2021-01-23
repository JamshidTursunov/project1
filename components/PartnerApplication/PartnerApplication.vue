<template>
  <div class="form__container">
    <div class="form__wrapper">
      <div class="form__content mt-5">
        <h1>Partner application</h1>
        <p class="form__content__p">
          Build skills for today, tomorrow and beyond. Education allows to
          future-proof your career.
        </p>
      </div>
      <form>
        <Input inputPlaceholder="Company Name" />
        <Input inputPlaceholder="Company work sphere " />
        <Input type="file" slotLabel="Company logo" />
        <Input
          controlType="textarea"
          textPlaceholder="Why do you want to become partner with us? "
          rows="7"
        />
        <div class="form__button">
          <p class="form__content__p">
            By clicking Send, you agree to our Privacy and Policy.
          </p>
          <Button type="submit" btnStyle="controlButtonSubmit">Send</Button>
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
