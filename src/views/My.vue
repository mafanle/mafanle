<template>
  <div>
    <toplist></toplist>
    <div class="content">
      <header class="imgcontent">
        <table></table>
        <img src="/images/shiyan3.png" alt />
        <div class="grxx">
          <p>{{username}}</p>
          <input v-model="qianming" type="text" />
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      qianming: ""
    };
  },
  computed: {
    ...mapState(["id", "username"])
  },
  mounted() {
    //写在mounted或者activated生命周期内即可
    window.onbeforeunload = e => {
      //刷新时弹出提示
      var data = new Date();
      localStorage.setItem("data", data.getTime());
      console.log(data.getTime());
    };
  }
};
</script>
<style scoped>
.content {
  width: 80%;
  margin: 30px auto;
  background: pink;
  height: 100vh;
}
.imgcontent {
  height: 130px;
  padding-top: 120px;
  background: chartreuse;
  position: relative;
}
.imgcontent img {
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: 50px;
}
.grxx {
  position: absolute;
  top: 149px;
  left: 171px;
  text-align: left;
}
.grxx input {
  border: none;
  background: rgba(00, 00, 00, 0.2);
  height: 25px;
  border-radius: 4px;
  width: 600px;
  margin-top: 10px;
}
.grxx input:hover {
  background: rgba(00, 00, 00, 0.3);
}
</style>