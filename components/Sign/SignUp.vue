<template>
  <div class="form__container">
    <div class="form__wrapper">
      <div class="form__content">
        <h1>Create your free account</h1>
        <p class="form__content__p">
          Build skills for today, tomorrow and beyond. Education allows to
          future-proof your career.
        </p>
        <div class="form__search">
          <button>
            <img
              class="form__search__img"
              src="~/assets/images/form/google.png"
              alt="google"
            />
            Sign up with Google
          </button>
          <button>
            <img
              src="~/assets/images/form/facebook.png"
              alt="google"
              class="form__search__img"
            />
            Sign up with Facebook
          </button>
        </div>
        <div class="form__line">
          <span></span>
          or
          <span></span>
        </div>
      </div>
      <form @submit.prevent="getCode">
        <Input inputPlaceholder="First Name" v-model="form.first_name" />
        <Input inputPlaceholder="Last Name" v-model="form.last_name" />
        <!-- <Input type="email" inputPlaceholder="Email Address" /> -->
        <Input
          type="tel"
          inputPlaceholder="Phone number"
          v-model="form.phone_number"
        />
        <Input
          type="password"
          inputPlaceholder="Password"
          v-model="form.password"
        />
        <div class="form__button">
          <p class="form__content__p">
            By clicking Sign Up, you agree to GreatSoft Academy's Terms of
            Service & Privacy Policy.
          </p>
          <Button type="submit" @click="getCode" btnStyle="controlButtonSubmit"
            >Continue</Button
          >
          <check-code @codeTransfer="checkCode" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Button from '../ControlFields/Button.vue'
export default {
  components: { Button },
  props: {},
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        phone_number: '',
        password: '',
        token: '',
      },
      code: null,
    }
  },

  methods: {
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
          this.showToast(
            'danger',
            'b-toaster-bottom-right',
            '2000',
            'xatolik',
            'Telefon raqam yoki parol xato terilgan'
          )
        })
    },
    async checkCode(payload) {
      await this.$axios
        .post('user/check/code/', {
          phone_number: this.form.phone_number,
          code: payload,
        })
        .then((res) => {
          this.form.token = res.data.token
        })
        .catch((err) => {
          console.log(err)
        })

      if (this.form.token != '' && this.form.token != null) {
        await this.$axios
          .post('user/', this.form)
          .then((res) => {
            console.log('Final user/: ', res)
            this.$auth.loginWith('local', { data: this.form })
            this.$nextTick(() => {
              this.showToast('success', 'b-toaster-bottom-right', '2000')
            })
          })
          .catch((err) => console.log('[USER ERROR]', err))
        this.form = {
          first_name: '',
          last_name: '',
          phone_number: '',
          password: '',
          token: '',
        }
        this.$router.push('/about')
        // this.showToast('success', 'b-toaster-bottom-right', '2000')
      }
      this.$nextTick(() => {
        this.$bvModal.hide('modal-check-code')
      })
    },

    showToast(variant, toaster, autoHideDelay, title, message) {
      // Use a shorter name for this.$createElement
      const h = this.$createElement
      // Create the message
      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        message,
        h('b-spinner', { props: { type: 'grow', small: true } }),
      ])
      // Create the title
      const vNodesTitle = h(
        'div',
        { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] },
        [h('strong', { class: 'mr-2' }, title)]
      )
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: true,
        variant: variant,
        toaster: toaster,
        autoHideDelay: autoHideDelay,
      })
    },
  },
}
</script>
