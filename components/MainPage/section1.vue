<template>
  <div class="container-fluid all-wrapper section-1-wrapper">
    <div class="row">
      <div class="col-md-12 col-lg-6 flex flex-column">
        <h1 class="text-h1 space-around my-14">
          Boost your skills and <br />Build your future
        </h1>
        <div class="flex justify-start">
          <div class="content">
            <h4 class="content-title">GreatSoft Academy-</h4>
            <p class="content-context">
              bu sening orzularing sari eng to‘g‘ri tanlov
            </p>
          </div>
          <img
            src="~assets/images/new.png"
            alt="man"
            class="align-self-center man-image"
          />
        </div>
      </div>
      <div class="col-md-12 col-lg-6">
        <form-1 buttonText="Login" :SubmitForm="loginUser" />
      </div>
    </div>
    <div class="row flex justify-center mt-8">
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 flex items-center justify-center"
      >
        <img src="~assets/images/python3.png" alt="...." class="w-20 h-20" />
        <h1>PYTHON</h1>
      </div>
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 flex items-center justify-center"
      >
        <img src="~assets/images/python4.png" alt="...." class="w-20 h-20" />
        <h1>Django</h1>
      </div>
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 d-none d-md-flex flex items-center justify-center"
      >
        <img src="~assets/images/python3.png" alt="...." class="w-20 h-20" />
        <h1>PYTHON</h1>
      </div>
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 d-none d-xl-flex items-center justify-center"
      >
        <img src="~assets/images/python4.png" alt="...." class="w-20 h-20" />
        <h1>Django</h1>
      </div>
      <div
        class="col-lg mb-4 col-md-4 col-sm-6 col-6 d-none d-xl-flex items-center justify-center"
      >
        <img src="~assets/images/python3.png" alt="...." class="w-20 h-20" />
        <h1>PYTHON</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async loginUser(infoUser) {
      try {
        let response = await this.$auth.loginWith('local', { data: infoUser })
        console.log('my response', response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.section-1-wrapper {
  &.all-wrapper {
    position: relative;
  }
}
</style>
