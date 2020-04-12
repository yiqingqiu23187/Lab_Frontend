<template>
  <!-- element-ui -->
  <el-container v-if="$route.meta.keepalive" class="elcontainer">
    <el-header height="140px">
      <div class="header">
        <div class="nav-left" >
          <!-- 可以插入logo图片 -->
          <img src="../assets/thislogo.jpg" alt="" height="50" width="150">
        </div>
        <div class="nav-center">
          <ul>
            <li v-for="(list,index) in headerList" :key="index" >
              <router-link :to="{name:list.name}">
                {{list.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="nav-right" v-show="this.$store.state.token === null">
          <router-link to="Login">
            <el-button type="primary"
                       style="width: 40%;background: #afb4db;border: none">登录
            </el-button>
          </router-link>
          &nbsp;|&nbsp;
          <router-link to="Register">
            <el-button type="primary"
                       style="width: 40%;background: #afb4db;border: none">注册
            </el-button>
          </router-link>
        </div>
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
    name: "LuffyHeader",
    data(){
      return{
        headerList:[
          {id: '1',name:'Home',title:'首页'},
          {id: '2',name:'Information',title:'用户信息'},
          {id: '3',name:'Conference',title:'会议'},
          {id: '4',name:'News',title:'我的消息'},
          {id: '5',name:'applyConference',title:'申请会议'},
          {id: '6',name:'allConference',title:'所有会议'}
        ],
      isShow:false,
      }
    },
    methods:{
      logout() {
        this.$store.commit('logout')
        if(this.$route.path !== '/home') {
          this.$router.replace('/home')
        }
        // token = localStorage.getItem('token')
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

