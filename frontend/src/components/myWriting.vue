<template>
  <div  class="text item">
    <el-tabs type="border-card">
      <el-tab-pane label="稿件一">
        <div  class="text item">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="稿件一" width="180">
              <el-table-column label="名称" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>
              <el-table-column label="信息" width="180">
                <template slot-scope="scope">
                  {{ scope.row.name ==='文章标题 ：' ? papers[0].title : '' }}
                  {{ scope.row.name ==='文章摘要 ：' ? papers[0].summary : '' }}
                  {{ scope.row.name ==='文件 ：' ? papers[0].file : '' }}
                </template>
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <!--<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
                </template>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="稿件二">敬请期待</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: "my-writing",
    data() {
      return {
        tableData:[
          {name:'文章标题 ：',data:"s"},
          {name:'文章摘要 ：',data:"S"},
          {name:'文件 ：',data:"S"},
        ],
        papers:[{
          title:'',
          summary:'',
          file:'',
        }]
      }
    },
    created(){
      this.$axios.post('/myPaper',{
        username:this.$store.state.userDetail.username,
        conferenceFullname:this.$store.state.nowconference.fullName,
      })
        .then(resp => {
            if (resp.status === 200) {
              this.papers=resp.data.papers;
            }
            else
              alert('show error')
          }
        )
        .catch(error => {
          console.log(error);
        })
    }


  }
</script>

<style scoped>

</style>
