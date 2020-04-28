<template>


    <el-menu width="100%" :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
      @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" v-if="$route.meta.keepalive">
      <el-menu-item index="1"><router-link to="Home">首页</router-link></el-menu-item>


    <!--<input type="text" name="" id="" class="search1" placeholder="会议名称" v-model="search" style="height:25px"/>-->
    <!--<el-button class="search2" icon="el-icon-search" size="mini" style="padding-left: 8px;padding-right: 8px;height: 30px">搜索</el-button>-->

      <el-submenu index="2" class="userhead" v-if="this.$store.state.token !== null">
        <template slot="title">
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          {{username}}
        </template>
        <el-menu-item index="2-1"><router-link to="Information">进入空间</router-link></el-menu-item>
        <el-menu-item index="2-2"><router-link to="logout">退出登录</router-link></el-menu-item>
        </el-submenu>

    </el-menu>

</template>

<script>
  import ElHeader from "element-ui/packages/header/src/main";
  import ElButton from "element-ui/packages/button/src/button";

  export default {
    components: {
      ElButton,
      ElHeader},
    name: "LuffyHeader",
    data(){
      return{
        activeIndex: '1',

        username:'',
      isShow:false,
      }
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      logout() {

        this.$store.commit('logout')
        alert("注销成功！")
        if(this.$route.path !== '/login') {
          this.$router.replace('/login')
        }
        }
    },
    mounted:
    function () {
      this.username=this.$store.state.userDetail.username
    }

  }
</script>

<style lang="css" scoped>
.buttonright{
  float: right;
  padding-right: 150px;
}

  /*.search1{*/
    /*position: absolute;*/
    /*z-index: 10;*/
    /*top:13px;*/
    /*left:150px;*/
  /*}*/

/*.search2{*/
  /*position: absolute;*/
  /*z-index: 10;*/
  /*top:13px;*/
  /*left:320px;*/
/*}*/

  .userhead{
    float: right;
    position: absolute;
    z-index: 10;
    right:50px;
    color: white
  }

</style>

