export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const { data } = await context.app.$axios.get(
      `https://greatsoft-academy.herokuapp.com/api/course/`
    )
    const resPromoVideos = await context.app.$axios.get(
      `https://greatsoft-academy.herokuapp.com/api/course/video/`
    )
    commit('course/setAllCourseData', data)
    commit('course/setAllPromoVideo', resPromoVideos.data)
  },
}
