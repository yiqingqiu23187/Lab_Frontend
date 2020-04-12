<template>
  <el-collapse  id="pane" v-model="activeName" >
    <el-collapse-item  name="1">
      <span class="main-font"  slot="title" >所有在线会议 (conference list)</span>
      <div v-for="(item,index) in conferences" :key="index">
      <div class="childpane">
        <el-form class="container" label-position="left" label-width="0px">
          <h3 class="title"> {{item.fullName}}</h3>
          <div class="title">会议地点：{{item.holdPlace}}</div>
          <div class="title">老大哥：{{item.chair}}</div>
          <div class="title">会议时间：{{item.holdDate}}</div>
            <router-link to="">
              <el-button type="primary" style="width: 50%;background: #afb4db;border: none">查看会议详情(for details)</el-button>
            </router-link>
        </el-form>
      </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
    export default {
      name: "list",
      data() {
        return {
          activeName:'1',
          conferences:[
            {
              chair:'',
              PCMembers:[],
              abbr:'',
              fullName: '',
              holdDate: '',
              holdPlace: '',
              submissionDeadline:'',
              releaseDate: '',
            }
          ]
        }
        },

      created () {
        this.$axios.get('/allConference',{
        })
          .then(resp => {
            if (resp.status === 200){
              this.conferences =resp.data.allConference;
              console.log(resp);
              alert('show successfully')
            } else {
              alert('show error')
            }
          })
          .catch(error => {
            console.log(error);
            alert('show error2')
          })
      },
    }



</script>

<style scoped>
  #pane{
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  margin: 50px 50px 50px;
}
  .main-font{
    color: darkblue;
    font-size: medium;
    flex: 1 0 90%;
    order: 1;

  }

  .title {
    margin: 0px auto 0px auto;
    text-align: center;
    color: #494e8f;
  }

  .childpane{
    height: 250px;
    margin: 0px 20px 20px;
    width: 30%;
    position:relative;
    float:left;
  }

  .container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 0px 20px 20px;
    width: 80%;
    height: 70%;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px dodgerblue;
  }

  body {
    margin: 0px;
    padding: 0px;
  }



</style>
