<template>
  <div>
    <p>{{this.$route.params.id}}</p>
  </div>
</template>

<script>
import NiHao from "../components/HelloWorld";
export default {
  data() {
    return {
      id:this.$route.params.id
    };
  },
  mounted() {
    console.log(this.id);
    
  }
};
</script>