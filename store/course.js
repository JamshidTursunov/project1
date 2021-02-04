export const state = () => ({
  allCourseData: [],
  courseData: [],
  instructorName: [],
  allPromoVideo: [],
  singlePromoVideo: [],
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
    state.allPromoVideo = data
  },
  setSinglePromoVideo(state, data) {
    state.singlePromoVideo = data
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

  initSinglePromoVideo({ commit, state }, payload) {
    if (state.allPromoVideo.length) {
      const singlePromo = state.allPromoVideo.filter((item) => {
        return item.course == payload
      })
      commit('setSinglePromoVideo', singlePromo)
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
  getPromoVideo(state) {
    return state.singlePromoVideo
  },
}
