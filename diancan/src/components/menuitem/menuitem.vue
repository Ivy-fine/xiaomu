<template>
  <div>
    <h5>{{name}}</h5>
    <dl v-for="(item,index) in foods" :key="index">
      <dt>
        <img :src="item.icon" alt />
      </dt>
      <dd>
        <h4>{{item.name}}</h4>
        <p class="price">￥{{item.price}}</p>
        <p class="count">
          <span
            @click="changecount({index:ind,subindex:index,count:item.count-1})"
            v-if="item.count>0"
            class="down"
          >-</span>
          <span v-if="item.count>0">{{item.count}}</span>
          <span @click="changecount({index:ind,subindex:index,count:item.count+1})" class="up">+</span>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    name: String,
    foods: Array,
    ind: Number
  },
  methods: {
    ...mapMutations(["changecount"])
  }
};
</script>

<style lang="scss" scoped>
h5 {
  line-height: 30px;
  font-weight: normal;
}
dl {
  display: flex;
  padding-bottom: 20px;
  dt {
    width: 80px;
    height: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  dd {
    flex: 1;
    padding-left: 10px;
    h4 {
      font-size: 16px;
    }
    p {
      line-height: 30px;
      span {
        padding: 10px;
      }
      &.price {
        color: #f90;
      }
      &.count {
        text-align: right;
        padding-right: 20px;
        span {
          display: inline-block;
          height: 20px;
          line-height: 20px;
          padding: 0;
          text-align: center;
          padding: 0 10px;
          &.down,
          &.up {
            width: 20px;
            line-height: 18px;
            padding: 0;
            border: 1px solid #999;
            border-radius: 50%;
            background: #fff;
          }
          &.up {
            background: #f90;
            border: 1px solid #f90;
          }
        }
      }
    }
  }
}
</style>