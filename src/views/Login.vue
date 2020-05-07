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
        <input type="password" v-model="password"  placeholder="密码
      " />
        <span></span>
      </div>
      <input type="submit" name value="ENTER" @click="login" />
      <div class="hello">
        没有账号?
        <a href="#">立即注册</a>
      </div>
    </div>
    <div v-show="xianshi">你妈死了</div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            username:12345,
            password:123,
            xianshi:false
        }
    },
    methods:{
        login(){
            this.axios.get('/hello').then(
                res=>{
                     if (res.data.code==1) {
                         this.$router.push('/')
                     }else{
                         this.xianshi = true
                     }
                }
            )
           
        }
    }
}
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