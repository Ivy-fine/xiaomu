<template>
  <div>
      <Header :back="false">
        <p class="title">沐恩muen</p>
      </Header>
      <comSwiper :imgUrl="imgUrl"></comSwiper>
      <Nav></Nav>
  </div>
</template>

<script>
import Nav from "@/components/nav/nav.vue"
export default {
  data(){
    return {
      imgUrl:[{
        img:require('@/assets/8.jpg')
      },{
        img:require('@/assets/9.jpg')
      },{
        img:require('@/assets/10.jpg')
      }]
    }
  },
  components:{
    Nav
  }
}
</script>

<style>

</style>