<template>
  <div class="header">
    <el-row class="content">
      <el-col :span="4">
        <div>分享你的生活</div>
      </el-col>
      <el-col :span="11">
        <div>
          <el-input placeholder="发现更多" v-model="input" size="small" class="my-input"></el-input>
          <div class="searchct">
            <el-button icon="el-icon-search" circle size="small" class="my-search" @click="search"></el-button>
          </div>
        </div>
      </el-col>
      <el-col :pull="1" :span="9" v-if="!$store.state.isLogined" justify="start">
        <div class="top">
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
        <div class="top">
          <ul @mouseover="hello">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li :data-index="'my'">
              <router-link :data-index="'my'" to="/my">我的</router-link>
              <transition
                enter-active-class="animate__animated animate__fadeIn"
                leave-active-class="animate__animated animate__fadeOut"
              >
                <div
                  class="shiyan"
                  @mouseenter="mylist"
                  @mouseleave="handleHide"
                  v-if="xianshi=='my'"
                >
                  <div class="imgdiv">
                    <router-link :data-index="'my'" to="/my">
                      <img :src="userimg" alt />
                    </router-link>
                  </div>
                  <div class="guanzhu">
                    <table>
                      <tr>
                        <td>关注</td>
                        <td>粉丝</td>
                        <td>动态</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </transition>
            </li>
            <li :data-index="'xiaoxi'">
              <el-badge :value="200" :max="99" class="item">
                <router-link :data-index="'xiaoxi'" to="/my">消息</router-link>
              </el-badge>
            </li>
            <li>反馈</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style >
.el-badge__content.is-fixed{
  top:15px;
}
.guanzhu
 {
  display: flex;
  justify-content: space-around;
}
td {
  padding-left: 10px;
  padding-right: 10px;
}
.guanzhu {
  margin-top: 20px;
}
.imgdiv {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.imgdiv img {
  width: 70px;
  height: 70px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.searchct {
  position: relative;
}
.my-search {
  position: absolute;
  right: 35px;
  top: -46px;
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
a:hover {
  color: #ff7f50;
}
.shiyan {
  border-radius: 4px;
  width: 300px;
  height: 350px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(00, 00, 00, 0.3);
  position: absolute;
  right: 24px;
  top: 51px;
  z-index: 1000;
  text-align: center;
}

.header {
  width: 100%;
  border-bottom: #dfe4ea solid 0.5px;
}
.content {
  width: 1215px;
  height: 60px;
  line-height: 60px;
  font-size: larger;
  margin: 0 auto;
}
.top ul {
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
}
.top ul li {
  margin-right: 30px;
}
</style>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      xianshi: "",
      xiao: false,
      input: ""
    };
  },
  computed: {
    ...mapState(["id", "username", "userimg"])
  },
  methods: {
    hello(e) {
      if (
        e.target.nodeName.toLowerCase() == "a" ||
        e.target.nodeName.toLowerCase() === "li"
      ) {
        this.xianshi = e.target.dataset.index;
      }
    },
    handleHide() {
      this.xianshi = "";
    },
    myxingxi() {
      this.xianshi = "xiaoxi";
    },
    mylist() {
      this.xianshi = "my";
    },
    search() {
      this.axios.get("/search?search=" + this.input).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.axios.get("/hello").then(res => {
      console.log(res);
    });
  }
};
</script>