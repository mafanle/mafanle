<template>
  <div class="content">
    <div>这里是登录页</div>
    <div class="login">
      <h1>登录</h1>
      <div class="txt">
        <input type="text" v-model="username" placeholder="账号/手机号/用户名" />
        <span></span>
      </div>
      <div class="txt">
        <input type="password" v-model="password" placeholder="密码
      " />
        <span></span>
      </div>
      <input type="submit" name value="ENTER" @click="login" />
      <div class="hello">
        没有账号?
        <router-link to="/register">立即注册</router-link>
      </div>
    </div>
    <div v-show="xianshi">你妈死了</div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
      xianshi: false
    };
  },
  methods: {
    ...mapMutations(["logined"]),
    login() {
      this.axios
        .post(
          "/login",
          "username=" + this.username + "&password=" + this.password
        )
        .then(res => {
          if (res.data.code == 0) {
            this.$message("账号或密码错误");
          } else {
            var result = res.data.result[0];
            console.log(result);

            //登录成功 修改state的状态
            this.logined({
              id: result.yid,
              username: result.username,
              userimg: result.userimg,
              usersigna: result.usersigna
            });
            //将服务器返回的id,username等相关信息存储到webstorage
            localStorage.setItem("id", result.yid);
            localStorage.setItem("username", result.username);
            localStorage.setItem("userimg", result.userimg);
            localStorage.setItem("islogin", true);
            localStorage.setItem("usersigna",result.usersigna);
            if (this.$route.query.path) {
              this.$router.push(this.$route.query.path);
            } else {
              this.$router.push("/");
            }
          }
        });
    }
  },
  mounted() {
    console.log(localStorage.getItem("islogin"));

    if (localStorage.getItem("islogin")) {
      this.$router.push("/");
    }
  }
};
</script>
<style  scoped>
.content {
  min-height: 100vh;
  background-image: linear-gradient(120deg, #4b7bec, #fc5c65);
}
.login {
  background-color: white;
  width: 350px;
  height: 560px;
  padding: 40px 40px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login h1 {
  text-align: center;
  margin-bottom: 55px;
  font-size: 30px;
}

.txt {
  border-bottom: 2px solid #747d8c;
  position: relative;
  margin: 60px 0;
}

.txt input {
  font-size: 20px;
  color: #2c3e50;
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0 10px;
  height: 50px;
}
input {
  display: block;
  width: 100%;
  height: 40px;
  border-radius: 25px;
  border: none;
  background: linear-gradient(120deg, #4b7bec, #fc5c65);
  background-size: 200%;
  color: #fff;
}
input:hover {
  background-position: right;
}
.hello {
  text-align: center;
  margin-top: 90px;
}

.focus + span::before {
  top: -5px;
}

.focus + span::after {
  width: 100%;
}
</style>