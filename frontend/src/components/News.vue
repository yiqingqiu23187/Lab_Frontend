<template><div>
  <div id="myApplication">
    <!--我是消息</div>-->
    <h1>我发出的邀请：</h1>
    <ul>
      <li v-for="application in myApplication" :key="application.fullname">
        {{application.fullname}}:
        state:{{application.state}},
      </li>
    </ul>
  </div>

  <div id="received">
    <h1>我收到的邀请：</h1>
    <ul>
      <li v-for="received in receivedInvitation" :key="received.fullname">
        {{received.fullname}}:
        <!--state:{{contribution.state}}, 这个地方应该是button-->
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 40%;background: #afb4db;border: none" v-on:click="attitude(!ifagree)">Agree</el-button>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 40%;background: #afb4db;border: none" v-on:click="attitude(ifagree)">Reject</el-button>
        </el-form-item>

      </li>
    </ul>
  </div>
</div>
</template>

<script>
    export default {
        name: "news",
      data(){
        return{

          ifagree:false,
          // myApplication:this.$store.state.myApplication,
          // // myContribution:this.$store.state.myContribution,
          // receivedInvitation:this.$store.state.receivedInvitation
         }
      },
      computed:{
        myApplication:function(){
          return this.$store.state.myApplication},
        receivedInvitation:function () {
          return this.$store.state.receivedInvitation
        }
      },
      created:function () {
          this.$axios.post('/message',{
            username:this.$store.state.userDetail.username
          })
            .then(resp=>{
              this.$store.commit('myNews', resp.data)
            })
            .catch(error=>{
              console.log(error)
              alert('querynews error')
            })
      },
      methods:{
          attitude(ifagree){
            this.$axios.post('attitude',{
              state:ifagree
            })
              .catch(error => {
                console.log(error)
                alert('register error')
              })
          }
      }
    }
</script>

<style scoped>

</style>
