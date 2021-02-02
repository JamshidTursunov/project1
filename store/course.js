export const state = () => ({
  allCourseData: [],
  courseData: [],
  instructorName: [],
})

export const mutations = {
  setAllCourseData(state, data) {
    state.allCourseData = data
  },
  setCourseData(state, data) {
    state.courseData = data
  },
  setInstructorName(state, data) {
    state.instructorName = data
  },
}

export const actions = {
  async initSingleCourseData({ commit, dispatch }, payload) {
    try {
      const { data } = await this.$axios.get(`course/${payload}/`)
      commit('setCourseData', data)
      dispatch('initIntructorName', data.instructor)
    } catch (err) {
      console.log(err)
    }
  },

  async initIntructorName({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(`course/instructor/${payload}/`)
      commit('setInstructorName', data)
    } catch (err) {
      console.log(err)
    }
  },
}

export const getters = {
  getAllCourseData(state) {
    return state.allCourseData
  },
  getCourseData(state) {
    console.log(state.courseData)
    return state.courseData
  },
  getCourseInstructor(state) {
    return state.instructorName
  },
}
