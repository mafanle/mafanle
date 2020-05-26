<template>
  <div>
    <div class="jumu">
       <div class="guanbi" @click="chuxian">x</div>
      <div class="avatarUp">
        <table></table>
        <div class="txqy">
          <input
            type="file"
            id="id"
            name="image"
            @change="shangc($event)"
            accept="image/jpg, image/jpeg, image/png"
          />
          <label v-if="picPath == '' " class="imglable" for="id">
            <table></table>
            <div>
              <i class="el-icon-picture-outline"></i>
              <p>上传头像</p>
            </div>
          </label>
          <div v-else class="avatar">
            <img :src="picPath" alt />
          </div>
        </div>
        <el-button type="primary" plain class="upbnt" :disabled="disabled" @click="upload">上传</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      files: null,
      picPath: "",
      disabled: true,
    };
  },
  methods: {
    ...mapMutations(["uploadavat"]),
    shangc(e) {
      console.log(e);
      this.files = e.target.files[0];
      let files = e.target.files[0];
      console.log(files);

      //转码base64
      let reader = new FileReader();
      let imgFile;
      reader.readAsDataURL(files);
      reader.onload = e => {
        imgFile = e.target.result;
        let arr = imgFile.split(",");
        // arr[1] 就是图片的 Base64编码字符串
        // console.log(arr[1]);

        //这里的 picPath 'data:image/png;base64,'+ base64为编码字符串拼接形成图片的
        this.picPath = "data:image/png;base64," + arr[1];
        this.disabled = false;
      };
    },
    upload() {
      let file = new FormData();
      file.append("file", this.files);
      console.log(file);

      this.axios
        .post("/upload?id=" + this.$store.state.id, file, {
          heaaders: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          console.log(res.data);
          var result = res.data[0];
          //修改成功 改变state的值
          this.uploadavat({
            userimg: result.userimg
          });
          localStorage.setItem("userimg", result.userimg);
          this.$emit('gaibian',false)
        });
    },
    chuxian(){
      this.$emit('gaibian',false)
    }
  },
  
};
</script>

<style  scoped>
.guanbi {
  width: 40px;
  height: 40px;
  font-size: 40px;
  color: #fff;
  float: right;
}
.jumu {
  height: 100vh;
  width: 100%;
  background: rgba(00, 00, 00, 0.5);
  position: fixed;
  z-index: 1000;
  top: 0;
}
.txqy {
  margin-top: 40px;
}
.avatarUp {
  display: block;
  width: 400px;
  height: 300px;
  background: #ffffff;
  margin: auto;
  position: absolute; /*设定水平和垂直偏移父元素的50%，
再根据实际长度将子元素上左挪回一半大小*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.imglable {
  margin: 0 auto;
  display: block;
  width: 150px;
  height: 100px;
  background: #ffffff;
  border: 0.5px solid #f1f2f6;
  border-radius: 4px;
  box-shadow: 4px 1px 2px rgba(00, 00, 00, 0.2);
}
.imglable:hover {
  background: rgba(241, 242, 246, 0.8);
}
.imglable div {
  margin-top: 30px;
  font-size: 30px;
}
.imglable > div > p {
  font-size: 12px;
}
#id {
  display: none;
}
.avatar {
  width: 150px;
  height: 100px;
  margin: 0 auto;
}
.avatar img {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.upbnt {
  margin-top: 30px;
}
</style>
