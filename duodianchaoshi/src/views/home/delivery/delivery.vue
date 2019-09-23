<template>
  <div class="delivery">
      <div class="address" @click="gotoAddresslist">配送至:{{curAddress}}</div>
      <div class="list">
        <div class="tabBar">
          <router-link v-for="(item,index) in navlist" :key="index" :to="item.path" tag="span">{{item.text}}</router-link>
        </div>
       <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navlist:[
        {
          path:'/home/delivery/market',
          text:'多点超市'
        },{
          path:'/home/delivery/global',
          text:'全球精选'
        }
      ],
      curAddress:''
    }
  },
  methods:{
    gotoAddresslist(){
      this.$router.push('/addresslist')
    }
  },
  created(){
    this.curAddress = localStorage.curAddress
  }
}
</script>

<style lang="scss">
.delivery{
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.address{
    line-height: 44px;
  }
  .list{
    flex: 1;
    display: flex;
    flex-direction: column;
    .tabBar{
      line-height: 44px;
      span{
        margin: 0 10px;
        padding: 5px;
        &.router-link-active{
          color: #f90;
          border-bottom: 2px solid #f90;
        }
      }
    }
  }
</style>