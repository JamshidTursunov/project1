export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const { data } = await context.app.$axios.get(
      `https://greatsoft-academy.herokuapp.com/api/course/`
    )
    commit('course/setAllCourseData', data)
    // const resPromoVideos = await context.app.$axios.get(
    //   `https://greatsoft-academy.herokuapp.com/api/course/video/`
    // )
    // commit('course/setAllPromoVideo', resPromoVideos.data)
  },
}
