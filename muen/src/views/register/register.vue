<template>
  <div class="register">
    <h3>沐恩之家欢迎你~</h3>
    <input type="text" placeholder="用户名" v-model="username" />
    <input type="text" placeholder="姓名" v-model="rname" />
    <input type="password" placeholder="密码" v-model="pwd" />
    <input type="password" placeholder="确认密码" v-model="spwd" />
    <button @click="getRegister">注册</button>
  </div>
</template>

<script>
// import axios from '@/utils/http'
import { register } from "@/api/api";
export default {
  data() {
    return {
      username: "",
      rname: "",
      pwd: "",
      spwd: ""
    };
  },
  methods: {
    async getRegister() {
      if (this.pwd === this.spwd) {
        let res = await register({
          userName: this.username,
          password: this.pwd,
          realName: this.rname
        });
        if (res.code === 1) {
          this.$router.push({ path: "/login" });
        }
      } else {
        this.$message({
          message: "密码不一致",
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.register {
  width: 100%;
  height: 100%;
  h3 {
    padding-top: 100px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: normal;
  }
  input,
  button {
    width: 60%;
    margin: 0 20%;
    height: 40px;
    margin-top: 20px;
    border-radius: 5px;
    padding-left: 5px;
    border: 1px solid #ccc;
    outline: none;
  }
  button {
    background: #fff;
    border-color: #666;
    &:active {
      background: #eee;
    }
  }
}
</style>