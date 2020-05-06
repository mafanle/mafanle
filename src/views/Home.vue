<template>
 <button @click="hello">点击</button>
</template>

<script>
// @ is an alias to /src

export default {
  methods:{
    hello(){
      this.axios.get('/hello').then(res=>{
        var p=res.data
        console.log(p);
        
      })
    }
  }
}
</script>
