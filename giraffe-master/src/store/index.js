import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    location: null,
  },
  getters: {
  },
  mutations: {
    SHOW_LOCATION(state, payload) {
      state.location = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
