<template>
  <div class="nav">
    <dl v-for="(item,index) in navlist" :key="index" @click="gotoVote(item.path)">
      <dt>
        <img :src="item.icon" alt />
      </dt>
      <dd>{{item.text}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          path:'/vote'
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
          path:'/vote'
      }]
    };
  },
  methods:{
      gotoVote(path){
          this.$router.push(path)
      }
  }
};
</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    height: 142px;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    dl{
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        dt{
            img{
                width: 24px;
                height: 24px;
            }
        }
    }
}
</style>