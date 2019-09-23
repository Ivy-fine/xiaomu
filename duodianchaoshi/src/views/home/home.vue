<template>
  <div class="home">
      <router-view/>
      <nav>
        <router-link v-for="(item,index) in navlist" :key="index" :to="item.path" tag="span"><b v-if="item.num">{{sumCount}}</b>{{item.text}}</router-link>
      </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
      navlist:[
        {
          path:'/home/delivery',
          text:'配送到家'
        }, {
          path:'/home/classify',
          text:'分类'
        }, {
          path:'/home/vip',
          text:'会员'
        }, {
          path:'/home/shopcart',
          text:'购物车',
          num:true
        }, {
          path:'/home/my',
          text:'我的'
        }
      ]
    }
  },
  computed:{
    ...mapState(['sumCount'])
  }
}
</script>

<style lang="scss">
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    &>div{
      flex: 1;
    }
  }
  nav{
    height: 44px;
    line-height: 44px;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #eee;
    span{
      position: relative;
      b{
        position: absolute;
        top: 0px;
        right: -5px;
        font-size: 12px;
        color: red;
        border: 1px solid red;
        border-radius: 100%;
        width: 16px;
        height: 16px;
        line-height: 14px;
        text-align: center;
        font-weight: normal;
      }
    }
    span.router-link-active{
      color: red;
    }
  }
</style>