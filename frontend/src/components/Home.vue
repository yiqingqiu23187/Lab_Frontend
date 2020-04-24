<template>

  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="功能板块">
        <el-row>
          <el-col :span="8" >
            <el-card :body-style="{ padding: '0px' }" >
              <img src="../assets/板块图片/个人2.jpg" class="image">
              <div style="padding: 14px;">
                <span>个人信息</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time><br>
                  <el-button type="text" class="button"><router-link to="Information">点此查看</router-link></el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8" >
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/板块图片/我的会议.jpg" class="image">
              <div style="padding: 14px;">
                <span>我的会议</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time><br>
                  <el-button type="text" class="button"><router-link to="Conference">点此查看</router-link></el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8" >
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/板块图片/会议申请.jpg" class="image">
              <div style="padding: 14px;">
                <span>申请会议</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time><br>
                  <el-button type="text" class="button"><router-link to="applyConference">点此查看</router-link></el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8" >
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/板块图片/所有3.jpg" class="image">
              <div style="padding: 14px;">
                <span>所有会议</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time><br>
                  <el-button type="text" class="button"><router-link to="allConference">点此查看</router-link></el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8" >
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/板块图片/会议查询.jpg" class="image">
              <div style="padding: 14px;">
                <span>查找会议</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time><br>
                  <el-button type="text" class="button"><router-link to="Information">点此查看</router-link></el-button>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8" >
            <el-card :body-style="{ padding: '0px' }">
              <img src="../assets/板块图片/消息中心.jpg" class="image">
              <div style="padding: 14px;">
                <span>消息中心</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time><br>
                  <el-button type="text" class="button"><router-link to="News">点此查看</router-link></el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="更多功能">敬请期待</el-tab-pane>

    </el-tabs>
  </div>

</template>

<script>
    export default {
        name: "home",
      data(){
          return{
            currentDate: new Date()
          }
      }
    }
</script>

<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  /*.el-col-8*/
  .el-row >>> .el-col-8{
    width:25%;
    margin-right: 4%;
    margin-right: 4%;
   margin-top: 30px;
  }
</style>
