<template>
  <div class="shopcart">
      <div class="address">地址</div>
      <div class="cartlist">
        <h4 v-if="sumCount>0"><b :class="{checked:checkedAll}" @click="checkall">√</b>多点超市</h4>
        <p v-else>购物车空空如也。。。</p>
        <div class="cartitem" v-for="(item,index) in cartlist" :key="index">
          <b @click="checkCart(item.id)" :class="{checked:item.checked}">√</b>
          <div class="info">
            <p>{{item.title}}</p>
            <p>￥{{item.price}}</p>
          </div>
          <div class="count">
            <span @click="changeCount({id:item.id,count:item.count-1})">-</span>
            <span>{{item.count}}</span>
            <span @click="changeCount({id:item.id,count:item.count+1})">+</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        合计: ￥ <b>{{money}}</b> 
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  computed:{
    ...mapState(['cartlist','sumCount','checkedAll','sumPrice']),
    money(){
      return this.sumPrice.toFixed(2)
    }
  },
  methods:{
    ...mapMutations(['checkCart','checkall','changeCount'])
  }
}
</script>

<style lang="scss">
.address{
  height: 50px;
}
.shopcart{
  display: flex;
  flex-direction: column;
}
.cartlist{
  flex: 1;
  overflow-y: auto;
  &>p{
    width: 100%;
    text-align: center;
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
  h4{
    line-height: 30px;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    font-weight: normal;
  }
}
.cartitem{
  display: flex;
  align-items: center;
  justify-content: space-between;
    border-bottom: 1px solid #ccc;
  padding: 10px;
  .info{
    flex: 1;
  }
  .count{
    display: flex;
    span{
      width: 20px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #f90;
      text-align: center;
      &:nth-child(2){
        border: none;
      }
    }
  }
}
.bottom{
    padding: 0 10px;
    color: #f90;
    line-height: 50px;
}
</style>