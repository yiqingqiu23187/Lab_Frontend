<template>
  <div id="base_register">
    <el-form :model="registerForm" :rules="rules" class="register_container" label-position="left"
             label-width="0px" v-loading="loading">
      <h3 class="register_title">Register</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="registerForm.username"
                  auto-complete="off" placeholder="username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="registerForm.password"
                  auto-complete="off" placeholder="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" v-model="registerForm.fullname"
                  auto-complete="off" placeholder="fullname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="registerForm.usertype" @change="userTypeChange">
          <el-radio label="admin" border>admin</el-radio>
          <el-radio label="contributor" border>contributor</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 40%;background: #afb4db;border: none" v-on:click="register">register</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {Message} from 'element-ui'
export default {
  name: 'Register',
  data () {
    return {
      registerForm: {
        username: '',
        password: '',
        fullname: '',
        usertype: ''
      },
      rules: {
        username: [{required: true, message: '', trigger: 'blur'}],
        password: [{required: true, message: '', trigger: 'blur'}],
        fullname: [{required: true, message: '', trigger: 'blur'}],
        usertype: [{required: true, message: '', trigger: 'blur'}]
      },
      loading: false
    }
  },
  methods: {
    userTypeChange() {
    },
    register () {
      this.axios.post('/api/register', {
        username: this.registerForm.username,
        password: this.registerForm.password,
        fullname: this.registerForm.fullname,
        authorities: [this.registerForm.usertype]
      })
      .then(resp => {
        if(resp.data.code === 200) {
          // 跳转到login
          this.$router.replace('/api/login')
        } else{
          Message({message: 'register error', type: 'error'})
        }
      })
      .catch(error => {
        console.log(error)
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
