<template>
  <div class="toast">
      <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.toast{
    width: 80%;
    height: 50px;
    background: rgba($color: #000000, $alpha: .6);
    border-radius: 25px;
    text-align: center;
    color: #eee;
    line-height: 50px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>