<template>
  <dl :class="classname" @click="callback(item)">
    <dt>
      <img :src="img" alt />
    </dt>
    <dd>
      <slot></slot>
    </dd>
  </dl>
</template>

<script>
export default {
  props: {
    img: String,
    classname: String,
    callback:Function,
    item:Object
  }
};
</script>

<style lang="scss">
dl.right {
  display: flex;
}

</style>