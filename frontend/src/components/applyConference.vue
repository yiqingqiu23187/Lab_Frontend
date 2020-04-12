<template>
  <div id="base_register">
    <el-form :model="meetingForm" :rules="rules" class="register_container" label-position="left"
             label-width="0px" v-loading="loading" :ref="meetingForm">
      <h3 class="register_title">Meeting Application</h3>
      <el-form-item prop="abbr" >
        <el-input id ="1" type="text"  v-model="meetingForm.abbr" auto-complete="off" placeholder="会议简称"></el-input>
      </el-form-item>
      <el-form-item prop="fullName" >
        <el-input id ="2" type="text" v-model="meetingForm.fullName" auto-complete="off" placeholder="会议全称"></el-input>
      </el-form-item>

      <el-form-item prop="holdPlace" >
        <el-input id ="4" type="text" v-model="meetingForm.holdPlace" auto-complete="off" placeholder="会议开设地点"></el-input>
      </el-form-item>

      <el-form-item prop="holdDate"  >
        <el-time-select v-model="meetingForm.holdDate"  id ="3" :picker-options="{ start: '08:30', step: '00:15', end: '18:30'}"
                        placeholder="会议开设时间">
        </el-time-select>
      </el-form-item>


      <el-form-item prop="submissionDeadline" >
        <el-date-picker
          id="5"
          v-model="meetingForm.submissionDeadline"
          type="date"
          placeholder="投稿截止日期">
        </el-date-picker>
      </el-form-item>



      <el-form-item prop="releaseDate" >
        <el-date-picker
          id="6"
          v-model="meetingForm.releaseDate"
          type="date"
          placeholder="评审结果发布日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button type="primary" icon="el-icon-thumb" v-on:click="submit(meetingForm)">apply</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script >
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
        meetingForm: {
          abbr: '',
          fullName: '',
          holdDate: '',
          holdPlace: '',
          submissionDeadline: '',
          releaseDate: '',
        },
        value1:'',
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }},

        rules: {
          abbr:[ {required: true, message: '请输入会议简称', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          fullName:[{required: true, message: '请输入会议全称', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          holdDate: [{required: true, message: '请选择会议时间', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          holdPlace: [{required: true, message: '请输入会议地点', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          submissionDeadline: [{required: true, message: '请选择投稿截止日期', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          releaseDate: [{required: true, message: '请选择结果发布日期', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
        },
        loading: false
      }
    },
    methods: {
      submit(formName){
        if(document.getElementById("1").value==''||document.getElementById("1").value==undefined||document.getElementById("1").value==null||
          document.getElementById("2").value==''||document.getElementById("2").value==undefined||document.getElementById("2").value==null||
          document.getElementById("3").value==''||document.getElementById("3").value==undefined||document.getElementById("3").value==null||
          document.getElementById("4").value==''||document.getElementById("4").value==undefined||document.getElementById("4").value==null||
          document.getElementById("5").value==''||document.getElementById("5").value==undefined||document.getElementById("5").value==null||
          document.getElementById("6").value==''||document.getElementById("6").value==undefined||document.getElementById("6").value==null
        )
          alert("请输入完整的信息");
        this.$refs[formName].validate(valid => {
          if(valid){
            this.$axios.post('/applyConference',{
                username:this.$store.state.userDetail.username,
                abbr: this.meetingForm.abbr,
                fullName: this.meetingForm.fullName,
                holdDate: this.meetingForm. holdDate,
                holdPlace: this.meetingForm. holdPlace,
                submissionDeadline: this.meetingForm.submissionDeadline,
                releaseDate: this.meetingForm.releaseDate,
              }
            )
              .then(resp => {
                // 根据后端的返回数据修改
                if(resp.status === 200 ) {
                  // 跳转到login
                  alert('successful submission');
                  this.$router.replace('/allConference')
                 // this.$router.replace('/login')
                }else
                  alert('failed');

              })
              .catch(error => {
                console.log(error);
                alert('submit error')
              })
          } else {
            alert('请输入完整的信息')
          }
        })
      }



      },

  }

</script>

<style scoped>
  #base_register{
    background: url("../assets/background/1.jpg") repeat;
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
    background: lightskyblue;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px skyblue;
  }
  .register_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
