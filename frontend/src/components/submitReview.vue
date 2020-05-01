<template>
  <el-tabs type="border-card">
    <el-tab-pane label="提交审批">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="稿件评分" prop="region">
          <el-select v-model="ruleForm.score" placeholder="请选择稿件评分">
            <el-option label="-2 ：reject" value="-2"></el-option>
            <el-option label="-1 ：weak reject" value="-1"></el-option>
            <el-option label="1 ：weak accept" value="1"></el-option>
            <el-option label="2 ：accept" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="confidence" prop="region">
          <el-select v-model="ruleForm.confidence" placeholder="请选择confidence">
            <el-option label="very low" value="-2"></el-option>
            <el-option label="low" value="-1"></el-option>
            <el-option label="high" value="1"></el-option>
            <el-option label="very high" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="稿件评语" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>

          <el-button type="primary" @click="submitForm('ruleForm')">提交审批</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>

    </el-tab-pane>
    <el-tab-pane label="更多功能">敬请期待</el-tab-pane>
  </el-tabs>

</template>

<script>
    export default {
        name: "submit-review",
        data() {
          return {
            ruleForm: {
              score:'',
              confidence:'',
              // name: '',
              // region: '',
              // date1: '',
              // date2: '',
              // delivery: false,
              // type: [],
              // resource: '',
              desc: ''
            },
            rules: {
              score: [
                { required: true, message: '请选择稿件评分', trigger: 'change' }
              ],
              confidence: [
                { required: true, message: '请选择confidence', trigger: 'change' }
              ],
              desc: [
                { required: true, message: '请填写稿件评语', trigger: 'blur' },
                { min: 1, max: 500, message: '长度在 1 到 500 个字符', trigger: 'blur' }
              ]
            }
          };
        },
        methods: {
          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                this.$axios.post('/submitReview',{
                  score:this.ruleForm.score,
                  confidence:this.ruleForm.confidence,
                  desc:this.ruleForm.desc,
                  }
                )
                  .then(resp => {
                    // 根据后端的返回数据修改
                    if(resp.status === 200 ) {
                      // 跳转到login
                      alert('successful submitReview');
                      this.$router.replace('/home')
                    }else
                      alert('failed submit');

                  })
                  .catch(error => {
                    console.log(error);
                    alert('submit error(about submit review)')
                  })
              } else {
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        }
    }
</script>

<style scoped>

</style>
