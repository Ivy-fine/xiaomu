<template>
  <div>
      <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in imgUrl" :key="index">
                  <img :src="item.img" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    props:{
        imgUrl:Array
    },
    created(){
        this.$nextTick(()=>{
            new Swiper('.swiper-container',{
                loop:true
            })
        })
    }
}
</script>

<style lang="scss" scoped>
 .swiper-container{
     width: 100%;
     height: 142px;
     .swiper-wrapper,.swiper-slide,img{
         width: 100%;
         height: 100%;
     }
 }
</style>