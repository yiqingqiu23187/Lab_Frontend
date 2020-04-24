<template>
  <div id="base_register">
    <el-form :model="registerForm" :rules="rules" class="register_container" label-position="left"
             label-width="0px" v-loading="loading" :ref="registerForm">
      <h3 class="register_title">Hand in writing</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="registerForm.username"
                  auto-complete="off" placeholder="文章标题" required></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input  type="textarea"
                   :rows="5" v-model="registerForm.password"
                  auto-complete="off" placeholder="文章摘要" required></el-input>
      </el-form-item>
      <el-form-item prop="file" v-model="registerForm.file">
        <input type="file"  accept="application/pdf" @change="getFile($event)">
      </el-form-item>

      <el-button type="primary" style="width: 40%;background: #afb4db;border: none" v-on:click="handIn(registerForm,$event)">register</el-button>
    </el-form>
  </div>
</template>


<script>
  export default {
    name: 'handInWriting',
    data () {
      const dataValid = (rule, value, callback) => {
        if(!value || value === '') {
          return callback(new Error('Can\'t be empty'))
        }
        return callback()
      };

      //检查账户
      const checkname = (rule,username,callback) =>{
        if(!username || username ===''){
          return callback(new Error('Can\'t be empty'))
        }
        else if(username.length >50){
          return callback(new Error('50 characters in length'))
        }
          return callback();
      };

      const checkpassword=(rule,password,callback)=>{
        if(!password || password ===''){
          return callback(new Error('Can\'t be empty'))
        }
        else if(password.length>800){
          return callback(new Error('800 characters in length'))
        }
        else
          return callback();
      };
      return {
        registerForm: {
          username: '',
          password: '',
           file:'',
        },
        rules: {
          // blur 失去鼠标焦点时触发验证
          username: [{required: true, message: '请输入文章标题', trigger: 'blur'}, {validator: checkname, trigger: 'blur'}],
          password: [{required: true, message: '请填写文章摘要', trigger: 'blur'}, {validator: checkpassword, trigger: 'blur'}],
          pdf: [{required: true, message: '请选择pdf文件', trigger: 'blur'}, {validator: datavalid, trigger: 'blur'}],
        },
        loading: false
      }
    },
    methods: {
      userTypeChange() {
      },
      getFile(event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },

      handIn(formname,event){
        event.preventDefault();
        let formData = new FormData();
        formData.append('title', this.registerForm.username);
        formData.append('summary', this.registerForm.password);
        formData.append('file', this.registerForm.file);
        formData.append('username', this.$store.state.userDetail.username);
        formData.append('conferenceFullname', this.$store.state.conferencefullName);
        const instance = axios.create({
          withCredentials: true
        });
        this.$refs[formname].validate(valid => {
        if(valid){
          this.$axios.post('/sendPaper', formData)
            .then(resp => {
              if(resp.status === 200) {
                alert('投稿成功');
                this.$router.go(-1);
              }
              else{
                alert('投稿失败！')
                this.$router.go(-1);
              }
            })
            .catch(error => {
              console.log(error);
            });
    }})}


  }}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
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
