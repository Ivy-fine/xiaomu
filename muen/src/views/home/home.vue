<template>
  <div>
      <Header :back="false">
        <p class="title">沐恩muen</p>
      </Header>
      <comSwiper :imgUrl="imgUrl"></comSwiper>
      <Nav :navlist="navlist"></Nav>
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
      }],
       navlist: [{
          icon:require('@/assets/icon.svg'),
          text:'沐恩动态',
          path:'/vote'
      },{
          icon:require('@/assets/icon.svg'),
          text:'个人动态',
          path:'/vote'
      },{
          icon:require('@/assets/icon.svg'),
          text:'代祷列表',
          path:'/vote'
      },{
          icon:require('@/assets/icon.svg'),
          text:'小礼品',
          path:'/gift'
      },{
          icon:require('@/assets/icon.svg'),
          text:'留言',
          path:'/vote'
      },{
          icon:require('@/assets/icon.svg'),
          text:'奉献',
          path:'/vote'
      },{
          icon:require('@/assets/icon.svg'),
          text:'投票',
          path:'/vote'
      },{
          icon:require('@/assets/icon.svg'),
          text:'小组',
          path:'/group'
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