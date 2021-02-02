<template>
  <div class="payme">
    <h1 class="payme-text">Payme Payment</h1>
    <b-form @submit="PaymentProcess">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.creditCard"
          placeholder="Type number of credit card"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.expireDate"
          placeholder="Expire date"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="info">process</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'type-payme',
  data() {
    return {
      form: {
        creditCard: 8600020453454139,
        expireDate: 1125,
      },
    }
  },
  methods: {
    PaymentProcess() {
      alert('is in process')
    },
  },
}
</script>

<style scoped>
.payme-text {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 100%;
  color: #333366;
  margin: 1rem auto;
}
form input {
  width: 60%;
  margin-right: auto;
}
</style>
