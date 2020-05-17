<template>
  <div class="backimg" id="content">
    <div class="reg animate__animated animate__fadeInDownBig" >
      <div class="text" >
        <span>注册</span>
      </div>
      <div>
        <div class="inp">
          <input v-model="username" type="text"  placeholder="请输入账号"/>
        </div>
        <div class="inp">
          <input v-model="pwd" type="password"  placeholder="请输入密码"/>
        </div>
        <div class="inp">
          <input v-model="pwds" type="password" placeholder="重复密码"/>
        </div>
        <div class="inp">
          <el-button type="primary" round class="mybutton" @click="reg">注册</el-button>
        </div>
      </div>
    </div>
  
  </div>
</template>

<style scoped>
#content {
  position: relative;
  animation: mycontent 1s;
  background: url("/images/backimg.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
}
.tishi{
  width: 200px;
  height: 200px;
  background: aliceblue;

}
.text{
  margin-top: 40px;
}
.text span{
  font-size:xx-large;
  color: aliceblue;
}

.reg {
  border-radius: 8px;
  width: 500px;
  height: 350px;
  background: rgba(00, 00, 00, 0.3);
  
  position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
}
.inp {
  margin-top: 30px;
  text-align: center;
}
.inp input  {
  border: none;
  height: 30px;
  width: 70%;
  padding-left: 5px;
  border-radius: 4px;
}
.mybutton{
  padding: 10px 160px;
}

</style>
<script>
export default {
  data(){
    return{
      username:'',
      pwd:'',
      pwds:'',
      tishi:false
    }
  },
  methods: {
    menu() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (this.scroll > 0) {
        console.log(this.scroll);
        this.list = "listshow";
      } else {
        this.list = "listnone";
      }
    },
    reg(){
      var username = this.username.trim()
      var pwd = this.pwd.trim()
      var pwds = this.pwds.trim()
      console.log(username);
      
      if (username == '' || pwd=='' || pwds=='') {
        this.$message('请输入完整');
      }else if (pwd != pwds) {
        this.$message('密码不一致');
      }else {
         this.axios.post('/reg','username=' + username + '&password=' + pwd).then(res=>{
          if (res.data.code == 0) {
            this.$message('用户名已经存在');
          }else{
             this.$router.push('/login')
          } 
         })
      }
      
    }
  },
  mounted() {
    window.addEventListener("scroll", this.menu);
    var $content = document.getElementById("content");
    $content.style.height = document.documentElement.clientHeight + "px";
    this.yidong = "contentnone";
  }
};
</script>