<template>
  <el-tabs type="border-card">
    <el-tab-pane label="具体详情">
      <!--//这里是列表-->
      <el-card class="box-card">
        <div class="text item">
          <p>稿件名：  {{nowmark.markTitle }}</p>
          <p>评分一：  {{nowmark.scores[0] }}</p>
          <p>评分二：  {{nowmark.scores[1] }}</p>
          <p>评分三：  {{nowmark.scores[2] }}</p>
          <p>confidence1：  {{nowmark.confidences[0] }}</p>
          <p>confidence2：  {{nowmark.confidences[1] }}</p>
          <p>confidence3：  {{nowmark.confidences[2] }}</p>
          <p>评语一：  {{nowmark.discribes[0] }}</p>
          <p>评语二：  {{nowmark.discribes[1]}}</p>
          <p>评语三：  {{nowmark.discribes[2] }}</p>


        </div>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="更多功能">敬请期待</el-tab-pane>

  </el-tabs>
</template>

<script>
    export default {
        name: "assessment-detail",
      data(){
          return{
            nowmark:{
              paperTitle:'',
              conferenceFullname:'',
              pcmembers:[],
              finish:[],
              scores:[],
              confidences:[],
              discribes:[],
            },
          }
      },
      created:
      function () {
        this.nowmark=this.$store.state.nowmark;
      }
    }

</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
