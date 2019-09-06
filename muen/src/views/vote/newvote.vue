<template>
  <div class="newvote">
    <Header>
      <p class="title">发起投票</p>
    </Header>
    <div class="form">
      <p>
        <span>标题</span>
        <input type="text" placeholder="输入标题" v-model="title" />
      </p>
      <div>
        <span>描述</span>
        <input type="text" placeholder="输入内容（选填）" v-model="info" />
      </div>
      <div class="opt" v-for="(item,index) in chooseList" :key="index">
        <div class="left">
          <span>选项{{index+1}}：</span>
          <span>{{item.text}}</span>
        </div>
        <b class="chooseBtn del" @click="delOpt(item.id)">-</b>
      </div>
      <div class="opt">
        <div class="left">
          <input type="text" placeholder="请输入选项内容最长输入20个字" v-model="choose" />
        </div>
        <b class="chooseBtn" @click="addOpt">+</b>
      </div>
      <div class="sel">
        <el-select v-model="isSingle" placeholder="请选择单选多选">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="sel">
        <el-select v-model="anonymity" placeholder="是否匿名">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="end">
        <span>截止日期</span>
        <div class="timepicker">
          <el-date-picker
            v-model="edate"
            type="date"
            placeholder="选择日期"
            class="time"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <el-time-picker v-model="etime" placeholder="请选择时间" class="time" value-format="HH:mm:ss"></el-time-picker>
        </div>
      </div>
    </div>
    <div class="bottom">
      <button @click="publish">发布</button>
    </div>
  </div>
</template>

<script>
import { newVote } from "@/api/api";
export default {
  data() {
    return {
      etime: "",
      edate: "",
      title: "",
      info: "",
      anonymity: "",
      isSingle: "",
      chooseList: [],
      choose: "",
      userId: "",
      options1: [
        {
          label: "单选",
          value: "0"
        },
        {
          label: "多选",
          value: "1"
        }
      ],
      options2: [
        {
          label: "是",
          value: "0"
        },
        {
          label: "否",
          value: "1"
        }
      ]
    };
  },
  methods: {
    async publish() {
      if (
        !!this.etime &&
        !!this.edate &&
        !!this.isSingle &&
        !!this.anonymity &&
        !!this.title
      ) {
        let res = await newVote({
          endTime: this.edate + " " + this.etime,
          startTime: new Date(),
          isSingle: this.isSingle * 1,
          anonymity: this.anonymity * 1,
          chooseList: this.chooseList,
          userId: localStorage.userId * 1,
          title: this.title,
          info: this.info
        });
        this.$message({
          message: res.message,
          type: "success"
        });
        this.$router.push("/vote")
      } else {
        this.$message({
          message: "发布失败",
          type: "error"
        });
      }
    },
    addOpt() {
      if (this.choose !== "")
        this.chooseList.push({ id: new Date() * 1, text: this.choose });
      this.choose = "";
    },
    delOpt(id) {
      this.chooseList = this.chooseList.filter(item => item.id != id);
    }
  }
};
</script>

<style lang="scss" scoped>
.newvote {
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.form {
  flex: 1;
  padding-left: 14px;
  color: rgba(80, 80, 80, 1);
  font-size: 14px;

  span {
    margin-right: 24px;
  }
  input {
    text-indent: 5px;
    border-radius: 2px;
    border: rgba(153, 153, 153, 1) solid 1px;
    &::placeholder {
      color: rgba(166, 166, 166, 1);
    }
  }
  p {
    height: 30px;
    margin-bottom: 11px;
    input {
      width: 160px;
      height: 30px;
    }
  }
  div {
    display: flex;
    align-items: center;
    input {
      width: 250px;
      height: 60px;
    }
  }
}
div.opt {
  height: 48px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  .left {
    flex: 1;
  }
  input {
    width: 270px;
    height: 35px;
    margin-left: 7px;
  }
  b.chooseBtn {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    line-height: 23px;
    text-align: center;
    font-size: 25px;
    background: rgba(0, 186, 173, 1);
    color: #fff;
    margin-right: 19px;
    &.del {
      background: rgba(212, 48, 48, 1);
    }
  }
}
.sel {
  margin-top: 8px;
  .el-input__inner {
    height: 32px;
    width: 165px;
    border: none;
  }
}
.end {
  margin-bottom: 14px;
  margin-top: 18px;
  display: flex;
  span {
    align-self: flex-start;
  }
}
.timepicker {
  display: flex;
  flex-direction: column;
}
.time {
  width: 160px;
  height: 32px;
  margin-bottom: 14px;
}
.bottom {
  display: flex;
  justify-content: center;
  padding-bottom: 8px;
  button {
    width: 281px;
    height: 35px;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(42, 130, 228, 1);
    border-radius: 4px;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    outline: none;
    border: none;
  }
}
</style>