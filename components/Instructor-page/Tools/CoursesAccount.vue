<template>
  <div class="tools__profile">
    <div class="tools__profile__wrapper">
      <h1>Account</h1>
      <h3>Edit your account settings and change your password here.</h3>
    </div>
    <div class="tools__profile__wrapper">
      <div class="landPage__group" role="group">
        <label class="landPage__label tools__account__label" for="number"
          >Your current phone number:</label
        >
        <b-form-input
          id="number"
          class="landPage__input"
          type="number"
          placeholder="+998991091320"
          disabled
        ></b-form-input>
      </div>
    </div>
    <div class="tools__profile__wrapper">
      <form>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Enter new number"
            type="number"
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Enter current password"
            type="password"
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Enter new password"
            type="password"
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Re-enter new password"
            type="password"
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group landPage__btn" role="group">
          <b-button type="submit" size="md" variant="primary"
            >Change data</b-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
