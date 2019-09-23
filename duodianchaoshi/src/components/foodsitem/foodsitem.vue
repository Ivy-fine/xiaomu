<template>
  <div class="foodsitem" @click="gotoDetail(item)">
      <div class="img">
          <slot></slot>
      </div>
      <p>{{item.title}}</p>
      <p class="price"><span>￥{{item.price}}</span><button @click.stop="add(item)">+</button></p>
        <toast v-show="flag">成功加入购物车</toast>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import toast from '../toast/toast'
export default {
    data(){
        return{
            flag:false,
            timer:null
        }
    },
    props:{
        item:Object
    },
    methods:{
        ...mapMutations(['addCart']),
        gotoDetail(item){
            this.$router.push('/detail/'+item.id)
        },
        add(obj){
            clearInterval(this.timer)
            this.flag = true;
            this.addCart(obj)
            this.timer = setInterval(() => {
                this.flag = false;
            }, 500);
        }
    },
    components:{
        toast
    },
    beforeDestroy(){
        clearInterval(this.timer)
    }
}
</script>

<style lang="scss">
    .foodsitem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        .img{
            width: 100%;
            img{
                width: 100%;
                height: 120px;
            }
        }
        p{
            line-height: 30px;
        }
        .price{
            width: 100%;
            color: #f90;
            display: flex;
            justify-content: space-between;
            button{
                border: 1px solid #f90;
                background: none;
                color: #f90;
                padding:0 5px;
            }
        }
    }
</style>