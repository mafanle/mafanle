<template>
  <div>
    <toplist></toplist>
    <div class="mycontent">
      <div class="guanzhu">
        <button @click="qg" v-if="sfgz">取关</button>
        <button @click="gz" v-else>关注</button>
        <span>{{gzs}}</span>
      </div>
      <div class="otheruser">
        <table></table>
        <div class="othercontent">
          <div class="otheravatar">
            <img :src="user.userimg" alt />
          </div>
          <div class="otherdata">
            <p>{{user.ename == ''? user.username:user.ename}}</p>
            <br />
            <p>{{user.usersigna}}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
    <ni-hao :neirong="neirong"></ni-hao>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NiHao from "../components/HelloWorld";
export default {
  data() {
    return {
      userid: this.$route.params.id,
      neirong: [],
      user: {},
      sfgz: true,
      gzs: ""
    };
  },
  components: {
    NiHao
  },
  computed: {
    ...mapState(["id", "username", "userimg"])
  },
  mounted() {
    this.axios
      .get("/obtain?userid=" + this.userid + "&myid=" + this.id)
      .then(res => {
        var res = res.data;
        console.log(res);
        for (var key of res.trends) {
          var time = new Date(key.trendsTime);
          key.trendsTime = this.$date(time);
        }
        this.neirong = res.trends;
        this.user = res.user[0];
        this.gzs = res.gzs;
        this.sfgz = res.gz;
        console.log(this.user.userimg);
      });
  },
  methods: {
    qg() {
      this.axios
        .get("/qxgz?myid=" + this.id + "&userid=" + this.userid)
        .then(res => {
          var res = res.data;
          if (res.code == 1) {
            var gzs = parseInt(this.gzs);
            this.gzs = gzs - 1;
            this.sfgz = false;
          }
        });
    },
    gz() {
      this.axios
        .get("/gz?myid=" + this.id + "&userid=" + this.userid)
        .then(res => {
          var res = res.data;
          if (res.code == 1) {
            var gzs = parseInt(this.gzs);
            this.gzs = gzs + 1;
            this.sfgz = true;
          }
        });
    }
  }
};
</script>
<style  scoped>
.mycontent {
  width: 1215px;
  margin: 10px auto;
}
.otheruser {
  height: 500px;
  background: url("/images/other.jpg") center center no-repeat;
}
.othercontent {
  width: 300px;
  height: 400px;
  margin: 0 auto;
}
.otheravatar {
  width: 140px;
  margin: 0 auto;
  margin-top: 80px;
  text-align: center;
}
.otheravatar img {
  width: 140px;
  height: 140px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.otherdata p {
  margin-top: 10px;
}
.otherdata p:first-child {
  font-size: 24px;
}
.guanzhu {
  float: right;
  margin-top: 5px;
}
.guanzhu span {
  text-align: center;
  line-height: 35px;
  display: block;
  height: 35px;
  width: 70px;
  border: none;
  color: aliceblue;
  background: rgba(00, 00, 00, 0.2);
  border-radius: 0 50px 50px 0;
}
.guanzhu button {
  text-align: center;
  line-height: 35px;
  display: block;
  height: 35px;
  width: 70px;
  border: none;

  border-radius: 50px 0 0 50px;
}
</style>