<template>
  <div class="gift">
    <Header>
      <p class="title">沐恩礼品</p>
    </Header>
    <div class="giftlist">
      <div class="giftcont">
        <item v-for="(item,index) in list" :key="index" :img="item.img" :classname="'right'" :callback="goDetail" :item="item">
          <div>
            <h4>{{item.type}}</h4>
            <p>精美礼品{{item.desc}}</p>
            <p class="price">￥{{item.price}}</p>
          </div>
        </item>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "@/mock";
import item from "@/components/item/item.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    axios.get("/giftlist").then(res => {
      this.list = res.data.list;
      this.$nextTick(() => {
        new BScroll(".giftlist",{
            click:true
        });
      });
    });
  },
  components: {
    item
  },
  methods:{
      goDetail(item){
          this.$router.push({path:"/detail",query:{item}})
      }
  }
};
</script>

<style lang="scss">
.gift {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.giftlist {
  flex: 1;
  overflow: hidden;
  .giftcont {
    padding-top: 9px;
    dl {
      border-radius: 4px;
      height: 89px;
      margin: 9px 9px 13px 7px;
      padding-top: 14px;
      padding-left: 15px;
      background: #fff;
      dt {
        margin-right: 10px;
        img {
          width: 98px;
          height: 66px;
        }
      }
      dd {
          line-height: 22px;
          h4{
              font-size: 14px;
          }
        p {
          font-size: 12px;
          &.price {
            color: rgba(212, 48, 48, 1);
          }
        }
      }
    }
  }
}
</style>