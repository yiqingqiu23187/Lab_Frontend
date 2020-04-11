<template>
  <div id="app">
    <!-- 导航区域 -->
    <!--<LuffyHeader v-if="$route.meta.keepalive"></LuffyHeader>-->

    <LuffyHeader/>
    <!--<router-view v-if="!$route.meta.keepalive"></router-view>-->
    <router-view/>
  </div>
</template>

<script>
  import LuffyHeader from '@/components/LuffyHeader'
  import ElContainer from "element-ui/packages/container/src/main";
  import ElHeader from "element-ui/packages/header/src/main";
  export default {
    name: 'App',
    components:{
      ElHeader,
      ElContainer,
      LuffyHeader
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  body{
    margin: 0px;
    padding: 0px;
  }
</style>
