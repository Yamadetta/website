import { createStore } from 'vuex'

export default createStore({
  state: {
    aboveElement: false
  },
  getters: {},
  mutations: {
    setAboveElement(state, value) {
      state.aboveElement = value;
    }
  },
  actions: {},
  modules: {}
})
