export const state = () => ({
  allCourseData: [],
  courseData: null,
})

export const mutations = {
  setAllCourseData(state, data) {
    state.allCourseData = data
  },
  setCourseData(state, data) {
    state.courseData = data
  },
}

export const actions = {
  async initSingleCourseData({ commit }, payload) {
    try {
      let allSingleData
      const res = await this.$axios.get(`course/${payload}/`)
      const instructor = res.data.instructor
      const resInstructor = await this.$axios.get(
        `course/instructor/${instructor}/`
      )
      allSingleData = {
        ...res.data,
        name_uz: resInstructor.data.name_uz,
        name_ru: resInstructor.data.name_ru,
        name_en: resInstructor.data.name_en,
      }
      commit('setCourseData', allSingleData)
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
}
