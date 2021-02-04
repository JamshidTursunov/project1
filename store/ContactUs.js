export const state = () => {}

export const mutations = {}
export const actions = {
  async sendMessage({ commit }, { name, phone_number, email, message }) {
    await this.$axios
      .post('contact/', {
        full_name: name,
        phone_number: phone_number,
        email: email,
        message: message,
      })
      .then((res) => {
        console.log('[SEND_MESSAGE]: ', res)
      })
      .catch((err) => console.log('[SEND_MESSAGE_ERROR]: ', err))
  },
}
export const getters = {}
