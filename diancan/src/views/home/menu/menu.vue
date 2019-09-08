<template>
  <div class="list">
    <div class="cont">
      <div class="left">
        <ul>
          <li
            v-for="(item,index) in list"
            :key="index"
            :class="{active:ind==index}"
            @click="changeind(index)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right">
        <div class="rightlist" ref="rightlist">
          <menu-item
            v-for="(item,index) in list"
            :key="index"
            :name="item.name"
            :foods="item.foods"
            :ind="index"
          ></menu-item>
        </div>
      </div>
    </div>
    <p class="bottom">总价：￥ {{sumPrice}} , 总数：{{sumCount}}</p>
  </div>
</template>

<script>
import BScroll from "better-scroll";
// import axios from "axios";
// import "@/mock";
import menuItem from "@/components/menuitem/menuitem.vue";
import { mapState,mapActions,mapGetters } from 'vuex'
export default {
  data() {
    return {
      // list: [],
      ind: 0,
      leftBs: null,
      rightBs: null,
      scrollH:0,
      scrollHeight:[]
    };
  },
  components: {
    menuItem
  },
  async created() {
    // axios.get("/getlist").then(res => {
    //   this.list = res.data.goods;
    //   this.$nextTick(() => {
    //     this.init();
    //     this.getScrollHeight()
    //   });
    // });
    await this.getlist();
    this.$nextTick(() => {
        this.init();
        this.getScrollHeight()
      });
  },
  methods: {
    ...mapActions(['getlist']),
    init() {
      this.leftBs = new BScroll(".left", {
        click: true
      });
      this.rightBs = new BScroll(".right", {
        click: true,
        probeType: 3
      });
      this.rightBs.on("scroll",(res)=>{
        this.scrollH=Math.abs(res.y)
        this.ind=this.curIndex
      });
    },
    changeind(index) {
      this.ind = index;
      let children = this.$refs.rightlist.children;
      this.rightBs.scrollToElement(children[index], 300);
    },
    getScrollHeight(){
      this.scrollHeight.push(this.scrollH)
      let children = this.$refs.rightlist.children;
      for(let i=0;i<children.length;i++){
        this.scrollH += children[i].offsetHeight
        this.scrollHeight.push(this.scrollH)
      }
      console.log(this.scrollHeight)
    }
  },
  computed:{
    ...mapState(['list']),
    ...mapGetters(['sumPrice','sumCount']),
    curIndex(){
      for(let i=0;i<this.scrollHeight.length;i++){
        let h1=this.scrollHeight[i]
        let h2=this.scrollHeight[i+1]
        if(h2 && this.scrollH < h2 && this.scrollH >= h1){
          return i;
        }
      }
    }
  }
};
</script>

<style lang="scss">
.list {
  display: flex;
  flex-direction: column;
  .cont {
    flex: 1;
    display: flex;
  }
  .bottom {
    padding-left: 20px;
    height: 50px;
    line-height: 50px;
    background: #333;
    color: #fff;
  }
}
.left {
  width: 100px;
  background: #eee;
  height: 100%;
  overflow: hidden;
  ul {
    li {
      padding: 15px 0;
      color: #333;
      text-align: center;
      font-size: 14px;
      &.active {
        color: #000;
        font-weight: bold;
        background: #fff;
      }
    }
  }
}
.right {
  flex: 1;
  height: 100%;
  overflow: hidden;
  .rightlist {
    padding-left: 10px;
  }
}
</style>