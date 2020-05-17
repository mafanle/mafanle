<template>
  <div id="app">
    <toplist></toplist>
    <div class="content">
      <el-row>
        <el-col v-for="(item,index) in list" :key="index" :span="6">
          <div @click="show($event,index)" class="animate__animated animate__fadeInUp fuck">
            <div class="neirong">
              <el-image :src="item.img" :data-index="index" lazy></el-image>
              <div class="text" :data-index="index">
                <div class="username">王家为</div>
                <div style=" clear: both;"></div>
                <div class="zhengwen">
                  <p>撒旦伟大时代萨达挖的啊撒大网的阿三大王大苏打哇大撒哇撒大sdsda</p>
                </div>
                <div class="time">
                  <p>2小时前</p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <div>
        <button class="mybutton" @click="jiazai">加载更多</button>
      </div>
    </div>
    <div class="jumu" v-show="xianshi">
      <div class="guanbi" @click="guanbi">x</div>
      <div class="jmneirong">
        <div class="jmimg">
          <img src="/images/shiyan1.jpg" alt />
        </div>
        <div class="jmtext">
          <div class="avat">
            <router-link to="/login">
              <img src="/images/shiyan1.jpg" alt />
            </router-link>
            <router-link to="/login">hello</router-link>
          </div>
          <p>hello</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      list: [
        {
          img: "/images/shiyan.jpg",
          hello: 1
        },
        {
          img: "/images/shiyan2.jpg",
          hello: 11
        },
        {
          img: "/images/shiyan.jpg",
          hello: 12
        },
        {
          img: "/images/shiyan.jpg",
          hello: 13
        },
        {
          img: "/images/shiyan.jpg",
          hello: 14
        },
        {
          img: "/images/shiyan.jpg",
          hello: 15
        },
        {
          img: "/images/shiyan.jpg",
          hello: 16
        },
        {
          img: "/images/shiyan.jpg",
          hello: 17
        },
        {
          img: "/images/shiyan.jpg",
          hello: 18
        },
        {
          img: "/images/shiyan.jpg",
          hello: 19
        },
        {
          img: "/images/shiyan.jpg",
          hello: 20
        },
        {
          img: "/images/shiyan.jpg",
          hello: 1
        },
        {
          img: "/images/shiyan.jpg",
          hello: 1
        },
        {
          img: "/images/shiyan.jpg",
          hello: 1
        },
        {
          img: "/images/shiyan.jpg",
          hello: 1
        },
        {
          img: "/images/shiyan.jpg",
          hello: 1
        },
        {
          img: "/images/shiyan.jpg",
          hello: 1
        },
        {
          img: "/images/shiyan.jpg",
          hello: 1
        }
      ],
      xianshi: false
    };
  },

  methods: {
    show(e, index) {
      this.xianshi = true;
      console.log(index);
    },
    guanbi() {
      this.xianshi = false;
    },
    jiazai() {
      this.list.push(
        {
          img: "/images/shiyan.jpg",
          hello: 1
        },
        {
          img: "/images/shiyan2.jpg",
          hello: 11
        },
        {
          img: "/images/shiyan.jpg",
          hello: 12
        },
        {
          img: "/images/shiyan.jpg",
          hello: 13
        },
        {
          img: "/images/shiyan.jpg",
          hello: 14
        },
        {
          img: "/images/shiyan.jpg",
          hello: 15
        },
        {
          img: "/images/shiyan.jpg",
          hello: 16
        },
        {
          img: "/images/shiyan.jpg",
          hello: 17
        },
        {
          img: "/images/shiyan.jpg",
          hello: 18
        },
        {
          img: "/images/shiyan.jpg",
          hello: 19
        }
      );
    }
  },
  mounted() {
          console.log(localStorage.getItem('data'));
          
    }
};
</script>
<style scoped>
.mybutton:hover {
  background: #f1f2f6;
}
.mybutton {
  width: 60%;
  height: 35px;
  background: repeat;
  border: none;
}
.content {
  width: 80%;
  margin: 30px auto;
}
.neirong {
  margin: 5px;
  border: 1px solid red;
}
img {
  width: 100%;
}
.text {
  text-align: left;
  margin-top: 16px;
  font-size: 12px;
  padding-left: 10px;
  padding-bottom: 20px;
}
.zhengwen {
  margin-bottom: 12px;
  margin-top: 12px;
}
.jumu {
  height: 100vh;
  width: 100%;
  background: rgba(00, 00, 00, 0.5);
  position: fixed;
  z-index: 1000;
  top: 0;
}
.guanbi {
  width: 40px;
  height: 40px;
  font-size: 40px;
  color: #fff;
  float: right;
}
.jmneirong {
  display: flex;
  width: 950px;
  background: #f1f2f6;
  margin: auto;
  position: absolute; /*设定水平和垂直偏移父元素的50%，
再根据实际长度将子元素上左挪回一半大小*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.jmtext {
  width: 35%;
  background: #ffffff;
  text-align: left;
  padding-left: 24px;
  padding-right: 24px;
}
.jmimg {
  display: flex;
  align-items: center;
  min-height: 450px;
  flex: 1;
}
.avat img {
  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.avat a {
  margin-left: 12px;
  display: block;
  color: #57606f;
  text-decoration: none;
}
.avat {
  padding-bottom: 24px;
  padding-top: 24px;
  display: flex;
  line-height: 60px;
}
.avat a:hover {
  color: #ff6348;
}
</style>