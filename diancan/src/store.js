import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import "@/mock";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
  },
  getters:{
    nowlist(state,getters){
      return state.list
    },
    sumPrice(state,getters){
      let sum = 0;
      state.list.forEach(item=>{
        sum += item.foods.reduce((prev,cur)=>{
          return prev + cur.count * cur.price
        },0)
      })
      return sum;
    },
    sumCount(state,getters){
      let sum = 0;
      state.list.forEach(item=>{
        sum += item.foods.reduce((prev,cur)=>{
          return prev + cur.count
        },0)
      })
      return sum;
    }
  },
  mutations: {
    setList(state,data){
      state.list=data
    },
    changecount(state,obj){
      state.list[obj.index].foods[obj.subindex].count = obj.count;
    }
  },
  actions: {
    async getlist({commit}){
      let res = await axios.get("/getlist")
      res.data.goods.forEach(item=>{
        item.foods.forEach(val=>{val.count = 0})
      })
      console.log(res.data.goods)
      commit("setList",res.data.goods)
    }
  }
})
