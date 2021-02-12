<template>
  <div class="tools__profile">
    <div class="tools__profile__wrapper">
      <h1>Instructor profile</h1>
      <h3>Add information about yourself</h3>
    </div>
    <div class="tools__profile__wrapper">
      <form>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Name"
            trim
          ></b-form-input>
        </div>
        <div class="landPage__group" role="group">
          <b-form-input
            class="landPage__input"
            placeholder="Last name"
            trim
          ></b-form-input>
        </div>
        <b-button type="submit" size="md" variant="primary"
          >Change data</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
