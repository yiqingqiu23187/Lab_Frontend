<template>
  <div  class="text item">
    <el-tabs type="border-card">
      <el-tab-pane label="会议详情">
        <div  class="text item">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="此会议" width="180">
              <el-table-column label="名称" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="信息" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.data }}</span>
                </template>
              </el-table-column>

              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="会议功能">
        <el-button v-if="this.role.chair != ''" @click="openwriting">开启投稿</el-button>
        <el-button v-if="this.role.chair != ''" @click="jump">邀请成员</el-button>
        <el-button v-if="this.role.author != ''">查看投稿</el-button>
        <el-button v-if="this.role.chair == ''&& this.role.author == ''" @click="beauthor">我要投稿</el-button>

      </el-tab-pane>
      <el-tab-pane label="更多设置">敬请期待</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";

    export default {
      components: {ElButton},
      name: "conference-detail",
      data(){
          return{
            role:{
              chair:'',
              member:'',
              author:'',
              tourist:'',
            },

            tableData:[
              {name:'会议名称 ：',data:this.$store.state.nowconference.fullName},
              {name:'名称缩写 ：',data:this.$store.state.nowconference.abbr},
              {name:'会议主席 ：',data:this.$store.state.nowconference.chair},
              {name:'举办地点 ：',data:this.$store.state.nowconference.holdPlace},
              {name:'举办日期 ：',data:this.$store.state.nowconference.holdDate},
              {name:'截止投稿 ：',data:this.$store.state.nowconference.submissionDeadline},
              {name:'会议结束 ：',data:this.$store.state.nowconference.releaseDate},
            ],
         }//return
      },//data



      methods:{
        openwriting() {
          this.$axios.post('/openConference', {
            chair: this.$store.state.userDetail.username,
            conferenceFullname: this.$store.state.conferencefullName,
            openOrNot: true,
          })
            .then(resp => {
                if (resp.status === 200) {
                  alert('会议已开启')
                }
                else
                  alert('会议开启失败')
              }
            )
            .catch(error => {
              console.log(error);
            })
        },
        jump() {
          this.$router.replace({path: '/search'})
        },
        beauthor(){
          this.$router.replace({path: '/handInWriting'})
        }
      },


      created:
      function () {
        this.nowconference=this.$store.state.nowconference;
        this.role.chair=this.$store.state.myrole.chair;
        this.role.member=this.$store.state.myrole.member;
        this.role.author=this.$store.state.myrole.author;
        this.role.tourist=this.$store.state.myrole.tourist;


      }
    }
</script>

<style scoped>

</style>
