export const state = () => ({
  mentors: [],
})

export const mutations = {
  setMentors(state, payload) {
    state.mentors = payload
  },
}
export const actions = {
  async getMentors({ commit }) {
    await this.$axios
      .get('mentor/list-search/')
      .then((res) => {
        console.log('Mentors', res.data)
        commit('setMentors', res.data)
      })
      .catch((err) => console.log(err))
  },
}
export const getters = {
  getMentors(state) {
    return state.mentors
  },
}
