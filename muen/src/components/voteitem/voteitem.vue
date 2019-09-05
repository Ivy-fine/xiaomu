<template>
  <div class="voteitem">
      <div class="usericon">
          <img :src="require('@/assets/logo.png')" alt="">
      </div>
      <div class="cont">
          <p class="title">{{voteitem.title}}</p>
          <p>截止到 {{endtime}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        voteitem:Object
    },
    computed:{
        endtime(){
            return new Date(this.voteitem.endTime).toLocaleString()
        }
    }
}
</script>

<style lang="scss" scoped>
    .voteitem{
        display: flex;
        width: 348px;
        height: 71px;
        margin: 0 auto;
        background: #fff;
        margin-bottom: 11px;
        .usericon{
            width: 44px;
            flex-shrink: 0;
            height: 44px;
            margin-top: 9px;
            margin-left: 8px;
            margin-right: 8px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid #ccc;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .cont{
            height: 71px;
            padding-top: 10px;
            font-size: 14px;
            line-height: 150%;
            .title{
                font-size: 16px;
            }
        }
    }
</style>