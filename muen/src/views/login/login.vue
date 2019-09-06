<template>
  <div class="login">
    <h3>欢迎来到沐恩之家</h3>
    <input type="text" placeholder="用户名" v-model="username" />
    <input type="password" placeholder="密码" v-model="pwd" />
    <p>
      <span class="reg">立即注册</span>
      <span class="forget">忘记密码</span>
    </p>
    <button @click="getLogin">登录</button>
  </div>
</template>

<script>
import { login } from "@/api/api";
export default {
  data() {
    return {
      username: "",
      pwd: ""
    };
  },
  created() {},
  methods: {
    async getLogin() {
      let res = await login({
        userName: this.username,
        password: this.pwd
      });
      let redirect = this.$route.query.redirect;
      if (res.code === 1) {
        localStorage.token = res.token;
        localStorage.userId=res.userId;
        if (redirect) {
          this.$router.replace({ path: redirect });
        } else {
          this.$router.replace("/home");
        }
      } else if (res.code === -1) {
        this.$router.push({ path: "/register" });
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.login {
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
  p {
    width: 60%;
    margin: 0 20%;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 14px;
      &.reg {
        color: #f90;
      }
      &.forget {
        color: #999;
      }
    }
  }
  // button{
  //      width: 60%;
  //     margin: 0 20%;
  // }
}
</style>