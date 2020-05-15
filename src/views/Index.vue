<template>
  <div id="app">
    <toplist></toplist>
    <!-- <nav class="sidebar">
      <ul class="menu">
        <li
          v-for="(navList,index) in navLists"
          :key="index"
          class="forRealitive"
          v-on:mouseover="showToggle(index)"
          v-on:mouseout="handleHide"
        >
          <a class="sidebar-link" :href="navList.eTitle">{{navList.title}}</a>
          <ul class="menu-sub" v-show="index===isShow">
            <li v-for="(item,idx) in navList.child" :key="idx">
              <a
                class="section-link"
                :href="item.esubTitle"
                v-on:click="handleHide"
              >{{item.subTitle}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      navLists: [
        {
          title: "项目信息",
          eTitle: "#projectMessage",
          child: [
            {
              subTitle: "项目简介",
              esubTitle: "#projectIntroduction"
            },
            {
              subTitle: "样品信息",
              esubTitle: "#sampleInformation"
            }
          ]
        },
         {
          title: "项目信息1",
          eTitle: "#projectMessage",
          child: [
            {
              subTitle: "项目简介1",
              esubTitle: "#projectIntroduction"
            },
            {
              subTitle: "样品信息1",
              esubTitle: "#sampleInformation"
            }
          ]
        }
      ],
      isShow: 0
    };
  },
  mounted: function() {
    // 避免第一个渲染的显示
    this.isShow = -1;
  },
  methods: {
    showToggle: function(index) {
      console.log(index);
      this.isShow = index;
    },
    handleHide: function() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style scoped>
</style>