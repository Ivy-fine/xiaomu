import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

function sumCount(arr){
  return arr.reduce((prev,cur)=>{
    return prev + cur.count
  },0)
}
function checkall(arr){
  return arr.every(item => item.checked)
}
function sumPrice(arr){
  return arr.reduce((prev,cur)=>{
    return prev += cur.checked?(cur.count*cur.price):0
  },0)
}
export default new Vuex.Store({
  state: {
    list:[],
    cartlist:[],
    sumCount:0,
    sumPrice:0,
    checkedAll:false,
    addresslist:[]
  },
  getters:{
    foods(state){
      return state.list;
    }
  },
  mutations: {
    getinit(state,list){
      state.list = list
    },
    addCart(state,obj){
      let ind = state.cartlist.findIndex(item=>item.id===obj.id)
      if(ind === -1){
        state.cartlist.push({...obj,count:1,checked:false})
      }else{
        state.cartlist[ind].count++
      }
      state.sumCount = sumCount(state.cartlist)
      // console.log(state.cartlist)
    },
    checkCart(state,id){
      state.cartlist.forEach(item=>{
        if(item.id===id){
          item.checked = !item.checked;
        }
      })
      state.checkedAll = checkall(state.cartlist)
      state.sumPrice = sumPrice(state.cartlist)
    },
    checkall(state){
      state.checkedAll = !state.checkedAll;
      state.cartlist.forEach(item=>item.checked = state.checkedAll)
      state.sumPrice = sumPrice(state.cartlist)
    },
    changeCount(state,{count,id}){
      state.cartlist.forEach(item=>{
        if(item.id===id){
          if(count>0) item.count = count
        }
      })
      state.sumPrice = sumPrice(state.cartlist)
    },
    saveAddress(state,obj){
      state.addresslist.push({...obj,checked:false,id:new Date()*1})
    },
    updateAddress(state,obj){
      let {id,name,tel,address} = obj;
      // console.log(obj)
      state.addresslist.forEach(item=>{
        if(item.id === id){
          item.name = name;
          item.tel = tel;
          item.address = address;
        }
      })
      // console.log(state.addresslist)
    }
    // checkAddress(state,id){
    //   state.addresslist.forEach(item=>item.checked = false)
    //   state.addresslist.forEach(item=>{
    //     if(item.id===id){
    //       item.checked = true;
    //     }
    //   })
    // }
  },
  actions: {
    async getlist({commit}){
      let res = await axios.get('/getlist')
      let list = res.data
      list.forEach(item=>item.count=0)
      commit('getinit',list)
    }
  }
})
