export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const { data } = await context.app.$axios.get(
      `https://damp-falls-69005.herokuapp.com/api/course/`
    )
    commit('course/setAllCourseData', data)
  },
}
