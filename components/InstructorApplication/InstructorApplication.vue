<template>
  <div class="form__wrapper">
    <div class="form__content">
      <h1>Fill out the application form</h1>
      <p class="form__p">
        Build skills for today, tomorrow, and beyond. Education to future-proof
        your career.
      </p>
    </div>
    <form @submit.prevent="getCode">
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
        v-model="form.portfolio"
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
      <check-code @codeTransfer="checkCode" />
    </form>
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
export default {
  mixins: [Toast],
  data() {
    return {
      label: 'Send your resume',
      form: {
        first_name: 'Jahongir',
        last_name: 'Tursunaliev',
        phone_number: '+998904000011',
        password: '23012001',
        portfolio: 'www.smth.com',
        description: 'I am a developer',
        token: '',
        resume: '',
      },
      file: '',
    }
  },
  methods: {
    valChange(event) {
      this.label = event.target.files[0].name
      this.file = event.target.files[0]
    },

    async getCode() {
      try {
        await this.$axios
          .post('user/send/code/', {
            phone_number: this.form.phone_number,
          })
          .then((res) => {
            console.log('[Sent code]', res.data.code)
            this.$nextTick(() => {
              this.$bvModal.show('modal-check-code')
            })
          })
      } catch (err) {
        this.showToast('danger', 'Xatolik', "Anketa to'gri to'ldirilmagan")
        console.log(err)
      }
    },
    async checkCode(payload) {
      try {
        await this.$axios
          .post('user/check/code/', {
            phone_number: this.form.phone_number,
            code: payload,
          })
          .then((res) => {
            this.form.token = res.data.token
          })

        if (this.form.token != '' && this.form.token != null) {
          const formData = new FormData()
          formData.append('file', this.file)
          const resResume = await this.$axios.post('mentor/resume/', formData)
          this.form.resume = resResume.data.file
          const resCreate = await this.$axios.post('mentor/create/', this.form)
          console.log(resCreate.data)
          this.$nextTick(() => {
            this.$bvModal.hide('modal-check-code')
          })
          this.$router.push(this.localePath({ path: '/' }))
          this.$store.dispatch('course/initToastShow', true)
          this.form = {
            first_name: '',
            last_name: '',
            phone_number: '',
            password: '',
            resume: '',
            portfolio: '',
            description: '',
            token: '',
          }
          this.file = ''
        }
      } catch (err) {
        this.showToast('danger', 'Xatolik', 'Kod xato terilgan')
        console.log(err)
      }
    },
  },
}
</script>

<style></style>
