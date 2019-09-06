<template>
  <div class="tabbar">
    <Subnav :sublist="sublist" :change="change"></Subnav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    sublist: Array,
    change: Function
  },
  created() {}
};
</script>

<style lang='scss' scoped>
.subnav {
  margin-left: 47px;
  margin-bottom: 17px;
}
</style>