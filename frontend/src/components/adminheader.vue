<template>
  <el-container v-if="$route.meta.keepadmin" class="elcontainer">
    <el-header height="140px">
      <div class="header">
        <div class="nav-right" v-show="this.$store.state.token !== null">
          <el-button type="primary"
                     style="width: 40%;background: #afb4db;border: none" v-on:click="logout">注销用户
          </el-button>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
  import ElHeader from "element-ui/packages/header/src/main";

  export default {
    components: {ElHeader},
    name: "adminheader",
    data(){
      return{
        isShow:false,
      }
    },
    methods:{
      logout() {
        this.$store.commit('logout')
        if(this.$route.path !== '/home') {
          this.$router.replace('/home')
        }
      }
    },
  }
</script>

<style lang="css" scoped>
  .nav-right{
    float: right;
  }


  .nav-center ul li a.is-active{
    color:#4a4a4a;
    border-bottom: 4px solid #ffc210;
  }



</style>


