export const state = () => ({
  allCourseData: [],
  courseData: [],
  instructorName: [],
  allPromoVideo: [],
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
  setAllPromoVideo(state, data) {
    state.promoVideo = data
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

  async initAllPromoVideo({ commit }) {
    try {
      const { data } = await this.$axios.get(`course/video/`)
      console.log(data)
      commit('setAllPromoVideo', data)
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
    return state.courseData
  },
  getCourseInstructor(state) {
    return state.instructorName
  },
}
