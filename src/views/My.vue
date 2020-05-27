<template>
  <div>
    <toplist></toplist>
    <div class="mycontent">
      <header class="imgcontent">
        <table></table>
        <div class="imgheader" @mouseenter="chuxian" @mouseleave="xiaoshi">
          <div class="xiugai" @click="drawer = true" v-show="touxiang">更改头像</div>
          <img :src="$store.state.userimg" alt />
        </div>
        <div class="grxx">
          <p>{{username}}</p>
          <input @blur="xiugai" v-model="qianming" type="text" />
        </div>
      </header>
    </div>
    <my-content :neirong="neirong"></my-content>
    <div>
      <button class="mybutton" @click="jiazai">加载更多</button>
    </div>
    <div>
      <up-load @gaibian="guanbi" v-if="drawer"></up-load>
    </div>
  </div>
</template>
 
<script>
import { mapState } from "vuex";
import MyContent from "../components/HelloWorld";
import UpLoad from "../components/upload";
export default {
  data() {
    return {
      qianming: "",
      neirong: [],
      xianshi: false,
      index: "",
      touxiang: false,
      drawer: false,
      page:0
    };
  },
  methods: {
    xiugai() {
      this.axios
        .get("/xiugai?qianming=" + this.qianming + "&yid=" + this.id)
        .then(res => {
          if (res.data) {
            this.$message("修改成功");
          } else {
            this.$message("修改失败 稍后再试");
          }
        });
    },
    chuxian() {
      this.touxiang = true;
    },
    xiaoshi() {
      this.touxiang = false;
    },
    guanbi(data) {
      this.drawer = data;
    },
    jiazai() {
      this.page++;
      this.axios.get("/myjiazai?id" +this.id+"&page="+this.page).then(res => {
        var res = res.data;
        if (res.code == 0) {
          this.$message("没有更多内容辣~");
        } else {
          for (var key of res) {
            var time = new Date(key.trendsTime);
            key.trendsTime = this.$date(time);
            this.neirong.push(key);
          }
        }
      });
    }
  },
  components: {
    MyContent,
    UpLoad
  },
  computed: {
    ...mapState(["id", "username", "userimg"])
  },
  mounted() {
    this.page++
    this.axios.get("/my?id="+this.id+'&page='+this.page).then(res => {
      var res = res.data;
      this.qianming = res.signa[0].usersigna;
      var neirong = res.neirong;
      for (var key of neirong) {
        var time = new Date(key.trendsTime);
        key.trendsTime = this.$date(time);
      }
      this.neirong = neirong;
    });
    //写在mounted或者activated生命周期内即可
    window.onbeforeunload = e => {
      //刷新时弹出提示
      var data = new Date();
      localStorage.setItem("data", data.getTime());
    };
  }
};
</script>
<style scoped>
.imgheader {
  position: relative;
}
.mybutton {
  width: 60%;
  height: 35px;
  background: repeat;
  border: none;
}
.xiugai {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgba(00, 00, 00, 0.2);
  left: 50px;
  text-align: center;
  line-height: 100px;
  font-size: 14px;
  color: #f1f2f6;
}
.jmdate {
  font-size: 12px;
  margin-bottom: 20px;
  padding-left: 12px;
}
.neirong {
  margin: 5px;
  border: 0.5px solid #dfe4ea;
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
.mycontent {
  width: 1215px;
  margin: 30px auto;
}
.imgcontent {
  height: 130px;
  padding-top: 120px;
  background: url("/images/mybackimg.jpg") center center no-repeat;
  background-size: cover;
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
.grxx input:focus {
  background: #ffffff;
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

.avat {
  padding-bottom: 12px;
  padding-top: 24px;
  display: flex;
  line-height: 60px;
}
.avat a:hover,
.text a:hover {
  color: #ff6348;
}
</style>