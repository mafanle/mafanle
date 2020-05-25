<template>
  <div>
    <div class="avatarUp">
      <div>
        <input
          type="file"
          id="id"
          name="image"
          @change="shangc($event)"
          accept="image/jpg, image/jpeg, image/png"
        />
        <label v-if="picPath == '' " class="imglable" for="id">
          <p>上传头像</p>
        </label>
      </div>
      <div>
        <img class="avatar" :src="picPath" alt />
      </div>
      <button @click="upload">上传</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      files: null,
      picPath: ""
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
        });
    }
  }
};
</script>

<style  scoped>
.avatarUp {
  margin: 0 auto;
  width: 400px;
  height: 300px;
  background: pink;
}
.imglable {
  display: block;
  width: 150px;
  height: 100px;
  background: antiquewhite;
}
#id {
  display: none;
}
.avatar {
  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
