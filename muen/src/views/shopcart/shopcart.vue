<template>
  <div class="shopcart">
      <Header>
          <p class="title">购物车</p>
      </Header>
      <!-- {{cartlist}} -->
      <div class="cartlist">
        <item v-for="(item,index) in cartlist" :key="index" :img="item.img" :classname="'right'">
          <p>{{item.type}}</p>
          <p>￥{{item.price}}</p>
          <p class="count">
            <span @click.stop="changecount({id:item.id,count:item.count*1-1})">-</span>
            <span>{{item.count}}</span>
            <span @click.stop="changecount({id:item.id,count:item.count*1+1})">+</span>
          </p>
        </item>
      </div>
      <div class="bottom">
        总价:{{money}}
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
import item from "@/components/item/item.vue"
export default {
  computed:{
    ...mapState(['cartlist']),
    ...mapGetters(['money'])
  },
  components:{
    item
  },
  methods:{
    ...mapMutations(['changecount']),
  }
}
</script>

<style lang='scss'>
  .shopcart{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .cartlist{
    flex:1;
    dl{
      padding: 10px;
    dt{
      width: 60px;
      height: 60px;
      margin-right: 10px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    dd{
      flex:1;
      line-height: 30px;
      font-size: 14px;
      position: relative;
      .count{
        position: absolute;
        bottom: 10px;
        right: 10px;
        span{
          padding-left: 10px;
        }
      }
    }
  }
  }
  .bottom{
    height: 50px;
    line-height: 50px;
    background: #fff;
    padding-left: 20px;
  }
</style>