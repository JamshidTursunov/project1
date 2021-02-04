export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit, dispatch }, context) {
    const { data } = await context.app.$axios.get(
      `https://damp-falls-69005.herokuapp.com/api/course/`
    )
    const resPromoVideos = await context.app.$axios.get(
      `https://damp-falls-69005.herokuapp.com/api/course/video/`
    )
    commit('course/setAllCourseData', data)
    commit('course/setAllPromoVideo', resPromoVideos.data)
  },
}
