<template>
  <div id="app">
      <nav_file />
      <router-view></router-view>
  </div>
</template>

<script>
import nav_file from './components/navbar.vue'
export default {
  name:"app",
  components:{
    nav_file,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
