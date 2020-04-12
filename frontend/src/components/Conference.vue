<template>
  <div>
  <div id="mychair">
    <h1>我创建的会议：</h1>
    <ul>
      <li v-for="chair in chairconference" :key="chair.fullname">

        Fullname:{{chair.fullname}}:
        Abbr:{{chair.abbr}},
        Holddate:{{chair.holdDate}},
        Holdplace : {{chair.holdPlace}}
        Release_date:{{chair.releaseDate}},
        Submission_deadline:{{chair.submissionDeadline}},
      </li>
    </ul>
  </div>
  <div id="mypc">
    <h1>我是成员的会议：</h1>
    <ul>
      <li v-for="pc in pcconference" :key="pc.fullname">
        Fullname:{{pc.fullname}}
        Abbr:{{pc.abbr}},
        Holddate:{{pc.holdDate}},
        Holdplace : {{pc.holdPlace}}
        Release_date:{{pc.releaseDate}},
        Submission_deadline:{{pc.submissionDeadline}},
      </li>
    </ul>
  </div>
  <div id="myauthor">
    <h1>我是作者的会议：</h1>
    <ul>
      <li v-for="author in authorconference" :key="author.fullname">
        Fullname:{{author.fullname}}:
        Abbr:{{author.abbr}},
        Holddate:{{author.holdDate}},
        Holdplace : {{author.holdPlace}}
        Release_date:{{author.releaseDate}},
        Submission_deadline:{{author.submissionDeadline}},
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
    import ElMain from "element-ui/packages/main/src/main";

    export default {
      components: {ElMain},
      name: "conference",
      computed:{
          chairconference:function(){
         return  this.$store.state.ChairConference},
          pcconference:function(){return this.$store.state.PCConference},
          authorconference:function(){return this.$store.state.authorConference}

      },
      created:function () {

        this.$axios.post('/myConference',{
          username:this.$store.state.userDetail.username
        },
        )
          .then(resp=>{

            this.$store.commit('myConference', resp.data)
            console.log(resp.data)
          })
          .catch(error=>{
            console.log(error)
            alert('queryconference error')
          })

      },
      // computed:{
      //   store:function () {
      //
      //
      //     return
      //   }
      // }

    }

</script>

<style scoped>
</style>
