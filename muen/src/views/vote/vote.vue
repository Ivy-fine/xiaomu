<template>
  <div class="vote">
    <Header :back="true">
      <p class="title">投票</p>
      <span class="more">发起投票</span>
    </Header>
    <!-- <div class="subnav">
      <span v-for="(item,index) in sublist"
        :key="index"
        :class="{active:curIndex==index}"
        @click="change(index)"
      >
        {{item.title}}
      </span>
    </div>-->

    <div class="votelist">
      <Subnav :sublist="sublist" :curIndex="curIndex" @change="change"></Subnav>
      <voteitem v-for="(item,index) in votelist" :key="index" :voteitem="item"></voteitem>
    </div>
  </div>
</template>

<script>
// import axios from "@/utils/http"
import { getallVote } from "@/api/api";
import voteitem from "@/components/voteitem/voteitem.vue";
export default {
  data() {
    return {
      sublist: [{ title: "全部" }, { title: "已结束" }, { title: "正在进行" }],
      curIndex: 0,
      votelist: []
    };
  },
  components: {
    voteitem
  },
  methods: {
    async getallVote() {
      let res = await getallVote();
      // console.log(res);
      this.votelist = res;
    },
    change(index) {
      this.curIndex = index;
    }
  },
  created() {
    this.getallVote();
  }
};
</script>

<style lang="scss" scoped>
.vote {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.votelist {
  padding-top: 9px;
  flex: 1;
  overflow-y: auto;
  .subnav {
    margin-left: 47px;
    margin-bottom: 17px;
  }
}
</style>