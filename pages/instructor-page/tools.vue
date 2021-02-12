<template>
  <div class="tools">
    <div class="tools__container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 tools__wrapper">
            <div class="tools__photo">
              <!-- <img
                src="~assets/images/userAccount.png"
                alt="user-image"
                class="tools__img"
              /> -->
            </div>
            <ul>
              <li>Profile</li>
              <li>Photo</li>
              <li>Account</li>
            </ul>
          </div>
          <div class="col-lg-9 tools__wrapper">
            <NuxtChild />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
