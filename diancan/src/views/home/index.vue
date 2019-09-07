<template>
  <div class="home">
    <Header></Header>
    <main>
      <div class="nav">
        <router-link to="/menu" tag="span">点菜</router-link>
        <router-link to="/comment" tag="span">评价</router-link>
        <router-link to="/biz" tag="span">商家</router-link>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .nav {
    height: 44px;
    display: flex;
    line-height: 44px;
    justify-content: space-around;
    border: 1px solid #eee;
    border-width: 1px 0;
    span {
      color: #333;
      &.router-link-active {
        color: #000;
        font-weight: bold;
      }
    }
  }
  .list{
      flex: 1;
  }
}
</style>