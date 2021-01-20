<template>
  <div>
    <div class="w-full top-header flex flex-column items-center justify-center">
      <h1 class="content-h1">{{ itemDetails.headerTitle }}</h1>
      <p class="content-p">{{ itemDetails.description }}</p>
    </div>
    <b-form @submit="onSubmit" class="data-form grid">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.firstname"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          placeholder="Last name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.headline"
          placeholder="Headline"
          required
        ></b-form-input>
      </b-form-group>
      <b-button class="justify-self-end data-submit" type="submit"
        >Change Data</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'profile-item',
  props: ['itemDetails'],
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        headline: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  },
}
</script>

<style scoped>
.top-header {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
  min-height: 7rem;
}
.top-header .content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #333366;
}
.top-header .content-p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
}
.data-form {
  width: 70%;
  margin: 5% auto;
}
.data-form input {
  background: transparent;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: rgba(51, 51, 102, 0.5);
}
.data-submit {
  background: #5d30db;
  border-radius: 4px;
  color: white;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
}
</style>
