<template>
  <div class="detail">
      <Header></Header>
      <comSwiper :imgUrl="$route.query.item.imgUrl"></comSwiper>
    <p class="price">￥{{$route.query.item.price}}</p>
    <p>精美礼品{{$route.query.item.desc}}</p>
    <button @click="goShopcart($route.query.item)">加入购物车</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    methods:{
        ...mapMutations(['setcartlist']),
        goShopcart(item){
            this.setcartlist(item)
            this.$router.push("/shopcart")
        }
    }
}   
</script>

<style lang="scss">
 .detail{
.header{
     background: none;
     position: absolute;
     left: 0;
     top: 0;
    z-index: 10;
 }
 p{
     padding-left: 10px;
     line-height:30px;
     font-size: 14px;
     &.price{
         color: rgba(255, 87, 51, 1);
         font-size: 20px;
     }
 }
 button{
     width: 79px;
	height: 37px;
    position: absolute;
	left: 286px;
	top: 626px;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(255, 87, 51, 1);
	border-radius: 16px;
	font-size: 14px;
	line-height: 150%;
	text-align: center;
    border: none;
    outline: none;
 }
 }
 
</style>