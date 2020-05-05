<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="我分配到的稿件">
        <div  class="text item">
          <el-table :data=" papers" style="width: 100%">
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
              <el-table-column label="是否审批过" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{finishs[scope.$index]}}</span>
                </template>
              </el-table-column>
              <el-table-column label="注释" width="180">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">true：已审阅；false:待审批</span>
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">

                  <el-button size="mini" >
                    在线预览</el-button>

                  <el-button size="mini" >
                    下载pdf</el-button>
                  <el-button type="primary"
                             style="width: 40%;background: #afb4db;border: none"
                             v-if="!finishs[scope.$index]"
                             v-on:click="nowPaper(scope.row)">去审稿
                  </el-button>
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
          id:0,
        }],
        finishs:[],
      }


        },
      methods:{
          nowPaper(paper){
            this.$store.commit('nowpaper',paper);
            this.$router.replace({path:'/submitReview'})
          }


      },

      created(){
          this.$axios.post('/myDistribution',{
          username:this.$store.state.userDetail.username,
        })
          .then(resp => {
              if (resp.status === 200) {
                console.log(resp.data);
                this.papers = resp.data.papers;
                this.finishs=resp.data.finishs;

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
