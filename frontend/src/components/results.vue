<template>
  <el-collapse  id="pane" v-model="activeName" >
    <el-collapse-item  name="1">
      <span class="main-font"  slot="title" >搜索结果显示 (conference list)</span>
      <div v-for="(item,index) in users2" :key="index">
        <div class="childpane">
          <el-form class="container" label-position="left" label-width="0px">
            <h3 class="title"> 他的真实姓名{{item.fullname}}</h3>
            <div class="title">他的邮箱：{{item.email}}</div>
            <div class="title">他的地址：{{item.area}}</div>
            <el-button type="primary" style="width: 50%;background: #afb4db;border: none"
                       v-on:click="users3.push(item.username)">加入邀请名单(invite him)</el-button>
          </el-form>
        </div>
      </div>
      <el-button type="primary" style="width: 50%;background: #afb4db;border: none"
                 v-on:click="send">邀请他们(invite them)</el-button>
    </el-collapse-item>

  </el-collapse>
</template>

<script>
    export default {
        name: "results",
      data() {
        return {
          activeName:'1',
          searchname:this.$store.state.searchname,
          users: [
            {
              username: '',
              password:'',
              fullname:'',
              email:'',
              area:'',
              unit:'',
              conferenceFullname:[],
            }
          ],
          users2: [
            {
              username: '',
              password:'',
              fullname:'',
              email:'',
              area:'',
              unit:'',
              conferenceFullname:[],
            }
          ],
          users3: []
        }
      },
      created() {
      this.searchname=this.$store.state.searchname,
        this.$axios.get('/getAllUser')
          .then(resp => {
            if (resp.status === 200) {
               this.users = resp.data.users;
                var a =this.searchname;
                var b =this.users2;
               this.users.forEach(function (value, key, arr) {
                if (value.fullname.trim() == a.trim()){
                 b.push(value)
                }
              })
              this.users2=b;
            }
            else
              alert('show error')
          }
              )
          .catch(error => {
            console.log(error);
          })},
      methods: {
        send(){
         alert(this.users3.length);
          this.$axios.post('/invite',{
            usernames:this.users3,
            conferenceFullname: this.$store.state.conferencefullName,
            chair:this.$store.state.userDetail.username,
          })
            .then(resp => {
                if (resp.status === 200) {
                  alert('邀请成功')
                }
                else
                  alert('邀请失败')
              }
            )
            .catch(error => {
              console.log(error);
            })
        }
      }
    }
</script>

<style scoped>

</style>
