export const state = () => ({
  totalPercentage: 0,
  correctIndex: null,
})

export const mutations = {
  setPersentage(state, percentage) {
    localStorage.setItem('Percentage', percentage)
    state.totalPercentage = percentage
  },
  setCorrectIndex(state, correctIndex) {
    localStorage.setItem('correctAnswers', correctIndex)
    state.correctIndex = correctIndex
  },
}
// export const actions = {}  //for now is not usable

export const getters = {
  getPercentage(state) {
    return state.totalPercentage
  },
  getCorrectIndex(state) {
    return state.correctIndex
  },
}
