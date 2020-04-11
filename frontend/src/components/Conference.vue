<template>
  <div>我是会议</div>
  <!--<div id="mychair">-->

    <!--<ul>-->
      <!--<li v-for="chair in chairconference" :key="chair.name">-->
        <!--Fullname:{{chair.fullname}}:-->
        <!--Abbr:{{chair.abbr}},-->
        <!--Holddate:{{chair.holdDate}},-->
        <!--Holdplace : {{chair.holdPlace}}-->
        <!--Release_date:{{chair.releaseDate}},-->
        <!--Submission_deadline:{{chair.submissionDeadline}},-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->
  <!--<div id="mypc">-->

    <!--<ul>-->
      <!--<li v-for="pc in pcconference" :key="pc.name">-->
        <!--{{pc.name}}:-->
        <!--Abbr:{{pc.abbr}},-->
        <!--Fullname:{{pc.fullname}},-->
        <!--Holddate:{{pc.holdDate}},-->
        <!--Holdplace : {{pc.holdPlace}}-->
        <!--Release_date:{{pc.releaseDate}},-->
        <!--Submission_deadline:{{pc.submissionDeadline}},-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->
  <!--<div id="myauthor">-->

    <!--<ul>-->
      <!--<li v-for="author in authorconference" :key="author.name">-->
        <!--{{author.name}}:-->
        <!--Abbr:{{author.abbr}},-->
        <!--Fullname:{{author.fullname}},-->
        <!--Holddate:{{author.holdDate}},-->
        <!--Holdplace : {{author.holdPlace}}-->
        <!--Release_date:{{author.releaseDate}},-->
        <!--Submission_deadline:{{author.submissionDeadline}},-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->

</template>

<script>
    import ElMain from "element-ui/packages/main/src/main";

    export default {
      components: {ElMain},
      name: "conference",
      data(){
        return{
          // chairConference:JSON.parse(this.$store.state.chairConference),
          // pcconference:JSON.parse(this.$store.state.pcConference),
          // authorconference:JSON.parse(this.$store.state.authorConference)

        }
      },
      // created:function () {
      //   this.$axios.post('myConference',{
      //     username:JSON.parse(localStorage.getItem('userDetails')).username
      //   })
      //     .then(resp=>{
      //       this.$store.commit('myConference', resp.data)
      //   })
      //     .catch(error=>{
      //       console.log(error)
      //       alert('queryconference error')
      //     })
      // }
    }

</script>

<style scoped>
</style>
