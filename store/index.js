export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    const { data } = await context.app.$axios.get(
      `https://greatsoft-academy.herokuapp.com/api/course/`
    )
    const res = await context.app.$axios.get(
      `https://greatsoft-academy.herokuapp.com/api/main/`
    )
    commit('course/setAllCourseData', data)
    commit('mainPage/setPromo', res.data)
  },
}
