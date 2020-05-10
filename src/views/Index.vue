<template>
  <div class="imgback">
    <button @click="hello" class="hello">点击</button>

    <el-button class="hello">你好</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  methods: {
    hello() {
      this.axios.get("/hello").then(res => {
        var p = res.data;
        console.log(p);
      });
    }
  }
};
</script>
<style scoped>
 .hello{
  padding: 0;
  width: 100px;
  height: 40px;
 }

</style>