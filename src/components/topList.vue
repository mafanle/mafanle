<template>
  <div class="header">
    <el-row class="content">
      <el-col :span="4">
        <div>分享你的生活</div>
      </el-col>
      <el-col :span="11">
        <div>
          <el-input placeholder="发现更多" v-model="input" size="small" class="my-input"></el-input>
          <el-button icon="el-icon-search" circle size="small" class="my-search" @click="search"></el-button>
        </div>
      </el-col>
      <el-col :pull='1'  :span="9" v-if="show" justify="start">
        <div>
          <ul>
            <li>
              <router-link to="/register">注册</router-link>
            </li>
            <li>
              <router-link to="/login">登录</router-link>
            </li>
            <li>帮助</li>
          </ul>
        </div>
      </el-col>
      <el-col :pull="1" :span="9" v-else class="weizhi">
        <div class="daohang">
          <ul @mouseover="hello">
            <li>首页</li>
            <li :data-index="'123'">
              我的
              <transition
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <div
                  class="shiyan"
                  @mouseenter="mylist"
                  @mouseleave="handleHide"
                  v-if="xianshi=='fuck'"
                ></div>
              </transition>
            </li>
            <li :data-index="'fuck'">
              消息
              <transition
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <div
                  class="shiyan2"
                  @mouseenter="myxingxi"
                  @mouseleave="handleHide"
                  v-if="xianshi=='123'"
                ></div>
              </transition>
            </li>
            <li>反馈</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.my-search {
  position: relative;
  right: 35px;
  border: none;
}
.my-input {
  width: 80%;
  margin-left: 60px;
}
a {
  color: #57606f;
  text-decoration: none;
}
.shiyan {
  width: 100px;
  height: 100px;
  background: aqua;
  position: absolute;
  right: 216px;
  top: 41px;
}
.shiyan2 {
  width: 100px;
  height: 100px;
  background: chartreuse;
  position: absolute;
  right: 70px;
  top: 41px;
}
.header {
  width: 100%;
  border-bottom: #dfe4ea solid 0.5px;
}
.content {
  width: 80%;
  height: 60px;
  line-height: 60px;
  font-size: larger;
  margin: 0 auto;
}
ul {
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
}
ul li {
  margin-right: 30px;
}
</style>

<script>
export default {
  data() {
    return {
      show: true,
      xianshi: "",
      xiao: false,
      input: ""
    };
  },
  methods: {
    hello(e) {
      console.log(e.target.dataset.index);
      if (e.target.nodeName.toLowerCase() === "li") {
        this.xianshi = e.target.dataset.index;
      }
    },
    handleHide() {
      this.xianshi = "";
    },
    myxingxi() {
      this.xianshi = "123";
    },
    mylist() {
      this.xianshi = "fuck";
    },
    search() {
      this.axios.get("/search?search=" + this.input).then(res => {
        console.log(res);
      });
    }
  }
};
</script>