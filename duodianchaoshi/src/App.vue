<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.needkeepalive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.needkeepalive"/>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style-type: none;
    box-sizing: border-box;
  }
  html,body,#app{
    width: 100%;
    height: 100%;
  }
</style>
