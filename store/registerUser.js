export const state = () => ({
  user: {},
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
}

export const actions = {
  //   async userRegistration({ commit }, payload) {
  //     const response = await $axios.get('/user')
  //     console.log('Im in actions', payload)
  //     commit('setUser')
  //   },
}
export const getters = {}
