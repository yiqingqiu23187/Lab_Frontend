<template>
    <el-tabs type="border-card">
      <el-tab-pane label="申请会议">
        <div id="base_register">
        <el-form :model="meetingForm" :rules="rules" class="register_container" label-position="left"
                 label-width="0px" v-loading="loading" :ref="meetingForm">
          <h3 class="register_title">Meeting Application</h3>
          <el-form-item prop="abbr">
            <el-input id ="1" type="text"  v-model="meetingForm.abbr" auto-complete="off" placeholder="会议简称"></el-input>
          </el-form-item>
          <el-form-item prop="fullName" >
            <el-input id ="2" type="text" v-model="meetingForm.fullName" auto-complete="off" placeholder="会议全称"></el-input>
          </el-form-item>
          <el-form-item prop="holdPlace" >
            <el-input id ="4" type="text" v-model="meetingForm.holdPlace" auto-complete="off" placeholder="会议开设地点"></el-input>
          </el-form-item>

          <el-form-item prop="holdDate" >
            <el-time-select v-model="meetingForm.holdDate"  id ="3" :picker-options="{ start: '08:30', step: '00:15', end: '18:30'}"
                            placeholder="会议开设时间">
            </el-time-select>
          </el-form-item>


          <el-form-item prop="submissionDeadline" >
            <el-date-picker
              id="5"
              v-model="meetingForm.submissionDeadline"
              :picker-options="pickerOptionsStart"
              type="date"
              placeholder="投稿截止日期">
            </el-date-picker>
          </el-form-item>



          <el-form-item prop="releaseDate" >
            <el-date-picker
              id="6"
              v-model="meetingForm.releaseDate"
              :picker-options="pickerOptionsEnd"
              type="date"
              placeholder="评审结果发布日期">
            </el-date-picker>
          </el-form-item>

          <!--增加动态topic选项-->
          <el-form :model="meetingForm" ref="meetingForm" label-width="70px" class="demo-dynamic">
            <el-form-item prop="topic" label="主题" :rules="[ { required: true, message: '请输入会议主题', trigger: 'blur' },
            { type: 'text', message: '请输入正确的主题', trigger: ['blur', 'change'] } ]">
              <el-input v-model="meetingForm.topic"></el-input>
            </el-form-item>
            <!--<el-form-item prop="topic" label="主题" :rules="[ { required: true, message: '请输入会议主题', trigger: 'blur' },-->
            <!--{ type: 'text', message: '请输入正确的主题', trigger: ['blur', 'change'] } ]">-->
              <!--<el-input v-model="meetingForm.topic"></el-input>-->
            <!--</el-form-item>-->
            <el-form-item v-for="(domain, index) in meetingForm.topics" :label="'主题' + (index+2)" :key="domain.key"
                          :prop="'topics.' + index + '.value'" :rules="{ required: true, message: '主题不能为空', trigger: 'blur'}">
              <el-input v-model="domain.value"></el-input>
              <el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-form-item>
            <!--<el-form-item v-for="(domain, index) in meetingForm.topics" :label="'主题' + (index+2)" :key="index"-->
                          <!--:prop="'domain' + index " :rules="{ required: true, message: '主题不能为空', trigger: 'blur'}">-->
              <!--<el-input v-model="domain"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>-->
            <!--</el-form-item>-->
            <el-form-item>
              <el-button @click="addDomain">新增主题</el-button>
              <el-button @click="resetForm('meetingForm')">重置主题</el-button>
            </el-form-item>
          </el-form>

          <el-form-item style="width: 100%">
            <el-button type="primary" icon="el-icon-thumb" v-on:click="submit(meetingForm)">apply</el-button>
          </el-form-item>
        </el-form>
        </div>
      </el-tab-pane>

      <el-tab-pane label="更多功能">等得花都谢了</el-tab-pane>
    </el-tabs>


</template>

<script >
  export default {
    name: 'applyConference',
    data() {
      const dataValid = (rule, value, callback) => {
        if(!value || value === '') {
          return callback(new Error('Can\'t be empty'))
        }
        return callback()
      }

      return {


        username:'',
        meetingForm: {
          abbr: '',
          fullName: '',
          holdDate: '',
          holdPlace: '',
          submissionDeadline: '',
          releaseDate: '',
          topic:'',
          topics: [{
            value: ''
          }],
          // topic:'',
          // topics: [],
        },
        value1:'',
        pickerOptionsStart: {
          disabledDate: time => {
            let endDateVal = this.meetingForm.releaseDate;
            if (endDateVal) {
              return time.getTime() > new Date(endDateVal).getTime();
            }else{
              return time.getTime() < Date.now();
            }


          }
        },
        pickerOptionsEnd: {
          disabledDate: time => {
            let beginDateVal = this.meetingForm.submissionDeadline;
            if (beginDateVal) {
              return (
                time.getTime() < new Date(beginDateVal).getTime()
              );
            }
          }
        },






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
        this.meetingForm.topics.push({
          value: this.meetingForm.topic,
          key: Date.now()
        });
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
                username:this.username,
                abbr: this.meetingForm.abbr,
                fullName: this.meetingForm.fullName,
                holdDate: this.meetingForm. holdDate,
                holdPlace: this.meetingForm. holdPlace,
                submissionDeadline: this.meetingForm.submissionDeadline,
                releaseDate: this.meetingForm.releaseDate,
                topics:this.meetingForm.topics,
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
      },

      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.meetingForm.topics.indexOf(item)
        if (index !== -1) {
          this.meetingForm.topics.splice(index, 1)
        }
      },
      addDomain() {
        this.meetingForm.topics.push({
          value: '',
          key: Date.now()
        });
      },
      // addDomain() {
      //   this.meetingForm.topics.push('');
      // },

      },

    created:
      function(){
        this.username=JSON.parse(localStorage.getItem('userDetail')).username
      }
    }

</script>

<style scoped>
  #base_register{
    height: 100%;
    width: 100%;
    background-size: cover;
    position: relative;
    padding:100px auto;
  }
  .register_container{
    background-image: url("../assets/background/1.jpg");
    border-radius: 15px;
    background-clip: padding-box;
    margin: 0px 20% 10% 30%;
    width: 350px;
    padding: 35px 35px 15px 35px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px gainsboro;
  }
  .register_title{
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
