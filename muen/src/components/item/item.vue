<template>
  <dl :class="classname">
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
    classname: String
  }
};
</script>

<style lang="scss">
dl.right {
  display: flex;
  width: 348px;
  height: 71px;
  margin: 0 auto;
  background: #fff;
  margin-bottom: 11px;
  dt {
    width: 44px;
    flex-shrink: 0;
    height: 44px;
    margin-top: 9px;
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #ccc;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    flex: 1;
    height: 71px;
    padding-top: 10px;
    font-size: 14px;
    line-height: 150%;
    padding-right: 13px;
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 7px;
      .title {
        font-size: 16px;
      }
    }
  }
}
dl.top {
  width: 20%;
  margin:0 2.5%;
  dt {
    width: 70px;
    height: 70px;
    border-radius: 6px;
    background: #ccc;
    margin-bottom: 7px;
    overflow: hidden;
    border: 1px solid #ccc;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    height: 19px;
    line-height: 150%;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
  }
}
</style>