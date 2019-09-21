<template>
  <div class="addresslist">
      <div class="addressitem" v-for="(item,index) in addresslist" :key="index">
        <b @click="changeCur(item)" :class="{checked:item.id == cur}">√</b>
        <div class="cont">
          <p>{{item.name}}</p>
          <p>{{item.tel}}</p>
          <p>{{item.address}}</p>
        </div>
        <span @click="gotoEdit(false,item)">编辑</span>
      </div>
      <button @click="gotoEdit(true)">新增地址</button>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
  data(){
    return {
      cur:-1
    }
  },
  methods:{
    ...mapMutations(['checkAddress']),
    gotoEdit(flag,item){
      flag?this.$router.push({path:'/editAdd'}):this.$router.push({path:'editAdd',query:{...item}})
    },
    changeCur(item){
      this.cur = item.id;
      localStorage.curAddress = item.address; 
      this.$router.push('/home/delivery/market')
    }
  },
  computed:{
    ...mapState(['addresslist'])
  }
}
</script>

<style lang="scss" scoped>
.addressitem{
  display: flex;
  align-items: center;
  padding: 10px;
  .cont{
    flex: 1;
  }
}
b{
    display: inline-block;
    width: 15px;
    height: 15px;
    background: #eee;
    border-radius: 100%;
    margin-right: 10px;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #eee;
    &.checked{
      background: #f90;
    }
  }
</style>