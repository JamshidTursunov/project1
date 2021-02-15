<template>
  <div class="form__wrapper">
    <div class="form__content">
      <h1>Fill out the application form</h1>
      <p class="form__p">
        Build skills for today, tomorrow, and beyond. Education to future-proof
        your career.
      </p>
    </div>
    <form @submit.prevent="getCode" enctype="multipart/form-data">
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
        phone_number: '+998903444447',
        password: '23012001',
        partifol: 'www.smth.com',
        description: 'I am a developer',
        token: '',
      },
      resume: '',
    }
  },
  methods: {
    valChange(event) {
      this.label = event.target.files[0].name
      console.log(event.target.files[0])
      this.form.resume = event.target.files[0]
      console.log(this.form)
    },

    async getCode() {
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
        .catch((err) => {
          console.log('[GET CODE ERROR]', err)
          this.showToast('danger', 'Xatolik', "Anketa to'gri to'ldirilmagan")
        })
    },
    async checkCode(payload) {
      await this.$axios
        .post('user/check/code/', {
          phone_number: this.form.phone_number,
          code: payload,
        })
        .then((res) => {
          console.log(res.data)
          this.form.token = res.data.token
          console.log(this.form.token)
          console.log(this.form)
        })
        .catch((err) => {
          console.log(err)
          this.showToast('danger', 'Xatolik', 'Kod xato terilgan')
        })

      if (this.form.token != '' && this.form.token != null) {
        const resumeFile = new FormData()
        resumeFile.append('form', this.resume)
        console.log(resumeFile)
        await this.$axios
          .post('mentor/create/', {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            console.log(res.data)
            // console.log('Final user/: ', res.data)
            // this.$auth.loginWith('local', { data: this.form })
            // this.$router.push('/')
            // this.$store.dispatch('course/initToastShow', true)
          })
          .catch((err) => console.log('[USER ERROR]', err))
        this.form = {
          first_name: '',
          last_name: '',
          phone_number: '',
          password: '',
          resume: '',
          partifol: '',
          description: '',
          token: '',
        }
      }
      this.$nextTick(() => {
        this.$bvModal.hide('modal-check-code')
      })
    },
  },
}
</script>

<style></style>
