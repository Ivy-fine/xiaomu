import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartlist: [],
  },
  getters: {
    money(state, getters) {
      return state.cartlist.reduce((prev, cur) => {
        return prev + cur.count * cur.price
      }, 0)
    }
  },
  mutations: {
    setcartlist(state, item) {
      state.cartlist.push(item)
    },
    changecount(state, obj) {
      if (obj.count !== 0) {
        state.cartlist.forEach(item => {
          if (item.id === obj.id) {
            item.count = obj.count
          }
        })
      }
    }
  },
  actions: {

  }
})
