<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane label="稿件讨论">
        稿件讨论：

        <el-table :data="comments" style="width: 100%">
          <el-table-column label="所有评论" width="180">
            <el-table-column label="名称" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.fullName }}</span>
              </template>
            </el-table-column>
            <el-table-column label="用户名" width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.username }}</span>
              </template>
            </el-table-column>
            <el-table-column label="内容" width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.comment}}</span>
              </template>
            </el-table-column>
          </el-table-column>
        </el-table>


        <!--<el-button  v-if="this.number != 0">修改评审结果</el-button>-->


        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="帖子：">
            <el-input v-model="formInline.information" placeholder="内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addComment()">发帖</el-button>
          </el-form-item>
        </el-form>


      </el-tab-pane>
      <el-tab-pane label="更多功能">敬请期待</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import ElButton from "element-ui/packages/button/src/button";

    export default {
      components: {ElButton},
      name: "talking",

      data(){
          return{
            formInline: {
             information:'',
            },

            comments:[{username:'',comment:'',conferenceFullname:'',paperTitle:''}],
            number:this.$store.state.nownumber,
          }
      },
      methods:{
        addComment(){
          this.comments.push({username:this.$store.state.userDetail.username,comment:this.formInline.information,
            conferenceFullname:this.$store.state.nowpaper.conferenceFullname,
            paperTitle:this.$store.state.nowpaper.title
          });

         this.$axios.post('/addComment',{
           paperTitle:this.$store.state.nowpaper.title,
           conferenceFullname:this.$store.state.nowpaper.conferenceFullname,
           username:this.$store.state.userDetail.username,
           comment:this.formInline.information,
         })
           .then(resp => {
             if (resp.status === 200) {
               this.$message({
                 message: '评论成功！',
                 type: 'success'
               });
             }
           })
           .catch(error => {
             console.log(error)
             console.log(error.message)
             this.$message.error('评论失败');
           })
          this.formInline.information='';
        }
      },
      created:
        function(){
          this.$axios.post('/getComment',{

            id:this.$store.state.nowpaper.id

          })
            .then(resp => {
              if (resp.status === 200) {
                if(resp.data.comments == null){
                  this.$message({
                    message: '获取成功！',
                    type: 'success'
                  });
                }else{
                  this.comments = resp.data.comments;
                }

              } else {
                this.$message.error('获取帖子失败');
              }
            })
            .catch(error => {
              console.log(error);
              this.$message.error('获取帖子失败');
            })
        }
    }
</script>

<style scoped>
</style>
