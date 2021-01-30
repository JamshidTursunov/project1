import Vue from 'vue'
import Vuex from 'vuex'
import course from './course'
Vue.use(vuex)

export default new Vuex.Store({
  modules: {
    course,
  },
})
