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
  props:{
    navlist:Array
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