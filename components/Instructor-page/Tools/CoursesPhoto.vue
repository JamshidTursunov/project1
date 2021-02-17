<template>
  <div class="tools__profile">
    <div class="tools__profile__wrapper">
      <h1>Photo</h1>
      <h3>Add a nice photo of yourself for your profile.</h3>
    </div>
    <div class="tools__profile__wrapper">
      <div class="tools__photo__box">
        <div class="tools__photo__photo">
          <img
            class="tools__photo__img"
            src="~assets/images/userAccount.png"
            alt="user photo"
          />
        </div>
      </div>
      <form>
        <div class="landPage__group" role="group">
          <b-form-file
            class="landPage__input"
            browse-text="Upload image"
            size="md"
            placeholder="No file selected"
          ></b-form-file>
        </div>
        <div class="landPage__group landPage__btn" role="group">
          <b-button type="submit" size="md" variant="primary"
            >Change photo</b-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
