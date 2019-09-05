<template>
  <div class="subnav">
      <span v-for="(item,index) in sublist"
        :key="index"
        :class="{active:curIndex==index}"
        @click="$emit('change',index)"
      >
        {{item.title}}
      </span>
    </div>
</template>

<script>
export default {
    props:{
        sublist:Array,
        curIndex:Number
    }
}
</script>

<style lang="scss" scoped>
.subnav{
  width: 280px;
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
  display: flex;
  border: 1px solid rgba(255, 87, 51, 1);
  span{
    flex: 1;
    font-size: 14px;
    text-align: center;
    color: rgba(255, 87, 51, 1);
    border-right: 1px solid rgba(255, 87, 51, 1);
    &.active{
      background: rgba(255, 87, 51, 1);
      color: #fff;
    }
    &:last-of-type{
      border-right: none;
    }
  }
}
</style>