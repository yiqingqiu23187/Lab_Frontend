<template>
  <el-tabs type="border-card">
    <el-tab-pane label="欢迎投稿">
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
                       :rows="3" v-model="registerForm.password"
                       auto-complete="off" placeholder="文章摘要" required></el-input>
          </el-form-item>

          <el-button type="text" @click="dialogTableVisible = true">添加作者信息</el-button>
          <el-dialog title="点此添加作者信息" :visible.sync="dialogTableVisible">
            <el-table :data="writers" style="width: 100%">
              <el-table-column prop="name" label="姓名">
                <template slot-scope="scope">
                  <el-input
                    size="small"
                    v-model="scope.row.name"
                    v-show="scope.row.showEdit"
                    placeholder="请输入内容"
                  ></el-input>
                  <span v-show="!scope.row.showEdit">{{scope.row.name}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="job" label="单位">
                <template slot-scope="scope">
                  <el-input
                    size="small"
                    v-model="scope.row.job"
                    v-show="scope.row.showEdit"
                    placeholder="请输入内容"
                  ></el-input>
                  <span v-show="!scope.row.showEdit">{{scope.row.job}}</span>
                </template>
              </el-table-column>
              <el-table-column prop="address" label="国家/地区">
                <template slot-scope="scope">
                  <el-input
                    size="small"
                    v-model="scope.row.address"
                    v-show="scope.row.showEdit"
                    placeholder="请输入内容"
                  ></el-input>
                  <span v-show="!scope.row.showEdit">{{scope.row.address}}</span>
                </template>
              </el-table-column>

              <el-table-column prop="email" label="邮箱">
                <template slot-scope="scope">
                  <el-input
                    size="small"
                    v-model="scope.row.email"
                    v-show="scope.row.showEdit"
                    placeholder="请输入内容"
                  ></el-input>
                  <span v-show="!scope.row.showEdit">{{scope.row.email}}</span>
                </template>
              </el-table-column>

              <el-table-column label="操作" width="250px">
                <template slot-scope="scope">
                  <el-button
                    size="small"
                    class="btn bg_green"
                    @click="handleEdit(scope.$index, scope.row)"
                  >{{scope.row.showEdit?'保存':"编辑"}}</el-button>
                  <el-button
                    size="mini"
                    :disabled="scope.$index===0"
                    @click="moveUp(scope.$index,scope.row)"><i class="el-icon-arrow-up"></i></el-button>
                  <el-button
                    size="mini"
                    :disabled="scope.$index===(writers.length-1)"
                    @click="moveDown(scope.$index,scope.row)"><i class="el-icon-arrow-down"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-dialog>



          <el-form-item prop="file" v-model="registerForm.file">
            <!--<input type="file"  accept="application/pdf" @change="getFile($event)">-->
            <a href="javascript:" class="test">选择文件
              <input type="file" accept="application/pdf">
            </a>
          </el-form-item>
          <el-button type="primary" style="width: 40%;background: #afb4db;border: none" v-on:click="handIn(registerForm)">handin</el-button>
        </el-form>
      </div>
    </el-tab-pane>
    <el-tab-pane label="更功能">暂无</el-tab-pane>
  </el-tabs>
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
        dialogTableVisible: false,
        writers:[
          {
            email: '',
            name: '',
            job: '',
            address: '',
            showEdit: false
          },
          {
            email: '',
            name: '',
            job: '',
            address: '',
            showEdit: false
          },
          {
            email: '',
            name: '',
            job: '',
            address: '',
            showEdit: false
          }],
        userName: "",
        userId: "",

        registerForm: {
          username: '',
          password: '',
           file:'',
        },
        rules: {
          // blur 失去鼠标焦点时触发验证
          username: [{required: true, message: '请输入文章标题', trigger: 'blur'}, {validator: checkname, trigger: 'blur'}],
          password: [{required: true, message: '请填写文章摘要', trigger: 'blur'}, {validator: checkpassword, trigger: 'blur'}],
          pdf: [{required: true, message: '请选择pdf文件', trigger: 'blur'}, {validator: dataValid, trigger: 'blur'}],
        },
        loading: false
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        row.showEdit = !row.showEdit;
        if (!row.showEdit) {
          console.log("提交");
          console.log(row);
        }
      },
      userTypeChange() {
      },
      moveUp(index,row){
        var that = this;
        console.log('上移',index,row);
        console.log(that.writers[index]);
        if (index > 0) {
          let upDate = that.writers[index - 1];
          that.writers.splice(index - 1, 1);
          that.writers.splice(index,0, upDate);
        } else {
          alert('已经是第一条，不可上移');
        }
      },

      //下移
      moveDown(index,row){
        var that = this;
        console.log('下移',index,row);
        if ((index + 1) === that.writers.length){
          alert('已经是最后一条，不可下移');
        } else {
          console.log(index);
          let downDate = that.writers[index + 1];
          that.writers.splice(index + 1, 1);
          that.writers.splice(index,0, downDate);
        }
      },
      handIn(formname){
        // alert(this.$store.state.userDetail.username);
        let formData = new FormData();
        formData.append('title', this.registerForm.username);
        formData.append('summary', this.registerForm.password);
        formData.append('file', document.querySelector('input[type=file]').files[0]);
        formData.append('username',this.$store.state.userDetail.username);
        formData.append('conferenceFullname',this.$store.state.nowconference.fullName);
        formData.append('writers',this.writers);
        this.$refs[formname].validate(valid => {
        if(valid){
          this.$axios({
            url: '/sendPaper',   //****: 你的ip地址
            data: formData,
            method: 'post',
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          }).then((resp) => {
            alert(this.$store.state.userDetail.username);
            if (resp.status === 200) {
              alert('提交成功')
            }
            else
              alert('提交失败')
          }) // 发送请求


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
    height: 100%;
    width: 100%;
    background-size: cover;
    position: relative;
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
  .test {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
  }
  .test input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
  .test:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
  }
</style>
