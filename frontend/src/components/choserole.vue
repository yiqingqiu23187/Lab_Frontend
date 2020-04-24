<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="身份选择">
        <el-radio-group v-model="radioTreaty" @change="selectpart">
          <el-radio v-model="radio1" label="1" border v-if="this.role.chair != ''" >chair</el-radio>
          <el-radio v-model="radio1" label="2" border v-if="this.role.member!= ''" >PC member</el-radio>
          <el-radio v-model="radio1" label="3" border v-if="this.role.author != ''">author</el-radio>
          <el-radio v-model="radio1" label="4" border  v-if="this.role.chair == ''">tourist</el-radio>
        </el-radio-group>
        <el-button @click="enter()">进入会议</el-button>
      </el-tab-pane>
      <el-tab-pane label="更多功能">敬请期待</el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
    export default {
        name: "choserole",
      data(){
          return{
            radioTreaty: '1',
            role:{
              chair:'',
              member:'',
              author:'',
              tourist:'',
            },

            temprole:{
              chair:'',
              member:'',
              author:'',
              tourist:'',
            },
            radio1: '1',

          }
      },
      methods:{
          selectpart:function (val) {
            if(val==='1'){

              this.temprole.chair='chair';
              this.temprole.member='';
              this.temprole.author='';
            }else if(val==='2'){

              this.temprole.chair='';
              this.temprole.member='member';
              this.temprole.author='';
            }else if(val==='3'){

              this.temprole.chair='';
              this.temprole.member='';
              this.temprole.author='author';
            }else{
              alert("nihao")
              this.temprole.chair='';
              this.temprole.member='';
              this.temprole.author='';
            }
          },

          enter:function () {
            this.$store.commit('myrole',this.temprole)   ;
            console.log(this.temprole);
            this.$router.replace({path:'/conferenceDetail'})
          },
      },

      created:
      function () {
        this.role=this.$store.state.myrole;
        if(this.role.chair != ''){
          this.temprole.chair='chair';
        }else if(this.role.member != ''){
          this.temprole.member='member';
        }else if(this.role.author !=''){
          this.temprole.author='author';
        }else{
          this.temprole.tourist='';
        }
      }
    }
</script>

<style scoped>

</style>
