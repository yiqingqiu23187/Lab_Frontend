<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="我分配到的稿件">
        <div  class="text item">
          <el-table :data="papers" style="width: 100%">
            <el-table-column label="所有稿件" width="180">
              <el-table-column label="文章标题" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.title}}</span>
                </template>
              </el-table-column>
              <el-table-column label="文章摘要" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.summary}}</span>
                </template>
              </el-table-column>
              <el-table-column label="文章所处状态" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.state}}</span>
                </template>
              </el-table-column>
              <el-table-column label="注释" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">0:待审稿；1：已审稿</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" >
                    在线预览</el-button>
                  <el-button size="mini" >
                    下载pdf</el-button>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>

      <el-tab-pane label="更多功能"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
        name: "checkPaper",
      data(){
      return {
        papers:[{
          username:'',
          conferenceFullname:'',
          title:'',
          summary:'',
          writerEmail:[],
          writerName:[],
          writerJob:[],
          writerAddress:[],
          topics:[],
        }],
      }
        },

      created(){
         this.$axios.post('/myDistribution',{
          username:this.$store.state.userDetail.username,
          conferenceFullname:this.$store.state.nowconference.fullName,
        })
          .then(resp => {
              if (resp.status === 200) {
                this.papers = resp.data.papers;
              }
              else
                alert('show error')
            }
          )
          .catch(error => {
            console.log(error);
          });
      }
    }
</script>

<style scoped>

</style>
