<template>
  <div id="app">
    <toplist></toplist>
    <div class="content">
      <el-row>
        <el-col v-for="(item,index) in neirong" :key="index" :span="6">
          <div @click="show($event,index)" class="animate__animated animate__fadeInUp fuck">
            <div class="neirong">
              <el-image :src="item.trendsImg" :data-index="index" lazy></el-image>
              <div class="text" :data-index="index">
                <div class="username">{{item.username}}</div>
                <div style=" clear: both;"></div>
                <div class="zhengwen">
                  <p>{{item.trendsText}}</p>
                </div>
                <div class="time">
                  <p>{{item.trendsTime.year+'年'+item.trendsTime.month+'月'+item.trendsTime.date+'日'+item.trendsTime.hour+':'+item.trendsTime.minute}}</p>
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
    <div class="jumu" v-if="xianshi">
      <div class="guanbi" @click="guanbi">x</div>
      <div class="jmneirong">
        <div class="jmimg">
          <img :src="neirong[index].userimg" alt />
        </div>
        <div class="jmtext">
          <div class="avat">
            <router-link :to="`/my/${neirong[index].yid}`">
              <img :src="neirong[index].trendsImg" alt />
            </router-link>
            <router-link  :to="`/my/${neirong[index].yid}`">{{neirong[index].username}}</router-link>
          </div>
          <p>{{neirong[index].trendsText}}</p>
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
      xianshi: false,
      neirong:[],
      index:''
    };
  },

  methods: {
    show(e, index) {
      this.xianshi = true;
      this.index = index;
      console.log(this.index);
      
    },
    guanbi() {
      this.xianshi = false;
    },
    jiazai() {
      
    },
    formatDate(now) {
      var year = now.getFullYear(); //取得4位数的年份
      var month = now.getMonth() + 1; //取得日期中的月份，其中0表示1月，11表示12月
      var date = now.getDate(); //返回日期月份中的天数（1到31）
      var hour = now.getHours(); //返回日期中的小时数（0到23）
      var minute = now.getMinutes(); //返回日期中的分钟数（0到59）
      var second = now.getSeconds(); //返回日期中的秒数（0到59）
      return {year, month, date,hour,minute, second} 
    }
  },
  mounted() {
    // console.log(localStorage.getItem('data'));
    //定义一个时间戳变量
     
    this.axios.get('/huoqu').then(res=>{
      var res = res.data 
      console.log(res);
      for (var key of res){
        var time = new Date(key.trendsTime)
         key.trendsTime =this.formatDate(time)
      }
      this.neirong = res
    })
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