// export const state = () => ({
//   createdCourses: [],
// })

// export const mutations = {
//   setCreatedCourses(state, data) {
//     state.createdCourses.push(data)
//   },
//   deleteCreatedCourse(state, id) {
//     state.createdCourses.splice(id, 1)
//   },
// }

// export const actions = {
//   initCreatedCourses({ commit }, payload) {
//     commit('setCreatedCourses', payload)
//   },
//   initDeleteCourse({ commit }, payload) {
//     commit('deleteCreatedCourse', payload)
//   },
// }

// export const getters = {
//   getCreatedCourses(state) {
//     return state.createdCourses
//   },
// }

export const state = () => ({
  allCoursesList: [],
})

export const mutations = {
  setAllCoursesList(state, data) {
    state.allCoursesList = data
  },
}

export const actions = {
  async initAllCoursesList({ commit }) {
    try {
      const { data } = await this.$axios.get('course/')
      console.log(data)
      commit('setAllCoursesList', data)
    } catch (err) {
      console.log(err)
    }
  },
}

export const getters = {
  getAllCoursesList(state) {
    console.log(state.allCoursesList)
    return state.allCoursesList
  },
}
