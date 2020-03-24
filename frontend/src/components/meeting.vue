<template>
  <div id="base_register">
    <el-form :model="registerForm" :rules="rules" class="register_container" label-position="left"
             label-width="0px" v-loading="loading" :ref="registerForm">
      <h3 class="register_title">Meeting Application</h3>
      <el-form-item prop="abbr" >
        <el-input id ="1" type="text"  v-model="registerForm.abbr"
                  auto-complete="off" placeholder="会议简称"></el-input>
      </el-form-item>
      <el-form-item prop="fullname" >
        <el-input id ="2" type="text" v-model="registerForm.fullname"
                  auto-complete="off" placeholder="会议全称"></el-input>
      </el-form-item>
      <el-form-item prop="time"  >
        <el-input  id ="3" type="text" v-model="registerForm.time"
                   auto-complete="off" placeholder="会议开设时间"></el-input>
      </el-form-item>
      <el-form-item prop="place" >
        <el-input id ="4" type="text" v-model="registerForm.place"
                  auto-complete="off" placeholder="会议开设地点"></el-input>
      </el-form-item>

      <el-form-item prop="date1" >
        <el-input id ="5" type="text" v-model="registerForm.date1"
                  auto-complete="off" placeholder="投稿截止日期"></el-input>
      </el-form-item>
      <el-form-item prop="date2" >
        <el-input id ="6" type="text" v-model="registerForm.date2"
                  auto-complete="off" placeholder="评审结果发布日期"></el-input>
      </el-form-item>


      <el-form-item style="width: 100%">
        <el-button type="primary" icon="el-icon-thumb" v-on:click="submitForm()">申请会议</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'meeting',
    data() {
      const dataValid = (rule, value, callback) => {
        if(!value || value === '') {
          return callback(new Error('Can\'t be empty'))
        }

        return callback()
      }
      return {
        registerForm: {
          abbr: '',
          fullname: '',
          time: '',
          place: '',
          date1: '',
          date2: '',
        },
        rules: {
          abbr:[ {required: true, message: '请输入会议简称', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          fullname:[{required: true, message: '请输入会议全称', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          time: [{required: true, message: '请输入会议时间', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          place: [{required: true, message: '请输入会议地点', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          date1: [{required: true, message: '请输入投稿截止日', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          date2: [{required: true, message: '请输入结果发布日', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
        },
        loading: false
      }
    },
    methods: {
      submitForm(){
        if(document.getElementById("1").value==''||document.getElementById("1").value==undefined||document.getElementById("1").value==null||
          document.getElementById("2").value==''||document.getElementById("2").value==undefined||document.getElementById("2").value==null||
          document.getElementById("3").value==''||document.getElementById("3").value==undefined||document.getElementById("3").value==null||
          document.getElementById("4").value==''||document.getElementById("4").value==undefined||document.getElementById("4").value==null||
          document.getElementById("5").value==''||document.getElementById("5").value==undefined||document.getElementById("5").value==null||
          document.getElementById("6").value==''||document.getElementById("6").value==undefined||document.getElementById("6").value==null

        )
          alert("请输入完整的信息")
        else{
          alert("会议申请成功！等待管理员审批中")
        }
      }},

  }

</script>

<style scoped>
  #base_register{
    background: url("../assets/background/checkerboard-cross.png") repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  .register_container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .register_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
