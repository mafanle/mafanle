<template>
  <div id="app">
    <toplist></toplist>
    <!-- <div class="indexcontent">
      <el-row type='flex' style="flex-wrap:wrap" >
        <el-col  v-for="(item,index) in neirong" :key="index" :span="6">
          <div @click="show($event,index)" class="animate__animated animate__fadeInUp fuck">
            <div class="neirong">
              <el-image :src="item.trendsImg" :data-index="index" lazy></el-image>
              <div class="text" :data-index="index">
                <router-link
                  :to="`/page/${neirong[index].yid}`"
                >{{neirong[index].ename == ''?neirong[index].username:neirong[index].ename }}</router-link>
                <div style=" clear: both;"></div>
                <div class="zhengwen">
                  <p class="contenttext">{{item.trendsText}}</p>
                </div>
                <div class="time">
                  <p>{{item.trendsTime.year+'年'+item.trendsTime.month+'月'+item.trendsTime.date+'日'+item.trendsTime.hour+':'+item.trendsTime.minute}}</p>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      
    </div>-->

    <ni-hao :neirong="neirong"></ni-hao>
    <div>
      <button class="mybutton" @click="jiazai">加载更多</button>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import NiHao from "../components/HelloWorld";
export default {
  data() {
    return {
      xianshi: false,
      neirong: [],
      index: "",
      page: 0
    };
  },
  components: {
    NiHao
  },
  methods: {
   
    jiazai() {
      this.page++;
      this.axios.get("/jiazai?start=" + this.page).then(res => {
        var res = res.data;
        console.log(res);
        
        if (res.code==0) {
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
  mounted() {
    this.page++;
    this.axios.get("/huoqu?start=" + this.page).then(res => {
      var res = res.data;
      for (var key of res) {

        var time = new Date(key.trendsTime);

        key.trendsTime = this.$date(time);
      }
      this.neirong = res;
    });
  }
};
</script>
<style scoped>
.contenttext {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.mybutton:hover {
  background: #f1f2f6;
}
.mybutton {
  width: 60%;
  height: 35px;
  background: repeat;
  border: none;
}
.indexcontent {
  width: 1215px;
  margin: 30px auto;
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
.text a {
  color: #57606f;
  text-decoration: none;
}
.avat {
  padding-bottom: 24px;
  padding-top: 24px;
  display: flex;
  line-height: 60px;
}
.avat a:hover,
.text a:hover {
  color: #ff6348;
}
</style>