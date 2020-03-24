<template>
  <div id="base_register">
    <el-form :model="registerForm" :rules="rules" class="register_container" label-position="left"
             label-width="0px" v-loading="loading" :ref="registerForm">
      <h3 class="register_title">Register</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="registerForm.username"
                  auto-complete="off" placeholder="username" required></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.password"
                  auto-complete="off" placeholder="password" required></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input type="email" v-model="registerForm.email"
                  auto-complete="off" placeholder="email" required></el-input>
      </el-form-item>
      <el-form-item prop="fullname">
        <el-input type="text" v-model="registerForm.fullname"
                  auto-complete="off" placeholder="fullname" required></el-input>
      </el-form-item>

      <el-form-item prop="area">
        <el-input type="text" v-model="registerForm.area"
                  auto-complete="off" placeholder="area" required></el-input>
      </el-form-item>
      <el-form-item prop="job">
        <el-input type="text" v-model="registerForm.job"
                  auto-complete="off" placeholder="job" required></el-input>
      </el-form-item>
      <el-form-item prop="usertype">
        <el-radio-group v-model="registerForm.usertype" @change="userTypeChange">
          <el-radio label="Admin" border>Admin</el-radio>
          <el-radio label="Contributor" border>Contributor</el-radio>
          <el-radio label="Reviewer" border>Reviewer</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 40%;background: #afb4db;border: none" v-on:click="register(registerForm)">register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
  export default {
    name: 'Register',
    data () {
      const dataValid = (rule, value, callback) => {
        if(!value || value === '') {
          return callback(new Error('Can\'t be empty'))
        }

        return callback()
      }

      //检查账户
      const checkname = (rule,username,callback) =>{
        var reg =/^[A-Za-z-][A-Za-z0-9-_]{4,31}$/;

        if(!username || username ===''){
          return callback(new Error('Can\'t be empty'))
        }
        else if(username.length < 5 || username.length > 32){
          return callback(new Error('5-32 characters in length'))
        }
        else if(!reg.test(username)){
          return callback(new Error('Wrong Format!'))
        }
        else
          return callback();
      }

      const checkpassword=(rule,password,callback)=>{

        var checkpass = /^(?!^(\d+|[a-zA-Z]+|[-_]+)$)^[\w-_]+$/;
        if(!password || password ===''){
          return callback(new Error('Can\'t be empty'))
        }
        else if(password.length<6||password.length>32){
          return callback(new Error('6-32 characters in length'))
        }
        else if(!checkpass.test(password)){
          return callback(new Error('Wrong Format!'))
        }else if(password.search(this.registerForm.username)!=-1){
            return callback(new Error('Cannot include username!'))
        }
        else
          return callback();
      }

      const checkemail=(rule,email,callback)=>{
        var checkemail=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if(!email || email === '') {
          return callback(new Error('Can\'t be empty'))
        }else if(!checkemail.test(email)){
          return callback(new Error('Wrong Format!'))
        }else
          return callback()
      }
      return {
        registerForm: {
          username: '',
          password: '',
          fullname: '',
          usertype: '',
          area:'',
          job:''
        },
        rules: {
          // blur 失去鼠标焦点时触发验证
          username: [{required: true, message: '', trigger: 'blur'}, {validator: checkname, trigger: 'blur'}],
          password: [{required: true, message: '', trigger: 'blur'}, {validator: checkpassword, trigger: 'blur'}],
          email: [{required: true, message: '', trigger: 'blur'}, {validator: checkemail, trigger: 'blur'}],
          fullname: [{required: true, message: '', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          usertype: [{required: true, message: '', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          area: [{required: true, message: '', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
          job: [{required: true, message: '', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}]
        },
        loading: false
      }
    },
    methods: {
      userTypeChange() {
      },
      register (formName) {
        this.$refs[formName].validate(valid => {
          if(valid){
            this.$axios.post('/register', {
                username: this.registerForm.username,
                password: this.registerForm.password,
                fullname: this.registerForm.fullname,
                authorities: [this.registerForm.usertype]
              }
            )
              .then(resp => {
                // 根据后端的返回数据修改
                if(resp.status === 200 && resp.data.hasOwnProperty("id")) {
                  // 跳转到login
                  alert('successful registration')
                  this.$router.replace('/login')
                }// else if(resp.status === 200 && resp.data().value == 404){
                 // alert('用户名已存在！')
                //  }
                else{
                  alert('用户名已存在！')
                }
              })
              .catch(error => {
                console.log(error)
                alert('register error')
              })
          } else {
            alert('wrong submit')
          }
        })
      }
    }
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
