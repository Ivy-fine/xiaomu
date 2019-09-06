<template>
  <div class="vote">
    <Header :back="true">
      <p class="title">投票</p>
      <span class="more" @click="gotoNewvote">发起投票</span>
    </Header>
    <tabbar class="votelist" :sublist="sublist" :change="change">
      <div class="tabcont">
        <div class="tablist">
          <item v-for="(item,index) in curlist" :key="index" :img="require('@/assets/logo.png')" :classname="'right'">
            <template>
               <div>
                <p class="title">muen昵称</p>
                <p>截止到 {{new Date(item.endTime).toLocaleString("chinese",{hour12:false})}}</p>
          </div>
          <div>
              <p>{{item.title}}</p>
              <p>{{item.isSingle?"多选":"单选"}}</p>
          </div>
            </template>
          </item>
        </div>
      </div>
    </tabbar>
  </div>
</template>

<script>
// import axios from "@/utils/http"
import { getallVote } from "@/api/api";
import item from "@/components/item/item.vue";
import tabbar from "@/components/tabbar/tabbar.vue";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      sublist: [{ title: "全部" }, { title: "已结束" }, { title: "正在进行" }],
      votelist: [],
      curlist: []
    };
  },
  components: {
    item,
    tabbar
  },
  methods: {
    change(index) {
      let now = new Date() * 1;
      if (index == 1) {
        this.curlist = this.votelist.filter(item => {
          return new Date(item.endTime) * 1 < now;
        });
      } else if (index == 2) {
        this.curlist = this.votelist.filter(item => {
          return new Date(item.endTime) * 1 >= now;
        });
      } else {
        this.curlist = this.votelist;
      }
    },
    gotoNewvote() {
      this.$router.push("/newvote");
    }
  },
  created() {
    getallVote().then(res => {
      this.votelist = res;
      this.curlist = res;
    });
    this.$nextTick(() => {
        new BScroll(".tabcont");
      });
  }
};
</script>

<style lang="scss">
.vote {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.votelist {
  padding-top: 9px;
  flex: 1;
  overflow: hidden;
}
.tabcont {
  height: 100%;
  overflow: hidden;
}
.tablist{

 dl{
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
}

</style>