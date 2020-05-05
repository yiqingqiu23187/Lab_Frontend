<template>
  <el-tabs type="border-card">
    <el-tab-pane label="具体详情">
      <!--//这里是列表-->
      <el-card class="box-card">
        <div class="text item">
          <p>稿件名：  {{nowpaper.name }}</p>
          <p>评分一：  {{nowpaper.score1 }}</p>
          <p>评分二：  {{nowpaper.score2 }}</p>
          <p>评分三：  {{nowpaper.score3 }}</p>
          <p>confidence1：  {{nowpaper.confidence1 }}</p>
          <p>confidence2：  {{nowpaper.confidence2 }}</p>
          <p>confidence3：  {{nowpaper.confidence3 }}</p>
          <p>评语一：  {{nowpaper.review1 }}</p>
          <p>评语二：  {{nowpaper.review2 }}</p>
          <p>评语三：  {{nowpaper.review3 }}</p>


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
            nowpaper:{
              name:'',
              score1:'',
              score2:'',
              score3:'',
              confidence1:'',
              confidence2:'',
              confidence3:'',
              review1:'',
              review2:'',
              review3:'',
            },
          }
      },
      created:
      function () {
        // this.nowpaper=this.$store.state.nowpaper;
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
