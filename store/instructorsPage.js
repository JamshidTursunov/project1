export const state = () => ({
  createdCourses: [],
})

export const mutations = {
  setCreatedCourses(state, data) {
    state.createdCourses.push(data)
  },
  deleteCreatedCourse(state, id) {
    state.createdCourses.splice(id, 1)
  },
}

export const actions = {
  initCreatedCourses({ commit }, payload) {
    commit('setCreatedCourses', payload)
  },
  initDeleteCourse({ commit }, payload) {
    commit('deleteCreatedCourse', payload)
  },
}

export const getters = {
  getCreatedCourses(state) {
    return state.createdCourses
  },
}
