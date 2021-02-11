export const state = () => ({
  trueAnswers: null,
})

export const mutations = {
  SET_ANSWERS(state, payload) {
    state.trueAnswers = payload
  },
}
export const actions = {}
export const getters = {
  GET_ANSWERS(state) {
    state.trueAnswers
  },
}
