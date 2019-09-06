<template>
  <div class="group">
    <Header>
      <p class="title">
          <b>🔍</b>
        <input type="text" placeholder="搜索小组" />
      </p>
    </Header>
    <div class="main">
      <div class="hr"></div>
      <div class="grouplist">
        <h4><span>所有小组</span><span class="all">查看全部</span> </h4>
        <div class="groupcont">
          <item v-for="(item,index) in list" :key="index" :img="item.groupIcon" :classname="'top'">
            {{item.groupName}}
          </item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import item from '@/components/item/item.vue'
import { getgrouplist} from "@/api/api"
export default {
  data(){
    return {
      list:[]
    }
  },
  components:{
    item
  },
  methods:{
  },
  created(){
    getgrouplist().then(res=>{
      this.list=res.result;
    })
  }
};
</script>

<style lang="scss" >
.group {
  width: 100%;
  height: 100%;
}
.header{
    background: none;
    .title {
    text-align-last: left;
      margin-left: 62px;
    position: relative;
    b{
        width: 24px;
        height: 24px;
        position: absolute;
        left: 30px;
        top: 15px;
        font-size: 14px;
        line-height: 24px;
        text-align: center;
    }
    input {
      width: 270px;
      height: 35px;
      color: rgba(80, 80, 80, 1);
      background-color: rgba(229, 229, 229, 1);
      border-radius: 18px;
      font-size: 14px;
      border: 1px solid rgba(229, 229, 229, 1);
      outline: none;
      text-indent: 12px;
      padding-left: 44px;
    }
  }
}
.main{
  margin: 0 16px;
}
.hr{
  height: 1px;
  background: rgba(80, 80, 80, 1);
  margin-top: 14px;
  margin-bottom: 11px;
}
.grouplist{
  background: #fff;
   padding-left: 14px;
    padding-right: 12px;
    h4{
    font-weight: normal;
    font-size: 15px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span{
     &.all{
     color: rgba(42, 130, 228, 1);
     }
    }
  }
}
.groupcont{
  height: 226px;
  display: flex;
  overflow: auto;
  padding:6px 0; 
  dl {
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
}

</style>