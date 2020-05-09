<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="具体详情">
        <el-table :data="tableData" stripe style="width: 100%" class="position">
          <el-table-column prop="name" label="名称" width="380">
          </el-table-column>
          <el-table-column prop="value" label="信息" width="180">
          </el-table-column>

        </el-table>
      </el-tab-pane>
      <el-tab-pane label="更多功能">敬请期待</el-tab-pane>

    </el-tabs>
  </div>

</template>

<script>
    export default {
        name: "assessment-detail",
      data(){
          return{
            tableData:[{
              name:'稿件名 ：',
              value:this.$store.state.nowmark.paperTitle
            },{
              name:'得分一 ：',
              value:this.$store.state.nowmark.scores[0]
            },{
              name:'得分二 ：',
              value:this.$store.state.nowmark.scores[1]
            },{
              name:'得分三 ：',
              value:this.$store.state.nowmark.scores[2]
            },{
              name:'confidence1 :',
              value:this.$store.state.nowmark.confidences[0]
            },{
              name:'confidence2 :',
              value:this.$store.state.nowmark.confidences[1]
            },{
              name:'confidence3 :',
              value:this.$store.state.nowmark.confidences[2]
            },{
              name:'评语一 ：',
              value:this.$store.state.nowmark.discribes[0]
            },{
              name:'评语二 ：',
              value:this.$store.state.nowmark.discribes[1]
            },{
              name:'评语三 ：',
              value:this.$store.state.nowmark.discribes[2]
            },],

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
  .position{
    margin-left: 5%;
  }
</style>
