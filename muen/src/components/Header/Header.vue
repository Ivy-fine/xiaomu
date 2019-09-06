<template>
  <div class="header">
      <b v-if="back" @click="goback">&lt;</b>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
        back:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        goback(){
            // console.log(this.$router)
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        background: #fff;
        height: 52px;
        line-height: 52px;
        display: flex;
        align-items: center;
        position: relative;
        .title{
            width: 100%;
            text-align: center;
        }
        b{
            position: absolute;
            left: 20px;
            font-size: 30px;
        }
        .more{
            position: absolute;
            right: 20px;
            font-size: 14px;
        }
    }
</style>