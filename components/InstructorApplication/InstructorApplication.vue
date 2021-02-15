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
      <Input v-model="form.first_name" inputPlaceholder="First Name" />
      <Input v-model="form.last_name" inputPlaceholder="Last Name" />
      <Input
        v-model="form.phone_number"
        type="tel"
        inputPlaceholder="Phone number"
      />
      <Input
        v-model="form.password"
        type="password"
        inputPlaceholder="Password"
      />
      <div class="inputControl__box">
        <input
          type="file"
          name="file"
          id="file"
          class="inputControl__file"
          @change="valChange"
        />
        <label for="file">
          <span>{{ label }}</span> <span>Upload file</span>
        </label>
      </div>
      <Input
        v-model="form.partifol"
        inputPlaceholder="Send link of your portfolio"
      />
      <Input
        v-model="form.description"
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
import Toast from '~/utils/toast.js'
export default {
  mixins: [Toast],
  props: {},
  data() {
    return {
      label: 'Send your resume',
      form: {
        first_name: 'Jahongir',
        last_name: 'Tursunaliev',
        phone_number: '+998991000544',
        password: '23012001',
        resume: 'dog.mp4',
        partifol: 'www.smth.com',
        description: 'I am a developer',
        token: '',
      },
    }
  },
  methods: {
    valChange(event) {
      this.label = event.target.files[0].name
      this.form.resume = event.target.files[0].name
    },
  },
}
</script>

<style></style>
