<template>
  <div>
      <h5>{{name}}</h5>
      <dl v-for="(item,index) in foods" :key="index">
          <dt>
              <img :src="item.icon" alt="">
          </dt>
          <dd>
              <h4>{{item.name}}</h4>
              <p class="price">￥{{item.price}}</p>
              <p class="count">
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>
              </p>
          </dd>
      </dl>
  </div>
</template>

<script>
export default {
    props:{
        name:String,
        foods:Array
    }
}
</script>

<style lang="scss" scoped>
h5{
    line-height: 30px;
    font-weight: normal;
}
    dl{
        display: flex;
        dt{
            width: 80px;
            height: 80px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        dd{
            flex:1;
            padding-left: 10px;
            h4{
                font-size: 16px;
            }
            p{
                line-height: 30px;
                span{
                    padding: 10px;
                }
                &.price{
                    color: #f90;
                }
                &.count{
                    text-align: right;
                }
            }
        }
    }
</style>