<template>
  <div id="myApplication">
    我是消息</div>
    <!--<ul>-->
      <!--<li v-for="application in myApplication" :key="application.name">-->
        <!--{{application.name}}:-->
        <!--state:{{application.state}},-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->
  <!--<div id="myContribution">-->

    <!--<ul>-->
      <!--<li v-for="contribution in myContribution" :key="contribution.name">-->
        <!--{{contribution.name}}:-->
        <!--state:{{contribution.state}},-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->
  <!--<div id="received">-->

    <!--<ul>-->
      <!--<li v-for="received in receivedInvitation" :key="received.name">-->
        <!--{{received.name}}:-->
        <!--&lt;!&ndash;state:{{contribution.state}}, 这个地方应该是button&ndash;&gt;-->
      <!--</li>-->
    <!--</ul>-->
  <!--</div>-->
</template>

<script>
    export default {
        name: "news",
      data(){
        return{
          // myApplication:this.$store.state.myApplication,
          // myContribution:this.$store.state.myContribution,
          // receivedInvitation:this.$store.state.receivedInvitation
        }
      },
      // created:function () {
      //   this.$axios.post('myNews',{
      //     username:localStorage.getItem('userDetails').username
      //   })
      //     .then(resp=>{
      //       this.$store.commit('myNews', resp.data)
      //     })
      //     .catch(error=>{
      //       console.log(error)
      //       alert('querynews error')
      //     })
      // }
    }
</script>

<style scoped>

</style>
